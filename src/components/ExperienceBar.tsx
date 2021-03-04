import { useState, useEffect } from 'react';

import { useChallenges } from '../contexts/ChallengesContext';

import styles from '../styles/components/ExperienceBar.module.css';

const ExperienceBar: React.FC = () => {
    const { currentExperience, experienceToNextLevel, levelUp } = useChallenges();

    const [percentToNextLevel, setPercentToNextLevel] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setPercentToNextLevel(Math.round(currentExperience * 100) / experienceToNextLevel);            
        }, 100)
    }, [currentExperience, experienceToNextLevel]);

    return (
        <header className={styles.experienceBar}>
            <span>{currentExperience} xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%`, maxWidth: '100%' }} />

                <span className={styles.currentExperience} style={{ left: percentToNextLevel <= 100 ? `${percentToNextLevel}%` : '100%' }}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}

export default ExperienceBar;