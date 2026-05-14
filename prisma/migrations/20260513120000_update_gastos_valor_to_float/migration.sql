PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Gastos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "valor" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Gastos" ("createdAt", "descricao", "id", "titulo", "updatedAt", "valor")
SELECT "createdAt", "descricao", "id", "titulo", "updatedAt", "valor"
FROM "Gastos";
DROP TABLE "Gastos";
ALTER TABLE "new_Gastos" RENAME TO "Gastos";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
