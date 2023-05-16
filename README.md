README.md

Oussama Omary

Projet de serveur Web avec rétroaction de formulaires
Description

Ce projet consiste à développer un serveur Web capable de valider un formulaire d'identification de connexion. Le serveur sera programmé en utilisant Node.js et Express.js. Lorsqu'un utilisateur soumet ses informations d'identification, le serveur vérifie si ces informations correspondent à celles présentes dans une liste prédéfinie d'utilisateurs. En fonction du type d'accès de l'utilisateur, le serveur affiche une page Web correspondante.
Fonctionnalités

    Affichage d'un formulaire de connexion demandant un nom d'utilisateur (login) et un mot de passe (password).
    Validation des informations d'identification soumises par l'utilisateur.
    Affichage de différentes pages en fonction du type d'accès de l'utilisateur :
        Page "pageUsager.html" pour les utilisateurs ayant un accès normal.
        Page "pageAdmin.html" pour les utilisateurs ayant un accès administrateur.
        Page "pageRestreinte.html" pour les utilisateurs ayant un accès restreint.
    Gestion des erreurs pour les identifiants invalides.
    Utilisation de la variable d'environnement PORT pour spécifier le port d'écoute du serveur.