import { render, screen } from '@testing-library/react';
import PostList from '@/components/PostList';
import '@testing-library/jest-dom';

const dummyData = [
  { id: 1, title: 'First Post', description: 'This is the first post' },
  { id: 2, title: 'Second Post', description: 'This is the second post' },
];

describe('PostList', () => {
  it('renders all post titles and descriptions', () => {
    render(<PostList posts={dummyData} />);
    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.getByText('Second Post')).toBeInTheDocument();
    expect(screen.getByText('This is the first post')).toBeInTheDocument();
    expect(screen.getByText('This is the second post')).toBeInTheDocument();
  });
});
