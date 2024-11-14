CREATE TABLE IF NOT EXISTS "fetches" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "fetches_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"username" varchar NOT NULL,
	"timestamp" bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "messages" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "messages_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"username" varchar NOT NULL,
	"timestamp" bigint NOT NULL,
	"content" varchar NOT NULL
);
