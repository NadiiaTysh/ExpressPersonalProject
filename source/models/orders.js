import { orders } from '../odm';

export class Orders {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const data = await orders.create(this.data);

        return { hash: data.hash };
    }

    async getAllRecords(pageNum = 1, perPage = 10) {
        const data = await orders.find({})
            .skip((pageNum - 1) * perPage)
            .limit(perPage)
            .populate({ path: 'uid', select: '-_id -__v'})
            .populate({ path: 'pid', select: '-_id -__v'});

        return data;
    }

    async getOneRecord(hash) {
        const data = await orders.findOne({ hash })
            .populate({ path: 'uid', select: '-_id -__v'})
            .populate({ path: 'pid', select: '-_id -__v'});

        return data;
    }

    async modifyOneRecord(hash, payload) {
        const data = await orders.findOneAndUpdate({ hash }, payload, { new: true })
            .populate({ path: 'uid', select: '-_id -__v -t -emails -city -country -created -modified -hash'})
            .populate({ path: 'pid', select: '-_id -__v -discount -total -created -modified -hash'});

        return data;
    }

    async removeOneRecord(hash) {
        const data = await orders.findOneAndRemove({ hash });

        return data;
    }
}
