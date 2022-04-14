const xrpl = require('xrpl');
module.exports = async function () {
    const client = new xrpl.Client("wss://xls20-sandbox.rippletest.net:51233")
    await client.connect().then((err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Successfully connected to XRPL Sandbox");
        }
    })
    return client;
};

//main account
//account: 'rn9r2Nn7AGn7GdyPfqWqkZxKZzHdqKUG1R'
//secret: 'spvu1gbcn5tbmPszsFvH28mvNeMVQ'


//other account
//account: 'rEFbuuRX9X4atGfKqK2rMCesy58d6jobT8'
//secret: 'shRbQRKcjmpHDgDRUKUa77seo9GrX'