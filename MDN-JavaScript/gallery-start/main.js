window.onload = function() {
    var displayedImage = document.querySelector('.displayed-img');
    var thumbBar = document.querySelector('.thumb-bar');

    var btn = document.querySelector('button');
    var overlay = document.querySelector('.overlay');

    /* Looping through images */

    for (var i = 1; i <= 5; i++) {
        var newImage = document.createElement('img');
        newImage.setAttribute('src', './images/pic' + i + '.jpg');
        thumbBar.appendChild(newImage);
        newImage.addEventListener('click',showImg)
    }
    function showImg(e){
    	var imgSrc = e.target.getAttribute('src');
    	displayedImage.setAttribute('src',imgSrc);
    }
    btn.onclick =function(){
    	if(this.getAttribute('class') === 'dark'){
    		this.setAttribute('class','light');
    		this.textContent = 'light';
    		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    	}else{
    		this.setAttribute('class','dark');
    		this.textContent = 'dark';
    		overlay.style.backgroundColor ="rgba(0,0,0,0)";
    	}
    }
    /* Wiring up the Darken/Lighten button */
}