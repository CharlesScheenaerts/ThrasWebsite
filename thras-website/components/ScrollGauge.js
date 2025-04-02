import styles from '../styles/ScrollGauge.module.css';

export default function ScrollGauge({ percentage }) {
  return (
    <div className={styles.gaugeContainer}>
      <div 
        className={styles.gauge} 
        style={{ width: `${percentage * 100}%` }}
      ></div>
    </div>
  );
}