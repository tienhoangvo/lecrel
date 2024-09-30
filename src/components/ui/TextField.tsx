import { styled } from "@pigment-css/react";
import { type ComponentProps, forwardRef } from "react";

import { toHSL } from "./../../lib/utils";

export const TextFieldRoot = styled("div", {
  name: "TextField",
  slot: "root",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "4px 16px",
  backgroundColor: toHSL(theme.vars.scheme.surfaceContainer),
  borderBottom: `1px solid ${toHSL(theme.vars.scheme.onSurfaceVariant)}`,
  [`&:has(${TextFieldInput}:focus-visible)`]: {
    borderBottomWidth: "3px",
  },
}));

export const TextFieldLabel = styled("label", {
  name: "TextField",
  slot: "label",
})(({ theme }) => ({
  ...theme.typescale.body.small,
  color: toHSL(theme.vars.scheme.onSurfaceVariant),
}));

export const TextFieldInput = styled("input", {
  name: "TextField",
  slot: "input",
})(({ theme }) => ({
  ...theme.typescale.body.large,
  backgroundColor: "transparent",
  color: toHSL(theme.vars.scheme.onSurface),
  "&:focus-visible": {
    outline: "none",
  },

  "&::placeholder": {
    color: toHSL(theme.vars.scheme.onSurfaceVariant),
  },
}));

interface TextFieldProps extends ComponentProps<"input"> {
  label: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function State(props, ref) {
    const { name, label, value, id, onChange, ...delegated } = props;
    return (
      <TextFieldRoot>
        <TextFieldLabel htmlFor={id}>{label}</TextFieldLabel>
        <TextFieldInput
          id={id}
          ref={ref}
          name={name}
          value={value}
          onChange={onChange}
          {...delegated}
        />
      </TextFieldRoot>
    );
  }
);
