import { Request, Response, NextFunction } from 'express';
import { CTFDataSource } from "../../ORM/dataSource";
import { Challenge } from "../../ORM/entities";
import { APIError } from '../../utils/api-helpers/apiError';


export const ListChallenges = async (req : Request, res : Response, next : NextFunction) => {

    // Need to only return name and points

    try {
         
        const ChallengeRepository = CTFDataSource.getRepository(Challenge);

        const challenges = await ChallengeRepository.find();

        res.status(200).send({Challenges : challenges});

    } catch (err) {
        const ServerError = new APIError(500, 'Server', 'Internal Server Error', err);
        return next(ServerError);
    }
}