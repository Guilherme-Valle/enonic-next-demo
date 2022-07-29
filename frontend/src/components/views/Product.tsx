import React from 'react'
import { FetchContentResult } from '../../_enonicAdapter/guillotine/fetchContent';
import { getUrl } from '../../_enonicAdapter/utils'

const Product = (props: FetchContentResult) => {
    const { displayName, data, parent } = props.data?.get as any;
    const { photos, description, price } = data;
    const { _path } = parent;

    console.log(props);

    return (
        <>
            <div>
                <h2>{displayName}</h2>
                <p>{description}</p>
                <p>Price: {price}</p>
                {
                    photos.map((photo: any, i: number) => (
                        <img key={i}
                            src={photo.imageUrl}
                            title={
                                (photo.attachments || [])[0].name ||
                                displayName
                            }
                            width="500"
                        />
                    ))
                }
            </div>
        </>
    )
}

export default Product;