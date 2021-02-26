import { Customers } from '../../../controllers';

export const getByHash = async (req, res) => {
    try {
        const { customerHash } = req.params;

        const customer = new Customers();
        const data = await customer.getOneRecord(customerHash);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const updateByHash = async (req, res) => {
    try {
        const { customerHash } = req.params;
        const payload = req.body;

        const customer = new Customers();
        const data = await customer.modifyOneRecord(customerHash, payload);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const deleteByHash = async (req, res) => {
    try {
        const { customerHash } = req.params;

        const customer = new Customers();
        await customer.removeOneRecord(customerHash);

        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
