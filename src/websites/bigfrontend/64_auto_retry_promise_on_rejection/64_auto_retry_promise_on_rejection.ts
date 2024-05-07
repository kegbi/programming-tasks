/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
export function fetchWithAutoRetry<T>(
  fetcher: () => Promise<T>,
  maximumRetryCount?: number,
): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    function attemptFetch(currentRetryCounter?: number): Promise<void> {
      return fetcher()
        .then(resolve)
        .catch((error) => {
          const newRetryCounter = (currentRetryCounter || 0) - 1;

          if (newRetryCounter >= 0) {
            return attemptFetch(newRetryCounter);
          } else {
            reject(error);
          }
        });
    }

    attemptFetch(maximumRetryCount);
  });
}
