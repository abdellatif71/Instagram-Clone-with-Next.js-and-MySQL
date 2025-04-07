import { useEffect, useState } from 'react'
import './styles.css';


export default function Profile() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/get-posts') // Fetch posts from the API
      const data = await res.json()
      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <div className="profile">
      <h1>Your Profile</h1>
      <div className="posts">
        {posts.map((post: { id: number; content: string }) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
