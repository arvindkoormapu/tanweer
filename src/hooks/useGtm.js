// Inside a component that is a child of <Router>
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageview',
      page: {
        url: window.location.href,
        path: location.pathname
      }
    });
  }, [location]); // Triggered on location change

  return null; // Render nothing, just track pages
};

export default PageTracker;

// And then use PageTracker in your App component or similar
