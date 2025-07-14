const setLocalStorage = (key: string, value: any) => {
  return new Promise((resolve, reject) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
      resolve(true);
    } else {
      reject(false);
    }
  });
};

const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
  }
  return {};
};

const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

const clearLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};

export {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  clearLocalStorage,
};
