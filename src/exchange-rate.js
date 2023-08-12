export default class ExchangeRate {
  static async getRate(baseCurrency, targetCurrency, amount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${baseCurrency}/${targetCurrency}/${amount}`)
      if (!response.ok) {
        const error = `${response.status} ${response.statusText}`;
        throw new Error(error)
      }
      return await response.json();
    }
    catch (error) {
      return error;
    }
  }
}