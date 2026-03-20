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
    { name: "Olga Risgenko", url: "Socios/Olga Risgenko/olga_risgenko.html", keywords: ["olga", "risgenko", "olga risgenko"] },
    { name: "Omar Oxley", url: "Socios/Omar Oxley/omar_oxley.html", keywords: ["omar", "oxley", "omar oxley"] },
    { name: "Rocío Cuervo", url: "Socios/Rocío Cuervo/rocio_cuervo.html", keywords: ["rocío", "cuervo", "rocio cuervo"] },
    { name: "Sarita Galván", url: "Socios/Sarita Galván/sarita_galvan.html", keywords: ["sarita", "galván", "sarita galvan"] },
    { name: "Teto Lagos", url: "Socios/Teto Lagos/teto_lagos.html", keywords: ["teto", "lagos", "teto lagos"] },
    { name: "Tusuyllacta", url: "Socios/Tusuyllacta/tusuyllacta.html", keywords: ["tusuyllacta", "grupo cultural", "danzas peruanas", "tusuyllacta uruguay"] },
    { name: "Valentina Mohr", url: "Socios/Valentina Mohr/valentina_mohr.html", keywords: ["valentina", "mohr", "valentina mohr"] },
    { name: "Washington Gallo", url: "Socios/Washington Gallo/washington_gallo.html", keywords: ["washington", "gallo", "washington gallo"] },
    { name: "Ana Rapanello", url: "Socios/Ana Rapanello/ana_rapanello.html", keywords: ["ana", "rapanello", "ana rapanello"] },
    { name: "Angel Banega", url: "Socios/Angel Banega/angel_banega.html", keywords: ["angel", "banega", "angel banega"] },
    { name: "Emys Saravia", url: "Socios/Emys Saravia/emys_saravia.html", keywords: ["emys", "saravia", "emys saravia"] },
    { name: "Estela Silva", url: "Socios/Estela Silva/estela_silva.html", keywords: ["estela", "silva", "estela silva"] },
    { name: "Florencia Lima", url: "Socios/Florencia Lima/florencia_lima.html", keywords: ["florencia", "lima", "florencia lima"] },
    { name: "Gabriel Bofi", url: "Socios/Gabriel Bofi/gabriel_bofi.html", keywords: ["gabriel", "bofi", "gabriel bofi"] },
    { name: "Mirta Perez", url: "Socios/Mirta Perez/mirta_perez.html", keywords: ["mirta", "perez", "mirta perez"] },
    { name: "Paolo Nievas", url: "Socios/Paolo Nievas/paolo_nievas.html", keywords: ["paolo", "nievas", "paolo nievas"] },
    { name: "Patricia Olivera", url: "Socios/Patricia Olivera/patricia_olivera.html", keywords: ["patricia", "olivera", "patricia olivera"] },
    { name: "Soledad Silva", url: "Socios/Soledad Silva/soledad_silva.html", keywords: ["soledad", "silva", "soledad silva"] },
    { name: "Thiare Arguello", url: "Socios/Thiare Arguello/thiare_arguello.html", keywords: ["thiare", "arguello", "thiare arguello"] },
    { name: "Taller Tsadee", url: "Socios/Taller Tsadee/taller_tsadee.html", keywords: ["taller", "tsadee", "taller tsadee"] },
    { name: "Homenaje a Sergio Clavijo", url: "Socios/Homenaje a Sergio Clavijo/sergio_clavijo.html", keywords: ["homenaje", "sergio", "clavijo", "homenaje sergio clavijo"] },
    { name: "Henry Hernández", url: "Socios/Henry Hernández/henry_hernandez.html", keywords: ["henry", "hernández", "henry hernández"] },
    { name: "Marcelo Eduardo Pinto Ortega", url: "Socios/Marcelo Eduardo Pinto Ortega/marcelo_pinto.html", keywords: ["marcelo", "eduardo", "pinto", "ortega", "marcelo pinto"] },
    { name: "Monica Burgueño", url: "Socios/Monica Burgueño/monica_burgueño.html", keywords: ["monica", "burgueño", "monica burgueño"] },
    
    // Secciones principales
    { name: "Socios", url: "socios.html", keywords: ["socios", "artistas", "integrantes", "miembros"] },
    { name: "Talleres", url: "talleres.html", keywords: ["talleres", "clases", "aprendizaje"] },
    { name: "Eventos", url: "eventos.html", keywords: ["eventos", "agenda", "actividades", "milonga"] },
    { name: "Tienda", url: "tienda.html", keywords: ["tienda", "comprar", "shop", "venta"] },
    { name: "Membresía", url: "membresia.html", keywords: ["membresía", "membresias", "suscripción"] },
    { name: "Blog", url: "https://delondonartgalleryprincipal.blogspot.com/", keywords: ["blog", "noticias", "artículos"] },
    { name: "Exposiciones", url: "https://delondonartgallerycartelera.blogspot.com/", keywords: ["exposiciones", "muestra", "cartelera"] },
    { name: "Contacto", url: "mailto:aespaciointeractivo@gmail.com", keywords: ["contacto", "mail", "correo", "email"] },
    // Eventos específicos
    { name: "Evento ADA", url: "eventos/ada.html", keywords: ["ada", "evento ada"] },
    { name: "BTS 14-03-2026", url: "eventos/bts_14_03_2026.html", keywords: ["bts", "14-03-2026", "evento bts"] },
    { name: "Diálibro", url: "eventos/dialibro.html", keywords: ["dialibro", "evento dialibro"] },
    { name: "Doglia", url: "eventos/doglia.html", keywords: ["doglia", "evento doglia"] },
    { name: "Exposición Artistas", url: "eventos/expo.artistas.html", keywords: ["exposición artistas", "expo artistas"] },
    { name: "Exposición Artistas 02-08", url: "eventos/expo.artistas.02_08.html", keywords: ["exposición artistas 02-08", "expo 02-08"] },
    { name: "Museos en la Noche 2025", url: "eventos/museos_2025.html", keywords: ["museos 2025", "noche museos", "evento museos"] },
    { name: "Piriápolis 02-26", url: "eventos/piria_02_26.html", keywords: ["piriápolis", "02-26", "evento piriápolis"] },
    { name: "Pre Día de los Enamorados", url: "eventos/pre_dia_enamorados.html", keywords: ["pre día enamorados", "enamorados", "evento enamorados"] },
    { name: "The Bardo", url: "eventos/the_bardo.html", keywords: ["the bardo", "evento bardo"] },
    // Subpáginas de Talleres
    { name: "Talleres de Idiomas", url: "Talleres/Idiomas/idioma.html", keywords: ["idiomas", "talleres idiomas", "clases idiomas"] },
    { name: "Taller de Portugués", url: "Talleres/Idiomas/Portugués/portugues.html", keywords: ["portugués", "taller portugués", "idioma portugués"] },
    { name: "Formación en Práctica Artística", url: "Talleres/Formación en práctica artística/formacion_pa.html", keywords: ["formación", "práctica artística", "formacion pa"] },
    { name: "Taller de Dibujo", url: "Talleres/Dibujo/dibujo.html", keywords: ["dibujo", "taller dibujo", "clases dibujo"] },
    { name: "Dibujo de Figura Humana", url: "Talleres/Dibujo/Figura Humana/figura.html", keywords: ["figura humana", "dibujo figura", "taller figura"] },
    { name: "Corte y Confección", url: "Talleres/Corte y confección/corte_y_confeccion.html", keywords: ["corte", "confección", "corte confeccion"] },
    { name: "Taller de Canto", url: "Talleres/Canto/canto.html", keywords: ["canto", "taller canto", "clases canto"] },
    { name: "Taller de Batería", url: "Talleres/Batería/bateria.html", keywords: ["batería", "taller batería", "percusión"] },
    { name: "Batería con Eduardo Peloche", url: "Talleres/Batería/Eduardo Peloche bata/edu_pelo_bata.html", keywords: ["eduardo peloche", "batería eduardo", "bateria peloche"] },
    { name: "Batería De-Cadencia", url: "Talleres/Batería/De-Cadencia/de_cadencia.html", keywords: ["de-cadencia", "batería de-cadencia", "percusión de-cadencia"] },
    // Subcategorías de Tienda
    { name: "Amigurumis", url: "Tienda/Amigurumis/amigorumis.html", keywords: ["amigurumis", "tejidos", "artesanías"] },
    { name: "Aperitivos", url: "Tienda/Aperitivos/aperitivos.html", keywords: ["aperitivos", "comida", "productos"] },
    { name: "Arte con Luces", url: "Tienda/Arte con Luces/arte_con_luces.html", keywords: ["arte luces", "iluminación", "arte"] },
    { name: "Arte en Botellas", url: "Tienda/Arte en Botellas/arte_con_botellas.html", keywords: ["arte botellas", "botellas", "reciclaje"] },
    { name: "Collage", url: "Tienda/Collage/collage.html", keywords: ["collage", "arte collage"] },
    { name: "Cuadernos Artesanales", url: "Tienda/Cuadernos artesanales/cuadernos_artesanales.html", keywords: ["cuadernos", "artesanales", "libros"] },
    { name: "Cuadros", url: "Tienda/Cuadros/cuadros.html", keywords: ["cuadros", "pinturas", "arte"] },
    { name: "Deco-Hogar", url: "Tienda/Deco-Hogar/deco_hogar.html", keywords: ["deco hogar", "decoración", "hogar"] },
    { name: "Dibujos", url: "Tienda/Dibujos/dibujos.html", keywords: ["dibujos", "ilustraciones"] },
    { name: "Discos", url: "Tienda/Discos/discos.html", keywords: ["discos", "música", "vinilos"] },
    { name: "Esculturas", url: "Tienda/Esculturas/esculturas.html", keywords: ["esculturas", "arte 3d"] },
    { name: "Impresiones Digitales", url: "Tienda/Impresiones digitales/impresiones_digitales.html", keywords: ["impresiones", "digitales", "prints"] },
    { name: "Libros", url: "Tienda/Libros/libros.html", keywords: ["libros", "lectura"] },
    { name: "Prendas y Accesorios", url: "Tienda/Prendas y accesorios/prendas_accesorios.html", keywords: ["prendas", "accesorios", "ropa"] },
    { name: "Tapices", url: "Tienda/Tapices/tapices.html", keywords: ["tapices", "textiles"] },
    // Otras páginas
    { name: "Inicio", url: "index.html", keywords: ["inicio", "home", "principal"] }
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