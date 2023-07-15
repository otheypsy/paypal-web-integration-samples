import { Outlet, useNavigate } from 'react-router-dom'
import Nav from '../lib/components/other/Nav/Nav.component.jsx'
import LinkWrapper from '../components/LinkWrapper.component.jsx'

const PageLayout = (props) => {
    const navigate = useNavigate()

    return (
        <>
            <h3>{props.label}</h3>
            <hr />
            <Nav onClick={navigate}>
                {props.links &&
                    props.links.map((link) => (
                        <LinkWrapper key={link.path} to={link.path} label={link.label} onClick={navigate} />
                    ))}
            </Nav>
            <Outlet />
        </>
    )
}

export default PageLayout
