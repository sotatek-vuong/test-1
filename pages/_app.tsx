import type { AppProps } from 'next/app';
import { GeistProvider, CssBaseline, Themes } from '@geist-ui/core';
import '@fontsource/space-grotesk';

const theme = Themes.createFromDark({
  type: 'my-dark',
  font: { mono: 'Space Grotesk', prism: 'Space Grotesk', sans: 'Space Grotesk' },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider themes={[theme]} themeType="my-dark">
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}
export default MyApp;
