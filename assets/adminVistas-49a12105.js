import { P as Proyecto } from "./proyecto-d220fec3.js";
import { l as ls, U as User } from "./main-f9569f17.js";
const editarImagenPerfil = {
  // html
  template: `
  <!-- Ventana modaledición perfil -->
  <div
    class="modal fade"
    id="modalEditarImagenPerfil"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <!-- Formulario de edición de perfil -->
    <form novalidate action="">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Edición de perfil
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form border shadow-sm p-3">
              <div class="m-1" style="max-width: 400px">
                <div class="imgPerfil border shadow-sm p-3 mb-3">
                  <div
                    id="imagenUsuario"
                    class="imagen mx-auto mb-1 rounded-circle"
                    style="
                      background-image: url(.images/avatar.svg);
                      width: 200px;
                      height: 200px;
                      background-size: cover;
                      background-position: center;
                    "
                  ></div>

                  <!-- Imagen de perfil -->
                  <label for="imagen" class="form-label mt-3">URL imagen:</label>
                  <input
                    id="urlImagenUsuario"
                    type="url"
                    class="form-control"
                    value="http://imagenavatar.png"
                  />
                  <div class="invalid-feedback">La url no es correcta</div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button 
              id="botonActualizarImagen"
              type="button" 
              class="btn btn-primary"
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
  `,
  script: (urlAvatar, urlInputAvatar, user_id) => {
    console.log("modal editar imagen perfil cargado:", urlAvatar);
    document.querySelector("#urlImagenUsuario").value = urlAvatar;
    const imagenUsuario = document.querySelector("#imagenUsuario");
    imagenUsuario.style.backgroundImage = `url(${urlAvatar})`;
    document.querySelector("#urlImagenUsuario").addEventListener("input", () => {
      urlAvatar = document.querySelector("#urlImagenUsuario").value;
      imagenUsuario.style.backgroundImage = `url(${urlAvatar})`;
    });
    document.querySelector("#botonActualizarImagen").addEventListener("click", () => {
      document.querySelector(`#${urlInputAvatar}`).value = urlAvatar;
      console.log("Actualizando base de datos: " + user_id);
      adminVista.script();
    });
  }
};
const adminVista = {
  template: `
      <div class="container-fluid">
          <h1 class="mt-5">Panel de administración</h1>
          <!-- tabs -->
          <div class="row mt-5">
            <div class="col-12">
              <ul class="nav nav-tabs">
                <li class="nav-item w-50">
                  <a class="nav-link fichaUsuarios active" aria-current="page">Usuarios</a>
                </li>
                <li class="nav-item w-50">
                  <a class="nav-link fichaProyectos">Proyectos</a>
                </li>
              </ul>
            </div>
          </div>
  
            <!-- tabla proyectos -->
          <div class="border border-top-0 p-3">
            <div class="row">
              <div class="d-flex col-12 col-sm-8 mb-3">
                <!-- Buscador -->
                <div class="input-group flex-nowrap">
                  <span class="input-group-text" id="addon-wrapping">
                    <i class="bi bi-search"></i>
                  </span>
                  <input id="inputBusqueda" type="text" class="form-control" placeholder="Buscador" aria-label="Username" aria-describedby="addon-wrapping"/>
                  <span class="input-group-text" id="addon-wrapping">
                    <i id="borrarBuscador" class="bi bi-x"></i>
                  </span>
                </div>
              </div>
            </div>
            <div id="tabUsuarios" class="col-12" style="overflow-x: auto"></div>
            <div id="tabProyectos" class="col-12 d-none" style="overflow-x: auto"></div>
            <!-- Panel de tarjetas para proyectos -->
            <div id="tabTarjetas" class="d-xl-none row">
              <!-- Aquí se mostrarán los datos generados por la lógica -->
            </div>
          </div>
        </div>
        ${editarImagenPerfil.template}
  `,
  script: async () => {
    const usuario = ls.getUsuario();
    let datosProyectos = await Proyecto.getAll();
    datosProyectos = datosProyectos.map((dato) => {
      const nuevaFecha = dato.created_at.split("T")[0];
      const fechaFormateada = `${nuevaFecha.split("-")[2]}/${nuevaFecha.split("-")[1]}/${nuevaFecha.split("-")[0]}`;
      return { ...dato, created_at: fechaFormateada };
    });
    const datosUsuarios = await User.getAll();
    let selectUsuarios = true;
    document.querySelector(".nav-tabs").addEventListener("click", (event) => {
      if (event.target.classList.contains("fichaUsuarios")) {
        document.querySelector(".fichaUsuarios").classList.add("active");
        document.querySelector(".fichaProyectos").classList.remove("active");
        selectUsuarios = true;
        document.querySelector("#tabUsuarios").classList.remove("d-none");
        document.querySelector("#tabUsuarios").classList.add("d-block");
        document.querySelector("#tabProyectos").classList.add("d-none");
      } else {
        document.querySelector(".fichaProyectos").classList.add("active");
        document.querySelector(".fichaUsuarios").classList.remove("active");
        selectUsuarios = false;
        document.querySelector("#tabProyectos").classList.remove("d-none");
        document.querySelector("#tabProyectos").classList.add("d-block");
        document.querySelector("#tabUsuarios").classList.add("d-none");
      }
      if (selectUsuarios) {
        pintaUsuarios(datosUsuarios);
      } else {
        pintaProyectos(datosProyectos);
      }
    });
    const pintaProyectos = (proyectosFiltrados) => {
      let tablaProyectos = `
          <table class="table table-hover align-middle mt-3" style="min-width: 1000px">
            <thead>
              <tr>
                <th></th>
                <th>Nombre <span><i class="bi bi-caret-down"></i></span></th>
                <th>Descripción <span><i class="bi bi-caret-up"></i></span></th>
                <th>Enlace <span><i class="bi bi-caret-up"></i></span></th>
                <th>Repositorio</th>
                <th>Autor <span><i class="bi bi-caret-up"></i></span></th>
                <th>Fecha <span><i class="bi bi-caret-up"></i></span></th>
                <th>Estado <span><i class="bi bi-caret-up"></i></span></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>`;
      proyectosFiltrados.forEach((proyecto) => {
        tablaProyectos += `
      <tr data-id="${proyecto.id}" class="verDetalle">
        <td>
          <div class="containerImagen">
            <img width="200px" class="verDetalle" data-id="${proyecto.id}" src="${proyecto.imagen || "images/imagenVacia.png"}" alt="imagen proyecto"/>
          </div>
        </td>
        <td>${proyecto.nombre}</td>
        <td>${proyecto.descripcion}</td>
        <td><a href="${proyecto.enlace}" target="_blank"><i class="bi bi-link fs-4"></i></a></td>
        <td><a href="${proyecto.repositorio}" target="_blank"><i class="bi bi-folder-symlink fs-4"></i></a></td>
        <td>${proyecto.nombre_usuario} ${proyecto.apellidos_usuario || ""}</td>
        <td>${proyecto.created_at}</td>
        <td>${proyecto.estado}</td>
        <td>
          <a data-id="${proyecto.id}" class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil botonAdmin botonEditar"></a>
        </td>
        <td>
          <a data-id="${proyecto.id}" class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3 botonAdmin botonBorrar"></a>
        </td>
      </tr>
      `;
      });
      tablaProyectos += `</tbody></table>`;
      document.querySelector("#tabProyectos").innerHTML = tablaProyectos;
    };
    const pintaUsuarios = (usuariosFiltrados) => {
      let tablaUsuarios = `
      <form id="formUsuarios" action="" novalidate>
          <table class="table table-hover align-middle mt-3" style="min-width: 1200px">
              <thead>
                  <tr>
                      <th></th>
                      <th>URL imagen <span><i class="bi bi-caret-down"></i></span></th>
                      <th>Email <span><i class="bi bi-caret-down"></i></span></th>
                      <th>Nombre <span><i class="bi bi-caret-up"></i></span></th>
                      <th>Apellidos <span><i class="bi bi-caret-up"></i></span></th>
                      <th>Fecha <span><i class="bi bi-caret-up"></i></span></th>
                      <th>Rol <span><i class="bi bi-caret-up"></i></span></th>
                      <th>Estado <span><i class="bi bi-caret-up"></i></span></th>
                      <th></th>
                      <th></th>
                  </tr>
              </thead>
            `;
      usuariosFiltrados.forEach((usuario2) => {
        tablaUsuarios += `
            <tr>
              <td>
                  <div class="containerImagen">
                      <div class="rounded-circle d-flex align-items-end justify-content-end" style="
                              background-image: url(${usuario2.avatar || "images/imagenVacia.png"});
                              width: 50px;
                              height: 50px;
                              background-size: cover;
                              background-position: center;
                          ">
                          <i data-id="${usuario2.user_id}" data-avatar="${usuario2.avatar}" data-urlavatar="urlImagen_${usuario2.user_id}" class="btn btn-success btn-sm rounded-circle bi bi-pencil botonEditarImg" data-bs-toggle="modal" data-bs-target="#modalEditarImagenPerfil"></i>
                      </div>
                  </div>
              </td>
              <td>
                  <input id="urlImagen_${usuario2.user_id}" type="url" name="avatar" class="form-control form-control-sm" value="${usuario2.avatar}"/>
              </td>
              <td>
                  <input required id="email_${usuario2.user_id}" type="email" name="email" class="form-control form-control-sm" value="${usuario2.email}"/>
              </td>
              <td>
                  <input id="nombreUsuario_${usuario2.user_id}" type="text" name="nombre" class="form-control form-control-sm" value="${usuario2.nombre}"/>
              </td>
              <td>
                  <input id="apellidosUsuario_${usuario2.user_id}" type="text" name="apellidos" class="form-control form-control-sm" value="${usuario2.apellidos}"/>
              </td>
              <td>
                  <input type="date" name="created_at" class="form-control form-control-sm" value="${usuario2.created_at}"/>
              </td>
              <td>
                  <select class="form-control form-control-sm" name="rol" id="rol_${usuario2.user_id}">
                      <option value="${usuario2.rol}">${usuario2.rol}</option>
                      <option value="2">opción2</option>
                  </select>
              </td>
              <td>
                  <select class="form-control form-control-sm" name="estado" id="estado_${usuario2.user_id}">
                      <option value="${usuario2.estado}">${usuario2.estado}</option>
                      <option value="2">opción2</option>
                  </select>
              </td>
              <td>
                  <button data-id="${usuario2.user_id}" type="submit" class="btn btn-sm btn-success botonActualizar">Actualizar</button>
              </td>
              <td>
                  <i data-id="${usuario2.user_id}" class="btn btn-sm btn-outline-danger bi bi-trash3 botonEliminar"></i>
              </td>
            </tr>
        `;
      });
      tablaUsuarios += `</table></form>`;
      document.querySelector("#tabUsuarios").innerHTML = tablaUsuarios;
    };
    if (selectUsuarios) {
      pintaUsuarios(datosUsuarios);
    } else {
      pintaProyectos(datosProyectos);
    }
    pintaUsuarios(datosUsuarios);
    document.querySelector("main").addEventListener("click", async (event) => {
      const boton = event.target.closest(".botonAdmin");
      if (boton) {
        event.preventDefault();
        event.stopPropagation();
        const id = boton.dataset.id;
        if (boton.classList.contains("botonEditar")) {
          console.log("Editar proyecto " + id);
          window.location = `#/proyectoEditar/${id}`;
        } else if (boton.classList.contains("botonBorrar")) {
          if (confirm("¿Estás seguro de que deseas eliminar este proyecto?")) {
            try {
              await Proyecto.delete(id);
              alert(`Proyecto ${id} eliminado exitosamente.`);
              let datosProyectos2 = await Proyecto.getAll();
              datosProyectos2 = datosProyectos2.map((dato) => {
                const nuevaFecha = dato.created_at.split("T")[0];
                const fechaFormateada = `${nuevaFecha.split("-")[2]}/${nuevaFecha.split("-")[1]}/${nuevaFecha.split("-")[0]}`;
                return { ...dato, created_at: fechaFormateada };
              });
              pintaProyectos(datosProyectos2);
            } catch (error) {
              alert("Error al eliminar el proyecto: " + error.message);
            }
          }
        }
      }
      if (event.target.classList.contains("verDetalle")) {
        const id = event.target.dataset.id;
        window.location = `#/proyectoDetalle/${id}`;
      }
    });
    const inputBusqueda = document.getElementById("inputBusqueda");
    inputBusqueda.addEventListener("input", () => {
      const textoBusqueda = inputBusqueda.value.toLowerCase().trim();
      let informacion = selectUsuarios ? datosUsuarios : datosProyectos;
      const informacionFiltrada = informacion.filter((item) => {
        for (const key in item) {
          const valorCampo = item[key];
          if (typeof valorCampo === "string" && valorCampo.toLowerCase().includes(textoBusqueda)) {
            return true;
          }
        }
        return false;
      });
      if (selectUsuarios) {
        pintaUsuarios(informacionFiltrada);
      } else {
        pintaProyectos(informacionFiltrada);
      }
    });
    document.querySelector("#borrarBuscador").addEventListener("click", () => {
      document.getElementById("inputBusqueda").value = "";
      if (selectUsuarios) {
        pintaUsuarios(datosUsuarios);
      } else {
        pintaProyectos(datosProyectos);
      }
    });
    const formulario = document.querySelector("#formUsuarios");
    formulario.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.target.classList.contains("botonActualizar") && formulario.checkValidity()) {
        const id = e.target.dataset.id;
        enviaDatos(id);
      } else {
        formulario.classList.add("was-validated");
      }
      if (e.target.classList.contains("botonEliminar")) {
        const tr = e.target.parentNode.parentNode;
        tr.classList.add("d-none");
        const id = e.target.dataset.id;
        borrarUsuario(id);
      }
      if (e.target.classList.contains("botonEditarImg")) {
        const avatar = e.target.dataset.avatar;
        const urlAvatar = e.target.dataset.urlavatar;
        const id = e.target.dataset.id;
        editarImagenPerfil.script(avatar, urlAvatar, id);
      }
    });
    formulario.addEventListener("change", (e) => {
      if (!formulario.checkValidity()) {
        formulario.classList.add("was-validated");
      } else {
        formulario.classList.remove("was-validated");
      }
    });
    function enviaDatos(id) {
      const proyectoEditado = {
        imagen: document.querySelector("#urlImagen_" + id).value,
        nombre: document.querySelector("#nombreUsuario_" + id).value,
        apellidos: document.querySelector("#apellidosUsuario_" + id).value,
        estado: document.querySelector("#estado_" + id).value,
        email: document.querySelector("#email_" + id).value
      };
      alert(
        `Enviando a la base de datos el objeto con id = ${usuario.user_id}`
      );
      console.log(
        `Enviando a la base de datos el objeto con id = ${usuario.user_id}`,
        proyectoEditado
      );
    }
    function borrarUsuario(id) {
      alert("Borrando usuario " + id);
    }
  }
};
export {
  adminVista as default
};
