import createHttpError from 'http-errors';
import { Types } from 'mongoose';

const validateMongoID = (req, res, next) => {
  const { contactId } = req.params;
  if (!Types.ObjectId.isValid(contactId)) {
    next(createHttpError(400, 'Id is not valid'));
    return;
  }
  next();
};

export default validateMongoID;
