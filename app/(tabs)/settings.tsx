import { Link } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Setting page</Text>
      <Link href="/" asChild>
      <Pressable>
        <Text>Home</Text>
      </Pressable>
    </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
