import { Mood, MoodEntry } from '@/types';
import moment from 'moment';
import { generate } from 'short-uuid';

export type CreateMoodEntry = Omit<MoodEntry, 'id' | 'createdAt'>;

export class MoodService {
    /**
     * The number of mood entries to generate in the seed data
     */
    private static readonly SEED_DATA_SIZE = process.env.SEED_DATA_SIZE
        ? parseInt(process.env.SEED_DATA_SIZE)
        : 99;
    private static _instance: MoodService;
    private moods: MoodEntry[] = [];

    private constructor() {
        this.moods = this.genMoodEntry(MoodService.SEED_DATA_SIZE);
    }

    public static getInstance(): MoodService {
        if (!MoodService._instance) {
            MoodService._instance = new MoodService();
        }
        return MoodService._instance;
    }

    /**
     * Generate a random number of mood entries
     * @param num - number of mood entries to generate
     * @returns an array of mood entries
     */
    private genMoodEntry(num: number): MoodEntry[] {
        const moods = [Mood.ANGRY, Mood.SAD, Mood.NEUTRAL, Mood.HAPPY, Mood.EXCITED];
        return Array.from({ length: num }, () => ({
            id: generate(),
            mood: moods[Math.floor(Math.random() * moods.length)],
            note: `I'm feeling ${moods[Math.floor(Math.random() * moods.length)]}`,
            createdAt: moment()
                .subtract(Math.floor(Math.random() * 30 * 24 * 60), 'minutes')
                .toISOString(),
        })).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    addMood(mood: CreateMoodEntry) {
        const newMood: MoodEntry = {
            id: generate(),
            mood: mood.mood,
            note: mood.note,
            createdAt: new Date().toISOString(),
        };
        this.moods.push(newMood);
    }

    deleteMood(id: string) {
        const index = this.moods.findIndex(moodEntry => moodEntry.id === id);
        if (index !== -1) {
            this.moods.splice(index, 1);
        } else {
            throw new Error('Mood not found');
        }
    }

    getMoods(limit: number, page: number) {
        const total = this.moods.length;
        const totalPages = Math.ceil(total / limit);
        const maxPage = Math.ceil(total / limit);
        const data = this.moods
            .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice((page - 1) * limit, page * limit);
        return {
            data,
            total,
            nextPage: page < maxPage ? page + 1 : maxPage,
            previousPage: page > 1 ? page - 1 : 1,
            totalPages,
        };
    }
}
