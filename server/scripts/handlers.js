const {getConn} = require("./db-utils");
const {getUUID} = require("../validation");

const createMerchant = async (req, res) => {
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
const getMerchants = async (req, res) => {
    const {client, db} = await getConn();
    try {
        const merchants = await db.collection("merchants").find().toArray();
        (merchants.length) ?
            res.status(200).json({status: 200, merchants}) :
            res.status(404).json({status: 404, message: "No merchants found."});
    } catch (err) {
        res.status(500).json({status: 500, error: err.message});
    } finally {
        await client.close();
    }
}

const getItems = async (req, res) => {
    //Get query values
    let {page, limit, merchantId} = req.query;
    //Convert to int / Set fallback if no value
    page = (page) ? parseInt(page) : 0;
    limit = (limit) ? parseInt(limit) : 6;
    merchantId = (merchantId) ? merchantId : "undefined";
    //Execution
    const {client, db} = await getConn(); //Open connection
    try {
        //Retrieve data from collection
        const items = await db.collection("items")
            .find({merchantId: {$eq: merchantId}})
            .skip(page * limit)
            .limit(limit)
            .toArray();
        //Return response
        (items.length) ?
            res.status(200).json({status: 200, items}) :
            res.status(404).json({status: 404, message: "No items found."});
    } catch (err) {
        res.status(500).json({status: 500, error: err.message});
    } finally {
        await client.close(); //Close connection
    }
};

const getItem = async (req, res) => {
    //Get params values & convert to int
    const {id} = req.params;
    const _id = id;
    //Execution
    const {client, db} = await getConn(); //Open connection
    try {
        //Retrieve data from collection
        let itemDetails = null;
        const item = await db.collection("items").findOne({_id});
        console.log(item);
        const merchant = await db.collection("merchants").findOne({_id: item.merchantId});
        //Parse relevant data
        if (item && merchant) {
            itemDetails = {
                ...item,
                merchant,
            };
        } else {
            throw new Error("An error occurred while processing request");
        }
        //Return response
        (itemDetails) ?
            res.status(200).json({status: 200, itemDetails}) :
            res.status(404).json({status: 404, message: "No items found."});
    } catch (err) {
        res.status(500).json({status: 500, error: err.message});
    } finally {
        await client.close(); //Close connection
    }
};

module.exports = {createMerchant, getMerchants, getItems, getItem};