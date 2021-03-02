import { orders } from '../odm';

export class Orders {
    constructor(data) {
        this.data = data;
        this.productOptions = '-description -total -_id -__v -created -modified -hash';
        this.customerOptions = '-t -emails -_id -__v -city -country -created -modified -hash -phones._id -phones.hash';
        this.selectOptions = '-count -comment -created -modified -hash -__v';
    }

    async create() {
        const data = await orders.create(this.data);

        return { hash: data.hash };
    }

    async getAllRecords(pageNum = 1, perPage = 10) {
        const data = await orders.find({})
            .skip((pageNum - 1) * perPage)
            .limit(perPage)
            .populate('product', this.productOptions)
            .populate('customer', this.customerOptions)
            .select(this.selectOptions);

        return data;
    }

    async getOneRecord(hash) {
        const data = await orders.findOne({ hash })
            .populate('product', this.productOptions)
            .populate('customer', this.customerOptions)
            .select(this.selectOptions);

        return data;
    }

    async modifyOneRecord(hash, payload) {
        const data = await orders.findOneAndUpdate({ hash }, payload, { new: true })
            .populate('product', this.productOptions)
            .populate('customer', this.customerOptions)
            .select(this.selectOptions);

        return data;
    }

    async removeOneRecord(hash) {
        const data = await orders.findOneAndRemove({ hash });

        return data;
    }
}
