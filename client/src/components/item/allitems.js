import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Platform, ActivityIndicator, ScrollView, SafeAreaView } from 'react-native';
import { Provider, DefaultTheme, Button, Title, DataTable } from 'react-native-paper';
import { Link } from "react-router-dom";

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#0cc261',
        accent: '#f1c40f',
    },
};

export default function AllItems({ navigation }) {

    const [allItems, setAllItems] = useState();
    const [host, setHost] = useState("");

    useEffect(() => {
        if(Platform.OS=="android"){
            setHost("10.0.2.2");
        }
        else{
            setHost("localhost");
        }
        fetch(`http://${host}:5000/retrive_all_item`, {
            method: 'GET'
        })
        .then(res => res.json())
        .catch(error => console.log(error))
        .then(allItems => setAllItems(allItems));
    }, [allItems, host]);

    return (
        <Provider theme={theme}>
        <SafeAreaView>
        <ScrollView>
            <View style={styles.view}>
                <DataTable style={styles.datatable}>
                    <Title>All Items</Title>
                    <DataTable.Header>
                        <DataTable.Title>Item</DataTable.Title>
                        <DataTable.Title>Grade</DataTable.Title>
                        <DataTable.Title>Action</DataTable.Title>
                    </DataTable.Header>
                {allItems ?
                    allItems.map((item)=>{
                        return (
                            <DataTable.Row>
                                <DataTable.Cell>{item.item_name}</DataTable.Cell>
                                <DataTable.Cell>{item.grade}</DataTable.Cell>
                                <DataTable.Cell>
                                    {Platform.OS=='android' ?
                                        <Button mode="contained" style={{width: '100%'}} onPress={() => {navigation.navigate('EditItem', {itemId: item._id})}}>Details</Button>
                                        :
                                        <Button mode="contained" style={{width: '100%'}}><Link to={"/edititem/"+item._id}>Details</Link></Button>
                                    }
                                </DataTable.Cell>
                            </DataTable.Row>
                        )
                    })
                    :
                    <ActivityIndicator color="#794BC4" size={60}/>
                }
                </DataTable>
            </View>
        </ScrollView>
        </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    view: {
        ...Platform.select({
            ios: {
                
            },
            android: {
            },
            default: {
                
            }
        })
    },
    card: {
        margin: '2%',
        alignSelf: 'center',
        ...Platform.select({
            ios: {
                
            },
            android: {
                width: '90%',
            },
            default: {
                width: '20%',
            }
        })
    },
    datatable: {
        alignSelf: 'center',
        marginTop: '2%',
        marginBottom: '2%',
        padding: '2%',
        ...Platform.select({
            ios: {
                
            },
            android: {
                width: '90%',
            },
            default: {
                width: '50%',
                border: '1px solid gray',
                borderRadius: '2%',
                boxShadow: '0 4px 8px 0 gray, 0 6px 20px 0 gray',
            }
        })
    },
}); 