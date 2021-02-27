import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContexts';

import styles from '../../styles/components/Profile.module.css';

export function Profile(){

    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/fabiosm02.png" alt="Profile"/>
            <div>
                <strong>
                    Fabio Casa Martins
                </strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}