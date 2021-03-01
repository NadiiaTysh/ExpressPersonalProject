import bcrypt from 'bcryptjs';

import { customers } from '../odm';

export class Customers {
    constructor(data) {
        this.data = data;
    }

    async create() {
        const hashedData = await this._transformCreatePerson(this.data);
        const data = await customers.create(hashedData);

        return { hash: data.hash };
    }

    async getAllRecords(pageNum = 1, perPage = 10) {
        const data = await customers.find({})
            .skip((pageNum - 1) * perPage)
            .limit(perPage);

        return data;
    }

    async getOneRecord(hash) {
        const data = await customers.findOne({ hash });

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

    async _transformCreatePerson(data) {
        const { name, emails, phones, password, role, disabled, city, country } = data;
        const hashedPassword = await bcrypt.hash(password, 11);
        const person = {
            name,
            emails,
            role,
            phones,
            password: hashedPassword,
            disabled,
            city,
            country,
        };

        return person;
    }
}
