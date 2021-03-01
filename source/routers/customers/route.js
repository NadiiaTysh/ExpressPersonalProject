import { Customers } from '../../controllers';

export const get = async (req, res) => {
    try {
        if (req.session.user.t === 'staff') {
            const customers = new Customers();
            const data = await customers.getAllRecords();
            res.status(200).json({ data });
        } else {
            throw new Error('You don\'t have permission to view this content');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const post = async (req, res) => {
    try {
        const customer = new Customers(req.body);
        const data = await customer.create();

        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
