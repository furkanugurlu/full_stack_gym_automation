export const API_URL = "http://localhost:3001";

export const getImage = (i, status) =>
  `https://source.unsplash.com/600x${400 + i}/?${status}`;
