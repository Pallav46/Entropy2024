import React from 'react';
import Laptop_Event from './Laptop/Laptop_events.jsx';
import Phone_Event from './Phone/Phone_events.jsx';

const Events = () => {
  const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth > 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLargeScreen ? <Laptop_Event /> : <Phone_Event />;
};

export default Events;