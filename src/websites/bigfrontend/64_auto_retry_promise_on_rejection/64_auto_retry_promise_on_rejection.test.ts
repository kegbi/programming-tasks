import { describe, it, expect, vi } from "vitest";
import { fetchWithAutoRetry } from "./64_auto_retry_promise_on_rejection";

describe("autoRetryPromiseOnRejection tests", function () {
  it("should pass the first test", async function () {
    const res = fetchWithAutoRetry(() => Promise.resolve(1), 1);
    expect(Object.prototype.toString.call(res)).toBe("[object Promise]");
  });

  it("should pass the second test", async () => {
    try {
      const fetchWithAutoRetry = vi.fn(() => Promise.resolve("bfe"));
      const data = await fetchWithAutoRetry();
      expect(data).toBe("bfe");
    } catch (error) {
      const spy = vi.fn();
      spy();
      expect(spy).not.toHaveBeenCalled();
    }
  });

  it("should pass the third test", async () => {
    let callCount = 0;
    const fetcher = () =>
      new Promise((resolve, reject) => {
        callCount += 1;
        if (callCount >= 3) {
          resolve("bfe");
        } else {
          reject("error");
        }
      });

    try {
      const data = await fetchWithAutoRetry(fetcher, 4);
      expect(callCount).toBe(3);
      expect(data).toBe("bfe");
    } catch (error) {
      const spy = vi.fn();
      spy();
      expect(spy).not.toHaveBeenCalled();
    }
  });

  it("should pass the forth test", async () => {
    let callCount = 0;
    const fetcher = () =>
      new Promise((resolve, reject) => {
        callCount += 1;
        reject("error");
      });

    try {
      await fetchWithAutoRetry(fetcher, 6);
      const spy = vi.fn();
      spy();
      expect(spy).not.toHaveBeenCalled();
    } catch (error) {
      expect(callCount).toBe(7);
      expect(error).toBe("error");
    }
  });
});
