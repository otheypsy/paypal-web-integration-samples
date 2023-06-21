import React, { useContext, useState } from 'react'
import { OutputJson } from 'pp-framework-react'
import BraintreeTransactionsService from '../../../../services/BraintreeTransactionsService.jsx'
import BusyContext from '../../../../../../context/BusyContext'

const Find = (props) => {
    const [postData, setPostData] = useState(BraintreeTransactionsService.postData.find)

    const onChangePostData = (value) => setPostData(value)

    const findTransaction = async () => {
        const response = await BraintreeTransactionsService.find(props.integration, postData.arguments.transactionId)
        props.onOutput(response, 'FindTransaction')
    }

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-8">
                    <OutputJson content={postData} isEditable={true} onChange={onChangePostData} />
                </div>
                <div className="col-4">
                    <button className="btn btn-outline-success" onClick={findTransaction}>
                        Find
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Find
