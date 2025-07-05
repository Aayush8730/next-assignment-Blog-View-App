import Layout from "@/components/Layout";
import PostList from "@/components/PostList";

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
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-red-600 mb-6">Top U.S. News Headlines</h1>

        {articles.length === 0 ? (
          <p className="text-gray-500">No articles available.</p>
        ) : (
          <PostList posts={articles} />
        )}
      </div>
    </Layout>
  );
}
