import { render, screen, act } from '@testing-library/react';
import PostDetail from '@/components/PostDetail';
import '@testing-library/jest-dom';

jest.useFakeTimers();

const dummyData = {
  title: 'News',
  description: 'Test Description',
  content: 'Full content of the post.',
  url: 'https://example.com/full-article',
};

describe('PostDetail Component', () => {
  afterEach(() => {
    jest.clearAllTimers();
  });

  it('renders post details correctly after delay', async () => {
    render(<PostDetail post={dummyData} />);

    expect(screen.getByText('Loading post...')).toBeInTheDocument();

    await act(async () => {
      jest.advanceTimersByTime(300);
    });

    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.getByText('Description:', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Full content of the post.')).toBeInTheDocument();
    expect(screen.getByText('Read full article →')).toHaveAttribute('href', dummyData.url);
  });

  it('does not render link when post.url is missing', async () => {
    const postWithoutUrl = { ...dummyData, url: null };
    render(<PostDetail post={postWithoutUrl} />);

    await act(async () => {
      jest.advanceTimersByTime(300);
    });

    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.queryByText('Read full article →')).not.toBeInTheDocument();
  });

  it('renders fallback when no post is selected', () => {
    render(<PostDetail post={null} />);
    expect(screen.getByText('Select a post to view details.')).toBeInTheDocument();
  });
});
