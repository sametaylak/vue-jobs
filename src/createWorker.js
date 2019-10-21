const createWorker = code => {
  const URL = window.URL || window.webkitURL;
  const blob = new Blob([code], { type: 'application/javascript' });
  const objectURL = URL.createObjectURL(blob);
  const worker = new Worker(objectURL);

  worker.post = message => {
    return new Promise((resolve, reject) => {
      worker.onmessage = event => {
        URL.revokeObjectURL(objectURL);
        resolve(event.data);
      };
      worker.onerror = e => {
        console.error(`Error: Line ${e.lineno} in ${e.filename}: ${e.message}`);
        reject(e);
      };
      worker.postMessage({ message });
    });
  };

  return worker;
};

export default createWorker;
