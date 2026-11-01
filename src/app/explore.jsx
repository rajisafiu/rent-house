import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PropertyCard } from '@/components/property-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { properties } from '@/data/properties';

const categories = ['All', 'Apartment', 'Commercial', 'Duplex', 'Studio'];

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <ThemedText type="subtitle">Explore</ThemedText>

          <ThemedView type="backgroundElement" style={styles.searchCard}>
            <ThemedText type="small" themeColor="textSecondary">
              Search by neighbourhood, price, or property type
            </ThemedText>
            <ThemedText type="smallBold" style={styles.searchText}>
              Ikorodu • ₦2M - ₦5M • 2-3 bedrooms
            </ThemedText>
          </ThemedView>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
            {categories.map((category) => (
              <ThemedView key={category} type={category === 'All' ? 'backgroundSelected' : 'backgroundElement'} style={styles.filterChip}>
                <ThemedText type="small">{category}</ThemedText>
              </ThemedView>
            ))}
          </ScrollView>

          <View style={styles.summaryRow}>
            <ThemedText type="smallBold">Matching homes</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {properties.length} results
            </ThemedText>
          </View>

          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
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
  searchCard: {
    borderRadius: Spacing.three,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  searchText: {
    fontSize: 18,
  },
  filterRow: {
    gap: Spacing.two,
    paddingRight: Spacing.three,
  },
  filterChip: {
    borderRadius: 999,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
