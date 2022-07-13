import getBounds from "../../utils/getBounds";
import generateMockArticleData from "../generateMockArticleData";

describe("getBounds tests", () => {
  const mockArticleData = generateMockArticleData();
  it("should retrun the highest and lowest latitude and longtitude", () => {
    expect(getBounds(mockArticleData)).toEqual([
      [-50, -100],
      [40, 80],
    ]);
  });

  it("should still return a bound if only one piece of data is returned", () => {
    expect(getBounds([mockArticleData[0]])).toEqual([
      [-50, -100],
      [-50, -100],
    ]);
  });
});
