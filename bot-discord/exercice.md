# Exercice : Création d’un Bot Discord

## Objectif

Créer un **bot Discord** qui gamifie un serveur grâce à un **système de points, niveaux et badges**.

---

## Étapes de travail

### 1. Planification & Répartition des tâches

1. Définissez les **collections MongoDB** :
   - `Users` : stocke points, niveaux, badges, dernière activité.
   - `Badges` : définit les badges disponibles et leurs critères.
2. Créez les schémas Mongoose pour chaque collection.

---

### 2. Création du bot Discord
- Implémentez la **connexion au serveur** et la **gestion des événements** (`messageCreate`).

---

### 3. Attribution de points et calcul de niveau (1h)
- Chaque message valide d’un utilisateur ajoute des points.
- Limitez les points pour éviter le spam (ex. 1 point par 5 min).

Voici les niveaux disponibles :
- Niveau 1 "péon" : 0-99 points
- Niveau 2 "chevalier" : 100-299 points
- Niveau 3 "roi" : 300-599 points
- Niveau 4 "gigachad" : 600-999 points

Voici les badges disponibles :

- Spammer: Envoyer 50 messages en une heure.
- Vocalist: Se connecter au canal vocal 10 fois.
- Legend: Etre sur le serveur depuis plus d'un mois.

### 4. Commandes supportées

- `/points` : Affiche les points et le niveau de l’utilisateur.
- `/leaderboard` : Affiche le classement des membres par points.
- `/badges` : Affiche les badges obtenus par l’utilisateur.

## Optionel, ajouter une gestion des permissions

### 1. Commandes admin

- `/addpoints @user X` : Ajoute X points à un utilisateur.
- `/removepoints @user X` : Retire X points à un utilisateur.

Ces commandes ne peuvent être utilisées que par les administrateurs du serveur. Qui sont définis par un rôle spécifique dans le Discord.