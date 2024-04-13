export function currency(value: number) {
  return new Intl.NumberFormat('us-US', {
    style: 'currency',
    minimumFractionDigits: 0,
    currency: 'USD',
  }).format(value)
}
