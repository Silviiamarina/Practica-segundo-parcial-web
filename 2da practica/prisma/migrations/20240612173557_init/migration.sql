-- CreateTable
CREATE TABLE "Caja" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo'
);

-- CreateTable
CREATE TABLE "Concepto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "concepto" TEXT NOT NULL,
    "detalle" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo'
);

-- CreateTable
CREATE TABLE "Transaccion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_Caja" INTEGER NOT NULL,
    "id_Concepto" INTEGER NOT NULL,
    "fecha" DATETIME NOT NULL,
    "ingreso" TEXT NOT NULL,
    "egreso" TEXT NOT NULL,
    "observacion" TEXT NOT NULL,
    "transaccion" BOOLEAN NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',
    CONSTRAINT "Transaccion_id_Caja_fkey" FOREIGN KEY ("id_Caja") REFERENCES "Caja" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Transaccion_id_Concepto_fkey" FOREIGN KEY ("id_Concepto") REFERENCES "Concepto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
