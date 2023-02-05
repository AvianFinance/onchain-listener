const { ethers } = require("hardhat")
const { amplace_token } = require('../config')
const fs = require('fs');
const Marketplace = JSON.parse(fs.readFileSync('./artifacts/contracts/AvianMarkett.sol/AvianMarkett.json', 'utf-8'))
const {parentPort, workerData} = require("worker_threads");

async function getTransfer(){

    const provider = new ethers.providers.WebSocketProvider(`wss://api.avax-test.network/ext/bc/C/ws`);

    const mplace_contract = new ethers.Contract(amplace_token, Marketplace.abi, provider)

    console.log("listening.........")

    mplace_contract.on("ItemListed", (seller, nftAddress, tokenId, price)=>{

        let transferEvent ={
            seller: seller,
            nftAddress: nftAddress,
            tokenId: tokenId,
            price: price,
        }

        parentPort.postMessage(transferEvent);

    })
}

getTransfer()



module.exports = {
    getTransfer
};
