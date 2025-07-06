import { useState } from "react";
import Layout from "@/components/Layout";
import PostList from "@/components/PostList";
import PostDetail from "@/components/PostDetail";


export async function getServerSideProps() {
  
  const res = await fetch("http://localhost:3001/api/posts");
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
}

export default function NewsPage({ articles }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-6">
          Top U.S. News Headlines
        </h1>

        {articles.length === 0 ? (
          <p className="text-gray-500">No articles available.</p>
        ) : (
          <PostList posts={articles} onPostClick={handlePostClick} />
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/10 flex justify-center items-start pt-24 z-50">
          <div className="bg-white w-[90%] max-w-3xl rounded-lg p-6 relative shadow-xl">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl font-bold"
            >
              &times;
            </button>
            <PostDetail post={selectedPost} />
          </div>
        </div>
      )}
    </Layout>
  );
}
