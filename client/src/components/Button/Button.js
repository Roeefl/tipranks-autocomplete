import PropTypes from 'prop-types';
import { Button as EGButton } from 'evergreen-ui';

const ALLOWED_APPEARANCES = ['default', 'primary', 'minimal'];
const [APPEARANCE_DEFAULT] = ALLOWED_APPEARANCES;

const ALLOWED_INTENTS = ['none', 'success', 'danger'];
const [INTENT_NONE] = ALLOWED_INTENTS;

export const Button = ({ type, appearance, intent, iconBefore, iconAfter, onClick, children, className }) => (
  <EGButton
    type={type}
    appearance={appearance}
    intent={intent}
    iconBefore={iconBefore}
    iconAfter={iconAfter}
    onClick={onClick}
    className={className}
  >
    {children}
  </EGButton>
);

Button.propTypes = {
  type: PropTypes.string,
  appearance: PropTypes.oneOf(ALLOWED_APPEARANCES),
  intent: PropTypes.oneOf(ALLOWED_INTENTS),
  iconBefore: PropTypes.object,
  iconAfter: PropTypes.object,
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  appearance: APPEARANCE_DEFAULT,
  intent: INTENT_NONE,
  onClick: () => {},
};
