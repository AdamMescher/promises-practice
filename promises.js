// CODE EXAMPLES FROM:
// https://davidwalsh.name/promises

/* -------------------------------
        BASIC PROMISE USAGE
------------------------------- */

var p = new Promise(function(resolve, reject){
  // Do an async task async and then...

  if (/* happy path */) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

p.then(function() {
  // DO SOMETHING WITH THE RESULT
}).catch(function() {
  // ERROR GOES HERE
});

/* ------------------------------- */

function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status === 200) {
        // RESOLVE PROMISE WITH RESPONSE TEXT
        resolve(req.response);
      } else {
        // OTHERWISE REJECT WITH STATUS TEXT
        // HOPEFULLY A MEANINGFUL ERROR
        reject(Error(req.statusText));
      }
    };

    // HANDLE NETWORK ERRORS
    req.onerror = function() {
      reject(Error("Network Error"));
    };
    // MAKE THE REQUEST
    req.send();
  });
}

// USE IT!

get('story.json').then(function(response)) {
  console.log("Success!", response);
}, function(error) {
  console.error("Failed!", error);
}


/* -------------------------------
        BASIC PROMISE USAGE
------------------------------- */

