import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
// Load DM Sans typeface
import 'typeface-dm-sans';
import Cookies from 'universal-cookie';

// Load other package css file
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    const cookies = new Cookies()
    const cookie = cookies.get('userData',
      {path: '/',
      sameSite: 'None',
      secure: true})
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
    if (cookie) {
        window.location.href = 'https://app.e-mentor.ro';
        console.log(cookie);
      } 
  }, []);

  return <Component {...pageProps} />;
}
