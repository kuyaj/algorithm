
function getPhoto(){
    
    let image_src = document.getElementById('photo').value
    document.getElementById('showPhoto').src = image_src.slice(12);
    console.log(image_src.slice(12));
}