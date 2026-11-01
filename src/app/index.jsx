import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const heroImage =require('../../assets/images/lagos-house.jpg');
function HouseMark() {
  return (
    <View style={styles.houseMark} accessibilityElementsHidden>
      <View style={styles.roofLeft} />
      <View style={styles.roofRight} />
      <View style={styles.houseBody}>
        <View style={styles.windowGrid}>
          <View style={styles.windowPane} />
          <View style={styles.windowPane} />
          <View style={styles.windowPane} />
          <View style={styles.windowPane} />
        </View>
      </View>
    </View>
  );
}

export default function GetStartedScreen() {
  return (
    <View style={styles.page}>
      <Image source={heroImage} style={styles.backgroundImage} contentFit="cover" />
      <View style={styles.imageTint} />
      <View style={styles.bottomShade} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.brandBlock}>
            <HouseMark />
            <Text style={styles.brand}>
              Lagos<Text style={styles.brandAccent}> House</Text>
            </Text>
            <Text style={styles.headline}>Find your perfect home</Text>
            <Text style={styles.tagline}>Rent. Live. Belong.</Text>
          </View>

          <View style={styles.footer}>
            <Link href="/onboarding" asChild>
              <Pressable
                accessibilityRole="button"
                style={({ pressed }) => [styles.primaryButton, pressed && styles.buttonPressed]}>
                <Text style={styles.buttonText}>Get Started</Text>
              </Pressable>
            </Link>

            <Text style={styles.loginPrompt}>
              Already have an account?{' '}
              <Text accessibilityRole="link" style={styles.loginLink}>
                Login
              </Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#07101a',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  imageTint: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(5, 23, 40, 0.3)',
  },
  bottomShade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '35%',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    paddingTop: 44,
    paddingBottom: 20,
  },
  brandBlock: {
    alignItems: 'center',
  },
  houseMark: {
    width: 76,
    height: 66,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  roofLeft: {
    position: 'absolute',
    top: 13,
    left: 9,
    width: 39,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#fff',
    transform: [{ rotate: '-42deg' }],
  },
  roofRight: {
    position: 'absolute',
    top: 13,
    right: 9,
    width: 39,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#fff',
    transform: [{ rotate: '42deg' }],
  },
  houseBody: {
    width: 56,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00bd83',
    borderTopWidth: 0,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  windowGrid: {
    width: 24,
    height: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 3,
  },
  windowPane: {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 1,
  },
  brand: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: -1,
  },
  brandAccent: {
    color: '#00bd83',
  },
  headline: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    marginTop: 8,
  },
  tagline: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 14,
    marginTop: 6,
  },
  footer: {
    paddingBottom: 14,
  },
  primaryButton: {
    minHeight: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: '#00ad78',
    marginBottom: 20,
  },
  buttonPressed: {
    opacity: 0.82,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  loginPrompt: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  loginLink: {
    color: '#00d292',
    fontWeight: '700',
  },
});
