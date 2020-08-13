var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
}
$((function() {
    $(document).scroll((function() {
        var t = $("nav");
        var tm = $(".navbar-mobile")
        t.toggleClass("nav-shadow", $(this).scrollTop() > t.height())
        tm.toggleClass("nav-mobile-shadow", $(this).scrollTop() > t.height())
    }
    ))
}
))

