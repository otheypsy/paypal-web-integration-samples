import { useMatch, useResolvedPath } from 'react-router-dom';

const AppLink = (props) => {

    const resolved = useResolvedPath(props.to);
    const match = useMatch({ path: resolved.pathname, end: false, caseSensitive: false });

    const onClick = () => props.onClick(props.to);

    return (props.isVisible || match)
        ? (
            <button
                className={'list-group-item list-group-item-action ' + (match ? 'active' : 'text-secondary')}
                onClick={onClick}>
                <p className="my-1">{props.label}</p>
            </button>
        )
        : null
};

export default AppLink;
