import { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Modal as BootstrapModal } from 'bootstrap'

const Modal = (props) => {
    const modalRef = useRef(undefined)

    useEffect(() => {
        const modal = modalRef.current
        BootstrapModal.getOrCreateInstance(modal)
        modal.addEventListener('hidden.bs.modal', props.onClose)

        return () => {
            modal.removeEventListener('hidden.bs.modal', props.onClose)
        }
    }, [props.onClose])

    useEffect(() => {
        const modalInstance = BootstrapModal.getInstance(modalRef.current)
        props.isOpen ? modalInstance.show() : modalInstance.hide()
    }, [props.isOpen])

    return (
        <>
            <div className="modal fade" ref={modalRef} tabIndex="-1">
                <div className="modal-dialog modal-xl modal-fullscreen-xxl-down modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.title}</h5>
                            <button className="btn btn-outline-danger" type="button" onClick={props.onClose}>
                                <span className="fas fa-times" />
                            </button>
                        </div>
                        <div className="modal-body">{props.children}</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" onClick={props.onClose}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Modal.propTypes = {
    /** Title of the modal */
    title: PropTypes.string,
    /** Content for the modal body */
    children: PropTypes.any,
    /** Check if model is open */
    isOpen: PropTypes.bool.isRequired,
    /** Callback function for modal close */
    onClose: PropTypes.func.isRequired,
}

Modal.defaultProps = {
    title: 'Modal Title',
    content: null,
    isOpen: false,
}

export default Modal
