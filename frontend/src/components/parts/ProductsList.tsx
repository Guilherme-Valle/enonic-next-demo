import React, { useState } from 'react'
import { APP_NAME_UNDERSCORED, getUrl } from '../../_enonicAdapter/utils'
import { PartProps } from '../../_enonicAdapter/views/BasePart';
import styles from '../../styles/ProductsList.module.css'
import ProductsListItem from '../views/ProductsListItem';
import CartFloatButton from '../views/CartFloatButton';
import CartDialog from '../views/CartDialog';

export const getProductsList = `
   query(){ 
    guillotine {
        query(query: "valid='true' and type='${APP_NAME_UNDERSCORED}:product'", sort: "displayName") {
            id: _id
            displayName
                ... on ${APP_NAME_UNDERSCORED}_Product {
                    data {
                        name,
                        description,
                        price,
                        photos {
                        ... on media_Image {
                            imageUrl: imageUrl(type: absolute, scale: "width(500)")
                            attachments {
                            name
                            }
                        }
                    }
                }
            }
        }
    }
}`

export interface ProductType {
    id: string,
    name: string,
    description: string,
    price: number,
    photos: Array<any>
}

const ProductsList = (props: PartProps) => {
    const { data } = props;
    const [dialogOpened, setModalOpened] = useState(false);

    const openDialog = () => { setModalOpened(true); }
    const closeDialog = () => { setModalOpened(false); }

    return (
        <>
            <div className={styles.ProductsList}>
                {data.query.map((product: any) => {
                    return <ProductsListItem key={product.id} {...product.data} id={product.id} />
                })}
            </div>

            <CartFloatButton handleClick={openDialog} />

            <CartDialog open={dialogOpened} handleClose={closeDialog} />
        </>
    )
}

export default ProductsList;