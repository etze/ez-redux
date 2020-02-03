export const increment = (number = 1) => {
  return {
    type: "INCREMENT",
    payload: number
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};
