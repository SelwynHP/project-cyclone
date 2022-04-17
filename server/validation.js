// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const {v4: uuidv4} = require("uuid");
const {getConn} = require("./scripts/db-utils");
const approvedCollections = [
    "customers",
    "merchants",
];

const validCollection = (collection) => {
    return (approvedCollections.includes(collection));
};
//Generate new _id and validate with database.
const getUUID = async (collection) => {
    if (!validCollection(collection)) {
        throw new Error("Collections is not approved for operation");
    }

    let success = false;
    let attempts = 3; //to avoid possible DDOS...
    let uuidReservation = null;

    const {client, db} = await getConn(); //Open connection
    while (!success && attempts > 0) {
        const uuid = uuidv4();
        const result = await db.collection(collection).findOne({_id: uuid});
        attempts -= 1;
        if (!result) {
            success = true;
            uuidReservation = uuid;
        }
    }
    await client.close(); //Close connection
    return uuidReservation;
};

module.exports = {getUUID};