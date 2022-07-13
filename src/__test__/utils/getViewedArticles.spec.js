import getViewedArticles from "../../utils/getViewedArticles";
import generateMockArticleData from "../generateMockArticleData";

describe("getViewedArticlesTest", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const localStorageMock = {
    getItem: jest.fn(),
  };

  Object.defineProperty(global, "localStorage", { value: localStorageMock });
  const mockData = generateMockArticleData();
  it("should return the viewed articles", () => {
    global.localStorage.getItem.mockImplementation(() =>
      JSON.stringify([
        {
          id: "mockID1",
        },
        {
          id: "mockID2",
        },
      ])
    );
    const result = getViewedArticles(mockData);
    expect(result).toHaveLength(2);
    expect(result).toEqual(["mockID1", "mockID2"]);
  });

  it("should return an empty array when there are no viewed articles", () => {
    global.localStorage.getItem.mockImplementation(() => JSON.stringify([]));
    const result = getViewedArticles(mockData);
    expect(result).toHaveLength(0);
  });
});
