import React, { useState, useEffect, useCallback } from "react";
import { Typography } from "antd";
import SennyCamara from "../../images/ProgramList/assets/SennyCamara.png";
import maryMalifarges from "../../images/ProgramList/assets/Mary Malifarges.png";
import HandPanwithAnas from "../../images/ProgramList/assets/handPan.png";
import AnasHandPan from "../../images/ProgramList/assets/ANSHandpan.png";
import CalligaraphyImage from "../../images/ProgramList/assets/CalliGraphy.png";
import PoetryByNujoom from "../../images/ProgramList/assets/PoetryByBujoom.png";
import HasanHakmoun from "../../images/ProgramList/assets/Hassanhakmoun.png";
import Illumination from "../../images/ProgramList/assets/Illumination.png";
import SanduImage from "../../images/ProgramList/assets/Sandu.png";
import Seemawirling from "../../images/ProgramList/assets/Sema Whirling.png";
import BarakaBand from "../../images/ProgramList/assets/BarakaBlue&ShadiBand.png";
import HeritagebandNadba from "../../images/ProgramList/assets/Heritage band - Al Nadba-Fri Nov 22 at 615 Main Stage.png";
import HeritageBandAahaal from "../../images/ProgramList/assets/Heritage band - Al Aahaal-Sat Nov 23 at 330 pm Tree of Life.png";
import HeritageBandNoban from "../../images/ProgramList/assets/Heritage band - Noban-Sat Nov 23 at 515 pm Marketplace.png";
import HeritageBandWeliyah from "../../images/ProgramList/assets/Heritage band - Al Wailyyah-Sun Nov 24 at 400 pm Tree of Life.png";
import HeritageBandLiwah from "../../images/ProgramList/assets/Heritage band - Al Liwah-Sun Nov 24 at 530 pm Marketplace.png";
import HeritageBandMalad from "../../images/ProgramList/assets/Heritage band - Al Malad-Sun Nov 24 at 700 pm Main Stage.png";
import JorneyImage from "../../images/ProgramList/assets/Journey of Light.png";
import Bodour from "../../images/ProgramList/assets/Bodour Al Qasimi_.png";
import Ziyad from "../../images/ProgramList/assets/Rumi’s Ziyad Sahab.png";
import JulienBreton from "../../images/ProgramList/assets/Calligraphy lighting Workshop with Julien Breton.png";
import SamiYusuf from "../../images/ProgramList/assets/Sami Yusuf (1).png";
import Constantinople from "../../images/ProgramList/assets/Constantinople & Ghalia Benali.png";
import Farima from "../../images/ProgramList/assets/Farima Berenji (1).png";
import RushilQawali from "../../images/ProgramList/assets/AbiSampaRushilOrchestralQawwali.png";
import Soundimmersion from "../../images/ProgramList/assets/Layer 2.png";
import FadiRifaai from "../../images/ProgramList/assets/Fadi Rifaai.png";
import Ensemble from "../../images/ProgramList/assets/Ensemble Khourchid_.png";
import DhaferYousef from "../../images/ProgramList/assets/Dhafer Youssef.png";
import WalidAboulnaga from "../../images/ProgramList/assets/Walid Aboulnaga.png";

import "./viewProgram.css";

const { Text } = Typography;

const eventsData = [
  // Day 1 (2024-11-22)
  {
    date: "2024-11-22",
    startTime: "06:15 PM",
    endTime: "06:30 PM",
    title: "Emirati Heritage band – Al Nadba",
    location: "Main Stage",
    images: [HeritagebandNadba],
    position: "left", // Default position
  },
  {
    date: "2024-11-22",
    startTime: "06:30 PM",
    endTime: "07:00 PM",
    title: "Bodour Al Qasimi opening speech and poetry with Senny Camara",
    location: "Main Stage",
    images: [SennyCamara, Bodour],
    position: "right", // Alternating position to avoid overlap
  },
  {
    date: "2024-11-22",
    startTime: "07:30 PM",
    endTime: "08:30 PM",
    title: "Rumi’s Ziyad Sahab & Alifmotion Light Calligraphy by Julien Bruton",
    location: "Main Stage",
    images: [Ziyad, JulienBreton],
    position: "left",
  },
  {
    date: "2024-11-22",
    startTime: "08:45 PM",
    endTime: "09:30 PM",
    title: "Art tour",
    location: "(A.3)",
    position: "right",
  },
  {
    date: "2024-11-22",
    startTime: "10:00 PM",
    endTime: "11:00 PM",
    title: "Sami Yusuf",
    location: "Main Stage",
    images: [SamiYusuf],
    position: "left",
  },
  {
    date: "2024-11-22",
    startTime: "11:30 PM",
    endTime: "12:30 AM",
    title: "Anas Handpan Orchestra",
    location: "Tree of Life",
    images: [AnasHandPan],
    position: "right",
  },

  // Day 2 (2024-11-23)
  {
    date: "2024-11-23",
    startTime: "09:00 AM",
    endTime: "11:00 AM",
    title: "Breathwork with Walid Aboulnaga",
    location: "Dome",
    images: [WalidAboulnaga],
    position: "right",
  },
  {
    date: "2024-11-23",
    startTime: "11:00 AM",
    endTime: "11:30 AM",
    title: "Handpan with Anas",
    location: "Market Place",
    images: [HandPanwithAnas],
    position: "left",
  },
  {
    date: "2024-11-23",
    startTime: "11:30 AM",
    endTime: "12:30 PM",
    title: "Anas Handpan Orchestra workshop",
    location: "Dome",
    images: [AnasHandPan],
    position: "right",
  },
  {
    date: "2024-11-23",
    startTime: "12:30 PM",
    endTime: "01:00 PM",
    title: "Art tour",
    location: "(A.3)",
    position: "left",
  },
  {
    date: "2024-11-23",
    startTime: "01:00 PM",
    endTime: "02:30 PM",
    title: "Illumination & Geometry workshop",
    location: "Dome",
    images: [Illumination],
    position: "left",
  },
  {
    date: "2024-11-23",
    startTime: "01:00 PM",
    endTime: "02:00 PM",
    title: "Poetry by Farima Berenji",
    location: "Market Place",
    images: [Farima],
    position: "right",
  },
  {
    date: "2024-11-23",
    startTime: "02:00 PM",
    endTime: "03:00 PM",
    title: "Hassan Hakmoun (Gnawa)",
    location: "Tree of Life",
    images: [HasanHakmoun],
    position: "right",
  },
  {
    date: "2024-11-23",
    startTime: "03:00 PM",
    endTime: "04:00 PM",
    title: "Sufi Whirling workshop with Farima Berenji",
    location: "Dome",
    images: [Farima],
    position: "right",
  },
  {
    date: "2024-11-23",
    startTime: "03:00 PM",
    endTime: "03:30 PM",
    title: "Sandu",
    location: "Market Place",
    images: [SanduImage],
    position: "left",
  },
  {
    date: "2024-11-23",
    startTime: "03:30 PM",
    endTime: "04:00 PM",
    title: "Emirati Heritage band – Al Aahaal",
    location: "Tree of Life",
    images: [HeritageBandAahaal],
    position: "left",
  },
  {
    date: "2024-11-23",
    startTime: "04:00 PM",
    endTime: "05:00 PM",
    title: "Senny Camara & Art performer Mary Malifarges",
    location: "Tree of Life",
    images: [SennyCamara, maryMalifarges],
    position: "left",
  },
  {
    date: "2024-11-23",
    startTime: "05:15 PM",
    endTime: "05:30 PM",
    title: "Emirati Heritage Band – Noban",
    location: "Market Place",
    images: [HeritageBandNoban],
    position: "left",
  },
  {
    date: "2024-11-23",
    startTime: "05:30 PM",
    endTime: "06:30 PM",
    title: "Baraka Blue and Shadi’s band",
    location: "Tree of Life",
    images: [BarakaBand],
    position: "right",
  },
  {
    date: "2024-11-23",
    startTime: "05:30 PM",
    endTime: "06:30 PM",
    title: "Light Calligraphy workshop with Julien Breton",
    location: "Dome",
    images: [JulienBreton],
    position: "right",
  },
  {
    date: "2024-11-23",
    startTime: "07:00 PM",
    endTime: "08:00 PM",
    title: "Constantinople & Ghalia Benali",
    location: "Main Stage",
    images: [Constantinople],
    position: "left",
  },
  {
    date: "2024-11-23",
    startTime: "08:15 PM",
    endTime: "08:45 PM",
    title: "Art tour",
    location: "(A.3)",
    position: "right",
  },
  {
    date: "2024-11-23",
    startTime: "09:00 PM",
    endTime: "10:00 PM",
    title: " Kamal Musallam and Journeys of Light",
    location: "Main Stage",
    images: [JorneyImage],
    position: "left",
  },
  {
    date: "2024-11-23",
    startTime: "11:00 PM",
    endTime: "12:00 AM",
    title: "Abi Sampa & Rushil Ranjan Orchestral Qawwali",
    location: "Main Stage",
    images: [RushilQawali],
    position: "right",
  },

  // Day 3 (2024-11-24)
  {
    date: "2024-11-24",
    startTime: "09:00 AM",
    endTime: "10:30 AM",
    title: "Sound immersion with Zarine",
    location: "Dome",
    images: [Soundimmersion],
    position: "right",
  },
  {
    date: "2024-11-24",
    startTime: "11:00 AM",
    endTime: "12:00 PM",
    title: "Dervish Whirling workshop",
    location: "Dome",
    images: [Seemawirling],
    position: "left",
  },
  {
    date: "2024-11-24",
    startTime: "12:00 PM",
    endTime: "12:45 PM",
    title: "Art tour",
    location: "(A.3)",
    position: "right",
  },
  {
    date: "2024-11-24",
    startTime: "01:00 PM",
    endTime: "03:00 PM",
    title: "Illumination & Geometry workshop",
    location: "Dome",
    images: [Illumination],
    position: "right",
  },
  {
    date: "2024-11-24",
    startTime: "01:30 PM",
    endTime: "02:30 PM",
    title: "Baraka Blue and Shadi’s band",
    location: "Tree of Life",
    images: [BarakaBand],
    position: "left",
  },
  {
    date: "2024-11-24",
    startTime: "02:30 PM",
    endTime: "03:00 PM",
    title: "Sandu",
    location: "Market Place",
    images: [SanduImage],
    position: "left",
  },
  {
    date: "2024-11-24",
    startTime: "03:00 PM",
    endTime: "04:00 PM",
    title: "Poetry by Nujoom Al-Ghanem",
    location: "Tree of Life",
    images: [PoetryByNujoom],
    position: "left",
  },
  {
    date: "2024-11-24",
    startTime: "04:00 PM",
    endTime: "05:00 PM",
    title: "Calligraphy workshop",
    location: "Dome",
    images: [CalligaraphyImage],
    position: "left",
  },
  {
    date: "2024-11-24",
    startTime: "04:00 PM",
    endTime: "04:30 PM",
    title: "Emirati Heritage band – Al Weliyah",
    location: "Tree of Life",
    images: [HeritageBandWeliyah],
    position: "right",
  },

  {
    date: "2024-11-24",
    startTime: "04:30 PM",
    endTime: "05:30 PM",
    title: "Hassan Hakmoun (Gnawa)",
    location: "Tree of Life",
    images: [HasanHakmoun],
    position: "right",
  },
  {
    date: "2024-11-24",
    startTime: "05:30 PM",
    endTime: "06:00 PM",
    title: "Emirati Heritage band – Al Liwah",
    location: "Market Place",
    images: [HeritageBandLiwah],
    position: "left",
  },
  {
    date: "2024-11-24",
    startTime: "05:30 PM",
    endTime: "06:30 PM",
    title: "Light Calligraphy workshop with Julien Breton",
    location: "Dome",
    images: [JulienBreton],
    position: "right",
  },
  {
    date: "2024-11-24",
    startTime: "06:00 PM",
    endTime: "07:00 PM",
    title: "Fadi Rifaai, Zahi and Sandu",
    location: "Tree of Life",
    images: [FadiRifaai],
    position: "left",
  },
  {
    date: "2024-11-24",
    startTime: "07:00 PM",
    endTime: "07:30 PM",
    title: "Emirati Heritage band – Al Malad",
    location: "Main Stage",
    images: [HeritageBandMalad],
    position: "right",
  },
  {
    date: "2024-11-24",
    startTime: "07:30 PM",
    endTime: "08:30 PM",
    title: "Ensemble Khourchid & The Whirling Dervishes of Damascus",
    location: "Main Stage",
    images: [Ensemble],
    position: "left",
  },
  {
    date: "2024-11-24",
    startTime: "09:30 PM",
    endTime: "09:45 PM",
    title: "Closing Speech | Bodour Al Qasimi",
    location: "Main Stage",
    images: [Bodour],
    position: "right",
  },
  {
    date: "2024-11-24",
    startTime: "10:00 PM",
    endTime: "11:30 PM",
    title: "Dhafer Youssef",
    location: "Main Stage",
    images: [DhaferYousef],
    position: "left",
  },
];

function ViewProgram() {
  const [heightPerMinute, setHeightPerMinute] = useState(
    window.innerWidth <= 768 ? 150 / 30 : 150 / 30
  );
  let marginOffset = 0;
  useEffect(() => {
    const handleResize = () => {
      setHeightPerMinute(window.innerWidth <= 768 ? 150 / 30 : 150 / 30);
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize once to set initial value on load or when screen is resized
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const timeToMinutes = (time) => {
    const [hour, minutePart] = time.split(":");
    const minutes = parseInt(minutePart.substr(0, 2), 10);
    const isPM = minutePart.includes("PM");
    let hours = parseInt(hour, 10);
    if (isPM && hours !== 12) hours += 12;
    if (!isPM && hours === 12) hours = 0; // Midnight correction for 12:00 AM
    return hours * 60 + minutes;
  };

  const groupEventsByTime = (events) => {
    const groupedEvents = [];
    events.forEach((event) => {
      const eventStart = timeToMinutes(event.startTime);
      const eventEnd = timeToMinutes(event.endTime);

      // Check if this event overlaps with any existing group
      let foundGroup = false;
      for (const group of groupedEvents) {
        const groupStart = timeToMinutes(group[0].startTime);
        const groupEnd = timeToMinutes(group[group.length - 1].endTime);

        if (
          (eventStart >= groupStart && eventStart < groupEnd) ||
          (eventEnd > groupStart && eventEnd <= groupEnd)
        ) {
          group.push(event); // Add to the existing group
          foundGroup = true;
          break;
        }
      }

      if (!foundGroup) {
        groupedEvents.push([event]); // Start a new group if no overlap found
      }
    });

    return groupedEvents;
  };
  // Helper function to check if two events overlap
  const doEventsOverlap = (event1, event2) => {
    const convertTo24Hour = (time) => {
      const [hour, minute, period] = time.split(/[:\s]/);
      let hours = parseInt(hour);
      if (period === "PM" && hours !== 12) {
        hours += 12;
      } else if (period === "AM" && hours === 12) {
        hours = 0;
      }
      return { hours, minutes: parseInt(minute) };
    };

    const start1 = convertTo24Hour(event1.startTime);
    const end1 = convertTo24Hour(event1.endTime);
    const start2 = convertTo24Hour(event2.startTime);
    const end2 = convertTo24Hour(event2.endTime);

    const event1Start = start1.hours * 60 + start1.minutes;
    const event1End = end1.hours * 60 + end1.minutes;
    const event2Start = start2.hours * 60 + start2.minutes;
    const event2End = end2.hours * 60 + end2.minutes;

    // Check for overlap
    return event1End > event2Start && event2End > event1Start;
  };

  const calculateDuration = (start, end) => {
    const convertTo24Hour = (time) => {
      const [hour, minute, period] = time.split(/[:\s]/);
      let hours = parseInt(hour);
      if (period === "PM" && hours !== 12) {
        hours += 12;
      } else if (period === "AM" && hours === 12) {
        hours = 0;
      }
      return { hours, minutes: parseInt(minute) };
    };

    const startTime = convertTo24Hour(start);
    const endTime = convertTo24Hour(end);

    const startInMinutes = startTime.hours * 60 + startTime.minutes;
    const endInMinutes = endTime.hours * 60 + endTime.minutes;

    return endInMinutes - startInMinutes;
  };

  const getEventHeight = (startTime, endTime) => {
    const duration = calculateDuration(startTime, endTime);
    return duration * heightPerMinute;
  };

  const calculateImageSize = useCallback((startTime, endTime) => {
    const duration = calculateDuration(startTime, endTime); // Calculate duration in minutes

    if (window.innerWidth <= 768) {
      return 40;
    } else if (
      window.innerWidth <= 1440 &&
      window.innerWidth >= 1280 &&
      duration >= 60
    ) {
      return 130;
    } else if (window.innerWidth <= 1280 && duration >= 60) {
      return 100;
    }

    // Use dynamic size for larger screens
    const imageSize = duration >= 60 ? 160 : (duration / 60) * 160; // Proportional size for events < 1 hour
    return imageSize;
  }, []);

  const renderEventData = (day) => {
    let currentOlap = 0;
    let prevOlap = 0;

    // Filter events for the given day
    const filteredEvents = eventsData.filter((event) => event.date === day);

    // Sort events by start time
    const sortedEvents = filteredEvents.sort((a, b) => {
      const timeToMinutes = (time) => {
        const [hour, minute, period] = time.split(/[:\s]/);
        let hours = parseInt(hour);
        if (period === "PM" && hours !== 12) {
          hours += 12;
        } else if (period === "AM" && hours === 12) {
          hours = 0;
        }
        return hours * 60 + parseInt(minute);
      };

      return timeToMinutes(a.startTime) - timeToMinutes(b.startTime);
    });

    console.log(groupEventsByTime(sortedEvents));
    // Render the sorted events with calculated gaps between them
    marginOffset = 0;
    const renderEventDataElements = [];
    for (let index = 0; index < sortedEvents.length; index++) {
      const event = sortedEvents[index];
      const eventHeight =
        getEventHeight(event.startTime, event.endTime) >= 400
          ? 400
          : getEventHeight(event.startTime, event.endTime);
      const imageSize = calculateImageSize(event.startTime, event.endTime);

      let topOffset = 0;
      const previousEvent = index > 0 ? sortedEvents[index - 1] : null;
      const previousEventHeight =
        index > 0
          ? getEventHeight(previousEvent.startTime, previousEvent.endTime)
          : 0;

      let gap = 0;

      if (previousEvent) {
        // Calculate the gap between the previous event's end time and the current event's start time
        const gapDuration = calculateDuration(
          previousEvent.endTime,
          event.startTime
        );
        const gapHeight = gapDuration * heightPerMinute; // Gap height based on time difference and heightPerMinute

        gap = gapHeight > 0 ? gapHeight : 0;

        if (gap > 0) {
          // If there's a gap, add a gap element
          renderEventDataElements.push(
            <div
              key={`gap-${index}`}
              className="timeline-gap"
              style={{
                height: `${gap}px`, // Adjust height of the gap based on minutes
              }}
            ></div>
          );
        }
      }

      if (previousEvent && doEventsOverlap(previousEvent, event)) {
        if (currentOlap > prevOlap) {
          topOffset = marginOffset - previousEventHeight - 26;
        } else {
          topOffset = marginOffset - previousEventHeight + 26;
        }

        prevOlap = currentOlap;
        currentOlap++;

        marginOffset = topOffset;
      } else {
        topOffset = marginOffset;
      }

      // Determine whether to display the start time based on overlap with the previous event
      const shouldDisplayStartTime =
        !previousEvent || previousEvent.startTime !== event.startTime;

      const renderElement = (
        <div
          key={index}
          // ${index % 2 === 0 ? "right" : "left"}
          className={`timeline-entry ${event?.position} event-${index}`}
          style={{
            height: `${eventHeight}px`,
            position: "relative",
            top: `${topOffset}px`,
          }}
        >
          {/* Only show the start time if the previous event does not have the same start time */}
          {shouldDisplayStartTime && (
            <div className="time-label">{event.startTime}</div>
          )}
          <div className="event-info">
            {renderEventContent(event, imageSize)}
            {event.images &&
              event.startTime === filteredEvents[index + 1]?.startTime &&
              event.endTime === filteredEvents[index + 1]?.endTime &&
              renderEventContent(filteredEvents[index + 1], imageSize)}
          </div>

          {shouldDisplayStartTime && (
            <div className="time-label2">{event.endTime}</div>
          )}
        </div>
      );
      if (
        event.startTime === filteredEvents[index + 1]?.startTime &&
        event.endTime === filteredEvents[index + 1]?.endTime &&
        window.innerWidth >= 768
      ) {
        index++;
      }
      renderEventDataElements.push(renderElement);
    }
    return renderEventDataElements;
  };

  const renderEventContent = (event, imageSize) => {
    return (
      <>
        {event.images &&
          event.images.length &&
          event.images.map((image) => {
            return (
              <div
                className="event-img-wrap"
                style={{
                  width: `${imageSize}px`,
                  height: `${imageSize}px`,
                }}
              >
                <img
                  src={image}
                  alt={event.title}
                  style={{
                    width: `${imageSize}px`,
                    height: `${imageSize}px`,
                  }}
                />
              </div>
            );
          })}
        <div className="event-content">
          <h4 className="event-title">{event.title}</h4>
          <span className="event-location">{event.location}</span>
        </div>
      </>
    );
  };
  const days = [...new Set(eventsData.map((event) => event.date))];
  const [activeTab, setActiveTab] = useState(0);

  // Ensure that days are in the correct format before converting them
  // const dates = days.map((day) => new Date(Date.parse(day)).toDateString());
  const dates = days.map((day) => new Date(day + "T00:00:00").toDateString());

  console.log({ dates, activeTab, days });

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="view-programs">
      <div className="container">
        <div className="content">
          <Text className="title">Programs</Text>
        </div>
        <ul className="day-list">
          {days.map((day, index) => (
            <li
              key={index}
              className={`day-list-item ${activeTab === index ? "active" : ""}`}
            >
              <a
                href={`#day${index + 1}`}
                className="day-link"
                onClick={() => handleTabClick(index)}
              >
                {`Day ${index + 1}`}
              </a>
            </li>
          ))}
        </ul>
        <h2 className="full-date">{dates[activeTab]}</h2>
        <div className="tab-content">
          <div id={`day${activeTab}`}>
            <div className="timeline">
              {renderEventData(days[activeTab])}
              <div
                className="timeline-line"
                style={{ height: `calc(100% + ${marginOffset}px)` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ViewProgram;
