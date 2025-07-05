import Link from "next/link";
import styles from "@/styles/PostList.module.css"; 

export default function PostList({ posts }) {
  return (
    <ul className="list-none p-0">
      {posts.map((post, index) => (
        <li key={index} className={styles.articleCard}>
          <Link href={`/posts/${index}`} className="block hover:no-underline">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

