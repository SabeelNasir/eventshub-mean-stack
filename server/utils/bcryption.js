const bcrypt = require('bcrypt')
const saltRounds = 8;

module.exports = {
    async encryptPassword(inputPassword) {
        const hashedPassword = await bcrypt.hash(inputPassword, saltRounds);
        return hashedPassword
    },
    async decryptPassword(inputPassword, dbPassword) {
        // return bcrypt.compare(inputPassword, dbPassword, (err, result) => {
        //     return result;
        // })
        console.log(dbPassword)
        return await bcrypt.compare(inputPassword, dbPassword)
    }
}