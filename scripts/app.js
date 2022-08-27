const navLink = document.getElementsByClassName('nav-link')

if(window.location.pathname == '/portfolio/pages/projects.html') {
    navLink[1].classList.add('link-active')
}
else if(window.location.pathname == '/portfolio/pages/blogs.html') {
    navLink[2].classList.add('link-active')
}
else {
    navLink[0].classList.add('link-active')
}
