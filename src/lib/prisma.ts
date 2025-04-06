// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Eine Instanz des PrismaClients erstellen
const prisma = new PrismaClient();

// Prisma-Client exportieren, um ihn in anderen Dateien zu verwenden
export default prisma;
