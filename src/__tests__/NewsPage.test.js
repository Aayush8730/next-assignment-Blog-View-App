import { getServerSideProps } from '@/pages/posts'; 


global.fetch = jest.fn();

describe('getServerSideProps', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch articles and return as props', async () => {
    const dummyArticles = [
      {
        id: 1,
        title: 'Test Title 1',
        description: 'Test Description 1',
        content: 'Test Content 1',
        url: 'https://example.com/1',
      },
      {
        id: 2,
        title: 'Test Title 2',
        description: 'Test Description 2',
        content: 'Test Content 2',
        url: 'https://example.com/2',
      },
    ];

    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(dummyArticles),
    });

    const context = {}; 
    const result = await getServerSideProps(context);

    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/api/posts');
    expect(result).toEqual({
      props: {
        articles: dummyArticles,
      },
    });
  });

  it('should handle fetch failure gracefully', async () => {
    fetch.mockRejectedValueOnce(new Error('Fetch failed'));

    await expect(getServerSideProps({})).rejects.toThrow('Fetch failed');
  });
});
