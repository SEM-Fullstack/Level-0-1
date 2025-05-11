'use client';

import MoodEntryComponent from '@/components/mood-entry';
import { Button } from '@/components/ui/button';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Mood, MoodEntry } from '@/types';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function Home() {
    const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [nextPage, setNextPage] = useState<number>(1);
    const [previousPage, setPreviousPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const router = useRouter();

    const fetchMoods = async (currentPage: number) => {
        const response = await fetch(`/api/mood?page=${currentPage}`);
        const responseData = await response.json();
        setMoodEntries(responseData.data);
        setTotal(responseData.total);
        setNextPage(responseData.nextPage);
        setPreviousPage(responseData.previousPage);
        setTotalPages(responseData.totalPages);
    };

    useEffect(() => {
        fetchMoods(currentPage);
    }, []);

    const handleAddMood = () => {
        // TODO: Add mood to the database
        router.push('/add');
    };

    const handleDeleteMood = (id: string) => {
        console.log(id);
        const deleteMood = async () => {
            const response = await fetch(`/api/mood`, {
                method: 'DELETE',
                body: JSON.stringify({ id }),
            });
            if (response.ok) {
                toast.success('Mood entry deleted successfully');
                await fetchMoods(currentPage);
            } else {
                const responseData = await response.json();
                toast.error(responseData.error);
            }
        };
        deleteMood();
    };

    const onPageChange = (page: number) => {
        setCurrentPage(page);
        fetchMoods(page);
    };

    return (
        <TooltipProvider>
            <div className="flex flex-col overflow-x-hidden">
                <div className="flex flex-col items-center h-screen w-screen overflow-x-hidden relative">
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
                <Pagination className="overflow-x-hidden my-10 sticky bottom-0">
                    <PaginationContent>
                        <PaginationItem className="cursor-pointer">
                            <PaginationPrevious onClick={() => onPageChange(previousPage)}>
                                <ChevronLeft className="size-4" />
                            </PaginationPrevious>
                        </PaginationItem>
                        {previousPage !== 1 && (
                            <PaginationItem className="cursor-pointer">
                                <PaginationLink onClick={() => onPageChange(previousPage)}>
                                    {previousPage}
                                </PaginationLink>
                            </PaginationItem>
                        )}
                        <PaginationItem className="cursor-pointer">
                            <PaginationLink
                                onClick={() => onPageChange(currentPage)}
                                isActive
                                className="bg-primary text-white"
                            >
                                {currentPage}
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="cursor-pointer">
                            <PaginationLink onClick={() => onPageChange(nextPage)}>
                                {nextPage}
                            </PaginationLink>
                        </PaginationItem>
                        {nextPage !== totalPages && (
                            <PaginationItem className="cursor-pointer">
                                <PaginationEllipsis />
                            </PaginationItem>
                        )}
                        <PaginationItem className="cursor-pointer">
                            <PaginationNext onClick={() => onPageChange(nextPage)}>
                                <ChevronRight className="size-4" />
                            </PaginationNext>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </TooltipProvider>
    );
}
