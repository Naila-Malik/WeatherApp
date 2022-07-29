import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import {TextInput, Button, Card} from 'react-native-paper';
import axios from 'axios';

export default function Search() {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/astronomy.json',
    params: {q: {city}},
    headers: {
      'X-RapidAPI-Key': '1b26807b95msh02ffa4b53f69b2bp14273cjsn111aea377fe2',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const result = Object.keys(response.data).map(key => {
        return response.data[key];
      });
      setCities(result);
      // console.log('result', result);
    })

    .catch(function (error) {
      console.error(error);
    });

  return (
    <View style={{flex: 1}}>
      <Header name="Search Screen" />
      <TextInput
        label=" City Name"
        theme={{colors: {primary: '#d580ff'}}}
        value={city}
        onChangeText={text => setCity(text)}
      />
      <Button
        icon="content-save"
        mode="contained"
        style={{margin: 20}}
        onPress={() => console.log('Pressed')}>
        <Text style={{color: 'white'}}>Save Changings</Text>
      </Button>
      <FlatList
        data={cities}
        keyExtractor={item => {
          item.key;
        }}
        renderItem={({item}) => {
          return (
            <Card style={{margin: 2, padding: 12}}>
              <Text> {item.name} </Text>
            </Card>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
