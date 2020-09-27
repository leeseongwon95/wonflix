import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "3ab0058f6363432bfc7704450dc5a5fe",
    language: "en-Us",
  },
});

api.get("tv/popular");
