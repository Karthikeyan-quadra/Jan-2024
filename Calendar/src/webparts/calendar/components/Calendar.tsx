// import * as React from 'react';
// import styles from './Calendar.module.scss';
// import { ICalendarProps } from './ICalendarProps';
// import { escape } from '@microsoft/sp-lodash-subset';

// export default class Calendar extends React.Component<ICalendarProps, {}> {
//   public render(): React.ReactElement<ICalendarProps> {
//     const {
//       description,
//       isDarkTheme,
//       environmentMessage,
//       hasTeamsContext,
//       userDisplayName
//     } = this.props;

//     return (
//       <section className={`${styles.calendar} ${hasTeamsContext ? styles.teams : ''}`}>
//         <div className={styles.welcome}>
//           <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
//           <h2>Well done, {escape(userDisplayName)}!</h2>
//           <div>{environmentMessage}</div>
//           <div>Web part property value: <strong>{escape(description)}</strong></div>
//         </div>
//         <div>
//           <h3>Welcome to SharePoint Framework!</h3>
//           <p>
//             The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
//           </p>
//           <h4>Learn more about SPFx development:</h4>
//           <ul className={styles.links}>
//             <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
//             <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
//           </ul>
//         </div>
//       </section>
//     );
//   }
// }

import * as React from 'react';
import { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';

// import '@fullcalendar/common/main.css'; // Update the import path
// import '@fullcalendar/daygrid/main.css';

const Calendar = () => {
  const calendarComponentRef = useRef(null);
  const [events, setEvents] = useState([
    { id: "1", title: "event 1", date: "2019-12-01" },
    {
      title: "event 2",
      start: "2019-12-01",
      end: "2019-12-05",
      allDay: true,
      HostName: "William"
    },
    // ... other events ...
  ]);

  const handleDateClick = (arg:any) => {
    alert(arg.dateStr);
  };

  const handleSelectedDates = (info:any) => {
    alert("selected " + info.startStr + " to " + info.endStr);
    const title = prompt("What's the name of the title");
    console.log(info);
    if (title != null) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr
      };
      setEvents((prevEvents:any) => [...prevEvents, newEvent]);
      console.log("here", events);
    } else {
      console.log("nothing");
    }
  };

  const calendarOptions = {
    schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
    ref: calendarComponentRef,
    initialView: "dayGridMonth",
    dateClick: handleDateClick,
    displayEventTime: true,
    header: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
    },
    selectable: true,
    plugins: [
      dayGridPlugin,
      interactionPlugin,
      timeGridPlugin,
      resourceTimeGridPlugin
    ],
    eventClick: (event:any) => {
      console.log(event.event._def.publicId);
    },
    events: events,
    select: handleSelectedDates,
    eventLimit: 3
  };

  return (
    <div>
      <FullCalendar {...calendarOptions} />
    </div>
  );
};
export default Calendar;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
