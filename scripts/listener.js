const { ethers } = require("hardhat")
const { amplace_token } = require('../config')
const fs = require('fs');
const Marketplace = JSON.parse(fs.readFileSync('./artifacts/contracts/AvianMarket.sol/AvianMarket.json', 'utf-8'))



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

        console.log(JSON.stringify(transferEvent, null, 4))

    })
}

getTransfer()

module.exports = {
    getTransfer
};
