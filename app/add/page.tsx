'use client';

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mood, MoodEmoji } from "@/types";
import { FieldValues, useForm } from "react-hook-form";

export default function AddPage() {
    const moods = [
        Mood.ANGRY,
        Mood.SAD,
        Mood.NEUTRAL,
        Mood.HAPPY,
        Mood.EXCITED,
    ];
    const form = useForm<FieldValues>({
        defaultValues: {
            mood: "",
            notes: "",
        },
    });

    const onSelectMood = (value: string) => {
        form.setValue("mood", value);
    }

    const onSubmit = (data: FieldValues) => {
        alert(JSON.stringify(data));
    }

    return <div className="flex flex-col items-center h-screen w-full mx-auto">
        <h1 className="text-6xl font-bold my-10">Add Mood Entry</h1>
        <div className="w-1/2">
            <Form {...form}>
                <FormItem className="mb-4">
                    <FormLabel className="text-2xl font-bold mb-2">Mood</FormLabel>
                    <FormControl>
                        <Select
                            onValueChange={onSelectMood}
                            defaultValue={form.watch("mood")}
                        >
                            <FormItem>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a mood" />
                                    </SelectTrigger>
                                </FormControl>
                            </FormItem>
                            <SelectContent>
                                {moods.map((mood) => (
                                    <SelectItem key={mood} value={mood}>{`${mood} ${MoodEmoji[mood]}`}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </FormControl>
                </FormItem>
                <FormItem className="mb-4">
                    <FormLabel className="text-2xl font-bold mb-2">Notes</FormLabel>
                    <FormControl>
                        <Textarea {...form.register("notes")} />
                    </FormControl>
                </FormItem>
                <Button type="submit" className="w-full"
                    onClick={form.handleSubmit(onSubmit)}
                >Add</Button>
            </Form>
        </div>
    </div>
}