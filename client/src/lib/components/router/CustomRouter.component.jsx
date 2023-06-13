import { BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import GenericPage from '../other/GenericPage/GenericPage.component'
import Mount from './Mount.component'

const CustomRouter = (props) => {
    return props.isBase ? (
        <Router basename={props.basePath}>
            <Mount {...props} />
        </Router>
    ) : (
        <Mount {...props} />
    )
}

CustomRouter.propTypes = {
    /** Base path of mount */
    basePath: PropTypes.string,
    /** Check if base mainRouter of application */
    isBase: PropTypes.bool,
    /** Routes for the mainRouter */
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string,
            component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
        }),
    ),
    /** Layout of the mainRouter */
    layout: PropTypes.func,
    /** Template when route cannot be found */
    notFound: PropTypes.func,
}

CustomRouter.defaultProps = {
    basePath: '/',
    isBase: false,
    routes: [],
    layout: () => <GenericPage message="Oops" details="Layout not provided to `CustomerRouter`" />,
    notFound: () => <GenericPage message="404" details="Not Found" />,
}

export default CustomRouter
