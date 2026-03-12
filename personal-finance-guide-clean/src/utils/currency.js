export const conversionRates = {
  USD: 1,
  EUR: 0.93,
  GBP: 0.82,
  JPY: 147.5,
};

export function convertCurrency(amount, fromCurrency, toCurrency) {
  if (!conversionRates[fromCurrency] || !conversionRates[toCurrency]) return amount;
  const usdAmount = amount / conversionRates[fromCurrency]; // to USD
  return usdAmount * conversionRates[toCurrency];
}