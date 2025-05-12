import axios from "axios";
import { Skeleton } from "moti/skeleton";
import { MotiView } from 'moti'
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import PLPCard from "./plpCard"
import LOGKeyComponent from "../dynatrace/keyComponent";
const Spacer = ({ height = 16 }) => <MotiView style={{ height }} />
const colorMode = false ? 'dark' : 'light'

function rowGenerator(itemList: [...any]){
  let itemsCount = 1; 
  let row = []; 
  let rows = []; 

  for (let i=0; itemList.length >= i; i++ ){
    if (itemsCount < 2){
      row.push(itemList[i]); 
    
      itemsCount++; 
    }
    else if (itemList.length == i) {
      row.push(itemList[i]); 
      rows.push(row); 
    }
    else {
    row.push(itemList[i])
      rows.push(row); 
      row = []
      itemsCount = 1; 
    }
  }
  return rows
}

export default function PLP ({products}:{products: [...any]}){
    
    // products = [1,2,3,4,5,6,7,9,10,11,12];  
    const rows = rowGenerator(products)
    console.log(rows)
    return (
      <>
        <ScrollView>
          <View>
              <Skeleton.Group show={products.length > 0 ? false: true} >
                {
                  products.length > 0? 
                    <LOGKeyComponent screenName="PLP" component="products_list_cards">
                        <Grid style = {{ marginTop: "120"}}>
                          {rows.map((row, idx)=>{
                            
                            return (
                            <Row key={idx} style={ { height: 260} }>
                              {row.map((item, itemIdx)=>{
                                // console.log(item)
                                return (
                                <Col  key={itemIdx} style={{ width: "50%" }}>
                                  <PLPCard product={item}/> 
                                </Col>
                              )
                              })}
                            </Row>)
                          })}
                        </Grid>
                    </LOGKeyComponent>
                  : null
                
                }
                
                  
              </Skeleton.Group>
                
          </View>
        </ScrollView>
      </>
      
    )

    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      fonts: {
        marginBottom: 8,
      },
      user: {
        flexDirection: 'row',
        marginBottom: 6,
      },
      image: {
        width: 30,
        height: 30,
        marginRight: 10,
      },
      name: {
        fontSize: 16,
        marginTop: 5,
      },
      });
    // return (
    //     <MotiView
    //     transition={{
    //       type: 'timing',
    //     }}
    //     style={[styles.container, styles.padded]}
    //     animate={{ backgroundColor: true ? '#000000' : '#ffffff' }}
    //   >
        
    //     <Skeleton colorMode={colorMode} radius="round" height={75} width={75} />
    //     <Spacer />
    //     <Skeleton colorMode={colorMode} width={250} />
    //     <Spacer height={8} />
    //     <Skeleton colorMode={colorMode} width={'100%'} />
    //     <Spacer height={8} />
    //     <Skeleton colorMode={colorMode} width={'100%'} />

    //   </MotiView>
    // )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    padded: {
      padding: 16,
    },
  })