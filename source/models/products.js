import { products } from '../odm';

export class Products {
    constructor(data) {
        this.data = data;
        this.selectOptions = '-total -_id -created -modified -hash -__v';
    }

    async create() {
        const data = await products.create(this.data);

        return { hash: data.hash };
    }

    async getAllRecords(pageNum = 1, perPage = 10) {
        const data = await products.find({})
            .skip((pageNum - 1) * perPage)
            .limit(perPage)
            .select(this.selectOptions);

        return data;
    }

    async getOneRecord(hash) {
        const data = await products.findOne({ hash })
            .select(this.selectOptions);

        return data;
    }

    async modifyOneRecord(hash, payload) {
        const data = await products.findOneAndUpdate({ hash }, payload, { new: true })
            .select(this.selectOptions);

        return data;
    }

    async removeOneRecord(hash) {
        const data = await products.findOneAndRemove({ hash });

        return data;
    }

    async decreaseQuantity(id, num) {
        const payload = await products.findById(id);
        const decreasedTotal = payload.total - num;

        if (decreasedTotal < 0) {
            throw new Error(`You can order only ${payload.total} items`);
        } else {
            payload.total = decreasedTotal;
            const data = await products.findOneAndUpdate(id, payload, { new: true });

            return data;
        }
    }
}
