CREATE TYPE "public"."curriculum" AS ENUM('cbc', 'cambridge');--> statement-breakpoint
CREATE TYPE "public"."grade" AS ENUM('grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5', 'grade_6', 'grade_7', 'grade_8', 'grade_9', 'grade_10', 'grade_11', 'grade_12');--> statement-breakpoint
CREATE TYPE "public"."has_answers" AS ENUM('yes', 'no');--> statement-breakpoint
CREATE TYPE "public"."is_public" AS ENUM('yes', 'no');--> statement-breakpoint
CREATE TYPE "public"."subject" AS ENUM('mathematics', 'english', 'kiswahili', 'science', 'biology', 'chemistry', 'physics', 'history', 'geography', 'business_studies', 'computer_studies', 'agriculture', 'home_science', 'art_design', 'music', 'physical_education', 'cre', 'ire', 'hre');--> statement-breakpoint
CREATE TABLE "exam_tags" (
	"exam_id" integer NOT NULL,
	"tag_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "note_tags" (
	"note_id" integer NOT NULL,
	"tag_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "tags_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "textbook_tags" (
	"textbook_id" integer NOT NULL,
	"tag_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"role" varchar(50) DEFAULT 'teacher',
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "exams" ALTER COLUMN "grade" SET DATA TYPE "public"."grade" USING "grade"::"public"."grade";--> statement-breakpoint
ALTER TABLE "exams" ALTER COLUMN "grade" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "exams" ALTER COLUMN "subject" SET DATA TYPE "public"."subject" USING "subject"::"public"."subject";--> statement-breakpoint
ALTER TABLE "exams" ALTER COLUMN "subject" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "notes" ALTER COLUMN "grade" SET DATA TYPE "public"."grade" USING "grade"::"public"."grade";--> statement-breakpoint
ALTER TABLE "notes" ALTER COLUMN "grade" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "notes" ALTER COLUMN "subject" SET DATA TYPE "public"."subject" USING "subject"::"public"."subject";--> statement-breakpoint
ALTER TABLE "notes" ALTER COLUMN "subject" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "textbooks" ALTER COLUMN "grade" SET DATA TYPE "public"."grade" USING "grade"::"public"."grade";--> statement-breakpoint
ALTER TABLE "textbooks" ALTER COLUMN "grade" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "textbooks" ALTER COLUMN "subject" SET DATA TYPE "public"."subject" USING "subject"::"public"."subject";--> statement-breakpoint
ALTER TABLE "textbooks" ALTER COLUMN "subject" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "exams" ADD COLUMN "curriculum" "curriculum" NOT NULL;--> statement-breakpoint
ALTER TABLE "exams" ADD COLUMN "exam_type" varchar(50);--> statement-breakpoint
ALTER TABLE "exams" ADD COLUMN "year" integer;--> statement-breakpoint
ALTER TABLE "exams" ADD COLUMN "term" varchar(20);--> statement-breakpoint
ALTER TABLE "exams" ADD COLUMN "file_url" text NOT NULL;--> statement-breakpoint
ALTER TABLE "exams" ADD COLUMN "file_name" varchar(255);--> statement-breakpoint
ALTER TABLE "exams" ADD COLUMN "file_size" integer;--> statement-breakpoint
ALTER TABLE "exams" ADD COLUMN "mime_type" varchar(100);--> statement-breakpoint
ALTER TABLE "exams" ADD COLUMN "has_answers" "has_answers" DEFAULT 'no' NOT NULL;--> statement-breakpoint
ALTER TABLE "exams" ADD COLUMN "uploaded_by" integer;--> statement-breakpoint
ALTER TABLE "exams" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "exams" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "notes" ADD COLUMN "curriculum" "curriculum" NOT NULL;--> statement-breakpoint
ALTER TABLE "notes" ADD COLUMN "topic" varchar(255);--> statement-breakpoint
ALTER TABLE "notes" ADD COLUMN "author_id" integer;--> statement-breakpoint
ALTER TABLE "notes" ADD COLUMN "is_public" "is_public" DEFAULT 'yes' NOT NULL;--> statement-breakpoint
ALTER TABLE "notes" ADD COLUMN "view_count" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "notes" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "notes" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "textbooks" ADD COLUMN "curriculum" "curriculum" NOT NULL;--> statement-breakpoint
ALTER TABLE "textbooks" ADD COLUMN "file_url" text NOT NULL;--> statement-breakpoint
ALTER TABLE "textbooks" ADD COLUMN "file_name" varchar(255);--> statement-breakpoint
ALTER TABLE "textbooks" ADD COLUMN "file_size" integer;--> statement-breakpoint
ALTER TABLE "textbooks" ADD COLUMN "mime_type" varchar(100);--> statement-breakpoint
ALTER TABLE "textbooks" ADD COLUMN "page_count" integer;--> statement-breakpoint
ALTER TABLE "textbooks" ADD COLUMN "uploaded_by" integer;--> statement-breakpoint
ALTER TABLE "textbooks" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "textbooks" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "exam_tags" ADD CONSTRAINT "exam_tags_exam_id_exams_id_fk" FOREIGN KEY ("exam_id") REFERENCES "public"."exams"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_tags" ADD CONSTRAINT "exam_tags_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "note_tags" ADD CONSTRAINT "note_tags_note_id_notes_id_fk" FOREIGN KEY ("note_id") REFERENCES "public"."notes"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "note_tags" ADD CONSTRAINT "note_tags_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "textbook_tags" ADD CONSTRAINT "textbook_tags_textbook_id_textbooks_id_fk" FOREIGN KEY ("textbook_id") REFERENCES "public"."textbooks"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "textbook_tags" ADD CONSTRAINT "textbook_tags_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "exam_tags_exam_idx" ON "exam_tags" USING btree ("exam_id");--> statement-breakpoint
CREATE INDEX "exam_tags_tag_idx" ON "exam_tags" USING btree ("tag_id");--> statement-breakpoint
CREATE INDEX "note_tags_note_idx" ON "note_tags" USING btree ("note_id");--> statement-breakpoint
CREATE INDEX "note_tags_tag_idx" ON "note_tags" USING btree ("tag_id");--> statement-breakpoint
CREATE INDEX "textbook_tags_textbook_idx" ON "textbook_tags" USING btree ("textbook_id");--> statement-breakpoint
CREATE INDEX "textbook_tags_tag_idx" ON "textbook_tags" USING btree ("tag_id");--> statement-breakpoint
ALTER TABLE "exams" ADD CONSTRAINT "exams_uploaded_by_users_id_fk" FOREIGN KEY ("uploaded_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notes" ADD CONSTRAINT "notes_author_id_users_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "textbooks" ADD CONSTRAINT "textbooks_uploaded_by_users_id_fk" FOREIGN KEY ("uploaded_by") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "exams_grade_idx" ON "exams" USING btree ("grade");--> statement-breakpoint
CREATE INDEX "exams_subject_idx" ON "exams" USING btree ("subject");--> statement-breakpoint
CREATE INDEX "exams_curriculum_idx" ON "exams" USING btree ("curriculum");--> statement-breakpoint
CREATE INDEX "exams_year_idx" ON "exams" USING btree ("year");--> statement-breakpoint
CREATE INDEX "exams_grade_subject_idx" ON "exams" USING btree ("grade","subject");--> statement-breakpoint
CREATE INDEX "notes_grade_idx" ON "notes" USING btree ("grade");--> statement-breakpoint
CREATE INDEX "notes_subject_idx" ON "notes" USING btree ("subject");--> statement-breakpoint
CREATE INDEX "notes_curriculum_idx" ON "notes" USING btree ("curriculum");--> statement-breakpoint
CREATE INDEX "notes_grade_subject_idx" ON "notes" USING btree ("grade","subject");--> statement-breakpoint
CREATE INDEX "notes_topic_idx" ON "notes" USING btree ("topic");--> statement-breakpoint
CREATE INDEX "textbooks_grade_idx" ON "textbooks" USING btree ("grade");--> statement-breakpoint
CREATE INDEX "textbooks_subject_idx" ON "textbooks" USING btree ("subject");--> statement-breakpoint
CREATE INDEX "textbooks_curriculum_idx" ON "textbooks" USING btree ("curriculum");--> statement-breakpoint
CREATE INDEX "textbooks_grade_subject_idx" ON "textbooks" USING btree ("grade","subject");--> statement-breakpoint
ALTER TABLE "exams" DROP COLUMN "fileUrl";--> statement-breakpoint
ALTER TABLE "exams" DROP COLUMN "createdAt";--> statement-breakpoint
ALTER TABLE "notes" DROP COLUMN "createdAt";--> statement-breakpoint
ALTER TABLE "textbooks" DROP COLUMN "fileUrl";--> statement-breakpoint
ALTER TABLE "textbooks" DROP COLUMN "createdAt";