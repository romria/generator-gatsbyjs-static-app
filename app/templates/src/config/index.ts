export const API_BASE_URL = process.env.GATSBY_API_BASE_URL || 'http://localhost:8080';
export const WEBSITE_BASE_URL = process.env.GATSBY_WEBSITE_BASE_URL;

export const REQUEST_HEADERS = {
  // 'Access-Control-Request-Headers': 'access-control-allow-origin',
  'Accept': 'application/json',
  'Content-Type': 'application/json; charset=UTF-8',
};
