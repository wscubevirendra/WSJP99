const { generateRandomPassword } = require('random-password-generator-2022')

const password = generateRandomPassword({
    passwordLength: 10,
    withNumbers: true, withCharacters: false,
});

console.log(password)