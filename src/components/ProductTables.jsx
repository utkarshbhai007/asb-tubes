"use client";
import React, { useEffect, useRef } from "react";

// Reusable rendering function for availability checkmark
const renderAvailability = (available) => {
  if (available) {
    return (
      <span className="availability-badge available">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    );
  }
  return <span className="availability-placeholder"></span>;
};

// Reusable component for the premium specs grid
function SpecCardsGrid({ cards }) {
  return (
    <div className="premium-cards-grid">
      {cards.map((card, idx) => (
        <div key={idx} className="spec-card-item">
          <div className="spec-card-icon">{card.icon}</div>
          <div className="spec-card-content">
            <span className="spec-card-label">{card.label}</span>
            <span className="spec-card-val">{card.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// 1. STAINLESS STEEL PIPES DIMENSION CHART
function StainlessSteelPipesDimensionChart() {
  const specCards = [
    { icon: "📏", label: "Size Range", value: "13.72 mm – 406.40 mm" },
    { icon: "📐", label: "Thickness Range", value: "1 mm – 13 mm" },
    { icon: "🧱", label: "Grade", value: "300 & 400 Series" },
    { icon: "📄", label: "Standard", value: "ASTM A312 / A268 / EN 10217-7" }
  ];

  const sizes = [
    { inch: '1/4"', mm: '13.72' },
    { inch: '3/8"', mm: '17.15' },
    { inch: '1/2"', mm: '21.34' },
    { inch: '3/4"', mm: '26.67' },
    { inch: '1"', mm: '33.40' },
    { inch: '1¼"', mm: '42.16' },
    { inch: '1½"', mm: '48.26' },
    { inch: '2"', mm: '60.33' },
    { inch: '2½"', mm: '73.03' },
    { inch: '3"', mm: '88.90' },
    { inch: '3½"', mm: '101.60' },
    { inch: '4"', mm: '114.30' },
    { inch: '5"', mm: '141.30' },
    { inch: '6"', mm: '168.28' },
    { inch: '8"', mm: '219.08' },
    { inch: '10"', mm: '273.05' },
    { inch: '12"', mm: '323.85' },
    { inch: '14"', mm: '355.60' },
    { inch: '16"', mm: '406.40' }
  ];

  const t1Thicknesses = [1.20, 1.60, 2.00, 2.11, 2.50, 2.60, 2.77, 3.05, 3.40, 3.75, 3.90, 4.19, 4.50, 5.00];
  const t2Thicknesses = [5.49, 5.74, 6.00, 6.50, 7.00, 8.00, 8.80, 9.00, 9.50, 11.13, 12.70];

  const isT1Available = (mmSize, thk) => {
    const size = parseFloat(mmSize);
    if (size === 13.72) return thk <= 2.00;
    if (size === 17.15) return thk <= 2.11;
    if (size === 21.34) return thk <= 2.60;
    if (size === 26.67) return thk <= 2.77;
    if (size === 33.40) return thk <= 3.40;
    if (size === 42.16) return thk <= 3.40;
    if (size === 48.26) return thk <= 3.90;
    if (size === 60.33) return thk >= 1.60 && thk <= 3.90;
    if (size === 73.03) return thk >= 2.00;
    if (size === 88.90) return thk >= 2.00;
    if (size === 101.60) return thk >= 2.00;
    if (size === 114.30) return thk >= 2.00;
    if (size === 141.30) return thk >= 2.50;
    if (size === 168.28) return thk >= 2.50;
    if (size === 219.08) return thk >= 2.77;
    if (size === 273.05) return thk >= 3.05;
    if (size === 323.85) return thk >= 3.75;
    if (size === 355.60) return thk >= 3.75;
    if (size === 406.40) return thk >= 3.90;
    return false;
  };

  const isT2Available = (mmSize, thk) => {
    const size = parseFloat(mmSize);
    if (size >= 88.90) return true;
    return false;
  };

  return (
    <div className="premium-spec-wrapper blueprint-bg">
      <div className="catalog-header">
        <h3 className="catalog-title">STAINLESS STEEL PIPE DIMENSION CHART</h3>
        <p className="catalog-subtitle">Available Outside Diameter & Wall Thickness Range</p>
      </div>

      <SpecCardsGrid cards={specCards} />

      <div className="finish-row">
        <span className="finish-label">✨ Surface Finish:</span>
        <span className="finish-val">Bright & Black Annealing</span>
      </div>

      {/* Table 1 */}
      <div className="table-container-card">
        <div className="table-header-bar">
          <h4>Thickness Range: 1.20 mm to 5.00 mm</h4>
        </div>
        <div className="table-scroll-wrapper">
          <table className="dimension-table">
            <thead>
              <tr>
                <th className="sticky-col first-header" colSpan="2">Pipe Size</th>
                {t1Thicknesses.map(t => (
                  <th key={t}>{t.toFixed(2)}</th>
                ))}
              </tr>
              <tr className="sub-header-row">
                <th className="sticky-col sub-header">NPS (Inch)</th>
                <th className="sticky-col sub-header border-right-th">O.D. (mm)</th>
                {t1Thicknesses.map(t => (
                  <th key={t}>mm</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizes.map((sz, sIdx) => (
                <tr key={sIdx}>
                  <td className="sticky-col size-inch">{sz.inch}</td>
                  <td className="sticky-col size-mm border-right-td">{sz.mm}</td>
                  {t1Thicknesses.map(t => (
                    <td key={t} className={isT1Available(sz.mm, t) ? "cell-available" : "cell-unavailable"}>
                      {renderAvailability(isT1Available(sz.mm, t))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Table 2 */}
      <div className="table-container-card" style={{ marginTop: "40px" }}>
        <div className="table-header-bar">
          <h4>Thickness Range: 5.49 mm to 12.70 mm</h4>
        </div>
        <div className="table-scroll-wrapper">
          <table className="dimension-table">
            <thead>
              <tr>
                <th className="sticky-col first-header" colSpan="2">Pipe Size</th>
                {t2Thicknesses.map(t => (
                  <th key={t}>{t.toFixed(2)}</th>
                ))}
              </tr>
              <tr className="sub-header-row">
                <th className="sticky-col sub-header">NPS (Inch)</th>
                <th className="sticky-col sub-header border-right-th">O.D. (mm)</th>
                {t2Thicknesses.map(t => (
                  <th key={t}>mm</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizes.map((sz, sIdx) => (
                <tr key={sIdx}>
                  <td className="sticky-col size-inch">{sz.inch}</td>
                  <td className="sticky-col size-mm border-right-td">{sz.mm}</td>
                  {t2Thicknesses.map(t => (
                    <td key={t} className={isT2Available(sz.mm, t) ? "cell-available" : "cell-unavailable"}>
                      {renderAvailability(isT2Available(sz.mm, t))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// 2. STAINLESS STEEL ROUND TUBES
function StainlessSteelRoundTubesChart() {
  const specCards = [
    { icon: "📏", label: "Size Range", value: "6.00 mm – 324.00 mm" },
    { icon: "📐", label: "Thickness Range", value: "0.80 mm – 6.00 mm" },
    { icon: "🧱", label: "Grade", value: "300 & 400 Series" },
    { icon: "📄", label: "Standard", value: "ASTM A554 / A249 / A269 / A270 / EN 10357 / EN 1035T" }
  ];

  const thicknesses = [0.80, 0.90, 1.00, 1.20, 1.50, 1.65, 2.00, 2.50, 3.00, 4.00, 5.00, 6.00];

  const sizes = [
    { inch: '-', mm: '6.00' },
    { inch: '-', mm: '8.00' },
    { inch: '3/8"', mm: '9.50' },
    { inch: '-', mm: '10.00' },
    { inch: '-', mm: '12.00' },
    { inch: '1/2"', mm: '12.70' },
    { inch: '5/8"', mm: '15.88' },
    { inch: '-', mm: '18.00' },
    { inch: '3/4"', mm: '19.05' },
    { inch: '-', mm: '20.50' },
    { inch: '7/8"', mm: '22.23' },
    { inch: '1"', mm: '25.40' },
    { inch: '1 1/8"', mm: '28.58' },
    { inch: '1 1/4"', mm: '31.75' },
    { inch: '1 3/8"', mm: '34.93' },
    { inch: '1 1/2"', mm: '38.10' },
    { inch: '1 3/4"', mm: '44.45' },
    { inch: '2"', mm: '50.80' },
    { inch: '2 1/2"', mm: '63.50' },
    { inch: '3"', mm: '76.20' },
    { inch: '3 1/2"', mm: '88.90' },
    { inch: '4"', mm: '101.60' },
    { inch: '5"', mm: '127.00' }
  ];

  const isAvailable = (mmSize, thk) => {
    const size = parseFloat(mmSize);
    if (size <= 10.00) return thk <= 1.50;
    if (size === 12.00) return thk <= 1.50;
    if (size >= 12.70 && size <= 22.23) return thk <= 2.00;
    if (size >= 25.40 && size <= 44.45) return thk <= 3.00;
    if (size === 50.80) return thk <= 5.00;
    if (size === 63.50 || size === 76.20) return thk >= 1.00 && thk <= 5.00;
    if (size === 88.90) return thk >= 1.00 && thk <= 6.00;
    if (size === 101.60 || size === 127.00) return thk >= 1.20 && thk <= 6.00;
    return false;
  };

  return (
    <div className="premium-spec-wrapper blueprint-bg">
      <div className="catalog-header">
        <h3 className="catalog-title">STAINLESS STEEL ROUND TUBES</h3>
        <p className="catalog-subtitle">Available Outside Diameter & Wall Thickness Range</p>
      </div>

      <SpecCardsGrid cards={specCards} />

      <div className="finish-row">
        <span className="finish-label">✨ Surface Finish:</span>
        <span className="finish-val">Mirror, Hairline, Matte, ID/OD Polish</span>
      </div>

      <div className="table-container-card">
        <div className="table-header-bar">
          <h4>Thickness Range: 0.80 mm to 6.00 mm</h4>
        </div>
        <div className="table-scroll-wrapper">
          <table className="dimension-table">
            <thead>
              <tr>
                <th className="sticky-col first-header" colSpan="2">Tube Size</th>
                {thicknesses.map(t => (
                  <th key={t}>{t.toFixed(2)}</th>
                ))}
              </tr>
              <tr className="sub-header-row">
                <th className="sticky-col sub-header">OD (Inch)</th>
                <th className="sticky-col sub-header border-right-th">OD (mm)</th>
                {thicknesses.map(t => (
                  <th key={t}>mm</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizes.map((sz, sIdx) => (
                <tr key={sIdx}>
                  <td className="sticky-col size-inch">{sz.inch}</td>
                  <td className="sticky-col size-mm border-right-td">{sz.mm}</td>
                  {thicknesses.map(t => (
                    <td key={t} className={isAvailable(sz.mm, t) ? "cell-available" : "cell-unavailable"}>
                      {renderAvailability(isAvailable(sz.mm, t))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// 3. STAINLESS STEEL SQUARE TUBES
function StainlessSteelSquareTubesChart() {
  const specCards = [
    { icon: "📏", label: "Size Range", value: "10x10 mm – 150x150 mm" },
    { icon: "📐", label: "Thickness Range", value: "0.80 mm – 6.00 mm" },
    { icon: "🧱", label: "Grade", value: "300 & 400 Series" },
    { icon: "📄", label: "Standard", value: "ASTM A554 / EN 10357 / EN 1035T" }
  ];

  const thicknesses = [0.80, 0.90, 1.00, 1.20, 1.50, 1.65, 2.00, 2.50, 3.00, 4.00, 5.00, 6.00];

  const sizes = [
    "10.00x10.00",
    "12.70x12.70",
    "15.88x15.88",
    "20.00x20.00",
    "25.40x25.40",
    "30.00x30.00",
    "40.00x40.00",
    "50.00x50.00",
    "60.00x60.00",
    "75.00x75.00",
    "80.00x80.00",
    "100.00x100.00",
    "125.00x125.00",
    "150.00x150.00"
  ];

  const isAvailable = (sizeStr, thk) => {
    const width = parseFloat(sizeStr.split('x')[0]);
    if (width === 10.00) return thk <= 1.50;
    if (width >= 12.70 && width <= 20.00) return thk <= 2.00;
    if (width >= 25.40 && width <= 40.00) return thk <= 3.00;
    if (width === 50.00 || width === 60.00) return thk <= 5.00;
    if (width === 75.00 || width === 80.00) return thk >= 1.00 && thk <= 6.00;
    if (width >= 100.00) return thk >= 1.20 && thk <= 6.00;
    return false;
  };

  return (
    <div className="premium-spec-wrapper blueprint-bg">
      <div className="catalog-header">
        <h3 className="catalog-title">STAINLESS STEEL SQUARE TUBES</h3>
        <p className="catalog-subtitle">Available Section Size & Wall Thickness Range</p>
      </div>

      <SpecCardsGrid cards={specCards} />

      <div className="finish-row">
        <span className="finish-label">✨ Surface Finish:</span>
        <span className="finish-val">Mirror, Hairline, Matte</span>
      </div>

      <div className="table-container-card">
        <div className="table-header-bar">
          <h4>Thickness Range: 0.80 mm to 6.00 mm</h4>
        </div>
        <div className="table-scroll-wrapper">
          <table className="dimension-table single-sticky">
            <thead>
              <tr>
                <th className="sticky-col first-header border-right-th">Square Tube Size (mm)</th>
                {thicknesses.map(t => (
                  <th key={t}>{t.toFixed(2)}</th>
                ))}
              </tr>
              <tr className="sub-header-row">
                <th className="sticky-col sub-header border-right-th">Size (A x B)</th>
                {thicknesses.map(t => (
                  <th key={t}>mm</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizes.map((sz, sIdx) => (
                <tr key={sIdx}>
                  <td className="sticky-col size-inch border-right-td">{sz}</td>
                  {thicknesses.map(t => (
                    <td key={t} className={isAvailable(sz, t) ? "cell-available" : "cell-unavailable"}>
                      {renderAvailability(isAvailable(sz, t))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// 4. STAINLESS STEEL RECTANGULAR TUBES
function StainlessSteelRectangularTubesChart() {
  const specCards = [
    { icon: "📏", label: "Size Range", value: "10x20 mm – 50x150 mm" },
    { icon: "📐", label: "Thickness Range", value: "0.80 mm – 6.00 mm" },
    { icon: "🧱", label: "Grade", value: "300 & 400 Series" },
    { icon: "📄", label: "Standard", value: "ASTM A554 / EN 10357 / EN 1035T" }
  ];

  const thicknesses = [0.80, 0.90, 1.00, 1.20, 1.50, 1.65, 2.00, 2.50, 3.00, 4.00, 5.00, 6.00];

  const sizes = [
    "10.00x20.00",
    "10.00x30.00",
    "10.00x40.00",
    "10.00x50.00",
    "10.00x60.00",
    "10.00x70.00",
    "15.00x25.00",
    "15.00x30.00",
    "15.00x40.00",
    "20.00x30.00",
    "20.00x40.00",
    "20.00x50.00",
    "20.00x60.00",
    "20.00x80.00",
    "25.00x50.00",
    "25.00x75.00",
    "25.00x100.00",
    "30.00x50.00",
    "30.00x60.00",
    "30.00x70.00",
    "40.00x60.00",
    "40.00x80.00",
    "40.00x100.00",
    "50.00x100.00",
    "50.00x150.00"
  ];

  const isAvailable = (sizeStr, thk) => {
    const parts = sizeStr.split('x');
    const w = parseFloat(parts[0]);
    const h = parseFloat(parts[1]);
    const sum = w + h;
    if (sizeStr === "10.00x20.00") return thk <= 1.50;
    if (sizeStr === "25.00x50.00") return thk <= 3.00;
    if (sum <= 40) return thk <= 2.00;
    if (sum < 50) return thk <= 2.00;
    if (sum >= 50 && sum <= 80) return thk <= 2.00;
    if (sizeStr === "20.00x80.00") return thk >= 1.00 && thk <= 3.00;
    if (sum > 80 && sum <= 100) return thk >= 1.00 && thk <= 3.00;
    if (sizeStr === "40.00x80.00" || sizeStr === "40.00x100.00") return thk >= 1.00 && thk <= 5.00;
    if (sizeStr === "50.00x100.00" || sizeStr === "50.00x150.00") return thk >= 1.20 && thk <= 6.00;
    return false;
  };

  return (
    <div className="premium-spec-wrapper blueprint-bg">
      <div className="catalog-header">
        <h3 className="catalog-title">STAINLESS STEEL RECTANGULAR TUBES</h3>
        <p className="catalog-subtitle">Available Section Size & Wall Thickness Range</p>
      </div>

      <SpecCardsGrid cards={specCards} />

      <div className="finish-row">
        <span className="finish-label">✨ Surface Finish:</span>
        <span className="finish-val">Mirror, Hairline, Matte</span>
      </div>

      <div className="table-container-card">
        <div className="table-header-bar">
          <h4>Thickness Range: 0.80 mm to 6.00 mm</h4>
        </div>
        <div className="table-scroll-wrapper">
          <table className="dimension-table single-sticky">
            <thead>
              <tr>
                <th className="sticky-col first-header border-right-th">Rectangular Tube Size (mm)</th>
                {thicknesses.map(t => (
                  <th key={t}>{t.toFixed(2)}</th>
                ))}
              </tr>
              <tr className="sub-header-row">
                <th className="sticky-col sub-header border-right-th">Size (A x B)</th>
                {thicknesses.map(t => (
                  <th key={t}>mm</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizes.map((sz, sIdx) => (
                <tr key={sIdx}>
                  <td className="sticky-col size-inch border-right-td">{sz}</td>
                  {thicknesses.map(t => (
                    <td key={t} className={isAvailable(sz, t) ? "cell-available" : "cell-unavailable"}>
                      {renderAvailability(isAvailable(sz, t))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// 5. LIGHT GAUGE STAINLESS STEEL TUBES
function LightGaugeStainlessSteelTubesChart() {
  const specCards = [
    { icon: "📏", label: "Size Range", value: "6.00 mm – 25x25 mm" },
    { icon: "📐", label: "Thickness Range", value: "0.26 mm – 0.90 mm" },
    { icon: "🧱", label: "Grade", value: "200, 300 & 400 Series" },
    { icon: "📄", label: "Standard", value: "ASTM A554 / EN 10357 / EN 1035T" }
  ];

  const thicknesses = [0.26, 0.30, 0.40, 0.50, 0.55, 0.60, 0.70, 0.80, 0.90];

  const sizes = [
    "6",
    "8",
    "9",
    "9.50",
    "10",
    "12",
    "12.70",
    "15.88",
    "18",
    "19.10",
    "20",
    "22.22",
    "25",
    "25.40",
    "10x10",
    "12x12",
    "15x15",
    "10x20",
    "20x20",
    "12x25",
    "25x25"
  ];

  const isAvailable = (sizeStr, thk) => {
    if (sizeStr === "6") return thk <= 0.60;
    if (sizeStr === "8") return thk <= 0.70;
    if (sizeStr === "9" || sizeStr === "9.50") return thk <= 0.80;
    if (["10", "12", "12.70", "15.88", "18", "19.10", "20", "22.22", "25", "25.40"].includes(sizeStr)) return true;
    if (sizeStr === "10x10") return thk >= 0.30 && thk <= 0.80;
    if (["12x12", "15x15", "10x20"].includes(sizeStr)) return thk >= 0.30;
    if (["20x20", "12x25", "25x25"].includes(sizeStr)) return thk >= 0.40;
    return false;
  };

  return (
    <div className="premium-spec-wrapper blueprint-bg">
      <div className="catalog-header">
        <h3 className="catalog-title">LIGHT GAUGE STAINLESS STEEL TUBES</h3>
        <p className="catalog-subtitle">Available Section Size & Ultra-Thin Wall Thickness Range</p>
      </div>

      <SpecCardsGrid cards={specCards} />

      <div className="finish-row">
        <span className="finish-label">✨ Surface Finish:</span>
        <span className="finish-val">Mirror, Hairline, Matte</span>
      </div>

      <div className="table-container-card">
        <div className="table-header-bar">
          <h4>Thickness Range: 0.26 mm to 0.90 mm</h4>
        </div>
        <div className="table-scroll-wrapper">
          <table className="dimension-table single-sticky">
            <thead>
              <tr>
                <th className="sticky-col first-header border-right-th">Light Gauge Size (mm / mm Section)</th>
                {thicknesses.map(t => (
                  <th key={t}>{t.toFixed(2)}</th>
                ))}
              </tr>
              <tr className="sub-header-row">
                <th className="sticky-col sub-header border-right-th">OD / Size</th>
                {thicknesses.map(t => (
                  <th key={t}>mm</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizes.map((sz, sIdx) => (
                <tr key={sIdx}>
                  <td className="sticky-col size-inch border-right-td">{sz}</td>
                  {thicknesses.map(t => (
                    <td key={t} className={isAvailable(sz, t) ? "cell-available" : "cell-unavailable"}>
                      {renderAvailability(isAvailable(sz, t))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

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

  const componentsList = [
    { comp: <StainlessSteelPipesDimensionChart />, title: "STAINLESS STEEL PIPES" },
    { comp: <StainlessSteelRoundTubesChart />, title: "STAINLESS STEEL ROUND TUBES" },
    { comp: <StainlessSteelSquareTubesChart />, title: "STAINLESS STEEL SQUARE TUBES" },
    { comp: <StainlessSteelRectangularTubesChart />, title: "STAINLESS STEEL RECTANGULAR TUBES" },
    { comp: <LightGaugeStainlessSteelTubesChart />, title: "LIGHT GAUGE STAINLESS STEEL TUBES" }
  ];

  return (
    <section id="specifications" className="specifications-section">
      <div className="spec-container">
        <h2 className="section-title">
          <span style={{ color: 'var(--black)' }}>TECHNICAL</span>{" "}
          <span className="text-blue">SPECIFICATIONS</span>
        </h2>
        <div className="title-underline"></div>

        {componentsList.map((item, index) => (
          <div
            key={index}
            className="table-wrapper animate-slide-up"
            ref={(el) => (tablesRef.current[index] = el)}
            style={{ marginBottom: "60px" }}
          >
            {item.comp}
          </div>
        ))}
      </div>

      <style jsx global>{`
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
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .table-wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Redesigned Premium Specs Chart styles */
        .premium-spec-wrapper {
          background-color: #ffffff;
          border-radius: 20px;
          padding: 40px;
          border: 1px solid rgba(10, 61, 117, 0.08);
          box-shadow: 0 10px 45px rgba(10, 61, 117, 0.04);
          position: relative;
          overflow: hidden;
        }

        .blueprint-bg {
          background-image: linear-gradient(rgba(10, 61, 117, 0.02) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(10, 61, 117, 0.02) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .catalog-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .catalog-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #0A3D75;
          background: rgba(10, 61, 117, 0.06);
          padding: 6px 16px;
          border-radius: 100px;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }

        .catalog-title {
          font-family: var(--font-heading), 'Manrope', 'Inter', sans-serif;
          font-size: 2.2rem;
          color: #0A3D75;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin: 0 0 8px 0;
        }

        .catalog-subtitle {
          font-family: var(--font-body), 'Inter', sans-serif;
          font-size: 1.05rem;
          color: #5a6e85;
          margin: 0;
        }

        .premium-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 25px;
        }

        .spec-card-item {
          background: #ffffff;
          border: 1px solid rgba(10, 61, 117, 0.06);
          border-radius: 16px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .spec-card-item:hover {
          transform: translateY(-3px);
          border-color: rgba(10, 61, 117, 0.2);
          box-shadow: 0 10px 25px rgba(10, 61, 117, 0.06);
        }

        .spec-card-icon {
          font-size: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spec-card-content {
          display: flex;
          flex-direction: column;
        }

        .spec-card-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #8a9eb5;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .spec-card-val {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0A3D75;
          white-space: pre-line;
        }

        .finish-row {
          background: rgba(10, 61, 117, 0.03);
          border-radius: 12px;
          padding: 12px 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          margin-bottom: 40px;
          border: 1px solid rgba(10, 61, 117, 0.04);
        }

        .finish-label {
          font-weight: 600;
          color: #5a6e85;
        }

        .finish-val {
          font-weight: 700;
          color: #0A3D75;
        }

        .table-container-card {
          background: #ffffff;
          border: 1px solid rgba(10, 61, 117, 0.08);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.01);
        }

        .table-header-bar {
          background: #0A3D75;
          color: #ffffff;
          padding: 16px 24px;
        }

        .table-header-bar h4 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .table-scroll-wrapper {
          overflow-x: auto;
          width: 100%;
        }

        .dimension-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          font-family: 'Inter', sans-serif;
        }

        .dimension-table th {
          background: #f8fafc;
          color: #0A3D75;
          font-weight: 700;
          font-size: 0.85rem;
          padding: 12px 14px;
          border-bottom: 1px solid rgba(10, 61, 117, 0.08);
          text-align: center;
          white-space: nowrap;
        }

        .dimension-table th.first-header {
          font-size: 0.95rem;
          background: #f1f5f9;
        }

        .dimension-table .sub-header-row th {
          padding: 8px 14px;
          font-size: 0.75rem;
          color: #5a6e85;
          text-transform: uppercase;
          background: #f8fafc;
          border-bottom: 2px solid rgba(10, 61, 117, 0.12);
        }

        .dimension-table td {
          padding: 10px 14px;
          text-align: center;
          border-bottom: 1px solid #edf2f7;
          font-size: 0.85rem;
          transition: background-color 0.2s ease;
        }

        .dimension-table tr:hover td {
          background-color: rgba(10, 61, 117, 0.02);
        }

        /* Sticky Columns for Size description */
        .sticky-col {
          position: sticky;
          left: 0;
          z-index: 2;
          background: #ffffff;
        }

        th.sticky-col {
          z-index: 3;
          background: #f8fafc;
        }

        th.first-header.sticky-col {
          background: #f1f5f9;
        }

        .dimension-table td.size-inch {
          font-weight: 700;
          color: #0A3D75;
          left: 0;
          width: 90px;
          min-width: 90px;
        }

        .dimension-table.single-sticky td.size-inch,
        .dimension-table.single-sticky th.sticky-col {
          width: 140px;
          min-width: 140px;
          left: 0;
        }

        .dimension-table td.size-mm {
          font-weight: 500;
          color: #5a6e85;
          left: 90px;
          width: 95px;
          min-width: 95px;
        }

        th.sticky-col:nth-child(2) {
          left: 90px;
        }

        .border-right-th {
          border-right: 2px solid rgba(10, 61, 117, 0.12) !important;
        }

        .border-right-td {
          border-right: 2px solid rgba(10, 61, 117, 0.08) !important;
        }

        .cell-available {
          background-color: rgba(10, 61, 117, 0.015);
        }

        .cell-unavailable {
          background-color: #fafbfc;
        }

        .availability-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 6px;
          color: #ffffff;
          background-color: #0A3D75;
          box-shadow: 0 2px 6px rgba(10, 61, 117, 0.2);
          animation: scaleIn 0.3s ease;
        }

        .availability-placeholder {
          display: inline-block;
          width: 22px;
          height: 22px;
        }

        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @media (max-width: 1024px) {
          .premium-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .specifications-section {
            padding: 60px 5%;
          }
          
          .section-title {
            font-size: 2.2rem;
          }

          .premium-spec-wrapper {
            padding: 24px 16px;
          }
          
          .catalog-title {
            font-size: 1.6rem;
          }
          
          .catalog-subtitle {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 576px) {
          .premium-cards-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .spec-card-item {
            padding: 16px;
          }
        }
      `}</style>
    </section>
  );
}
