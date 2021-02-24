import styles from '../../styles/components/CompleteChallenges.module.css';

export function CompleteChallenge(){
    return (
        <div className={styles.completedChallengeContainer}>
            <span>
                Desafios Completos
            </span>
            <span>
                5
            </span>
        </div>
    );
}