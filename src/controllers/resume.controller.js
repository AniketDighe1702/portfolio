const resume = require('../services/resume.service');

async function get(req, res, next)
{
    try {
        res.redirect(await resume.get())
    } catch (error) {
        console.error(`Error while getting Resume`, error.message);
        next(error);
    }
}

async function post(req, res, next)
{
    try {
        await resume.update(req.body.newLink);
        res.redirect('/onkardighe-admin');
        
    } catch (error) {
        console.error(`Error while Updating Resume`, error.message);
        next(error);
    }
}


module.exports = {
    get,
    post
}