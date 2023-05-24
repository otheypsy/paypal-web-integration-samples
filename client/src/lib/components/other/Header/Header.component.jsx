import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'bootstrap'
import PPWhiteMonogram from './pp_monogram_white.svg'
import classNames from './Header.module.scss'

const Header = (props) => {
    const navRef = useRef(undefined)
    const [handler, setHandler] = useState(undefined)

    useEffect(() => {
        const jsHandler = new Collapse(navRef.current, { toggle: false })
        setHandler(jsHandler)
    }, [navRef])

    const onToggle = async () => handler.toggle()
    const logoClick = () => props.onLink(props.logoPath)

    return (
        <>
            <nav className={'navbar navbar-expand-lg ' + classNames.nav}>
                <div className="container-fluid">
                    <span className="navbar-brand text-white" onClick={logoClick}>
                        <PPWhiteMonogram className={'d-inline-block ' + classNames.logo} />
                        <span className="fs-4 px-3 align-middle">{props.title}</span>
                    </span>
                    <button className="navbar-toggler btn btn-outline-light" type="button" onClick={onToggle}>
                        <span className="fa-solid fa-ellipsis-v" />
                    </button>
                    <div ref={navRef} className="collapse navbar-collapse">
                        <ul className="navbar-nav mb-2 mb-lg-0">{props.children}</ul>
                        <div className="d-flex"></div>
                    </div>
                </div>
            </nav>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    logoPath: PropTypes.string,
    onLink: PropTypes.func,
    children: PropTypes.node,
}

Header.defaultProps = {
    title: 'PayPal Framework',
    logoPath: '/',
    links: [],
    onClick: () => true,
}

export default Header
