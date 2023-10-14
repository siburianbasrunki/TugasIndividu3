import axios from "axios";

const apiKey = "1ccd20a8452d634349de82ab750e3f57";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie data: ", error);
    return [];
  }
};
