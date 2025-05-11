import { MoodEmoji, MoodEntry } from "@/types";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import moment from "moment";
import { cn } from "@/lib/utils";

const formatDate = (date: string) => {
    return moment(date).format("DD/MM/YYYY");
}

export default function MoodEntryComponent(props: {
    moodEntry: MoodEntry
    className?: string
}) {
    return <Card className={cn("w-[300px]", props.className)}>
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
    </Card>
}