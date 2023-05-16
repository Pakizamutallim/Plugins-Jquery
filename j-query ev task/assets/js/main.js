// Iki input və düymə verilir, istifadəçi 1 inputa ad daxil edir və düyməyə 
// kliklədikdə inputdakı dəyər listə əlavə olunur (jquerydə append funksiyası var,
// onunla yazın). Digər input isə listdə olan adları axtarmaq üçün istifadə olunur
// və yazdıqca axtarışın nəticəsinə uyğun olan list itemları görsənir. 


// const btn = document.getElementById("btn")
// const name = document.querySelector(".name")

$(document).ready(function(){ 
    $("#btn").click(function(){
        $("ul").append(`<li><span>${$(".name").val()}</span></li>`)
    })
})



