/** Stainless steel hollow-section weight factors (OD/sides & t in mm). */
export const SS_WEIGHT = {
  round: { perFt: 0.00756, perM: 0.0248 },
  square: { perFt: 0.00963, perM: 0.0316 },
  rectangle: { perFt: 0.00482, perM: 0.0158 },
};

/**
 * @param {"round"|"square"|"rectangle"} shape
 * @param {{ od?: number, side?: number, width?: number, height?: number, thickness: number, lengthFt: number, pieces?: number }} dims
 */
export function calcStainlessWeight(shape, dims) {
  const { thickness: t, lengthFt, pieces = 1 } = dims;
  const factors = SS_WEIGHT[shape];
  if (!factors || !(t > 0) || !(lengthFt > 0) || !(pieces > 0)) {
    return { perFt: 0, perM: 0, pieceKg: 0, totalKg: 0, valid: false, error: null };
  }

  let section = 0;
  let error = null;

  if (shape === "round") {
    const od = Number(dims.od);
    if (!(od > 0)) return emptyResult("Enter a valid outside diameter.");
    if (t >= od / 2) error = "Thickness must be less than half the OD.";
    else section = (od - t) * t;
  } else if (shape === "square") {
    const side = Number(dims.side);
    if (!(side > 0)) return emptyResult("Enter a valid side length.");
    if (t >= side / 2) error = "Thickness must be less than half the side.";
    else section = (side - t) * t;
  } else if (shape === "rectangle") {
    const width = Number(dims.width);
    const height = Number(dims.height);
    if (!(width > 0) || !(height > 0)) return emptyResult("Enter valid width and height.");
    if (t >= Math.min(width, height) / 2) {
      error = "Thickness must be less than half the smaller side.";
    } else {
      section = (width + height - 2 * t) * t;
    }
  } else {
    return emptyResult("Unknown shape.");
  }

  if (error) return emptyResult(error);

  const perFt = section * factors.perFt;
  const perM = section * factors.perM;
  const pieceKg = perFt * lengthFt;
  const totalKg = pieceKg * pieces;

  return { perFt, perM, pieceKg, totalKg, valid: true, error: null };
}

function emptyResult(error) {
  return { perFt: 0, perM: 0, pieceKg: 0, totalKg: 0, valid: false, error };
}

export function formatKg(value) {
  if (!Number.isFinite(value) || value <= 0) return "—";
  if (value >= 100) return value.toFixed(1);
  if (value >= 10) return value.toFixed(2);
  return value.toFixed(3);
}
