import { Customers } from '../../controllers';

export const get = async (req, res) => {
    try {
        const customers = new Customers();
        const data = await customers.getAllRecords();

        res.status(200).json({ data });
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
