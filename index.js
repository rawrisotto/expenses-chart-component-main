window.onload = function() {
  const data = fetch("./data.json");

  data
    .then(response => {
      const processingResponse = response.json();
      return processingResponse;
    })
    .then(processedResponse => {
      processData(processedResponse);
    })
}

function processData(data) {
  let total = 0;
  let highest = 0;
  const allBars = document.querySelectorAll(".chart")
  const allHovers = document.querySelectorAll(".chart-hover");
  
  for (let i = 0; i < data.length; i++) {
    total += data[i].amount;
    if (data[i].amount > highest) {
      highest = data[i].amount;
    }
  }

  for (let i = 0; i < data.length; i++) {
    const height = (data[i].amount / highest) * 150;
    console.log(height);
    allBars[i].style.height = `${height}px`;
    allHovers[i].textContent = `${data[i].amount}`;
    allHovers[i].style.marginBottom = `${height + 35}px`;
  }
}