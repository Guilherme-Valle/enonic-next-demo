import { ProductType } from '../parts/ProductsList';
import styles from '../../styles/ProductsListItem.module.css';

export default function ProductsListItem(props: ProductType) {
    return (
        <div className={styles.ProductsListItem}>
            <div className={styles.ProductsListItem__images}>
                {props && props.photos && props.photos[0] ?
                    <img src={props.photos[0].imageUrl}
                        style={{ width: '100%', height: '100%' }}
                        title={props.name}></img> : ''}
            </div>
            <div className={styles.ProductsListItem__actions}>
                <div>{props.name} - ${props.price}</div>
                <div>Actions</div>
            </div>
        </div>
    )
}