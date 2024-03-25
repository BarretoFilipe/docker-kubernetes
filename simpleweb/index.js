const express = require("express");
const Redis = require("ioredis");
const process = require("process");

const app = express();
const redis = new Redis(6379, "redis-server");

redis.set("visits", 0);

app.get("/", (req, res) => {
    //process.exit(0); para forçar erro e dar restart always
    redis.get("visits", (err, visits) => {
        res.send(`Number of visits is ${visits}`);
        redis.set("visits", parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log("Listening on port 4001");
});
