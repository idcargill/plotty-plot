const root = document.querySelector('#root');
// Read file Contents
// FileReader api
const reader = new FileReader();

function handleFile() {
  const results = reader.result;
  const splitResults = results.split('\n');
  console.log(splitResults[0]);
  // root.innerText = splitResults;
  displayData(splitResults);
  // row(splitResults);
}

reader.onload = () => handleFile();

function getFile() {
  const file = document.querySelector('form input').files[0];
  console.log(file);
  // reader.readAsArrayBuffer(file);
  // reader.readAsDataURL(file);
  reader.readAsText(file);
}

function displayData(arrData) {
  const table = document.querySelector('table');

  // check if table exists
  if (!table) {
    const tableDom = document.createElement('table');
    root.append(tableDom);
  }

  // load table
  arrData.forEach((row) => {
    let textArr = row.split(',');
    const rowOfData = textArr.map((i) => {
      const tdDom = document.createElement('td');
      tdDom.textContent = i;
      return tdDom;
    });

    const trDom = document.createElement('tr');
    rowOfData.forEach((i) => {
      trDom.append(i);
    });
    // console.log(trDom);
    table.append(trDom);
  });
}

document.querySelector('input').addEventListener('change', getFile);
