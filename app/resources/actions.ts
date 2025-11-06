"use server";

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import { textbooks, exams, notes, users } from "@/src/db/schema";
import { eq, and, SQL, ilike, or } from "drizzle-orm";
import type { InferSelectModel } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

// Inferred types
export type Textbook = InferSelectModel<typeof textbooks>;
export type Exam = InferSelectModel<typeof exams>;
export type Note = InferSelectModel<typeof notes>;

type Grade = Textbook["grade"];
type Subject = Textbook["subject"];
type Curriculum = Textbook["curriculum"];

// ----------------------------
// TEXTBOOKS
// ----------------------------
export async function getFilteredTextbooks(
  grade?: Grade,
  subject?: Subject,
  curriculum?: Curriculum,
  searchQuery?: string
) {
  const filters: SQL[] = [];

  if (grade) filters.push(eq(textbooks.grade, grade));
  if (subject) filters.push(eq(textbooks.subject, subject));
  if (curriculum) filters.push(eq(textbooks.curriculum, curriculum));

  let query = db
    .select({
      id: textbooks.id,
      title: textbooks.title,
      description: textbooks.description,
      grade: textbooks.grade,
      subject: textbooks.subject,
      curriculum: textbooks.curriculum,
      fileUrl: textbooks.fileUrl,
      pageCount: textbooks.pageCount,
      uploadedByName: users.name,
      createdAt: textbooks.createdAt,
    })
    .from(textbooks)
    .leftJoin(users, eq(users.id, textbooks.uploadedBy))
    .$dynamic();

  if (filters.length > 0) {
    query = query.where(and(...filters));
  }

  const results = await query;

  // Apply search filter in-memory if provided
  if (searchQuery && searchQuery.trim()) {
    const lowerQuery = searchQuery.toLowerCase();
    return results.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description?.toLowerCase().includes(lowerQuery)
    );
  }

  return results;
}

// ----------------------------
// EXAMS
// ----------------------------
export async function getFilteredExams(
  grade?: Grade,
  subject?: Subject,
  curriculum?: Curriculum,
  searchQuery?: string
) {
  const filters: SQL[] = [];

  if (grade) filters.push(eq(exams.grade, grade));
  if (subject) filters.push(eq(exams.subject, subject));
  if (curriculum) filters.push(eq(exams.curriculum, curriculum));

  let query = db
    .select({
      id: exams.id,
      title: exams.title,
      grade: exams.grade,
      subject: exams.subject,
      curriculum: exams.curriculum,
      examType: exams.examType,
      year: exams.year,
      term: exams.term,
      hasAnswers: exams.hasAnswers,
      fileUrl: exams.fileUrl,
      uploadedByName: users.name,
      createdAt: exams.createdAt,
    })
    .from(exams)
    .leftJoin(users, eq(users.id, exams.uploadedBy))
    .$dynamic();

  if (filters.length > 0) {
    query = query.where(and(...filters));
  }

  const results = await query;

  if (searchQuery && searchQuery.trim()) {
    const lowerQuery = searchQuery.toLowerCase();
    return results.filter((item) =>
      item.title.toLowerCase().includes(lowerQuery)
    );
  }

  return results;
}

// ----------------------------
// NOTES
// ----------------------------
export async function getFilteredNotes(
  grade?: Grade,
  subject?: Subject,
  curriculum?: Curriculum,
  searchQuery?: string
) {
  const filters: SQL[] = [eq(notes.isPublic, "yes")];

  if (grade) filters.push(eq(notes.grade, grade));
  if (subject) filters.push(eq(notes.subject, subject));
  if (curriculum) filters.push(eq(notes.curriculum, curriculum));

  let query = db
    .select({
      id: notes.id,
      title: notes.title,
      content: notes.content,
      grade: notes.grade,
      subject: notes.subject,
      curriculum: notes.curriculum,
      topic: notes.topic,
      viewCount: notes.viewCount,
      authorName: users.name,
      createdAt: notes.createdAt,
    })
    .from(notes)
    .leftJoin(users, eq(users.id, notes.authorId))
    .$dynamic();

  if (filters.length > 0) {
    query = query.where(and(...filters));
  }

  const results = await query;

  if (searchQuery && searchQuery.trim()) {
    const lowerQuery = searchQuery.toLowerCase();
    return results.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.content.toLowerCase().includes(lowerQuery) ||
        item.topic?.toLowerCase().includes(lowerQuery)
    );
  }

  return results;
}

// ----------------------------
// INCREMENT NOTE VIEW COUNT
// ----------------------------
export async function incrementNoteViewCount(noteId: number) {
  await db
    .update(notes)
    .set({ viewCount: (notes.viewCount || 0) })
    .where(eq(notes.id, noteId));
}