// Connessione al database
const connection = require('../data/dbBlog');

// List all blogs
const index = (req, res) => {
    // Query per ottenere tutti i blog dal database
    connection.query('SELECT * FROM blogs', (err, results) => {
        if (err) {
            console.error('Errore nel recupero dei blog:', err);
            return res.status(500).json({ error: 'Errore nel recupero dei blog' });
        }

        res.json(results); // Invia i dati come JSON
    });
}


const show = (req, res) => {
    const id = req.params.id;

    // Query per ottenere un blog specifico dal database
    connection.query('SELECT * FROM blogs WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error(`Errore nel recupero del blog con id ${id}:`, err);
            return res.status(500).json({ error: 'Errore nel recupero del blog' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Blog non trovato' });
        }

        res.json(results[0]); // Invia il primo risultato come JSON
    });
}




module.exports = {
    index,
    show,
    destroy
};