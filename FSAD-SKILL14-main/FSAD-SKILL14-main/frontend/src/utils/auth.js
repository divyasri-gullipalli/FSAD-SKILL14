export const setUser = (id) => {
  localStorage.setItem("userId", id);
};

export const getUser = () => {
  return localStorage.getItem("userId");
};

export const logoutUser = () => {
  localStorage.clear();
};