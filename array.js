let arr  = [
	{
		name:'Jonny Walker',
		birthDate:'1995-12-17'
	},	
	{
		name:'Andrew',
		birthDate:'2001-10-29'
	}		
];
			
function searchByName(name) {
	return arr.filter(function(element){
		return element.name.indexOf(name) != -1;
	});
};
			
let result = searchByName('on');
			
result.forEach(function(element){
	document.body.innerHTML += element.name + ' ';
});