import { Fab, Zoom } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { selectCartState } from '../../store/cartSlice';
import { useSelector } from 'react-redux'

interface FloatButtonType {
    handleClick: any
}

export default function CartFloatButton(props: FloatButtonType) {
    const cartState = useSelector(selectCartState);

    const transitionDuration = {
        enter: 500,
        exit: 500
    };
    
    return (
        <Zoom in={cartState.length > 0}
            timeout={transitionDuration}
            key={1}
            unmountOnExit>
            <Fab variant='extended' 
                color='primary'
                onClick={props.handleClick}
                size='large'
                sx={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20,
                    left: 'auto',
                    margin: 0,
                    width: 80,
                    height: 80,
                    borderRadius: 20

                }}>
                <ShoppingCartIcon sx={{ fontSize: 40 }} />
                <span style={{ fontSize: 20 }}>
                    {cartState.length}
                </span>
            </Fab>
        </Zoom>
    )
}