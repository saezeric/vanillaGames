# **Validaciones basadas en html**

En HTML5, podemos realizar validaciones en formularios utilizando atributos y elementos específicos. Aquí tienes un resumen de cómo vamos a crear validaciones utilizando HTML5:

- Atributo required: Puedes usar el atributo required en campos de entrada para asegurarte de que el usuario complete ese campo antes de enviar el formulario.

\<input type\="text" name\="nombre" required\>

- Atributo pattern: Puedes usar el atributo pattern junto con una expresión regular para validar el formato de entrada en un campo.

\<input type\="text" name\="telefono" pattern\="\[0-9\]{10}" title\="Ingresa un número de teléfono válido de 10 dígitos"\>

- Atributo min y max: Para campos numéricos, puedes utilizar los atributos min y max para establecer rangos válidos.

\<input type\="number" name\="edad" min\="18" max\="99"\>

- Atributo minlength y maxlength: Para campos numéricos, puedes utilizar los atributos min y max para establecer rangos válidos.

\<input type\="password" name\="pass" minlength\="6" maxlength\="99"\>

- Atributo email: Puedes usar el atributo type="email" en un campo de entrada para asegurarte de que la entrada sea un formato de correo electrónico válido.

\<input type\="email" name\="correo"\>

- Atributo url: Similar al atributo email, el atributo type="url" valida que la entrada sea una URL válida.

\<input type\="url" name\="sitio_web"\>

- Elemento `<textarea>` con required: Al igual que con los campos de entrada, puedes usar el atributo required con el elemento `<textarea>` para asegurarte de que se ingrese texto.

\<textarea name\="comentarios" required\>\</textarea\>

- Elemento `<select>` con required: Puedes usar el atributo required con el elemento _select_ para asegurarte de que se seleccione una opción antes de enviar el formulario.

\<select name\="pais" required\>  
 \<option value\=""\>Selecciona un país\</option\>  
 \<option value\="mx"\>México\</option\>  
 \<option value\="us"\>Estados Unidos\</option\>  
\</select\>

## **Definición de restricciones para nuestros formularios[​](https://carrebola.github.io/vanillaPill/docs/Version%201.0/SPRINT%202%20-%20PROTOTIPOS/Hist7%20-%20Validaciones/ValidacionHTML#definici%C3%B3n-de-restricciones-para-nuestros-formularios)**

Vamos a definir las validaciones para cada formulario y a continuación modificaremos el código para aplicarlas.

### **Formulario de Registro[​](https://carrebola.github.io/vanillaPill/docs/Version%201.0/SPRINT%202%20-%20PROTOTIPOS/Hist7%20-%20Validaciones/ValidacionHTML#formulario-de-registro)**

- El nombre es obligatorio
- El apellido es opcional
- Los campos email y contraseña son requeridos. Nombre y apellidos opcional
- El email debe ser tipo un email correcto
- La contraseña debe ser de 6 dígitos o más

El código de este formulario sería algo así:

formulario registro  
_\<\!-- Formulario de registro \--\>_  
 \<form action\="" class\="form border shadow-sm p-3"\>

_\<\!-- Nombre \--\>_  
 \<label for\="nombre" class\="form-label"\>Nombre:\</label\>  
 \<input required id\="nombre" type\="text" class\="form-control" /\>

_\<\!-- Apellidos \--\>_  
 \<label for\="apellidos" class\="form-label"\>Apellidos:\</label\>  
 \<input id\="apellidos" type\="text" class\="form-control" /\>

_\<\!-- Email \--\>_  
 \<label for\="email" class\="form-label"\>Email:\</label\>  
 \<input required id\="email" type\="email" class\="form-control" /\>

_\<\!-- Contraseña \--\>_  
 \<label for\="pass" class\="form-label mt-3"\>Contraseña:\</label\>  
 \<input required id\="pass" type\="password" min\="6" class\="form-control" /\>

_\<\!-- Botón enviar \--\>_  
 \<input type\="submit" class\="btn btn-primary w-100 mt-3" value\="Enviar" /\>  
 \</form\>

### **Formulario de inicio de sesión (Login)[​](https://carrebola.github.io/vanillaPill/docs/Version%201.0/SPRINT%202%20-%20PROTOTIPOS/Hist7%20-%20Validaciones/ValidacionHTML#formulario-de-inicio-de-sesi%C3%B3n-login)**

- Los campos email y contraseña son requeridos.
- El email debe ser tipo un email correcto
- La contraseña debe ser de 6 dígitos o más

Formulario de inicio de sesión  
_\<\!-- Formulario de inicio de sesión (login) \--\>_  
 \<form action\="" class\="form border shadow-sm p-3"\>  
 _\<\!-- Email \--\>_  
 \<label for\="email" class\="form-label"\>Email:\</label\>  
 \<input required type\="email" class\="form-control" /\>

_\<\!-- Contraseña \--\>_  
 \<label for\="pass" class\="form-label mt-3"\>Contraseña:\</label\>  
 \<input required id\="pass" type\="password" min\="6" class\="form-control" /\>

_\<\!-- Recordar contraseña \--\>_  
 \<div class\="form-check mt-3"\>  
 \<input  
 class\="form-check-input"  
 type\="checkbox"  
 value\=""  
 id\="flexCheckChecked"  
 checked  
 /\>  
 \<label class\="form-check-label" for\="flexCheckChecked"\>  
 Recordar sesión  
 \</label\>  
 \</div\>

_\<\!-- Link a recordar contraseña \--\>_  
 \<a class\="d-block text-end" href\="\#"\>¿Has olvidado tu contraseña?\</a\>

_\<\!-- Botón Iniciar sesión \--\>_  
 \<input  
 type\="submit"  
 class\="btn btn-primary w-100 mt-3"  
 value\="Iniciar sesión"  
 /\>  
 \</form\>

### **Formulario para Editar perfil[​](https://carrebola.github.io/vanillaPill/docs/Version%201.0/SPRINT%202%20-%20PROTOTIPOS/Hist7%20-%20Validaciones/ValidacionHTML#formulario-para-editar-perfil)**

- El nombre es obligatorio
- El apellido es opcional
- Los campos email y contraseña son requeridos.
- El email debe ser tipo un email correcto
- La contraseña debe ser de 6 dígitos o más
- La url de la imagen debe ser de tipo url correcta, y es opcional

Editar Perfil  
_\<\!-- Formulario de edición de perfil \--\>_  
 \<form action\=""\>  
 \<div class\="modal-dialog"\>  
 \<div class\="modal-content"\>  
 \<div class\="modal-header"\>  
 \<h1 class\="modal-title fs-5" id\="exampleModalLabel"\>  
 Edición de perfil  
 \</h1\>  
 \<button  
 type\="button"  
 class\="btn-close"  
 data-bs-dismiss\="modal"  
 aria-label\="Close"  
 \>\</button\>  
 \</div\>  
 \<div class\="modal-body"\>  
 \<div class\="form border shadow-sm p-3"\>  
 \<div class\="m-1" style\="max-width: 400px"\>  
 \<div class\="imgPerfil border shadow-sm p-3 mb-3"\>  
 \<div  
 class\="imagen mx-auto mb-1 rounded-circle"  
 style\="  
 background-image: url(.images/avatar.svg);  
 width: 200px;  
 height: 200px;  
 background-size: cover;  
 background-position: center;  
 "  
 \>\</div\>

               *\<\!-- Imagen de perfil \--\>*
               \<label for\="imagen" class\="form-label mt-3"\>URL imagen:\</label\>
               \<input
                 id\="imagen"
                 type\="url"
                 class\="form-control"
                 value\="http://imagenavatar.png"
               /\>
             \</div\>

             \<div class\=""\>

               *\<\!-- Nombre \--\>*
               \<label for\="nombre" class\="form-label"\>Nombre:\</label\>
               \<input required id\="nombre" type\="text" class\="form-control" /\>

               *\<\!-- Apellidos \--\>*
               \<label for\="apellidos" class\="form-label"\>Apellidos:\</label\>
               \<input id\="apellidos" type\="text" class\="form-control" /\>

               *\<\!-- Email \--\>*
               \<label for\="email" class\="form-label"\>Email:\</label\>
               \<input required id\="email" type\="email" class\="form-control" /\>

               *\<\!-- Contraseña \--\>*
               \<label for\="pass" class\="form-label mt-3"\>Contraseña:\</label\>
               \<input required id\="pass" type\="password" min\="6" class\="form-control" /\>
             \</div\>
           \</div\>
         \</div\>
       \</div\>
       \<div class\="modal-footer"\>
         \<button type\="button" class\="btn btn-secondary" data-bs-dismiss\="modal"\>
           Cancelar
         \</button\>
         \<button type\="button" class\="btn btn-primary"\>Guardar cambios\</button\>
       \</div\>
     \</div\>

\</div\>  
 \</form\>

### **Formulario Nuevo proyecto / Editar proyecto[​](https://carrebola.github.io/vanillaPill/docs/Version%201.0/SPRINT%202%20-%20PROTOTIPOS/Hist7%20-%20Validaciones/ValidacionHTML#formulario-nuevo-proyecto--editar-proyecto)**

- El nombre y estado son obligatorios
- La fecha debe ser de tipo fecha
- El enlace debe ser url correcta
- El repositorio debe ser url correcta
- La imagen debe ser url correcta

Formulario Nuevo proyecto  
_\<\!-- Formulario nuevo proyecto \--\>_  
 \<form action\="" class\="form"\>

_\<\!-- Nombre proyecto \--\>_  
 \<label class\="form-label" for\="nombre"\>\<strong\>Nombre: \</strong\>\</label\>  
 \<input required id\="nombre" type\="text" value\="Nombre Autor" class\="form-control" /\>

_\<\!-- Descripción \--\>_  
 \<label class\="form-label mt-2" for\="descripcion"  
 \>\<strong\>Descripción: \</strong\>\</label  
 \>  
 \<textarea id\="descripcion" class\="form-control" rows\="4"\>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.\</textarea\>

_\<\!-- Estado \--\>_  
 \<label class\="form-label mt-2" for\="estado"\>\<strong\>Estado: \</strong\>\</label\>  
 \<select required id\="estado" class\="form-control"\>  
 \<option value\="estado"\>estado\</option\>  
 \<option value\="otro estado"\>otro estado\</option\>  
 \</select\>

_\<\!-- Fecha \--\>_  
 \<label class\="form-label mt-2" for\="fecha"\>\<strong\>Fecha: \</strong\>\</label\>  
 \<input id\="fecha" type\="date" class\="form-control" value\="12/12/2023"/\>

_\<\!-- Enlace al proyecto \--\>_  
 \<label class\="form-label mt-2" for\="enlace"\>\<strong\>Enlace: \</strong\>\</label\>  
 \<input id\="enlace" type\="url" class\="form-control" value\="http://enlace.com" /\>

_\<\!-- Repositorio \--\>_  
 \<label class\="form-label mt-2" for\="repositorio"  
 \>\<strong\>Repositorio: \</strong\>\</label  
 \>  
 \<input id\="repositorio" type\="text" class\="form-control" value\="user.github.com/123456" /\>

_\<\!-- Submit \--\>_  
 \<input type\="submit" class\="btn btn-success mt-3" value\="Subir proyecto"\>  
 \</form\>  
Formulario editar proyecto  
\<form action\="" class\=""\>  
 \<div class\="row mt-2"\>  
 \<div class\="col-12 col-md-4 pt-2 mb-3"\>  
 \<img src\=".images/juego.jpg" alt\="" class\="img-fluid" /\>  
 \<label class\="form-label mt-2" for\="urlImagen"  
 \>\<strong\>URL imagen: \</strong\>\</label  
 \>  
 \<input  
 id\="urlImagen"  
 type\="text"  
 class\="form-control"  
 value\="http://enlaceImagen.com"  
 /\>  
 \</div\>  
 \<div class\="col-12 col-md-8"\>  
 _\<\!-- Formulario nuevo proyecto \--\>_

     *\<\!-- Nombre proyecto \--\>*
     \<label class\="form-label" for\="nombre"\>\<strong\>Nombre: \</strong\>\</label\>
     \<input
       required
       id\="nombre"
       type\="text"
       value\="Nombre Autor"
       class\="form-control"
     /\>

     *\<\!-- Descripción \--\>*
     \<label class\="form-label mt-2" for\="descripcion"
       \>\<strong\>Descripción: \</strong\>\</label
     \>
     \<textarea id\="descripcion" class\="form-control" rows\="4"\>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.\</textarea
     \>

     *\<\!-- Estado \--\>*
     \<label class\="form-label mt-2" for\="estado"
       \>\<strong\>Estado: \</strong\>\</label
     \>
     \<select required id\="estado" class\="form-control"\>
       \<option value\="estado"\>estado\</option\>
       \<option value\="otro estado"\>otro estado\</option\>
     \</select\>

     *\<\!-- Fecha \--\>*
     \<label class\="form-label mt-2" for\="fecha"
       \>\<strong\>Fecha: \</strong\>\</label
     \>
     \<input id\="fecha" type\="date" class\="form-control" value\="12/12/2023" /\>

     *\<\!-- Enlace al proyecto \--\>*
     \<label class\="form-label mt-2" for\="enlace"
       \>\<strong\>Enlace: \</strong\>\</label
     \>
     \<input
       id\="enlace"
       type\="url"
       class\="form-control"
       value\="http://enlace.com"
     /\>

     *\<\!-- Repositorio \--\>*
     \<label class\="form-label mt-2" for\="repositorio"
       \>\<strong\>Repositorio: \</strong\>\</label
     \>
     \<input
       id\="repositorio"
       type\="text"
       class\="form-control"
       value\="user.github.com/123456"
     /\>

     *\<\!-- Submit \--\>*
     \<input
       type\="submit"
       class\="btn btn-success mt-3"
       value\="Subir proyecto"
     /\>

\</div\>  
 \</div\>  
\</form\>

### **Formulario Editar usuarios desde Admin[​](https://carrebola.github.io/vanillaPill/docs/Version%201.0/SPRINT%202%20-%20PROTOTIPOS/Hist7%20-%20Validaciones/ValidacionHTML#formulario-editar-usuarios-desde-admin)**

- El nombre es obligatorio
- El apellido es opcional
- Los campos email y contraseña son requeridos.
- El email debe ser tipo un email correcto
- La contraseña debe ser de 6 dígitos o más
- La url de la imagen debe ser de tipo url correcta, y es opcional

Formulario editar usuario desde admin

\<form action\=""\>  
 \<td\>  
 \<div class\="containerImagen"\>  
 \<div  
 class\="rounded-circle d-flex align-items-end justify-content-end"  
 style\="  
 background-image: url(.images/avatar.svg);  
 width: 50px;  
 height: 50px;  
 background-size: cover;  
 background-position: center;  
 "  
 \>  
 \<i class\="btn btn-success btn-sm rounded-circle bi bi-pencil"\>\</i\>  
 \</div\>  
 \</div\>  
 \</td\>  
 \<td\>  
 _\<\!-- URL imagen \--\>_  
 \<input  
 type\="url"  
 class\="form-control form-control-sm"  
 value\="http://imagen.com"  
 /\>  
 \</td\>  
 \<td\>  
 _\<\!-- email \--\>_  
 \<input  
 required  
 type\="email"  
 class\="form-control form-control-sm"  
 value\="email@email.com"  
 /\>  
 \</td\>  
 \<td\>  
 \<input  
 required  
 type\="text"  
 class\="form-control form-control-sm"  
 value\="Nombre usuario"  
 /\>  
 \</td\>  
 \<td\>  
 \<input  
 type\="text"  
 class\="form-control form-control-sm"  
 value\="Apellidos usuario"  
 /\>  
 \</td\>

\<td\>  
 \<input  
 type\="date"  
 class\="form-control form-control-sm"  
 value\="12/12/2023 proyecto"  
 /\>  
 \</td\>  
 \<td\>  
 \<select class\="form-control form-control-sm" name\="" id\=""\>  
 \<option value\="1"\>opción\</option\>  
 \<option value\="2"\>opción2\</option\>  
 \</select\>  
 \</td\>  
 \<td\>  
 \<select class\="form-control form-control-sm" name\="" id\=""\>  
 \<option value\="1"\>opción\</option\>  
 \<option value\="2"\>opción2\</option\>  
 \</select\>  
 \</td\>  
 \<td\>  
 \<button type\="submit" class\="btn btn-sm btn-success"\>  
 Actualizar  
 \</button\>  
 \</td\>  
 \<td\>\<i class\="btn btn-sm btn-outline-danger bi bi-trash3"\>\</i\>\</td\>  
\</form\>

Estas serían todas las validaciones utilizando las caracteristicas de html5.

La respuesta del navegador cuando intentamos enviar un formulario con campos que no cumplen su condición establecida difiere dependiendo del navegador.

_Ejemplo de visualización de un formulario que no valida utilizando Google Chrome_ ![Validación según Chrome][image1]

Para evitar este problema podemos utilizar el sistema de validación que nos ofrece Bootstrap. Este sistema de validación implica utilizar algo de javascript, tal y como veremos en la siguiente tarea.

# **Usando Bootstrap para la validación**

En el apartado anterior hemos definido las reglas de validación de nuestros formularios y hemos aplicado las restricciones utilizando propiedades de html5 en los diferentes campos.

Este sistema, aunque muy útil, presenta un problema: no todos los navegadores muestran los mensajes de validación de la misma manera, y esto a veces puede interferir en el funcionamiento de nuestra aplicación.

Para evitar este inconveniente vamos a utilizar el sistema de validación de Bootstrap que, aunque no es perfecto (presenta algunos problemas de accesibilidad), mejorará el aspecto y control de los mensajes cuando el navegador nos informe de errores.

## **¿Cómo funciona? Formulario de inicio de sesión[​](https://carrebola.github.io/vanillaPill/docs/Version%201.0/SPRINT%202%20-%20PROTOTIPOS/Hist7%20-%20Validaciones/Usando%20Bootstrap#c%C3%B3mo-funciona-formulario-de-inicio-de-sesi%C3%B3n)**

Para mostrar como funciona vamos a utilizar el formulario de inicio de sesión. Te muestro el código tal y como está ahora:

form inicio sesión

_\<\!-- 623451 \--\>_

_\<\!-- Formulario de inicio de sesión (login) \--\>_  
\<form action\="" class\="form border shadow-sm p-3"\>  
 _\<\!-- Email \--\>_  
 \<label for\="email" class\="form-label"\>Email:\</label\>  
 \<input required type\="email" class\="form-control" /\>

_\<\!-- Contraseña \--\>_  
 \<label for\="pass" class\="form-label mt-3"\>Contraseña:\</label\>  
 \<input required minlength\="6" id\="pass" type\="password" class\="form-control" /\>

_\<\!-- Recordar contraseña \--\>_  
 \<div class\="form-check mt-3"\>  
 \<input  
 class\="form-check-input"  
 type\="checkbox"  
 value\=""  
 id\="flexCheckChecked"  
 checked  
 /\>  
 \<label class\="form-check-label" for\="flexCheckChecked"\>  
 Recordar sesión  
 \</label\>  
 \</div\>

_\<\!-- Link a recordar contraseña \--\>_  
 \<a class\="d-block text-end" href\="\#"\>¿Has olvidado tu contraseña?\</a\>

_\<\!-- Botón Iniciar sesión \--\>_  
 \<input  
 type\="submit"  
 class\="btn btn-primary w-100 mt-3"  
 value\="Iniciar sesión"  
 /\>  
\</form\>

1. En primer lugar necesitamos deshabilitar la validación de html5. Para ello añadiremos a la etiqueta `<form>` el atributo `novalidate`
2. \<form novalidate action\="" class\="form border shadow-sm p-3"\>
3. Vamos ahora a añadir los mensajes de error que se mostrarán cuando un campo no valide correctamente. En este formulario el email debe tener un formato correcto y la contraseña debe tener un mínimo de 6 caracteres, y lógicamente, los campos no pueden estar vacíos.

_\<\!-- Email \--\>_  
 \<label for\="email" class\="form-label"\>Email:\</label\>  
 \<input required type\="email" class\="form-control" /\>  
 \<div class\="invalid-feedback"\>  
 El formato del email no es correcto  
 \</div\>  
 _\<\!-- Contraseña \--\>_  
 \<label for\="pass" class\="form-label mt-3"\>Contraseña:\</label\>  
 \<input required minlength\="6" id\="pass" type\="password" class\="form-control" /\>  
 \<div class\="invalid-feedback"\>  
 La contraseña debe tener como mínimo 6 caracteres  
 \</div\>

Ahora lo que haremos, mediante javascript, será:

1. Capturar el formulario en una variable
2. detectar cuando se intenta enviar el formulario (escuchando el evento submit)
3. Comprobar si el formulario valida correctamente. Si no valida
   1. Detenemos el evento submit para que no se intente enviar el formulario
   2. Y añadimos la clase no validate al formulario. Esto hará que se muestren los mensajes de error.

Este sería el código js resultante. Recuerda que debes incluirlo al final de la página, antes de de cerrar el body, mediante una etiqueta `<script>`

login.html  
_\<\!-- Script para la validación del formulario \--\>_  
\<script\>  
 _//Capturamos el formulario en una variable_  
 _const_ formulario \= document.querySelector("form")  
 _//Detectamos su evento submit (enviar)_  
 formulario.addEventListener("submit", (event) \=\> {  
 _//Comprobamos si el formulario no valida_  
 _if_ (\!formulario.checkValidity()) {  
 _//Detenemos el evento enviar (submit)_  
 event.preventDefault()  
 event.stopPropagation()  
 }  
 _//Y añadimos la clase 'was-validate' para que se muestren los mensajes_  
 formulario.classList.add('was-validated')  
 });  
\</script\>

Aquí puedes ver como se mostraría un error de validación usando este método:

![][image2]

Ahora vamos a hacer el mismo procedimiento con el resto de páginas

## **Registro**

_\<\!-- Formulario de registro \--\>_  
 \<form _novalidate_ _action_\="" _class_\="form border shadow-sm p-3"\>  
 _\<\!-- Nombre \--\>_  
 \<label _for_\="nombre" _class_\="form-label"\>Nombre:\</label\>  
 \<input _required_ _id_\="nombre" _type_\="text" _class_\="form-control" /\>

            *\<\!-- Apellidos \--\>*
            \<label *for*\="apellidos" *class*\="form-label"\>Apellidos:\</label\>
            \<input *id*\="apellidos" *type*\="text" *class*\="form-control" /\>

            *\<\!-- Email \--\>*
            \<label *for*\="email" *class*\="form-label"\>Email:\</label\>
            \<input *required* *type*\="email" *class*\="form-control" /\>
            \<div *class*\="invalid-feedback"\>
              El formato del email no es correcto
            \</div\>
            *\<\!-- Contraseña \--\>*
            \<label *for*\="pass" *class*\="form-label mt-3"\>Contraseña:\</label\>
            \<input
              *required*
              *minlength*\="6"
              *id*\="pass"
              *type*\="password"
              *class*\="form-control"
            /\>
            \<div *class*\="invalid-feedback"\>
              La contraseña debe tener como mínimo 6 caracteres
            \</div\>

            *\<\!-- Botón enviar \--\>*
            \<input
              *type*\="submit"
              *class*\="btn btn-primary w-100 mt-3"
              *value*\="Enviar"
            /\>
          \</form\>

## **Editar Perfil**

_\<\!-- Formulario de edición de perfil \--\>_  
 \<form _novalidate_ _action_\=""\>  
 \<div _class_\="modal-dialog"\>  
 \<div _class_\="modal-content"\>  
 \<div _class_\="modal-header"\>  
 \<h1 _class_\="modal-title fs-5" _id_\="exampleModalLabel"\>  
 Edición de perfil  
 \</h1\>  
 \<button  
 _type_\="button"  
 _class_\="btn-close"  
 _data-bs-dismiss_\="modal"  
 _aria-label_\="Close"  
 \>\</button\>  
 \</div\>  
 \<div _class_\="modal-body"\>  
 \<div _class_\="form border shadow-sm p-3"\>  
 \<div _class_\="m-1" _style_\="max-width: 400px"\>  
 \<div _class_\="imgPerfil border shadow-sm p-3 mb-3"\>  
 \<div  
 _class_\="imagen mx-auto mb-1 rounded-circle"  
 _style_\="  
 background-image: url(.images/avatar.svg);  
 width: 200px;  
 height: 200px;  
 background-size: cover;  
 background-position: center;  
 "  
 \>\</div\>

                      *\<\!-- Imagen de perfil \--\>*
                      \<label *for*\="imagen" *class*\="form-label mt-3"
                        \>URL imagen:\</label
                      \>
                      \<input
                        *id*\="imagen"
                        *type*\="url"
                        *class*\="form-control"
                        *value*\="http://imagenavatar.png"
                      /\>
                      \<div *class*\="invalid-feedback"\>
                        El formato url no es correcto
                      \</div\>
                    \</div\>

                    \<div *class*\=""\>
                      *\<\!-- Nombre \--\>*
                      \<label *for*\="nombre" *class*\="form-label"\>Nombre:\</label\>
                      \<input
                        *required*
                        *id*\="nombre"
                        *type*\="text"
                        *class*\="form-control"
                      /\>

                      *\<\!-- Apellidos \--\>*
                      \<label *for*\="apellidos" *class*\="form-label"
                        \>Apellidos:\</label
                      \>
                      \<input *id*\="apellidos" *type*\="text" *class*\="form-control" /\>

                      *\<\!-- Email \--\>*
                      \<label *for*\="email" *class*\="form-label"\>Email:\</label\>
                      \<input *required* *type*\="email" *class*\="form-control" /\>
                      \<div *class*\="invalid-feedback"\>
                        El formato del email no es correcto
                      \</div\>
                      *\<\!-- Contraseña \--\>*
                      \<label *for*\="pass" *class*\="form-label mt-3"
                        \>Contraseña:\</label
                      \>
                      \<input
                        *required*
                        *minlength*\="6"
                        *id*\="pass"
                        *type*\="password"
                        *class*\="form-control"
                      /\>
                    \</div\>
                  \</div\>
                \</div\>
              \</div\>
              \<div *class*\="modal-footer"\>
                \<button
                  *type*\="button"
                  *class*\="btn btn-secondary"
                  *data-bs-dismiss*\="modal"
                \>
                  Cancelar
                \</button\>
                \<button *type*\="submit" *class*\="btn btn-primary"\>
                  Guardar cambios
                \</button\>
              \</div\>
            \</div\>
          \</div\>
        \</form\>

## **Nuevo Proyecto**

_\<\!-- Formulario nuevo proyecto \--\>_  
 \<form _novalidate_ _action_\="" _class_\="form"\>  
 _\<\!-- Nombre proyecto \--\>_  
 \<label _class_\="form-label" _for_\="nombre"  
 \>\<strong\>Nombre: \</strong\>\</label  
 \>  
 \<input  
 _required_  
 _id_\="nombre"  
 _type_\="text"  
 _value_\="Nombre Autor"  
 _class_\="form-control"  
 /\>

              *\<\!-- Descripción \--\>*
              \<label *class*\="form-label mt-2" *for*\="descripcion"
                \>\<strong\>Descripción: \</strong\>\</label
              \>
              \<textarea *id*\="descripcion" *class*\="form-control" *rows*\="4"\>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.\</textarea  
 \>

              *\<\!-- Estado \--\>*
              \<label *class*\="form-label mt-2" *for*\="estado"
                \>\<strong\>Estado: \</strong\>\</label
              \>
              \<select *required* *id*\="estado" *class*\="form-control"\>
                \<option *value*\="estado"\>estado\</option\>
                \<option *value*\="otro estado"\>otro estado\</option\>
              \</select\>

              *\<\!-- Fecha \--\>*
              \<label *class*\="form-label mt-2" *for*\="fecha"
                \>\<strong\>Fecha: \</strong\>\</label
              \>
              \<input
                *id*\="fecha"
                *type*\="date"
                *class*\="form-control"
                *value*\="12/12/2023"
              /\>
              \<div *class*\="invalid-feedback"\>
                El formato de la fecha es incorrecto
              \</div\>

              *\<\!-- Enlace al proyecto \--\>*
              \<label *class*\="form-label mt-2" *for*\="enlace"
                \>\<strong\>Enlace: \</strong\>\</label
              \>
              \<input
                *id*\="enlace"
                *type*\="url"
                *class*\="form-control"
                *value*\="http://enlace.com"
              /\>
              \<div *class*\="invalid-feedback"\>
                El enlace debe ser url correcta
              \</div\>

              *\<\!-- Repositorio \--\>*
              \<label *class*\="form-label mt-2" *for*\="repositorio"
                \>\<strong\>Repositorio: \</strong\>\</label
              \>
              \<input
                *id*\="repositorio"
                *type*\="url"
                *class*\="form-control"
                *value*\="user.github.com/123456"
              /\>
              \<div *class*\="invalid-feedback"\>
                El repositorio debe ser url correcta
              \</div\>

              *\<\!-- Submit \--\>*
              \<input
                *type*\="submit"
                *class*\="btn btn-success mt-3"
                *value*\="Subir proyecto"
              /\>
            \</form\>

## **Editar Proyecto**

\<form _novalidate_ _action_\="" _class_\=""\>  
 \<div _class_\="row mt-2"\>  
 \<div _class_\="col-12 col-md-4 pt-2 mb-3"\>  
 \<img  
 _src_\="https://carrebola.github.io/vanillaPill/img/logo.svg"  
 _alt_\=""  
 _class_\="img-fluid"  
 /\>  
 \<label _class_\="form-label mt-2" _for_\="urlImagen"  
 \>\<strong\>URL imagen: \</strong\>\</label  
 \>  
 \<input  
 _id_\="urlImagen"  
 _type_\="url"  
 _class_\="form-control"  
 _value_\="http://enlaceImagen.com"  
 /\>  
 \<div _class_\="invalid-feedback"\>  
 El formato de la fecha es incorrecto  
 \</div\>  
 \</div\>  
 \<div _class_\="col-12 col-md-8"\>  
 _\<\!-- Formulario nuevo proyecto \--\>_

              *\<\!-- Nombre proyecto \--\>*
              \<label *class*\="form-label" *for*\="nombre"
                \>\<strong\>Nombre: \</strong\>\</label
              \>
              \<input
                *required*
                *id*\="nombre"
                *type*\="text"
                *value*\="Nombre Autor"
                *class*\="form-control"
              /\>

              *\<\!-- Descripción \--\>*
              \<label *class*\="form-label mt-2" *for*\="descripcion"
                \>\<strong\>Descripción: \</strong\>\</label
              \>
              \<textarea *id*\="descripcion" *class*\="form-control" *rows*\="4"\>

Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.\</textarea  
 \>

              *\<\!-- Estado \--\>*
              \<label *class*\="form-label mt-2" *for*\="estado"
                \>\<strong\>Estado: \</strong\>\</label
              \>
              \<select *required* *id*\="estado" *class*\="form-control"\>
                \<option *value*\="estado"\>estado\</option\>
                \<option *value*\="otro estado"\>otro estado\</option\>
              \</select\>

              *\<\!-- Fecha \--\>*
              \<label *class*\="form-label mt-2" *for*\="fecha"
                \>\<strong\>Fecha: \</strong\>\</label
              \>
              \<input
                *id*\="fecha"
                *type*\="date"
                *class*\="form-control"
                *value*\="12/12/2023"
              /\>
              \<div *class*\="invalid-feedback"\>
                El formato de la fecha es incorrecto
              \</div\>

              *\<\!-- Enlace al proyecto \--\>*
              \<label *class*\="form-label mt-2" *for*\="enlace"
                \>\<strong\>Enlace: \</strong\>\</label
              \>
              \<input
                *id*\="enlace"
                *type*\="url"
                *class*\="form-control"
                *value*\="http://enlace.com"
              /\>
              \<div *class*\="invalid-feedback"\>
                El enlace debe ser url correcta
              \</div\>

              *\<\!-- Repositorio \--\>*
              \<label *class*\="form-label mt-2" *for*\="repositorio"
                \>\<strong\>Repositorio: \</strong\>\</label
              \>
              \<input
                *id*\="repositorio"
                *type*\="url"
                *class*\="form-control"
                *value*\="user.github.com/123456"
              /\>
              \<div *class*\="invalid-feedback"\>
                El repositorio debe ser url correcta
              \</div\>

              *\<\!-- Submit \--\>*
              \<input
                *type*\="submit"
                *class*\="btn btn-success mt-3"
                *value*\="Subir proyecto"
              /\>
            \</div\>
          \</div\>
        \</form\>

## **Editar Usuarios desde Admin**

\<form _novalidate_ _action_\=""\>  
 \<table  
 _class_\="table table-hover align-middle mt-3"  
 _style_\="min-width: 1200px"  
 \>  
 \<thead\>  
 \<tr\>  
 \<th\>\</th\>  
 \<th\>  
 URL imagen \<span\>\<i _class_\="bi bi-caret-down"\>\</i\>\</span\>  
 \</th\>  
 \<th\>  
 Email \<span\>\<i _class_\="bi bi-caret-down"\>\</i\>\</span\>  
 \</th\>  
 \<th\>  
 Nombre \<span\>\<i _class_\="bi bi-caret-up"\>\</i\>\</span\>  
 \</th\>  
 \<th\>  
 Apellidos \<span\>\<i _class_\="bi bi-caret-up"\>\</i\>\</span\>  
 \</th\>  
 \<th\>  
 Fecha \<span\>\<i _class_\="bi bi-caret-up"\>\</i\>\</span\>  
 \</th\>  
 \<th\>  
 Rol \<span\>\<i _class_\="bi bi-caret-up"\>\</i\>\</span\>  
 \</th\>  
 \<th\>  
 Estado \<span\>\<i _class_\="bi bi-caret-up"\>\</i\>\</span\>  
 \</th\>  
 \<th\>\</th\>  
 \<th\>\</th\>  
 \</tr\>  
 \</thead\>

                \<tr\>
                  \<td\>
                    \<div *class*\="containerImagen"\>
                      \<div
                        *class*\="rounded-circle d-flex align-items-end justify-content-end"
                        *style*\="
                          background-image: url(https://www.svgrepo.com/show/57853/avatar.svg);
                          width: 50px;
                          height: 50px;
                          background-size: cover;
                          background-position: center;
                        "
                      \>
                        \<i
                          *class*\="btn btn-success btn-sm rounded-circle bi bi-pencil"
                        \>\</i\>
                      \</div\>
                    \</div\>
                  \</td\>
                  \<td\>
                    *\<\!-- URL imagen \--\>*
                    \<input
                      *type*\="url"
                      *class*\="form-control form-control-sm"
                      *value*\="http://imagen.com"
                    /\>
                    \<div *class*\="invalid-feedback"\>
                      La url de la imagen debe ser de tipo url correcta
                    \</div\>
                  \</td\>
                  \<td\>
                    *\<\!-- email \--\>*
                    \<input
                      *required*
                      *type*\="email"
                      *class*\="form-control form-control-sm"
                      *value*\="email@email.com"
                    /\>
                    \<div *class*\="invalid-feedback"\>
                      El email debe ser tipo un email correcto
                    \</div\>
                  \</td\>
                  \<td\>
                    \<input
                      *required*
                      *type*\="text"
                      *class*\="form-control form-control-sm"
                      *value*\="Nombre usuario"
                    /\>
                  \</td\>
                  \<td\>
                    \<input
                      *type*\="text"
                      *class*\="form-control form-control-sm"
                      *value*\="Apellidos usuario"
                    /\>
                  \</td\>
                  \<td\>
                    \<input
                      *type*\="date"
                      *class*\="form-control form-control-sm"
                      *value*\="2023-12-12"
                    /\>
                  \</td\>
                  \<td\>
                    \<select *class*\="form-control form-control-sm" *name*\="" *id*\=""\>
                      \<option *value*\="1"\>opción\</option\>
                      \<option *value*\="2"\>opción2\</option\>
                    \</select\>
                  \</td\>
                  \<td\>
                    \<select *class*\="form-control form-control-sm" *name*\="" *id*\=""\>
                      \<option *value*\="1"\>opción\</option\>
                      \<option *value*\="2"\>opción2\</option\>
                    \</select\>
                  \</td\>
                  \<td\>
                    \<button *type*\="submit" *class*\="btn btn-sm btn-success"\>
                      Actualizar
                    \</button\>
                  \</td\>
                  \<td\>
                    \<i *class*\="btn btn-sm btn-outline-danger bi bi-trash3"\>\</i\>
                  \</td\>
                \</tr\>
              \</table\>
            \</form\>

[image1]: data:image/png;base64,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
[image2]: data:image/png;base64,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
