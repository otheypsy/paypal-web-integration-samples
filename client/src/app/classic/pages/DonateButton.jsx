import React, { useEffect } from 'react';
import { Card } from 'pp-framework-react';

const DonateButton = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://www.paypalobjects.com/api/checkout.js';
        script.id = 'paypalSDK';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if(!window.paypal) return false;
            window.paypal.Button.render({
                // Configure environment
                env: 'sandbox',
                // Customize button (optional)
                locale: 'en_US',
                style: {
                    size: 'small',
                    color: 'gold',
                    shape: 'pill',
                },
                // Enable Pay Now checkout flow (optional)
                commit: true,
                // Set up a payment
                payment: async function(data, actions) {
                    let postData = [
                        {
                            key: 'cmd',
                            value: '_s-xclick'
                        },
                        {
                            key: 'hosted_button_id',
                            value: 'DKXK32W2T5R3A'
                        }
                    ];
                    const formBody = postData.map(({key, value}) => {
                        const encodedKey = encodeURIComponent(key);
                        const encodedValue = encodeURIComponent(value);
                        return encodedKey + "=" + encodedValue;
                    });
                    console.log(formBody);
                    return fetch('https://www.sandbox.paypal.com/cgi-bin/webscr', {
                        method: 'post',
                        mode: 'no-cors',
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded'
                        },
                        body: formBody.join('&')
                    }).then(function(res) {
                        console.log(res);
                    });
                },
                // Execute the payment
                onAuthorize: function(data, actions) {
                    console.log(data);
                }
            }, '#paypal-button-container');

        };

    }, []);

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <Card
                            label={'Cart'}>
                            <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick" />
                                <input type="hidden" name="hosted_button_id" value="DKXK32W2T5R3A" />
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                            </form>
                        </Card>
                        <br />
                        <div id="paypal-button-container" />
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

};

export default DonateButton;
