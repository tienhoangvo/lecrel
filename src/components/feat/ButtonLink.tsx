import { type ComponentPropsWithoutRef, forwardRef } from "react";
import Link from "next/link";

import {
  ButtonLabel,
  ButtonIcon,
  ButtonRoot,
  ButtonStateLayer,
  type ButtonProps,
} from "../ui/Button";

interface ButtonLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  variant?: ButtonProps["variant"];
  iconName?: string;
}

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    { href, children, variant = "text", iconName, ...props },
    ref
  ) {
    return (
      <ButtonRoot variant={variant} as={Link} href={href} ref={ref} {...props}>
        <ButtonStateLayer variant={variant}>
          {iconName && <ButtonIcon>{iconName}</ButtonIcon>}
          <ButtonLabel>{children}</ButtonLabel>
        </ButtonStateLayer>
      </ButtonRoot>
    );
  }
);
