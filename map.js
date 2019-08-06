
{
  const map = new Map([["key1", "value1"], ["key2", "value2"]]);
  const keys = [];
  for (const key of map.keys()) {
    keys.push(key);
  }
  console.log(keys);

  const keysArray = Array.from(map.keys());
  console.log(keysArray);

  const entries = [];
  for (const [key, value] of map.entries()) {
    entries.push(`${key}:${value}`);
  }
  console.log(entries);

  const results = [];
  for (const [key, value] of map) {
    results.push(`${key}:${value}`);
  }
  console.log(results);
}

