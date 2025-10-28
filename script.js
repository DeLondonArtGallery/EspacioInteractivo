const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
if (hamburger && menu) {
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
        if (hamburger.classList.contains('active')) {
            hamburger.innerHTML = '&times;';
        } else {
            hamburger.innerHTML = '&#9776;';
        }
    });
}

console.log('Archivo JavaScript enlazado correctamente');

// Lista de páginas, socios y palabras clave
const searchData = [
    { name: "Alejandra Mohr", url: "Socios/Alejandra Mohr/alejandra_mohr.html", keywords: ["alejandra", "mohr", "alejandra mohr"] },
    { name: "Antonio Zenardo", url: "Socios/Antonio Zenardo/antonio_zenardo.html", keywords: ["antonio", "zenardo", "antonio zenardo"] },
    { name: "Ariel Tinaglini", url: "Socios/Ariel Tinaglini/ariel_tinaglini.html", keywords: ["ariel", "tinaglini", "ariel tinaglini"] },
    { name: "BTS Army Forever Uruguay 2024", url: "Socios/BTS Army Forever Uruguay 2024/bts_army_forever_uruguay_2024.html", keywords: ["bts", "army", "forever", "uruguay", "bts army forever uruguay 2024"] },
    { name: "Carlos Callejas", url: "Socios/Carlos Callejas/carlos_callejas.html", keywords: ["carlos", "callejas", "carlos callejas"] },
    { name: "Catalina Halles", url: "Socios/Catalina Halles/catalina_halles.html", keywords: ["catalina", "halles", "catalina halles"] },
    { name: "Daren Zule", url: "Socios/Daren Zule/daren_zule.html", keywords: ["daren", "zule", "daren zule"] },
    { name: "De-Cadencia Percusión", url: "Socios/De-Cadencia Percusión/de_cadencia_percusion.html", keywords: ["de-cadencia", "percusión", "de cadencia", "de-cadencia percusión"] },
    { name: "Diego De Simone", url: "Socios/Diego De Simone/diego_de_simone.html", keywords: ["diego", "de simone", "diego de simone"] },
    { name: "Eduardo Peloche", url: "Socios/Eduardo Peloche/eduardo_peloche.html", keywords: ["eduardo", "peloche", "eduardo peloche"] },
    { name: "Elizabeth Pérez", url: "Socios/Elizabeth Pérez/elizabeth_perez.html", keywords: ["elizabeth", "pérez", "elizabeth pérez"] },
    { name: "Giselle Eyheralde", url: "Socios/Giselle Eyheralde/giselle_eyheralde.html", keywords: ["giselle", "eyheralde", "giselle eyheralde"] },
    { name: "Henry Fernández", url: "Socios/Henry Fernández/henry_fernandez.html", keywords: ["henry", "fernández", "henry fernández"] },
    { name: "Sergio Molina Clavijo", url: "Socios/Sergio Molina Clavijo/sergio_molina_clavijo.html", keywords: ["sergio", "molina", "clavijo", "sergio molina clavijo"] },
    { name: "Mabel Clavijo", url: "Socios/Mabel Clavijo/mabel_clavijo.html", keywords: ["mabel", "clavijo", "mabel clavijo"] },
    { name: "Marcelo Pintos", url: "Socios/Marcelo Pintos/marcelo_pintos.html", keywords: ["marcelo", "pintos", "marcelo pintos"] },
    { name: "Miguel Ángel Pérez", url: "Socios/Miguel Ángel Pérez/miguel_angel_perez.html", keywords: ["miguel", "ángel", "perez", "miguel ángel pérez"] },
    { name: "Miriam Sosa", url: "Socios/Miriam Sosa/miriam_sosa.html", keywords: ["miriam", "sosa", "miriam sosa"] },
    { name: "Mónica Burgueño", url: "Socios/Mónica Burgueño/monica_burgueno.html", keywords: ["mónica", "burgueño", "monica burgueno"] },
    { name: "Olga Rigenko", url: "Socios/Olga Rigenko/olga_rigenko.html", keywords: ["olga", "rigenko", "olga rigenko"] },
    { name: "Omar Oxley", url: "Socios/Omar Oxley/omar_oxley.html", keywords: ["omar", "oxley", "omar oxley"] },
    { name: "Rocío Cuervo", url: "Socios/Rocío Cuervo/rocio_cuervo.html", keywords: ["rocío", "cuervo", "rocio cuervo"] },
    { name: "Sarita Galván", url: "Socios/Sarita Galván/sarita_galvan.html", keywords: ["sarita", "galván", "sarita galvan"] },
    { name: "Teto Lagos", url: "Socios/Teto Lagos/teto_lagos.html", keywords: ["teto", "lagos", "teto lagos"] },
    { name: "Valentina Mohr", url: "Socios/Valentina Mohr/valentina_mohr.html", keywords: ["valentina", "mohr", "valentina mohr"] },
    { name: "Washington Gallo", url: "Socios/Washington Gallo/washington_gallo.html", keywords: ["washington", "gallo", "washington gallo"] },
    // Secciones principales
    { name: "Socios", url: "socios.html", keywords: ["socios", "artistas", "integrantes", "miembros"] },
    { name: "Talleres", url: "talleres.html", keywords: ["talleres", "clases", "aprendizaje"] },
    { name: "Eventos", url: "eventos.html", keywords: ["eventos", "agenda", "actividades", "milonga"] },
    { name: "Tienda", url: "tienda.html", keywords: ["tienda", "comprar", "shop", "venta"] },
    { name: "Membresía", url: "membresia.html", keywords: ["membresía", "membresias", "suscripción"] },
    { name: "Blog", url: "https://delondonartgalleryprincipal.blogspot.com/", keywords: ["blog", "noticias", "artículos"] },
    { name: "Exposiciones", url: "https://delondonartgallerycartelera.blogspot.com/", keywords: ["exposiciones", "muestra", "cartelera"] },
    { name: "Contacto", url: "mailto:aespaciointeractivo@gmail.com", keywords: ["contacto", "mail", "correo", "email"] }
];

// Elementos
const searchInput = document.querySelector('.search-bar input[type="text"]');
const searchResults = document.getElementById('search-results');
const searchForm = document.querySelector('.search-bar');

if (searchInput && searchResults && searchForm) {
    // Mostrar sugerencias al escribir
    searchInput.addEventListener('input', function() {
        const query = this.value.trim().toLowerCase();
        searchResults.innerHTML = '';
        if (query.length === 0) return;

        // Buscar coincidencias
        const matches = searchData.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.keywords.some(k => k.includes(query))
        );

        if (matches.length > 0) {
            const ul = document.createElement('ul');
            ul.style.listStyle = 'none';
            ul.style.padding = '0';
            ul.style.margin = '10px 0';
            matches.forEach(item => {
                const li = document.createElement('li');
                li.style.marginBottom = '8px';
                const a = document.createElement('a');
                a.href = item.url;
                a.textContent = item.name;
                // No sobrescribas el color aquí, usa el CSS
                a.style.fontWeight = 'bold';
                a.style.textDecoration = 'none';
                a.style.fontSize = '1.1em';
                a.onmouseover = () => a.style.textDecoration = 'underline';
                a.onmouseout = () => a.style.textDecoration = 'none';
                li.appendChild(a);
                ul.appendChild(li);
            });
            searchResults.appendChild(ul);
        } else {
            searchResults.innerHTML = '<p style="color:#888;">No se encontraron coincidencias.</p>';
        }
    });

    // Ir a la primera coincidencia al enviar el formulario
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        if (query.length === 0) return;
        const match = searchData.find(item =>
            item.name.toLowerCase().includes(query) ||
            item.keywords.some(k => k.includes(query))
        );
        if (match) {
            window.location.href = match.url;
        } else {
            searchResults.innerHTML = '<p style="color:#888;">No se encontraron coincidencias.</p>';
        }
    });
}