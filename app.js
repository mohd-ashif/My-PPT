// number to currency format

function formatCurrency(number, locale = 'en-US', currency = 'USD') {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  });

  return formatter.format(number);
}

// Example usage:
const amount = 12345.67;
const formattedAmount = formatCurrency(amount);

console.log(formattedAmount); // Output: "$12,345.67" 

