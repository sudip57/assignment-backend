const productModel = require("../models/product");

async function getAllProducts(cursor = null, limit = 20) {

    const query = {};

    if (cursor) {
        query._id = { $lt: cursor };
    }

    const products = await productModel
        .find(query)
        .sort({ _id: -1 })
        .limit(limit + 1);

    const hasMore = products.length > limit;

    if (hasMore) {
        products.pop();
    }

    const nextCursor = hasMore
        ? products[products.length - 1]._id
        : null;

    return {
        products,
        hasMore,
        nextCursor
    };
}

async function getProductsByCategory(
    category,
    cursor = null,
    limit = 20
) {

    const query = {
        category: category.toLowerCase()
    };

    if (cursor) {
        query._id = { $lt: cursor };
    }

    const products = await productModel
        .find(query)
        .sort({ _id: -1 })
        .limit(limit + 1);

    const hasMore = products.length > limit;

    if (hasMore) {
        products.pop();
    }

    const nextCursor = hasMore
        ? products[products.length - 1]._id
        : null;

    return {
        products,
        hasMore,
        nextCursor
    };
}

module.exports = {
    getAllProducts,
    getProductsByCategory,
};