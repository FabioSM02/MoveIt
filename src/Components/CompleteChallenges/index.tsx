import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContexts';

import styles from '../../styles/components/CompleteChallenges.module.css';

export function CompleteChallenge(){

    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.completedChallengeContainer}>
            <span>
                Desafios Completos
            </span>
            <span>
                {challengesCompleted}
            </span>
        </div>
    );
}