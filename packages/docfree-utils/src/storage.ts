const store = {};

let id = 0;

export const set = function(value: any) {
  id += 1;
  store[id] = value;

  return id;
};

export const get = function(key: any) {
  const value = store[key];
  // delete store[key];

  return value;
};
