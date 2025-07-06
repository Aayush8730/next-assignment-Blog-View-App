import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function PostDetail({ post }) {
  const [loading, setLoading] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    if (post) {
      setLoading(true);
      const timer = setTimeout(() => {
        setCurrentPost(post);
        setLoading(false);
      }, 300); 

      return () => clearTimeout(timer); 
    } else {
      setCurrentPost(null);
      setLoading(false);
    }
  }, [post]);

  if (loading) {
    return (
      <div className="p-8 border-2 border-black text-gray-500 italic">
        Loading post...
      </div>
    );
  }

  if (!currentPost) {
    return (
      <div className="p-8 border-2 border-black text-gray-500 italic">
        Select a post to view details.
      </div>
    );
  }

  return (
    <div className="p-8 border-2 border-black">
      <h1 className="text-green-600 text-2xl font-bold">{currentPost.title}</h1>
      <br />
      <hr />
      <br />
      <p>
        <strong>Description:</strong> {currentPost.description}
      </p>
      <br />
      <p>{currentPost.content}</p>
      {currentPost.url && (
        <p>
          <Link
            href={currentPost.url}
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
