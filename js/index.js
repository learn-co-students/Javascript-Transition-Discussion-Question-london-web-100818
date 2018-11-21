const button = document.getElementById('save_lincoln')
const image = document.getElementById('foreground')


button.addEventListener('click', e =>{
  const input = document.getElementById('interval')
  secs = input.value / 1000
  image.style.transitionDuration = `${secs}s`
  image.style.opacity = 0  
})

