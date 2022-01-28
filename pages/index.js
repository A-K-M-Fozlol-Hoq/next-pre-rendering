import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <h1>Next js pre rendering</h1>
      <Link href='/users'><a>Users</a></Link>
      <Link href='/posts'><a>posts</a></Link>
    </div>
  )
}
