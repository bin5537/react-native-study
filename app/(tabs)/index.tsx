import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      contentContainerStyle={styles.contentContainer}
    >

      <ThemedView style={styles.customHeader}>
        <Image
          source={require('@/assets/images/custom-logo.png')}
          style={styles.customLogo}
        />
        <ThemedText type="title" style={styles.headerTitle}>리액트 네이티브</ThemedText>
        <ThemedText type="title" style={styles.headerSubTitle}>체험중...</ThemedText>
      </ThemedView>

      <ThemedView style={styles.headerLine}></ThemedView>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 50, // content 영역 하단 여백
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },

  customHeader: {
    paddingVertical: 20,
    alignItems: "center"
  },

  headerTitle: {
    color: "#fff",
    fontFamily: "SpoqaHanSansNeo-Regular",
    fontSize: 26
  },

  headerSubTitle: {
    color: "#a0a0a0",
    fontFamily: "SpoqaHanSansNeo-Regular",
    fontWeight: "normal",
    fontSize: 18
  },

  headerLine: {
    borderBottomColor: "rgba(255, 255, 255, 0.05)",
    borderBottomWidth: 2,
    marginVertical: 30
  },

  customLogo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 20,
  }
});
