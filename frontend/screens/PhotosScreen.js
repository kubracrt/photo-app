import { StyleSheet, Text, View, FlatList } from 'react-native'
import axios from "axios"
import React, { useEffect, useState } from 'react'

export default function PhotosScreen() {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get("http://192.168.1.37:5000/photos")  
            .then(response => {
                console.log("Gelen veri:", response.data);  
                setPhotos(response.data.photos)
            })
            .catch(error => {
                console.log("API Hatası:", error);  
            })
    }, [])



    return (
        <View>
            <FlatList
                data={photos}
                keyExtractor={item => item._id.toString()}  
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
