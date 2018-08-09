const proxy = {
    'GET /api/user': {id: 1, username: 'kenny', sex: 6 },
    'POST /api/login': (req, res) => {
        const { password, username } = req.body;
        if (password === 'admin888' && username === 'admin') {
            return res.send({
                status: 'ok',
                code: 200,
                token: "thisistoken",
                data: {id: 1, username: 'kenny', sex: 6 }
            });
        } else {
            return res.send({status: 'error', code: 403 });
        }
    },
}
module.exports = proxy;