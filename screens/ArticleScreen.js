import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import WebView from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import ClipButton from '../components/ClipButton';
import Loading from '../components/Loading';
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

  const user = useSelector((state) => state.user);
  const { clips } = user;

  const isClipped = () => {
    return clips.some((clip) => clip.url === article.url);
  };

  const toggleClip = () => {
    if(isClipped()){
      dispatch(deleteClip({ clip: article }));
    }else{
      dispatch(addClip({ clip: article }));
    }
  }

  return (
    <View style={styles.container}>
      <ClipButton onPress={toggleClip} enabled={isClipped()} />
      <WebView 
      source={{ uri: article.url }} 
      startInLoadingState={true}
      renderLoading={() => <Loading />}
      />
    </View>
  );
}
