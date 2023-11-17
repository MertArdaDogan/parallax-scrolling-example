let bg          = document.getElementById("bg");
let moon        = document.getElementById("moon");
let mountain    = document.getElementById("mountain");
let road        = document.getElementById("road");
let text        = document.getElementById("text");
// İd'lerden yola çıkarak html elementleri tanımlandı.

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    bg.style.top = value *0.5 + 'px';
    moon.style.left = value *0.5 + 'px';
    mountain.style.top = -value *0.1 + 'px';
    road.style.top = value *0.36 + 'px';
    text.style.top = value *1 + 'px';
})
// window.addEventListener('scroll', function(){}   =Sayfada kaydırma işlemi yapıldığında bir işlevi tetiklemek için kullanılmıitır.
// var value = window.scrollY;                      =Sayfa dikey yönde kaydırıldığında mesafeyi almak için kullanılmıştır.
// value                                            =Yatay yönde ne kadar kaydırma yapıldığını piksel cinsinden temsil eden bir değişken atanmıştır.

// bg.style.top = value *0.5 + 'px';                =Html elementlerinin css kısmında atanan before after stil özelliklerinin değişmesi için kullanılmıştır,
// moon.style.left = value *0.5 + 'px';              stilleri değişirken değerleri hesaplamak için value değişkeni kullanılmıştır. 
// mountain.style.top = -value *0.1 + 'px';          Örnek  =
// road.style.top = value *0.36 + 'px';              road.style.top = value *0.36 + 'px';   =0.36 ile çarparak 'px' birimi ekliyor
// text.style.top = value *1 + 'px';                