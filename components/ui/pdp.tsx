import { MotiImage, MotiScrollView, MotiText, MotiView, } from "moti";
import { MotiPressable } from "moti/interactions";
import { StyleSheet, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { Skeleton } from "moti/skeleton";
import { useEffect, useState } from "react";
import LOGKeyComponent from "../dynatrace/keyComponent";
import { usePathname, useSegments } from "expo-router";
import { getRandomWaitingTime } from "../dynatrace/timingUtil"

const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />

export default function PDP({ product }: { product: any }) {
  const [addToCart, setaddToCart] = useState(false);
  useEffect(() => {
    const waitingTime = getRandomWaitingTime(1000, 30000)
    console.log(`waiting time is ${waitingTime}`)
    setTimeout(() => {
      setaddToCart(true);
    }, waitingTime);
  }, [product])
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: !!product ? product.image : "" }} style={styles.image} />
        </View>
      </View>

      <View style={styles.container}>
        <MotiView
          transition={{
            type: 'timing',
          }}
          style={[styles.container, styles.padded]}
          animate={{ backgroundColor: false ? '#000000' : '#ffffff' }}
        >

          <Spacer />
          <Skeleton colorMode={"light"} radius={12} height={"60"} width={"100%"}>
            <MotiText style={styles.textecenter}> {product ? product.title : null} </MotiText>
          </Skeleton>
          <Spacer />
          <Skeleton colorMode={"light"} radius={12} height={"60"} width={"100%"}>
            <MotiText style={styles.textecenter}> {product ? product.description : null} </MotiText>
          </Skeleton>
          <Spacer />
          <Spacer />

          <Skeleton colorMode={"light"} radius={12} height={"60"} width={"100%"}>
            {!!addToCart ?
              <LOGKeyComponent screenName="PDP" component="add_to_cart_button">
                <MotiPressable style={styles.shape}>

                  <MotiView style={styles.shape}>
                    <MotiText style={styles.textecenter}>Add to cart</MotiText>
                  </MotiView>

                </MotiPressable>
              </LOGKeyComponent>

              : null
            }
          </Skeleton>
        </MotiView>
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    height: "66%"
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    marginTop: 4
  },
  padded: {
    padding: 8,
  },
  textecenter: {
    textAlign: "center",
  },
  shape: {
    justifyContent: 'center',
    height: 60,
    width: "100%",
    borderRadius: 5,
    // marginRight: 10,
    backgroundColor: '#3480eb',
  },
});