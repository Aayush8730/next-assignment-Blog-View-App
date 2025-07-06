import styles from "@/styles/PostList.module.css";

export default function PostList({ posts, onPostClick }) {
  return (
    <ul className="list-none p-0">
      {posts.map((post, index) => (
        <li
          key={index}
          className={`${styles.articleCard} cursor-pointer`}
          onClick={() => {
            console.log("Clicked:", post.title);
            onPostClick(post);
          }}          
        >
          <div className="block hover:no-underline">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
