import ApiService from '../../../services/api.service.jsx'

const _orders = {
    create: async (order) => {
        const uri = '/paypal/paypal/order/create'
        const response = await ApiService.post(uri, order)
        if (response.data) return response.data
        else return null
    },

    execute: async (orderID) => {
        const uri = '/paypal/paypal/order/execute'
        const response = await ApiService.post(uri, {
            orderID: orderID,
        })
        if (response.data) return response.data
        else return null
    },
}

export default {
    orders: _orders,
}
