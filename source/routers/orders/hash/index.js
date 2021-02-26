import { Orders } from '../../../controllers';

export const getByHash = async (req, res) => {
    try {
        const { orderHash } = req.params;

        const order = new Orders();
        const data = await order.getOneRecord(orderHash);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const updateByHash = async (req, res) => {
    try {
        const { orderHash } = req.params;
        const payload = req.body;

        const order = new Orders();
        const data = await order.modifyOneRecord(orderHash, payload);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const deleteByHash = async (req, res) => {
    try {
        const { orderHash } = req.params;

        const order = new Orders();
        await order.removeOneRecord(orderHash);

        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
