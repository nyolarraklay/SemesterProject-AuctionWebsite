import { login, defaultRedirectCallback } from "./logIn.js";
import { save, remove, load } from "../storage/index.js";

const mockLocation = {
  href: "",
  assign: jest.fn(),
};

Object.defineProperty(global, "window", {
  value: { location: mockLocation },
});

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe("storage", () => {
  it("Saves an array to storage", () => {
    const key = "test";
    const value = ["testName", "testPassword"];
    const serializedValue = JSON.stringify(value);
    save(key, value);
    expect(localStorage.getItem(key)).toEqual(serializedValue);
  });

  it("Loads an array from storage", () => {
    const key = "test";
    const value = ["testName", "testPassword"];
    save(key, value);
    expect(load(key)).toEqual(value);
  });

  it("Removes an array from storage", () => {
    const key = "test";
    const value = ["testName", "testPassword"];
    save(key, value);
    expect(load(key)).toEqual(value);
    remove(key);
    expect(load(key)).toEqual(null);
  });
});

const TEST_EMAIL = "asasas@noroff.no";
const TEST_PASSWORD = "password";

const TEST_TOKEN = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODg4LCJuYW1lIjoiYXNhc2FzIiwiZW1haWwiOiJhc2FzYUBub3JvZmYubm8iLCJhdmF0YXIiOiJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tLzgzIiwiY3JlZGl0cyI6ODAwLCJ3aW5zIjpbXSwiaWF0IjoxNzAyMDM2NjUyfQ.-QdxklhDbNochcnxYOuolw5HhsD9WLvchoCxKtEqpVw",
};

/**
 * A mock fetch that fetches successfully
 * @param {string} email the email of the user
 * @param {string} password a valid password of the user
 * @returns {Promise<object>} A promise that resolves to the login details
 * @example
 * global.fetch = jest.fn(() => fetchSuccess())
 */

function fetchSuccess(email = TEST_EMAIL, password = TEST_PASSWORD) {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "OK",
    json: () => Promise.resolve(TEST_TOKEN),
  });
}

describe("logIn", () => {
  it("Fetches and stores a token in browser storage when provided with a valid email and password ", async () => {
    global.fetch = jest.fn(() => fetchSuccess(TEST_EMAIL, TEST_PASSWORD));
    const token = await login(TEST_EMAIL, TEST_PASSWORD, mockRedirectCallback);
    expect(mockLocation.href).toBe("./src/html/homePage.html");
    expect(token).toEqual(TEST_TOKEN);
  });
});

function mockRedirectCallback(url) {
  mockLocation.href = url;
}
