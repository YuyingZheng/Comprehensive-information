// variable step-1
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var usCheckd = document.getElementById("us");
var ukCheckd = document.getElementById("uk");
var story = document.querySelector('.story');

//step -2 data

var storyText ="It was 94 farenheit outside, so <b>:insertx:</b> went for a walk. When they got to :<b>:inserty:</b>,\
				they stared in horror for a few moments, then <b>:insertz:</b>. <b style='color:red'>Bob</b> saw the whole thing, but \
				he was not surprised — <b>:insertx:</b> weighs 300 pounds, and it was a hot day.",
	insertX = ['Willy the Goblin','Big Daddy','Father Christmas'],
	insertY = ['the soup kitchen','Disneyland','the White House'],
	insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

function randomValueFromArray(array){
	var randomArray = array[Math.floor(Math.random()*array.length)];
  	return randomArray;
}
// step - 3 Event

randomize.addEventListener("click", result);

function result(){

	var newStory = storyText;
	var xItem = randomValueFromArray(insertX);
	var yItem = randomValueFromArray(insertY);
	var zItem = randomValueFromArray(insertZ);

	newStory = newStory.replace(/:insertx:/gi,xItem).replace(/:inserty:/gi,yItem).replace(/:insertz:/gi,zItem);

	if(customname.value !=""){
		var name = customname.value;
		newStory = newStory.replace('Bob',name);
	}
	if(ukCheckd.checked){
		var usfarenheit  = "94 farenheit";
		var uspounds = "300 pounds";
		var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
		var weight = Math.round(300*0.0714286) + ' stone';

		newStory = newStory.replace(usfarenheit,temperature).replace(uspounds,weight);
	}

	story.innerHTML= newStory;
	story.style.visibility = 'visible';

}