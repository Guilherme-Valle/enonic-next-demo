import {CATCH_ALL, ComponentRegistry} from '../_enonicAdapter/ComponentRegistry';
import {commonQuery, commonVariables} from './queries/common';
import {APP_NAME} from '../_enonicAdapter/utils'
import PropsView from './views/Props';
import Person from './views/Person';
import getPerson from './queries/getPerson';
import MainPage from './pages/Main';
import Heading from './parts/Heading';
import TwoColumnLayout from './layouts/TwoColumnLayout';
import MovieDetails, {getMovie} from './parts/MovieDetails';
import ChildList, {childListProcessor, getChildList} from './parts/ChildList';
import getProduct from './queries/getProduct';
import Product from './views/Product';
import { getProductsList } from './parts/ProductsList';
import ProductsList from './parts/ProductsList';

// You can set common query for all views here
ComponentRegistry.setCommonQuery([commonQuery, commonVariables]);

// Content type mappings
ComponentRegistry.addContentType(`${APP_NAME}:person`, {
    query: getPerson,
    view: Person
});

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


// Part mappings
ComponentRegistry.addPart(`${APP_NAME}:child-list`, {
    query: getChildList,
    processor: childListProcessor,
    view: ChildList
});

ComponentRegistry.addPart(`${APP_NAME}:heading`, {
    view: Heading
});

ComponentRegistry.addPart(`${APP_NAME}:movie-details`, {
    query: getMovie,
    view: MovieDetails
});

ComponentRegistry.addPart(`${APP_NAME}:products-list`, {
    query: getProductsList,
    view: ProductsList
});

// // Debug
// ComponentRegistry.addContentType(CATCH_ALL, {
//     view: PropsView
// });
