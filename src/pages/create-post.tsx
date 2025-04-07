import { useState } from 'react'
import { useRouter } from 'next/router' 
import './styles.css';
// Import useRouter to navigate after posting

export default function CreatePost() {
  const [content, setContent] = useState('')
  const router = useRouter() // Initialize the router for navigation

  const handleSubmit = async () => {
    if (!content) return alert('Content is required') // Validation for empty content

    try {
      const res = await fetch('/api/create-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, userId: 1 }) // Replace 1 with the actual user ID
      })

      const data = await res.json()
      if (res.ok) {
        alert('Post created successfully!')
        setContent('')
        // Redirect to the profile or home page after post creation
        router.push('/profile') // Or navigate to wherever you want
      } else {
        alert('Error: ' + data.message)
      }
    } catch (error) {
      console.error(error)
      alert('Server error')
    }
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="What's on your mind?"
        rows={5}
        cols={40}
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  )
}
