import { Text, View, StyleSheet } from 'react-native';


export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Our Application</Text>
      <Text style={styles.paragraph}>
      Our mobile application revolutionizes road safety by providing intelligent, real-time assistance for drivers. Leveraging advanced computer vision and artificial intelligence technologies, it detects road signs, pedestrian crossings, and high-risk areas such as school zones. By simply using the phone's camera, the app analyzes captured images during driving, identifies critical zones, and sends instant alerts and tailored recommendations. Whether it's adhering to speed limits or staying vigilant near pedestrian crossings, our solution ensures safer journeys and helps reduce risks on the road.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#b22222',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 24,
  },
});
