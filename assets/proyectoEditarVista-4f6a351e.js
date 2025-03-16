import { P as Proyecto } from "./proyecto-f453d239.js";
import { U as User } from "./main-85e29c0e.js";
const proyectoEditarVista = {
  // html
  template: `
  <div class="container">
    <h1 class="mt-5">Edición de proyecto</h1>
    <div class="d-flex justify-content-end">
      <bottom id="botonVolver" class="btn btn-outline-secondary mt-5 bi bi-arrow-bar-left router-link">
        Volver</bottom>
    </div>
    <form novalidate id="formularioEditarProyecto" action="" class="form">
      <div class="row mt-2">
        <div class="col-12 col-md-4 pt-2 mb-3">
          <img id="imagenJuego" src="images/juego.jpg" alt="" class="img-fluid" />
          <label class="form-label mt-2" for="urlImagen"><strong>URL imagen: </strong></label>
          <input
            id="urlImagen"
            type="text"
            class="form-control"
            value="http://enlaceImagen.com"
          />
          <div class="invalid-feedback">
            No es una url correcta
          </div>
        </div>
        <div class="col-12 col-md-8">
          <!-- Nombre proyecto -->
          <label class="form-label" for="nombreJuego"><strong>Nombre: </strong></label>
          <input
            required
            id="nombreJuego"
            type="text"
            class="form-control"
          />
          <div class="invalid-feedback">
            Debe tener un nombre de proyecto
          </div>
  
          <!-- Descripción -->
          <label class="form-label mt-2" for="descripcion"><strong>Descripción: </strong></label>
          <textarea id="descripcion" class="form-control" rows="4"></textarea>
  
          <!-- Estado -->
          <label class="form-label mt-2" for="estado"><strong>Estado: </strong></label>
          <select required id="estado" class="form-control">
            <option value="Cerrado">Cerrado</option>  
            <option value="En desarrollo">En desarrollo</option>
          </select>
          <div class="invalid-feedback">
            Debes definir un estado
          </div>
  
          <!-- Fecha -->
          <label class="form-label mt-2" for="fecha"><strong>Fecha: </strong></label>
          <input id="fecha" type="date" class="form-control"  />
          <div class="invalid-feedback">
            El formato no es correcto
          </div>
  
          <!-- Enlace al proyecto -->
          <label class="form-label mt-2" for="enlace"><strong>Enlace: </strong></label>
          <input
            id="enlace"
            type="url"
            class="form-control"
            value="http://enlace.com"
          />
          <div class="invalid-feedback">
            No es una url correcta
          </div>
  
          <!-- Repositorio -->
          <label class="form-label mt-2" for="repositorio"><strong>Repositorio: </strong></label>
          <input
            id="repositorio"
            type="text"
            class="form-control"
            value="user.github.com/123456"
          />
  
          <!-- Submit -->
          <input
            id="subirProyecto"
            type="submit"
            class="btn btn-success mt-3"
            value="Actualizar proyecto"
          />
        </div>
      </div>
    </form>
  </div>
  `,
  script: async (id) => {
    try {
      const proyecto = await Proyecto.getById(id);
      if (!proyecto) {
        console.error("No se encontró el proyecto con id:", id);
        return;
      }
      const fechaCorta = proyecto.created_at.split("T")[0];
      document.querySelector("#imagenJuego").setAttribute("src", proyecto.imagen);
      document.querySelector("#urlImagen").value = proyecto.imagen;
      document.querySelector("#nombreJuego").value = proyecto.nombre;
      document.querySelector("#descripcion").value = proyecto.descripcion;
      document.querySelector("#estado").value = proyecto.estado;
      document.querySelector("#fecha").value = fechaCorta;
      document.querySelector("#enlace").value = proyecto.enlace;
      document.querySelector("#repositorio").value = proyecto.repositorio;
      document.querySelector("#botonVolver").addEventListener("click", () => {
        window.history.back();
      });
      const inputUrl = document.querySelector("#urlImagen");
      inputUrl.addEventListener("input", () => {
        document.querySelector("#imagenJuego").setAttribute("src", inputUrl.value);
      });
      const formulario = document.querySelector("#formularioEditarProyecto");
      formulario.addEventListener("submit", async (event) => {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
        if (!formulario.checkValidity()) {
          formulario.classList.add("was-validated");
        } else {
          try {
            const user = await User.getUser();
            const userId = user.id;
            const proyectoEditado = {
              imagen: document.querySelector("#urlImagen").value,
              nombre: document.querySelector("#nombreJuego").value,
              descripcion: document.querySelector("#descripcion").value,
              created_at: document.querySelector("#fecha").value,
              estado: document.querySelector("#estado").value,
              enlace: document.querySelector("#enlace").value,
              repositorio: document.querySelector("#repositorio").value,
              user_id: userId
            };
            const proyectoActualizado = await Proyecto.update(
              id,
              proyectoEditado
            );
            alert(
              "Proyecto actualizado con éxito: " + proyectoActualizado.nombre
            );
            console.log("Actualización exitosa:", proyectoActualizado);
            window.location = "#/proyectos";
          } catch (error) {
            alert("Error al actualizar el proyecto", error);
          }
        }
      });
    } catch (error) {
      console.error("Error al cargar el proyecto:", error);
    }
  }
};
export {
  proyectoEditarVista as default
};
