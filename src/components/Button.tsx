import { styled } from "@pigment-css/react";

export const Button = styled("button")(({ theme }) => ({
  display: "inline-flex",
  height: "40px",
  paddingInline: "24px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: theme.shape.corner.full,
  border: "none",
  ...theme.typescale.label.large,
  backgroundColor: `hsl(${theme.vars.scheme.primary})`,
  color: `hsl(${theme.vars.scheme.onPrimary})`,
  cursor: "pointer",
}));
