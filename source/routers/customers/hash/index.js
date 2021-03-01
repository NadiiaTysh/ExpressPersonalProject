import { Customers } from '../../../controllers';

export const getByHash = async (req, res) => {
    try {
        const { customerHash } = req.params;

        if (req.session.user.hash === customerHash) {
            const customer = new Customers();
            const data = await customer.getOneRecord(customerHash);
            res.status(200).json({ data });
        } else {
            throw new Error('You don\'t have permission to view this content');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const updateByHash = async (req, res) => {
    try {
        const { customerHash } = req.params;

        if (req.session.user.hash === customerHash) {
            const payload = req.body;

            const customer = new Customers();
            const data = await customer.modifyOneRecord(customerHash, payload);

            res.status(200).json({ data });
        } else {
            throw new Error('You don\'t have permission to view this content');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const deleteByHash = async (req, res) => {
    try {
        const { customerHash } = req.params;

        if (req.session.user.hash === customerHash) {
            const customer = new Customers();
            await customer.removeOneRecord(customerHash);

            res.sendStatus(204);
        } else {
            throw new Error('You don\'t have permission to view this content');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
