import PropTypes from 'prop-types'
import { Outlet, ScrollRestoration, useNavigate } from 'react-router-dom'
import Header from '../../lib/components/other/Header/Header.component'
import OutputView from '../components/OutputView'
import BusyModal from '../components/BusyModal'
import ContextModal from '../components/ContextModal'
import LinkWrapper from '../components/LinkWrapper'

const MainLayout = (props) => {
    const navigate = useNavigate()

    return (
        <>
            <BusyModal />
            <ContextModal />
            <Header title={props.label} onLink={navigate}>
                {props.links.map((link) => (
                    <div key={link.path} className="lead">
                        <LinkWrapper to={link.path} label={link.label} onClick={navigate} />
                    </div>
                ))}
            </Header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <Outlet />
                    </div>
                    <div className="col-4">
                        <OutputView />
                    </div>
                </div>
            </div>
            <ScrollRestoration />
        </>
    )
}

MainLayout.propTypes = {
    label: PropTypes.string,
    links: PropTypes.array,
}

export default MainLayout
