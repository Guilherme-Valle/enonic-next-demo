import {APP_NAME_UNDERSCORED} from '../../_enonicAdapter/utils'

const getProduct = `
query($path:ID!){
  guillotine {
    get(key:$path) {
      displayName
      ... on ${APP_NAME_UNDERSCORED}_Product {
        data {
          name
          description
          price
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
      parent {
        _path(type: siteRelative)                                                           
      }
    }
  }
}`;

export default getProduct;