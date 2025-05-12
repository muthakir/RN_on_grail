import { Children, Component, useEffect } from "react";
import { Dynatrace } from "@dynatrace/react-native-plugin";
import { useSegments } from "expo-router";
export default function LOGKeyComponent({ screenName, component, children}: {
    screenName: string, 
    component: string, 
    children: any
}){
    // you could use useSegments to replace the screenName with the path. 
    // I don't need to to so buecause this is a small demo. 
    // ie. 
    // console.log(useSegments())
    useEffect(()=>{
        const event = {
            "event_properties.screen.name": screenName, 
            "event_properties.component_name": component, 
            "event_properties.type": "key_component"
        }
        Dynatrace.sendEvent(event)
    }, [screenName,component])
    return children
}