import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { content, userId } = req.body

    if (!content || !userId) {
      return res.status(400).json({ message: 'Content and userId are required' })
    }

    try {
      // Create the post in the database
      const post = await prisma.post.create({
        data: {
          content,
          imageUrl: '', // Provide a default or dynamic value for imageUrl
          author: { connect: { id: userId } },
        },
      })

      return res.status(201).json(post)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Server Error' })
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
