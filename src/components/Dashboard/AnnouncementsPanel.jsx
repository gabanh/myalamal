// src/components/Dashboard/AnnouncementsPanel.jsx

import React from 'react';
import styles from './DashboardPanel.module.css'; // استخدام تنسيق مشترك

const AnnouncementsPanel = () => {
    return (
        <div className={styles.panel}>
            <h4 className={styles.panelTitle}>لوحة إعلانات المدرسة</h4>
            <div className={styles.content}>
                <div className={styles.announcementColumn}>
                    <p className={styles.columnTitle}>عامود إعلانات 1</p>
                    <p className={styles.announcementText}>درجات امتحانات الحجوزات</p>
                    <img src="placeholder-announcement.jpg" alt="Announcement" className={styles.announcementImage} />
                </div>
                <div className={styles.announcementColumn}>
                    <p className={styles.columnTitle}>عامود إعلانات 2</p>
                    <p className={styles.announcementText}>الترحيب بالعام الدراسي الجديد</p>
                    <p className={styles.detailsText}>مرحباً بكم من جديد أيها الطلاب الأعزاء...</p>
                    <p className={styles.detailsText}>نبارك لجميع الطلاب نجاحهم...</p>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementsPanel;