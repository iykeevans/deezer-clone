import ky from "ky";

export const api = ky.create({
  prefixUrl: import.meta.env.VITE_DEEZER_API,
});
