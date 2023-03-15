import React, { useContext, useState } from 'react';
import { OutputJson } from 'pp-framework-react';
import BraintreeVaultService from '../../../../services/BraintreeVaultService';
import BusyContext from "../../../../../../context/BusyContext";


const Update = (props) => {

    const busyContext = useContext(BusyContext);
    const [postData, setPostData] = useState(BraintreeVaultService.postData.update);

    const onChangePostData = (value) => setPostData(value);

    const updateVault = async () => {
        busyContext.addBusy('btVaultUpdate');
        const response = await BraintreeVaultService.update(props.integration, postData);
        busyContext.removeBusy('btVaultUpdate');
        props.onOutput(response, 'VaultUpdate');
    };

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-8">
                    <OutputJson
                        content={postData}
                        isEditable={true}
                        onChange={onChangePostData}
                    />
                </div>
                <div className="col-4">
                    <button
                        className="btn btn-outline-warning"
                        onClick={updateVault}>
                        Update
                    </button>
                </div>
            </div>
        </React.Fragment>
    )

};

export default Update;
