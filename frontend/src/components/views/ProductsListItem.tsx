import { ProductType } from '../parts/ProductsList';
import styles from '../../styles/ProductsListItem.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartState } from '../../store/cartSlice';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useState } from 'react';

export default function ProductsListItem(props: ProductType) {
    const cartState = useSelector(selectCartState);
    const dispatch = useDispatch();
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const handleAddProduct = () => { dispatch(addToCart(props)) };
    const handleRemoveProduct = () => { dispatch(removeFromCart(props.id)) };

    const handleNextImage = () => {
        setCurrentPhotoIndex(currentPhotoIndex + 1);
    }

    const handlePreviousImage = () => {
        setCurrentPhotoIndex(currentPhotoIndex - 1);
    }

    // TODO THIS FUNCTION NEEDS TO BE CENTRALIZED
    const countProductOnCart = (id: string) => {
        let counter = 0;
        cartState.forEach((product: ProductType) => {
            if (product.id === id) {
                counter++;
            }
        });

        return counter;
    }

    const disabled = !countProductOnCart(props.id);

    return (
        <div className={styles.ProductsListItem}>
            <div className={styles.ProductsListItem__images}>
                <div className={styles.ProductsListItem__images__next}>
                    {
                        props.photos.length > 1 && currentPhotoIndex < props.photos.length - 1 ?
                            <IconButton onClick={handleNextImage}>
                                <NavigateNextIcon sx={{ color: 'black' }} />
                            </IconButton> : ''
                    }
                </div>
                <div className={styles.ProductsListItem__images__before}>
                    {
                        props.photos.length > 1 && currentPhotoIndex > 0 ?
                            <IconButton onClick={handlePreviousImage}>
                                <NavigateBeforeIcon sx={{ color: 'black' }} />
                            </IconButton> : ''
                    }
                </div>

                <img src={props.photos[currentPhotoIndex].imageUrl}
                    style={{ width: '100%', height: '100%' }}
                    title={props.name}></img>

            </div>
            <div className={styles.ProductsListItem__actions}>
                <div>
                    {props.name} - ${props.price}
                </div>
                <div className={styles.ProductListItem__actions_buttons}>
                    <IconButton onClick={handleRemoveProduct} disabled={disabled}>
                        <RemoveIcon style={{ color: disabled ? '' : 'red' }} />
                    </IconButton>
                    <IconButton onClick={handleAddProduct}>
                        <AddIcon sx={{ color: 'green' }} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}