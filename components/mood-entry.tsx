import { MoodEmoji, MoodEntry } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import moment from 'moment';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Trash2 } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from './ui/alert-dialog';
import { useState } from 'react';

const formatDate = (date: string) => {
    return moment(date).format('DD/MM/YYYY HH:mm');
};

export default function MoodEntryComponent(props: {
    moodEntry: MoodEntry;
    className?: string;
    onDelete: (id: string) => void;
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Card className={cn('w-full', props.className)}>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">{MoodEmoji[props.moodEntry.mood]}</span>
                    <span className="text-lg">{props.moodEntry.mood}</span>
                </CardTitle>
                <CardDescription className="text-sm flex flex-col gap-2">
                    <span className="text-gray-500">{formatDate(props.moodEntry.createdAt)}</span>
                    <span className="text-gray-500">{props.moodEntry.note}</span>
                </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-end">
                <AlertDialog open={isOpen}>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
                            <Trash2 className="size-4" color="red" />
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogDescription className="flex flex-col gap-4">
                            <p>Are you sure you want to delete your feeling 🥺?</p>
                            <div className="flex gap-2">
                                <Button variant="outline" onClick={() => setIsOpen(false)}>
                                    No, I am not sure
                                </Button>
                                <Button
                                    variant="destructive"
                                    onClick={() => {
                                        setIsOpen(false);
                                        props.onDelete(props.moodEntry.id);
                                    }}
                                >
                                    I'm sure
                                </Button>
                            </div>
                        </AlertDialogDescription>
                    </AlertDialogContent>
                </AlertDialog>
            </CardContent>
        </Card>
    );
}
