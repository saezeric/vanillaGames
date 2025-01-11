const registroVista = {
  template: `<div class="container">
  <h1 class="mt-5 text-center">Registro</h1>
  <div class="m-5 mx-auto" style="max-width: 400px">
    <!-- Formulario de registro -->
    <form novalidate action="" class="form border shadow-sm p-3">
      <!-- Nombre -->
      <label for="nombre" class="form-label">Nombre:</label>
      <input required id="nombre" type="text" class="form-control" />

      <!-- Apellidos -->
      <label for="apellidos" class="form-label">Apellidos:</label>
      <input id="apellidos" type="text" class="form-control" />

      <!-- Email -->
      <label for="email" class="form-label">Email:</label>
      <input required type="email" class="form-control" />
      <div class="invalid-feedback">
        El formato del email no es correcto
      </div>
      <!-- Contraseña -->
      <label for="pass" class="form-label mt-3">Contraseña:</label>
      <input
        required
        minlength="6"
        id="pass"
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
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", (event) => {
      if (!formulario.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      formulario.classList.add("was-validated");
    });
  }
};
export {
  registroVista as default
};
