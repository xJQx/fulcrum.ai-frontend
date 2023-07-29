// TODO: add deployed server base url
/**
 * @development http://127.0.0.1:8000/
 * @production ""
 */
export const serverBaseUrl =
  process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000/" : "";
