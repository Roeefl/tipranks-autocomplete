import PropTypes from 'prop-types';
import { Alert as EGAlert } from 'evergreen-ui';

const ALLOWED_INTENTS = ['none', 'success', 'warning', 'danger'];
const [INTENT_NONE] = ALLOWED_INTENTS;

export const Alert = ({ intent, title, children }) => (
  <EGAlert
    intent={intent}
    title={title}
  >
    {children}
  </EGAlert>
);

Alert.propTypes = {
  intent: PropTypes.oneOf(ALLOWED_INTENTS),
  title: PropTypes.string,
  children: PropTypes.node,
};

Alert.defaultProps = {
  intent: INTENT_NONE,
  title: 'Alert',
};
