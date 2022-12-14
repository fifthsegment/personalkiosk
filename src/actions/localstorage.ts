export const ApplicationStorageKey = "personalkiosk/application";
export const DomainStorageKey = "personalkiosk/domain";

export const getApplicationStateLS = (d = "{}") => {
  const value = localStorage.getItem(ApplicationStorageKey);
  if (value) {
    return JSON.parse(value);
  }
  return JSON.parse(d);
};

export const setApplicationStateLS = (value: any) => {
  return localStorage.setItem(ApplicationStorageKey, JSON.stringify(value));
};

export const getDomainStateLS = () => {
  const value = localStorage.getItem(DomainStorageKey) || "{}";
  return JSON.parse(value);
};

export const setDomainStateLS = (value: any) => {
  return localStorage.setItem(DomainStorageKey, JSON.stringify(value));
};
