const initialState = {
    categories: [],
    products: [],
    selectedProduct: [],
    cart: [],
};

const CommonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CATEGORIES": {
            return { ...state, categories: action.payload }
        }
        case "SET_PRODUCTS": {
            return { ...state, products: action.payload }
        }
        case "SET_S.PRODUCT": {
            return { ...state, selectedProduct: action.payload }
        }
        case "SET_CART": {
            return { ...state, cart: [...state.cart, action.payload] };
        }
        case "REMOVE_ITEM": {
            return { ...state, cart: action.payload }
        }
        default:
            return state;
    }
};
export default CommonReducer;