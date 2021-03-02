import bcrypt from 'bcryptjs';

import { errorLogger } from '../helpers/loggers';

import { customers, staff } from '../odm';

export class Auth {
    constructor(data) {
        this.data = data;
        this.selectOptions = 't role emails hash password __t';
    }

    async login() {
        try {
            const header = this.data;

            const [ , auth ] = header.split(' ');
            const [ userEmail, plainPassword ] = Buffer.from(auth, 'base64').toString()
                .split(':');

            const data1 = await customers
                .findOne({ 'emails.email': userEmail })
                .select(this.selectOptions)
                .lean();

            const data2 = await staff
                .findOne({ 'emails.email': userEmail })
                .select(this.selectOptions)
                .lean();

            const data = data1 || data2;

            if (!data) {
                throw new Error('No user found');
            }

            const result = await bcrypt.compare(plainPassword, data.password);

            if (!result) {
                throw new Error('Credentials not valid');
            }

            const { t, role, hash, emails } = data;

            return { t, role, hash, emails };
        } catch (error) {
            errorLogger.error(error.message);
        }
    }
}
