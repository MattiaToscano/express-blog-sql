const index = (req, res) => {
    res.send('Elenco blog');
}

const show = (req, res) => {
    const id = req.params.id;
    res.send('Elenco blog con id ' + id);
}

const destroy = (req, res) => {
    const id = req.params.id;
    res.send('Eliminazione del blog con id ' + id);
}


module.exports = {
    index,
    show,
    destroy
};