import '@/styles/globals.css';
import localFont from 'next/font/local';

const circular = localFont({
  src: [
    {
      path: '../public/CircularStd-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    { path: '../public/CircularStd-Bold.otf', weight: '700', style: 'normal' },
    { path: '../public/CircularStd-Book.otf', weight: '400', style: 'normal' },
    { path: '../public/CircularStd-Light.otf', weight: '300', style: 'normal' },
    { path: '../public/CircularStd-Black.otf', weight: '900', style: 'normal' },
  ],
  variable: '--font-circular',
});

export default function App({ Component, pageProps }) {
  return (
    <html className={circular.variable}>
      <Component {...pageProps} />
    </html>
  );
}
