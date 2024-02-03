import { Challenge, DockerImage} from "../../ORM/entities";
import { CTFDataSource } from "../../ORM/dataSource";

export const ImageExists = (challenge: Challenge): Promise<boolean> => {
    return new Promise <boolean> (async (resolve, reject) => {
        const DockerImageRepository = CTFDataSource.getRepository(DockerImage);
        try {
            const image = await DockerImageRepository.findOneBy({ Challenge : {Id : challenge.Id} })
            
            if (image != null) resolve(true)
            else resolve(false)

        } catch (err) {
            reject(err);
        }
        
    });
}