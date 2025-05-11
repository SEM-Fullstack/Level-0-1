'use client';

import MoodEntryComponent from '@/components/mood-entry';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Mood, MoodEntry } from '@/types';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function Home() {
    const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [nextPage, setNextPage] = useState<number>(1);
    const [previousPage, setPreviousPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const router = useRouter();

    useEffect(() => {
        const fetchMoods = async () => {
            try {
                const response = await fetch('/api/mood');
                const responseData = await response.json();
                setMoodEntries(responseData.data);
                setTotal(responseData.total);
                setNextPage(responseData.nextPage);
                setPreviousPage(responseData.previousPage);
                setTotalPages(responseData.totalPages);
            } catch (e: any) {
                toast.error(e.message);
            }
        };
        fetchMoods();
    }, []);

    const handleAddMood = () => {
        // TODO: Add mood to the database
        router.push('/add');
    };

    const handleDeleteMood = (id: string) => {
        // TODO: Delete mood from the database
        toast.success('Mood deleted');
    };

    return (
        <TooltipProvider>
            <div className="flex flex-col items-center h-screen w-screen overflow-x-hidden">
                <div className="flex flex-col items-center justify-center mt-10">
                    <h1 className="text-9xl font-bold text-center mb-10">Mood Tracker</h1>
                    <div className="flex flex-col items-center">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={handleAddMood}>
                                    <Plus className="size-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Add Mood</TooltipContent>
                        </Tooltip>
                    </div>
                </div>
                <div className="flex flex-col mt-10 mb-10 h-full flex-1 items-center w-2/3">
                    <h2 className="text-xl font-bold mb-10 text-center">Mood Entries</h2>
                    <div className="flex flex-col items-center w-full">
                        {moodEntries.map(moodEntry => (
                            <MoodEntryComponent
                                key={moodEntry.id}
                                moodEntry={moodEntry}
                                className="mb-5"
                                onDelete={handleDeleteMood}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </TooltipProvider>
    );
}
