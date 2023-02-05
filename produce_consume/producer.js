const {parentPort, workerData} = require("worker_threads");

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function producer(){

    for (let i = 0; i < 5; i++) {
        parentPort.postMessage(
            {
                "name":"pizza",
                "shape":"square"
            
            }
        );
        await delay(1000);
    }

}

producer()




