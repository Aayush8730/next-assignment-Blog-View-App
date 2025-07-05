import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto flex space-x-6">
        <Link href="/" className="text-white hover:text-blue-400 transition">Home</Link>
        <Link href="/posts" className="text-white hover:text-blue-400 transition">Posts</Link>
      </div>
    </nav>
  );
}
