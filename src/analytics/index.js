import ReactGA from 'react-ga4';

export const initGA = () => {
  console.log('GA init');
  ReactGA.initialize([{trackingId:'G-YMBFQFBLQM'}]);
};

export const logPageView = () => {
  const pagePath = window.location.pathname;
  console.log(`Logging pageview for ${pagePath}`);

  ReactGA.send({ hitType: "pageview", page: pagePath });
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
