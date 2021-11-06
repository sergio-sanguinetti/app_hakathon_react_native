import React from 'react';
import {Text, FlatList } from 'react-native';

export default function Contacto({data}) {

    const { nombre , numero } = data; 

    console.log(data);
    return (
         <>
         <Text>{nombre}</Text>
         <Text>{numero}</Text>
         </>
    )
}
