import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import WebView from 'react-native-webview';
import { useDispatch } from 'react-redux';
import { addClip } from '../store/actions/user';
import { deleteClip } from '../store/actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function ArticleScreen({ route }) {
  const { article } = route.params;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(addClip({ clip: article }));
        }}
      >
        <Text>ADD_CLIP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(deleteClip({ clip: article }));
        }}
      >
        <Text>DELETE_CLIP</Text>
      </TouchableOpacity>
      <WebView source={{ uri: article.url }} />
    </View>
  );
}
