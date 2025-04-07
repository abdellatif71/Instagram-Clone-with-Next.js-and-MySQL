// src/pages/api/profile.ts

import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query

  const user = await prisma.user.findUnique({
    where: { id: Number(userId) },
    include: {
      posts: true,
    },
  })

  if (!user) return res.status(404).json({ message: 'User not found' })

  res.status(200).json(user)
}
