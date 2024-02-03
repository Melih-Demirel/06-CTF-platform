import { Request, Response, NextFunction } from 'express';
import { CleanAll } from '../../ORM/cleanAll';
import { CTFDataSource } from '../../ORM/dataSource';
import { Challenge} from '../../ORM/entities';
import { loadTestData } from '../../ORM/loadTestData';
import { DeleteChallengeAttachments } from '../../utils/challenge/DeleteChallengeAttachments';
import { DeleteImage } from '../../utils/docker/DeleteImage';
import { GetDefaultConfigObject } from '../../utils/server-config/getDefaultConfigObject';
import { UpdateCompetitionConfigObject } from '../../utils/server-config/updateCompetitionConfigObject';


export const Wipe = async (req : Request, res : Response, next : NextFunction) => {

    try {

        // Delete all Images

        const challenges = await CTFDataSource.getRepository(Challenge).find();
        for (let challenge of challenges) {
                        
            if (challenge.type == 'Dockerized') await DeleteImage(challenge);
        
            if (challenge.type != 'Quiz') await DeleteChallengeAttachments(challenge);

        }

        await CleanAll();
        // Reset the server config file
        const defaultConfig = await GetDefaultConfigObject();
        await UpdateCompetitionConfigObject(defaultConfig);

        await loadTestData();

        res.status(200).send({message : 'Successfully Wiped Database'});
    } catch (err) {
        console.log(err)
        res.send('error');
    }

}