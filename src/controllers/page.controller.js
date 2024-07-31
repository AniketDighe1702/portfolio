const path = require('path');

async function get(req, res, next)
{
    try {
        if(req.url == '/')
        {
            res.sendFile(path.resolve(__dirname+'/../../public/index.html'));
        }
        else if(req.url === '/onkardighe-admin')
        {
            res.sendFile(path.resolve(__dirname+'/../../public/admin.html'));
        }
        else
        {
            res.send(`<center><h1>Error 404 : Page NOT found ⚙️</h1></center>`);
        }
    } catch (error) {
        console.error(`Error 404 : `, err.message);
        next(error)
    }
}

module.exports = {
    get
}