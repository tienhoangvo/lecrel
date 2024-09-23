import type {} from "@pigment-css/react/theme";
import type { ExtendTheme } from "@pigment-css/react";

type FontWeight = "400" | "500" | "700";

type Typeface = {
  brand: string;
  plain: string;
  weight: {
    regular: FontWeight;
    medium: FontWeight;
    bold: FontWeight;
  };
};

type FontSize = {
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
};

type TypeScale = {
  display: {
    large: FontSize;
    medium: FontSize;
    small: FontSize;
  };
  headline: {
    large: FontSize;
    medium: FontSize;
    small: FontSize;
  };
  title: {
    large: FontSize;
    medium: FontSize;
    small: FontSize;
  };
  label: {
    large: FontSize;
    medium: FontSize;
    small: FontSize;
  };
  body: {
    large: FontSize;
    medium: FontSize;
    small: FontSize;
  };
};

type Shape = {
  corner: {
    none: number;
    extraSmall: number;
    small: number;
    medium: number;
    large: number;
    extraLarge: number;
    full: number;
  };
};

type Elevation = {
  level1: string;
  level2: string;
  level3: string;
  level4: string;
  level5: string;
};

type Motion = {
  easing: {
    emphasized: string;
    emphasizedAccelerate: string;
    emphasizedDecelerate: string;
    standard: string;
    standardAccelerate: string;
    standardDecelerate: string;
  };
  duration: {
    short1: string;
    short2: string;
    short3: string;
    short4: string;
    medium1: string;
    medium2: string;
    medium3: string;
    medium4: string;
    long1: string;
    long2: string;
    long3: string;
    long4: string;
    extraLong1: string;
    extraLong2: string;
    extraLong3: string;
    extraLong4: string;
  };
};

type ColorScheme = {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  primaryFixed: string;
  onPrimaryFixed: string;
  primaryFixedDim: string;
  onPrimaryFixedVariant: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  secondaryFixed: string;
  onSecondaryFixed: string;
  secondaryFixedDim: string;
  onSecondaryFixedVariant: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  tertiaryFixed: string;
  onTertiaryFixed: string;
  tertiaryFixedDim: string;
  onTertiaryFixedVariant: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  outline: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  shadow: string;
  surfaceTint: string;
  outlineVariant: string;
  scrim: string;
  surfaceContainerHighest: string;
  surfaceContainerHigh: string;
  surfaceContainer: string;
  surfaceContainerLow: string;
  surfaceContainerLowest: string;
  surfaceBright: string;
  surfaceDim: string;
};

type DesignTokens = {
  typeface: Typeface;
  typescale: TypeScale;
  shape: Shape;
  elevation: Elevation;
  motion: Motion;
  scheme: ColorScheme;
};

declare module "@pigment-css/react/theme" {
  export interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: "light" | "dark";
      tokens: DesignTokens;
    }>;
  }
}

declare global {
  namespace React {
    interface HTMLAttributes {
      sx?:
        | React.CSSProperties
        | ((theme: Theme) => React.CSSProperties)
        | ReadonlyArray<
            React.CSSProperties | ((theme: Theme) => React.CSSProperties)
          >;
    }
  }
}
