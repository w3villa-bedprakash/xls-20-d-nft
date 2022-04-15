const express = require('express');
const router = express.Router();
const xls_client = require('../config/xls20DConn');
const xrpl = require('xrpl')

router.get('/get-tokens/:address', async (req, res) => {
    try {
        const client = await xls_client();
        const nfts = await client.request({
            method: "account_nfts",
            account: req.params.address
        })
        client.disconnect();
        return res.status(200).send({ message: 'success', data: nfts });
    } catch (err) {
        client.disconnect();
        res.status(500).send({ message: 'error', data: err });
    }
});

router.post('/token-mint', async (req, res) => {
    try {
        const client = await xls_client();
        const wallet = await xrpl.Wallet.fromSeed(req.body.secretKey);
        const tnxBlobData = {
            TransactionType: "NFTokenMint",
            Account: wallet.classicAddress,
            URI: xrpl.convertStringToHex(req.body.metadataUrl),
            Flags: 1,
            TokenTaxon: 0 //Required, but if you have no use for it, set to zero.
        }
        const tx = await client.submitAndWait(tnxBlobData, { wallet });
        const nfts = await client.request({
            method: "account_nfts",
            account: wallet.classicAddress
        });
        client.disconnect()
        return res.status(201).send({ message: 'success', data: nfts, "Balance changes": xrpl.getBalanceChanges(tx.result.meta) });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).send({ message: 'error', data: err });
    }
});

router.get('/get-balance/:address', async (req, res) => {
    try {
        const client = await xls_client();
        const balance = await client.getBalances(req.params.address);
        client.disconnect();
        return res.status(200).send({ message: 'success', data: balance });
    } catch (err) {
        console.log("Error:", err);
        client.disconnect();
        return res.status(500).send({ message: 'error', data: err });
    }
});

router.get('/test', async (req, res) => {
    res.status(201).send({ message: 'success', data: "Not implemented yet" });
});

module.exports = router;
