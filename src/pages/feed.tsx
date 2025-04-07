// src/pages/feed.tsx

import { useEffect, useState } from 'react'
import './styles.css';


export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/api/posts')
      .then(res => res.json())
      .then(setPosts)
  }, [])

  return (
    <div>
      <h1>Feed</h1>
      {posts.map((post: any) => (
        <div key={post.id}>
          <p><strong>{post.author.username}</strong>: {post.content}</p>
        </div>
      ))}
    </div>
  )
}
