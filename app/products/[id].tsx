import { useLocalSearchParams } from "expo-router";
import { getProduct } from "@/data/asyncstorage";
import { useState, useEffect } from "react";
import PDP from "@/components/ui/pdp";
import ScreenEvent from "@/components/dynatrace/view";
import { View, StyleSheet } from "react-native";
export default function PDPRoute() {
    
    const { id } = useLocalSearchParams(); 
    console.log(id)
    const [product, setProduct] = useState()
    useEffect(() => {
        getProduct(id).then((prod)=>{
            console.log(prod)
            setProduct(prod)
        })
        
    }, [id])

    return (
            <ScreenEvent screenName={"PDP"} >
                <PDP product={product}/>  
            </ScreenEvent>
        
        
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
      paddingTop: 28,
    },
    footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
  });