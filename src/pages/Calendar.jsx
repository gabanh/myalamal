import React, { useRef } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import arLocale from '@fullcalendar/core/locales/ar';

// CSS ضروري لظهور التنسيقات
import '@fullcalendar/core/index.css';
import '@fullcalendar/daygrid/index.css';
import '@fullcalendar/timegrid/index.css';

const Calendar = () => {
  const calendarRef = useRef(null);

  const handleDateSelect = (info) => {
    const title = prompt('أدخل عنوان الحدث:');
    if (title) {
      const api = calendarRef.current.getApi();
      api.addEvent({ title, start: info.startStr, end: info.endStr, allDay: info.allDay });
    }
  };

  return (
    <div style={{ padding: '2rem', background: '#f8f9fa' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>📅 الرزنامة</h1>
      <div style={{
        maxWidth: 1100, margin: '0 auto', background: '#fff', padding: '1rem',
        borderRadius: 12, boxShadow: '0 4px 10px rgba(0,0,0,.1)'
      }}>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          selectable
          select={handleDateSelect}
          editable={false}
          locale={arLocale}
          direction="rtl"
          headerToolbar={{
            start: 'prev,next today',
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          buttonText={{ today: 'اليوم', month: 'شهر', week: 'أسبوع', day: 'يوم' }}
          events={[
            { title: 'اجتماع إداري', start: '2025-11-03T09:00:00' },
            { title: 'زيارة ميدانية', start: '2025-11-05' },
            { title: 'عرض مشروع', start: '2025-11-10T12:00:00' },
          ]}
        />
      </div>
    </div>
  );
};

export default Calendar;
