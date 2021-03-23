function menuIcon() {
    document.querySelector('.icon-menu').classList.toggle('open')

    const check = document.querySelector('#hamburger')
    const menuMobile = document.querySelector('.navbar-menu')
    if(check.checked){
        menuMobile.style.right = "-50%"
    } else(
        menuMobile.style.right = "0"
    )
}


