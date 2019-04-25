
<script>
        
     var clientes = {!! json_encode($clientes->toArray(), JSON_HEX_TAG) !!} ;
     CreateTable("#ClientsTable",clientes.data,undefined);
     createFilter('#ClientsTable table thead',"/","clientes","table");
     
    $('.clickable').each(function(){
         $(this).attr("data-href","/clients/"+$(this).attr("id"));
    })
    $('.clickable').click(function(){
         window.location=$(this).data('href');
    });
     $('input[name="filtro"]').val('{{$filtro}}');
     //Como enviaremos mediante json esta vista desde el controlador y la paginación se mostrará en la parte superior, vamos a añadirlo debajo de la tabla
     $("#ClientsTable").append($(".pagination"));
 </script>
{!!$clientes->render()!!}

  