// Función Header


function headerHome() {
    
    const burguer = document.getElementById('burguer');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');

   if ( burguer && sidebar && closeSidebar ) {

    burguer.addEventListener('click', () => {
        sidebar.classList.remove('translate-x-full');
    })

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.add('translate-x-full');
    })

    window.addEventListener('resize', () => {
        if ( window.innerWidth >= 1100 ) {
            sidebar.classList.add('translate-x-full');
        }
    })
    
   }
}

headerHome();

// Active Sidebar Clase Link

function activeLinkSidebar () { 

    if ( activePublication ) {
        
        const activePublication = document.getElementById('activePublication');

        activePublication.classList.add('bg-skyBlueCertus')
        activePublication.classList.add('text-white')

        activePublication.addEventListener('mouseover', () => {
            activePublication.classList.remove('hover:bg-skyBlueCertus')
        })

    }  
}

activeLinkSidebar();







