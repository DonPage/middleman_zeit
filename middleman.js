const { send } = require('micro');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const queries = req.query;
    const { url } = queries;
    const f = await fetch(url,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

    console.log(`f`);
    console.log(f);

    return send(res, {...f});
};
