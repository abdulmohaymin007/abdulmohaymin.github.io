const activePage = window.location.pathname.substring ;
const navlinks = document.querySelectorAll ('nav a').forEach(link => {
   if (link.href.includes (`${activePage}`) ) {
   link.classlists.add('active');
   }
}
)

