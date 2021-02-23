import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/kevinpagliuca.png" alt="avatar" />
            <div>
                <strong>Kevin Pagliuca</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 10
                </p>
            </div>
        </div>
    )
}