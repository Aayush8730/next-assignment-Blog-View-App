import { render, screen } from "@testing-library/react";
import NewsPage, { getServerSideProps } from "@/pages/posts";

jest.mock("@/components/Layout", () => ({ children }) => <div>{children}</div>);
jest.mock("@/components/PostList", () => ({ posts }) => (
  <ul>
    {posts.map((post, i) => (
      <li key={i}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </li>
    ))}
  </ul>
));


describe("NewsPage", () => {
  const dummyData = [
    { title: "First Post", description: "Description of first post" },
    { title: "Second Post", description: "Description of second post" },
  ];

  it("should fetch posts and pass them as props", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(dummyData),
      })
    );

    const { props } = await getServerSideProps();

    expect(fetch).toHaveBeenCalledWith("http://localhost:3001/api/posts");
    expect(props.articles).toEqual(dummyData);
  });

  it("should render fetched posts", () => {
    render(<NewsPage articles={dummyData} />);

    expect(screen.getByText("Top U.S. News Headlines")).toBeInTheDocument();
    expect(screen.getByText("First Post")).toBeInTheDocument();
    expect(screen.getByText("Second Post")).toBeInTheDocument();
    expect(screen.getByText("Description of first post")).toBeInTheDocument();
    expect(screen.getByText("Description of second post")).toBeInTheDocument();
  });

  it("should show message when there are no articles", () => {
    render(<NewsPage articles={[]} />);
    expect(screen.getByText("No articles available.")).toBeInTheDocument();
  });
});
