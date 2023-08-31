import PropTypes from 'prop-types';
import walking from './walking.png';
import running from './running.png';
import desk from './desk.png';
import classNames from './GenericPage.module.scss'

const GenericPage = (props) => {

    return (
        <>
            {props.hasImage
                ? (<>
                    <div className={classNames.images}>
                        <img className="img-fluid" alt="Walking" src={walking} />
                        <img className="img-fluid" alt="Running" src={running} />
                        <img className="img-fluid" alt="Walking" src={walking} />
                        <img className="img-fluid" alt="Desk" src={desk} />
                    </div>
                </>)
                : <div className="py-5 my-5" />
            }

            <div className={'py-2 ' + classNames.container}>
                {props.message && <h1 className="display-2">{props.message}</h1>}
                {props.details && <h4 className={classNames.details}>{props.details}</h4>}
            </div>
            {props.children}
        </>
    )
};

GenericPage.propTypes = {
    /** Title for the generic page */
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /** Details for the generic page */
    details: PropTypes.string,
    /** Content to be rendered after generic message */
    children: PropTypes.any,
    /** Check if loading images should be rendered */
    hasImage: PropTypes.bool
};

GenericPage.defaultProps = {
    message: null,
    details: null,
    hasImage: true
};

export default GenericPage;
