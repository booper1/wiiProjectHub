import React, { useEffect, useState } from "react";
import "./Clock.scss";

const Clock: React.FC = () => {
  // `undefined` except when testing: "en-GB", "de-DE", "fr-FR", "es-ES", "it-IT", "nl-NL"
  const locale = undefined;
  // `undefined` except when testing: new Date("2021-07-25T15:30:00")
  const testDate = undefined;

  const effectiveLocale = locale ?? navigator.language;

  const [time, setTime] = useState(testDate ?? new Date());
  const [showColon, setShowColon] = useState(true);
  const [is12HourFormat, setIs12HourFormat] = useState(false);

  useEffect(() => {
    const now = testDate ?? new Date();
    const intervalId = setInterval(() => {
      setTime(now);
      setShowColon((prev) => !prev);
    }, 1000);

    // Detect 12-hour time format
    const timeParts = new Intl.DateTimeFormat(effectiveLocale, {
      hour: "numeric"
    }).formatToParts(now);
    setIs12HourFormat(timeParts.some((part) => part.type === "dayPeriod"));

    return () => clearInterval(intervalId);
  }, []);

  const rawHours = time.getHours();
  const displayHours = is12HourFormat
    ? (rawHours % 12 || 12).toString().padStart(2, "0")
    : rawHours.toString().padStart(2, "0");

  const minutes = time.getMinutes().toString().padStart(2, "0");

  const dateDisplay = new Intl.DateTimeFormat(effectiveLocale, {
    weekday: "short",
    day: "2-digit",
    month: "2-digit"
  })
    .format(time)
    .replace(/([A-Za-zÀ-ÿ])/, (c) => c.toUpperCase());

  const amPm = rawHours >= 12 ? "PM" : "AM";

  return (
    <div className='clockWrapper'>
      <div className='timeContainer'>
        <div className='timeCore'>
          {displayHours}
          <span className={`colon ${showColon ? "visible" : "hidden"}`}>:</span>
          {minutes}
        </div>
        {is12HourFormat && <div className='ampm'>{amPm}</div>}
      </div>
      <div className='date'>{dateDisplay}</div>
    </div>
  );
};

export default Clock;
