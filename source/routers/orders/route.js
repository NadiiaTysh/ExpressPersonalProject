import { Orders } from '../../controllers';

export const get = async (req, res) => {
    try {
        const orders = new Orders();
        const data = await orders.getAllRecords();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const post = async (req, res) => {
    try {
        const order = new Orders(req.body);
        const data = await order.create();

        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
