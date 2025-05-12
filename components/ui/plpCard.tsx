import { MotiView, MotiImage, Text } from "moti"
import { Skeleton} from 'moti/skeleton'
import { StyleSheet, Pressable } from 'react-native'
import { Link } from 'expo-router';
const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    padded: {
      padding: 8,
    },
  })
export default function PLPCard({ product }: {product: any}){
    const colorMode = false ? 'dark' : 'light'
    return ( 
        <MotiView
        transition={{
          type: 'timing',
        }}
        style={[styles.container, styles.padded]}
        animate={{ backgroundColor: false ? '#000000' : '#ffffff' }}
      >
        <Skeleton colorMode={colorMode} radius="square" height={"80%"} width={"100%"}>
            {!!product ? <Card product={product}/>: null}
        </Skeleton>
        <Spacer />
        {/* <Skeleton colorMode={colorMode} width={"100%"} /> */}
        {/* <Spacer height={8} /> */}
        {/* <Skeleton colorMode={colorMode} width={'10%'} /> */}
        {/* <Spacer height={8} /> */}
      </MotiView>
        
    )
}


function Card ({ product }: {product: any }) {
    return (
        <Link href={{
          pathname: '/products/[id]',
          params: { id: product.title? product.title: "test"},
        }} asChild>
            <Pressable style={{height:"100%"}}>
                <MotiView
                style={[styles.container, styles.padded]}
                animate={{ backgroundColor: false ? '#000000' : '#ffffff' }}
                >
                    <MotiImage style={{height:"100%"}}  source={{ uri: product.image }} />
                    <Text >
                        {product.title}
                    </Text>
                </MotiView>
            </Pressable>
        </Link>
                
    )
}