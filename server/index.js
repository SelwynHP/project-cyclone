const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const PORT = 8000;

express()
    .use(morgan("tiny"))
    .use(helmet())
    .use(cors())
    .use(express.static("public"))

    .listen(PORT, () => console.log(`Listening on Port ${PORT}`));

