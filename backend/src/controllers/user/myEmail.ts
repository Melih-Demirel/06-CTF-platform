import { Request, Response, NextFunction } from 'express';
import { CTFDataSource } from '../../ORM/dataSource';
import { User } from '../../ORM/entities';
import { APIError } from '../../utils/api-helpers/apiError';

export const myEmail =  async (req: Request, res: Response, next: NextFunction) => {
    
    const {UserID} = req.body.jwtPayload;

    try {
        let requester: User = await CTFDataSource.getRepository(User).findOne({where: {Id: UserID}});
        res.status(200).send({myEmail : requester.Email});
        
    } catch (err) {
        const ServerError : APIError = new APIError(400, 'Server', `Unknown server error`, null, err);
        return next(ServerError);
    }
}