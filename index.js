const fs = require('fs')
//const { faker } = require('@faker-js/faker');



// function createRandomUser() {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// }

// const USERS = faker.helpers.multiple(createRandomUser, {
//   count: 5,
// });



const ws = fs.createWriteStream("data_new_2.json");

//ws.write(JSON.stringify(USERS))

const rs = fs.createReadStream("data.json", {
    highWaterMark : 100
})

// rs.on('data', (buffer) => {
//     console.log(`Data : ${buffer.toString()}`);
//     ws.write(buffer.toString())
// })

rs.pipe(
    ws
)

