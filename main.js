const wrapper = document.getElementById('wrapper')
const images = document.querySelectorAll('.image')
const menuoption1 = document.querySelector('.option-menu1')
const menuoption2 = document.querySelector('.option-menu2')
const options = document.getElementById('menu-back')
const toggle = document.querySelector('.toggle')
const light = document.getElementById('light')
const dark = document.getElementById('dark')
const bodyel = document.querySelector('body')
const imageview = document.querySelector('.imgview')
const exit = document.querySelector('.exit-img')
const folder = document.querySelector('.folder')

const darksetdata = localStorage.getItem('darkset')
 if (darksetdata == 'active') {
   bodyel.classList.add('darkmode')
 }
  if (bodyel.className == 'darkmode') {
    dark.style.display = 'none'
    light.style.display = 'block'
  }
  else {
    dark.style.display = 'block'
    light.style.display = 'none'
  }

function setimage() {
 images.forEach((img,i)=>{
   img.innerHTML = `<img src="./images/image${i+1}.jpg"/>`
 })
}

setimage()

menuoption2.addEventListener('click',()=>{
 options.style.display = 'flex'
 menuoption2.style.display = 'none'
 menuoption1.style.display = 'block'
 

})

menuoption1.addEventListener('click', () => {
  menuoption1.style.display = 'none'
  menuoption2.style.display = 'block'
  options.style.display = 'none'
})


function setdarkmode() {
return  bodyel.classList.toggle('darkmode')

  

 
}

function savedarkmode() {
  
 
 if (bodyel.className == 'darkmode') {
   
return  darksave = localStorage.setItem('darkset', JSON.stringify('active'))
  } else {
return  darksave = localStorage.setItem('darkset', '')
  }
 
 
}

  
toggle.addEventListener('click',()=>{
 setdarkmode()
 savedarkmode()
 setTimeout(()=>{
   if (bodyel.className == 'darkmode') {
     dark.style.display = 'none'
     light.style.display = 'block'
     options.style.border = '1px solid var(--text)'
     images.forEach(div =>{
       div.style.border = '1px solid var(--text)'
     })
   }
   else {
     dark.style.display = 'block'
     light.style.display = 'none'
     options.style.border = 'none'
     images.forEach(div => {
       div.style.border = 'none'
     })
   }
 },100)
  
})

  if (window.innerWidth <= 360) {
    toggle.style.width = '30px'
    toggle.style.height = '30px'
    toggle.style.marginLeft = '15px'
    toggle.firstElementChild.style.fontSize = '1em'
    toggle.lastElementChild.style.fontSize = '1em'
    document.querySelector('.header').style.height = '70px'
    document.querySelector('h1').style.fontSize = '2em'
    document.querySelector('.option-menu1').style.fontSize = '1.7em'
    document.querySelector('.option-menu1').style.marginRight = '10px'
    document.querySelector('.option-menu2').style.fontSize = '1.7em'
    document.querySelector('.option-menu2').style.marginRight = '10px'
  }
  
  let indexF;
  
  images.forEach((image, index)=>{
    image.addEventListener('click',()=>{
      indexF = index
     imageview.style.display = 'flex'
     exit.style.display = 'block'
     imageview.innerHTML = `<img src="./images/image${indexF + 1}.jpg" alt='image' draggable="true"/>`
     options.style.display = 'none'
    })
  })

exit.addEventListener('click', ()=>{
  imageview.style.display = 'none'
  exit.style.display = 'none'
  
})

let section;

images.forEach((img,i) =>{
  img.addEventListener('dragstart', (e)=>{
     section = i
    console.log(section)
  })
})
  folder.addEventListener('dragover', (e)=>{
  e.preventDefault()
  })
  
  folder.addEventListener('drop', (e) => {
    
    fold = `<img class="folder-images" src="./images/image${section +  1}.jpg" alt='image' />`
    folder.insertAdjacentHTML('beforeend',fold)
  })

console.log(section)