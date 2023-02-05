const {Worker} = require("worker_threads");

const worker = new Worker("/Users/meelanbandara/Desktop/NFT Rental Economy/onchain-listener/scripts/listener.js",{workerData: "hello listner"});

const db_worker = new Worker(__dirname + "/db_connection.js",{workerData: "hello db"});

worker.on("message", msg => {
    db_worker.postMessage(msg)
});


