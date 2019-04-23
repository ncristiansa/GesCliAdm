//Funcion ajax para paginar

$(document).on("click", ".pagination a", function(event){
    event.preventDefault();
    var paginacion = $(this).attr('href').split('page=');
    var page = paginacion[1];
    var ruta = paginacion[0];
    ruta = ruta.replace('/clients/create', '');
    //si no hacemos el replace, cuando cree uno nuevo, no funcionara bien
    
    $.ajax({
        url: ruta,
        data: {page: page},
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $("#ClientsTable").html(data);
            //$(this).attr('href':ruta+'page='+page);
            //history.pushState(null, "", ruta+'page='+page);
        }
    })
    
})
//Funcion ajax para recargar listado de clientes con el filtro
$(document).on("click", "#ClientsTable input[value='Filtrar']", function(event){
    event.preventDefault();

    var valorFiltro = $("input[name='filtro']").val();
    var url = window.location.origin;

    ruta = url.replace('/clients/create', '');
    //si no hacemos el replace, cuando cree uno nuevo, no funcionara bien
    
    $.ajax({
        url: ruta,
        data: {filtro: valorFiltro},
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $("#ClientsTable").html(data);
        }
    })
    
})


