const resumeLink = 'https://drive.google.com/file/d/1IDn9pJlLzI_DDtHM36PMN7YVpdCdu8jp/view';


async function get()
{
    return resumeLink;
}

async function update(newLink)
{
    resumeLink = newLink;
}



module.exports = {
    get, 
    update
}