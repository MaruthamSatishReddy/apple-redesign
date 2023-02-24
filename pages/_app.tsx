import '../styles/globals.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../redux/store';
import { Toaster } from 'react-hot-toast';
import Router from 'next/router';
import ProgressBar from '@badrap/bar-of-progress';
const progress = new ProgressBar({
  size: 4,
  color: '#F7AB0A',
  className: 'z-50',
  delay: 100,
});
Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster />
      <Component {...pageProps} />
    </Provider>
  );
}
