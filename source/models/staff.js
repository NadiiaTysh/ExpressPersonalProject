import { staff } from '../odm';

export class Staff {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const staffPerson = await this._transformCreateStaffPerson(this.data);
        const data = await staff.create(staffPerson);

        return { hash: data.hash };
    }

    async getAllRecords(pageNum = 1, perPage = 10) {
        const data = await staff.find({})
            .skip((pageNum - 1) * perPage)
            .limit(perPage)
            .populate({ path: 'classes', select: '-_id -__v'});

        return data;
    }
}
