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

//          Values:   [time,   low,    high,   open,   close,  volume]
export type History = [number, number, number, number, number, number][];

// Docs: https://docs.pro.coinbase.com/#get-historic-rates
// Returns 60 second intervals for 300 records
const history = async () => get<History>('/products/BTC-USD/candles');

export const api = {
  history,
};
