const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const {createMerchant, getItems, getItem} = require("./scripts/handlers");
const PORT = 8000;

express()
    .use(morgan("tiny"))
    .use(helmet())
    .use(cors())
    .use(express.static("public"))
    .use(express.json())
    .get("/api/items", getItems)
    .get("/api/item/:id", getItem)
    .post("/api/create-merchant", createMerchant)
    .get("*", (req, res) => {
        res.status(404).json({status: 404, message: "Route not found."})
    })
    .listen(PORT, () => console.log(`Listening on Port ${PORT}`));

