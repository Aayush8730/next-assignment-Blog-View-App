import { render, screen } from '@testing-library/react';
import PostDetail from '@/components/PostDetail';
import '@testing-library/jest-dom';

const dummyData = {
  title: 'News',
  description: 'Test Description',
  content: 'Full content of the post.',
  url: 'https://example.com/full-article',
};

describe('PostDetail Component', () => {
  it('renders post details correctly', () => {
    render(<PostDetail post={dummyData} />);
    
    expect(screen.getByText('News')).toBeInTheDocument();
    expect(screen.getByText('Description:', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Full content of the post.')).toBeInTheDocument();
    expect(screen.getByText('Read full article →')).toHaveAttribute('href', dummyData.url);
  });

  it('does not render link when post.url is missing', () => {
    const postWithoutUrl = { ...dummyData, url: null };
    render(<PostDetail post={postWithoutUrl} />);
    
    expect(screen.queryByText('Read full article →')).not.toBeInTheDocument();
  });
});
