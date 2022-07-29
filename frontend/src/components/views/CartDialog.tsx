import { Dialog, DialogContent, DialogTitle, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ProductType } from '../parts/ProductsList';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, selectCartState } from '../../store/cartSlice';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface DialogType {
    open: boolean,
    handleClose: any
}

export default function CartDialog(props: DialogType) {
    const cartState = useSelector(selectCartState);
    const dispatch = useDispatch();
    const handleAddProduct = (product: ProductType) => { dispatch(addToCart(product)) };
    const handleRemoveProduct = (id: string) => { dispatch(removeFromCart(id)) };

    const uniqueValuesFromProductsArray = (array: ProductType[]) => {
        return Array.from(new Set(array.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
    }

    // TODO THIS FUNCTION NEED TO BE CENTRALIZED
    const countProductOnCart = (id: string) => {
        let counter = 0;
        cartState.forEach((product: ProductType) => {
            if (product.id === id) {
                counter++;
            }
        });

        return counter;
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>
                Cart
                <IconButton
                    aria-label="close"
                    onClick={props.handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                {cartState.length ?
                    <TableContainer>

                        <Table>
                            <TableHead>

                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>

                            {
                                uniqueValuesFromProductsArray(cartState)
                                    .map((product: ProductType) => {
                                        return (
                                            <TableRow>
                                                <TableCell>
                                                    {product.name}
                                                </TableCell>
                                                <TableCell>
                                                    {countProductOnCart(product.id)}
                                                </TableCell>
                                                <TableCell>
                                                    <IconButton onClick={() => handleRemoveProduct(product.id)}>
                                                        <RemoveIcon sx={{ color: 'red' }} />
                                                    </IconButton>
                                                    <IconButton onClick={() => handleAddProduct(product)}>
                                                        <AddIcon sx={{ color: 'green' }} />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                        </Table>
                    </TableContainer>
                    : 'The cart is empty!'}
            </DialogContent>
        </Dialog>
    )
}