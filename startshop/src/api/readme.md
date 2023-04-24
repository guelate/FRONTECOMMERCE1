Le répertoire api contient tous les services qui prennent en charge la communication entre l'application React (frontend) et une API (backend). Un seul service fournit plusieurs fonctions pour récupérer des données d'un service externe ou pour envoyer des données à un service externe en utilisant le protocole HTTP.

auth.js fournit des fonctions pour l'authentification et axios.js contient une instance axios comprenant des intercepteurs pour les requêtes HTTP sortantes et les réponses entrantes. De plus, le processus de rafraîchissement des JWTs est géré ici.

