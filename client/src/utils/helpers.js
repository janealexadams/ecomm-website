export function pluralize(name, count) {
  if (count === 1) {
    return name
  }
  return name + 's'
}

export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    // Open connection to the database `shop-shop` with the version of 1
    const request = window.indexedDB.open('shop-shop', 1);

    // Create variables to hold reference to the database, transaction (tx), and object store
    let db, tx, store;

    // If version has changed (or if this is the first time using the database), run this method and create the three object stores 
    request.onupgradeneeded = function(e) {
      const db = request.result;
      // Create object store for each type of data and set "primary" key index to be the `_id` of the data
      db.createObjectStore('products', { keyPath: '_id' });
      db.createObjectStore('categories', { keyPath: '_id' });
      db.createObjectStore('cart', { keyPath: '_id' });
    };

    // Handle any errors with connecting
    request.onerror = function(e) {
      console.log('There was an error');
    };

    // On database open success
    request.onsuccess = function(e) {
      // Save a reference of the database to the `db` variable
      db = request.result;
      // Open a transaction do whatever we pass into `storeName` (must match one of the object store names)
      tx = db.transaction(storeName, 'readwrite');
      // Save a reference to that object store
      store = tx.objectStore(storeName);

      // If there's any errors, let us know
      db.onerror = function(e) {
        console.log('error', e);
      };

      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function() {
            resolve(all.result);
          };
          break;
        case 'delete':
          store.delete(object._id);
          break;
        default:
          console.log('No valid method');
          break;
      }

      // wWen the transaction is complete, close the connection
      tx.oncomplete = function() {
        db.close();
      };
    };
  });
}