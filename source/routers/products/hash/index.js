import { Products } from '../../../controllers';

export const getByHash = async (req, res) => {
    try {
        const { productHash } = req.params;

        const product = new Products();
        const data = await product.getOneRecord(productHash);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const updateByHash = async (req, res) => {
    try {
        const { productHash } = req.params;
        const payload = req.body;

        const product = new Products();
        const data = await product.modifyOneRecord(productHash, payload);

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const deleteByHash = async (req, res) => {
    try {
        const { productHash } = req.params;

        const product = new Products();
        await product.removeOneRecord(productHash);

        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
