export function formatCurrency(number: number): string {
  return Intl.NumberFormat('fr-FR').format(number);
}
