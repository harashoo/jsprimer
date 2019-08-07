
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

{
  function sendPOSTRequest(url, data) {
    const httpRequest = new XMLHttpRequest();
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send(JSON.stringify(data));
    httpRequest.open("POST", url);
  }

  function onLoginFormSubmit(event) {
    const form = event.target;
    const data = {
      userName: form.elements.userName,
      password: form.elements.password,
    };
    sendPOSTRequest("/api/login", data);
  }
}

{
  const listenersMap = new WeakMap();

  class EventEmitter {
    addListener(listener) {
      const listeners = listenersMap.get(this) || [];
      const newListeners = listeners.concat(listener);
      listenersMap.set(this, newListeners);
    }
  }
  
  let eventEmitter = new EventEmitter();

  eventEmitter.addListener(() => {
    console.log("イベントが発火しました");
  });
  eventEmitter = null;
}

{
  const set = new Set();
  set.add("a");
  console.log(set.size);
  set.add("a");
  console.log(set.size);
  console.log(set.has("a"));
  console.log(set.has("b"));
  set.add("b");
  set.delete("a");
  console.log(set.size);
  set.clear();
  console.log(set.size);
}

{
  const set = new Set();
  set.add("a");
  set.add("b");
  const results = [];
  for (const value of set) {
    results.push(value);
  }
  console.log(results);
}