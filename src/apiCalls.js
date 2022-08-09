export const getUrls = () => {
  return fetch("http://localhost:3001/api/v1/urls").then((response) => {
    if (!response.ok) {
      throw new Error("Oops, something went wrong!!!!");
    } else {
      return response.json();
    }
  });
};