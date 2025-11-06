import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  pgEnum,
  integer,
  index,
} from "drizzle-orm/pg-core";

// ------------------------
// ENUM DEFINITIONS
// ------------------------

export const gradeEnum = pgEnum("grade", [
  "grade_1", "grade_2", "grade_3", "grade_4", "grade_5", "grade_6",
  "grade_7", "grade_8", "grade_9", "grade_10", "grade_11", "grade_12",
]);

export const subjectEnum = pgEnum("subject", [
  "mathematics", "english", "kiswahili", "science", "biology", 
  "chemistry", "physics", "history", "geography", "business_studies",
  "computer_studies", "agriculture", "home_science", "art_design",
  "music", "physical_education", "cre", "ire", "hre",
]);

export const curriculumEnum = pgEnum("curriculum", ["cbc", "cambridge"]);

export const hasAnswersEnum = pgEnum("has_answers", ["yes", "no"]);
export const isPublicEnum = pgEnum("is_public", ["yes", "no"]);

// ------------------------
// USERS TABLE
// ------------------------

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  role: varchar("role", { length: 50 }).default("teacher"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// ------------------------
// TEXTBOOKS TABLE
// ------------------------

export const textbooks = pgTable("textbooks", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  curriculum: curriculumEnum("curriculum").notNull(),
  grade: gradeEnum("grade").notNull(),
  subject: subjectEnum("subject").notNull(),
  fileUrl: text("file_url").notNull(),
  fileName: varchar("file_name", { length: 255 }),
  fileSize: integer("file_size"), // bytes
  mimeType: varchar("mime_type", { length: 100 }),
  pageCount: integer("page_count"),
  uploadedBy: integer("uploaded_by").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  gradeIdx: index("textbooks_grade_idx").on(table.grade),
  subjectIdx: index("textbooks_subject_idx").on(table.subject),
  curriculumIdx: index("textbooks_curriculum_idx").on(table.curriculum),
  gradeSubjectIdx: index("textbooks_grade_subject_idx").on(table.grade, table.subject),
}));

// ------------------------
// EXAMS TABLE
// ------------------------

export const exams = pgTable("exams", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  curriculum: curriculumEnum("curriculum").notNull(),
  grade: gradeEnum("grade").notNull(),
  subject: subjectEnum("subject").notNull(),
  examType: varchar("exam_type", { length: 50 }), // mid-term, end-term, mock, KCSE, etc.
  year: integer("year"),
  term: varchar("term", { length: 20 }), // term_1, term_2, term_3
  fileUrl: text("file_url").notNull(),
  fileName: varchar("file_name", { length: 255 }),
  fileSize: integer("file_size"),
  mimeType: varchar("mime_type", { length: 100 }),
  hasAnswers: hasAnswersEnum("has_answers").default("no").notNull(),
  uploadedBy: integer("uploaded_by").references(() => users.id, { onDelete: "set null" }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  gradeIdx: index("exams_grade_idx").on(table.grade),
  subjectIdx: index("exams_subject_idx").on(table.subject),
  curriculumIdx: index("exams_curriculum_idx").on(table.curriculum),
  yearIdx: index("exams_year_idx").on(table.year),
  gradeSubjectIdx: index("exams_grade_subject_idx").on(table.grade, table.subject),
}));

// ------------------------
// NOTES TABLE
// ------------------------

export const notes = pgTable("notes", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  curriculum: curriculumEnum("curriculum").notNull(),
  grade: gradeEnum("grade").notNull(),
  subject: subjectEnum("subject").notNull(),
  topic: varchar("topic", { length: 255 }),
  authorId: integer("author_id").references(() => users.id, { onDelete: "set null" }),
  isPublic: isPublicEnum("is_public").default("yes").notNull(),
  viewCount: integer("view_count").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => ({
  gradeIdx: index("notes_grade_idx").on(table.grade),
  subjectIdx: index("notes_subject_idx").on(table.subject),
  curriculumIdx: index("notes_curriculum_idx").on(table.curriculum),
  gradeSubjectIdx: index("notes_grade_subject_idx").on(table.grade, table.subject),
  topicIdx: index("notes_topic_idx").on(table.topic),
}));

// ------------------------
// TAGS TABLE
// ------------------------

export const tags = pgTable("tags", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// ------------------------
// JUNCTION TABLES
// ------------------------

export const textbookTags = pgTable("textbook_tags", {
  textbookId: integer("textbook_id")
    .notNull()
    .references(() => textbooks.id, { onDelete: "cascade" }),
  tagId: integer("tag_id")
    .notNull()
    .references(() => tags.id, { onDelete: "cascade" }),
}, (table) => ({
  textbookIdx: index("textbook_tags_textbook_idx").on(table.textbookId),
  tagIdx: index("textbook_tags_tag_idx").on(table.tagId),
}));

export const examTags = pgTable("exam_tags", {
  examId: integer("exam_id")
    .notNull()
    .references(() => exams.id, { onDelete: "cascade" }),
  tagId: integer("tag_id")
    .notNull()
    .references(() => tags.id, { onDelete: "cascade" }),
}, (table) => ({
  examIdx: index("exam_tags_exam_idx").on(table.examId),
  tagIdx: index("exam_tags_tag_idx").on(table.tagId),
}));

export const noteTags = pgTable("note_tags", {
  noteId: integer("note_id")
    .notNull()
    .references(() => notes.id, { onDelete: "cascade" }),
  tagId: integer("tag_id")
    .notNull()
    .references(() => tags.id, { onDelete: "cascade" }),
}, (table) => ({
  noteIdx: index("note_tags_note_idx").on(table.noteId),
  tagIdx: index("note_tags_tag_idx").on(table.tagId),
}));
