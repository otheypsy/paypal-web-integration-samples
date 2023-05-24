import PropTypes from 'prop-types'
import { useRef, useMemo, useEffect } from 'react'
import createLoggers from '../utils/logger.utils.jsx'

const { log, error, warn } = createLoggers('braintree.utils.js')

const PayPalButtonsCore = (props) => {
    const ppContainer = useRef()

    // Final PayPal Buttons Configuration
    const finalPPConfig = useMemo(() => {
        return {
            style: {
                color: 'black',
                layout: 'vertical',
                shape: 'rect',
                label: 'paypal',
                tagline: 'false',
            },
            onClick: (data, actions) => log('PayPalButtons: onClick', { data, actions }),
            onInit: (data, actions) => log('PayPalButtons: onInit', { data, actions }),
            createOrder: (data, actions) => log('PayPalButtons: createOrder', { data, actions }),
            onApprove: (data, actions) => log('PayPalButtons: onApprove', { data, actions }),
            onCancel: (e) => error('PayPalButtons: onCancel', e),
            onError: (e) => error('PayPalButtons: onError', e),
            ...props.ppConfig,
        }
    }, [props.ppConfig])

    // Render PayPal Buttons
    useEffect(() => {
        const container = ppContainer.current

        const initialize = async () => {
            for (const fundingSource of window.paypal.getFundingSources()) {
                const button = window.paypal.Buttons({
                    ...finalPPConfig,
                    fundingSource: fundingSource,
                })
                try {
                    if (button.isEligible() && container) await button.render(container)
                } catch (error) {
                    // CRITICAL: Catch error when render fails when DOM is closed or destroyed.
                    warn('PayPalButtons', error.message)
                }
            }
        }
        finalPPConfig && initialize()

        return () => {
            window.paypal.Buttons.instances.forEach((button) => button.close())
            container.innerHTML = null
        }
    }, [finalPPConfig])

    return <div ref={ppContainer} />
}

const PayPalButtons = (props) =>
    props.ppConfig && window?.paypal?.Buttons ? <PayPalButtonsCore ppConfig={props.ppConfig} /> : null

PayPalButtonsCore.propTypes = PayPalButtons.propTypes = {
    ppConfig: PropTypes.object.isRequired,
}

export default PayPalButtons
