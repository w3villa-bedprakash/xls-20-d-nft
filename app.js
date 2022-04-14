const express = require('express');
const nft_slx_20_D = require('./routes/nft-slx-20-d');
const app = express();
app.use(express.json());

app.use('/api/slx-20-d', nft_slx_20_D);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is listening on port no: ${PORT}`);
});

module.exports = app;