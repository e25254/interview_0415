import { useCallback, useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = localStorage.getItem(key);
    return localStorage.getItem(key) ? JSON.parse(item) : initValue;
  });

  const setValue = useCallback(
    (value: T): void => {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key]
  );

  useEffect(() => {
    setValue(storedValue);
  }, [storedValue, key, setValue]);

  return [storedValue, setValue];
}
