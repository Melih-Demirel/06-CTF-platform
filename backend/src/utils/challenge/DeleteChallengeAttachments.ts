import { rmSync } from "fs";
import { CTFDataSource } from "../../ORM/dataSource"
import { Challenge, ChallengeAttachments } from "../../ORM/entities"


export const DeleteChallengeAttachments = async (challenge : Challenge) => {

    const ChallengeAttachmentsRepository = CTFDataSource.getRepository(ChallengeAttachments);

    try {        

        const attachments = await ChallengeAttachmentsRepository.find({where: {Challenge : {Id: challenge.Id}}})

        attachments.forEach((attachment : ChallengeAttachments) => {
            // Remove the attachments
            rmSync(attachment.Path, {force: true, recursive: true});
            ChallengeAttachmentsRepository.remove(attachment);
        });

    } catch (error) {
        throw error;
    }



}