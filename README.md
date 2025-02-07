<b> Description </b>

Une API REST simple permettant de gérer un registre de personnes avec une base de données SQLite. Elle permet d'ajouter, modifier, récupérer et supprimer des personnes via des requêtes HTTP.<br>

<b>Technologies </b>

Node.js : Environnement d'exécution JavaScript permettant d'exécuter du code côté serveur.<br>

Express.js : Framework minimaliste pour Node.js qui simplifie la création d'API et la gestion des routes.<br>

SQLite3 : Système de gestion de base de données léger et sans serveur, stocké dans un simple fichier.<br>
<b> Routes API </b>

GET /personnes : Liste toutes les personnes<br>

GET /personnes/:id : Récupère une personne par ID<br>

POST /personnes : Ajoute une personne<br>

PUT /personnes/:id : Modifie une personne<br>

DELETE /personnes/:id : Supprime une personne<br>
