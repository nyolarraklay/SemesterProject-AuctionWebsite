import { login } from "./logIn.js";

const TEST_BAD_EMAIL = "juan@noroff.no";
const TEST_PASSWORD = "password123";

/**
 * A mock fetch that fetches unsuccessfully
 * @param {number} status The status code to return
 * @param {string} stausTest The status text to return
 * @returns {Promise<object>} A promise that resolves to the login details
 *@example
 * global.fetch = jest.fn(() => fetchFailure(404, "Not found"))
 */

function fetchFailure(status = 404, statusText = "Not Found") {
  return Promise.resolve({
    ok: false,
    status,
    statusText,
    text: () =>
      Promise.resolve(JSON.stringify({ error: "User not registered" })),
  });
}

describe("logIn(unregistered-user)", () => {
  test("prevent unregistered user to log-in when provided with an invalid email and password", async () => {
    global.fetch = jest.fn(() => fetchFailure(TEST_BAD_EMAIL, TEST_PASSWORD));

    const originalAlert = global.alert;
    global.alert = jest.fn();

    try {
      const token = await login(TEST_BAD_EMAIL, TEST_PASSWORD);
    } catch (error) {
      expect(error.message).toBe("User not registered");
    } finally {
      // Restore the original alert function
      global.alert = originalAlert;
    }
  });
});
