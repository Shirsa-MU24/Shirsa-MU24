// Hämta inputfältet, knappen och listan från HTML
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//funkitonen för att lägga till en ny uppgift//
function addTask(){

  // kontrollera om inputfället är tomt//
  if (inputBox.value === ''){
    alert(" Du ska skriva ett ord här!");   // visa varning om inputet är tomt //
  }

   // eller skapa ett nytt list-element(li) //
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;    // sätt texten till värdet från inputfältet //
    listContainer.appendChild(li);     // lägg till det i listcontainern //

     // skapa ett nytt span-element för att ta bort uppgiften //
    let span = document.createElement("span");
    span.innerHTML = "x";        // tecknet för att ta bort inputet i listan //
    li.appendChild(span);        // lägg till span i list-elementet//
  }
  inputBox.value = "";           // Rensa inputfältet efter att uppgiften har lagts till //
  saveData();                   // spara alla data till Localstorage//
}

// lägg till en handelshanterare för hela listcontainern//
listContainer.addEventListener("click", function(e){

  // kontrollera om det klickade elementet är ett "li" element//
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("ckecked");  // växla klass för att markera/avmarkera uppgiften som klar//
    saveData();

  }

  // kontrolera om det klickade elementet är ett span-element.//
  else if(e.target.tagName === "SPAN"){    
    e.target.parentElement.remove();          // ta bort hela listpunkten//
    saveData();
    
  }

}, false);

// funktion för att spara listan innehåll till webbläsaren localstorage//
function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);  
}

// funktion för att visa sparade uppgifter från localstroage vid sidladdning//
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data"); // hämta data från localstorage.
} 
showTask();   // visa tidagre sparade uppgifter när sidan laddas om//
