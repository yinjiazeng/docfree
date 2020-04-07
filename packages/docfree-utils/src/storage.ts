const store = {};

let id = 0;

export const set = (value: any) => {
  id += 1;
  store[id] = value;

  return id;
};

export const get = (key: any) => {
  const value = store[key];
  // delete store[key];

  return value;
};
