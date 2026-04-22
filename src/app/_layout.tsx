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
import { useEffect } from "react";
import { ToastAndroid } from "react-native";
import { addEventListener } from "@react-native-community/netinfo";

import { DataProvider } from "../hooks/data.context";

/**
 * Composant de layout racine de l'application.
 *
 * Fournit le contexte global et configure la navigation principale.
 *
 * @returns {JSX.Element} Layout principal avec navigation et contexte global.
 */
export default function RootLayout() {
  useEffect(() => {
    const unsubscribe = addEventListener((state) => {
      if (!state.isConnected) {
        ToastAndroid.show("Vous n'êtes pas connecté à Internet.", ToastAndroid.LONG);
      } else {
        ToastAndroid.show("Vous êtes connecté à Internet.", ToastAndroid.LONG);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <DataProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </DataProvider>
  );
}
