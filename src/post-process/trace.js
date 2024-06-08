import loadData from './load-data.js';

export default async function (feature, metric, db) {
  const script = (await import(`../../fixtures/${feature}/index.js`)).default;

  // Pass dependencies array in to avoid load all JSON data
  const depData = await loadData(db, script.dependencies);
  const passData = script.dependencies.map(dep => depData[dep]);

  // Continue next if dependency data does not exist
  if (!passData.every(data => data !== undefined)) {
    return undefined;
  }

  const result = await script.process(...[...script.dependencies.map(dep => depData[dep]), true]);

  if (`trace|${metric}` in result) {
    return result[`trace|${metric}`];
  } else {
    return undefined;
  }
}
