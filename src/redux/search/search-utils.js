import axios from "axios";

export const fetchVideos = async (searchItem, offset) => {
  try {
    const { data } = await axios.get(
      `search?maxResults=${offset}&q=${searchItem}`
    );
    return data;
    
  } catch (error) {
      console.log(error);
  }
};
export const fetchNextPageVideos = async (
  searchItem,
  offset,
  nextPageToken
) => {
  try {
    
    const {data} = await axios(
      `search?maxResults=${offset}&q=${searchItem}&pageToken=${nextPageToken}`
    )
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrending = async (offset) => {
  let data = await axios(
    `videos?chart=mostPopular&regionCode=IN&maxResults=${offset}`
  )
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return data;
};

axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/";
axios.defaults.params = {
  key: process.env.REACT_APP_API_KEY,
  type: "video",
  part: "snippet",
};
