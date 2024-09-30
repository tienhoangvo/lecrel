import { styled } from "@pigment-css/react";
import { ComponentProps, forwardRef } from "react";

import { Icon } from "./Icon";
import { toHSL } from "../../lib/utils";

export const ButtonRoot = styled("button", {
  name: "Button",
  slot: "root",
})<{ variant: ButtonProps["variant"] }>(({ theme }) => ({
  display: "inline-flex",
  height: "40px",
  borderRadius: theme.shape.corner.full,
  cursor: "pointer",

  "&:focus-visible": {
    outlineWidth: "3px",
    outlineOffset: "2px",
    outlineStyle: "solid",
    outlineColor: toHSL(theme.vars.scheme.secondary),
  },

  transitionProperty: "all",
  transitionDuration: theme.motion.duration.short4,
  transitionTimingFunction: theme.motion.easing.emphasized,
  "&:disabled": {
    backgroundColor: "unset",
    pointerEvents: "none",
    userSelect: "none",
    boxShadow: "none",
  },
  variants: [
    {
      props: {
        variant: "filled",
      },
      style: {
        backgroundColor: toHSL(theme.vars.scheme.primary),
        "&:hover": {
          boxShadow: theme.elevation.level1,
        },
        "&:active": {
          boxShadow: "none",
        },
      },
    },
    {
      props: {
        variant: "tonal",
      },
      style: {
        backgroundColor: toHSL(theme.vars.scheme.secondaryContainer),
        "&:hover": {
          boxShadow: theme.elevation.level1,
        },
        "&:active": {
          boxShadow: "none",
        },
      },
    },
    {
      props: {
        variant: "elevated",
      },
      style: {
        backgroundColor: toHSL(theme.vars.scheme.surfaceContainerLow),
        boxShadow: theme.elevation.level1,
        "&:hover": {
          boxShadow: theme.elevation.level2,
        },
        "&:active": {
          boxShadow: theme.elevation.level1,
        },
      },
    },
    {
      props: {
        variant: "outlined",
      },
      style: {
        border: `1px solid ${toHSL(theme.vars.scheme.outline)}`,
        "&:active": {
          borderColor: toHSL(theme.vars.scheme.primary),
        },
        "&:disabled": {
          borderColor: toHSL(theme.vars.scheme.outline, 0.12),
        },
      },
    },
    {
      props: {
        variant: "text",
      },
      style: {},
    },
  ],
}));

export const ButtonStateLayer = styled("span", {
  name: "Button",
  slot: "stateLayer",
})<{ variant: ButtonProps["variant"] }>(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  paddingBlock: "10px",
  paddingInline: "24px",
  borderRadius: theme.shape.corner.full,
  transitionProperty: "background-color",
  transitionDuration: theme.motion.duration.short4,
  transitionTimingFunction: theme.motion.easing.emphasized,
  variants: [
    {
      props: {
        variant: "filled",
      },
      style: {
        backgroundColor: toHSL(theme.vars.scheme.onPrimary, 0),
        color: toHSL(theme.vars.scheme.onPrimary),

        [`${ButtonRoot}:hover &`]: {
          backgroundColor: toHSL(theme.vars.scheme.onPrimary, 0.08),
        },
        [`${ButtonRoot}:active &`]: {
          backgroundColor: toHSL(theme.vars.scheme.onPrimary, 0.12),
        },
        [`${ButtonRoot}:disabled &`]: {
          backgroundColor: toHSL(theme.vars.scheme.onSurface, 0.12),
          color: toHSL(theme.vars.scheme.onSurface, 0.38),
        },
      },
    },
    {
      props: {
        variant: "tonal",
      },
      style: {
        backgroundColor: toHSL(theme.vars.scheme.onSecondaryContainer, 0),
        color: toHSL(theme.vars.scheme.onSecondaryContainer),

        [`${ButtonRoot}:hover &`]: {
          backgroundColor: toHSL(theme.vars.scheme.onSecondaryContainer, 0.08),
        },
        [`${ButtonRoot}:active &`]: {
          backgroundColor: toHSL(theme.vars.scheme.onSecondaryContainer, 0.12),
        },
        [`${ButtonRoot}:disabled &`]: {
          backgroundColor: toHSL(theme.vars.scheme.onSurface, 0.12),
          color: toHSL(theme.vars.scheme.onSurface, 0.38),
        },
      },
    },
    {
      props: {
        variant: "elevated",
      },
      style: {
        backgroundColor: toHSL(theme.vars.scheme.primary, 0),
        color: toHSL(theme.vars.scheme.primary),

        [`${ButtonRoot}:hover &`]: {
          backgroundColor: toHSL(theme.vars.scheme.primary, 0.08),
        },
        [`${ButtonRoot}:active &`]: {
          backgroundColor: toHSL(theme.vars.scheme.primary, 0.12),
        },
        [`${ButtonRoot}:disabled &`]: {
          backgroundColor: toHSL(theme.vars.scheme.onSurface, 0.12),
          color: toHSL(theme.vars.scheme.onSurface, 0.38),
        },
      },
    },
    {
      props: {
        variant: "outlined",
      },
      style: {
        backgroundColor: toHSL(theme.vars.scheme.primary, 0),
        color: toHSL(theme.vars.scheme.primary),

        [`${ButtonRoot}:hover &`]: {
          backgroundColor: toHSL(theme.vars.scheme.primary, 0.08),
        },
        [`${ButtonRoot}:active &`]: {
          backgroundColor: toHSL(theme.vars.scheme.primary, 0.12),
        },
        [`${ButtonRoot}:disabled &`]: {
          color: toHSL(theme.vars.scheme.onSurface, 0.38),
        },
      },
    },
    {
      props: {
        variant: "text",
      },
      style: {
        backgroundColor: toHSL(theme.vars.scheme.primary, 0),
        color: toHSL(theme.vars.scheme.primary),

        [`${ButtonRoot}:hover &`]: {
          backgroundColor: toHSL(theme.vars.scheme.primary, 0.08),
        },
        [`${ButtonRoot}:active &`]: {
          backgroundColor: toHSL(theme.vars.scheme.primary, 0.12),
        },
        [`${ButtonRoot}:disabled &`]: {
          color: toHSL(theme.vars.scheme.onSurface, 0.38),
        },
      },
    },
  ],
}));

export const ButtonIcon = styled(Icon)({
  fontSize: "18px",
  fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 18",
  marginInlineStart: "-8px",
});

export const ButtonLabel = styled("span")(({ theme }) => ({
  ...theme.typescale.label.large,
}));

// Generic type for polymorphic component
export interface ButtonProps extends ComponentProps<"button"> {
  iconName?: string;
  variant?: "text" | "outlined" | "filled" | "tonal" | "elevated";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ iconName, children, variant = "text", ...props }, ref) {
    return (
      <ButtonRoot as="button" ref={ref} variant={variant} {...props}>
        <ButtonStateLayer variant={variant}>
          {iconName && <ButtonIcon>{iconName}</ButtonIcon>}
          <ButtonLabel>{children}</ButtonLabel>
        </ButtonStateLayer>
      </ButtonRoot>
    );
  }
);
