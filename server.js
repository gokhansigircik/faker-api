const express = require("express");
const app = express();
const fakerDb = require('@faker-js/faker');

// This is a common Js import 
// const { faker } = require('@faker-js/faker');

const faker = fakerDb.faker;

const createUser =() =>{
    const user = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
    };
    return user;
}
const createCompany =() =>{
    const company = {
        _id : faker.datatype.uuid(),
        name : faker.company.name(),
        address : {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    };
    return company;
}
const user = createUser();
const company = createCompany();


app.get("/api/users/new", (req, res) => {
    res.json({user});
});

app.get("/api/companies/new", (req, res) => {
    res.json({company});
});

app.get("/api/user/company", (req, res) => {
    res.json({company, user});
});

//this is another way to write it but you need to put to port up top
// app.listen( port, () => console.log(`Listening on port: ${port}`) );

const PORT = 8000;
app.listen(PORT, ()=> {
  console.log(`Listening on port ${PORT}`);
});
