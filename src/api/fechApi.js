import axios from 'axios';


//https://api.themoviedb.org/3/movie/550?api_key=4e74e3ce82b875f858122cbc5cfec5bf



const KEY = '4e74e3ce82b875f858122cbc5cfec5bf';

export const getMovies = async () => {
    try {
 const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}&language=en-US`
  );

  return response.data.results;
    } catch (error) {
     console.log(error);
   }
};

export const getMoviesByQuery = async (query) => {
    try {
 const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}&language=en-US`
      );
      return response.data.results;
      
    } catch (error) {
     console.log(error);
   }
};

export const fetchMoviesDetails = async (id) => {
    try {
 const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
      );
      return response.data;
      
    } catch (error) {
     console.log(error);
   }
}

export const fetchMoviesCredits = async (id) => {
    try {
 const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
   
  return response.data.cast;
    } catch (error) {
     console.log(error);
   }
}


export const fetchMoviesReviews  = async (id) => {
    try {
 const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US`
  );
  console.log(response.data.results);
  return response.data.results;
    } catch (error) {
     console.log(error);
   }
}


