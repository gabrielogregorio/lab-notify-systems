/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;
export default MyApp;
