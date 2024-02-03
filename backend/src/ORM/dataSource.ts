import { DataSource } from 'typeorm';

import { 
    Attempt, 
    Challenge, 
    ChallengeAttachments, 
    ChallengeCategory, 
    ChallengeFlag, 
    Hint,
    PurchasedHint,
    Round,
    SolvedChallenges,
    Team, 
    User,
    UserCategory,
    DockerImage,
    DockerDefaultPorts,
    DockerContainer, 
    DockerContainerPorts,
} from './entities';


export const CTFDataSource = new DataSource({
    type: 'postgres',
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    username: process.env.PG_USER,
    password: process.env.PG_PWD,
    database: process.env.PG_DB,
    entities: [    
        Attempt, 
        Challenge, 
        ChallengeAttachments, 
        ChallengeCategory, 
        ChallengeFlag, 
        Hint,
        PurchasedHint,
        Round,
        SolvedChallenges,
        Team, 
        User,
        UserCategory,
        DockerImage,
        DockerDefaultPorts,
        DockerContainer, 
        DockerContainerPorts,
    ],
    migrations: ['src/ORM/migration/**/*.ts'],
    synchronize: true,
    logging: false,
});