import { customers } from '../odm';

export class Customers {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const staffPerson = await this._transformCreateStaffPerson(this.data);
        const data = await customers.create(staffPerson);

        return { hash: data.hash };
    }

    async getAllRecords(pageNum = 1, perPage = 10) {
        const data = await customers.find({})
            .skip((pageNum - 1) * perPage)
            .limit(perPage)
            .populate({ path: 'classes', select: '-_id -__v'});

        return data;
    }

    async getOneRecord(hash) {
        const data = await customers.findOne({ hash })
            .populate({ path: 'classes', select: '-_id -__v'});

        return data;
    }

    async modifyOneRecord(hash, payload) {
        const data = await customers.findOneAndUpdate({ hash }, payload, { new: true });

        return data;
    }

    async removeOneRecord(hash) {
        const data = await customers.findOneAndRemove({ hash });

        return data;
    }
}
