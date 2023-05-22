import { getMoviesByQuery } from 'components/fechApi';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import  MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});
    const query = searchParams.get('query');
    
  useEffect(() => {
    if (query) {
      getQueryMovies(query);
      }
      
      if (query === "") return;
  }, [query]);


    const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };
    
    
    
    
  async function getQueryMovies(query) {
    try {
     setLoading(true);
      const data = await getMoviesByQuery(query);
      setMovies(data);
      
    } catch {
        setLoading(false);
        setError(error);
    }finally {
     setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
          </form>
          {loading && 'Loading ...'}
          {movies && <MoviesList movies={movies} />}
          {error && <p>Something went wrong. Try again</p>}
      
    </>
  );
};
export default Movies;

