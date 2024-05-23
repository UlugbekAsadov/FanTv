export function isValidURL(str?: string): boolean {
  if (!str) return false;

  // Regular expression to validate a URL
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' + // domain name and extension
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-zA-Z\\d%@_.~+&:]*)*' + // port and path
      '(\\?[;&a-zA-Z\\d%@_.,~+&:=-]*)?' + // query string
      '(\\#[-a-zA-Z\\d_]*)?$' // fragment locator
  );

  return pattern.test(str);
}
