import { createSelector } from "reselect";

//Input selector:
const selectCart = state => state.cart;

//oputput selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((qty, cartItem) => qty + cartItem.quantity, 0)
);