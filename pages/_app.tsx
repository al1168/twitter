import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { ImgurClient } from 'imgur';
import { RecoilRoot } from 'recoil';
function MyApp({ Component, pageProps: { ...pageProps } }: AppProps<{ session: Session }>) {
  // console.log('hello');
  // console.log(pageProps);
  // console.log(pageProps.session);
  return (
    <RecoilRoot>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </RecoilRoot>
  );
}

export default MyApp;
