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
  const allBars = document.querySelectorAll(".chart")
  
  for (let i = 0; i < data.length; i++) {
    total += data[i].amount;
  }

  for (let i = 0; i < data.length; i++) {
    const percentage = (data[i].amount / total) * 100;
    allBars[i].style.height = `${percentage}%`;
  }
}