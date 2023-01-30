export const getDataFromLocalStorage = (key: string): any => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
  };
  
export const setDataInLocalStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
export const removeDataFromLocalStorage = (key: string): void => {
    localStorage.removeItem(key);
  };
  