/**
 * Fichier de layout principal pour la navigation de l'application.
 *
 * Rôle :
 * - Définit la structure globale de l'application avec le provider de données.
 * - Configure la navigation par pile (Stack) via expo-router.
 *
 * Points d'entrée clés :
 * - DataProvider : Fournit le contexte global à toute l'application.
 * - Stack : Définit la navigation principale sans header natif.
 *
 * Spécificités Expo/React Native :
 * - Utilise expo-router pour la navigation.
 * - Prévu pour affichage sur mobile (iOS/Android).
 */
import { Stack } from "expo-router";

import { DataProvider } from "../hooks/data.context";

/**
 * Composant de layout racine de l'application.
 *
 * Fournit le contexte global et configure la navigation principale.
 *
 * @returns {JSX.Element} Layout principal avec navigation et contexte global.
 */
export default function RootLayout() {
  return (
    <DataProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </DataProvider>
  );
}
