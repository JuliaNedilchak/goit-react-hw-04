import axios from "axios";

//export const photoRequest = async () => {
//const { data } = await axios.get(
//"https://api.unsplash.com/photos/?client_id=rtxS2o_3Pq5jhEZNKWgvQxcGcFMaWJGb1oZei-ws2CE"
//);
//return data.results;
//};

export const photoRequestSearch = async (query, page) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=5&page=${page}&client_id=rtxS2o_3Pq5jhEZNKWgvQxcGcFMaWJGb1oZei-ws2CE`
  );
  return data.results;
};
