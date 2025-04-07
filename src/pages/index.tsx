// src/pages/index.tsx

import Link from 'next/link'
import './styles.css';


export default function Home() {
  return (
    <div>
      <h1>Instagram Clone</h1>
      <nav>
        <Link href="/register">Register</Link> |{' '}
        <Link href="/feed">Feed</Link> |{' '}
        <Link href="/profile">Profile</Link> |{' '}
        <Link href="/create-post">Create Post</Link>
      </nav>
    </div>
  )
}
