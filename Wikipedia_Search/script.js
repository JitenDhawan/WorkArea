<!--
if (screen.width <= 699) {
document.location = "mobile.html";
}
//-->
function display() {
    var x = document.getElementById('mbtab');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function search(){
	var name = document.getElementsByName("content")[0].value;
	var l = document.getElementById('language');
	var language=l.options[l.selectedIndex].value;
    name = name.split(" ");
	var finalSearch = "";
	for(var i =0; i < name.length; i++){
    finalSearch=finalSearch+name[i]
    	if(i != name.length-1){
        	finalSearch=finalSearch+"%20";
    	}
	}
	var url="https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles="+finalSearch+"&callback=?";
	$.ajax({
		type:"GET",
		url:url,
		async:false,
		dataType: "json",
		success: function(data){
			convert(data);
		},
		error: function(errorMessage){
			alert("Write Correctly");
		},
	});
}
function convert(data){
	var raw=eval(data["query"]["pages"]);
	for (var key in raw){
		if (raw.hasOwnProperty(key)){
			var op=raw[key]["extract"];
			var hd=raw[key]["title"];
			document.getElementById('heading').innerHTML=hd;
			if(op){
				document.getElementById('output').innerHTML=op;
			}
			else{
				document.getElementById('output').innerHTML="Either this article is not in wikipedia or write it correctly";
			}
		}
	}

}