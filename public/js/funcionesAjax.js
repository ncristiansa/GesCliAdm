//Funcion ajax para paginar

$(document).on("click", ".pagination a", function(event){
    event.preventDefault();
    //Recibimos el numero de la paginación
    var pagina = $(this).attr('href').split('page=')[1];
    //Obtenemos la URL
    var ruta = $(this).attr('href').split('page=')[0];
    //ruta API
    ruta = ruta.replace('/api/clientes', '');
    $.ajax({
        url: ruta,
        data: {page: pagina},
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $("#ClientsTable").html(data);
        }
    })
    
})
//Funcion ajax para recargar listado de clientes con el filtro
$(document).on("click", "#ClientsTable input[value='Filtrar']", function(event){
    event.preventDefault();
    var valorFiltro = $("input[name='filtro']").val();
    var ruta = window.location.origin;
    $.ajax({
        url: ruta,
        data: {filtro: valorFiltro},
        type: 'GET',
        dataType: 'json',
        success: function(data){
            $("#ClientsTable").html(data);
        }
    }); 
});


function crearClienteajax(url_ruta) {
    $.ajax({
        url:url_ruta,
        type:'POST',
        dataType: 'html',
        data:$('#form').first().serialize()    
        
    })
    .done(function(res){
        if ($("input[name='ruta']").val()=='create'){
            $('#costumModal10').modal('toggle');
            
            $("#form input[name=nombre]").val("");
	        $("#form input[name=direccion]").val("");
	        $("#form input[name=provincia]").val("");
	        $("#form input[name=localidad]").val("");
	        $("#form input[name='cif/nif']").val("");
	        $("#form input[name=email]").val("");
	        $("#form input[name=telefono]").val("");
            $("#form input[name=cp]").val("");
            
        }
    })
    .fail(function(textStatus,errorThrown){
        console.log(""+textStatus+": "+errorThrown);
    });
}