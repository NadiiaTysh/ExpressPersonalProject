import { Staff } from '../../controllers';

export const get = async (req, res) => {
    try {
        if (req.session.user.t === 'staff') {
            const staff = new Staff();
            const data = await staff.getAllRecords();
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
        const staffPerson = new Staff(req.body);
        const data = await staffPerson.create();

        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
