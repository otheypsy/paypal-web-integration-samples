import PropTypes from 'prop-types'
import classNames from './VenmoButton.module.scss'

const VenmoButton = (props) => (
    <div className={classNames.logo} onClick={props.onClick} onKeyUp={props.onClick} role="button" tabIndex="0" />
)

VenmoButton.propTypes = {
    onClick: PropTypes.func,
}
export default VenmoButton
