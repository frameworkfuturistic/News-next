
export const getLocalStorageItem = (key) => {
    if (typeof window !== 'undefined') {
      // Check if window is defined (client-side)
      return window.localStorage.getItem(key);
    }
    return null; // Return null on the server side
  };
  