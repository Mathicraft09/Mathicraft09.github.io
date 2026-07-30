# Eco-Tracker

Un gestionnaire de budget personnel minimaliste, réactif et performant, construit avec Svelte 5 et stylisé avec un design Brutaliste/Wireframe grâce à Tailwind CSS.

---

## Fonctionnalités

* **Ajout de Mouvements** : Saisie rapide du nom, du montant et de la catégorie (Entrée / Sortie).
* **Calcul Automatique** : Total des entrées, des sorties et calcul du solde global en temps réel grâce aux runes de Svelte 5.
* **Jauge Budgétaire** : Un diagramme en barre dynamique affichant le pourcentage des revenus dépensés, avec une alerte visuelle en cas de déficit.
* **Persistance locale (LocalStorage)** : Vos données restent sauvegardées dans votre navigateur même après avoir rafraîchi la page.
* **Réinitialisation complète** : Remise à zéro rapide du budget depuis le pied de page.

---

## Architecture du Code

Le projet sépare proprement la logique métier de l'interface graphique :

* `src/routes/+page.svelte` : Contient l'interface utilisateur, la structure HTML, le style Tailwind et la gestion des états réactifs (`$state`, `$effect`).
* `src/routes/diagramme.ts` : Regroupe la logique pure de calcul mathématique et de statistiques (séparation des concepts pour une meilleure lisibilité).
* `src/routes/+layout.svelte` : Structure globale de l'application (Header, Footer réinitialisable).

---

## Démarrage Rapide

### Prérequis

Assurez-vous d'avoir installé Node.js.

### Installation

1. Clonez le dépôt ou téléchargez les fichiers du projet.
2. Installez les dépendances :
```bash
npm install

```



### Lancement en mode développement

Pour lancer le serveur local et tester l'application :

```bash
npm run dev

```

Ouvrez ensuite votre navigateur à l'adresse indiquée dans votre terminal (généralement `http://localhost:5173`).

---

## Design

L'application arbore une identité visuelle Brutaliste, inspirée des wireframes :

* Bordures noires épaisses (`border-black`).
* Boutons à clics marqués (`active:bg-gray-100`).
* Codes couleurs simples et efficaces pour distinguer la santé financière (Vert pour les gains, Rouge pour les pertes).

---

## Technologies utilisées

* **Svelte 5** (Runes : `$state`, `$derived`, `$effect`)
* **SvelteKit** (Routing et SSR)
* **TypeScript** (Typage strict des données financières)
* **Tailwind CSS** (Design utilitaire)

Créé par Mathicraft dans le cadre d'un apprentissage de Svelte.