import useLocalStorage from "../hooks/useLocalStorage";

/**
 * Retrieves a token from localStorage using the provided access key.
 * @param {string} accessKey - The access key used to retrieve the token from localStorage.
 * @returns {?string} - The retrieved token, or null if no token is found or the token is empty.
 */
export function getToken(accessKey: string) {
  const [token] = useLocalStorage(accessKey, "");

  if (token && token.length) {
    return token;
  }
  return null;
}
