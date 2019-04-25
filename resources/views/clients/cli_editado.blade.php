<script type="text/javascript">
    var cliente = {!! json_encode($cliente, JSON_HEX_TAG) !!};
    CreateForm('#Input',cliente,undefined);
    $('input[name="cif/nif"]').prop('readonly',true);
    
    CreateElement('#Input',"div","Información de Cliente",{class:"divtop"});
    //Usamos nuevamente esta funcion para modificar el cliente en caso de haber modificado ya una vez ya que
    // en Validator.js se ejecuta esta misma funcion para la vista detalles_cli y si esta funcion
    // no se ejecuta en cli_editado no se editará correctamente el cliente.
    //Usamos la misma metodologia que la paginación que es recargar un trozo de la web desde otra view en este caso solo recargamos el formulario
    $('#form').submit(function(e){
	e.preventDefault();

    if(checkNulls() && validate()){

		var ruta_form = window.location.origin+$("#form").attr("action");
		var nombre_form = $("#form input[name=nombre]").val();
		var direccion_form = $("#form input[name=direccion]").val();
		var provincia_form = $("#form input[name=provincia]").val();
		var localidad_form = $("#form input[name=localidad]").val();
		var nif_form = $("#form input[name='cif/nif']").val();
		var email_form = $("#form input[name=email]").val();
		var telefono_form = $("#form input[name=telefono]").val();
		var cp_form = $("#form input[name=cp]").val();
		var token = $("#form input[name=_token]").val();

		$.ajax({
			url: ruta_form,
			headers:{'X-CSRF-TOKEN':token},
			data: {nombre: nombre_form, direccion: direccion_form, provincia: provincia_form, localidad: localidad_form, "cif/nif": nif_form, email: email_form, telefono: telefono_form, cp: cp_form},
			type: 'PUT',
			dataType: 'json',
			success: function(data){
				$("#Input").html(data);
			}
		})
    }
});
</script>