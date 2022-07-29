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
            const newProductsArray = [...state.products];

            newProductsArray.push(action.payload);

            return {
                ...state,
                products: newProductsArray
            }
        },
        removeFromCart(state: any, action: PayloadAction<string>) {
            const productId = action.payload;

            const newProductsArray = [...state.products];

            for (let i = 0; i < newProductsArray.length; i++) {
                if (newProductsArray[i].id === productId) {
                    newProductsArray.splice(i, 1);
                    break;
                }
            }

            return {
                ...state,
                products: newProductsArray
            }
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart.products;

export default cartSlice.reducer;
