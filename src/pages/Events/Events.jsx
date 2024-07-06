import React from 'react';
import Laptop_eventsDay1 from './Laptop/Day1/Laptop_eventsDay1.jsx';
import Phone_eventDay1 from './Phone/Day1/Phone_eventDay1.jsx';

const Events = () => {
  const [isLargeScreen, setIsLargeScreen] = React.useState(window.innerWidth > 850);

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isLargeScreen ? <Laptop_eventsDay1 /> : <Phone_eventDay1 />;
};

export default Events;