const express = require('express');
const server = express();
const moviesRoutes = require('./routes/movies');

server.use(express.json());
server.use('/movies', moviesRoutes);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🎬 Catflix API running at http://localhost:${PORT}`);
});