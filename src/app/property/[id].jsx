import { Image } from 'expo-image';
import { Link, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { properties } from '@/data/properties';

export default function PropertyDetailScreen() {
  const { id } = useLocalSearchParams();
  const property = properties.find((item) => item.id === id) ?? properties[0];

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <Link href="/" style={styles.backLink}>
            <ThemedText type="smallBold">← Back</ThemedText>
          </Link>

          <Image source={{ uri: property.image }} style={styles.image} contentFit="cover" />

          <ThemedView type="backgroundElement" style={styles.card}>
            <View style={styles.headerRow}>
              <View style={{ flex: 1 }}>
                <ThemedText type="small" themeColor="textSecondary">
                  {property.type}
                </ThemedText>
                <ThemedText type="subtitle">{property.title}</ThemedText>
              </View>
              <ThemedView type="backgroundSelected" style={styles.badge}>
                <ThemedText type="smallBold">{property.status}</ThemedText>
              </ThemedView>
            </View>

            <ThemedText type="smallBold" style={styles.price}>
              {property.price}
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {property.location}
            </ThemedText>
          </ThemedView>

          <ThemedView type="backgroundElement" style={styles.card}>
            <ThemedText type="smallBold">Overview</ThemedText>
            <ThemedText type="small" style={styles.description}>
              {property.description}
            </ThemedText>
            <View style={styles.metaGrid}>
              <ThemedView type="backgroundSelected" style={styles.metaBox}>
                <ThemedText type="small" themeColor="textSecondary">
                  Bedrooms
                </ThemedText>
                <ThemedText type="smallBold">{property.bedrooms}</ThemedText>
              </ThemedView>
              <ThemedView type="backgroundSelected" style={styles.metaBox}>
                <ThemedText type="small" themeColor="textSecondary">
                  Bathrooms
                </ThemedText>
                <ThemedText type="smallBold">{property.bathrooms}</ThemedText>
              </ThemedView>
              <ThemedView type="backgroundSelected" style={styles.metaBox}>
                <ThemedText type="small" themeColor="textSecondary">
                  Area
                </ThemedText>
                <ThemedText type="smallBold">{property.area}</ThemedText>
              </ThemedView>
              <ThemedView type="backgroundSelected" style={styles.metaBox}>
                <ThemedText type="small" themeColor="textSecondary">
                  Rating
                </ThemedText>
                <ThemedText type="smallBold">{property.rating}</ThemedText>
              </ThemedView>
            </View>
          </ThemedView>

          <ThemedView type="backgroundElement" style={styles.card}>
            <ThemedText type="smallBold">Included features</ThemedText>
            <View style={styles.featureRow}>
              {property.features.map((feature) => (
                <ThemedView key={feature} type="backgroundSelected" style={styles.featureChip}>
                  <ThemedText type="small">{feature}</ThemedText>
                </ThemedView>
              ))}
            </View>
          </ThemedView>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
    width: '100%',
    alignSelf: 'center',
  },
  content: {
    padding: Spacing.three,
    gap: Spacing.three,
  },
  backLink: {
    alignSelf: 'flex-start',
  },
  image: {
    width: '100%',
    height: 260,
    borderRadius: Spacing.three,
  },
  card: {
    borderRadius: Spacing.three,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
  },
  price: {
    color: '#2563EB',
  },
  description: {
    lineHeight: 22,
  },
  metaGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  metaBox: {
    borderRadius: Spacing.two,
    padding: Spacing.two,
    minWidth: '45%',
    gap: Spacing.half,
  },
  featureRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  featureChip: {
    borderRadius: 999,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
});
