import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

export function PropertyCard({ property }) {
  return (
    <Link href={`/property/${property.id}`} asChild>
      <Pressable style={styles.card}>
        <Image source={{ uri: property.image }} style={styles.image} contentFit="cover" />

        <View style={styles.badgeRow}>
          <ThemedView type="backgroundSelected" style={styles.badge}>
            <ThemedText type="smallBold">{property.status}</ThemedText>
          </ThemedView>
          <ThemedText type="small" themeColor="textSecondary">
            ★ {property.rating}
          </ThemedText>
        </View>

        <View style={styles.content}>
          <ThemedText type="smallBold">{property.title}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {property.location}
          </ThemedText>
          <ThemedText type="smallBold" style={styles.price}>
            {property.price}
          </ThemedText>

          <View style={styles.metaRow}>
            <ThemedText type="small" themeColor="textSecondary">
              {property.bedrooms} bd
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {property.bathrooms} ba
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {property.area}
            </ThemedText>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Spacing.three,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  image: {
    width: '100%',
    height: 200,
  },
  badgeRow: {
    position: 'absolute',
    top: Spacing.two,
    left: Spacing.two,
    right: Spacing.two,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
  },
  content: {
    padding: Spacing.three,
    gap: Spacing.one,
  },
  price: {
    color: '#1D4ED8',
  },
  metaRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    flexWrap: 'wrap',
  },
});
