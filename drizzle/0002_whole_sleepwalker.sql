ALTER TABLE "exams" ADD COLUMN "fileUrl" text NOT NULL;--> statement-breakpoint
ALTER TABLE "exams" ADD COLUMN "createdAt" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "textbooks" ADD COLUMN "fileUrl" text NOT NULL;--> statement-breakpoint
ALTER TABLE "textbooks" ADD COLUMN "createdAt" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "exams" DROP COLUMN "file_url";--> statement-breakpoint
ALTER TABLE "exams" DROP COLUMN "created_at";--> statement-breakpoint
ALTER TABLE "textbooks" DROP COLUMN "file_url";--> statement-breakpoint
ALTER TABLE "textbooks" DROP COLUMN "created_at";