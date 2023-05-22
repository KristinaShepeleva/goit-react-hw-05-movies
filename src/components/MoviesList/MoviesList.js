import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies, prevLocation }) => {
  // const location = useLocation();
  // console.log(location.pathname);
  return (
    <>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: prevLocation }}>
              
              <p>{original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default MoviesList;