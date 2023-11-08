import React from 'react';
import { View, StyleSheet, WebView } from 'react-native';

const MapComponent = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387729.9488450536!2d-122.41941597288994!3d37.77492992442145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809b6b3f7db1%3A0x4e5b8f3756e31f60!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1576749230725!5m2!1sen!2sus' }}
        style={styles.map}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
