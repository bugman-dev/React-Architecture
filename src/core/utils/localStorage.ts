import useLocalStorage from '../hooks/useLocalStorage';

/**
 * Retrieves a token from localStorage using the provided access key.
 * @param {string} accessKey - The access key used to retrieve the token from localStorage.
 * @returns {?string} - The retrieved token, or null if no token is found or the token is empty.
 */
export function getToken(accessKey: string) {
  const token = getLocalStorageData(accessKey);

  if (token) {
    return token;
  }
  return null;
}

/**
 * Sets data in the local storage under the specified key.
 * @param {string} key - The key under which the data will be stored in local storage.
 * @param {T} data - The data to be stored in local storage.
 * @template T - The type of data being stored.
 * @returns {void}
 */
export const setLocalStorageData = <T>(key: string, data: T): void => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error('Error setting data in local storage:', error);
  }
};

/**
 * Retrieves data from the local storage associated with the specified key.
 * @param {string} key - The key used to retrieve the data from local storage.
 * @template T - The type of data being retrieved.
 * @returns {T | null} - The retrieved data if it exists, or null if no data is found or an error occurs.
 */
export const getLocalStorageData = <T>(key: string): T | null => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return null;
    }
    return JSON.parse(serializedData) as T;
  } catch (error) {
    console.error('Error getting data from local storage:', error);
    return null;
  }
};
