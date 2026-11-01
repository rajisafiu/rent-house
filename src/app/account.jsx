import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { accountStats } from '@/data/properties';

export default function AccountScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <ThemedText type="subtitle">My account</ThemedText>

          <ThemedView type="backgroundElement" style={styles.profileCard}>
            <ThemedView type="backgroundSelected" style={styles.avatar}>
              <ThemedText type="smallBold">SP</ThemedText>
            </ThemedView>
            <View style={styles.profileText}>
              <ThemedText type="smallBold">Grace Adebayo</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Tenant • Ikorodu, Lagos
              </ThemedText>
            </View>
          </ThemedView>

          <View style={styles.statsGrid}>
            {accountStats.map((item) => (
              <ThemedView key={item.label} type="backgroundElement" style={styles.statBox}>
                <ThemedText type="small" themeColor="textSecondary">
                  {item.label}
                </ThemedText>
                <ThemedText type="smallBold">{item.value}</ThemedText>
              </ThemedView>
            ))}
          </View>

          <ThemedView type="backgroundElement" style={styles.card}>
            <ThemedText type="smallBold">Quick actions</ThemedText>
            <ThemedText type="small">View inspection history</ThemedText>
            <ThemedText type="small">Manage rent receipts</ThemedText>
            <ThemedText type="small">Report a listing</ThemedText>
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
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    padding: Spacing.three,
    borderRadius: Spacing.three,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    gap: Spacing.half,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  statBox: {
    borderRadius: Spacing.three,
    padding: Spacing.three,
    width: '31%',
    minWidth: 100,
    gap: Spacing.one,
  },
  card: {
    borderRadius: Spacing.three,
    padding: Spacing.three,
    gap: Spacing.one,
  },
});
