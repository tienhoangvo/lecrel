import { styled } from "@pigment-css/react";

export const Text = styled("p")<{
  variant?:
    | "display/large"
    | "display/medium"
    | "display/small"
    | "headline/large"
    | "headline/medium"
    | "headline/small"
    | "title/large"
    | "title/medium"
    | "title/small"
    | "label/large"
    | "label/medium"
    | "label/small"
    | "body/large"
    | "body/medium"
    | "body/small";
}>(({ theme }) => ({
  ...theme.typescale.body.large,
  variants: [
    {
      props: {
        variant: "display/large",
      },
      style: {
        ...theme.typescale.display.large,
      },
    },
    {
      props: {
        variant: "display/medium",
      },
      style: {
        ...theme.typescale.display.medium,
      },
    },
    {
      props: {
        variant: "display/small",
      },
      style: {
        ...theme.typescale.display.small,
      },
    },
    {
      props: {
        variant: "title/large",
      },
      style: {
        ...theme.typescale.title.large,
      },
    },
    {
      props: {
        variant: "title/medium",
      },
      style: {
        ...theme.typescale.title.medium,
      },
    },
    {
      props: {
        variant: "title/small",
      },
      style: {
        ...theme.typescale.title.small,
      },
    },
    {
      props: {
        variant: "headline/large",
      },
      style: {
        ...theme.typescale.headline.large,
      },
    },
    {
      props: {
        variant: "headline/medium",
      },
      style: {
        ...theme.typescale.headline.medium,
      },
    },
    {
      props: {
        variant: "headline/small",
      },
      style: {
        ...theme.typescale.headline.small,
      },
    },
    {
      props: {
        variant: "label/large",
      },
      style: {
        ...theme.typescale.label.large,
      },
    },
    {
      props: {
        variant: "label/medium",
      },
      style: {
        ...theme.typescale.label.medium,
      },
    },
    {
      props: {
        variant: "label/small",
      },
      style: {
        ...theme.typescale.label.small,
      },
    },
    {
      props: {
        variant: "body/large",
      },
      style: {
        ...theme.typescale.body.large,
      },
    },
    {
      props: {
        variant: "body/medium",
      },
      style: {
        ...theme.typescale.body.medium,
      },
    },
    {
      props: {
        variant: "body/small",
      },
      style: {
        ...theme.typescale.body.small,
      },
    },
  ],
}));
