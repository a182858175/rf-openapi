# RF API

This project is a open api for RF. It uses NodeJS to run and it's built using:

- Typescript
- Express
- Typeorm
- MSSQL

The intuit is to facilitate the development of furthers application that requires database queries.
_Note that this api is still in development and there's no authentication method. So be carefull using it_<br/>

## Getting Started

You're going to need [NodeJS and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm "link") installed in your machine in order to run it.

### Setting up

_Make sure you edit **.env** to match your MSSQL connection._

Run this command to install all dependencies needed.

- `npm install`

Once everything is installed. Run this command to start de API

- `npm dev`

## End Points

_You can check all availables endpoints inside src/routes_

### BILLING

#### tbl_UserStatus

| METHOD | URL               | RETURN                                  |
| ------ | ----------------- | --------------------------------------- |
| GET    | /userstatus       | tbl_UserStatus information              |
| POST   | /userstatus/store | Creates a new row inside tbl_UserStatus |
| PATCH  | /userstatus/:id   | Updates tbl_UserStatus where id = id    |

#### tbl_CashLog

| METHOD | URL      | RETURN                  |
| ------ | -------- | ----------------------- |
| GET    | /cashlog | tbl_CashLog information |
