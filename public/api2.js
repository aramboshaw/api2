
let apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=3IQa6mxWV7BJU9sdptABxOso27v5dcJI37jN8eyA'
//let key = '3IQa6mxWV7BJU9sdptABxOso27v5dcJI37jN8eyA'
//let mainUrl = apodUrl + key
//let apodUrl ='https://api.nasa.gov/planetary/apod?api_key=3IQa6mxWV7BJU9sdptABxOso27v5dcJI37jN8eyA&start_date=2021-02-15&end_date=2021-02-15'
//let apodUrl = 'https://api.nasa.gov/planetary/apod?api_key=3IQa6mxWV7BJU9sdptABxOso27v5dcJI37jN8eyA&start_date=2021-03-09&end_date=2021-03-09'


let resultArea = document.getElementById('render-area');
let startDate = document.querySelector('#start-date');
let endDate = document.querySelector('.end-date');
let submitBtn = document.querySelector('#actualForm');
let title = document.getElementById('explanationDiv');
let searchDisplay = document.getElementById('resultsDisplay');

submitBtn.addEventListener("submit", searchRange);


fetch(apodUrl)
.then(res => res.json())
.then(json => {
  render(json)
})



function render(json) {
  console.log(json);
 let nasaDisplay;

console.log(json.media_type);


  if (json.media_type === "image") {
    let nasaDisplay = document.createElement("img")
    nasaDisplay.src = json.url
    resultArea.append(nasaDisplay);
    let nasaTitle = (json.explanation);
    console.log(nasaTitle);
    nasaTitle = document.createElement("h3");
    nasaTitle.innerText = json.explanation;
    title.append(nasaTitle);
    console.log(nasaDisplay);
    
} else if (json[0].media_type === "video") {
    let nasaDisplay = document.createElement("iframe")
    resultArea.append(nasaDisplay);
    let nasaTitle = (json[0].explanation);
    console.log(nasaTitle);
    nasaTitle = document.createElement("h3");
    nasaTitle.innerText = json[0].explanation;
    title.append(nasaTitle);
    console.log(json[0].media_type);
    console.log(json[0].url);
    nasaDisplay.src = json[0].url

  } else if (json.media_type === "video") {
    let nasaDisplay = document.createElement("iframe")
    resultArea.append(nasaDisplay);
    let nasaTitle = (json.explanation);
    console.log(nasaTitle);
    nasaTitle = document.createElement("h3");
    nasaTitle.innerText = json.explanation;
    title.append(nasaTitle);
    nasaDisplay.src = json.url

  } else {console.log("There's a problem.")}}




function searchRange(e) {
  e.preventDefault();
  console.log(startDate.value);

  
 let newFetch = apodUrl + "&start_date=" + startDate.value
 if(endDate.value !== '') {
  newFetch += '&end_date=' + endDate.value;
};

  console.log(newFetch);
  


  fetch(newFetch)
  .then (function(result) {
    return result.json();
  }).then (function(json) {
    console.log(json);
    displayResults(json);


  });
}


function displayResults(json) {
  while (searchDisplay.firstChild) {
    searchDisplay.removeChild(searchDisplay.firstChild);
  }
  
  
  if (json[0].media_type === "image") { 
    console.log(json);
    for(let i = 0; i < json.length; i++) {
      
      let nasaDisplay = document.createElement("img")
      let nasaTitle = (json[i].explanation);

      console.log(json);
      console.log(nasaTitle);
      console.log(nasaDisplay);

      nasaTitle = document.createElement("h3");

      nasaDisplay.src = json[i].url
      nasaTitle.innerText = json[i].explanation;

      searchDisplay.append(nasaDisplay);
      searchDisplay.appendChild(nasaTitle);
  
    }
  }
}
    




/*
      
         break;    
       case "video":
           for(let i = 0; i < json.length; i++) {
               let nasaDisplay = document.createElement("iframe")
               searchDisplay.append(nasaDisplay);
               let nasaTitle = (json[i].explanation);
               console.log(nasaTitle);
               nasaTitle = document.createElement("h3");
               nasaTitle.innerText = json[i].explanation;
               title.append(nasaTitle);
               console.log(json[i].media_type);
               console.log(json[i].url);
               nasaDisplay.src = json[i].url
             } 
      
         break;
       default:
           console.log("There's a problem.")
          
      }
    }
  */