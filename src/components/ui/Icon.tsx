import { styled } from "@pigment-css/react";

export const Icon = styled("span")<{
  variant?: "outlined" | "filled";
  size?: number;
}>(({ theme }) => ({
  fontFamily: theme.typeface.icon,
  fontWeight: "normal",
  fontStyle: "normal",
  fontSize: ({ size }) => `${size ? size : 24}px`,
  lineHeight: 1,
  letterSpacing: "normal",
  textTransform: "none",
  display: "inline-block",
  whiteSpace: "nowrap",
  wordWrap: "normal",
  direction: "ltr",
  WebkitFontFeatureSettings: "'liga'",
  WebkitFontSmoothing: "antialiased",
  transition: `font-variation-settings ${theme.motion.easing.emphasized} ${theme.motion.duration.short4}`,
  fontVariationSettings: ({ variant, size }) =>
    `'FILL' ${variant === "filled" ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${
      size ? size : 24
    }`,
}));
