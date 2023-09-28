import ky from "ky";

export const api = ky.create({
  prefixUrl:
    "https://my-cors-anywhere-4a4bc597d6ec.herokuapp.com/https://api.deezer.com",
});
