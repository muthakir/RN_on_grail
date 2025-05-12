import PLP from "@/components/ui/plp" 
import ScreenEvent from "../../components/dynatrace/view"
import { useEffect, useState } from "react";
import axios from "axios";
import { addProdducts } from "@/data/asyncstorage";

export default function PLPPage () {
    const [products, setProducts]: [any, Function] = useState([])
    const screenName = "PLP"
    useEffect(()=>{
        setTimeout(() => {
            axios.get('https://fakestoreapi.com/products').then((response)=>{
                if (response.status != 200){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.data
            }).then((data)=>{
                    addProdducts(data)
                    setProducts(data)
                })
        }, 3000);
        
    }, [])
    return (
    <ScreenEvent screenName={screenName}>
        <PLP products={products}/>
    </ScreenEvent>
    

    )
}