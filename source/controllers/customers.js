import { Customers as CustomersModel } from '../models';

export class Customers {
    constructor(data) {
        this.models = {
            customers: new CustomersModel(data),
        };
    }

    async create() {
        const data = await this.models.customers.create();

        return data;
    }

    async getAllRecords(pageNum, perPage) {
        const data = await this.models.customers.getAllRecords(pageNum, perPage);

        return data;
    }

    async getOneRecord(hash) {
        const data = await this.models.customers.getOneRecord(hash);

        return data;
    }

    async modifyOneRecord(hash, payload) {
        const data = await this.models.customers.modifyOneRecord(hash, payload);

        return data;
    }

    async removeOneRecord(hash) {
        const data = await this.models.customers.removeOneRecord(hash);

        return data;
    }
}
