import bcrypt from 'bcryptjs';

import { staff } from '../odm';

export class Staff {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const hashedData = await this._transformCreatePerson(this.data);
        const data = await staff.create(hashedData);

        return { hash: data.hash };
    }

    async getAllRecords(pageNum = 1, perPage = 10) {
        const data = await staff.find({})
            .skip((pageNum - 1) * perPage)
            .limit(perPage);

        return data;
    }

    async _transformCreatePerson(data) {
        const { name, emails, phones, password, role, disabled } = data;
        const hashedPassword = await bcrypt.hash(password, 11);
        const person = {
            name,
            emails,
            role,
            phones,
            password: hashedPassword,
            disabled,
        };

        return person;
    }
}
