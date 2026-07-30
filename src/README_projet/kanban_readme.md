
# Mon Kanban

Une application de gestion de tâches de type Kanban minimaliste et efficace, entièrement construite avec **React**, **TypeScript** et **Vite**.

Ce projet a été développé dans un but pédagogique afin de maîtriser les fondamentaux de React, la gestion des états (`useState`), le typage avec TypeScript et la persistance des données.

---

##  Fonctionnalités

*   **Ajout de tâches** : Créez une tâche rapidement avec un titre et une description détaillée.
*   **Gestion des colonnes** : Visualisez vos tâches à travers 3 étapes clés : *À faire*, *En cours* et *Terminé*.
*   **Déplacement fluide** : Déplacez vos tâches d'une colonne à l'autre d'un simple clic grâce aux boutons directionnels (◀ et ▶).
*   **Persistance locale (`LocalStorage`)** : Vos données ne sont pas perdues ! Tout est sauvegardé automatiquement dans votre navigateur.
*   **Nettoyage en un clic** : Possibilité de supprimer une tâche individuellement ou de vider entièrement le tableau avec une confirmation de sécurité.

---

##  Technologies utilisées

*   **React 18** (Fonctions de composants, Hooks)
*   **TypeScript** (Sécurité du code et typage strict des colonnes/tâches)
*   **Vite** (Build et serveur de développement ultra-rapide)
*   **CSS3** (Mise en page épurée "wireframe" en noir et blanc)

---

##  Installation et Lancement

Suivez ces étapes pour lancer le projet en local sur votre machine :

### 1. Cloner le projet
```bash
git clone https://github.com/Mathicraft09/Kanban.git
cd mon-kanban

```

### 2. Installer les dépendances

```bash
npm install

```

### 3. Lancer le serveur de développement

```bash
npm run dev

```

Ouvrez ensuite votre navigateur à l'adresse locale indiquée par Vite (généralement `http://localhost:5173`).

---

##  Structure du Code Principal

L'application s'articule autour de trois composants clés au sein du fichier `App.tsx` :

* `FormTask` : Gère le formulaire d'entrée et la validation des nouvelles tâches.
* `ColumnTask` : Filtre et distribue dynamiquement les tâches dans leurs colonnes respectives en fonction de leur `columnId`.
* `App` (Main) : Orchestre l'état général, centralise les fonctions de déplacement, de suppression, et gère la synchronisation avec le `localStorage`.

---

##  Auteur

© 2026 - Développé avec passion par **Mathicraft** dans le but d'apprendre React. 