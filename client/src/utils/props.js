import PropTypes from 'prop-types';

export const ResultPropType = PropTypes.shape({
  uid: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  ticker: PropTypes.any,
});
