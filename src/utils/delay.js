/**
 * Sleep for ms
 *
 * @param {number} ms - milliseconds to sleep
 *
 * @returns {Promise<number>} milliseconds sleeping
 */
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ms), ms);
  });
}

/**
 * Random time sleep
 *
 * @param {number} msMaxDelay - max time for sleep
 *
 * @returns {Promise<number>} milliseconds sleeping
 */
function randomDelay(msMaxDelay = 5000) {
  return delay(Math.ceil(Math.random() * msMaxDelay));
}

export { delay, randomDelay };
