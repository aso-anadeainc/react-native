import { SafeAreaView, ScrollView, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
         <Link href='/boxBreathing'>Box Breathing</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
  }
});
