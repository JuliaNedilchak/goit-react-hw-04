import axios from "axios";

//export const photoRequest = async () => {
//const { data } = await axios.get(
//"https://api.unsplash.com/photos/?client_id=rtxS2o_3Pq5jhEZNKWgvQxcGcFMaWJGb1oZei-ws2CE"
//);
//return data.results;
//};

export const photoRequestSearch = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=rtxS2o_3Pq5jhEZNKWgvQxcGcFMaWJGb1oZei-ws2CE`
  );
  return data.results;
};
