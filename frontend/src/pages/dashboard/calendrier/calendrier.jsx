import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import fr from 'date-fns/locale/fr'; // Importation ES6 pour la locale française
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendrier.css'; // Votre propre style CSS pour le calendrier

const locales = {
  'fr-FR': fr,
};

const localizer = dateFnsLocalizer({
  format: (date, formatStr, options) => format(date, formatStr, { ...options, locale: fr }),
  parse: (dateString, formatString, backupDate, options) =>
    parse(dateString, formatString, backupDate, { ...options, locale: fr }),
  startOfWeek: (date, options) => startOfWeek(date, { ...options, locale: fr }),
  getDay: (date, options) => getDay(date, { ...options, locale: fr }),
  locales,
});

const events = [
  {
    title: 'Réunion',
    start: new Date(),
    end: new Date(),
  },
  // Ajoutez d'autres événements ici
];

const messages = {
  allDay: 'Toute la journée',
  previous: 'Précédent',
  next: 'Suivant',
  today: "Aujourd'hui",
  month: 'Mois',
  week: 'Semaine',
  day: 'Jour',
  agenda: 'Agenda',
  date: 'Date',
  time: 'Heure',
  event: 'Événement',
  noEventsInRange: "Il n'y a pas d'événements dans cette plage",
  showMore: total => `+ ${total} plus`,
};

export default function CalendarComponent() {
  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={messages}
        culture='fr'
      />
    </div>
  );
}
