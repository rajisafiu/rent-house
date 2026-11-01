import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PropertyCard } from '@/components/property-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { properties, savedSearches } from '@/data/properties';

export default function SavedScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <ThemedText type="subtitle">Saved</ThemedText>

          <ThemedView type="backgroundElement" style={styles.card}>
            <ThemedText type="smallBold">Saved searches</ThemedText>
            <View style={styles.searchList}>
              {savedSearches.map((search) => (
                <ThemedView key={search} type="backgroundSelected" style={styles.searchItem}>
                  <ThemedText type="small">{search}</ThemedText>
                </ThemedView>
              ))}
            </View>
          </ThemedView>

          <ThemedText type="smallBold">Favorites</ThemedText>
          {properties.slice(0, 2).map((property) => (
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
  card: {
    borderRadius: Spacing.three,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  searchList: {
    gap: Spacing.two,
  },
  searchItem: {
    borderRadius: Spacing.two,
    padding: Spacing.two,
  },
});
