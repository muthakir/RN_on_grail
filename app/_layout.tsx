import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Dynatrace } from '@dynatrace/react-native-plugin'
import { useColorScheme } from '@/hooks/useColorScheme';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  

  useEffect(() => {

    enum LogLevel{
      Info, 
      Debug
    }
    console.log(LogLevel)
    if (loaded) {
      SplashScreen.hideAsync();
      Dynatrace.start({
        applicationId: "19cd4be-a0ba-4cc2-8cc7-0fcb32c15cd8", 
        beaconUrl: 'https://bf72198kwm.bf-dev.dynatracelabs.com/mbeacon', 
        reportCrash: true, 
        errorHandler: true, 
        reportFatalErrorAsCrash: true, 
        logLevel: LogLevel.Info, 
        lifecycleUpdate: true, 
        userOptIn: false, 
        actionNamePrivacy: false
      })
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
 
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="products/[id]" options={{ headerShown: true, headerTitle: ""}} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
