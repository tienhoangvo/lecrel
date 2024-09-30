export function toHSL(color: string, alpha = 1) {
  return `hsl(${color} / ${alpha})`;
}
