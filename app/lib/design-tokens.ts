export const COLOR_TOKENS = {
  "chalk-pink": "#F2A7BE",
  "sienna-red": "#DC4240",
  "slate-grey": "#1E1E1E",
  "windjammer-blue": "#61A5DF",
  "coral-orange": "#E46846",
  pistachio: "#AEE7C3",
  raspberry: "#C3386C",
  daffodil: "#FFD168",
  white: "#FFFFFF",
  green: "#5DAE71",
  "chalk-white": "#F3EFEB",
  background: "#F8EADA",
  "coral-hover": "#F6D8CF",
  grey: "#6F6F6F",
} as const;

export const TYPOGRAPHY_TOKENS = {
  H1: {
    family: "var(--font-zilla-slab)",
    size: "60px",
    weight: 400,
    lineHeight: 1,
    letterSpacing: "0",
  },
  "sub-header-medium": {
    family: "var(--font-zilla-slab)",
    size: "24px",
    weight: 400,
    lineHeight: 1.45,
    letterSpacing: "0.5px",
  },
  "body-medium": {
    family: "var(--font-titillium-web)",
    size: "18px",
    weight: 400,
    lineHeight: 1.4,
    letterSpacing: "0",
  },
} as const;
