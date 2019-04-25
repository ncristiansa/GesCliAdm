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


function ajaxCreateCliente(urlr) {
    $.ajax({
        url:urlr,
        type:'POST',
        dataType: 'html',
        data:$('#form').first().serialize()    
        
    })
    .done(function(res){
        if ($("input[name='ruta']").val()=='create'){
            $('#costumModal10').modal('toggle');
            
        }
    })
    .fail(function(jqXHR,textStatus,errorThrown){
        console.log(""+"status:"+jqXHR.status+" "+textStatus+": "+errorThrown);
    });
}