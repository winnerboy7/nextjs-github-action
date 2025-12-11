import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface Params {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const attractionId = Number(id);

  if (isNaN(attractionId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const count = await prisma.like.count({
    where: { attractionId },
  });

  return NextResponse.json({ likes: count });
}

export async function POST(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const attractionId = Number(id);

  if (isNaN(attractionId)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  await prisma.like.create({
    data: { attractionId },
  });

  const count = await prisma.like.count({
    where: { attractionId },
  });

  return NextResponse.json({ likes: count });
}