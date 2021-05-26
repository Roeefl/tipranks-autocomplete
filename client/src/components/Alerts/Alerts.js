import PropTypes from 'prop-types';
import cx from 'classnames';
import Alert from 'components/Alert';
import styles from './Alerts.module.scss';

export function Alerts({ alerts, className }) {
  return (
    <ul className={cx(styles.container, className)}>
      {alerts.map(alert => (
        <li key={alert.id} className={styles.alert}>
          <Alert intent={alert.intent} title={alert.title}>
            {alert.content}
          </Alert>
        </li>
      ))}
    </ul>
  )
}

Alerts.propTypes = {
  alerts: PropTypes.array,
  className: PropTypes.string,
};

Alerts.defaultProps = {
  alerts: [],
};

