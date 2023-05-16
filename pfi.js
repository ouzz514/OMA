pfi.js

const express = require('express');
const app = express();

// Données d'utilisateurs
const usagersData = [
  { nom: 'Bob Larue', login: 'larueb', pwd: 'bobo1234', acces: 'normal' },
  { nom: 'Paul Larue', login: 'laruep', pwd: 'paul9911', acces: 'admin' },
  { nom: 'Lucie Labelle', login: 'labellel', pwd: 'lucie.911', acces: 'restreint' },
  { nom: 'Luc Morin', login: 'morinl', pwd: 'mallo1234', acces: 'normal' },
  { nom: 'Fred Pellerin', login: 'pellef', pwd: 'pell9911', acces: 'admin' },
  { nom: 'Sophie Levesque', login: 'levesqs', pwd: 'sophie.911', acces: 'restreint' }
];

// Configuration du port d'écoute
const port = process.env.PORT || 8000;

// Middleware pour le traitement des formulaires
app.use(express.urlencoded({ extended: false }));

// Page d'accueil
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pagesWeb/login.html');
});

// Page d'accès GET
app.get('/acces.html', (req, res) => {
  const { login, password } = req.query;
  const utilisateur = usagersData.find(user => user.login === login && user.pwd === password);

  if (utilisateur) {
    switch (utilisateur.acces) {
      case 'normal':
        res.sendFile(__dirname + '/pagesWeb/pageUsager.html');
        break;
      case 'admin':
        res.sendFile(__dirname + '/pagesWeb/pageAdmin.html');
        break;
      case 'restreint':
        res.sendFile(__dirname + '/pagesWeb/pageRestreinte.html');
        break;
    }
  } else {
    res.status(401).send('Page non autorisée');
  }
});

// Autres pages
app.use(express.static('pagesWeb'));

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
