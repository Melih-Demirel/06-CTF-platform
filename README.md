# Capture The Flag Platform


## Tech-Stack

Het CTF Platform gebruikt de volgende technologieën:
- [VueJS] - Frontend Framework
- [node.js] - Backend omgeving
- [Twitter Bootstrap] - Frontend UI library
- [Express] - API framework
- [Typescript] - Programmertaal

## Installatie met Docker

Voor het installeren van het project met een Docker moeten de volgende commando's gebruikt worden.
```sh
cd src
docker compose up --build
```
Controleer de installatie door te navigeren naar uw serveradres in uw gewenste browser.
```sh
127.0.0.1:3000 # Backend
127.0.0.1:8080 # Frontend
```

## Test Data
Het platform heeft al wat ingeladen testdata en deze testdata is te vinden in de /src/backend/src/ORM/loadTestData.ts TypeScript bestand. Met het volgende administrator account is het platform ook volledig testbaar:
```
Email : Admin@student.uhasselt.be
Wachtwoord: Admin
```
Er is nog geen test data voorzien voor de containerized challenges omdat dit wat ingewikkelder was automatisch aan te maken dus hebben wij 2 voorbeelden voorzien in de ../bin/testdata folder.

## Environment variabelen backend
De backend maakt gebruik van enviornment variabelen om te connecteren met de postgres databank en voor de JWT functionaliteit deze kan aangepast in de /src/backend/.env bestand.
```env
# Database - Postgres
DATABASE_TYPE=postgres
PG_HOST=postgres
PG_PORT=5432
PG_USER=postgres
PG_PWD=postgres
PG_DB=ctf

# JWT 
JWT_SECRET=dfdhhf8gh523reh6qedn37dferpoawdn381j
JWT_EXPIRATION=24h
```


[//]: #
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [express]: <http://expressjs.com>
   [VueJS]: <https://vuejs.org/>
   [TypeScript]: <https://www.typescriptlang.org/>
