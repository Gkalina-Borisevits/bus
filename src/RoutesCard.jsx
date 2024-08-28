import React, { useState, useEffect } from 'react';
import routesData from './routes.json';
import styles from "./styles/RoutesCard.module.css";
import Calendar from 'react-calendar'; 

const RoutesCard = () => {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);
  const [date, setDate] = useState(new Date());
  const [selectedStationName, setSelectedStationName] = useState('');
  const [isCalendarVisible, setIsCalendarVisible] = useState(true);

  useEffect(() => {
    setRoutes(routesData);
  }, []);

  const handleBooking = (route, station) => {
    setSelectedRoute(route);
    setSelectedStation(station);
    alert(
      `Sie haben eine Fahrt auf der Strecke ${route.routeNumber} von ${station.name} um ${station.departureTime} gebucht.`
    );
  };


  const handleStationChange = (event) => {
    setSelectedStationName(event.target.value);
  };

  const handleBookButtonClick = (route) => {
    const station = route.stations.find(station => station.name === selectedStationName);
    if (station) {
      handleBooking(route, station);
    } else {
      alert('Bitte wählen Sie eine Station aus.');
    }
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setIsCalendarVisible(false); 
  };

  const handleOpenCalendar = () => {
    setIsCalendarVisible(true);
  };

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.calendarContainer}>
        {isCalendarVisible ? (<Calendar
            onChange={handleDateChange}
            value={date}
            className={styles.reactCalendar} 
          />) : ( <button onClick={handleOpenCalendar} className={styles.openCalendarButton}>
            Open Calendar
          </button>)}
          
          <p>{date.toDateString()}</p>
        </div>

        <h1>Busbuchungssystem</h1>
        {routes.map((route) => (
          <div key={route.routeNumber} className={styles.routeBlock}>
            <h2>Route {route.routeNumber}</h2>
            <p>Abfahrtszeit: {route.departureTime}</p>
            <select value={selectedStationName} onChange={handleStationChange} className={styles.stationSelect}>
              <option value="" disabled>Select a Station</option>
              
              {route.stations.map((station) => (
                <option key={station.name} className={styles.stationContainer} value={station.name}>
                  {station.name}
                </option>
              ))}
            </select>
            <button onClick={() => handleBookButtonClick(route)} disabled={!selectedStationName}>
              Buchen
            </button>
          </div>
        ))}
        {selectedRoute && selectedStation && (
          <div className={styles.bookingDetails}>
            <h3>Buchungsdetails:</h3>
            <p>
              Route: {selectedRoute.routeNumber}, Station: {selectedStation.name}, Abfahrtszeit: {selectedStation.departureTime}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoutesCard;
