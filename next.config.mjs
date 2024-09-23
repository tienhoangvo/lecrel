import { withPigment, extendTheme } from "@pigment-css/nextjs-plugin";

const theme = extendTheme({
  typeface: {
    brand: "var(--font-brand)",
    plain: "var(--font-plain)",
    weight: {
      regular: "400",
      medium: "500",
      bold: "700",
    },
  },
  typescale: {
    display: {
      large: {
        fontFamily: "var(--typeface-brand)",
        fontWeight: "var(--typeface-weight-regular)",
        fontSize: "57px",
        lineHeight: "64px",
        letterSpacing: "-0.25px",
      },
      medium: {
        fontFamily: "var(--typeface-brand)",
        fontWeight: "var(--typeface-weight-regular)",
        fontSize: "45px",
        lineHeight: "52px",
        letterSpacing: "0",
      },
      small: {
        fontFamily: "var(--typeface-brand)",
        fontWeight: "var(--typeface-weight-regular)",
        fontSize: "35px",
        lineHeight: "44px",
        letterSpacing: "0",
      },
    },
    headline: {
      large: {
        fontFamily: "var(--typeface-brand)",
        fontWeight: "var(--typeface-weight-regular)",
        fontSize: "32px",
        lineHeight: "40px",
        letterSpacing: "0",
      },
      medium: {
        fontFamily: "var(--typeface-brand)",
        fontWeight: "var(--typeface-weight-regular)",
        fontSize: "28px",
        lineHeight: "36px",
        letterSpacing: "0",
      },
      small: {
        fontFamily: "var(--typeface-brand)",
        fontWeight: "var(--typeface-weight-regular)",
        fontSize: "24px",
        lineHeight: "32px",
        letterSpacing: "0",
      },
    },
    title: {
      large: {
        fontFamily: "var(--typeface-brand)",
        fontWeight: "var(--typeface-weight-regular)",
        fontSize: "22px",
        lineHeight: "28px",
        letterSpacing: "0",
      },
      medium: {
        fontFamily: "var(--typeface-plain)",
        fontWeight: "var(--typeface-weight-medium)",
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.15px",
      },
      small: {
        fontFamily: "var(--typeface-plain)",
        fontWeight: "var(--typeface-weight-medium)",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.1px",
      },
    },
    label: {
      large: {
        fontFamily: "var(--typeface-plain)",
        fontWeight: "var(--typeface-weight-medium)",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.1px",
      },
      medium: {
        fontFamily: "var(--typeface-plain)",
        fontWeight: "var(--typeface-weight-medium)",
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "0.5px",
      },
      small: {
        fontFamily: "var(--typeface-plain)",
        fontWeight: "var(--typeface-weight-medium)",
        fontSize: "11px",
        lineHeight: "16px",
        letterSpacing: "0.5px",
      },
    },
    body: {
      large: {
        fontFamily: "var(--typeface-plain)",
        fontWeight: "var(--typeface-weight-regular)",
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.5px",
      },
      medium: {
        fontFamily: "var(--typeface-plain)",
        fontWeight: "var(--typeface-weight-regular)",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.25px",
      },
      small: {
        fontFamily: "var(--typeface-plain)",
        fontWeight: "var(--typeface-weight-regular)",
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "0.4px",
      },
    },
  },
  shape: {
    corner: {
      none: 0,
      extraSmall: 4,
      small: 8,
      medium: 12,
      large: 16,
      extraLarge: 28,
      full: 9999,
    },
  },
  elevation: {
    level1:
      "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
    level2:
      "0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
    level3:
      "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30)",
    level4:
      "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.30)",
    level5:
      "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30)",
  },
  motion: {
    easing: {
      emphasized: "cubic-bezier(0.2, 0.0, 0, 1.0)",
      emphasizedAccelerate: "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
      emphasizedDecelerate: "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
      standard: "cubic-bezier(0.2, 0.0, 0, 1.0)",
      standardAccelerate: "cubic-bezier(0.3, 0, 1, 1)",
      standardDecelerate: "cubic-bezier(0, 0, 0, 1)",
    },
    duration: {
      short1: "50ms",
      short2: "100ms",
      short3: "150ms",
      short4: "200ms",
      medium1: "250ms",
      medium2: "300ms",
      medium3: "350ms",
      medium4: "400ms",
      long1: "450ms",
      long2: "500ms",
      long3: "550ms",
      long4: "600ms",
      extraLong1: "700ms",
      extraLong2: "800ms",
      extraLong3: "900ms",
      extraLong4: "1000ms",
    },
  },
  colorSchemes: {
    light: {
      scheme: {
        primary: "79 44 27",
        onPrimary: "0 0 100",
        primaryContainer: "79 67 77",
        onPrimaryContainer: "81 100 6",
        primaryFixed: "79 67 77",
        onPrimaryFixed: "81 100 6",
        primaryFixedDim: "80 44 67",
        onPrimaryFixedVariant: "79 66 18",
        secondary: "77 15 33",
        onSecondary: "0 0 100",
        secondaryContainer: "75 40 84",
        onSecondaryContainer: "80 54 8",
        secondaryFixed: "75 40 84",
        onSecondaryFixed: "80 54 8",
        secondaryFixedDim: "75 23 73",
        onSecondaryFixedVariant: "79 20 24",
        tertiary: "172 28 31",
        onTertiary: "0 0 100",
        tertiaryContainer: "170 56 83",
        onTertiaryContainer: "174 100 6",
        tertiaryFixed: "170 56 83",
        onTertiaryFixed: "174 100 6",
        tertiaryFixedDim: "170 34 72",
        onTertiaryFixedVariant: "173 42 22",
        error: "0 75 42",
        onError: "0 0 100",
        errorContainer: "6 100 92",
        onErrorContainer: "358 100 13",
        outline: "69 6 45",
        background: "60 55 96",
        onBackground: "77 14 10",
        surface: "60 55 96",
        onSurface: "77 14 10",
        surfaceVariant: "68 23 86",
        onSurfaceVariant: "75 9 28",
        inverseSurface: "75 9 18",
        inverseOnSurface: "60 28 92",
        inversePrimary: "80 44 67",
        shadow: "0 0 0",
        surfaceTint: "79 44 27",
        outlineVariant: "68 12 75",
        scrim: "0 0 0",
        surfaceContainerHighest: "60 18 87",
        surfaceContainerHigh: "60 21 89",
        surfaceContainer: "65 27 91",
        surfaceContainerLow: "60 35 93",
        surfaceContainerLowest: "0 0 100",
        surfaceBright: "60 55 96",
        surfaceDim: "65 14 84",
      },
    },
    dark: {
      scheme: {
        primary: "80 44 67",
        onPrimary: "79 100 11",
        primaryContainer: "79 66 18",
        onPrimaryContainer: "79 67 77",
        primaryFixed: "79 67 77",
        onPrimaryFixed: "81 100 6",
        primaryFixedDim: "80 44 67",
        onPrimaryFixedVariant: "79 66 18",
        secondary: "75 23 73",
        onSecondary: "79 28 16",
        secondaryContainer: "79 20 24",
        onSecondaryContainer: "75 40 84",
        secondaryFixed: "75 40 84",
        onSecondaryFixed: "80 54 8",
        secondaryFixedDim: "75 23 73",
        onSecondaryFixedVariant: "79 20 24",
        tertiary: "170 34 72",
        onTertiary: "174 96 11",
        tertiaryContainer: "173 42 22",
        onTertiaryContainer: "170 56 83",
        tertiaryFixed: "170 56 83",
        onTertiaryFixed: "174 100 6",
        tertiaryFixedDim: "170 34 72",
        onTertiaryFixedVariant: "173 42 22",
        error: "6 100 84",
        onError: "357 100 21",
        errorContainer: "356 100 29",
        onErrorContainer: "6 100 92",
        outline: "73 6 55",
        background: "77 21 6",
        onBackground: "60 18 87",
        surface: "77 21 6",
        onSurface: "60 18 87",
        surfaceVariant: "75 9 26",
        onSurfaceVariant: "68 12 75",
        inverseSurface: "60 18 87",
        inverseOnSurface: "75 9 18",
        inversePrimary: "79 44 27",
        shadow: "0 0 0",
        surfaceTint: "80 44 87",
        outlineVariant: "75 9 26",
        scrim: "0 0 0",
        surfaceContainerHighest: "75 8 20",
        surfaceContainerHigh: "75 10 15",
        surfaceContainer: "77 12 11",
        surfaceContainerLow: "77 14 10",
        surfaceContainerLowest: "80 25 5",
        surfaceBright: "75 7 21",
        surfaceDim: "77 21 6",
      },
    },
  },
  layout: {
    windowClass: {
      mediumAndUp: "600",
      expandedAndUp: "840",
      largeAndUp: "1200",
      extraLargeAndUp: "1600",
    },
    spacing: "24px",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPigment(nextConfig, { theme });
