import { Products } from '../../controllers';

export const get = async (req, res) => {
    try {
        const products = new Products();
        const data = await products.getAllRecords();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const post = async (req, res) => {
    try {
        if (req.session.user.t === 'staff') {
            const product = new Products(req.body);
            const data = await product.create();
            res.status(201).json({ data });
        } else {
            throw new Error('You don\'t have permission to view this content');
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
