import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Search from './screens/Search';
import Home from './screens/Home';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#d580ff" />
      {/* <Search /> */}
      <Home />
    </>
  );
}

const styles = StyleSheet.create({});
