let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

const getData=async (searchValue)=>{
    let data= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`);
    let jsonData = await data.json();

     document.querySelector(".text").innerHTML=""

     let div=document.createElement("div");
      div.classList.add("details");
      div.innerHTML = `

      <h2>Word :<span id="word">${jsonData[0].word} </span></h2>
      <p id="partOfSpeech">${jsonData[0].meanings[0].partOfSpeech} </p>
      <p>Meaning :  <span id="meaning">${jsonData[0].meanings[0].definitions[0].definition} </span></p>
      <p id="example">Example :  <span>${jsonData[0].meanings[0].definitions[0].example == undefined ? "Not Found" : ""} </span></p>
      <p class="Synonyms">Synonyms :  <span id="synonyms"> ${jsonData[0].meanings[0].synonyms} </span></p>
      <a href=${jsonData[0].sourceUrls[0]} target="_blank" class="readmore">Read More </a>`;
   
     document.querySelector(".text").appendChild(div)

    console.log(jsonData);
    console.log(jsonData[0].word);
    console.log(jsonData[0].meanings[0].definitions[0].definition);
    // console.log(jsonData[0].meanings[0].definitions[0].example);
    // console.log(jsonData[0].meanings[0].synonyms)

}
searchBtn.addEventListener("click" , function(){
    let searchValue = searchInput.value;
     if(searchValue == ""){
         alert("First Enter Word")
     }
     else{
         getData(searchValue)
     }
 })
