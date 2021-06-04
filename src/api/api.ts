const BASE_URL = 'https://api.pro.coinbase.com';

/*
 ** Helpers Start **
 */

interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);

  try {
    // may error if there is no body
    response.parsedBody = await response.json();
  } catch (ex) {
    // Handle error here
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

async function get<T>(
  path: string,
  // args: RequestInit = {method: 'get'},
): Promise<HttpResponse<T>> {
  return http<T>(`${BASE_URL}${path}`);
  // If we need args you can use the below, but causes require cycle
  // return await http<T>(new Request(`${BASE_URL}${path}`, args));
}

type HistoricalTradeSide = 'buy' | 'sell';

export type HistoricalTrade = {
  time: string;
  trade_id: number;
  price: string;
  size: string;
  side: HistoricalTradeSide;
};

export type History = HistoricalTrade[];

// Docs: https://docs.pro.coinbase.com/#get-trades
const history = async () => get<History>('/products/BTC-USD/trades');

export const api = {
  history,
};
