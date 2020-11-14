// function clickMe(){
//     var dots = document.getElementById("dots");
//     dots.innerHTML = "";
// }

function searching(){
    var input = document.getElementById("myInput");
    var upper = input.value.toUpperCase();
    var ul = document.getElementById("myUL") && document.getElementById("pack");
    var li = ul.getElementsByTagName("li") && ul.getElementsByClassName("image");

    
    // var ul = document.getElementById("pack");
    // var li = ul.getElementsByClassName("image");
    for (var i = 0; i < li.length; i++){
        var a = li[i].getElementsByTagName("a")[0];
        var textValue = a.textContent || a.innerText;
        if(textValue.toUpperCase().indexOf(upper) > -1){
            li[i].style.display = ""
        }else{
            li[i].style.display = "none"
        }
    }

}