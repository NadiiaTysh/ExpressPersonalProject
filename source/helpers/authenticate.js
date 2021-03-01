// Instruments
import { NotFoundError } from './';

export const authenticate = (req, res, next) => {
    if (!req.session.user) {
        return next(new NotFoundError('cookie not found', 401));
    }
    const { t } = req.session.user;

    if (t) {
        next();
    } else {
        res.status(401).json({ message: 'authentication credentials are not valid' });
    }
};
