"use client";

import MoodEntryComponent from "@/components/mood-entry";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Mood, MoodEntry } from "@/types";
import { Plus } from "lucide-react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { generate } from "short-uuid";

/**
 * Randomly generate a list of mood entries
 */
function SampleMoodEntry(number: number): MoodEntry[] {
  const moods = [
    Mood.ANGRY,
    Mood.SAD,
    Mood.NEUTRAL,
    Mood.HAPPY,
    Mood.EXCITED,
  ];
  const notes = [
    'I am happy',
    'I am sad',
    'I am neutral',
    'I am excited',
    'I am angry',
  ];

  return Array.from({ length: number }, () => ({
    id: generate(),
    mood: moods[Math.floor(Math.random() * moods.length)],
    note: notes[Math.floor(Math.random() * notes.length)],
    createdAt: moment().subtract(Math.floor(Math.random() * 30), 'days').toISOString(),
  })).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
}

export default function Home() {
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>(SampleMoodEntry(15));
  const router = useRouter();

  useEffect(() => {
    // TODO: Fetch moods from the database
  }, []);

  const handleAddMood = () => {
    // TODO: Add mood to the database
    router.push("/add");
  }

  return (
    <TooltipProvider>
      <div className="flex flex-col items-center h-screen w-screen overflow-x-hidden">
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-9xl font-bold text-center mb-10">Mood Tracker</h1>
          <div className="flex flex-col items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={handleAddMood}><Plus className="size-4" /></Button>
              </TooltipTrigger>
              <TooltipContent>
                Add Mood
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="flex flex-col mt-10 mb-10 h-full flex-1 items-center">
          <h2 className="text-xl font-bold mb-10 text-center">Mood Entries</h2>
          <div className="flex flex-col items-center w-full">
            {moodEntries.map((moodEntry) => (
              <MoodEntryComponent key={moodEntry.id} moodEntry={moodEntry} className="mb-5" />
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
