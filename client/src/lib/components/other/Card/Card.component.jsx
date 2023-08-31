import PropTypes from 'prop-types';
import classNames from './Card.module.scss';

const Card = (props) => {
    return (
        <div className={'card ' + classNames.card}>
            <div className="card-body">
                {props.title && <h4 className={'card-title ' + classNames.title}>{props.title}</h4>}
                {props.subTitle && <h6 className={'card-subtitle ' + classNames.subTitle}>{props.subTitle}</h6>}
                {(props.label || props.subTitle) && <hr />}
                {props.children}
            </div>
        </div>

    )
};

Card.propTypes = {
    /** Title for the card */
    title: PropTypes.string,
    /** Subtitle for the card */
    subTitle: PropTypes.string,
    /** Content to be rendered inside the card body */
    children: PropTypes.any
};

Card.defaultProps = {
    title: null,
    subTitle: null,
    children: null
};

export default Card;
