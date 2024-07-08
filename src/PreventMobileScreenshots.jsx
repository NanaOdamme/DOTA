import { useEffect } from 'react';

const PreventMobileScreenshots = () => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.body.style.visibility = 'hidden';
      } else {
        document.body.style.visibility = 'visible';
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
};

export default PreventMobileScreenshots;
