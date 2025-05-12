import AsyncStorage from '@react-native-async-storage/async-storage';


export async function addProdducts(products: [...any]){
  try {
    const values = JSON.stringify(products)
    await AsyncStorage.setItem('products', values);
  } catch (e) {
    // saving error
  }

}; 

export async function getProduct(id:string) {
    const jsonValue = await AsyncStorage.getItem('products');
    if (jsonValue){
        const values = JSON.parse(jsonValue)
        const product = values.filter((prod:any) => {
            return prod['title'] == id; 
        })
        console.log(product)
        return product[0]; 
    }
    
}