import { UPLOADS_PATH } from "../../consts";
import { CTFDataSource } from "../../ORM/dataSource";
import { Challenge, ChallengeAttachments } from "../../ORM/entities";


export const GetChallengeAttachmentPath = (challenge : Challenge) : Promise<string> => {

    return new Promise<string>((resolve, reject) => {

        const ChallengeAttachmentRepository = CTFDataSource.getRepository(ChallengeAttachments);
        
        ChallengeAttachmentRepository.find({relations: ["Challenge"]})
        .then((attachments) => {
            attachments.forEach(attachment => {
                if (attachment.Challenge.Id == challenge.Id) {
                    resolve(attachment.Path);
                }
            })
        })
        .catch(err => { reject(err) })

    });
    


}