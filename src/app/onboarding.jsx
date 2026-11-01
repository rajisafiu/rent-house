import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const homeImage = require('../../assets/images/lagos-house.jpg');

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.content}>
        <View style={styles.hero}>
          <View style={styles.topAccent} />
          <View style={styles.bottomAccent} />
          <View style={styles.accentDot} />
          <View style={styles.imageFrame}>
            <Image source={homeImage} style={styles.homeImage} contentFit="cover" />
          </View>
        </View>

        <View style={styles.intro}>
          <Text style={styles.title}>
            Find the Right{'\n'}Home for Your Needs
          </Text>
          <Text style={styles.description}>
            Discover top-rated houses for rent in your preferred location. Fast, easy and secure.
          </Text>
        </View>

        <View style={styles.pagination} accessibilityLabel="Page 1 of 3">
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.actions}>
          <Pressable
            accessibilityRole="button"
            style={({ pressed }) => [styles.nextButton, pressed && styles.buttonPressed]}>
            <Text style={styles.nextLabel}>Next</Text>
          </Pressable>
          <Pressable accessibilityRole="button" style={styles.skipButton}>
            <Text style={styles.skipLabel}>Skip</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  hero: {
    width: '100%',
    flex: 1,
    minHeight: 220,
    maxHeight: 340,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  imageFrame: {
    position: 'absolute',
    left: 8,
    right: 8,
    top: 20,
    bottom: 20,
    overflow: 'hidden',
    borderRadius: 42,
    zIndex: 1,
  },
  homeImage: {
    width: '100%',
    height: '100%',
  },
  topAccent: {
    position: 'absolute',
    width: 150,
    height: 118,
    top: 25,
    left: 8,
    borderRadius: 70,
    backgroundColor: '#10a97a',
    transform: [{ rotate: '-28deg' }],
  },
  bottomAccent: {
    position: 'absolute',
    width: 160,
    height: 46,
    bottom: 5,
    left: 10,
    borderRadius: 32,
    backgroundColor: '#0da779',
    transform: [{ rotate: '10deg' }],
  },
  accentDot: {
    position: 'absolute',
    width: 11,
    height: 11,
    top: 21,
    right: 36,
    borderRadius: 6,
    backgroundColor: '#0da779',
  },
  intro: {
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 1,
    marginBottom: 20,
  },
  title: {
    color: '#15191b',
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  description: {
    color: '#667078',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    maxWidth: 380,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 22,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#c6cdd1',
  },
  activeDot: {
    backgroundColor: '#078b64',
  },
  actions: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 8,
  },
  nextButton: {
    width: '100%',
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#078b64',
  },
  buttonPressed: {
    opacity: 0.82,
  },
  nextLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  skipButton: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  skipLabel: {
    color: '#078b64',
    fontSize: 13,
    fontWeight: '700',
  },
});
