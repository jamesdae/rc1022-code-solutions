export default function toDollars(value) {
  return '$' + (value / 100).toFixed(2);
}
