export const useGradientColor = (gradient: string): [string, string] => {
  if (!gradient.includes('linear-gradient')) {
    return [gradient, gradient];
  }
  const hexRegex = /#([0-9a-f]{6}|[0-9a-f]{3})/gi;
  const colors = gradient.match(hexRegex) as [string, string];

  return [colors[0], colors[1]];
};
