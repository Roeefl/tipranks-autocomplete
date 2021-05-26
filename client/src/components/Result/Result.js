import PropTypes from 'prop-types';
import { ResultPropType } from 'utils/props';
import Button from 'components/Button';
import styles from './Result.module.scss';

export const Result = ({ result, onDisplayAlert }) => {
  const {
    index,
    uid,
    category,
    label,
    value,
  } = result;

  const onContainerClick = () => {
    onDisplayAlert('warning', 'Stock list position and company name:', `${index}, ${label}`);
  };

  const onUidClick = (e) => {
    e.stopPropagation();
    onDisplayAlert('success', 'Stock UID:', uid);
  };

  return (
    <div onClick={onContainerClick} className={styles.result}>
      <h3 className={styles.label}>
        {label}
      </h3>
      <h4 className={styles.category}>
        Category: {category}
      </h4>
      <Button onClick={onUidClick} className={styles.uid}>
        UID: {uid}
      </Button>
      <p className={styles.value}>
        Value: {value}
      </p>
    </div>
  );
};

Result.propTypes = {
  result: ResultPropType,
  onDisplayAlert: PropTypes.func.isRequired,
};

Result.defaultProps = {
  result: {},
};
