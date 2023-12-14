import { API_BASE_URL, listingsAll } from "../constant/index.js";
import { fetchTokens } from "../authentication/headers.js";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

export async function getPosts() {
  const getPostURL = `${API_BASE_URL}${listingsAll}`;
  const response = await fetchTokens(getPostURL);
  const registeredProfile = await response.json();
  if (response.ok) {
    return registeredProfile;
  }
  throw new Error(response.statusText);
}

describe("getPosts", () => {
  test("should fetch posts successfully", async () => {
    const mockPosts = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ];

    // Mock the fetch call to return a successful response with the mock posts
    fetchMock.mockResponseOnce(JSON.stringify(mockPosts), { status: 200 });

    // Call the getPosts function
    const result = await getPosts();

    // Expectations
    expect(result).toEqual(mockPosts);

    // Ensure that fetch was called with the correct URL
    expect(fetchMock.mock.calls[0][0]).toBe(`${API_BASE_URL}${listingsAll}`);
  });

  test("should throw an error when fetching posts fails", async () => {
    // Mock the fetch call to return an error response
    fetchMock.mockResponseOnce(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
      },
    );

    try {
      await getPosts();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Internal Server Error");
    }
  });
});
