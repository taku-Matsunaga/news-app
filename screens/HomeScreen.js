import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import axios from 'axios';
import ListItem from '../components/ListItem';

const URL = `https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=${Constants.manifest.extra.newsApiKey}`;

export default function HomeScreen(props) {
  const { navigation } = props;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log(URL);
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
      // console.log(response);
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            keyExtractor={(index) => index}
            onPress={() =>
              navigation.navigate('Article', {
                article: item,
              })
            }
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
