import { Staff as StaffModel } from '../models';

export class Staff {
    constructor(data) {
        this.models = {
            staff: new StaffModel(data),
        };
    }

    async create() {
        const data = await this.models.staff.create();

        return data;
    }

    async getAllRecords(pageNum, perPage) {
        const data = await this.models.staff.getAllRecords(pageNum, perPage);

        return data;
    }
}
