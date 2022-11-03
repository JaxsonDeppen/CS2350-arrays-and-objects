//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
import { movies } from './movies'

for(let m of movies){
    let m_thumb = document.getElementById('m' + m.id)
    m_thumb.innerHTML = ` 
    <img src="${m.poster}" alt="${m.title}" class="img-thumbnail"/> 
    
    `
    m_thumb.onclick = function(){
        displayMovie(m)
    }
    
}