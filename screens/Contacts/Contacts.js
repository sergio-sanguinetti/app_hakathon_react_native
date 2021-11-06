import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList } from 'react-native';

import BasicButton from '../../components/BasicButton';

// CONTACTO 

import Contacto from './Contacto/Contacto';

// import styles from './styles';

// const handleSubmit = () => {
//     return alert('HICISTE CLICK');
// }

export default function Contacts() {


   

  // const [loading, setLoading] = useState(false)
  // const [contactos, setContactos] = useState([])

  const listacontactos = [
    {"id":"1","nombre":"John", "numero":"9349123412"},
    {"id":"2","nombre":"Anna", "numero":"9123123122"},
    {"id":"3","nombre":"Peter", "numero":"941231231"}
  ];


  // setContactos(listacontactos);


  console.log(listacontactos);

// const fechContactos =  async () => {
//     const response = await fetch(listacontactos)
//      const data = await response.json()
//      setContactos(data)
//      setLoading(false)
// } 

  // useEffect(() => {
  //   fechContactos()
  // }, [])


  return (
      <View>
          <BasicButton
            title={'Añadir un contacto'}
            width={200}
            // onPress={handleSubmit}
            // disabled={!isValid || isSubmitting}
            // loading={isSubmitting}
      />
       {/* { loading ? <Text>Cargando...</Text> : */}
        
        {/* <FlatList
          //  style={styles.list}
           data={contactos.filter(x => x.id === id)}
           keyExtractor={x => String(x.numero)}
           renderItem={({ item  })   => <Listitem  title={item.nombre} /> }
        /> */}
          {/* } */}
{/*        
        <Contacto data={data} /> */}

      </View>
  )
}
