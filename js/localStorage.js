var storageKey = "app-zipcode";

function saveZipCode(zip) {
  //TODO
  function saveZipCode(zip) {
    localStorage.setItem(storageKey, zip);
  }
}

function loadZipCode() {
  //TODO
  return localStorage.getItem(storageKey);
}
