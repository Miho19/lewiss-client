export function currencyFormat(value: number): string {
  return value.toLocaleString('en-us', {
    style: 'currency',
    currency: 'NZD',
  });
}
