
"use client";
import React, { useEffect, useRef } from "react";

export default function ProductTables() {
  const tablesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    tablesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const tablesData = [{"title": "SS WELDED ROUND PIPES AND TUBES (ASTM A-312) - WEIGHT = KG/6METRE", "html": "<table id=\"tablepress-4\" className=\"tablepress tablepress-id-4\">\n<thead>\n<tr className=\"row-1 odd\">\n\t<th className=\"column-1\">Size / Thickness (Inch)</th><th className=\"column-2\">Size / Thickness (mm)</th><th className=\"column-3\">0.6 mm</th><th className=\"column-4\">0.8 mm</th><th className=\"column-5\">0.9 mm</th><th className=\"column-6\">1 mm</th><th className=\"column-7\">1.2 mm</th><th className=\"column-8\">1.5 mm</th><th className=\"column-9\">2 mm</th><th className=\"column-10\">3 mm</th>\n</tr>\n</thead>\n<tbody>\n<tr className=\"row-2 even\">\n\t<td className=\"column-1\">3/8\u201d</td><td className=\"column-2\">9.52</td><td className=\"column-3\">0.8</td><td className=\"column-4\">1.04</td><td className=\"column-5\">1.15</td><td className=\"column-6\">1.27</td><td className=\"column-7\">1.49</td><td className=\"column-8\">1.79</td><td className=\"column-9\">-</td><td className=\"column-10\">2.91</td>\n</tr>\n<tr className=\"row-3 odd\">\n\t<td className=\"column-1\">1/2\u201d</td><td className=\"column-2\">12.7</td><td className=\"column-3\">1.08</td><td className=\"column-4\">1.42</td><td className=\"column-5\">1.58</td><td className=\"column-6\">1.74</td><td className=\"column-7\">2.05</td><td className=\"column-8\">2.5</td><td className=\"column-9\">-</td><td className=\"column-10\">4.33</td>\n</tr>\n<tr className=\"row-4 even\">\n\t<td className=\"column-1\">5/8\u201d</td><td className=\"column-2\">15.8</td><td className=\"column-3\">1.36</td><td className=\"column-4\">1.79</td><td className=\"column-5\">2</td><td className=\"column-6\">2.2</td><td className=\"column-7\">2.61</td><td className=\"column-8\">3.19</td><td className=\"column-9\">4.1</td><td className=\"column-10\">5.72</td>\n</tr>\n<tr className=\"row-5 odd\">\n\t<td className=\"column-1\">3/4\u201d</td><td className=\"column-2\">19.05</td><td className=\"column-3\">1.65</td><td className=\"column-4\">2.17</td><td className=\"column-5\">2.43</td><td className=\"column-6\">2.69</td><td className=\"column-7\">3.19</td><td className=\"column-8\">3.92</td><td className=\"column-9\">5.1</td><td className=\"column-10\">7.17</td>\n</tr>\n<tr className=\"row-6 even\">\n\t<td className=\"column-1\">7/8\u201d</td><td className=\"column-2\">22.2</td><td className=\"column-3\">1.93</td><td className=\"column-4\">2.55</td><td className=\"column-5\">2.85</td><td className=\"column-6\">3.16</td><td className=\"column-7\">3.75</td><td className=\"column-8\">4.62</td><td className=\"column-9\">6</td><td className=\"column-10\">8.57</td>\n</tr>\n<tr className=\"row-7 odd\">\n\t<td className=\"column-1\">1</td><td className=\"column-2\">25.4</td><td className=\"column-3\">2.21</td><td className=\"column-4\">2.93</td><td className=\"column-5\">3.28</td><td className=\"column-6\">3.63</td><td className=\"column-7\">4.32</td><td className=\"column-8\">5.34</td><td className=\"column-9\">7</td><td className=\"column-10\">10</td>\n</tr>\n<tr className=\"row-8 even\">\n\t<td className=\"column-1\">1 1/4\u201d</td><td className=\"column-2\">31.75</td><td className=\"column-3\">2.78</td><td className=\"column-4\">3.69</td><td className=\"column-5\">4.13</td><td className=\"column-6\">4.58</td><td className=\"column-7\">5.46</td><td className=\"column-8\">6.75</td><td className=\"column-9\">8.9</td><td className=\"column-10\">12.84</td>\n</tr>\n<tr className=\"row-9 odd\">\n\t<td className=\"column-1\">1 1/2\u201d</td><td className=\"column-2\">38.1</td><td className=\"column-3\">3.35</td><td className=\"column-4\">4.44</td><td className=\"column-5\">4.98</td><td className=\"column-6\">5.52</td><td className=\"column-7\">6.59</td><td className=\"column-8\">8.17</td><td className=\"column-9\">10.7</td><td className=\"column-10\">15.67</td>\n</tr>\n<tr className=\"row-10 even\">\n\t<td className=\"column-1\">2\u201d</td><td className=\"column-2\">50.8</td><td className=\"column-3\">4.48</td><td className=\"column-4\">5.95</td><td className=\"column-5\">6.69</td><td className=\"column-6\">7.41</td><td className=\"column-7\">8.86</td><td className=\"column-8\">11.01</td><td className=\"column-9\">14.5</td><td className=\"column-10\">21.35</td>\n</tr>\n<tr className=\"row-11 odd\">\n\t<td className=\"column-1\">2 1/2\u201d</td><td className=\"column-2\">63.5</td><td className=\"column-3\">5.62</td><td className=\"column-4\">7.47</td><td className=\"column-5\">8.39</td><td className=\"column-6\">9.3</td><td className=\"column-7\">11.13</td><td className=\"column-8\">13.84</td><td className=\"column-9\">18.3</td><td className=\"column-10\">27.02</td>\n</tr>\n<tr className=\"row-12 even\">\n\t<td className=\"column-1\">3\u201d</td><td className=\"column-2\">76.2</td><td className=\"column-3\">6.75</td><td className=\"column-4\">8.98</td><td className=\"column-5\">10.09</td><td className=\"column-6\">11.19</td><td className=\"column-7\">13.4</td><td className=\"column-8\">16.68</td><td className=\"column-9\">22.1</td><td className=\"column-10\">32.69</td>\n</tr>\n<tr className=\"row-13 odd\">\n\t<td className=\"column-1\">4\u201d</td><td className=\"column-2\">101.6</td><td className=\"column-3\">-</td><td className=\"column-4\">-</td><td className=\"column-5\">13.49</td><td className=\"column-6\">14.97</td><td className=\"column-7\">17.93</td><td className=\"column-8\">22.35</td><td className=\"column-9\">29.7</td><td className=\"column-10\">44.03</td>\n</tr>\n</tbody>\n</table>"}, {"title": "SS WELDED SQUARE PIPES AND TUBES (ASTM A-554) - WEIGHT = KG/6METRE", "html": "<table id=\"tablepress-14\" className=\"tablepress tablepress-id-14\">\n<thead>\n<tr className=\"row-1 odd\">\n\t<th className=\"column-1\">Size/Thickness inch/mm</th><th className=\"column-2\">0.5mm</th><th className=\"column-3\">0.6mm</th><th className=\"column-4\">0.8mm</th><th className=\"column-5\">0.9mm</th><th className=\"column-6\">1mm</th><th className=\"column-7\">1.2mm</th><th className=\"column-8\">1.5mm</th><th className=\"column-9\">2mm</th><th className=\"column-10\">3mm</th>\n</tr>\n</thead>\n<tbody>\n<tr className=\"row-2 even\">\n\t<td className=\"column-1\">10x10</td><td className=\"column-2\">0.91</td><td className=\"column-3\">1.08</td><td className=\"column-4\">1.42</td><td className=\"column-5\">1.58</td><td className=\"column-6\">1.74</td><td className=\"column-7\">-</td><td className=\"column-8\">-</td><td className=\"column-9\">-</td><td className=\"column-10\">-</td>\n</tr>\n<tr className=\"row-3 odd\">\n\t<td className=\"column-1\">12x12</td><td className=\"column-2\">1.14</td><td className=\"column-3\">1.36</td><td className=\"column-4\">1.79</td><td className=\"column-5\">2</td><td className=\"column-6\">2.2</td><td className=\"column-7\">2.61</td><td className=\"column-8\">3.19</td><td className=\"column-9\">-</td><td className=\"column-10\">-</td>\n</tr>\n<tr className=\"row-4 even\">\n\t<td className=\"column-1\">15x15</td><td className=\"column-2\">1.38</td><td className=\"column-3\">1.65</td><td className=\"column-4\">2.17</td><td className=\"column-5\">2.43</td><td className=\"column-6\">2.69</td><td className=\"column-7\">3.19</td><td className=\"column-8\">3.92</td><td className=\"column-9\">-</td><td className=\"column-10\">-</td>\n</tr>\n<tr className=\"row-5 odd\">\n\t<td className=\"column-1\">20x20</td><td className=\"column-2\">1.85</td><td className=\"column-3\">2.21</td><td className=\"column-4\">2.93</td><td className=\"column-5\">3.28</td><td className=\"column-6\">3.63</td><td className=\"column-7\">4.32</td><td className=\"column-8\">5.34</td><td className=\"column-9\">-</td><td className=\"column-10\">-</td>\n</tr>\n<tr className=\"row-6 even\">\n\t<td className=\"column-1\">25x25</td><td className=\"column-2\">2.33</td><td className=\"column-3\">2.78</td><td className=\"column-4\">3.69</td><td className=\"column-5\">4.13</td><td className=\"column-6\">4.58</td><td className=\"column-7\">5.46</td><td className=\"column-8\">6.75</td><td className=\"column-9\">8.86</td><td className=\"column-10\">12.84</td>\n</tr>\n<tr className=\"row-7 odd\">\n\t<td className=\"column-1\">30x30</td><td className=\"column-2\">-</td><td className=\"column-3\">-</td><td className=\"column-4\">4.44</td><td className=\"column-5\">4.98</td><td className=\"column-6\">5.52</td><td className=\"column-7\">6.59</td><td className=\"column-8\">8.17</td><td className=\"column-9\">10.75</td><td className=\"column-10\">15.67</td>\n</tr>\n<tr className=\"row-8 even\">\n\t<td className=\"column-1\">40x40</td><td className=\"column-2\">-</td><td className=\"column-3\">-</td><td className=\"column-4\">5.95</td><td className=\"column-5\">6.68</td><td className=\"column-6\">7.41</td><td className=\"column-7\">8.86</td><td className=\"column-8\">11.01</td><td className=\"column-9\">14.53</td><td className=\"column-10\">21.35</td>\n</tr>\n<tr className=\"row-9 odd\">\n\t<td className=\"column-1\">50x50</td><td className=\"column-2\">-</td><td className=\"column-3\">-</td><td className=\"column-4\">-</td><td className=\"column-5\">8.38</td><td className=\"column-6\">9.3</td><td className=\"column-7\">11.13</td><td className=\"column-8\">13.84</td><td className=\"column-9\">18.31</td><td className=\"column-10\">27.02</td>\n</tr>\n<tr className=\"row-10 even\">\n\t<td className=\"column-1\">60x60</td><td className=\"column-2\">-</td><td className=\"column-3\">-</td><td className=\"column-4\">-</td><td className=\"column-5\">100.08</td><td className=\"column-6\">11.19</td><td className=\"column-7\">13.4</td><td className=\"column-8\">16.68</td><td className=\"column-9\">22.09</td><td className=\"column-10\">32.69</td>\n</tr>\n<tr className=\"row-11 odd\">\n\t<td className=\"column-1\">80x80</td><td className=\"column-2\">-</td><td className=\"column-3\">-</td><td className=\"column-4\">-</td><td className=\"column-5\">13.48</td><td className=\"column-6\">14.97</td><td className=\"column-7\">17.93</td><td className=\"column-8\">22.35</td><td className=\"column-9\">29.65</td><td className=\"column-10\">44.03</td>\n</tr>\n<tr className=\"row-12 even\">\n\t<td className=\"column-1\">100x100</td><td className=\"column-2\">-</td><td className=\"column-3\">-</td><td className=\"column-4\">-</td><td className=\"column-5\">16.69</td><td className=\"column-6\">18.53</td><td className=\"column-7\">22.21</td><td className=\"column-8\">27.7</td><td className=\"column-9\">36.78</td><td className=\"column-10\">54.73</td>\n</tr>\n<tr className=\"row-13 odd\">\n\t<td className=\"column-1\">10X20</td><td className=\"column-2\">1.38</td><td className=\"column-3\">1.65</td><td className=\"column-4\">2.17</td><td className=\"column-5\">2.43</td><td className=\"column-6\">2.69</td><td className=\"column-7\">3.19</td><td className=\"column-8\">-</td><td className=\"column-9\">-</td><td className=\"column-10\">-</td>\n</tr>\n<tr className=\"row-14 even\">\n\t<td className=\"column-1\">10X30</td><td className=\"column-2\">1.85</td><td className=\"column-3\">2.21</td><td className=\"column-4\">2.93</td><td className=\"column-5\">3.28</td><td className=\"column-6\">3.63</td><td className=\"column-7\">4.32</td><td className=\"column-8\">-</td><td className=\"column-9\">-</td><td className=\"column-10\">-</td>\n</tr>\n<tr className=\"row-15 odd\">\n\t<td className=\"column-1\">10X40</td><td className=\"column-2\">2.33</td><td className=\"column-3\">2.78</td><td className=\"column-4\">3.69</td><td className=\"column-5\">4.13</td><td className=\"column-6\">4.58</td><td className=\"column-7\">5.46</td><td className=\"column-8\">-</td><td className=\"column-9\">-</td><td className=\"column-10\">-</td>\n</tr>\n<tr className=\"row-16 even\">\n\t<td className=\"column-1\">10X50</td><td className=\"column-2\">2.8</td><td className=\"column-3\">3.35</td><td className=\"column-4\">4.44</td><td className=\"column-5\">4.98</td><td className=\"column-6\">5.52</td><td className=\"column-7\">6.59</td><td className=\"column-8\">8.17</td><td className=\"column-9\">-</td><td className=\"column-10\">-</td>\n</tr>\n<tr className=\"row-17 odd\">\n\t<td className=\"column-1\">25x12</td><td className=\"column-2\">1.85</td><td className=\"column-3\">2.21</td><td className=\"column-4\">2.93</td><td className=\"column-5\">3.28</td><td className=\"column-6\">3.63</td><td className=\"column-7\">4.32</td><td className=\"column-8\">5.34</td><td className=\"column-9\">6.97</td><td className=\"column-10\">-</td>\n</tr>\n<tr className=\"row-18 even\">\n\t<td className=\"column-1\">40x20</td><td className=\"column-2\">-</td><td className=\"column-3\">-</td><td className=\"column-4\">4.44</td><td className=\"column-5\">4.98</td><td className=\"column-6\">5.52</td><td className=\"column-7\">6.59</td><td className=\"column-8\">8.17</td><td className=\"column-9\">10.75</td><td className=\"column-10\">15.67</td>\n</tr>\n<tr className=\"row-19 odd\">\n\t<td className=\"column-1\">50x25</td><td className=\"column-2\">-</td><td className=\"column-3\">-</td><td className=\"column-4\">-</td><td className=\"column-5\">6.19</td><td className=\"column-6\">6.86</td><td className=\"column-7\">8.2</td><td className=\"column-8\">10.19</td><td className=\"column-9\">13.44</td><td className=\"column-10\">19.71</td>\n</tr>\n<tr className=\"row-20 even\">\n\t<td className=\"column-1\">75x25</td><td className=\"column-2\">-</td><td className=\"column-3\">-</td><td className=\"column-4\">-</td><td className=\"column-5\">8.38</td><td className=\"column-6\">9.3</td><td className=\"column-7\">11.13</td><td className=\"column-8\">13.84</td><td className=\"column-9\">18.31</td><td className=\"column-10\">27.02</td>\n</tr>\n<tr className=\"row-21 odd\">\n\t<td className=\"column-1\">60x40</td><td className=\"column-2\">-</td><td className=\"column-3\">-</td><td className=\"column-4\">-</td><td className=\"column-5\">8.38</td><td className=\"column-6\">9.3</td><td className=\"column-7\">11.13</td><td className=\"column-8\">13.84</td><td className=\"column-9\">18.31</td><td className=\"column-10\">27.02</td>\n</tr>\n<tr className=\"row-22 even\">\n\t<td className=\"column-1\">80x40</td><td className=\"column-2\">-</td><td className=\"column-3\">-</td><td className=\"column-4\">-</td><td className=\"column-5\">10.08</td><td className=\"column-6\">11.19</td><td className=\"column-7\">13.4</td><td className=\"column-8\">16.68</td><td className=\"column-9\">22.09</td><td className=\"column-10\">32.69</td>\n</tr>\n</tbody>\n</table>"}, {"title": "SEAMLESS PIPES (ASTM A-312)", "html": "<table id=\"tablepress-9\" className=\"tablepress tablepress-id-9\">\n<thead>\n<tr className=\"row-1 odd\">\n\t<th className=\"column-1\"></th><th className=\"column-2\">OD / THK</th><th className=\"column-3\">0.90mm</th><th className=\"column-4\">1.20mm</th><th className=\"column-5\">1.50mm</th>\n</tr>\n</thead>\n<tbody>\n<tr className=\"row-2 even\">\n\t<td rowSpan=\"4\" className=\"column-1\">Slot (15x15)</td><td className=\"column-2\">50.8</td><td className=\"column-3\">7.9</td><td className=\"column-4\">10.45</td><td className=\"column-5\">12.97</td>\n</tr>\n<tr className=\"row-3 odd\">\n\t<td className=\"column-2\">40x40</td><td className=\"column-3\">7.9</td><td className=\"column-4\">10.45</td><td className=\"column-5\">12.97</td>\n</tr>\n<tr className=\"row-4 even\">\n\t<td className=\"column-2\">50x50</td><td className=\"column-3\">9.6</td><td className=\"column-4\">12.72</td><td className=\"column-5\">15.8</td>\n</tr>\n<tr className=\"row-5 odd\">\n\t<td className=\"column-2\">60x40</td><td className=\"column-3\">9.6</td><td className=\"column-4\">12.72</td><td className=\"column-5\">15.8</td>\n</tr>\n</tbody>\n</table>"}, {"title": "SEAMLESS TUBES (ASTM A-213, 269, 249, 268) - WEIGHT = KG/METRE", "html": "<table id=\"tablepress-12\" className=\"tablepress tablepress-id-12\">\n<thead>\n<tr className=\"row-1 odd\">\n\t<th className=\"column-1\">Normal Pipe Sizes</th><th className=\"column-2\"></th><th className=\"column-3\">Outside Diameter</th><th className=\"column-4\">Schedule 5S</th><th className=\"column-5\"></th><th className=\"column-6\">Schedule 10S</th><th className=\"column-7\"></th><th className=\"column-8\">Schedule 40S</th><th className=\"column-9\"></th>\n</tr>\n</thead>\n<tbody>\n<tr className=\"row-2 even\">\n\t<td className=\"column-1\"></td><td className=\"column-2\"></td><td className=\"column-3\"></td><td className=\"column-4\"></td><td className=\"column-5\">W.T</td><td className=\"column-6\"></td><td className=\"column-7\">W.T</td><td className=\"column-8\"></td><td className=\"column-9\">W.T</td>\n</tr>\n<tr className=\"row-3 odd\">\n\t<td className=\"column-1\">In Inch</td><td className=\"column-2\">In mm</td><td className=\"column-3\">In mm</td><td className=\"column-4\">mm</td><td className=\"column-5\">Kg/Meter</td><td className=\"column-6\">mm</td><td className=\"column-7\">Kg/Meter</td><td className=\"column-8\">mm</td><td className=\"column-9\">Kg/Meter</td>\n</tr>\n<tr className=\"row-4 even\">\n\t<td className=\"column-1\">3/8\"</td><td className=\"column-2\">10</td><td className=\"column-3\">17.1</td><td className=\"column-4\">1.24</td><td className=\"column-5\">0.49</td><td className=\"column-6\">1.65</td><td className=\"column-7\">0.63</td><td className=\"column-8\">2.31</td><td className=\"column-9\">0.84</td>\n</tr>\n<tr className=\"row-5 odd\">\n\t<td className=\"column-1\">1/2\"</td><td className=\"column-2\">15</td><td className=\"column-3\">21.34</td><td className=\"column-4\">1.65</td><td className=\"column-5\">0.8</td><td className=\"column-6\">2.11</td><td className=\"column-7\">1.01</td><td className=\"column-8\">2.77</td><td className=\"column-9\">1.28</td>\n</tr>\n<tr className=\"row-6 even\">\n\t<td className=\"column-1\">3/4\"</td><td className=\"column-2\">20</td><td className=\"column-3\">26.67</td><td className=\"column-4\">1.65</td><td className=\"column-5\">1.03</td><td className=\"column-6\">2.11</td><td className=\"column-7\">1.3</td><td className=\"column-8\">2.87</td><td className=\"column-9\">1.7</td>\n</tr>\n<tr className=\"row-7 odd\">\n\t<td className=\"column-1\">I\"</td><td className=\"column-2\">25</td><td className=\"column-3\">33.4</td><td className=\"column-4\">1.65</td><td className=\"column-5\">1.31</td><td className=\"column-6\">2.77</td><td className=\"column-7\">2.12</td><td className=\"column-8\">3.38</td><td className=\"column-9\">2.53</td>\n</tr>\n<tr className=\"row-8 even\">\n\t<td className=\"column-1\">11/4\"</td><td className=\"column-2\">32</td><td className=\"column-3\">42.16</td><td className=\"column-4\">1.65</td><td className=\"column-5\">1.67</td><td className=\"column-6\">2.77</td><td className=\"column-7\">2.72</td><td className=\"column-8\">3.56</td><td className=\"column-9\">3.43</td>\n</tr>\n<tr className=\"row-9 odd\">\n\t<td className=\"column-1\">1 1/2\"</td><td className=\"column-2\">40</td><td className=\"column-3\">48.26</td><td className=\"column-4\">1.65</td><td className=\"column-5\">1.92</td><td className=\"column-6\">2.77</td><td className=\"column-7\">3.15</td><td className=\"column-8\">3.68</td><td className=\"column-9\">4.1</td>\n</tr>\n<tr className=\"row-10 even\">\n\t<td className=\"column-1\">2\"</td><td className=\"column-2\">50</td><td className=\"column-3\">60.33</td><td className=\"column-4\">1.65</td><td className=\"column-5\">2.42</td><td className=\"column-6\">2.77</td><td className=\"column-7\">3.98</td><td className=\"column-8\">3.91</td><td className=\"column-9\">5.51</td>\n</tr>\n<tr className=\"row-11 odd\">\n\t<td className=\"column-1\">2 1/2\"</td><td className=\"column-2\">65</td><td className=\"column-3\">73.03</td><td className=\"column-4\">2.11</td><td className=\"column-5\">3.74</td><td className=\"column-6\">3.05</td><td className=\"column-7\">5.03</td><td className=\"column-8\">5.16</td><td className=\"column-9\">8.75</td>\n</tr>\n<tr className=\"row-12 even\">\n\t<td className=\"column-1\">3\"</td><td className=\"column-2\">80</td><td className=\"column-3\">88.9</td><td className=\"column-4\">2.11</td><td className=\"column-5\">4.57</td><td className=\"column-6\">3.05</td><td className=\"column-7\">6.54</td><td className=\"column-8\">5.49</td><td className=\"column-9\">11.44</td>\n</tr>\n<tr className=\"row-13 odd\">\n\t<td className=\"column-1\">3 1/2\"</td><td className=\"column-2\">90</td><td className=\"column-3\">101.6</td><td className=\"column-4\">2.11</td><td className=\"column-5\">5.25</td><td className=\"column-6\">3.05</td><td className=\"column-7\">7.51</td><td className=\"column-8\">5.74</td><td className=\"column-9\">13.75</td>\n</tr>\n<tr className=\"row-14 even\">\n\t<td className=\"column-1\">4\"</td><td className=\"column-2\">100</td><td className=\"column-3\">14.3</td><td className=\"column-4\">2.11</td><td className=\"column-5\">5.95</td><td className=\"column-6\">3.05</td><td className=\"column-7\">8.48</td><td className=\"column-8\">6.02</td><td className=\"column-9\">16.29</td>\n</tr>\n<tr className=\"row-15 odd\">\n\t<td className=\"column-1\">5\"</td><td className=\"column-2\">125</td><td className=\"column-3\">141.3</td><td className=\"column-4\">2.77</td><td className=\"column-5\">9.59</td><td className=\"column-6\">3.4</td><td className=\"column-7\">11.72</td><td className=\"column-8\">6.55</td><td className=\"column-9\">22.06</td>\n</tr>\n<tr className=\"row-16 even\">\n\t<td className=\"column-1\">6\"</td><td className=\"column-2\">150</td><td className=\"column-3\">168.28</td><td className=\"column-4\">2.77</td><td className=\"column-5\">11.46</td><td className=\"column-6\">3.4</td><td className=\"column-7\">14.01</td><td className=\"column-8\">7.1</td><td className=\"column-9\">28.64</td>\n</tr>\n<tr className=\"row-17 odd\">\n\t<td className=\"column-1\">8\"</td><td className=\"column-2\">200</td><td className=\"column-3\">219.08</td><td className=\"column-4\">2.77</td><td className=\"column-5\">14.97</td><td className=\"column-6\">3.76</td><td className=\"column-7\">20.24</td><td className=\"column-8\">8.18</td><td className=\"column-9\">43.12</td>\n</tr>\n<tr className=\"row-18 even\">\n\t<td className=\"column-1\">10\"</td><td className=\"column-2\">250</td><td className=\"column-3\">273.05</td><td className=\"column-4\">3.4</td><td className=\"column-5\">22.61</td><td className=\"column-6\">4.19</td><td className=\"column-7\">27.8</td><td className=\"column-8\">9.27</td><td className=\"column-9\">60.31</td>\n</tr>\n<tr className=\"row-19 odd\">\n\t<td className=\"column-1\">12\"</td><td className=\"column-2\">300</td><td className=\"column-3\">323.85</td><td className=\"column-4\">3.96</td><td className=\"column-5\">31.25</td><td className=\"column-6\">4.57</td><td className=\"column-7\">36</td><td className=\"column-8\">9.53</td><td className=\"column-9\">73.84</td>\n</tr>\n</tbody>\n</table>"}, {"title": "TOLERANCES FOR SQUARE & RECTANGULAR TUBES", "html": "<table id=\"tablepress-15\" className=\"tablepress tablepress-id-15\">\n<thead>\n<tr className=\"row-1 odd\">\n\t<th className=\"column-1\">OD / Thickness (Inch)</th><th className=\"column-2\">OD / Thickness (mm)</th><th className=\"column-3\">0.26mm</th><th className=\"column-4\">0.30mm</th><th className=\"column-5\">0.40mm</th><th className=\"column-6\">0.50mm</th><th className=\"column-7\">0.55mm</th><th className=\"column-8\">0.60mm</th>\n</tr>\n</thead>\n<tbody>\n<tr className=\"row-2 even\">\n\t<td className=\"column-1\">2.5/8</td><td className=\"column-2\">8</td><td className=\"column-3\">0.19</td><td className=\"column-4\">0.21</td><td className=\"column-5\">0.26</td><td className=\"column-6\">0.34</td><td className=\"column-7\">0.37</td><td className=\"column-8\">0.39</td>\n</tr>\n<tr className=\"row-3 odd\">\n\t<td className=\"column-1\">3/8</td><td className=\"column-2\">9</td><td className=\"column-3\">0.21</td><td className=\"column-4\">0.24</td><td className=\"column-5\">0.3</td><td className=\"column-6\">0.39</td><td className=\"column-7\">0.42</td><td className=\"column-8\">0.44</td>\n</tr>\n<tr className=\"row-4 even\">\n\t<td className=\"column-1\"></td><td className=\"column-2\">9.52</td><td className=\"column-3\">0.23</td><td className=\"column-4\">0.25</td><td className=\"column-5\">0.32</td><td className=\"column-6\">0.41</td><td className=\"column-7\">0.45</td><td className=\"column-8\">0.47</td>\n</tr>\n<tr className=\"row-5 odd\">\n\t<td className=\"column-1\">1/2</td><td className=\"column-2\">12</td><td className=\"column-3\">0.29</td><td className=\"column-4\">0.32</td><td className=\"column-5\">0.4</td><td className=\"column-6\">0.52</td><td className=\"column-7\">0.57</td><td className=\"column-8\">0.6</td>\n</tr>\n<tr className=\"row-6 even\">\n\t<td className=\"column-1\"></td><td className=\"column-2\">12.7</td><td className=\"column-3\">0.3</td><td className=\"column-4\">0.34</td><td className=\"column-5\">0.42</td><td className=\"column-6\">0.55</td><td className=\"column-7\">0.61</td><td className=\"column-8\">0.64</td>\n</tr>\n<tr className=\"row-7 odd\">\n\t<td className=\"column-1\">5/8</td><td className=\"column-2\">15.88</td><td className=\"column-3\">0.38</td><td className=\"column-4\">0.42</td><td className=\"column-5\">0.53</td><td className=\"column-6\">0.7</td><td className=\"column-7\">0.76</td><td className=\"column-8\">0.8</td>\n</tr>\n<tr className=\"row-8 even\">\n\t<td className=\"column-1\">3/4</td><td className=\"column-2\">19</td><td className=\"column-3\">0.46</td><td className=\"column-4\">0.51</td><td className=\"column-5\">0.64</td><td className=\"column-6\">0.84</td><td className=\"column-7\">0.92</td><td className=\"column-8\">0.97</td>\n</tr>\n<tr className=\"row-9 odd\">\n\t<td className=\"column-1\">7/8</td><td className=\"column-2\">22</td><td className=\"column-3\">0.53</td><td className=\"column-4\">0.59</td><td className=\"column-5\">0.75</td><td className=\"column-6\">0.98</td><td className=\"column-7\">1.07</td><td className=\"column-8\">1.13</td>\n</tr>\n<tr className=\"row-10 even\">\n\t<td className=\"column-1\">1</td><td className=\"column-2\">25.4</td><td className=\"column-3\">0.62</td><td className=\"column-4\">0.68</td><td className=\"column-5\">0.86</td><td className=\"column-6\">1.13</td><td className=\"column-7\">1.24</td><td className=\"column-8\">1.31</td>\n</tr>\n<tr className=\"row-11 odd\">\n\t<td className=\"column-1\">10x10</td><td className=\"column-2\">-</td><td className=\"column-3\">0.3</td><td className=\"column-4\">0.34</td><td className=\"column-5\">0.42</td><td className=\"column-6\">0.55</td><td className=\"column-7\">0.61</td><td className=\"column-8\">0.64</td>\n</tr>\n<tr className=\"row-12 even\">\n\t<td className=\"column-1\">12x12</td><td className=\"column-2\">-</td><td className=\"column-3\">0.38</td><td className=\"column-4\">0.42</td><td className=\"column-5\">0.53</td><td className=\"column-6\">0.7</td><td className=\"column-7\">0.76</td><td className=\"column-8\">0.8</td>\n</tr>\n</tbody>\n</table>"}];

  return (
    <section id="specifications" className="specifications-section">
      <div className="spec-container">
        <h2 className="section-title">
          <span style={{ color: 'var(--black)' }}>TECHNICAL</span>{" "}
          <span className="text-blue">SPECIFICATIONS</span>
        </h2>
        <div className="title-underline"></div>

        {tablesData.map((table, index) => (
          <div 
            key={index} 
            className="table-wrapper animate-slide-up"
            ref={(el) => (tablesRef.current[index] = el)}
          >
            <h3 className="table-title">{table.title}</h3>
            <div className="table-responsive" dangerouslySetInnerHTML={{ __html: table.html }} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .specifications-section {
          padding: 100px 10%;
          background: var(--white);
          position: relative;
        }

        .spec-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 3rem;
          font-family: var(--font-oswald);
          font-weight: 700;
          text-align: center;
          margin-bottom: 10px;
        }

        .text-white {
          color: var(--white);
        }

        .text-blue {
          color: var(--primary-blue);
        }

        .title-underline {
          height: 4px;
          width: 80px;
          background-color: var(--primary-blue);
          margin: 0 auto 60px auto;
          border-radius: 2px;
        }

        .table-wrapper {
          background: var(--white);
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 12px;
          padding: 30px;
          margin-bottom: 50px;
          box-shadow: 0 5px 25px rgba(0, 0, 0, 0.05);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .table-wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .table-wrapper:hover {
          border-color: rgba(30, 144, 255, 0.3);
          box-shadow: 0 10px 30px rgba(30, 144, 255, 0.15);
          transform: translateY(-5px);
        }

        .table-title {
          font-family: var(--font-oswald);
          color: var(--black);
          font-size: 1.8rem;
          margin-bottom: 25px;
          text-align: center;
          letter-spacing: 1px;
          text-transform: uppercase;
          background: -webkit-linear-gradient(45deg, #111, #1e90ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .table-responsive {
          overflow-x: auto;
          width: 100%;
        }

        .table-responsive :global(table) {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          color: #444;
          font-family: var(--font-roboto);
          min-width: 800px;
        }

        .table-responsive :global(th) {
          background-color: rgba(30, 144, 255, 0.08);
          color: var(--primary-blue);
          font-weight: 700;
          padding: 15px;
          text-align: center;
          border-top: 1px solid rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }

        .table-responsive :global(td) {
          padding: 12px 15px;
          text-align: center;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .table-responsive :global(tr:hover td) {
          background-color: rgba(30, 144, 255, 0.03);
          color: var(--black);
        }

        .table-responsive :global(tr:last-child td) {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .specifications-section {
            padding: 60px 5%;
          }
          
          .section-title {
            font-size: 2.2rem;
          }
          
          .table-title {
            font-size: 1.3rem;
          }

          .table-wrapper {
            padding: 15px;
          }
        }
      `}</style>
    </section>
  );
}
