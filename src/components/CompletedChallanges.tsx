import styles from '../styles/components/CompletedChallanges.module.css';

export function CompletedChallanges() {
    return (
        <div className={styles.completedChallangesContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}