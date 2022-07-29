import {CATCH_ALL, ComponentRegistry} from '../_enonicAdapter/ComponentRegistry';
import {commonQuery, commonVariables} from './queries/common';
import {APP_NAME} from '../_enonicAdapter/utils'
import MainPage from './pages/Main';
import Heading from './parts/Heading';
import TwoColumnLayout from './layouts/TwoColumnLayout';
import getProduct from './queries/getProduct';
import Product from './views/Product';
import { getProductsList } from './parts/ProductsList';
import ProductsList from './parts/ProductsList';

// You can set common query for all views here
ComponentRegistry.setCommonQuery([commonQuery, commonVariables]);

// Content type mappings
ComponentRegistry.addContentType(`${APP_NAME}:product`, {
    query: getProduct,
    view: Product
});

// Page mappings
ComponentRegistry.addPage(`${APP_NAME}:main`, {
    view: MainPage
});

// Layout mappings
ComponentRegistry.addLayout(`${APP_NAME}:2-column`, {
    view: TwoColumnLayout
});

ComponentRegistry.addPart(`${APP_NAME}:heading`, {
    view: Heading
});

ComponentRegistry.addPart(`${APP_NAME}:products-list`, {
    query: getProductsList,
    view: ProductsList
});

