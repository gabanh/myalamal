import styles from "./DashboardPanel.module.css";

export default function ActivitiesPanel() {
  return (
    <div className={styles.panel}>
      <h4 className={styles.panelTitle}>فعاليات</h4>
      <div className={styles.content}>
        <div className={styles.activityCard}>
          <span className={styles.activityDate}>تاريخ 20/10/25</span>
          <p className={styles.activityTitle}>
            بمناسبة أول خطوة للإمتحانات، أقمنا الفعالية للعام الدراسي الجديد...
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.viewButton}>تصفح الفعالية</button>
          </div>
        </div>
      </div>
    </div>
  );
}
