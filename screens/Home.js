import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import axios from 'axios';
import {Title} from 'react-native-paper';

export default function Home() {
  const [info, setInfo] = useState({
    name: 'loading !!',
    temp: 'loading',
    humidity: 'loading',
    desc: 'loading',
    icon: 'loading',
  });

  const getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=london&APPID=c222fbaf293e84d5e57e54c65ca3a662&units=metric`,
    )
      .then(data => data.json())
      .then(result => {
        setInfo({
          name: result.name,
          temp: result.main.temp,
          humidity: result.main.humidity,
          desc: result.weather[0].description,
          icon: result.weather[0].icon,
        });
      });
  };

  useEffect(() => {
    getWeather();
  }, []);
  return (
    <View style={{flex: 1}}>
      <Header name="Weather App" />
      <View>
        <Title style={{color: '#d580ff', marginTop: 30, fontSize: 30}}>
          {info.name}{' '}
        </Title>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
