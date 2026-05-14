CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "salary" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

INSERT INTO "Usuario" ("name", "email", "cargo", "salary", "updatedAt")
VALUES
    ('Leanne Graham', 'leanne.graham@devltda.com', 'Software Engineer', 5000, CURRENT_TIMESTAMP),
    ('Ervin Howell', 'ervin.howell@devltda.com', 'Product Manager', 6000, CURRENT_TIMESTAMP),
    ('Clementine Bauch', 'clementine.bauch@devltda.com', 'UX Designer', 4500, CURRENT_TIMESTAMP),
    ('Patricia Lebsack', 'patricia.lebsack@devltda.com', 'Data Analyst', 5500, CURRENT_TIMESTAMP),
    ('Chelsey Dietrich', 'chelsey.dietrich@devltda.com', 'HR Specialist', 4000, CURRENT_TIMESTAMP);
