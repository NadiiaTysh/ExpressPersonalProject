import { orders } from '../odm';

export class Orders {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const staffPerson = await this._transformCreateStaffPerson(this.data);
        const data = await orders.create(staffPerson);

        return { hash: data.hash };
    }

    async getAllRecords(pageNum = 1, perPage = 10) {
        const data = await orders.find({})
            .skip((pageNum - 1) * perPage)
            .limit(perPage)
            .populate({ path: 'classes', select: '-_id -__v'});

        return data;
    }

    async getOneRecord(hash) {
        const data = await orders.findOne({ hash })
            .populate({ path: 'classes', select: '-_id -__v'});

        return data;
    }

    async modifyOneRecord(hash, payload) {
        const data = await orders.findOneAndUpdate({ hash }, payload, { new: true });

        return data;
    }

    async removeOneRecord(hash) {
        const data = await orders.findOneAndRemove({ hash });

        return data;
    }
}
