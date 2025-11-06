DROP TABLE "users" CASCADE;--> statement-breakpoint
ALTER TABLE "notes" ADD COLUMN "createdAt" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "notes" DROP COLUMN "created_at";