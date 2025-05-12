import { Dynatrace } from "@dynatrace/react-native-plugin";
import { useFocusEffect } from "expo-router";
// import { useFocusEffect } from "@react-navigation/native";
import { useEffect } from "react";
export default function ScreenEvent ({screenName, children}:any){
    useFocusEffect(()=>{
        logScreenEvent(screenName)
    })
    // useEffect(()=>{
    //     logScreenEvent(screenName)
    // }, [screenName])
    
    return  children
}

const logScreenEvent = (screenName: string) => {
    const t = {
        "event_properties.screen.name": screenName, 
    }
    Dynatrace.sendEvent(t)
}