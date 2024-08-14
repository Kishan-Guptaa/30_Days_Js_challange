const APIKey = "ce9068f6";
var input = document.querySelector("#text");
const API = "https://www.omdbapi.com/?t="
const maindiv = document.querySelector('#main');
const carddiv = document.querySelector('.card');
const afterdiv = document.querySelector('.aftermoreInfo');
const title = document.querySelector('#movie-info');
const year = document.querySelector('#additional-info');
const plot = document.querySelector('#plot-info');
const director = document.querySelector('#director-info');
const actor = document.querySelector('#actors-info');
const cardImage = document.querySelector('.card-image');


async function SearchMovie(name){
    try{
        if(!name.trim()){
            alert("Please enter correct movie name");
            return ;
        }
    
    const response = await fetch(API+name+`&apikey=${APIKey}`);
    var data = await response.json();
    if(data.Response == "False"){
        alert("Movie not found - Please check movie name and try again");
        return ;
    }
    console.log(data);
    title.innerHTML = data.Title;
    year.innerHTML = data.Year;
    plot.innerHTML = data.Plot;
    director.innerHTML = data.Director;
    actor.innerHTML = data.Actors;
    console.log(cardImage.src=`${data.Poster}`);

    maindiv.style.display = "None";
    carddiv.style.display = "flex";
    }
    catch(error){
        console.error("Error fetching movie data: ",error);
        alert("An error occurred while fetching movie data. Please try again later.");
    }
    
}
const moreinfobtn = document.querySelector('.more-info-button');
const searchbtn = document.querySelector('#icon');
searchbtn.addEventListener('click',()=>{

        SearchMovie(input.value);
    
})

moreinfobtn.addEventListener('click',()=>{
    afterdiv.classList.add('show');
    
    moreinfobtn.style.display = 'None';
})
