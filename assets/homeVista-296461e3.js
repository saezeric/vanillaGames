import { P as Perfil } from "./perfil-a08d71da.js";
import "./main-85e29c0e.js";
const homeVista = {
  // html
  template: `
  <div class="container">
  <h1 class="mt-5 text-center fw-bold" style="font-size: 100px">
    Vanilla Games
  </h1>
  <div class="m-5 mx-auto" style="max-width: 400px">
    <img
      src="https://carrebola.github.io/vanillaPill/img/logo.svg"
      alt="fpllefia"
      class="img-fluid"
    />
  </div>
</div>
  `,
  script: async () => {
    console.log("Vista home cargada");
    const resultado = await Perfil.getAll();
    console.log(resultado);
  }
};
export {
  homeVista as default
};
