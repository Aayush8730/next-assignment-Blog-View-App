import Link from "next/link";

export default function PostDetail({ post }) {
  return (
    <div className="p-8 border-2 border-black">
      <h1 className="text-green-600 text-2xl font-bold">{post.title}</h1>
      <br />
      <hr/>
      <br />
      <p>
        <strong>Description:</strong> {post.description}
      </p>
      <br />
      <p>{post.content}</p>
      {post.url && (
        <p>
          <Link
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline font-bold inline-block mt-4"
          >
            Read full article →
          </Link>
        </p>
      )}
    </div>
  );
}
