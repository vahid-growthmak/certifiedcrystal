// Format an integer rupee amount with Indian digit grouping, e.g. 1490 -> "Rs. 1,490".
export const formatPrice = (n: number): string => `Rs. ${n.toLocaleString("en-IN")}`;

// Discount percentage, rounded to a whole number.
export const discountPct = (price: number, compareAt: number): number =>
  Math.round(((compareAt - price) / compareAt) * 100);
