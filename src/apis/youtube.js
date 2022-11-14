import axios from "axios";

const APIKEY = "AIzaSyAsed5V3lpkA0rhdR9knkyrab9Vgu0AEQA";

//initializing the youtube api
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: APIKEY,
  },
});
