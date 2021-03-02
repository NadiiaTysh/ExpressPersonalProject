import { Products as ProductsModel } from '../models';

export class Products {
    constructor(data) {
        this.models = {
            products: new ProductsModel(data),
        };
    }

    async create() {
        const data = await this.models.products.create();

        return data;
    }

    async getAllRecords(pageNum, perPage) {
        const data = await this.models.products.getAllRecords(pageNum, perPage);

        return data;
    }

    async getOneRecord(hash) {
        const data = await this.models.products.getOneRecord(hash);

        return data;
    }

    async modifyOneRecord(hash, payload) {
        const data = await this.models.products.modifyOneRecord(hash, payload);

        return data;
    }

    async removeOneRecord(hash) {
        const data = await this.models.products.removeOneRecord(hash);

        return data;
    }

    async decreaseQuantity(id) {
        const data = await this.models.products.decreaseQuantity(id);

        return data;
    }
}
