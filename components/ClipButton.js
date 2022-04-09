import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function ClipButton({ onPress, enabled }) {
  const name = enabled ? 'bookmark' : 'bookmark-o';

  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome name={name} size={40} color="gray" />
    </TouchableOpacity>
  );
}
