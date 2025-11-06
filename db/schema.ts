import {
    integer,
    text,
    boolean,
    pgTable,
    timestamp,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
    id: integer('id').primaryKey(),
    email: text('email').notNull().unique(),
    name: text('name').notNull(),
    isAdmin: boolean('is_admin').default(false).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});