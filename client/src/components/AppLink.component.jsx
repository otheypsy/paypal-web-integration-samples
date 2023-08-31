import { useMatch, useResolvedPath } from 'react-router-dom'

const icons = {
    gql: <i className="fa-solid fa-diagram-project mx-3" />,
    server: <i className="fa-solid fa-box-open mx-3"></i>,
    client: <i className="fa-solid fa-computer mx-3" />,
}

const AppLink = (props) => {
    const resolved = useResolvedPath(props.to)
    const match = useMatch({ path: resolved.pathname, end: false, caseSensitive: false })

    const onClick = () => props.onClick(props.to)

    return props.isVisible || match ? (
        <button
            className={'list-group-item list-group-item-action ' + (match ? 'active' : 'text-secondary')}
            onClick={onClick}
        >
            <p className="my-2">
                {icons[props.tag]}
                {props.label}
            </p>
        </button>
    ) : null
}

export default AppLink
