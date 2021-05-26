import PropTypes from 'prop-types';
import { Pane, Spinner } from 'evergreen-ui';
import { ResultPropType } from 'utils/props';
import Result from 'components/Result';
import styles from './Results.module.scss';

export const Results = ({ isLoading, results, onDisplayAlert }) => (
  <div className={styles.container}>
    {isLoading &&
      <Pane className={styles.spinner}>
        <Spinner />
      </Pane>
    }
    {!isLoading &&
      <ul className={styles.results}>
        {results.map((result, index) => (
          <li key={result.uid} className={styles.result}>
            <Result result={{
              ...result,
              index
            }}
            onDisplayAlert={onDisplayAlert}
          />
          </li>
        ))}
      </ul>
    }
  </div>
);

Results.propTypes = {
  isLoading: PropTypes.bool,
  results: PropTypes.arrayOf(ResultPropType),
  onDisplayAlert: PropTypes.func.isRequired,
};

Results.defaultProps = {
  isLoading: false,
  results: [],
};
