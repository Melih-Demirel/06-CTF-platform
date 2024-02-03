import { Request, Response, NextFunction } from 'express';

import { CTFDataSource } from '../../ORM/dataSource';

import { DockerContainer } from '../../ORM/entities';

import { APIError } from '../../utils/api-helpers/apiError';

export const GetContainers = async (req : Request, res : Response, next : NextFunction) => {

    const DockerContainerRepository = CTFDataSource.getRepository(DockerContainer);

    try {
        const allContainers = await DockerContainerRepository.find();
        res.status(200).send({containers : allContainers});
    } catch (err) {
        const ServerError  = new APIError(404, 'Server', `Unknown Server Error`, null, err);
        return next(ServerError);
    }

}