export const currencyRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 153.24,
};

export const formatMoney = (amount, currency = "USD") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(Number(amount) || 0);

export const convertCurrency = (amount, from = "USD", to = "USD") => {
  const usdAmount = Number(amount) / currencyRates[from];
  return usdAmount * currencyRates[to];
};