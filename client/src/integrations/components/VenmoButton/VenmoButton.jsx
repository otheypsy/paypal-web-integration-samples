import PropTypes from 'prop-types'
import classNames from './VenmoButton.module.scss'
const VenmoButton = (props) => {
    return <div className={classNames.logo} onClick={props.onClick} />
}

VenmoButton.propTypes = {
    onClick: PropTypes.func,
}
export default VenmoButton
