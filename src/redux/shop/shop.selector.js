import { createSelector } from "reselect";


const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key=>collections[key]) : []
);

export const selectCollectionsForPage = createSelector(
    [selectShopCollections],
    collections => collections ? collections.reduce((acc, item)=>{
        acc[item.title.toLowerCase()] = item
        return acc
    }, {}):[]
);

export const selectCollection = collectionUrlParam => {
    return createSelector(
        [selectCollectionsForPage],
        collections => {
            return collections ? collections[collectionUrlParam] : null
        }
    )
};

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)