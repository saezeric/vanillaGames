import { P as Perfil } from "./perfil-a08d71da.js";
import { U as User } from "./main-85e29c0e.js";
const registroVista = {
  template: `<div class="container">
  <h1 class="mt-5 text-center">Registro</h1>
  <div class="m-5 mx-auto" style="max-width: 400px">
    <!-- Formulario de registro -->
    <form id="formularioRegistro" novalidate action="" class="form border shadow-sm p-3">
      <!-- Nombre -->
      <label for="nombre" class="form-label">Nombre:</label>
      <input required id="nombre" type="text" class="form-control" />

      <!-- Apellidos -->
      <label for="apellidos" class="form-label">Apellidos:</label>
      <input id="apellidos" type="text" class="form-control" />

      <!-- Email -->
      <label for="email" class="form-label">Email:</label>
      <input required id="email" name="email" type="email" class="form-control" />
      <div class="invalid-feedback">
        El formato del email no es correcto
      </div>
      <!-- Contraseña -->
      <label for="password" class="form-label mt-3">Contraseña:</label>
      <input
        required
        minlength="6"
        id="password"
        name="password"
        type="password"
        class="form-control"
      />
      <div class="invalid-feedback">
        La contraseña debe tener como mínimo 6 caracteres
      </div>

      <!-- Botón enviar -->
      <input
        type="submit"
        class="btn btn-primary w-100 mt-3"
        value="Enviar"
      />
    </form>
  </div>
</div>`,
  script: () => {
    console.log("vista registro cargada");
    const formulario = document.querySelector("#formularioRegistro");
    formulario.addEventListener("submit", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!formulario.checkValidity()) {
        formulario.classList.add("was-validated");
      } else {
        try {
          const usuario = {
            email: formulario.email.value,
            password: formulario.password.value
          };
          console.log("Formulario valido. Datos formulario: ", usuario);
          const user = await User.create(usuario);
          console.log("user creado", user);
          const perfil = {
            user_id: user.id,
            nombre: formulario.nombre.value,
            apellidos: formulario.apellidos.value,
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png",
            estado: "activo",
            rol: "registrado"
          };
          console.log(perfil);
          Perfil.create(perfil);
          alert("Usuario creado correctamente. Revisa tu email...");
          window.location = "#/login";
        } catch (error) {
          console.log("Error al registrarse", error);
          alert("Error al crear usuario", error);
        }
      }
    });
  }
};
export {
  registroVista as default
};
