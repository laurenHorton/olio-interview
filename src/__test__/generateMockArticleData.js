const generateMockArticleData = () => {
  const mockArticleData = [];

  for (let i = 0; i < 10; i++) {
    mockArticleData.push({
      id: i,
      location: {
        longitude: (i - 5) * 20,
        latitude: (i - 5) * 10,
      },
    });
  }

  return mockArticleData;
};

export default generateMockArticleData;
