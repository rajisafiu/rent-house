import { Image } from 'expo-image';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const heroImage =
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80';

export default function GetStartedScreen() {
  return (
    <ThemedView style={styles.page}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.frame}>
            <Image source={{ uri: heroImage }} style={styles.image} contentFit="cover" />

            <View style={styles.overlay} />

            <View style={styles.contentBox}>
              <ThemedText type="smallBold" style={styles.brand}>Lagos House</ThemedText>
              <ThemedText type="title" style={styles.title}>
                Find the right home for your needs
              </ThemedText>
              <ThemedText type="small" style={styles.subtitle}>
                Discover trusted homes, verified agents, and smart rental choices across Lagos.
              </ThemedText>

              <View style={styles.pillRow}>
                <ThemedView type="backgroundSelected" style={styles.pill}>
                  <ThemedText type="small">Verified</ThemedText>
                </ThemedView>
                <ThemedView type="backgroundSelected" style={styles.pill}>
                  <ThemedText type="small">Affordable</ThemedText>
                </ThemedView>
                <ThemedView type="backgroundSelected" style={styles.pill}>
                  <ThemedText type="small">Fast</ThemedText>
                </ThemedView>
              </View>

              <Pressable style={styles.primaryButton}>
                <ThemedText type="smallBold" style={styles.buttonText}>
                  Get Started
                </ThemedText>
              </Pressable>

              <Pressable style={styles.secondaryButton}>
                <ThemedText type="smallBold" style={styles.secondaryText}>
                  Skip
                </ThemedText>
              </Pressable>

              <ThemedText type="small" style={styles.footerText}>
                Already have an account?{' '}
                <ThemedText type="smallBold" style={styles.footerLink}>
                  Login
                </ThemedText>
              </ThemedText>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#0b1d2b',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  frame: {
    width: '100%',
    maxWidth: 430,
    minHeight: 730,
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: '#0d2431',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.25,
    shadowRadius: 30,
    elevation: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(10, 22, 32, 0.55)',
  },
  contentBox: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 28,
    padding: 20,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
  },
  brand: {
    color: '#d9f7f3',
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  title: {
    color: '#ffffff',
    fontSize: 34,
    lineHeight: 42,
    marginBottom: 10,
  },
  subtitle: {
    color: '#dfeaf1',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 18,
  },
  pillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  pill: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  primaryButton: {
    backgroundColor: '#1bb894',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.38)',
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  secondaryText: {
    color: '#ffffff',
  },
  footerText: {
    color: '#e8f3fb',
    textAlign: 'center',
  },
  footerLink: {
    color: '#4fe0c0',
  },
});
