import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

// Updated to improve error handling
export const fetchDataFromApi = async (url) => {
  try {
    const options = {
      params: { hl: "en", gl: "US" },
      headers: {
        "X-RapidAPI-Key": 'c6563d8b64msh5b0dcd8ae61befdp145daejsndecba9ea7ad1', 
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("There was an error fetching data from the API", error);
    // Consider how you want to handle errors (e.g., returning null or an error object)
    return null;
  }
};
