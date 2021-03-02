import { Orders as OrdersModel, Products as ProductsModel } from '../models';

export class Orders {
    constructor(data) {
        this.data = data;
        this.models = {
            orders:   new OrdersModel(data),
            products: new ProductsModel(data),
        };
    }

    async create() {
        const { pid, count } = this.data;
        const data = await this.models.orders.create();
        await this.models.products.decreaseQuantity(pid, count);

        return data;
    }

    async getAllRecords(pageNum, perPage) {
        const data = await this.models.orders.getAllRecords(pageNum, perPage);

        return data;
    }

    async getOneRecord(hash) {
        const data = await this.models.orders.getOneRecord(hash);

        return data;
    }

    async modifyOneRecord(hash, payload) {
        const data = await this.models.orders.modifyOneRecord(hash, payload);

        return data;
    }

    async removeOneRecord(hash) {
        const data = await this.models.orders.removeOneRecord(hash);

        return data;
    }
}
