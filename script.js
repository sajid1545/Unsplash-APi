let input = document.getElementById('input')
let picBox = document.querySelector('.pic-box');

input.addEventListener('keydown',function(e){
    if(e.key === "Enter")
    loadImg()
})



function loadImg(){
    removeImg()
    
    let url = 'https://api.unsplash.com/search/photos?query='+ input.value +'&per_page=10&client_id=eJflP1yIayybq5XySWcKhgDTBlNuoa7BVPGvPNAKRWs';

    fetch(url)
    .then(response=>{
        if(response.ok){
            return response.json()
        }else{
            alert(response.status)
        }
    })
    .then(data=>{
        let imgArr = []
        for(let i=0;i<data.results.length;i++){
            imgArr[i] = document.createElement('div')
            imgArr[i].className = 'img'
            imgArr[i].style.backgroundImage = 'url('+data.results[i].urls.raw +')'
            imgArr[i].style.cursor = 'pointer'
            
            imgArr[i].addEventListener('dblclick',function(){
               window.open( data.results[i].links.download,'_blank')
            })

            picBox.appendChild(imgArr[i])
        }
    })
    
}








function removeImg(){
    picBox.innerHTML = ''
}

let body = document.querySelector('body');

let darkLignt = document.querySelector('.darkLight');
darkLignt.addEventListener('click',function(){
    darkLignt.classList.toggle('active')
    body.classList.toggle('dark')
})