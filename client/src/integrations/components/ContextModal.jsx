import { useState } from 'react'
import OutputJson from '../../lib/components/form/OutputJson/OutputJson.component'
import Modal from '../../lib/components/other/Modal/Modal.component'
import { useAppContext } from '../states/AppContext/appContext.hooks.jsx'
import { useError, useResetError } from '../states/Error/error.hooks.jsx'

const ModalContent = () => {
    const appContext = useAppContext()

    return Object.keys(appContext).map((key) => (
        <OutputJson key={key} name={key} isCollapsed={true} theme="rjv-default" src={appContext[key]} />
    ))
}

const ContextModal = () => {
    const hasError = useError()
    const resetError = useResetError()
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const onModalOpen = () => setModalIsOpen(true)
    const onModalClose = () => setModalIsOpen(false)

    return (
        <>
            <div className="fixed-bottom">
                <nav className="nav">
                    <div className="bg-light p-2">
                        <button className="btn btn-sm m-1 btn-outline-success" onClick={onModalOpen}>
                            <i className="fa-solid fa-floppy-disk px-2" />
                            Context
                        </button>
                        <button className="btn btn-sm m-1 btn-outline-warning">
                            <i className="fa-solid fa-trash px-2" />
                            Reset
                        </button>
                        {hasError && (
                            <button className="btn btn-sm m-1 btn-outline-danger" onClick={resetError}>
                                <i className="fa-solid fa-bug fa-xl" />
                            </button>
                        )}
                    </div>
                </nav>
                <br />
            </div>
            <Modal title="Application Context" isOpen={modalIsOpen} onClose={onModalClose}>
                {modalIsOpen && <ModalContent />}
            </Modal>
        </>
    )
}

export default ContextModal
