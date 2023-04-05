/**
 * Returns extraChromeSyncData keys order by priority property
 * @param {object} extraChromeSyncData 
 * @returns {string[]}
 */
export const getOptionsOrderedKeys = (extraChromeSyncData) => {
  let priorities = {};

  Object.keys(extraChromeSyncData)
    .forEach((item) => priorities[item] = extraChromeSyncData[item].priority);

  const sortable = Object.fromEntries(
    Object.entries(priorities).sort(([, a], [, b]) => a - b)
  );

  return Object.keys(sortable);
}

/**
 * Returns n random extraChromeSyncData keys
 * @param {object} extraChromeSyncData 
 * @param {string[]} nItems 
 * @returns 
 */
export const getOptionsRandomKeys = (extraChromeSyncData, nItems) =>
  Object.keys(extraChromeSyncData)
    .sort(() => .5 - Math.random())
    .slice(0, nItems);
