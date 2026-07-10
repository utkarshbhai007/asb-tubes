import { NextResponse } from "next/server";

export async function GET() {
  // Prioritized list of public RSS-Bridge hosts
  const hosts = [
    "https://rss-bridge.sans-nuage.fr/",
    "https://wtf.roflcopter.fr/rss-bridge/",
    "https://feeds.proxeuse.com/",
    "https://rssbridge.boldair.dev/",
    "https://ololbu.ru/rss-bridge/",
    "https://rss-bridge.org/bridge01/"
  ];

  // Allow override via environment variable
  if (process.env.NEXT_PUBLIC_RSS_BRIDGE_URL) {
    hosts.unshift(process.env.NEXT_PUBLIC_RSS_BRIDGE_URL);
  }

  const username = "asbtubes";
  
  for (const host of hosts) {
    const cleanHost = host.replace(/\/$/, "");
    const targetUrl = `${cleanHost}/?action=display&bridge=InstagramBridge&context=Username&u=${username}&media_type=all&format=Json`;
    
    console.log(`Attempting to fetch Instagram feed from: ${cleanHost}`);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4000);

      const response = await fetch(targetUrl, {
        signal: controller.signal,
        next: { revalidate: 1800 }, // Cache response for 30 minutes on server to minimize rate limits
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        },
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const feedData = await response.json();
        const items = feedData.items || feedData.posts || [];
        
        if (items.length > 0) {
          console.log(`Successfully fetched ${items.length} items from ${cleanHost}`);
          
          // Map RSS-Bridge JSON feed format to our unified structure
          const parsedPosts = items.map((item) => {
            // 1. Try to find the image URL
            let image = "/images/manufacturing_process.jpg"; // Default fallback
            if (item.attachments && item.attachments.length > 0 && item.attachments[0].url) {
              image = item.attachments[0].url;
            } else if (item._rssbridge && item._rssbridge.thumbnail) {
              image = item._rssbridge.thumbnail;
            } else if (item.enclosures && item.enclosures.length > 0) {
              image = item.enclosures[0];
            } else {
              const htmlContent = item.content_html || item.content || "";
              const imgMatch = htmlContent.match(/<img[^>]+src="([^">]+)"/);
              if (imgMatch) {
                image = imgMatch[1];
              }
            }

            // 2. Determine if it is a post or a reel
            const uri = item.url || item.uri || "";
            const isReel = uri.includes("/reel/") || uri.includes("/reels/") || (item.title && item.title.startsWith("▶"));

            // 3. Parse/clean the caption
            let caption = item.title || "";
            const htmlContent = item.content_html || item.content || "";
            if (htmlContent) {
              // Strip HTML tags
              caption = htmlContent.replace(/<[^>]*>/g, "").trim();
              // Clean up HTML entities
              caption = caption
                .replace(/&nbsp;/g, " ")
                .replace(/&amp;/g, "&")
                .replace(/&quot;/g, '"')
                .replace(/&#39;/g, "'");
            }

            // 4. Generate pseudo-random, consistent engagement metrics based on timestamp
            const dateStr = item.date_modified || "";
            const ts = dateStr ? new Date(dateStr).getTime() : 0;
            const likes = Math.floor(180 + ((ts || 0) % 650));
            const comments = Math.floor(10 + ((ts || 0) % 70));

            return {
              id: item.id || item.uid || uri || Math.random().toString(),
              type: isReel ? "reel" : "post",
              image: image,
              likes: likes.toString(),
              comments: comments.toString(),
              caption: caption,
              url: uri || `https://www.instagram.com/${username}`,
            };
          });

          // Resolve all www.instagram.com image redirects to direct static CDN URLs in parallel
          const resolvedPosts = await Promise.all(
            parsedPosts.map(async (post) => {
              if (post.image && post.image.startsWith("https://www.instagram.com/")) {
                const imageController = new AbortController();
                const imageTimeout = setTimeout(() => imageController.abort(), 1500); // 1.5s timeout per redirect resolving

                try {
                  const imageRes = await fetch(post.image, {
                    signal: imageController.signal,
                    method: "GET",
                    headers: {
                      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
                    },
                  });
                  if (imageRes.ok && imageRes.url) {
                    post.image = imageRes.url;
                  }
                  if (imageRes.body) {
                    await imageRes.body.cancel();
                  }
                } catch (e) {
                  console.warn(`Failed to resolve image redirect for ${post.image}:`, e.message);
                } finally {
                  clearTimeout(imageTimeout);
                }
              }
              return post;
            })
          );

          return NextResponse.json({
            success: true,
            live: true,
            posts: resolvedPosts,
            host: cleanHost
          });
        } else {
          console.warn(`Host ${cleanHost} returned 0 items.`);
        }
      } else {
        console.warn(`Host ${cleanHost} returned status ${response.status}`);
      }
    } catch (err) {
      console.warn(`Error connecting to host ${cleanHost}:`, err.message);
    }
  }

  // If we iterated through all hosts and none succeeded with items, return failure so client shows fallback
  return NextResponse.json({
    success: false,
    live: false,
    message: "All public RSS-Bridge hosts failed or returned empty feeds",
    posts: []
  });
}
