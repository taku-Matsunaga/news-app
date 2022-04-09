import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import ListItem from './components/ListItem';
import dummyArticles from './dummies/articles.json';
import Constants from 'expo-constants';
import axios from 'axios';

const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log(URL);
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
      try {
        const response = await axios.get(URL);
        setArticles(response.data.articles)
        // console.log(response);
      } catch (error) {
        // console.error(error);
      }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            keyExtractor={(index) => index}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
