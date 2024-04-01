import { useState } from 'react';

/**
 * Custom React hook for managing state with localStorage persistence.
 * @param {string} key - The key under which to store the value in localStorage.
 * @param {*} defaultValue - The default value to be used if no value is found in localStorage.
 * @returns {[*, function]} - A tuple containing the state value and a function to update it.
 */
const useLocalStorage = (key: string, defaultValue: NonNullable<unknown>) => {
  // Create state variable to store
  // localStorage value in state
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      // If value is already present in
      // localStorage then return it

      // Else set default value in
      // localStorage and then return it
      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  // this method update our localStorage and our state
  const setLocalStorageStateValue = (value: NonNullable<unknown>) => {
    localStorage.setItem(key, JSON.stringify(value));
    setLocalStorageValue(value);
  };
  return [localStorageValue, setLocalStorageStateValue];
};

export default useLocalStorage;
