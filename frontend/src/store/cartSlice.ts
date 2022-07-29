import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../components/parts/ProductsList';
import { AppState } from './store';

const initialState: any = {
    products: <ProductType[]>[]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state: any, action: PayloadAction<ProductType>) {
            state.products.push(action.payload);
        },
        removeFromCart(state: any, action: PayloadAction<string>) {
            const productId = action.payload;
            
            for (let i = 0; i < state.products.length; i++) {
                if (state.products[i].id === productId) {
                    state.products.splice(i, 1);
                    break;
                }
            }
        }

    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart.products;

export default cartSlice.reducer;
