"use client";
import Link from 'next/link';
import './globals.css';
export default function Home() {
  return (
    <div className="p-8">
      <p className="text-2xl font-bold mb-4">Blogs using files name</p>

      <div className="mb-4">
        <Link href="/Blogs/Blog1">
          <div className="text-blue-500 hover:underline cursor-pointer">
            Go to Blog1
          </div>
        </Link>
      </div>

      <div className="mb-4">
        <Link href="/Blogs/Blog2">
          <div className="text-blue-500 hover:underline cursor-pointer">
            Go to Blog2
          </div>
        </Link>
      </div>

      <div className="mb-4">
        <Link href="/Blogs/Blog3">
          <div className="text-blue-500 hover:underline cursor-pointer">
            Go to Blog3
          </div>
        </Link>
      </div>

      <p className="text-2xl font-bold my-4">Blogs using slugs name</p>

      <div className="mb-4">
        <Link href="/posts/Art">
          <div className="text-blue-500 hover:underline cursor-pointer">
            Go to Art
          </div>
        </Link>
      </div>

      <div className="mb-4">
        <Link href="/posts/It">
          <div className="text-blue-500 hover:underline cursor-pointer">
            Go to It
          </div>
        </Link>
      </div>

      <div className="mb-4">
        <Link href="/posts/World">
          <div className="text-blue-500 hover:underline cursor-pointer">
            Go to World
          </div>
        </Link>
      </div>
    </div>
  );
}
