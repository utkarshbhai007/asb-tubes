"use client";
import React, { useState, useEffect, useRef } from "react";

export default function SocialUpdatesPage() {
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'posts', 'reels'
  const [posts, setPosts] = useState([]);
  const [isLive, setIsLive] = useState(false);
  const [loading, setLoading] = useState(true);
  const fbContainerRef = useRef(null);
  const fbScalerRef = useRef(null);

  // Responsively scale the 500px-wide Facebook iframe to fit the container
  useEffect(() => {
    const IFRAME_WIDTH = 500;
    const IFRAME_HEIGHT = 800;
    function applyScale() {
      if (!fbContainerRef.current || !fbScalerRef.current) return;
      const containerWidth = fbContainerRef.current.offsetWidth;
      const scale = Math.min(1, containerWidth / IFRAME_WIDTH);
      fbScalerRef.current.style.transform = `scale(${scale})`;
      fbScalerRef.current.style.width = `${IFRAME_WIDTH}px`;
      fbScalerRef.current.style.height = `${IFRAME_HEIGHT}px`;
      // Shrink the container height to match scaled content
      fbContainerRef.current.style.height = `${IFRAME_HEIGHT * scale}px`;
    }
    applyScale();
    const ro = new ResizeObserver(applyScale);
    if (fbContainerRef.current) ro.observe(fbContainerRef.current);
    window.addEventListener("resize", applyScale);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", applyScale);
    };
  }, []);

  const fallbackPosts = [
    {
      id: 1,
      type: "post",
      image: "/images/5k_followers.png",
      likes: "1,280",
      comments: "84",
      caption: "Thank You! FOR YOUR TRUST & SUPPORT WE'VE REACHED 5K FOLLOWERS! Stronger together! Prime manufacturer of stainless steel pipes and tubes of various sizes and grades. 🏭🎉 #asbtubes #5k #followers #manufacturing #growth",
      url: "https://www.instagram.com/asbtubes",
    },
    {
      id: 2,
      type: "reel",
      image: "/images/Mill-1_new.jpg",
      likes: "840",
      comments: "62",
      caption: "Inside ASB Tubes: Continuous high-speed TIG welding and automated tube forming on Mill 1 at our Kadi plant. 🎥⚡ #tubemill #tigwelding #automation #reels #asbtubes",
      url: "https://www.instagram.com/asbtubes",
    },
    {
      id: 3,
      type: "post",
      image: "/images/ASB-TUBES-MOU-23-24.jpg",
      likes: "512",
      comments: "39",
      caption: "ASB Tubes signing strategic MOU for expanding production facilities to 72,000 MT per annum. Building tomorrow's industrial infrastructure. 📜🖋️ #mou #expansion #infrastructure #asbtubes",
      url: "https://www.instagram.com/asbtubes",
    },
    {
      id: 4,
      type: "post",
      image: "/images/tubes.png",
      likes: "630",
      comments: "41",
      caption: "Quality you can trust! Premium SS tubes stacked, bundled, and ready for dispatch to our global clients. 🚢📦 #qualityassurance #pipes #tubes #exports #asbtubes",
      url: "https://www.instagram.com/asbtubes",
    },
    {
      id: 5,
      type: "reel",
      image: "/images/worker.png",
      likes: "920",
      comments: "73",
      caption: "Meet our skilled engineers and operators on the factory floor! Precision engineering driven by human dedication. 👥💪 #teamwork #reels #engineering #asbtubes",
      url: "https://www.instagram.com/asbtubes",
    },
    {
      id: 6,
      type: "post",
      image: "/images/heat-exchanger.jpg",
      likes: "445",
      comments: "28",
      caption: "Specially engineered heat-exchanger tubes undergoing 100% eddy-current quality testing before shipment. 🔍🔬 #qualitycontrol #heatexchanger #nondestructivetesting #asbtubes",
      url: "https://www.instagram.com/asbtubes",
    },
  ];

  useEffect(() => {
    async function fetchFeed() {
      try {
        const response = await fetch("/api/instagram-feed");
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.posts && data.posts.length > 0) {
            // Route all image URLs through our server-side proxy to bypass Instagram hotlinking
            const proxiedPosts = data.posts.map((post) => ({
              ...post,
              image: post.image && !post.image.startsWith("/")
                ? `/api/image-proxy?url=${encodeURIComponent(post.image)}`
                : post.image,
            }));
            setPosts(proxiedPosts);
            setIsLive(true);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.error("Error fetching Instagram live feed:", err);
      }
      // Fallback
      setPosts(fallbackPosts);
      setIsLive(false);
      setLoading(false);
    }
    fetchFeed();
  }, []);

  const filteredPosts = activeTab === "all" ? posts : posts.filter(post => post.type === activeTab);

  return (
    <main className="social-updates-page">
      {/* Hero Section */}
      <section className="social-hero">
        <div className="social-hero-overlay"></div>
        <div className="container">
          <div className="social-hero-content">
            <h1 className="social-title">Social Updates</h1>
            <p className="social-subtitle">
              Stay connected with ASB Tubes. Follow our latest industrial insights, manufacturing highlights, and updates in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="social-content-section">
        <div className="container">
          <div className="social-dashboard-grid">
            
            {/* Left Column: Instagram Showcase */}
            <div className="social-column instagram-showcase">
              <div className="feed-header-wrapper">
                <div className="social-channel-tag-row">
                  <div className="social-channel-tag instagram-color">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="channel-icon"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    <span>Instagram Showcase</span>
                  </div>
                  <div className={`status-badge ${loading ? "status-loading" : isLive ? "status-live" : "status-fallback"}`}>
                    {loading ? (
                      <>
                        <span className="pulse-dot status-loading-dot"></span>
                        <span>Connecting feed...</span>
                      </>
                    ) : isLive ? (
                      <>
                        <span className="pulse-dot status-live-dot"></span>
                        <span>Live Feed Connected</span>
                      </>
                    ) : (
                      <>
                        <span className="warning-dot"></span>
                        <span>Curated Showcase Feed</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Real Profile Header — stats verified from @asbtubes */}
                <div className="insta-profile-header">
                  <div className="insta-avatar">
                    <img src="/images/logo.png" alt="ASB Tubes Logo" />
                  </div>
                  <div className="insta-profile-info">
                    <div className="insta-username-row">
                      <h2 className="insta-username">asbtubes</h2>
                      <span className="verified-badge" title="Verified Profile">✓</span>
                      <a href="https://www.instagram.com/asbtubes" target="_blank" rel="noopener noreferrer" className="insta-follow-btn">
                        Follow
                      </a>
                    </div>
                    <div className="insta-stats-row">
                      <span><strong>295</strong> posts</span>
                      <span><strong>4,582</strong> followers</span>
                      <span><strong>21</strong> following</span>
                    </div>
                    <div className="insta-category">Commercial &amp; Industrial</div>
                    <p className="insta-bio">
                      Prime manufacturer of stainless steel pipes and tubes of various sizes and grades 🏭<br />
                      <a href="https://www.asbtubes.com" target="_blank" rel="noopener noreferrer" className="bio-link">🔗 www.asbtubes.com</a>
                    </p>
                  </div>
                </div>

                {/* Tab Filters */}
                <div className="insta-tabs">
                  <button className={`insta-tab-btn ${activeTab === "all" ? "active" : ""}`} onClick={() => setActiveTab("all")}>
                    <span className="tab-icon">▦</span> ALL POSTS
                  </button>
                  <button className={`insta-tab-btn ${activeTab === "posts" ? "active" : ""}`} onClick={() => setActiveTab("posts")}>
                    <span className="tab-icon">📄</span> POSTS
                  </button>
                  <button className={`insta-tab-btn ${activeTab === "reels" ? "active" : ""}`} onClick={() => setActiveTab("reels")}>
                    <span className="tab-icon">▶</span> REELS
                  </button>
                </div>
              </div>

              {/* Instagram Feed Grid or Live Widget */}
              {process.env.NEXT_PUBLIC_INSTAGRAM_WIDGET_URL ? (
                <div className="insta-widget-container">
                  <iframe
                    src={process.env.NEXT_PUBLIC_INSTAGRAM_WIDGET_URL}
                    className="insta-live-iframe"
                    style={{ width: "100%", height: "800px", border: "none", borderRadius: "12px", overflow: "hidden" }}
                    scrolling="no"
                    allowTransparency={true}
                  ></iframe>
                </div>
              ) : (
                <div className="insta-grid">
                  {filteredPosts.map((post) => (
                    <a href={post.url} target="_blank" rel="noopener noreferrer" key={post.id} className="insta-card-wrapper">
                      <div className="insta-card">
                        <div className="insta-card-image">
                          <img src={post.image} alt={post.caption} className="insta-img" />
                          {post.type === "reel" && (
                            <div className="reel-badge" title="Instagram Reel">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                            </div>
                          )}
                          <div className="insta-overlay">
                            <div className="insta-overlay-metrics">
                              <span className="metric">
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                                {post.likes}
                              </span>
                              <span className="metric">
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>
                                {post.comments}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="insta-card-caption">
                          <p className="caption-text">{post.caption}</p>
                          <span className="view-link">View on Instagram &rarr;</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {/* View Profile CTA */}
              <div className="text-center mt-5">
                <a href="https://www.instagram.com/asbtubes" target="_blank" rel="noopener noreferrer" className="btn-solid-insta">
                  View Profile on Instagram
                </a>
              </div>
            </div>

            {/* Right Column: Facebook Live Timeline */}
            <div className="social-column facebook-timeline">
              <div className="feed-header-wrapper">
                <div className="social-channel-tag facebook-color">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="channel-icon"><path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.9.2-1.2 1-1.2h2V2h-3c-2.5 0-4 1.2-4 3.8V8z"></path></svg>
                  <span>Facebook Live Feed</span>
                </div>

                <div className="facebook-plugin-container" ref={fbContainerRef}>
                  {/* Responsive wrapper: scales the 500px FB iframe to fit any column width */}
                  <div className="fb-iframe-scaler" ref={fbScalerRef}>
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FASBtubes&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                      width="500"
                      height="800"
                      style={{ border: "none", overflow: "hidden" }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>
                </div>

                <div className="facebook-fallback-note">
                  <p>
                    💡 <strong>Not loading?</strong> High-privacy browser extensions or cookie settings might block embedded scripts. You can access the feed directly:
                  </p>
                  <a href="https://www.facebook.com/ASBtubes" target="_blank" rel="noopener noreferrer" className="btn-solid-fb mt-2">
                    Open Facebook Page
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        .social-updates-page {
          background-color: #f8fafc;
          color: #334155;
          min-height: 100vh;
        }

        /* Hero */
        .social-hero {
          position: relative;
          height: 40vh;
          min-height: 350px;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(0, 73, 133, 0.9) 100%), url('/images/manufacturing_process.jpg') center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 80px;
        }

        .social-hero-overlay {
          display: none;
        }

        .social-hero-content {
          position: relative;
          z-index: 2;
          color: white;
          text-align: center;
          padding: 0 20px;
        }

        .social-title {
          font-family: var(--font-oswald);
          font-size: 4rem;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 20px;
          color: #ffffff;
        }

        .social-subtitle {
          font-size: 1.25rem;
          max-width: 750px;
          margin: 0 auto;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 300;
        }

        /* Main Section */
        .social-content-section {
          padding: 80px 0 120px;
          background-color: #ffffff;
        }

        .social-dashboard-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .social-column {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(15, 23, 42, 0.06);
          padding: 30px;
        }

        .feed-header-wrapper {
          display: flex;
          flex-direction: column;
        }

        .facebook-plugin-container {
          width: 100%;
          overflow: hidden;
          border-radius: 16px;
          background: #ffffff;
        }

        .fb-iframe-scaler {
          position: relative;
          width: 500px;
          height: 800px;
          transform-origin: top left;
          /* JS sets --fb-scale via inline style; CSS fallback = 1 */
          transform: scale(var(--fb-scale, 1));
        }

        .social-channel-tag-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
          flex-wrap: wrap;
          gap: 10px;
          width: 100%;
        }

        .social-channel-tag {
          align-self: flex-start;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 20px;
          border: 1px solid transparent;
        }

        .status-loading {
          background-color: #f1f5f9;
          color: #64748b;
          border-color: #e2e8f0;
        }

        .status-live {
          background-color: #ecfdf5;
          color: #047857;
          border-color: #a7f3d0;
        }

        .status-fallback {
          background-color: #fffbeb;
          color: #b45309;
          border-color: #fde68a;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }

        .status-loading-dot {
          background-color: #64748b;
          animation: pulse 1.5s infinite ease-in-out;
        }

        .status-live-dot {
          background-color: #10b981;
          animation: pulse 1.5s infinite ease-in-out;
        }

        .warning-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          background-color: #f59e0b;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.9);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.6;
          }
        }

        .social-channel-tag .channel-icon {
          display: inline-block;
        }

        .instagram-color {
          background: rgba(225, 48, 108, 0.1);
          color: #e1306c;
        }

        .facebook-color {
          background: rgba(24, 119, 242, 0.1);
          color: #1877f2;
        }

        /* Simulated Instagram Header */
        .insta-profile-header {
          display: flex;
          gap: 25px;
          margin-bottom: 30px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          padding-bottom: 25px;
        }

        .insta-avatar {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          padding: 4px;
          border: 2px solid #e1306c;
          overflow: hidden;
          background: #ffffff;
          flex-shrink: 0;
        }

        .insta-avatar img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 50%;
        }

        .insta-profile-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .insta-username-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
                    font-family: var(--font-body);
        }

        .insta-username {
          font-size: 1.4rem;
          font-weight: 400;
          color: #262626;
          margin: 0;
          text-transform: lowercase;
        }

        .verified-badge {
          background-color: #0095f6;
          color: white;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: bold;
        }

        .insta-follow-btn {
          background-color: #0095f6;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 6px 16px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease;
          text-transform: none;
        }

        .insta-follow-btn:hover {
          background-color: #1877f2;
          color: white;
        }

        .insta-stats-row {
          display: flex;
          gap: 20px;
          font-size: 0.95rem;
          color: #262626;
        }

        .insta-bio {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #262626;
          margin: 0;
        }

        .insta-category {
          font-size: 0.82rem;
          color: #737373;
          margin: -4px 0 0;
        }

        .bio-link {
          color: #00376b;
          font-weight: 600;
        }

        .bio-link:hover {
          text-decoration: underline;
        }

        /* Instagram Tabs */
        .insta-tabs {
          display: flex;
          justify-content: center;
          border-top: 1px solid rgba(0, 0, 0, 0.08);
          margin-bottom: 25px;
          gap: 40px;
        }

        .insta-tab-btn {
          background: none;
          border: none;
          border-top: 2px solid transparent;
          color: #8e8e8e;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1px;
          padding: 12px 16px 0;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: -1px;
        }

        .insta-tab-btn:hover {
          color: #262626;
        }

        .insta-tab-btn.active {
          border-top-color: #262626;
          color: #262626;
        }

        .tab-icon {
          font-size: 1.1rem;
        }

        /* Instagram Grid */
        .insta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .insta-card-wrapper {
          display: block;
          color: inherit;
          text-decoration: none;
        }

        .insta-card {
          border-radius: 12px;
          overflow: hidden;
          background: #fafafa;
          border: 1px solid #e6e6e6;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .insta-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
        }

        .insta-card-image {
          position: relative;
          width: 100%;
          padding-top: 100%; /* 1:1 Aspect Ratio */
          overflow: hidden;
          background-color: #efefef;
        }

        .insta-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .insta-card:hover .insta-img {
          transform: scale(1.05);
        }

        .reel-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0, 0, 0, 0.6);
          color: white;
          padding: 4px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .insta-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 3;
        }

        .insta-card:hover .insta-overlay {
          opacity: 1;
        }

        .insta-overlay-metrics {
          display: flex;
          gap: 20px;
          color: white;
          font-weight: 700;
          font-size: 1rem;
        }

        .metric {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .insta-card-caption {
          padding: 15px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
        }

        .caption-text {
          font-size: 0.85rem;
          line-height: 1.4;
          color: #4b5563;
          margin-bottom: 12px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .view-link {
          font-size: 0.8rem;
          font-weight: 700;
          color: #e1306c;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Facebook Plugin Container */
        .facebook-plugin-container {
          display: flex;
          justify-content: center;
          background: #f0f2f5;
          padding: 15px;
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: inset 0 2px 8px rgba(0,0,0,0.03);
          margin-bottom: 20px;
        }

        .facebook-fallback-note {
          background-color: #f8fafc;
          border-left: 4px solid #1877f2;
          padding: 15px;
          border-radius: 0 8px 8px 0;
          font-size: 0.85rem;
          color: #4b5563;
        }

        .facebook-fallback-note p {
          margin: 0;
        }

        /* CTA Buttons */
        .btn-solid-insta {
          display: inline-block;
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          color: white !important;
          padding: 12px 30px;
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(225, 48, 108, 0.25);
          transition: all 0.3s ease;
        }

        .btn-solid-insta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(225, 48, 108, 0.4);
        }

        .btn-solid-fb {
          display: inline-block;
          background-color: #1877f2;
          color: white !important;
          padding: 10px 20px;
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(24, 119, 242, 0.2);
          transition: all 0.3s ease;
        }

        .btn-solid-fb:hover {
          background-color: #166fe5;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(24, 119, 242, 0.35);
        }

        /* Responsive Layout styling */
        @media (max-width: 1200px) {
          .social-dashboard-grid {
            grid-template-columns: 1.15fr 1fr;
            gap: 30px;
          }
          .insta-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 992px) {
          .social-dashboard-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .insta-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .social-hero .social-title {
            font-size: 3rem;
          }
        }

        @media (max-width: 768px) {
          .social-hero {
            height: 35vh;
            min-height: 280px;
          }
          .social-hero .social-title {
            font-size: 2.5rem;
          }
          .social-hero .social-subtitle {
            font-size: 1.1rem;
          }
          .social-column {
            padding: 20px;
          }
          .insta-profile-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 15px;
          }
          .insta-username-row {
            justify-content: center;
          }
          .insta-stats-row {
            justify-content: center;
          }
          .insta-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
          .insta-tabs {
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .insta-grid {
            grid-template-columns: 1fr;
          }
          .insta-tabs {
            gap: 10px;
          }
          .insta-tab-btn {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </main>
  );
}
