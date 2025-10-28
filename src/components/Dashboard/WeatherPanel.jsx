// src/components/Dashboard/WeatherPanel.jsx

import React from 'react';
import styles from './WeatherPanel.module.css';

const days = ['الخميس', 'الجمعة', 'السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء'];
const weatherData = [
    { day: 'الخميس', date: '29', temp: '25°', condition: 'غائم جزئي' },
    { day: 'الجمعة', date: '30', temp: '26°', condition: 'مشمس' },
    { day: 'السبت', date: '31', temp: '27°', condition: 'مشمس' },
    { day: 'الأحد', date: '1', temp: '28°', condition: 'مشمس' },
    { day: 'الاثنين', date: '2', temp: '29°', condition: 'صافي' },
    { day: 'الثلاثاء', date: '3', temp: '29°', condition: 'غائم جزئي' },
    { day: 'الأربعاء', date: '4', temp: '28°', condition: 'صافي' },
];

const WeatherPanel = () => {
    return (
        <div className={styles.weatherPanel}>
            {weatherData.map((data, index) => (
                <div key={index} className={styles.dayColumn}>
                    <div className={styles.dayLabel}>{data.day}</div>
                    <div className={styles.dateLabel}>{data.date}</div>
                    <div className={styles.weatherIcon}>
                        {/* استخدام رموز بسيطة بدلاً من الأيقونات */}
                        {data.condition.includes('مشمس') ? '☀️' : data.condition.includes('غائم') ? '☁️' : '🌤️'}
                    </div>
                    <div className={styles.tempLabel}>{data.temp}</div>
                </div>
            ))}
        </div>
    );
};

export default WeatherPanel;