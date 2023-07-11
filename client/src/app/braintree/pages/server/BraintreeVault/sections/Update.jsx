import { useState } from 'react'
import { OutputJson } from '../../../../../../lib/components/export.jsx'
import BraintreeVaultService from '../../../../services/BraintreeVaultService.jsx'
import { useAddBusy, useRemoveBusy } from '../../../../../../states/Busy/busy.hooks.jsx'

const Update = (props) => {
    const addBusy = useAddBusy()
    const removeBusy = useRemoveBusy()
    const [postData, setPostData] = useState(BraintreeVaultService.postData.update)

    const onChangePostData = (value) => setPostData(value)

    const updateVault = async () => {
        addBusy()
        const response = await BraintreeVaultService.update(props.integration, postData)
        removeBusy()
        props.onOutput(response, 'VaultUpdate')
    }

    return (
        <div className="row">
            <div className="col-8">
                <OutputJson src={postData} isEditable={true} onChange={onChangePostData} />
            </div>
            <div className="col-4">
                <button className="btn btn-outline-warning" onClick={updateVault}>
                    Update
                </button>
            </div>
        </div>
    )
}

export default Update
