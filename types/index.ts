/**
 * Mood is an enum that represents the mood of the user.
 * It can be one of the following values:
 * - ANGRY
 * - SAD
 * - NEUTRAL
 * - HAPPY
 * - EXCITED
 */
export enum Mood {
    ANGRY = 'angry',
    SAD = 'sad',
    NEUTRAL = 'neutral',
    HAPPY = 'happy',
    EXCITED = 'excited',
}

/**
 * MoodEmoji is an object that maps each mood to its corresponding emoji.
 */
export const MoodEmoji = {
    [Mood.ANGRY]: '🤬',
    [Mood.SAD]: '😔',
    [Mood.NEUTRAL]: '😐',
    [Mood.HAPPY]: '😊',
    [Mood.EXCITED]: '🤩',
}

/**
 * MoodToNumber is an object that maps each mood to its corresponding number.
 */
export const MoodToNumber = {
    [Mood.ANGRY]: 0,
    [Mood.SAD]: 1,
    [Mood.NEUTRAL]: 2,
    [Mood.HAPPY]: 3,
    [Mood.EXCITED]: 4,
}

/**
 * MoodEntry is a record that represents a mood entry.
 */
export type MoodEntry = {
    /**
     * The id of the mood entry.
     */
    id: string;
    /**
     * The mood of the user.
     */
    mood: Mood;
    /**
     * The note of the user.
     */
    note: string;
    /**
     * The created at date of the mood entry.
     */
    createdAt: string; // ISO 8601
}