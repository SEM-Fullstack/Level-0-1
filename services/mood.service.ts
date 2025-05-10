import { MoodEntry } from "@/types";
import { generate } from 'short-uuid';

export type CreateMoodEntry = Omit<MoodEntry, 'id' | 'createdAt'>;

export class MoodService {
    private moods: MoodEntry[] = [];

    addMood(mood: CreateMoodEntry) {
        const newMood: MoodEntry = {
            id: generate(),
            mood: mood.mood,
            note: mood.note,
            createdAt: new Date().toISOString(),
        }
        this.moods.push(newMood);
    }

    deleteMood(id: string) {
        this.moods = this.moods.filter((moodEntry) => moodEntry.id !== id);
    }

    getMoods() {
        return this.moods;
    }
}