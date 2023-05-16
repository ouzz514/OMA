const express = require('express');
const app = express();
const path = require('path');

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

// Définir le répertoire des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Page d'accès POST
app.post('/acces.html', (req, res) => {
  const { login, password } = req.body;
  const utilisateur = usagersData.find(user => user.login === login && user.pwd === password);

  if (utilisateur) {
    switch (utilisateur.acces) {
      case 'normal':
        res.sendFile(path.join(__dirname, 'pageUsager.html'));
        break;
      case 'admin':
        res.sendFile(path.join(__dirname, 'pageAdmin.html'));
        break;
      case 'restreint':
        res.sendFile(path.join(__dirname, 'pageRestreinte.html'));
        break;
      default:
        res.status(401).send('Page non autorisée');
    }
  } else {
    res.status(401).send('Page non autorisée');
  }
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
