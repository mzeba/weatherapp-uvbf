# Welcome to your Expo app 👋

---

## 📚 Documentation technique (structure & composants)

### Structure principale du code (`src/`)

- **Composants UI** :
  - `WeatherCard` : Affiche les informations météo d'une ville sous forme de carte stylisée.
  - `SearchBar` : Champ de recherche permettant à l'utilisateur de saisir une ville et de déclencher la récupération des données météo.
  - `ErrorMessage` : Affiche un message d'erreur lorsque la ville recherchée n'est pas trouvée.
- **Contexte & hooks** :
  - `DataProvider` / `useData` : Fournit et consomme le contexte global de données météo (chargement, données, fonction de recherche).
- **Types** :
  - `cityData` : Structure des données météo d'une ville (nom, pays, température, description, icône).

### Extraits de documentation structurée (JSDoc/TSDoc)

#### `WeatherCard.tsx`

```
/**
 * WeatherCard Component
 *
 * Affiche les informations météo d'une ville sous forme de carte stylisée.
 *
 * @param {cityData} data - Données météo de la ville (nom, pays, température, icône, description).
 * @returns {JSX.Element} Carte météo formatée pour affichage dans l'application.
 *
 * Spécificités Expo/React Native :
 * - Utilise les styles natifs pour l'affichage.
 * - Prévu pour affichage sur mobile (iOS/Android).
 */
```

#### `SearchBar.tsx`

```
/**
 * SearchBar Component
 *
 * Champ de recherche permettant à l'utilisateur de saisir une ville et de déclencher la récupération des données météo.
 *
 * @param {(city: string) => void} fetchData - Fonction de rappel pour lancer la recherche météo sur la ville saisie.
 * @returns {JSX.Element} Barre de recherche avec champ texte et bouton d'action.
 *
 * Spécificités Expo/React Native :
 * - Utilise TextInput et TouchableOpacity pour interaction mobile.
 * - Prévu pour affichage sur mobile (iOS/Android).
 */
```

#### `ErrorMessage.tsx`

```
/**
 * ErrorMessage Component
 *
 * Affiche un message d'erreur lorsque la ville recherchée n'est pas trouvée.
 *
 * @returns {JSX.Element} Message d'erreur formaté pour affichage dans l'application.
 *
 * Spécificités Expo/React Native :
 * - Utilise les styles natifs pour l'affichage.
 * - Prévu pour affichage sur mobile (iOS/Android).
 */
```

#### `src/hooks/data.context.tsx`

```
// DataProvider : Fournit le contexte global (données météo, état de chargement, fonction fetchData)
// useData : Hook pour consommer le contexte, lève une erreur si utilisé hors provider
```

#### `src/types/types.ts`

```
type cityData = {
   /** Nom de la ville. */
   city: string;
   /** Pays de la ville. */
   country: string;
   /** Température actuelle dans la ville (en °C). */
   temperature: number;
   /** Description textuelle de la météo (ex: "Ensoleillé"). */
   description: string;
   /** Icône météo (peut être un emoji ou un code). */
   icon: string;
};
```

---

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
