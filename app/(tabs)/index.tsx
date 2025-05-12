import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ViewEvent from '../../components/dynatrace/view'
import axios from "axios"

export default function HomeScreen() {
  
  return (
    <ViewEvent screenName={"Home"}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
          />
        }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome!</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Mobile RUM on Grail</ThemedText>
          <ThemedText>
            The App is a demo of Mobil RUM on <ThemedText type="defaultSemiBold">Grail</ThemedText> to see changes.
            The event based approach provides ease of implementation, Devs don't need to manage actions. the app is build with Press{' '}
            <ThemedText type="defaultSemiBold">
              {/* {Platform.select({
                ios: 'cmd + d',
                android: 'cmd + m',
                web: 'F12'
              })} */}
              React Native
            </ThemedText>{' '}
            trying to emulate <ThemedText type='defaultSemiBold'> PLP, PDP </ThemedText> with delay.

          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Metrics collected</ThemedText>
          <ThemedText>
            The <ThemedText type="defaultSemiBold">event based approached</ThemedText> eased collecting more metrics without complicated code. in addition to the out of the box metrics. we capture. 
             
          </ThemedText>
          <ThemedText type='defaultSemiBold'>
          {"\t"} screen render time 
          </ThemedText>
          <ThemedText type='defaultSemiBold'>
          {"\t"} key functionality availability {"(Add to car button)"} 

          </ThemedText>
        </ThemedView>

        {/* <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 2: Explore</ThemedText>
          <ThemedText>
            Tap the Explore tab to learn more about what's included in this starter app.
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
          <ThemedText>
            When you're ready, run{' '}
            <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
            <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
            <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
            <ThemedText type="defaultSemiBold">app-example</ThemedText>.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Add gen3 events</ThemedText>
              <Button title='AddGen3Event' onPress={
                ()=>{
                  console.log(fetch('https://reactnative.dev/movies.json')
                  .then(response => response.json())
                  .then(json => {
                    return json.movies;
                  })
                  .catch(error => {
                    console.error(error);
                  }))
                }
              }></Button>
        </ThemedView> */}
      </ParallaxScrollView>
    </ViewEvent>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
