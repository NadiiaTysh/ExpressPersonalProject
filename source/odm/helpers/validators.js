import { customers, products } from '../index';

export async function uidValidator (value) {
    const data  = await customers.find({});
    const isCutomerInDb = data.some(
        (customerInDb) => customerInDb._id.toString() === value.toString(),
    );

    if (!isCutomerInDb) {
        throw new Error(`Customer ${value} does not exist in DB`);
    }

    return isCutomerInDb;
}

export async function pidValidator (value) {
    const data  = await products.find({});
    const isProductInDb = data.some(
        (productInDb) => productInDb._id.toString() === value.toString(),
    );

    if (!isProductInDb) {
        throw new Error(`Product ${value} does not exist in DB`);
    }

    return isProductInDb;
}
