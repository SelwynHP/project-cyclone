const {getConn} = require("./db-utils");
const {getUUID} = require("../validation");

const CreateMerchant = async (req, res) => {
    const {client, db} = await getConn();
    try {
        const merchant = {_id: await getUUID("merchants"), ...req.body};

        const result = await db.collection("merchants").insertOne(merchant);
        (result.insertedId) ?
            res.status(201).json({status: 201, message: "Account successfully added", result}) :
            res.status(400).json({status: 400, message: "Account was not successfully added", result});
    } catch (err) {
        res.status(500).json({status: 500, message: "An error occurred while processing request", error: err.message});
    } finally {
        await client.close();
    }
}

module.exports = {CreateMerchant};