'use client';

import { MoodEntry } from '@/types';
import { createContext, useContext, useState } from 'react';

export type MoodJournalContextType = {
    moodEntries: MoodEntry[];
    setMoodEntries: (moodEntries: MoodEntry[]) => void;
    addMoodEntry: (moodEntry: MoodEntry) => void;
};

export const MoodJournalContext = createContext<MoodJournalContextType>({
    moodEntries: [],
    setMoodEntries: () => {},
    addMoodEntry: () => {},
});

export const MoodJournalProvider = ({ children }: { children: React.ReactNode }) => {
    const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);

    const addMoodEntry = (moodEntry: MoodEntry) => {
        setMoodEntries([...moodEntries, moodEntry]);
    };

    return (
        <MoodJournalContext.Provider value={{ moodEntries, setMoodEntries, addMoodEntry }}>
            {children}
        </MoodJournalContext.Provider>
    );
};

export const useMoodJournal = () => {
    return useContext(MoodJournalContext);
};
