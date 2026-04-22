# Welcome to your Expo app 👋

---

## 📚 Documentation technique

### Structure du projet (`src/`)

- **Composants UI** (dossier `src/components/`) :
  - `WeatherCard` : Affiche les informations météo d'une ville sous forme de carte stylisée.
  - `SearchBar` : Champ de recherche pour saisir une ville et lancer la récupération météo.
  - `ErrorMessage` : Affiche un message d'erreur si la ville n'est pas trouvée.
- **Contexte & hooks** (dossier `src/hooks/`) :
  - `DataProvider` / `useData` : Fournit et consomme le contexte global météo (chargement, données, fonction de recherche, état réseau).
- **Types** (dossier `src/types/`) :
  - `cityData` : Structure des données météo d'une ville (voir ci-dessous).
- **API** (dossier `src/api/`) :
  - `api.ts` : Fonctions pour interroger l'API météo.
- **Données de test** (dossier `src/utils/`) :
  - `data.json` : Exemple de données météo pour le développement.

### Extraits de documentation structurée (JSDoc/TSDoc)

#### `WeatherCard.tsx`

```ts
/**
 * WeatherCard Component
 *
 * Affiche les informations météo d'une ville sous forme de carte stylisée.
 * @param data Données météo de la ville (voir type cityData)
 * @returns {JSX.Element} Carte météo formatée pour affichage mobile.
 */
```

#### `SearchBar.tsx`

```ts
/**
 * SearchBar Component
 *
 * Champ de recherche permettant à l'utilisateur de saisir une ville et de déclencher la récupération des données météo.
 * @param fetchData Fonction de récupération météo (ville : string)
 * @returns {JSX.Element} Barre de recherche avec champ texte et bouton.
 */
```

#### `ErrorMessage.tsx`

```ts
/**
 * ErrorMessage Component
 *
 * Affiche un message d'erreur lorsque la ville recherchée n'est pas trouvée.
 * @returns {JSX.Element} Message d'erreur formaté pour affichage mobile.
 */
```

#### `src/hooks/data.context.tsx`

```ts
// DataProvider : Fournit le contexte global (données météo, état de chargement, fonction fetchData, état réseau)
// useData : Hook pour consommer le contexte, lève une erreur si utilisé hors provider
```

#### `src/types/types.ts`

```ts
type cityData = {
  current: any; // Données météo courantes (température, icône, etc.)
  location: any; // Infos sur la ville (nom, pays, date locale, etc.)
};
```

---

---

## 🚀 Démarrage rapide

Ce projet est basé sur [Expo](https://expo.dev) et a été créé avec [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

### Installation

1. Installer les dépendances :

```bash
npm install
```

2. Lancer l'application :

```bash
npx expo start
```

3. Suivre les instructions dans le terminal pour ouvrir sur :

- un émulateur Android
- un simulateur iOS
- un appareil physique via Expo Go

### Réinitialiser le projet

Pour repartir d'une base vierge :

```bash
npm run reset-project
```

Le code de démo sera déplacé dans `app-example/` et un dossier `app/` vide sera créé.

---

## 📦 Dépendances principales

Voir `package.json` pour la liste complète. Les principaux outils :

- Expo, React Native, TypeScript
- @react-native-community/netinfo (état réseau)
- dayjs (dates)

---

## 🤝 Contribution

1. Forkez le repo et créez une branche.
2. Faites vos modifications (code, docs, etc.).
3. Ouvrez une Pull Request.

---

## 📖 Pour aller plus loin

- [Expo documentation](https://docs.expo.dev/)
- [Tutoriel Expo](https://docs.expo.dev/tutorial/introduction/)
- [Expo sur GitHub](https://github.com/expo/expo)
- [Discord Expo](https://chat.expo.dev)
