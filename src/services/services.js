import axios from "axios";
import camelCaseKeys from "camelcase-keys";

export const getSearchSuggestions = async (searchWords) => {
  const params = { params: { q: searchWords } };
  const response = await axios.get(
    "http://localhost:5000/search",
    params
  );
  return {
    ...response,
    data: camelCaseKeys(response.data, { deep: true }),
  };
};

export const getMostSearchedWords = async () => {
  const response = await axios.get(
    "http://localhost:5000/search",
  );
  return {
    ...response,
    data: camelCaseKeys(response.data, { deep: true }),
  };
};
