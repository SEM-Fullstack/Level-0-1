import { MoodService } from '@/services/mood.service';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit =
        searchParams.get('limit') ??
        (process.env.MOOD_LIMIT ? parseInt(process.env.MOOD_LIMIT) : 9);
    const page = searchParams.get('page') ?? 1;
    const { data, total, nextPage, previousPage, totalPages } =
        await MoodService.getInstance().getMoods(Number(limit), Number(page));
    return NextResponse.json({
        data,
        total,
        nextPage,
        previousPage,
        totalPages,
    });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const mood = await MoodService.getInstance().addMood(body);
        return NextResponse.json({
            success: true,
            message: 'Mood added successfully',
            data: mood,
        });
    } catch (e: any) {
        return NextResponse.json(
            {
                error: e.message,
                status: 500,
            },
            {
                status: 500,
            }
        );
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const body = await request.json();
        const mood = await MoodService.getInstance().deleteMood(body.id);
        return NextResponse.json({
            success: true,
            message: 'Mood deleted successfully',
        });
    } catch (e: any) {
        if (e.message === 'Mood not found') {
            return NextResponse.json(
                {
                    error: e.message,
                    status: 404,
                },
                {
                    status: 404,
                }
            );
        }

        return NextResponse.json(
            {
                error: e.message,
                status: 500,
            },
            {
                status: 500,
            }
        );
    }
}
