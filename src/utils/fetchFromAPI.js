import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/search";

const options = {
  url: BASE_URL,
  params: {
    part: "snippet",
    videoId: "M7FIvfx5J10",
  },
  headers: {
    "X-RapidAPI-Key": "1da844c477mshf7845b46ac546cdp172252jsnb4f6e7e80d85",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};
