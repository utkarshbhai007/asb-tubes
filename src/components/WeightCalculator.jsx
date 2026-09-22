"use client";

import React, { useState } from "react";
import { calcStainlessWeight, formatKg, SS_WEIGHT } from "../lib/weightCalculator";

const SHAPES = [
  { id: "round", label: "Round" },
  { id: "square", label: "Square" },
  { id: "rectangle", label: "Rectangle" },
];

const emptyFields = {
  od: "",
  side: "",
  width: "",
  height: "",
  thickness: "",
  lengthFt: "",
  pieces: "1",
};

export default function WeightCalculator() {
  const [shape, setShape] = useState("round");
  const [fields, setFields] = useState(emptyFields);

  const result = calcStainlessWeight(shape, {
    od: parseFloat(fields.od),
    side: parseFloat(fields.side),
    width: parseFloat(fields.width),
    height: parseFloat(fields.height),
    thickness: parseFloat(fields.thickness),
    lengthFt: parseFloat(fields.lengthFt),
    pieces: parseFloat(fields.pieces) || 1,
  });

  const setField = (key, value) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const reset = () => setFields(emptyFields);

  const formulaText =
    shape === "round"
      ? "(OD − t) × t × 0.00756 × Length (ft)"
      : shape === "square"
        ? "(Side − t) × t × 0.00963 × Length (ft)"
        : "(W + H − 2t) × t × 0.00482 × Length (ft)";

  return (
    <div className="wc-wrap">
      <div className="wc-grid">
        <div className="wc-form-panel">
          <div className="wc-material">
            <span className="wc-material-label">Material</span>
            <span className="wc-material-value">Stainless Steel</span>
          </div>

          <div className="wc-shape-row" role="tablist" aria-label="Tube shape">
            {SHAPES.map((s) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={shape === s.id}
                className={`wc-shape-btn ${shape === s.id ? "active" : ""}`}
                onClick={() => setShape(s.id)}
              >
                <ShapeIcon type={s.id} />
                {s.label}
              </button>
            ))}
          </div>

          <div className="wc-fields">
            {shape === "round" && (
              <Field
                label="Outside Diameter (OD)"
                unit="mm"
                value={fields.od}
                onChange={(v) => setField("od", v)}
                placeholder="e.g. 48.26"
              />
            )}
            {shape === "square" && (
              <Field
                label="Side"
                unit="mm"
                value={fields.side}
                onChange={(v) => setField("side", v)}
                placeholder="e.g. 50"
              />
            )}
            {shape === "rectangle" && (
              <>
                <Field
                  label="Width"
                  unit="mm"
                  value={fields.width}
                  onChange={(v) => setField("width", v)}
                  placeholder="e.g. 40"
                />
                <Field
                  label="Height"
                  unit="mm"
                  value={fields.height}
                  onChange={(v) => setField("height", v)}
                  placeholder="e.g. 20"
                />
              </>
            )}
            <Field
              label="Wall Thickness"
              unit="mm"
              value={fields.thickness}
              onChange={(v) => setField("thickness", v)}
              placeholder="e.g. 2.0"
            />
            <Field
              label="Length"
              unit="ft"
              value={fields.lengthFt}
              onChange={(v) => setField("lengthFt", v)}
              placeholder="e.g. 20"
            />
            <Field
              label="Number of Pieces"
              unit=""
              value={fields.pieces}
              onChange={(v) => setField("pieces", v)}
              placeholder="1"
              min={1}
              step={1}
            />
          </div>

          <button type="button" className="wc-reset" onClick={reset}>
            Clear fields
          </button>
        </div>

        <div className="wc-result-panel">
          <h3 className="wc-result-title">Estimated Weight</h3>
          {result.error ? (
            <p className="wc-error">{result.error}</p>
          ) : (
            <>
              <div className="wc-result-main">
                <div className="wc-stat">
                  <span className="wc-stat-label">Piece Weight</span>
                  <span className="wc-stat-value">
                    {result.valid ? formatKg(result.pieceKg) : "—"}
                    <small> kg</small>
                  </span>
                </div>
                <div className="wc-stat highlight">
                  <span className="wc-stat-label">Total Weight</span>
                  <span className="wc-stat-value">
                    {result.valid ? formatKg(result.totalKg) : "—"}
                    <small> kg</small>
                  </span>
                </div>
              </div>
              <div className="wc-result-meta">
                <div>
                  <span>Per metre</span>
                  <strong>{result.valid ? `${formatKg(result.perM)} kg/m` : "—"}</strong>
                </div>
                <div>
                  <span>Per foot</span>
                  <strong>{result.valid ? `${formatKg(result.perFt)} kg/ft` : "—"}</strong>
                </div>
              </div>
            </>
          )}

          <div className="wc-formula">
            <h4>Formula ({shape})</h4>
            <code>{formulaText}</code>
            <p>
              Dimensions in mm. Constant for stainless:{" "}
              {shape === "round" && `${SS_WEIGHT.round.perFt} (kg/ft) / ${SS_WEIGHT.round.perM} (kg/m)`}
              {shape === "square" && `${SS_WEIGHT.square.perFt} (kg/ft) / ${SS_WEIGHT.square.perM} (kg/m)`}
              {shape === "rectangle" && `${SS_WEIGHT.rectangle.perFt} (kg/ft) / ${SS_WEIGHT.rectangle.perM} (kg/m)`}
            </p>
          </div>

          <p className="wc-note">
            Estimates for hollow stainless pipes & tubes. Corner radii and grade density
            variations may cause small differences vs. weighed stock. For a firm quote,{" "}
            <a href="/contact-us">contact ASB Tubes</a>.
          </p>
        </div>
      </div>

      <style jsx>{`
        .wc-wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .wc-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: start;
        }

        .wc-form-panel,
        .wc-result-panel {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 28px;
        }

        .wc-material {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: #f0f6fb;
          border-radius: 8px;
          margin-bottom: 22px;
        }

        .wc-material-label {
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 500;
        }

        .wc-material-value {
          font-family: var(--font-oswald);
          font-size: 1.05rem;
          letter-spacing: 0.5px;
          color: var(--primary-blue);
          font-weight: 600;
        }

        .wc-shape-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 24px;
        }

        .wc-shape-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 14px 8px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          background: #fff;
          cursor: pointer;
          font-family: var(--font-poppins);
          font-size: 0.9rem;
          font-weight: 600;
          color: #475569;
          transition: border-color 0.2s, background 0.2s, color 0.2s;
        }

        .wc-shape-btn:hover {
          border-color: #94a3b8;
        }

        .wc-shape-btn.active {
          border-color: var(--primary-blue);
          background: #f0f6fb;
          color: var(--primary-blue);
        }

        .wc-fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .wc-reset {
          margin-top: 20px;
          background: none;
          border: none;
          color: var(--primary-blue);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          padding: 0;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .wc-result-title {
          font-family: var(--font-oswald);
          font-size: 1.4rem;
          color: #0f172a;
          margin: 0 0 20px;
          letter-spacing: 0.5px;
        }

        .wc-error {
          color: #b91c1c;
          background: #fef2f2;
          padding: 12px 14px;
          border-radius: 8px;
          font-size: 0.95rem;
          margin: 0 0 16px;
        }

        .wc-result-main {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 18px;
        }

        .wc-stat {
          padding: 16px 18px;
          background: #f8fafc;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
        }

        .wc-stat.highlight {
          background: var(--primary-blue);
          border-color: var(--primary-blue);
        }

        .wc-stat.highlight .wc-stat-label,
        .wc-stat.highlight .wc-stat-value,
        .wc-stat.highlight .wc-stat-value small {
          color: #fff;
        }

        .wc-stat-label {
          display: block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #64748b;
          margin-bottom: 6px;
          font-weight: 600;
        }

        .wc-stat-value {
          font-family: var(--font-oswald);
          font-size: 2.2rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1;
        }

        .wc-stat-value small {
          font-size: 1rem;
          font-weight: 500;
          margin-left: 4px;
          color: #64748b;
        }

        .wc-result-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 22px;
        }

        .wc-result-meta div {
          padding: 12px;
          background: #f8fafc;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .wc-result-meta span {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #64748b;
          font-weight: 600;
        }

        .wc-result-meta strong {
          font-size: 1rem;
          color: #0f172a;
        }

        .wc-formula {
          border-top: 1px solid #e2e8f0;
          padding-top: 18px;
          margin-bottom: 16px;
        }

        .wc-formula h4 {
          margin: 0 0 8px;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #64748b;
        }

        .wc-formula code {
          display: block;
          font-size: 0.9rem;
          background: #f1f5f9;
          padding: 10px 12px;
          border-radius: 6px;
          color: var(--primary-blue);
          font-weight: 600;
          margin-bottom: 8px;
          word-break: break-word;
        }

        .wc-formula p {
          margin: 0;
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.5;
        }

        .wc-note {
          margin: 0;
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.55;
        }

        .wc-note a {
          color: var(--primary-blue);
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .wc-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 520px) {
          .wc-fields {
            grid-template-columns: 1fr;
          }

          .wc-form-panel,
          .wc-result-panel {
            padding: 20px;
          }

          .wc-stat-value {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}

function Field({ label, unit, value, onChange, placeholder, min = 0, step = "any" }) {
  return (
    <label className="wc-field">
      <span className="wc-field-label">
        {label}
        {unit ? <em> ({unit})</em> : null}
      </span>
      <input
        type="number"
        inputMode="decimal"
        min={min}
        step={step}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      <style jsx>{`
        .wc-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .wc-field-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #334155;
        }

        .wc-field-label em {
          font-style: normal;
          font-weight: 500;
          color: #94a3b8;
        }

        .wc-field input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 1rem;
          font-family: var(--font-body);
          color: #0f172a;
          background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .wc-field input:focus {
          outline: none;
          border-color: var(--primary-blue);
          box-shadow: 0 0 0 3px rgba(0, 73, 133, 0.12);
        }

        .wc-field input::placeholder {
          color: #94a3b8;
        }
      `}</style>
    </label>
  );
}

function ShapeIcon({ type }) {
  if (type === "round") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    );
  }
  if (type === "square") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="5" y="5" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="2" />
        <rect x="9" y="9" width="10" height="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <rect x="3" y="7" width="22" height="14" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="7" y="10" width="14" height="8" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}
