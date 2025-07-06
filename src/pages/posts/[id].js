
// import Layout from "@/components/Layout";
// import PostDetail from "@/components/PostDetail";

// export async function getServerSideProps(context) {
//   const { id } = context.params;
//   const res = await fetch('http://localhost:3001/api/posts');
//   const articles = await res.json();

//   const post = articles[parseInt(id)];

//   return {
//     props: {
//       post,
//     },
//   };
// }

// export default function IndividualPostDetail({ post }) {
//   return (
//     <Layout>
//        <PostDetail post = {post}/>
//     </Layout>
//   );
// }