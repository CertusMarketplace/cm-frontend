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

// Función Contenido de Dashboard

function loadView(view) {
    fetch(`/marketplace/dashboard/seller/fragments/${view}`)
    .then(res => res.text())
    .then(html => {
        document.getElementById("all-content").innerHTML = html;
    })
}

// Función Estado de Filtro Sidebar

function setActiveSidebarLink(activeId) {
    const links = ['stateLinkWork', 'stateLinkReview', 'stateLinkSales', 'stateLinkSettings', 'stateLinkAccount', 'stateLinkLogout'];
    links.forEach(id => {
        const element = document.getElementById(id);
        if (!element) return;
        if (id === activeId) {
            element.classList.add('bg-skyBlueCertus');
            element.classList.remove('hover:bg-blue-900');
        } else {
            element.classList.remove('bg-skyBlueCertus');
            element.classList.add('hover:bg-blue-900');
        }
    });
}

['stateLinkWork', 'stateLinkReview', 'stateLinkSales', 'stateLinkSettings', 'stateLinkAccount', 'stateLinkLogout'].forEach(id => {
    const element = document.getElementById(id);
    if (!element) return;
    element.addEventListener('click', () => setActiveSidebarLink(id));
});

setActiveSidebarLink('stateLinkWork');