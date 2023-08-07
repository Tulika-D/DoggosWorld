const searchInput = document.getElementById('search')
const suggestionsContainer = document.getElementById('suggestions-container')

const suggestions = [ "Beagle",
"Bernese Mountain Dog",
"Border Collie",
"Boxer",
"Chihuahua",
"Chow Chow",
"Doberman",
"English Bulldog",
"English Cocker Spaniel",
"French Bulldog",
"German Sheperd",
"Golden Retriver",
"Great Dane",
"Maltese",
"Pomeranian",
"Pug",
"Rotweiller",
"Saint Bernard",
"Shih Tzu",
"Toy Poddle"]

// Event listener for user input
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.trim();
    
    // Clear the previous suggestions
    suggestionsContainer.innerHTML = '';
    
    // Filter suggestions based on user input
    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Display the filtered suggestions
    filteredSuggestions.forEach(suggestion => {
        const suggestionItem = document.createElement('div');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.textContent = suggestion;
        suggestionsContainer.appendChild(suggestionItem);
    });

    // Show or hide the suggestions container based on input
    if (searchTerm.length > 0 && filteredSuggestions.length > 0) {
        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
});

// Event listener to populate the search input when a suggestion is clicked
suggestionsContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('suggestion-item')) {
        searchInput.value = event.target.textContent;
        suggestionsContainer.style.display = 'none';
    }
});

const expandAge = document.querySelector('.ageExpand')
const ageContainer = document.querySelector('.avg-ageContainer')
const toggleAgeIcon = document.querySelector('.toggleAge-icon')
function toggleAgeCheckboxes() {
    // ageContainer.style.display = ageContainer.style.display === 'none' ? 'flex' : 'none';
    ageContainer.classList.toggle('show'); // Toggle the 'show' class on the ageContainer
    
    // Update the toggle icon based on the 'show' class
    if (ageContainer.classList.contains('show')) {
        toggleAgeIcon.textContent = '-'; // Set the icon to "-"
    } else {
        toggleAgeIcon.textContent = '+'; // Set the icon to "+"
    }
}
expandAge.addEventListener('click', toggleAgeCheckboxes)

const expandSize = document.querySelector('.sizeExpand')
const sizeContainer = document.querySelector('.sizeContainer')
const toggleSizeIcon = document.querySelector('.toggleSize-icon')
function toggleSizeCheckboxes() {
    // sizeContainer.style.display = sizeContainer.style.display === 'none' ? 'flex' : 'none';
    sizeContainer.classList.toggle('show'); // Toggle the 'show' class on the ageContainer
    
    // Update the toggle icon based on the 'show' class
    if (sizeContainer.classList.contains('show')) {
        toggleSizeIcon.textContent = '-'; // Set the icon to "-"
    } else {
        toggleSizeIcon.textContent = '+'; // Set the icon to "+"
    }
}
expandSize.addEventListener('click', toggleSizeCheckboxes)

const expandWeight = document.querySelector('.weightExpand')
const weightContainer = document.querySelector('.weightContainer')
const toggleWeightIcon = document.querySelector('.toggleWeight-icon')
function toggleWeightCheckboxes() {
    // weightContainer.style.display = weightContainer.style.display === 'none' ? 'flex' : 'none';
    weightContainer.classList.toggle('show'); // Toggle the 'show' class on the ageContainer
    
    // Update the toggle icon based on the 'show' class
    if (weightContainer.classList.contains('show')) {
        toggleWeightIcon.textContent = '-'; // Set the icon to "-"
    } else {
        toggleWeightIcon.textContent = '+'; // Set the icon to "+"
    }
}
expandWeight.addEventListener('click', toggleWeightCheckboxes)

const expandCoat = document.querySelector('.coatExpand')
const coatContainer = document.querySelector('.coatContainer')
const toggleCoatIcon = document.querySelector('.toggleCoat-icon')
function toggleCoatCheckboxes() {
    // coatContainer.style.display = coatContainer.style.display === 'none' ? 'flex' : 'none';
    coatContainer.classList.toggle('show'); // Toggle the 'show' class on the ageContainer
    
    // Update the toggle icon based on the 'show' class
    if (coatContainer.classList.contains('show')) {
        toggleCoatIcon.textContent = '-'; // Set the icon to "-"
    } else {
        toggleCoatIcon.textContent = '+'; // Set the icon to "+"
    }
}
expandCoat.addEventListener('click', toggleCoatCheckboxes)

const dogInfo = [
{
    dogName:"Beagle", 
    imgPath:"Assets/beagle.jpeg",
    avg:"12-15 years",
    weight:"9-11 kg",
    coatType:"Double Coat"
},
{
    dogName:"Bernese Mountain Dog", 
    imgPath:'Assets/BerneseMountainDog.jpeg',
    avgAge:"",
},
{dogName:"Border Collie", imgPath:"Assets/borderCollie.jpeg"},
{dogName:"Boxer", imgPath:"Assets/Boxer.jpeg"},
{dogName:"Chi Hua Hua", imgPath:"Assets/chihuahua.jpeg"},
{dogName:"Chow Chow", imgPath:"Assets/chowchow.jpeg"},
{dogName:"Doberman", imgPath:"Assets/doberman.jpeg"},
{dogName:"English Bulldog", imgPath:"Assets/englishBulldog.jpeg"},
{dogName:"English Cocker Spaniel", imgPath:"Assets/englishCockerSpaniel.jpeg"},
{dogName:"French Bulldog", imgPath:"Assets/Frenchbulldogs.jpeg"},
{dogName:"German Sheperd", imgPath:"Assets/germanSheperd.jpeg"},
{dogName:"Golden Retriver", imgPath:"Assets/goldenRetriver.jpeg"},
{dogName:"Great Dane", imgPath:"Assets/greatDane.jpeg"},
{dogName:"Maltese", imgPath:"Assets/Maltese.jpeg"},
{dogName:"Pomeranian", imgPath:"Assets/Pomeranian.jpeg"},
{dogName:"Pug", imgPath:"Assets/pug.jpeg"},
{dogName:"Rotweiller", imgPath:"Assets/rotweiller.jpeg"},
{dogName:"Saint Bernerd", imgPath:"Assets/saintBernerd.jpeg"},
{dogName:"Shih Tzu", imgPath:"Assets/shihTzu.jpeg"},
{dogName:"Toy Poodle", imgPath:"Assets/toyPoodle.jpeg"}]

const imageContainer = document.getElementById("imageContainer")

dogInfo.forEach(dog=>{
    const card= document.createElement('div')
    card.classList.add('card')
    card.innerHTML=`
                            <h4 class="dogname">${dog.dogName}</h4>
                            <img src="${dog.imgPath}" class="img-responsive dogs" alt="Image description">
                            <div class="card-buttons">
                                <button class="like-btn"><i class="fas fa-thumbs-up"></i>Like</button>
                                <button class="share-btn"><i class="fas fa-share"></i>Share</button>
                                <but<ton class="info-btn"><i class="fas fa-info-circle"></i>Info</button>
                            </div>
                            <div class="floating-window">
                                <div class="platform">
                                    <a href="#" class="platform-link">
                                        <i class="fab fa-facebook"></i>
                                        <span class="platform-name">Facebook</span>
                                    </a>
                                </div>
                                <div class="platform">
                                    <a href="#" class="platform-link">
                                        <i class="fab fa-twitter"></i>
                                        <span class="platform-name">Twitter</span>
                                    </a>
                                </div>
                                <div class="platform">
                                    <a href="#" class="platform-link">
                                        <i class="fab fa-whatsapp"></i>
                                        <span class="platform-name">Whatsapp</span>
                                    </a>
                                </div>
                                <div class="platform">
                                    <a href="#" class="platform-link">
                                        <i class="fa-regular fa-envelope"></i>
                                        <span class="platform-name">Mail</span>
                                    </a>
                                </div>
                                <div class="platform">
                                    <a href="#" class="platform-link">
                                        <i class="fa-regular fa-paper-plane"></i>
                                        <span class="platform-name">Telegram</span>
                                    </a>
                                </div>
                            </div>
                        `
                        imageContainer.appendChild(card)
})
const likeButtons = document.getElementsByClassName('like-btn')

function toggleLikeButton(){
    this.classList.toggle('selected')
}
for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener('click', toggleLikeButton);
}

const shareButtons = document.getElementsByClassName('share-btn')
const floatingWindows = document.getElementsByClassName('floating-window')
console.log(floatingWindows)
function toggleFloatingWindow(i){
        const floatingWindow = floatingWindows[i]
        console.log(floatingWindow)
        console.log(i)
        floatingWindow.classList.toggle('show')
        if (floatingWindow.classList.contains('show')) {
            floatingWindow.style.display = 'block';
        } else {
                floatingWindow.style.display = 'none';
        }
}

for(let i=0; i<shareButtons.length; i++){
    shareButtons[i].addEventListener('click', ()=>toggleFloatingWindow(i))
}
