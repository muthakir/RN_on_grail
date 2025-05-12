import { Text, Card, Button, Icon } from '@rneui/themed';

export default function ProductCard({product}: {product: {
    image: string, 
    title: string, 
    price: number
}}) {
    return (
            <> 
                <Card>
                    <Card.Image
                        style={{ padding: 0 }}
                        source={{
                            uri: product.image,
                        }}
                    />
                    <Card.Divider />

                    <Text style={{ marginBottom: 10 }}>
                        {product.title}
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        {product.price}
                    </Text>
                </Card>
            </>
    )
}