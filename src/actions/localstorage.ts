export const ApplicationStorageKey = "personalkiosk/application";
export const getApplicationStateLS = () => {
  const value = localStorage.getItem(ApplicationStorageKey) || "{}";
  return JSON.parse(value);
};

export const setApplicationStateLS = (value: any) => {
  return localStorage.setItem(ApplicationStorageKey, JSON.stringify(value));
};