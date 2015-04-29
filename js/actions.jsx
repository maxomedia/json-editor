var AppDispatcher = require('./dispatcher');
var FluxCartConstants = require('./FluxCartConstants');

var FluxCartActions = {

	recieveProduct: function (data) {
		AppDispatcher.handleAction({
			actionType: FluxCartConstants.RECIEVE_DATA,
			data: data
		});
	},

	selectProduct: function (index) {
		AppDispatcher.handleAction({
			actionType: FluxCartConstants.SELECT_PRODUCT,
			data: index
		});
	},

	addToCart: function (sku, update) {
		AppDispatcher.handleAction({
			actionType: FluxCartConstants.CART_ADD,
			sku: sku,
			update: update
		});
	},

	removeFromCart: function (sku) {
		AppDispatcher.handleAction({
			actionType: FluxCartConstants.CART_REMOVE,
			sku: sku
		});
	},

	updateCartVisible: function (cartVisible) {
		AppDispatcher.handleAction({
			actionType: FluxCartConstants.CART_VISIBLE,
			cartVisible: cartVisible
		});
	}
};

module.exports = FluxCartActions;