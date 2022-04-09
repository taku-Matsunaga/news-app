import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function ArticleScreen({ route }) {
  const { article } = route.params;

  return (
    <WebView style={styles.container} source={{ uri: article.url }} />
  );
}
