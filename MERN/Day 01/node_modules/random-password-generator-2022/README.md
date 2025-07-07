## Hello, this function will allow you to generate a random password. EASY TO USE

### Function accepts the following options

|   Option|  Type |  Info | Optional |
| ------------ | ------------ | ------------ | ------------ |
|  passwordLength  |  number  |  password length | No |
| withLowerCase   |  boolean  | Code with lowercase letters  |Yes |
|  withNumbers  |  boolean  |  Code with numbers | Yes |
| withUpperCase   |  boolean  |  Code with uppercase letters | Yes |
|  withCharacters  |  boolean  |  Code with symbols | Yes |
| avoidAmbiguous   | boolean   | Avoid ambiguous characters (l/I/1, 0/O)  | Yes |

### Support Common and module Example:

    import { generateRandomPassword } from 'random-password-generator-2022';
    //OR
    const {generateRandomPassword} = require('random-password-generator-2022')

    const password = generateRandomPassword({ passwordLength: 6, 
    withNumbers: true, withCharacters: true, });

    //7_(>=3
    console.log(password)

