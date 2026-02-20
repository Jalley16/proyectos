"use client"

export default function WeeklyCalendar({ events }) {
  return (
    <div>
      <h2>Vista simple</h2>
      {events.map(e => (
        <div key={e.id}>
          {e.date} - {e.title}
        </div>
      ))}
    </div>
  );
}