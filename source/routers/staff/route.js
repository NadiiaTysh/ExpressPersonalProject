import { Staff } from '../../controllers';

export const get = async (req, res) => {
    try {
        const students = new Staff();
        const data = await students.getAllRecords();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const post = async (req, res) => {
    try {
        const student = new Staff(req.body);
        const data = await student.create();

        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
