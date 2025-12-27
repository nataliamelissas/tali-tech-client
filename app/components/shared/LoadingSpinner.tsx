import styles from '@/styles/LoadingSpinner.module.scss';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'lime' | 'blue' | 'pink';
  message?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  color = 'lime',
  message 
}: LoadingSpinnerProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.spinner} ${styles[size]} ${styles[color]}`}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div className={styles.bounce3}></div>
      </div>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}
