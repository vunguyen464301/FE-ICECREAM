import { api } from './index'

export const authApi = {
    signIn(account) {
        return api.post('account/signin', account)
    },
    signUp(account) {
        return api.post('account/signup', account)
    },
    // getAllAccount(){
    //     return api.get('account/')
    // },
    getPageAccountByName(username, roleId, page) {
        return api.get(`account/find/?username=${username}&roleId=${roleId}&page=${page}`)
    },
    getDetailAccount(username) {
        return api.get(`account/${username}`)
    },
    updateAccountPassword(account) {
        return api.put('account/password', account)
    },
    updateAccount(account) {
        return api.put('account/', account)
    },
    deleteAccountId(id) {
        return api.delete(`account/${id}`)
    },

    //catalogue
    getAllCatalogue() {
        return api.get(`catalogue/`)
    },

    //product
    getProductbyId(id) {
        return api.get(`product/${id}`)
    },
    getPageProductByName(findName, catalogueId, page) {
        return api.get(`product/findPageProduct/?findName=${findName}&catalogueId=${catalogueId}&page=${page}`)
    },
    getProductByName(findName, catalogueId) {
        return api.get(`product/findProduct/?findName=${findName}&catalogueId=${catalogueId}`)
    },
    createProduct(product) {
        return api.post(`product/`, product)
    },
    updateProduct(product) {
        return api.put(`product/`, product)
    },
    deleteProduct(id) {
        return api.delete(`product/${id}`)
    },

    //Orders
    getPageOrdersByAccountId(accountId) {
        return api.get(`orders/find/${accountId}`)
    },
    createOrders(order) {
        return api.post(`orders/`, order)
    },
    getAllOrders() {
        return api.get(`orders/getAll/`)
    },
    updateOrdersDetail(ordersDetail) {
        return api.put(`orders/details/`, ordersDetail)
    },
    deleteOrdersDetail(id) {
        return api.delete(`orders/details/${id}`)
    },

    //Feedback
    getProductFeedbackAll() {
        return api.get(`productFeedback/getAll`);
    },
    getFindPageByProductId(id, page) {
        return api.get(`productFeedback/productId/?id=${id}&page=${page}`);
    },
    createProductFeedback(item) {
        return api.post(`productFeedback/`, item);
    },
    deleteFroductFeedback(id) {
        return api.delete(`productFeedback/${id}`);
    }
};