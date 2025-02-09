### **Definiendo el proyecto 'Vanilla Games'**

#### **Escenario del proyecto**

**Vanilla Games S.L.** es una empresa de desarrollo de minijuegos para navegadores web, creados con **vanillaJS**, es decir, desarrollados exclusivamente con Javascript como lenguaje de programación (sin frameworks).

En esta empresa trabajan **10 desarrolladores** y, habitualmente, suelen tener a **tres alumnos/as en prácticas**, de los cuales, al menos uno, tendrá muchas posibilidades de formar parte del equipo de desarrollo al acabar su etapa de formación.

El método de trabajo que se utiliza en dicha empresa consiste en:

- Proponer a cada uno de los miembros del equipo el desarrollo de un minijuego que, al acabar, deberán compartir con el resto de sus compañeros.
- Estos, a su vez, deben comentar y valorar cada una de las propuestas.
- Finalmente, en la empresa hay un equipo responsable de seleccionar aquellas propuestas que muestran un mayor potencial para ser desarrolladas de manera definitiva por todo el equipo de trabajo, con el fin de crear una aplicación para su posterior comercialización.

Hasta la fecha, para el proceso de publicación de proyectos, comentarios y valoración, utilizaban algunas herramientas ofimáticas, tipo hoja de cálculo de Google. Actualmente, pretenden crear una **aplicación web tipo intranet** para llevar a cabo este propósito.

Como alumno en prácticas, tu trabajo consiste en crear una aplicación web que permitirá a los desarrolladores de Vanilla Games publicar sus propuestas de minijuegos, de manera que el resto de compañeros pueda hacer comentarios y emitir una valoración de cada proyecto publicado en esta plataforma.

---

#### **Requisitos del proyecto y casos de uso general**

Los **casos de uso** son una técnica de modelado utilizada en el desarrollo de software para describir las interacciones entre un sistema y sus usuarios. En términos simples, los casos de uso describen cómo los usuarios interactúan con un sistema y qué resultados esperan obtener de él.

**Información**  
Los casos de uso son útiles para:

- Comprender los requisitos del sistema y cómo se debe diseñar y desarrollar el software para satisfacer las necesidades de los usuarios.
- Comunicar los requisitos del sistema entre los miembros del equipo de desarrollo, los _stakeholders_ y los usuarios finales.

Además, los casos de uso pueden ser utilizados para:

1. **Identificar los requisitos funcionales y no funcionales del sistema.**
2. **Ayudar a definir el alcance del proyecto.**
3. **Facilitar la planificación y estimación de tiempo y recursos necesarios para el desarrollo del sistema.**
4. **Facilitar la identificación y resolución de problemas antes de que se implemente el sistema.**
5. **Ayudar a definir las pruebas necesarias para verificar que el sistema cumpla con los requisitos de los usuarios.**

En general, los casos de uso son una herramienta esencial para comprender y especificar los requisitos de un sistema, y para garantizar que el software desarrollado satisfaga las necesidades de los usuarios finales.

---

#### **Casos de uso general**

Esta aplicación web debe permitir:

1. **Registro de usuario:** El usuario se registra con nombre, apellidos, email y contraseña.
2. **Inicio y cierre de sesión.**
3. **Visualización de proyectos publicados:** Un usuario registrado puede ver un listado de proyectos publicados por los desarrolladores.
4. **Edición de perfil:** Permite subir una imagen de tipo avatar.

Si el usuario registrado tiene el perfil de _desarrollador_, además, debe poder:

- Publicar proyectos con información como nombre del proyecto, descripción, imagen representativa y enlaces al proyecto desplegado y al repositorio del código.
- Eliminar o editar sus proyectos.
- Realizar comentarios y añadir una valoración en forma de estrellas a cada uno de los proyectos publicados.

**Administrador:**  
El administrador podrá:

- Administrar el perfil de los usuarios registrados (editar, borrar, etc.).
- Modificar el rol de cada usuario.
- Controlar total sobre los comentarios y valoraciones.

---

### **Fases de desarrollo**

Necesitamos organizarnos un poco. Vamos a planificar cómo llevar a cabo las diferentes fases para cumplir con nuestros objetivos:

1. **Definición del proyecto y requisitos básicos:**  
   En primer lugar, debemos tener muy claro qué se espera de nuestra aplicación, por lo que anotaremos cada funcionalidad teniendo en cuenta los diferentes actores (roles de acceso). Esto es lo que hemos hecho en el apartado anterior.

2. **Definición de las versiones:**  
   Una vez conocemos los requisitos del proyecto, dividiremos el trabajo en diferentes versiones, de manera que todas ellas serán operativas, aunque cada una ampliando las funcionalidades.

3. **Planificación del proyecto:**  
   Basándonos en la metodología Agile, dividiremos todo el proceso en diferentes historias/tareas (para cada una de las versiones definidas) que agruparemos, temporizaremos y representaremos mediante diagramas.

4. **Diseño de la interfaz:**  
   Basándonos en el diseño centrado en el usuario (DCU):

   - **i.** Realizaremos un _Benchmarking_ (para copiar a la competencia).
   - **ii.** Crearemos un modelo de usuarios.
   - **iii.** Diseñaremos los prototipos de bajo nivel (bocetos, wireframes).
   - **iv.** Diseñaremos el _mockup_ (prototipo de alto nivel) junto a la guía de estilos (usaremos la aplicación Figma).
   - **v.** Haremos pruebas de usabilidad y rediseñaremos los prototipos.

5. **Programación del frontend (HTML/CSS/JS):**  
   Maquetaremos los prototipos (HTML/CSS) y diseñaremos la lógica de validación de cliente.

6. **Programación del backend:**  
   Utilizaremos un backend como servicio (SUPABASE) para:

   - Crear las bases de datos.
   - Diseñar consultas SQL y funciones _Postgres_.
   - Programar un ORM en JavaScript para el _mapping_ de la base de datos.

7. **Integración de frontend y backend en la aplicación:**

   - Programaremos la SPA a partir de los prototipos.
   - Programaremos la lógica de acceso a la base de datos empleando el ORM.
   - Programaremos el resto de funcionalidades (sesiones, roles de acceso, etc.).

8. **Análisis de usabilidad II:**  
   Haremos pruebas de usabilidad (test de usuarios) y solucionaremos los posibles conflictos detectados.

9. **Testing y despliegue en producción:**
   - Diseñaremos un sistema de testing para crear tests unitarios.
   - Configuraremos un entorno DevOps para trabajar con Integración continua y despliegue continuo (CI/CD).
   - Desplegaremos en producción cada una de las versiones.

---

### **Versiones**

Vamos a dividir el desarrollo del proyecto en diferentes versiones a partir de las funcionalidades que podrá realizar:

- **VERSIÓN 1.0:** Implementación de la publicación de proyectos.
- **VERSIÓN 2.0:** Implementación de los comentarios de los proyectos.
- **VERSIÓN 3.0:** Implementación del sistema de valoración mediante estrellas.
- **VERSIÓN 4.0:** Implementación del sistema de valoración basado en rúbricas o criterios de valoración.

---

### **Arquitectura y tecnologías**

Al decidir la arquitectura para nuestro proyecto, debemos tener en cuenta varias consideraciones como la velocidad de carga inicial, el SEO, la experiencia de usuario, etc., y aspectos técnicos. Analizaremos las posibilidades que podemos elegir para la implementación de nuestro proyecto:

#### **ARQUITECTURAS**

- **Server-side rendering (SSR):**  
   En SSR, el servidor procesa la petición del cliente y devuelve una página web completamente renderizada. Esto significa que el servidor envía HTML, CSS y JavaScript al navegador web del cliente, y el navegador solo necesita renderizar el contenido. SSR es beneficioso para el SEO y la velocidad de carga inicial de la página.  
   _[Aquí tienes más información sobre las diferentes arquitecturas]_.

- **Client-side rendering (CSR):**  
   En CSR, el servidor envía una página web vacía o mínima al navegador del cliente y luego el cliente utiliza JavaScript para renderizar el contenido. Esto significa que el navegador necesita descargar e interpretar el código JavaScript para mostrar el contenido. CSR es beneficioso para la interactividad de la página y una mejor experiencia de usuario.  
   _[Aquí tienes más información sobre las diferentes arquitecturas]_.

- **Static site generation (SSG):**  
   En SSG, el contenido de una página web se genera de antemano en archivos HTML estáticos, los cuales se sirven al navegador del cliente. Esto es ideal para sitios web con contenido estático que no necesita actualizaciones frecuentes y para mejorar la velocidad de carga de la página.  
   _[Aquí tienes más información sobre las diferentes arquitecturas]_.

- **Incremental static regeneration (ISR):**  
   ISR es una técnica de SSG que permite actualizar secciones específicas de una página web en lugar de regenerar la página completa cada vez. Esto es útil para páginas web que contienen contenido estático pero que necesitan actualizar secciones específicas de forma frecuente.  
   _[Aquí tienes más información sobre las diferentes arquitecturas]_.

---

### **¿Qué arquitectura vamos a utilizar en nuestro proyecto?**

Nos basaremos en **CSR**: renderizamos todo el código HTML en el navegador. El cliente solo se encargará de responder a las peticiones devolviendo los datos solicitados (en formato JSON). De esta manera, podemos dividir la implementación del proyecto en **FRONTEND** y **BACKEND**, separando cada funcionalidad y desarrollándola de manera independiente.

### **¿Cómo diseñaremos nuestro Frontend?**

#### **Diseño de la interfaz**

1. Crearemos los bocetos de nuestra aplicación (_con papel y lápiz, como se ha hecho siempre_).
2. Evolucionaremos hacia el **Wireframe** (Diseño de alambres carente de estilo) que finalmente se convertirá en un **Mockup** (diseño con colores y tipografías definitivas). Para el diseño de este último y para la implementación de la guía de estilos, utilizaremos la herramienta **FIGMA**.

#### **Maquetación del frontend**

1. Crearemos los prototipos utilizando **HTML5**, **CSS3** y el framework **Bootstrap 5**.
2. Utilizaremos una plantilla **Bootswatch** que adaptaremos a nuestro diseño mediante **SASS**.
3. Integraremos los prototipos HTML en la SPA e implementaremos la lógica de programación utilizando **VanillaJS** (JavaScript puro, ES6, sin usar frameworks).

### **¿Cómo implementaremos las funcionalidades del Backend?**

#### **Usaremos SUPABASE como servicio de Backend**

1. **Bases de datos relacionales:**  
   Supabase nos permite almacenar la información en bases de datos relacionales en un entorno basado en **PostgreSQL**.
2. Ofrece:
   - Un sistema de autenticación basado en proveedores como Google, GitHub, etc.
   - Control de accesos según roles a través de las políticas de permisos.
   - Almacenamiento de archivos en los _buckets_ (para imágenes).
   - Una API en JavaScript para las peticiones más frecuentes que atacan a las tablas de la base de datos (CRUD) y un sistema de funciones personalizadas.

### **Nuestro entorno de desarrollo: VSCODE**

1. Trabajaremos con **VSCode** sobre **Nodejs** y su gestor de paquetes **npm**.
2. Configuraremos el IDE con los plugins necesarios para facilitar un buen flujo de trabajo.
3. Formatearemos el código siguiendo el estándar 'Standard' mediante herramientas de verificación como 'Eslint'.
4. Usaremos un repositorio **Git** sincronizado con **GitHub** para el control de versiones.

### **Y para el despliegue de nuestras aplicaciones**

Desplegaremos el proyecto en **GitHub Pages** (en la fase de pruebas) y utilizaremos un servicio como **RailWay**, **Netlify**, etc., para el despliegue en producción.

### **Requisitos y diagrama de casos de uso**

En la introducción de esta documentación, en la sección **El proyecto Vanilla Games**, en concreto en el apartado **Requisitos del proyecto y casos de uso general**, hemos definido qué se espera de nuestra aplicación web, a partir de los _'Casos de uso general'_.

También hemos dividido todo el trabajo de desarrollo en diferentes versiones, con la intención de que nuestro proyecto esté operativo desde el inicio de su implementación, de manera que conforme evolucione a posteriores versiones, aumentaremos su nivel de funcionalidad.

Por lo tanto, vamos a comenzar por la **versión 1.0**.

Lo primero es definir los **casos de uso** para esta versión. Una primera aproximación podría ser la siguiente:

> **Recuerda que...**  
> Los casos de uso son una herramienta esencial para comprender y especificar los requisitos de un sistema, y para garantizar que el software desarrollado satisfaga las necesidades de los usuarios finales.

---

### **Casos de uso para la V1.0 - Definición básica**

1. **Registrar usuario:** Un usuario puede registrarse en la plataforma proporcionando su nombre, apellidos, email y contraseña.
2. **Recuperar contraseña:** Un usuario registrado puede solicitar la recuperación de su contraseña en caso de que la haya olvidado. Para ello, se le enviará un correo electrónico con las instrucciones para restablecer su contraseña.
3. **Iniciar sesión:** Un usuario registrado puede iniciar sesión en la plataforma proporcionando su email y contraseña.
4. **Cerrar sesión:** Un usuario puede cerrar su sesión en la plataforma en cualquier momento.
5. **Editar perfil:** Un usuario registrado puede editar su perfil, actualizando su nombre, apellidos, email o contraseña.
6. **Ver proyectos:** Un usuario registrado puede ver un listado de proyectos publicados por los desarrolladores.
7. **Publicar proyecto:** Un usuario con el perfil de desarrollador puede publicar un proyecto proporcionando información como nombre, descripción, imagen representativa, enlaces a servidor de pruebas y repositorio de código, estado del proyecto, etc.
8. **Editar proyecto:** Un usuario con el perfil de desarrollador puede editar un proyecto que haya publicado previamente, actualizando la información del proyecto.
9. **Eliminar proyecto:** Un usuario con el perfil de desarrollador puede eliminar un proyecto que haya publicado previamente.
10. **Ver/Editar usuarios:** Un administrador puede ver una tabla con todos los usuarios registrados y editar la información, incluido el _ROL_ de usuario.
11. **Eliminar usuario:** Un administrador puede eliminar cualquier usuario registrado en la plataforma.

---

### **Diagrama de casos de uso**

Para tener la información de manera gráfica, vamos a utilizar uno de los **diagramas UML** que aprendimos a hacer el curso pasado:

> **Información**  
> **¿Qué es un diagrama UML?**  
> UML, que significa _Lenguaje de Modelado Unificado_ (_Unified Modeling Language_, en inglés), es un lenguaje estándar utilizado en el desarrollo de software para visualizar, especificar, construir y documentar los artefactos de un sistema. Los diagramas UML son representaciones gráficas utilizadas en UML para modelar diferentes aspectos del sistema.
>
> Existen varios tipos de diagramas UML, cada uno de los cuales se enfoca en un aspecto específico del sistema y proporciona diferentes niveles de detalle. Algunos de los diagramas UML más comunes son:
>
> - **Diagrama de casos de uso:** Describe las interacciones entre los actores y el sistema, mostrando qué funcionalidades proporciona el sistema a los usuarios.
> - **Diagrama de clases:** Representa la estructura estática del sistema, mostrando las clases, sus atributos, métodos y las relaciones entre ellas.
> - **Diagrama de secuencia:** Muestra la interacción entre los objetos en una secuencia temporal, describiendo cómo los objetos se comunican y colaboran entre sí.
> - **Diagrama de actividades:** Describe el flujo de trabajo o los procesos empresariales en un sistema, mostrando las actividades y las decisiones que se toman en cada etapa.
> - **Diagrama de componentes:** Muestra la estructura de componentes de un sistema, identificando los componentes y las dependencias entre ellos.
> - **Diagrama de despliegue:** Representa la arquitectura física del sistema, mostrando cómo los componentes se distribuyen en el hardware y la red.
>
> Estos son solo algunos ejemplos de los diagramas UML más utilizados, pero hay otros diagramas, como el _diagrama de estados_, el _diagrama de objetos_ y el _diagrama de comunicación_, que también se utilizan para modelar diferentes aspectos de un sistema. En general, los diagramas UML proporcionan una representación visual clara y sistemática del sistema, lo que facilita la comprensión, la comunicación y el diseño del software.
>
> 📖 [Aquí encontrarás más información sobre los diagramas UML] 📖

---

### **¿Qué es un diagrama de casos de uso?**

Un **diagrama de casos de uso** es una herramienta utilizada en el análisis y diseño de sistemas de software para representar las interacciones entre los actores (usuarios o sistemas externos) y el sistema en sí. Es una representación visual que describe cómo se utilizará el sistema desde la perspectiva del usuario.

En un diagrama de casos de uso:

- Los **actores** se representan mediante figuras externas al sistema, como personas, otros sistemas o incluso dispositivos.
- Los **casos de uso** se representan como elipses y describen las diferentes acciones o funciones que el sistema proporciona a los actores.

El diagrama muestra las relaciones entre los actores y los casos de uso a través de líneas que conectan las figuras correspondientes. Estas líneas representan las interacciones entre los actores y el sistema, indicando qué casos de uso son accesibles para cada actor.

Los **casos de uso** se utilizan para capturar los requisitos funcionales del sistema y proporcionar una visión general de cómo interactúan los diferentes actores con el sistema. También ayudan a identificar los distintos escenarios de uso y las relaciones entre ellos.

El diagrama de casos de uso es una herramienta valiosa para comunicar y comprender las funcionalidades clave del sistema entre los desarrolladores, los usuarios y otros interesados en el proyecto de software.

> 📖 [Aquí encontrarás más información sobre los diagramas de casos de uso] 📖

---

### **Vamos a crear nuestro diagrama de casos de uso**

> **Tip:**  
> Para dibujar el diagrama de casos de uso, una herramienta interesante puede ser **FIGMA**.  
> _Figma_ es una herramienta de diseño de interfaces de usuario (UI) y experiencia de usuario (UX) basada en la nube. Permite a los diseñadores crear, prototipar y colaborar en diseños interactivos de alta calidad de forma colaborativa.

El diagrama de casos de uso para la **versión 1.0** sería el siguiente:

---

### **Diagrama de casos de uso para la versión 1.0**

![Diagrama de casos de uso](https://carrebola.github.io/vanillaPill/assets/images/diagramaCasosUso_1-3fc60e64208490df3bd2eb0f595cedbc.png)

Este diagrama refleja de forma resumida qué acciones se pueden llevar a cabo en nuestra aplicación dependiendo del rol del usuario.

Ahora que tenemos claro todo lo que debe hacer la versión 1.0, nuestra misión es planificar el trabajo que se nos viene encima...

### **Casos de uso específicos y diagramas de flujo**

En el primer apartado **'Requisitos y diagrama de casos de uso'** para esta versión **1.0**, hemos definido de manera general los casos de uso que se contemplan para cada actor y los hemos reflejado en un diagrama de casos de uso.

Es el momento de ser más concretos y detenernos a reflexionar en cada uno de los procesos que se realizarán para cada tarea, incluyendo los posibles errores cometidos por el usuario o el propio sistema.

### **Casos de uso específicos**

#### 1. **Registrar usuario**

- **Actores:** Usuario no registrado.
- **Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de registro.
2. El usuario introduce su nombre, apellidos, email y contraseña.
3. El sistema valida que los campos estén completos y que el email no esté registrado previamente.
4. El sistema crea un nuevo usuario con los datos proporcionados.
5. El sistema muestra un mensaje de confirmación y redirige al usuario a la página de inicio.

**Flujos alternativos:**

- **3a.** El sistema detecta que el email ya está registrado: muestra un mensaje de error y no crea la cuenta.

#### 2. **Recuperar contraseña**

- **Actores:** Usuario registrado.
- **Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de registro.
2. El usuario selecciona la opción 'Recuperar contraseña'.
3. El sistema valida que el campo 'email' esté completo y que el email esté registrado previamente.
4. El sistema muestra un mensaje de confirmación de envío del email para la recuperación de contraseña y redirige al usuario a la página de inicio.

**Flujos alternativos:**

- **3a.** El sistema detecta que el email no está registrado: muestra un mensaje de error y no envía el email.

#### 3. **Iniciar sesión**

- **Actores:** Usuario registrado.
- **Precondiciones:** El usuario no ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de inicio de sesión.
2. El usuario introduce su email y contraseña.
3. El sistema valida las credenciales y crea una sesión para el usuario.
4. El sistema redirige al usuario a la página principal de la aplicación.

**Flujos alternativos:**

- **3a.** Las credenciales son incorrectas: el sistema muestra un mensaje de error y no crea la sesión.

#### 4. **Cerrar sesión**

- **Actores:** Usuario registrado.
- **Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**

1. El usuario hace clic en el botón de "cerrar sesión".
2. El sistema cierra la sesión del usuario.
3. El sistema redirige al usuario a la página de inicio.

#### 5. **Ver/Editar perfil**

- **Actores:** Usuario registrado.
- **Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de edición de perfil.
2. El usuario edita su nombre, apellidos y contraseña.
3. El sistema valida los campos y actualiza el perfil del usuario.
4. El sistema muestra un mensaje de confirmación.

**Flujos alternativos:**

- **3a.** El usuario intenta cambiar su email: el sistema valida que el email no esté registrado previamente.

#### 6. **Ver proyectos**

- **Actores:** Usuario registrado.
- **Precondiciones:** El usuario ha iniciado sesión.

**Flujo básico:**

1. El usuario navega a la página de proyectos.
2. El sistema muestra una lista de proyectos publicados por desarrolladores.
3. El usuario puede hacer clic en un proyecto para ver más detalles.
4. El usuario puede mostrar/filtrar los proyectos a partir de un buscador.

#### 7. **Publicar proyecto**

- **Actores:** Usuario registrado con perfil de desarrollador.
- **Precondiciones:** El usuario ha iniciado sesión y su perfil es de desarrollador.

**Flujo básico:**

1. El usuario navega a la página de publicación de proyecto.
2. El usuario introduce el nombre, descripción, imagen representativa, enlaces de servidor y repositorio, estado y otra información relevante del proyecto.
3. El sistema valida los campos y crea un nuevo proyecto.
4. El sistema muestra un mensaje de confirmación y redirige al usuario a la página de proyectos.

**Flujos alternativos:**

- **2a.** El desarrollador decide no publicar el proyecto y selecciona la opción de cancelar.
  - El sistema descarta la información ingresada en el formulario.
  - El sistema muestra un mensaje de confirmación al desarrollador.

#### 8. **Editar proyecto**

- **Actor principal:** Desarrollador
- **Objetivo:** Editar la información de un proyecto previamente creado.
- **Precondiciones:** El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

**Flujo principal:**

1. El usuario selecciona la opción de "Editar proyecto".
2. El sistema muestra la lista de proyectos previamente creados por el usuario.
3. El usuario selecciona el proyecto que desea editar.
4. El sistema muestra el formulario de edición del proyecto con la información actual del mismo.
5. El usuario realiza los cambios necesarios en la información del proyecto y guarda los cambios.
6. El sistema valida la información ingresada por el usuario y actualiza la información del proyecto en la base de datos.
7. El sistema muestra una confirmación de que la información del proyecto ha sido actualizada correctamente.

#### 9. **Eliminar proyecto**

- **Actor principal:** Desarrollador
- **Objetivo:** Eliminar un proyecto previamente creado.
- **Precondiciones:** El usuario debe haber iniciado sesión como desarrollador y tener al menos un proyecto previamente creado.

**Flujo principal:**

1. El usuario selecciona la opción de "Eliminar proyecto" del proyecto que desea eliminar.
2. El sistema muestra una confirmación preguntando si el usuario está seguro de eliminar el proyecto seleccionado.
3. El usuario confirma que desea eliminar el proyecto.
4. El sistema elimina el proyecto de la base de datos y muestra una confirmación de que el proyecto ha sido eliminado correctamente.
5. El sistema actualiza la información de los proyectos.

#### 10. **Ver/Editar usuario**

- **Actor principal:** Usuario administrador
- **Objetivo:** Editar la información de los usuarios registrados.
- **Precondiciones:** El usuario debe haber iniciado sesión en la aplicación y tener rol de administrador.

**Flujo principal:**

1. El usuario selecciona la opción de "Ver usuarios".
2. El sistema muestra una tabla con 'inputs' que contienen los datos de los usuarios.
3. El administrador realiza los cambios necesarios en la información de los usuarios (incluido el rol y el estado) y guarda los cambios.
4. El sistema valida la información ingresada por el usuario y actualiza la información del usuario en la base de datos.
5. El sistema muestra una confirmación de que la información del perfil ha sido actualizada correctamente.

#### 11. **Eliminar usuario**

- **Actor principal:** Usuario administrador
- **Objetivo:** Eliminar un usuario del sistema.
- **Precondiciones:** El usuario debe haber iniciado sesión en la aplicación y tener rol de administrador.

**Flujo principal:**

1. El usuario selecciona la opción de "Ver usuarios".
2. El sistema muestra una tabla con 'inputs' que contienen los datos de los usuarios.
3. El administrador hace clic en el icono de eliminar usuario de la fila correspondiente.
4. El sistema informa al administrador de que se eliminarán todos los registros del usuario seleccionado.
5. El sistema muestra una confirmación de que el usuario ha sido borrado correctamente.

---

### **Errores**

Vamos a repasar los diferentes casos de uso analizando el flujo principal y añadiendo los flujos alternativos para contemplar los posibles errores del sistema. Puedes considerar los siguientes mensajes:

- **Error de conexión:** El servidor no puede establecer una conexión con la base de datos, lo que impide que se puedan realizar operaciones en la plataforma. El sistema debería mostrar un mensaje de error indicando que no se pudo conectar con la base de datos y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

- **Error de validación:** Cuando el sistema recibe información del usuario, debe validarla para asegurarse de que cumple con los requisitos de formato y contenido necesarios. Si la información no es válida, el sistema debería mostrar un mensaje de error indicando el problema específico, como "El campo de correo electrónico debe ser una dirección de correo válida".

- **Error de autenticación:** Si un usuario intenta acceder a una página o realizar una acción que requiere autenticación, pero no ha iniciado sesión o sus credenciales son incorrectas, el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada y ofrecer la posibilidad de iniciar sesión o recuperar la contraseña.

- **Error de autorización:** Si un usuario intenta realizar una acción que no está autorizado a realizar debido a su rol, el sistema debería mostrar un mensaje de error indicando que la acción no está autorizada y ofrecer la posibilidad de volver a la página anterior.

- **Error de servidor:** En caso de que se produzca un error interno en el servidor, como una excepción no controlada, el sistema debería mostrar un mensaje de error genérico indicando que se produjo un error y ofrecer la posibilidad de volver a intentarlo o contactar con el soporte técnico.

### **Hist3a - Diseño de la interfaz. Bocetos**

Una vez tenemos claras las funcionalidades que debe realizar nuestra aplicación, comenzamos con el diseño de la interfaz.

Este proceso incluye diseñar los bocetos, los _wireframes_ y los _mockups_, para acabar creando los prototipos con HTML.

Sin duda, el primer paso debe ser dibujar los bocetos. Así que, busca un lápiz, una goma de borrar y un puñado de papel, ¡y manos a la obra!

---

### **Diseño de Bocetos**

> **Información**  
> Recuerda que los **bocetos** son dibujos a mano alzada que representan ideas de diseño de manera rápida y no detallada. Los bocetos suelen ser utilizados al inicio del proceso de diseño para explorar diferentes ideas y soluciones de diseño de manera rápida y económica. Son ideales para hacer borradores rápidos y para discutir ideas con colegas y clientes.

---

### **Home y menús de usuarios**

![Link de la imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508218-79dad6473fd7d571d5f73e96f893af7f.jpg)

Hemos dividido la interfaz en 3 zonas: el encabezado (_header_), el cuerpo principal (_main_) y el pie de página (_footer_).

- **Header:** Contendrá una barra superior fija con:

  - El logo y nombre de la web (que hará de enlace a la página principal).
  - Un menú central genérico (para acceder a páginas públicas).
  - Un menú central específico (diferente en función del rol de usuario logueado).
  - Un icono (_avatar_) que mostrará la imagen del usuario logueado y actuará como botón para desplegar otro menú, el _menú de usuario_ (que tendrá diferentes ítems dependiendo de si la sesión está abierta o no, y del tipo de rol que tenga el usuario logueado).

- **Cuerpo (_main_):** Albergará el contenido de las páginas. Será la sección que cambie dependiendo de la página cargada. En la página _home_ simplemente aparece una imagen de fondo y el nombre de la web.

- **Footer:** Será meramente informativo.

---

### **Registro de un usuario**

![Link de la imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508212-88f1ed0a8c53df9f791872b3b03519d8.jpg)

---

### **Iniciar sesión**

![Link de la imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508205-edba4a097ae58ec58f1bb07dc4b7e5e1.jpg)

---

### **Editar mi perfil**

![Link de la imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508198-5b5eff368d5421682a834f3ed67af5bd.jpg)

**Editar perfil** será una ventana modal, es decir, se mostrará la ventana y el fondo se volverá oscuro.

- Esta ventana de edición permitirá, además de modificar los datos del usuario, añadir una imagen de avatar. Por el momento, en esta primera versión, podremos añadir el link de una imagen alojada en un servidor.
- En la siguiente versión (versión 1.1), actualizaremos esta ventana para que puedan subirse archivos (imágenes) al servidor.

---

### **Listado de todos los proyectos**

![Link de la imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508192-6b771260fe99faccc760b23f71f02406.jpg)

En esta página podemos ver, en la pestaña izquierda, todos los proyectos en forma de tabla. La pestaña derecha mostrará solo los proyectos subidos por el usuario que ha iniciado la sesión.

- Al hacer clic en cualquier parte de la fila se accede al detalle del proyecto.
- Hay un buscador que permite buscar proyectos por palabras clave en el nombre o descripción.
- Las celdas de encabezado de las tablas incluyen un icono (flecha hacia arriba o hacia abajo) que permite ordenar la tabla por la columna en concreto.

---

### **Listado de Mis proyectos**

![Link de la imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508186-f38d99164909a0783d2040ce646e928a.jpg)

En esta pestaña podemos ver los trabajos pertenecientes al usuario logueado.

- En cada fila aparece, además, un icono para editar y borrar el proyecto correspondiente.
- Existe la opción de subir un nuevo proyecto.
- Hay que valorar si es mejor crear un único buscador para el nombre y descripción del proyecto, o dos barras de búsqueda, como se muestra en el boceto anterior.

---

### **Detalle de un proyecto**

![Link de la imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508178-ed1f5e41681a1dcee1edac19f807c239.jpg)

Si el usuario que está viendo la información de un proyecto en concreto es el autor de dicho proyecto, aparecerá un icono para la edición del mismo.

---

### **Nuevo proyecto / Editar un proyecto**

![Link de la imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508170-9db2cd42ef7a339d517e3d0b38d4ae45.jpg)

Esta vista sirve tanto para crear un nuevo proyecto como para editarlo.

- Si el proyecto es nuevo, el botón mostrará el texto **ENVIAR**, pero si estamos editándolo, aparecerá el texto **ACTUALIZAR**.
- Al crear o actualizar el proyecto, la web nos reenvía a la vista 'Detalle de proyecto'.

---

### **Panel de administración de proyectos**

![Link de la imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508161-c9cfd413730d67ea74b43e48fedea5ec.jpg)

Si tienes el rol **'administrador'**, aparecerá el ítem **'Panel administración'** en el menú superior específico. Este ítem permite cargar la vista **'Panel administración de proyectos'**. Desde esta vista también se puede acceder al **'Panel administración de usuarios'**.

- Esta vista permite editar o borrar cualquier proyecto haciendo clic en los iconos correspondientes.
- La opción de editar nos llevará a la vista **'Editar proyecto'**.

---

### **Panel de administración de usuarios**

![Link de la imagen](https://carrebola.github.io/vanillaPill/assets/images/1684861508152-04e98cfb1faeecf2a53ea921bdd63ebe.jpg)

Esta vista permite editar los datos de los usuarios. Por supuesto, es solo accesible para los administradores.

- En esta vista, el método para editar la información es diferente. Los datos aparecen sobre _inputs_, de manera que al hacer clic sobre ellos, aparecerá el cursor de edición.
- Se pueden modificar todos los datos (especialmente el **'estado'** y el **'rol'** del usuario) excepto el email.

### **Hist3b - Test de usuarios inicial**

#### **Primer Test de Usabilidad**

Tal y como hemos comentado en el apartado **'Diseño centrado en el usuario'**, una de las premisas de esta metodología consiste en realizar evaluaciones constantes para detectar los posibles problemas de usabilidad cuanto antes mejor. Por lo tanto, una buena idea es realizar un primer test de usabilidad.

> **Información**  
> Más adelante, hablaremos con más detalle de la usabilidad y las diferentes técnicas para evaluarla.  
> Por el momento, os adelanto que la técnica más utilizada para evaluar la usabilidad son los **'tests de usuario'**.

Estos consisten en crear una batería de acciones que el usuario debe realizar, para detectar si existe algún problema en la interacción con la aplicación. A continuación, vamos pidiendo a un usuario focal (una persona que esté dentro del target de usuarios a quien va dirigida la app) que realice cada tarea, mostrándole los bocetos que aparecerán en cada interacción. Por ejemplo, si hace clic sobre el ítem de menú **'login'**, le mostraremos el boceto de la página _'login'_.

---

### **Para este primer test hemos preparado las siguientes acciones:**

#### **Suponiendo que eres un usuario no registrado:**

1. Accede a la información general _'Acerca de'_ de esta web.
2. Regístrate.
3. Inicia sesión.
4. Modifica tu perfil añadiendo una imagen de avatar.
5. Busca un proyecto llamado _'Tetris'_.
6. Accede al detalle de este proyecto.
7. Cierra sesión.

#### **Suponiendo que eres un usuario con rol 'Desarrollador':**

1. Crea un proyecto nuevo.
2. Accede a la lista de tus proyectos.
3. Muestra el detalle de tu nuevo proyecto.
4. Edita tu proyecto cambiando la descripción.
5. Borra tu proyecto.

#### **Suponiendo que eres un usuario con rol 'Administrador':**

1. Muestra la lista de proyectos.
2. Borra un proyecto.
3. Modifica el nombre de un proyecto.
4. Muestra la lista de todos los usuarios registrados.
5. Cambia el rol de uno de ellos.
6. Modifica la imagen de su avatar.

> **Nota**  
> Las acciones del test de usuarios han sido realizadas por una persona de 20 años, con estudios universitarios y acostumbrada a navegar por la red y usar herramientas ofimáticas.

---

### **Conclusiones y modificaciones**

De este primer test de usuario se desprenden las siguientes conclusiones:

- La vista de proyectos en forma de tabla no es muy atractiva.
- El usuario ha tenido dificultades a la hora de intentar modificar la imagen de avatar de un usuario.

Para mejorar estos pequeños problemas de usabilidad, vamos a tomar las siguientes acciones:

1. En la vista de proyectos, crearemos un par de botones para alternar entre ver los proyectos en forma de tabla o en forma de tarjetas.
2. En la vista de administración de usuarios, añadiremos un pequeño icono (un lápiz) sobre la imagen del avatar del usuario para que se intuya que, al hacer clic sobre la imagen, se accede a la ventana de modificación de perfil.

---

### **Estos serían los bocetos actualizados:**

#### **Vista de proyectos**

_(Poner la imagen de los nuevos bocetos)_

#### **Vista del Panel de administración de usuarios**

_(Poner la imagen de los nuevos bocetos)_

---

Ahora que tenemos los bocetos creados y testeados, es el momento de pasar al siguiente nivel: El diseño de los _wireframes_.

# Hist4 - Wireframe, mockup y guía de estilos

En el apartado anterior hemos diseñado y testeado los bocetos para la versión 1.0 de nuestro proyecto.

El siguiente paso, si nos basamos en el DCU (Diseño centrado en el usuario), sería diseñar los wireframes y, una vez tenemos los wireframes, los mockups junto a la guía de estilos.

RECUERDA QUE...
Un boceto es un dibujo rápido que representa ideas,
un wireframe es una representación estructural y esquemática,
un mockup es una versión visualmente detallada del diseño y
una guía de estilos establece las pautas visuales y de diseño para un proyecto.
Puedes encontrar más información sobre el diseño de prototipos y guía de estilos 👉 aquí

Un proyecto de mayor envergadura requeriría de un equipo de trabajo con más de un perfil. La tarea de diseñar la interficie corresponde, por un lado, al arquitecto de la información y por otro, a un diseñador gráfico.

¿QUÉ ES UN ARQUITECTO DE LA INFORMACIÓN?
En diseño web, un arquitecto de la información (IA, por sus siglas en inglés) es un profesional encargado de organizar y estructurar la información de un sitio web de manera clara y coherente para mejorar la experiencia del usuario. Su objetivo principal es facilitar la navegación y la búsqueda de información, asegurándose de que los usuarios encuentren lo que están buscando de manera eficiente.

¿Qué hace un arquitecto de la información?
El arquitecto de la información se enfoca en varios aspectos del diseño web, como la disposición y organización de los contenidos, la estructura de menús y enlaces, la taxonomía y la categorización de la información, y la creación de esquemas de navegación. Trabaja en estrecha colaboración con diseñadores, desarrolladores y especialistas en experiencia de usuario para crear una estructura coherente y lógica.

Las responsabilidades del arquitecto de la información pueden incluir:

Análisis de requisitos: Comprender las necesidades y objetivos del sitio web, identificar los requerimientos de información y determinar la mejor manera de organizarla.

Diseño de la estructura de información: Crear una estructura jerárquica y lógica para los contenidos del sitio web, estableciendo relaciones y categorías claras.

Creación de esquemas de navegación: Definir la disposición de los menús, la ubicación de los enlaces y la forma en que los usuarios se desplazarán por el sitio web.

Desarrollo de taxonomías: Clasificar y categorizar la información en términos de etiquetas, categorías y metadatos para facilitar la búsqueda y la recuperación de información.

Diseño de wireframes y prototipos: Crear representaciones visuales de la estructura y organización de la información mediante wireframes y prototipos interactivos.

Pruebas y evaluación: Realizar pruebas de usabilidad para verificar la efectividad de la arquitectura de la información y realizar ajustes según sea necesario.

En resumen, el arquitecto de la información en diseño web se encarga de organizar y estructurar la información de manera lógica y coherente, asegurando una experiencia de usuario mejorada y facilitando la navegación y búsqueda de información en un sitio web.

¿Y QUÉ PAPEL JUEGA UN DISEÑADOR GRÁFICO EN LA CREACIÓN DE LOS MOCKUPS Y LA GUÍA DE ESTILOS?
La misión de un diseñador gráfico en la elaboración de mockups es crear representaciones visuales detalladas del diseño final de una interfaz o página web. Su objetivo es plasmar de manera precisa y visualmente atractiva los elementos visuales, como colores, tipografía, imágenes y estilos gráficos, que se utilizarán en el desarrollo del sitio web.

El diseñador gráfico crea los mockups y la guía de estilos...
El diseñador gráfico trabaja estrechamente con el equipo de diseño y desarrollo para convertir los conceptos y requisitos del proyecto en diseños visuales tangibles.

Utiliza herramientas de diseño gráfico y software de prototipado para crear mockups que reflejen el diseño final del sitio web, incluyendo la disposición de los elementos, la jerarquía visual y la experiencia de usuario.

Por otro lado, la misión del diseñador gráfico en la guía de estilos de un proyecto web es establecer y definir los estándares de diseño y las pautas visuales que se utilizarán en todo el sitio web.

El diseñador gráfico se encarga de crear una guía de estilos que incluya información sobre colores, tipografía, iconos, logotipos, espaciado, estilos de botones y otros elementos visuales.

La guía de estilos proporciona coherencia y uniformidad en el diseño del proyecto web, permitiendo que todos los elementos visuales se mantengan consistentes en todas las páginas y secciones. El diseñador gráfico asegura que los diseños de los mockups se alineen con las pautas establecidas en la guía de estilos, garantizando una apariencia visual coherente y una experiencia de usuario fluida en todo el sitio web.

En resumen, la misión de un diseñador gráfico en la elaboración de mockups es crear representaciones visuales detalladas del diseño final de una interfaz o página web, mientras que en la guía de estilos su misión es establecer y definir los estándares de diseño y las pautas visuales que se aplicarán en todo el proyecto web. Ambos roles son esenciales para garantizar un diseño visualmente atractivo, coherente y efectivo en el desarrollo de un sitio web.

## Y nosotros, ¿necesitamos wireframe? ¿y mockup? ¿y guía de estilos?

En nuestro caso, como el proyecto es muy básico, no nos vamos a centrar en aquellas tareas que corresponderían a un arquitecto de la información ni a un diseñador gráfico.

El mapa web de nuestra aplicación se limita a dar acceso a los proyectos y la administración de los usuarios. Sería tan sencillo com este:

En cuanto al diseño gráfico, aunque es una misión emocionante, nos vamos a limitar a trabajar con un tema de bootstrap utilizando Bootswatch, respetando, a priori, su paleta de colores y modificando, solo en algunos casos, algunos detalles como la fuente para los títulos.

NOTA
Puedes ver el aspecto del tema que vamos a utilizar en el siguiente enlace: https://bootswatch.com/cosmo/
![image](https://carrebola.github.io/vanillaPill/assets/images/bootswatch-5cfb41f7af4e39535489cba274c60968.png)

¿QUÉ ES BOOTSWATCH?
Bootswatch es una biblioteca de temas (themes) para Bootstrap, un popular framework de desarrollo web.

Al utilizar Bootswatch, puedes cambiar fácilmente la apariencia de tu proyecto de Bootstrap simplemente importando los archivos CSS correspondientes al tema deseado. Esto te permite ahorrar tiempo y esfuerzo al no tener que crear los estilos desde cero.

# **Hist5 - Entorno de desarrollo**

## **Comenzamos el SPRINT 2 - PROTOTIPOS**

Comenzamos el sprint 2 que incluye tres historias: La configuración del entorno de desarrollo, la maquetación de los bocetos y la implementación de la validación de los formularios.

![Alt text](https://carrebola.github.io/vanillaPill/assets/images/image-1-14f1edaf03a5d4ca8ecc973db80a55cf.png)

_“Dame seis horas para cortar un árbol y pasaré las primeras cuatro afilando el hacha.” – Abraham Lincoln_

Si queremos ser eficientes en la creación de aplicaciones web, lo mejor es empezar por configurar bien nuestro entorno de desarrollo. Para ello vamos a instalar/configurar las siguientes herramientas:

1. Un buen software para escribir nuestro código. En nuestro caso usaremmos el programa VSCode de Microsoft.
2. Instalación del software para el control de versiónes. Nosotros instalaremos GIT.
3. Una aplicación web para sincronizar nuestro repositorio en la nube. En nuestro caso será GitHub.

## **1 VSCode**

Sin duda, en le momento de escribir esta documentación, el rey de los IDs es, sin duda, Visual Studio Code (VSCode).  
![vscode](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png)
note

VSCode es un programa muy útil para escribir código. Es como una navaja suiza para los desarrolladores. Te permite editar y organizar tus archivos de código de manera fácil y rápida. Además, tiene un montón de extensiones y herramientas fantásticas que te facilitan la vida, como autocompletado, depuración y control de versiones. En resumen, es como el mejor amigo de un programador, siempre dispuesto a ayudarte a escribir código de manera eficiente.

Os hago un resumen de algunas aspectos que debes tener en cuenta a la hora de instalar y configurar VSCode, y te pondré información ampliada ya que es un tema muy trillado en internet:

### **1.1. Descarga e instala VSCode**

[Puedes encontrar la versión oficial de vscode aquí

### **1.2. Elige el tema que más te guste.**

Puedes tunear tu VSCode instalando diferentes temas. Para ello:

- Desde el buscador de extensiones (ctrl + mayus + X) escribe el nombre del tema que quieres instalar.
- Haz clic en instalar extensión.
- Desde el icono de configuración de vscode (la tuerquecita de abajo a la izquierda) selecciona 'Temas > Tema de color'
- Selecciona el tema que has instalado y... ¡ya lo tienes!

tip

En este enlace puedes encontrar algunos temas para instalar en tu VSCode: [Themes VSCode](https://vscodethemes.com/?type=dark)

Y aquí te dejo una tabla de algunos temas que nos recomienda el amigo 'Manz'

Tabla de temas recomendados

### **1.3. Instala un tema de iconos, por ejemplo [VSCode Icons](https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons) o [Material Icon](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)**

Para instalar los iconos el proceso es el mismo:

- Desde el buscador de extensiones escribe el nombre del tema de iconos
- En configuración, selecciona 'Tema > Tema de icono de archivo' y busca el tema instalado.
- Ahora verás que en la columna de la izquierda, cada archivo tiene un icono diferente en función de su extensión: html, css, etc.

### **1.4. Extensiones**

Con las extensiones puedes aumentar la potencia y mejorar tu flujo de trabajo.

#### **Prettier**

Una de las extensiones que te recomiendo sí o sí es 'Prettier'. Esta extensión se va a encargar de formatear tu código HTML y CSS port tí, respetando las identaciones. El proceso para instalar esta extensión es muy simple, solo tienes que buscar la extensión en el buscador y darle a instalar.  
Cómo formatear automáticamente en VS Code para ahorrar tiempo y esfuerzo

Aquí tienes un artículo donde se explica como instalar y configurar Prettier para que el código se formatee cada vez que guardamos nuestro archivo:

[Cómo formatear automáticamente en VS Code para ahorrar tiempo y esfuerzo](https://geekflare.com/es/auto-format-in-vs-code/)

#### **Live Server**

Otra extensión imprescindible para nosotros es Live Server. Mediante esta extensión podremos tener un servidor virtual que mostrará el resultado de nuestro trabajo en un navegador, con la ventaja de que la vista se irá actualizando conforme vamos modificando el código.

Existen infinidad de extensiones para VSCode Aquí puedes ver un ejemplo de mi entorno. Utilizo el tema Night Owl y los iconos de VSCode Icons. Fijate que el código html está formateado con Prettier

![Tema VSCode e Iconos](https://carrebola.github.io/vanillaPill/assets/images/entornovscode-80ba59cf4e146584bd91bdc2ddc30ba1.png)

De momento, con esto es suficiente para comenzar a trabajar en el desarrollo de los prototipos html y css. Más adelante acabaremos de configurar nuestro entorno para trabajar con NodeJS y otras herramientas que nos ayudarán a programar de forma más eficiente.

## **2 Control de versiones - Git**

Para el control de versiones vamos a instalar y configurar Git. Aunque seguro que a estas alturas ya sabes qué es Git, pero deja que te refresque algunas ideas importantes:  
info

✔ Git es como un superpoderoso control de versiones para tu código. Imagina que estás escribiendo un ensayo importante y cada vez que haces cambios guardas una nueva versión en diferentes archivos, como "ensayo_v1", "ensayo_v2" y así sucesivamente. Git hace algo similar pero para tu código.

✔ Con Git, puedes guardar diferentes versiones de tu proyecto a medida que avanzas. Esto significa que si cometes un error o quieres volver a una versión anterior, ¡es pan comido! Git te permite viajar en el tiempo y regresar a cualquier punto en la historia de tu proyecto.

✔ Pero eso no es todo. Git también es excelente para trabajar en equipo. Puedes colaborar con otros programadores sin pisar los pies de nadie. Cada persona puede trabajar en su propia versión del proyecto y luego combinar los cambios de todos de manera ordenada.

✔ Además, Git hace que compartir tu código sea súper fácil. Puedes subir tu proyecto a un repositorio en línea (como GitHub o GitLab) y otras personas pueden descargarlo y contribuir. Incluso puedes colaborar con desarrolladores de todo el mundo en proyectos de código abierto.

Aprender git es muy importante para un desarrollador web. Por suerte lo vas a estudiar (si no lo has hecho ya) en el ciclo de DAW. De todas formas te dejo un enlace con más información que te será muy util para entender conceptos como que es una rama, como subir ramas al repositorio, clonarlas, sincronizarlas etc:

[👉Hello Git & GitHub👈](https://github.com/mouredev/hello-git)

Vamos a instalar (si aun no está instalado) Git. Para ello:

1. Descarga su última versión de la web oficial: [Download Git](https://git-scm.com/).
2. Instala en tu ordenador el software.
3. Configura git para tu usuario:

   - Lo primero que deberás hacer cuando instales Git es establecer tu nombre de usuario y dirección de correo electrónico. Esto es importante porque los "commits" de Git usan esta información, y es introducida de manera inmutable en los commits que envías:
   - $ git config --global user.name "John Doe"
   - $ git config --global user.email johndoe@example.com

   - Sólo necesitas hacer esto una vez si especificas la opción --global, ya que Git siempre usará esta información para todo lo que hagas en ese sistema

info

✔️ Tienes más información de cómo configurar Git aquí:

[👉Configurando Git por primera vez👈](https://git-scm.com/book/es/v2/Inicio---Sobre-el-Control-de-Versiones-Configurando-Git-por-primera-vez)

✔️ Si quieres aprender más sobre git también puedes consultar este recurso de Obdulia Montiel:

[👉La guía para principiantes de Git y Github👈](https://www.freecodecamp.org/espanol/news/guia-para-principiantes-de-git-y-github/)

## **3. Repositorio en linea - Github**

Ahora que tenemos Git instalado en nuestro ordenador, vamos crearnos una cuenta en Github para poder sincronizar todo nuestro trabajo en la nube.  
¿Qué es y para que sirve Github?

✔️ GitHub es una especie de red social para programadores. Es un lugar en línea donde los desarrolladores pueden compartir y trabajar en proyectos de software.

✔️ Funciona como un repositorio donde se guarda el código de diferentes versiones de un proyecto. Permite la colaboración entre programadores, quienes pueden ver y sugerir cambios en el código.

✔️ Es una herramienta muy popular y útil en la comunidad de desarrollo de software.

1. En primer lugar vamos a acceder [github.com](https://github.com/)
2. Crea una cuenta e inicia sesión.
3. Ahora vamos a crear un proyecto de prueba con vscode, craremos un repositorio y lo sincronizaremos con github.

## **Configurando entorno y subiendo página de pruebas**

Vamos a ver un ejemplo de todo el proceso. La idea es instalar y configurar nuestro entorno de desarrollo para después crear una página web, guardar una versión en git, subirla a github y publicarla en github pages. Vamos a por ello:

1. Instala VSCode si no la has hecho aún.
2. Configúralo con el tema que más te guste, los iconos que decidas e instala las extensiones live server y prettier.
3. Crea una carpeta en tu ordenador con nombre `pruebas`
4. Abre VSCode y arrastra la carpeta dentro de la ventana central.
5. Crea un archivo con nombre index.html (algo básico, con un h1 y poco más).
6. Muestra el resultado en el navegador utilizando live server.
7. Configura prettier para que al guardar con `ctrl + S` se aplique formateado de tu código. Pruebalo.
8. Instala Git si no lo has hecho aún.
9. Configura tu usuario o confirma que ya está configurado.
10. Haz clic en el icono de 'Control de fuente' de tu vscode o pulsa `ctrl + Mayus + G`
11. Aparecerá un mensaje que te indica que no tienes repositorio creado, y te dará la opción de crearlo desde aquí. Hazlo  
    ![Creando repositorio git](https://carrebola.github.io/vanillaPill/assets/images/pruebas-699477c2eaed5615c35abc13ab591adb.png)
    ![Confirmar](https://carrebola.github.io/vanillaPill/assets/images/confirmgit-05eb2b43bcbe481fd8cec6be0976d4a5.png)
12. Escribe un mensaje de inicio de repositorio (por ejemplo '_primer commit de git_') y dale a confirmar.
13. Ahora te pedirá si quieres publicar la rama ('_Branch_'). Dile que sí. Al hacer clic te preguntará qué nombre quieres para el repositorio y si quieres que sea privado o público. Por defecto, el nombre del repositorio coincide con el nombre de la carpeta de tu proyecto, pero puedes cambiarlo si lo deseas. Para esta prueba haremos que nuestro repositorio sea público.
14. Si es la primera vez que conectas tu VSCode con github te pedirá que lo sincronices. Utiliza la opción de confirmar a través de VSCode.
15. Una vez publicado tu archivo en github podrás ver, en tu página de github (por ejemplo `carrebola.github.com`), algo así:

![Github con proyecto nuevo](https://carrebola.github.io/vanillaPill/assets/images/github-331ad9adada0e68ee217ed2a11147d31.png)  
¿Cómo utilizar Git desde Visual Studio Code?

Aquí te dejo un enlace a un artículo de donde nos explica como trabajar con git y github desde VSCode:

[👉¿Cómo utilizar Git desde Visual Studio Code?👈](https://programacionfacil.org/blog/como-utilizar-git-desde-visual-studio-code/)

1. Vamos a documentar de forma básica nuestro proyecto _prueba_. Para ello vamos ahora a crear un archivo readme.md para que github muestre información del proyecto publicado en su pantalla inicial:

- Crea un archivo con nombre readme.md en la raiz de la carpeta del proyecto.
- Escribe dentro un texto descriptivo del proyecto, como por ejemplo:

# Configurando nuestro entorno de desarrollo

1. Instalación de VSCode
2. Configurarción de git y github
3. Pruebas con proyecto

Si abrimos ahora github podemos ver como se muestra esta información en la portada del repositorio de github.

![Prueba readme.md](https://carrebola.github.io/vanillaPill/assets/images/pruebamarkdown-e0afca8f47d07e677b84a971c713f4c3.png)
tip

Fíjate que el `#` equivale a un `<h1></h1>` y que la numeración se comporta como una lista ordenada `<ol></ol>`. Este tipo de lenguaje se llama Markdown.

Aprende Markdown

Si quieres saber más de este sencillo y potente lenguaje aquí tienes más información:

[👉 MARKDOWN👈](https://desarrolloweb.com/home/markdown)

14. Para terminar vamos a subir nuestro proyecto a github pages. Para ello:
    - Haz clic en `Settings` (el icono con forma de engranaje de la parte superior)
    - Entra en Pages (opción que encontrarás en el menú lateral izquierdo)
    - Donde pone `Branch` selecciona la rama `main` y haz clic en `Save`.
    - Si todo ha ido bien, la página se está publicando... Espera un minuto y refresca la página con F5
    - Ahora puedes ver la url donde se ha publicado tu página. Haz clic en el enlace o en el botón `Visit site` y podrás ver la web publicada.

![Publicación en github pages](https://carrebola.github.io/vanillaPill/assets/images/githubpages-29b29a98b367965695b01b043cb7c0d2.png)
info

GitHub Pages es como un servidor web estático gratuito para que los desarrolladores muestren su trabajo al mundo. Básicamente, puedes tomar tus proyectos de GitHub y convertirlos en páginas web públicas para que cualquiera las vea.

Y hasta aquí la configuración de nuestro entorno de desarrollo, al menos la versión básica. Más adelante aprenderemos a trabajar con otras herramientas como nodejs, eslint, etc, pero de momento, con este entorno, ya estamos preparados para crear los prototipos en html y css de la primera versión de nuestro proyecto.

## **¡¡¡ Comienza el juego !!!**

Ahora que tenemos el hacha afilado, es el momento de comenzar a escribir el primer código de nuestro proyecto. Pero antes vamos a crear un proyecto nuevo en VSCode, a continuación crearemos un repositorio y lo vincularemos con github. Después crearemos una rama exclusiva para el diseño de los prototipos en html/css. Y ya estaremos listos para comenzar a picar código. Vamos a ello:

### **Creando la rama principal**

1. Crea en tu carpeta de proyectos una carpeta con nombre `vanillagames10`
2. Abre VSCode y arrástrala a la parte central de tu IDE  
   danger  
   Asegúrate de que has arrastrado la carpeta a la ventana central de VSCode. Si la arrastras a la columna de la izquierda tendrás varios proyectos abiertos a la vez, y podrías tener problemas cuando trabajes con tu repositorio. Yo te recomiendo que cada ventana de VSCode contenga tan solo un proyecto único.
3. Crea un repositorio para el proyecto.
4. Crea el primer commit con el mensaje '_Commit principal_'
5. Publica la rama con el mensaje '_Rama principal_'
6. Publica el repositorio como privado
7. Ahora tienes un proyecto con una única rama, cuyo nombre por defecto es main. Vamos a crear un archivo readme.md para esta rama. Escribe en él el título '_Vanilla Games_' junto a un párrafo con la descripción del proyecto: '_Vanilla Games es el nombre que recibe el proyecto que vamos a desarrollar en esta documentación. Es un proyecto sencillo, en las versiones iniciales, que se irá complicando a medida que vayamos trabajando en él._'.
8. Crea un segundo commit con el texto '_Creamos archivo readme.md para rama principal_'. A continuación sincroniza los cambios con github.
9. Abre ahora la página de github y comprueba que:
   1. El proyecto se ha creado y subido con éxito en la rama main.
   2. Se muestra la información del archivo readme.md en la página principal.
   3. Se muestra el mensaje del commit que has hecho.

![Inicio proyecto](https://carrebola.github.io/vanillaPill/assets/images/inicioproyecto-ab5828d05b8e4317f9f0087120d9361e.png)

### **Creando la rama prototipos**

Vamos a crear una rama exclusiva para el diseño de los prototipos y a subirla a github. Sigue los siguientes pasos:

1. Crea una rama nueva con nombre _prototipos_. Para ello haz clic en el nombre de la rama actual 'main' que verás en la parta inferior izquierda de VSCode.
2. Selecciona `Crear rama...`
3. Vamos a ponerle el nombre '_prototipos_'
4. Fijate que ahora en la parte inferior izquierda aparece el nombre de la rama actual en la que estás trabajando.
5. Crea una carpeta en la raiz con nombre `prototipos`.
6. Ahora vamos a crear el archivo `home.html` (de momento pon un h1 con el título y poco más)  
   ![Prueba prototipo home](https://carrebola.github.io/vanillaPill/assets/images/protos1-26ba5502c1bce36be8cc2de8a52a4433.png)
7. Y hacemos un commit con el texto '_Prueba prototipo home_'. Te pedirá si quieres publicar la rama, dile que sí y haz push (sincronziar con github).
8. Fíjate que ahora en github tienes las dos ramas, la rama `main`y la rama `prototipos`. En la rama main solo tienes el archivo `readme.md` pero en la rama `prototipos` ahora ya tienes la carpeta `prototipos`con el archivo `home.html`. Es decir, ahora tienes un repositorio de tu proyecto pero con diferentes ramas que, por el momento, serán completamente independientes.  
   ![Rama prototipos](https://carrebola.github.io/vanillaPill/assets/images/ramaprototipos-4b6a4adf8d2813e783f2498ea4b6a395.png)
9. Ya para acabar, puede ser interesante crear un archivo `readme.md` dentro de la carpeta `prototipos`. Hazlo y sube los cambios a github  
   ![Readme prototipos](https://carrebola.github.io/vanillaPill/assets/images/readmeprototipos-a2709d586bc007c947e45e1744b72777.png)

# **Comenzamos a maquetar con Bootstrap**

# **Frameworks como marco de trabajo en Javascript**

No nos engañemos. En la mayoría de empresas de desarrollo web hacen trampas. Son pocas las que crean aplicaciones con html, css y javascript puro. La mayoría utilizar librerías que nos facilitan el trabajo. Es más, la casi todos os desarrolladores trabajan con lo que conocemos como frameworks.

¿Qué es un framework para el desarrollo de apps en javascript?

Algunos ejemplos de frameworks frontend populares incluyen:

- React,
- Angular,
- Vue.js y
- Svelte.

Estos frameworks pueden ahorrar tiempo a los desarrolladores al proporcionar una base sólida sobre la cual construir, evitando la necesidad de comenzar desde cero y permitiendo enfocarse en la lógica y la experiencia del usuario en lugar de en detalles técnicos repetitivos.

Características de los frameworks más populares

note

_En este proyecto nosotros no vamos a utilizar ninguno de estros frameworks, ya que uno de los objetivos de esta documentación es poner en práctica los conocimientos adquiridos durante el ciclo, principalmente Javascript, que en definitiva es la base de todos estos marcos de trabajo._

## **Frameworks para la maquetación html/css**

Ahora bien, para la maquetación sí que vamos a utilizar un poco de ayuda 😅.

Los frameworks de diseño o bibliotecas proporcionan estilos predefinidos y componentes reutilizables para ayudarte a construir interfaces de usuario más rápidamente.

Los más populares en son:

- Bootstrap
- Tailwind CSS

  ### **Bootstrap:**

Bootstrap es uno de los frameworks de diseño más populares. Proporciona una amplia gama de componentes y estilos predefinidos basados en HTML, CSS y JavaScript. Es altamente personalizable y es ideal para crear sitios web responsivos y modernos.

### **Tailwind CSS:**

Tailwind CSS es un framework que se diferencia por su enfoque de "clases utilitarias". En lugar de proporcionar componentes predefinidos, Tailwind CSS ofrece una amplia gama de clases CSS que permiten construir diseños personalizados de manera eficiente.

Pero no son los únicos.

Ejemplos de los frameworks más populares para la maquetación con html/css

Estos frameworks de diseño y bibliotecas pueden ser muy útiles para agilizar el proceso de desarrollo frontend al proporcionar estilos coherentes y componentes reutilizables. La elección del framework dependerá de tus preferencias de diseño, las necesidades de tu proyecto y cómo se adapte a tu flujo de trabajo.

Bootstrap

_Para nuestro proyecto nosotros utilizaremos [Bootstrap](https://getbootstrap.com/), ya que, de momento, es el más utilizado en las empresas de desarrollo (al menos en el momento de escribir esta guía)._

👉 Aquí tienes la web oficial de la última versión de Bootstrap: [https://getbootstrap.com/](https://getbootstrap.com/)

👉 Y aquí tienes un enlace a la documentación de Booststrap 5 en español: [https://getbootstrap.esdocu.com/](https://getbootstrap.esdocu.com/), de la mano de ['_esdocu_'](https://esdocu.com/)

## **¡Maquetando prototipos!**

Es el momento de ponernos manos a la obra. Ya tenemos preparado nuestro entorno de trabajo con VSCode instalado y algunos plugins como Prettier para formatear nuestro código. También hemos instalado Git y hemos creado una cuenta de github. Y hemos creado un proyecto el cual tenemos vinculado con nuestra cuenta de github.

Es el momento de volver al VSCode, situarnos en la rama prototipos... y ¡¡¡comenzar a picar código!!! 😎

# **Home**

## **_HOME Versíón escritorio_**

**![home desktop](https://carrebola.github.io/vanillaPill/assets/images/home-732de8bdbed223e26933306f79645aac.png)**

## **_HOME Versíón móvil_**

**![home mobile](https://carrebola.github.io/vanillaPill/assets/images/home_movil-c4e10fff100eb8015f30b3596a4b1a3b.png)**

## **Entorno de desarrollo**

Vamos a comenzar a maquetar los prototipos para nuestro proyecto.

En primer lugar abre el VSCode y arrastra tu carpeta del proyecto. Si no recuerdo mal, se llamaba `vanillagames10`

Ahora deberías ver en la parte inferior izquierda de vscode el nombre de la rama en la que estás situado. Deberías estar en la rama `prototipos`, si no es así, puedes cambiar de rama haciendo clic (con el botón izquierdo) sobre el nombre de la rama.

¡Cuidado!

Un error muy habitual es olvidarnos de cambiar de rama cuando comenzamos a trabajar. Ten cuidado ya que esto se puede convertir en un problema grave de organización, y podría ¡¡¡generar muchos dolores de cabeza 🥴!!!

Si todo es correcto deberías ver en la columna izquierda la carpeta prototipos con un archivo `home.html` y un archivo `readme.md`.

Abre el archivo `home.html` y comencemos a trabajar...

## **Procedimiento**

Comenzamos a maquetar la página home. De manera resumida debemos seguir los siguientes pasos:

1. Creamos plantilla html
   1. Modificamos `lang` y `title`
   2. Vinculamos la libreria css para bootstrap y bootswatch
   3. Vinculamos la librería de iconos de boostrap
   4. Vinculamos el js de bootstrap.
2. Creamos la estructura de la web dentro del body con las etiquetas header, main y footer
3. Copiamos el componente menú de la documentación de bootstrap (navbar) y lo modificamos para que se ajuste a nuestro prototipo. Lo usamos tanto en el header como en el footer.
4. Creamos, en el main, un h1 y una imagen.

¡NO TE OLVIDES DEL COMMIT!

Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página HOME:

Agrega el esqueleto HTML y los estilos iniciales para la página home.html

Algunos consejos para escribir tus commits:

Aquí puedes ver el código utilizado: 👁‍🗨 ...

home.html

```
_<!DOCTYPE html>_

<html lang="es">
   <head>
       *<!-- Required meta tags -->*
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />

       *<!-- Bootstrap CSS -->*
       <link
           href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
           rel="stylesheet"
           integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
           crossorigin="anonymous"
       />
       *<!-- Bootswatch CSS -->*
       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
       />
       *<!-- Bootstrap icons -->*
       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
       />
       *<!-- Mis estilos personales  -->*
       <link rel="stylesheet" href="styles.css" />

       <title>Vanilla Games</title>

   </head>

   <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
       <header>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
               <div class="container">
                   <a class="navbar-brand" href="#"
                       ><img
                           src=".images/logo.svg"
                           alt=""
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />

                       Vanilla Games</a
                   >
                   <button
                       class="navbar-toggler"
                       type="button"
                       data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent"
                       aria-controls="navbarSupportedContent"
                       aria-expanded="false"
                       aria-label="Toggle navigation"
                   >
                       <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">Home</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                           </li>
                       </ul>
                       <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                           <li class="nav-item">
                               <button class="ms-2 btn btn-success">
                                   Iniciar sesión
                                   <i class="bi bi-box-arrow-in-right"></i>
                               </button>
                           </li>
                           <li class="nav-item">
                               <button class="ms-2 btn btn-outline-light">
                                   Regístrate
                                   <i class="bi bi-box-arrow-in-right"></i>
                               </button>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       </header>
       <main>
           <div class="container">
               <h1 class="mt-5 text-center fw-bold" style="font-size: 100px;">Vanilla Games</h1>
               <div class="m-5 mx-auto" style="max-width: 400px">
                   <img
                           src=".images/logo.svg"
                           alt="fpllefia"
                           class="img-fluid"
                       />
               </div>
           </div>
       </main>
       <footer class="">
           <nav class="navbar bg-secondary fixed-bottom small">
               <div class="container">
                   <a class="navbar-brand fs-6" href="http://www.fpllefia.com">
                       <img
                           src=".images/logo.svg"
                           alt="fpllefia"
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />
                       FPLlefià
                   </a>
                   <span class="navbar-text">DAW - Asignatura de proyectos</span>
                   <a href="#" class="nav-link">carrebola GITHUB</a>
               </div>
           </nav>
       </footer>

       *<!-- Option 1: Bootstrap Bundle with Popper -->*
       <script
           src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
           integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
           crossorigin="anonymous"
       ></script>

   </body>
</html>
```

# **Registro**

## **_REGISTRO Versíón escritorio_**

**![registro desktop](https://carrebola.github.io/vanillaPill/assets/images/registro-af1df95c0b6c67a510166a75095da0b2.png)**

## **_REGISTRO Versíón móvil_**

**![registro mobile](https://carrebola.github.io/vanillaPill/assets/images/registro_movil-04819e8600714a05b9969b94eb9777d7.png)**

## **Procedimiento**

Para maquetar la página `registro.html` podemos partir de la página `home.html` haciendo una copia y modificando la etiqueta `main`.

De manera resumida debemos seguir los siguientes pasos:

1. Modificamos la página home eliminando el botón _registro_ del menú y el contenido de la etiqueta `main` excepto el h1 que modificaremos.
2. Cremos un div con una anchura máxima usando el atributo `style` y dentro creamos un formulario con los campos correspondientes.

¡NO TE OLVIDES DEL COMMIT!

Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página xxx:

Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

👉[Buenas prácticas creando mensajes 'commit']👈

Aquí puedes ver el código utilizado: 👁‍🗨 ...

registro.html

```
_<!DOCTYPE html>_

<html lang="es">
   <head>
       *<!-- Required meta tags -->*
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />

       *<!-- Bootstrap CSS -->*
       <link
           href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
           rel="stylesheet"
           integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
           crossorigin="anonymous"
       />

       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
       />

       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
       />
       <link rel="stylesheet" href="styles.css" />

       <link rel="stylesheet" href="styles.css" />
       <title>Registro</title>

   </head>
   <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
       <header>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
               <div class="container">
                   <a class="navbar-brand" href="#"
                       ><img
                           src=".images/logo.svg"
                           alt=""
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />

                       Vanilla Games</a
                   >
                   <button
                       class="navbar-toggler"
                       type="button"
                       data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent"
                       aria-controls="navbarSupportedContent"
                       aria-expanded="false"
                       aria-label="Toggle navigation"
                   >
                       <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">Home</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                           </li>
                       </ul>
                       <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                           <li class="nav-item">
                               <button class="ms-2 btn btn-success">
                                   Iniciar sesión
                                   <i class="bi bi-box-arrow-in-right"></i>
                               </button>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       </header>
       <main>
           <div class="container">
               <h1 class="mt-5 text-center">Registro</h1>
               <div class="m-5 mx-auto" style="max-width: 400px">
                   <form action="" class="form border shadow-sm p-3">
                       <label for="nombre" class="form-label">Nombre:</label>
                       <input id="nombre" type="text" class="form-control" />
                       <label for="apellidos" class="form-label">Apellidos:</label>
                       <input id="apellidos" type="text" class="form-control" />
                       <label for="email" class="form-label">Email:</label>
                       <input id="email" type="text" class="form-control" />
                       <label for="pass" class="form-label mt-3">Contraseña:</label>
                       <input id="pass" type="password" class="form-control" />
                       <a class="btn btn-primary w-100 mt-3" href="#">Enviar</a>
                   </form>
               </div>
           </div>
       </main>
       <footer class="">
           <nav class="navbar bg-secondary fixed-bottom small">
               <div class="container">
                   <a class="navbar-brand" href="http://www.fpllefia.com">
                       <img
                           src=".images/logo.svg"
                           alt="fpllefia"
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />
                       FPLlefià
                   </a>
                   <span class="navbar-text">@Texto de header</span>
                   <a href="#" class="nav-link">Vínculo header</a>
               </div>
           </nav>
       </footer>

       *<!-- Option 1: Bootstrap Bundle with Popper -->*
       <script
           src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
           integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
           crossorigin="anonymous"
       ></script>

   </body>
</html>
```

# **Login**

## **_LOGIN Versíón escritorio_**[**​]

**![login desktop](https://carrebola.github.io/vanillaPill/assets/images/login-ae24c1e6e6ba658bf4f6511c2fdd4bf1.png)**

## **_LOGIN Versíón móvil_**

**![login mobile](https://carrebola.github.io/vanillaPill/assets/images/login_movil-403fd04d68d934481de2e232c03569e0.png)**

## **Procedimiento**

Para maquetar la página `login.html` podemos partir de la página `registro.html` haciendo una copia y modificando la etiqueta `main`.

De manera resumida debemos seguir los siguientes pasos:

1. Modificamos la página home eliminando el botón _login_ del menú y el contenido de la etiqueta `main` excepto el h1 que modificaremos.
2. Creamos un div con una anchura máxima de 400px usando el atributo `style` y dentro creamos un formulario con los campos correspondientes.
3. Finalmente añadimos un enlace para actualizar la contraseña y un botón para registrarte si no lo estás.

¡NO TE OLVIDES DEL COMMIT!

Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página xxx:

Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

Aquí puedes ver el código utilizado: 👁‍🗨 ...

registro.html

```
_<!DOCTYPE html>_

<html lang="es">
   <head>
       *<!-- Required meta tags -->*
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />

       *<!-- Bootstrap CSS -->*
       <link
           href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
           rel="stylesheet"
           integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
           crossorigin="anonymous"
       />

       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
       />

       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
       />
       <link rel="stylesheet" href="styles.css" />

       <link rel="stylesheet" href="styles.css" />
       <title>Login</title>

   </head>
   <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
       <header>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
               <div class="container">
                   <a class="navbar-brand" href="#"
                       ><img
                           src=".images/logo.svg"
                           alt=""
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />

                       Vanilla Games</a
                   >
                   <button
                       class="navbar-toggler"
                       type="button"
                       data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent"
                       aria-controls="navbarSupportedContent"
                       aria-expanded="false"
                       aria-label="Toggle navigation"
                   >
                       <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">Home</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                           </li>
                       </ul>
                       <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                           <li class="nav-item">
                               <button class="ms-2 btn btn-outline-light">
                                   Regístrate
                                   <i class="bi bi-box-arrow-in-right"></i>
                               </button>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       </header>
       <main>
           <div class="container">
               <h1 class="mt-5 text-center">Inicia sesión</h1>
               <div class="m-5 mx-auto" style="max-width: 400px">
                   <form action="" class="form border shadow-sm p-3">
                       <label for="email" class="form-label">Email:</label>
                       <input type="text" class="form-control" />
                       <label for="pass" class="form-label mt-3">Contraseña:</label>
                       <input id="pass" type="password" class="form-control" />
                       <div class="form-check mt-3">
                           <input
                               class="form-check-input"
                               type="checkbox"
                               value=""
                               id="flexCheckChecked"
                               checked
                           />
                           <label class="form-check-label" for="flexCheckChecked">
                               Recordar sesión
                           </label>
                       </div>
                       <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
                       <a class="btn btn-primary w-100 mt-3" href="#">Iniciar sesión</a>
                   </form>
                   <a class="d-block mt-5 btn btn-secondary mx-auto" href="#"
                       >¿Eres nuevo? Regístrate</a
                   >
               </div>
           </div>
       </main>
       <footer class="">
           <nav class="navbar bg-secondary fixed-bottom small">
               <div class="container">
                   <a class="navbar-brand" href="http://www.fpllefia.com">
                       <img
                           src=".images/logo.svg"
                           alt="fpllefia"
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />
                       FPLlefià
                   </a>
                   <span class="navbar-text">@Texto de header</span>
                   <a href="#" class="nav-link">Vínculo header</a>
               </div>
           </nav>
       </footer>

       *<!-- Option 1: Bootstrap Bundle with Popper -->*
       <script
           src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
           integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
           crossorigin="anonymous"
       ></script>

   </body>
</html>
```

# **Editar perfil**

## **_EDITAR PERFIL (MENÚ)_**

**![editar perfil menu](https://carrebola.github.io/vanillaPill/assets/images/menu-82592045c99541f03def33d15b272294.png)**

## **_EDITAR PERFIL (Ventana MODAL)_**

**![editar perfil modal](https://carrebola.github.io/vanillaPill/assets/images/edit-9ef7dc3fca8f4da1001ae9c5c1aadd58.png)**

## **Procedimiento**

Para maquetar la página `editPerfil.html` podemos partir de la página `home.html`.

En este caso lo que nos interesa es modificar el componente navbar del header. Fíjate que ahora el usuario ya está registrado, por lo que puede acceder a los datos de su perfil y modificarlos.

Por otro lado, cuando un usuario está registrado, aparece un nuevo menú en la parte superior derecha (con el item PROYECTOS), éste es el menú ROL. También debemos añadir el menú usuario, el cual desplegará las opciones para editar perfil, cerrar sesión, etc.

De manera resumida debemos seguir los siguientes pasos:

1. Insertamos el componente modal al final del `header`.
2. Añadimos un botón para abrir ese modal (esto podemos hacerlo en el main, aunque es un código que después desecharemos)
3. En el componente navbar del header
   1. Añadimos el menú ROL con el item PROYECTOS
   2. Añadimos el menú USUARIO con el item Editar perfil(entre otros). Este item será una copia del botón que permite abrir el modal.

¡NO TE OLVIDES DEL COMMIT!

Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página xxx:

Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

Aquí puedes ver el código utilizado: 👁‍🗨 ...

editPerfil.html

```
_<!DOCTYPE html>_

<html lang="es">
   <head>
       *<!-- Required meta tags -->*
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />

       *<!-- Bootstrap CSS -->*
       <link
           href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
           rel="stylesheet"
           integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
           crossorigin="anonymous"
       />

       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
       />

       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
       />

       <link rel="stylesheet" href="styles.css" />

       <title>Prototipos vanilla games</title>

   </head>
   <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
       <header>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
               <div class="container">
                   <a class="navbar-brand" href="#"
                       ><img
                           src=".images/logo.svg"
                           alt=""
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />

                       Vanilla Games</a
                   >
                   <button
                       class="navbar-toggler"
                       type="button"
                       data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent"
                       aria-controls="navbarSupportedContent"
                       aria-expanded="false"
                       aria-label="Toggle navigation"
                   >
                       <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       *<!-- Menú general -->*
                       <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">Home</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                           </li>
                       </ul>
                       *<!-- Menú ROL -->*
                       <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                           </li>
                           <li class="nav-item dropdown">
                               <a
                                   class="nav-link dropdown-toggle"
                                   href="#"
                                   role="button"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false"
                               >
                                   <img src=".images/avatar.svg" alt="" width="25" />
                               </a>
                               *<!-- Menú usuario -->*
                               <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                   <li class="text-light text-center p-2">
                                       <p>user@email.com</p>
                                   </li>
                                   <li><hr class="dropdown-divider" /></li>
                                   <li>
                                       <button
                                           type="button"
                                           class="dropdown-item"
                                           data-bs-toggle="modal"
                                           data-bs-target="#exampleModal"
                                       >
                                           Editar perfil
                                       </button>
                                   </li>
                                   <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                   <li><hr class="dropdown-divider" /></li>
                                   <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                               </ul>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>

           *<!-- VEntana edición perfil -->*

           *<!-- Modal -->*
           <div
               class="modal fade"
               id="exampleModal"
               tabindex="-1"
               aria-labelledby="exampleModalLabel"
               aria-hidden="true"
           >
           *<!-- Formulario de edición de perfil -->*
               <form action="">
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
                                               class="imagen mx-auto mb-1 rounded-circle"
                                               style="
                                                   background-image: url(.images/avatar.svg);
                                                   width: 200px;
                                                   height: 200px;
                                                   background-size: cover;
                                                   background-position: center;
                                               "
                                           ></div>

                                           *<!-- Imagen de perfil -->*
                                           <label for="imagen" class="form-label mt-3">URL imagen:</label>
                                           <input
                                               id="imagen"
                                               type="url"
                                               class="form-control"
                                               value="http://imagenavatar.png"
                                           />
                                       </div>

                                       <div class="">

                                           *<!-- Nombre -->*
                                           <label for="nombre" class="form-label">Nombre:</label>
                                           <input required id="nombre" type="text" class="form-control" />

                                           *<!-- Apellidos -->*
                                           <label for="apellidos" class="form-label">Apellidos:</label>
                                           <input id="apellidos" type="text" class="form-control" />

                                           *<!-- Email -->*
                                           <label for="email" class="form-label">Email:</label>
                                           <input required id="email" type="email" class="form-control" />

                                           *<!-- Contraseña -->*
                                           <label for="pass" class="form-label mt-3">Contraseña:</label>
                                           <input required id="pass" type="password" class="form-control" />
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div class="modal-footer">
                               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                   Cancelar
                               </button>
                               <button type="button" class="btn btn-primary">Guardar cambios</button>
                           </div>
                       </div>
                   </div>
               </form>

           </div>
       </header>
       <main>
           <div class="container">
               <h1 class="mt-5">Modal para editar perfil en header</h1>
               *<!-- Button trigger modal -->*
               <button
                   type="button"
                   class="btn btn-primary"
                   data-bs-toggle="modal"
                   data-bs-target="#exampleModal"
               >
                   Launch demo modal
               </button>
           </div>
       </main>
       <footer class="">
           <nav class="navbar bg-secondary fixed-bottom small">
               <div class="container">
                   <a class="navbar-brand" href="http://www.fpllefia.com">
                       <img
                           src=".images/logo.svg"
                           alt="fpllefia"
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />
                       FPLlefià
                   </a>
                   <span class="navbar-text">@Texto de header</span>
                   <a href="#" class="nav-link">Vínculo header</a>
               </div>
           </nav>
       </footer>

       *<!-- Option 1: Bootstrap Bundle with Popper -->*

       <script
           src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
           integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
           crossorigin="anonymous"
       ></script>

   </body>
</html>
```

# **Proyectos**

## **_PROYECTOS Versíón escritorio_**

**![proyectos desktop](https://carrebola.github.io/vanillaPill/assets/images/proyectos-ddb8f57183c3d3b48cea380630424609.png)**

## **_MIS PROYECTOS Versíón escritorio con tabla_**

**![proyectos tabla desktop](https://carrebola.github.io/vanillaPill/assets/images/misproyectos-6f042101b812ddeacd00f8d302c0fd7a.png)**

## **_MIS PROYECTOS Versíón adaptable I con tarjetas_**

**![proyectos tabla adaptable con targetas](https://carrebola.github.io/vanillaPill/assets/images/misproyectos_responsive1-a2d566c225d81e0714d1c03914bde9fd.png)**

## **_MIS PROYECTOS Versíón adaptable II con tarjetas_**

**![proyectos tabla adaptable 2 con targetas ](https://carrebola.github.io/vanillaPill/assets/images/misproyectos_responsive2-21f1f0d2f23e037a4f0412b5b2cb506d.png)**

## **_PROYECTOS Versíón móvil_**

**![proyectos mobile](https://carrebola.github.io/vanillaPill/assets/images/proyectos_movil-3be5fc5dfe93e4e71f20cc11e1b8a1cb.png)**

## **Procedimiento**

Para maquetar la página `proyectos.html` podemos partir de la página registro. Esta vez habrá que modificar el menú y la etiqueta main.

De manera resumida debemos seguir los siguientes pasos:

1. Actualizamos el menu navbar
2. Creamos la estructura de filas y columnas (row y col) necesaria para poder utilizar el componente nav-taps.
3. Insertamos los componentes button y el input copiandolos de la documentación de bootstrap.
4. Creamos un div con una tabla con las columnas y filas correspondientes
5. Creamos un div con las tarjetas card correspondientes
6. Creamos las versiones _responsive_ para la vista de tarjetas.

¡NO TE OLVIDES DEL COMMIT!

Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página xxx:

Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

Aquí puedes ver el código utilizado: 👁‍🗨 ...

proyectos.html

```
_<!DOCTYPE html>_

<html lang="en">
   <head>
       *<!-- Required meta tags -->*
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />

       *<!-- Bootstrap CSS -->*
       <link
           href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
           rel="stylesheet"
           integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
           crossorigin="anonymous"
       />

       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
       />

       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
       />
       <link rel="stylesheet" href="styles.css" />

       <link rel="stylesheet" href="styles.css" />
       <title>Prototipos vanilla games</title>

       <style>
           */* Modificamos aspecto de nav-tabs y nav-links */*
           .nav-tabs,
           .nav-link.active {
               border-bottom: 0;
               */* background-color: red; */*
           }
       </style>

   </head>
   <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
       <header>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
               <div class="container">
                   <a class="navbar-brand" href="#"
                       ><img
                           src=".images/logo.svg"
                           alt=""
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />

                       Vanilla Games</a
                   >
                   <button
                       class="navbar-toggler"
                       type="button"
                       data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent"
                       aria-controls="navbarSupportedContent"
                       aria-expanded="false"
                       aria-label="Toggle navigation"
                   >
                       <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">Home</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                           </li>
                       </ul>
                       <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                           </li>
                           <li class="nav-item dropdown">
                               <a
                                   class="nav-link dropdown-toggle"
                                   href="#"
                                   role="button"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false"
                               >
                                   <img src=".images/avatar.svg" alt="" width="25" />
                               </a>
                               <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                   <li class="text-light text-center p-2">
                                       <p>user@email.com</p>
                                   </li>
                                   <li><hr class="dropdown-divider" /></li>
                                   <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                   <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                   <li><hr class="dropdown-divider" /></li>
                                   <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                               </ul>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       </header>
       <main>
           <div class="container">
               <h1 class="mt-5">Proyectos</h1>
               <div class="row mt-5">
                   <div class="col-12">
                       <ul class="nav nav-tabs">
                           <li class="nav-item w-50">
                               <a class="nav-link active" aria-current="page" href="#"
                                   >Todos los proyectos</a
                               >
                           </li>
                           <li class="nav-item w-50">
                               <a class="nav-link" href="#">Mis proyectos</a>
                           </li>
                       </ul>
                   </div>
               </div>
               <div class="border border-top-0 p-3">
                   <div class="row">
                       <div class="col-12 col-sm-4 mb-3">
                           <button class="btn btn-primary w-100">Subir proyecto</button>
                       </div>
                       <div class="d-flex col-12 col-sm-8 mb-3">
                           <button class="btn btn-secondary me-2">
                               <i class="bi bi-grid-3x3-gap"></i>
                           </button>
                           <button class="btn btn-secondary me-2">
                               <i class="bi bi-list"></i>
                           </button>
                           <div class="input-group flex-nowrap">
                               <span class="input-group-text" id="addon-wrapping"
                                   ><i class="bi bi-search"></i
                               ></span>
                               <input
                                   type="text"
                                   class="form-control"
                                   placeholder="Buscador"
                                   aria-label="Username"
                                   aria-describedby="addon-wrapping"
                               />
                               <span class="input-group-text" id="addon-wrapping"
                                   ><i class="bi bi-x"></i
                               ></span>
                           </div>
                       </div>
                   </div>
                   *<!-- tabla -->*
                   <div class="col-12 d-none d-xl-block" style="overflow-x: auto">
                       <table
                           class="table table-hover align-middle mt-3"
                           style="min-width: 1000px"
                       >
                           <thead>
                               <tr>
                                   <th></th>
                                   <th>
                                       Nombre <span><i class="bi bi-caret-down"></i></span>
                                   </th>
                                   <th>
                                       Descripción <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th>
                                       Enlace <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th>Repositorio</th>
                                   <th>
                                       Autor <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th>
                                       Fecha <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th>
                                       Estado <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th></th>
                                   <th></th>
                               </tr>
                           </thead>

                           <tr>
                               <td>
                                   <div class="containerImagen">
                                       <img width="200px" src=".images/juego.jpg" alt="" />
                                   </div>
                               </td>
                               <td>Proyecto ejemplo 1</td>
                               <td>Ejemplo de web para centro fp</td>
                               <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                               <td><a href="#">carrebola.github.com/juego1</a></td>
                               <td>carlos</td>
                               <td>13/12/2021</td>
                               <td>?</td>
                           </tr>
                           <tr>
                               <td>
                                   <div class="containerImagen">
                                       <img width="200px" src=".images/juego.jpg" alt="" />
                                   </div>
                               </td>
                               <td>Proyecto ejemplo 1</td>
                               <td>Ejemplo de web para centro fp</td>
                               <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                               <td><a href="#">carrebola.github.com/juego1</a></td>
                               <td>carlos</td>
                               <td>13/12/2021</td>
                               <td>?</td>
                           </tr>
                           <tr>
                               <td>
                                   <div class="containerImagen">
                                       <img width="200px" src=".images/juego.jpg" alt="" />
                                   </div>
                               </td>
                               <td>Proyecto ejemplo 1</td>
                               <td>Ejemplo de web para centro fp</td>
                               <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                               <td><a href="#">carrebola.github.com/juego1</a></td>
                               <td>carlos</td>
                               <td>13/12/2021</td>
                               <td>?</td>
                           </tr>
                       </table>
                   </div>
                   *<!-- tarjetas -->*

                   <div class="d-xl-none row">
                       *<!-- tarjeta  -->*
                       <div class="col-12 col-lg-6">
                           <div class="card mb-3">
                               <div class="row g-0">
                                   <div
                                       class="col-4"
                                       style="
                                           background-image: url(.images/juego.jpg);
                                           background-position: center;
                                           background-size: cover;
                                       "
                                   ></div>
                                   <div class="col-8">
                                       <div class="card-body">
                                           <h5 class="card-title">Tetris</h5>
                                           <p class="card-text">
                                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                               quos, quae atque rerum quibusdam
                                           </p>
                                           <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                           <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                           <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                           <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                           <a class="btn btn-sm btn-success" href="#">Estado</a>
                                           <a
                                               class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                           ></a>
                                           <a
                                               class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                           ></a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       *<!-- tarjeta  -->*
                       <div class="col-12 col-lg-6">
                           <div class="card mb-3">
                               <div class="row g-0">
                                   <div
                                       class="col-4"
                                       style="
                                           background-image: url(.images/juego.jpg);
                                           background-position: center;
                                           background-size: cover;
                                       "
                                   ></div>
                                   <div class="col-8">
                                       <div class="card-body">
                                           <h5 class="card-title">Tetris</h5>
                                           <p class="card-text">
                                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                               quos, quae atque rerum quibusdam
                                           </p>
                                           <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                           <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                           <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                           <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                           <a class="btn btn-sm btn-success" href="#">Estado</a>
                                           <a
                                               class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                           ></a>
                                           <a
                                               class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                           ></a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       *<!-- tarjeta  -->*
                       <div class="col-12 col-lg-6">
                           <div class="card mb-3">
                               <div class="row g-0">
                                   <div
                                       class="col-4"
                                       style="
                                           background-image: url(.images/juego.jpg);
                                           background-position: center;
                                           background-size: cover;
                                       "
                                   ></div>
                                   <div class="col-8">
                                       <div class="card-body">
                                           <h5 class="card-title">Tetris</h5>
                                           <p class="card-text">
                                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                               quos, quae atque rerum quibusdam
                                           </p>
                                           <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                           <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                           <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                           <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                           <a class="btn btn-sm btn-success" href="#">Estado</a>
                                           <a
                                               class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                           ></a>
                                           <a
                                               class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                           ></a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       *<!-- tarjeta  -->*
                       <div class="col-12 col-lg-6">
                           <div class="card mb-3">
                               <div class="row g-0">
                                   <div
                                       class="col-4"
                                       style="
                                           background-image: url(.images/juego.jpg);
                                           background-position: center;
                                           background-size: cover;
                                       "
                                   ></div>
                                   <div class="col-8">
                                       <div class="card-body">
                                           <h5 class="card-title">Tetris</h5>
                                           <p class="card-text">
                                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                               quos, quae atque rerum quibusdam
                                           </p>
                                           <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                           <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                           <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                           <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                           <a class="btn btn-sm btn-success" href="#">Estado</a>
                                           <a
                                               class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                           ></a>
                                           <a
                                               class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                           ></a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       *<!-- tarjeta  -->*
                       <div class="col-12 col-lg-6">
                           <div class="card mb-3">
                               <div class="row g-0">
                                   <div
                                       class="col-4"
                                       style="
                                           background-image: url(.images/juego.jpg);
                                           background-position: center;
                                           background-size: cover;
                                       "
                                   ></div>
                                   <div class="col-8">
                                       <div class="card-body">
                                           <h5 class="card-title">Tetris</h5>
                                           <p class="card-text">
                                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                               quos, quae atque rerum quibusdam
                                           </p>
                                           <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                           <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                           <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                           <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                           <a class="btn btn-sm btn-success" href="#">Estado</a>
                                           <a
                                               class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                           ></a>
                                           <a
                                               class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                           ></a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       *<!-- tarjeta  -->*
                       <div class="col-12 col-lg-6">
                           <div class="card mb-3">
                               <div class="row g-0">
                                   <div
                                       class="col-4"
                                       style="
                                           background-image: url(.images/juego.jpg);
                                           background-position: center;
                                           background-size: cover;
                                       "
                                   ></div>
                                   <div class="col-8">
                                       <div class="card-body">
                                           <h5 class="card-title">Tetris</h5>
                                           <p class="card-text">
                                               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                                               quos, quae atque rerum quibusdam
                                           </p>
                                           <p class="small m-0 text-end text-italic">Autor: Carlos Arrebola</p>
                                           <p class="small text-end text-italic">Fecha: 12/12/2023</p>

                                           <a class="btn btn-sm btn-outline-primary" href="#">Enlace</a>
                                           <a class="btn btn-sm btn-outline-primary" href="#">Repo</a>
                                           <a class="btn btn-sm btn-success" href="#">Estado</a>
                                           <a
                                               class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
                                           ></a>
                                           <a
                                               class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
                                           ></a>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </main>
       <footer class="">
           <nav class="navbar bg-secondary fixed-bottom small">
               <div class="container">
                   <a class="navbar-brand" href="http://www.fpllefia.com">
                       <img
                           src=".images/logo.svg"
                           alt="fpllefia"
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />
                       FPLlefià
                   </a>
                   <span class="navbar-text">@Texto de header</span>
                   <a href="#" class="nav-link">Vínculo header</a>
               </div>
           </nav>
       </footer>

       *<!-- Option 1: Bootstrap Bundle with Popper -->*
       <script
           src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
           integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
           crossorigin="anonymous"
       ></script>

   </body>
</html>
```

# **Detalle proyecto**

## **_DETALLE DEL PROYECTO Versíón escritorio_**

**![detalle proyecto desktop](https://carrebola.github.io/vanillaPill/assets/images/detalleProyecto-219d2c0c5c269ac061036bd0e5c7cd7a.png)**

## **_DETALLE DEL PROYECTO Versíón móvil_**

**![detalle proyecto mobile](https://carrebola.github.io/vanillaPill/assets/images/detalleProyecto_movil-44019350470c358ab835a8229e943482.png)**

## **Procedimiento**

Para maquetar la página `detalleProyecto.html` podemos partir de la página `editPerfil.html`.

De manera resumida debemos seguir los siguientes pasos:

1. Creamos la estructura de filas y columnas necearia.
2. Insertaremos el título y el botón Volver
3. Insertamos la imagen (que fluirá con la columna) en la columna izquierda
4. Insertamos el texto en la columna derecha
5. Haremos que el ancho de las columnas varíe según la versión escritorio o móvil.
6. Insertaremos un botón en la parte inferior derecha con posicionamiento absoluto

¡NO TE OLVIDES DEL COMMIT!

Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página xxx:

Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

Aquí puedes ver el código utilizado: 👁‍🗨 ...

detalleProyecto.html

```

_<!DOCTYPE html>_

<html lang="es">
   <head>
       *<!-- Required meta tags -->*
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />

       *<!-- Bootstrap CSS -->*
       <link
           href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
           rel="stylesheet"
           integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
           crossorigin="anonymous"
       />

       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
       />

       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
       />
       <link rel="stylesheet" href="styles.css" />

       <link rel="stylesheet" href="styles.css" />
       <title>Prototipos vanilla games</title>

       <style>
           */* Modificamos aspecto de nav-tabs y nav-links */*
           .nav-tabs,
           .nav-link.active {
               border-bottom: 0;
               */* background-color: red; */*
           }
       </style>

   </head>
   <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
       <header>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
               <div class="container">
                   <a class="navbar-brand" href="#"
                       ><img
                           src=".images/logo.svg"
                           alt=""
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />

                       Vanilla Games</a
                   >
                   <button
                       class="navbar-toggler"
                       type="button"
                       data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent"
                       aria-controls="navbarSupportedContent"
                       aria-expanded="false"
                       aria-label="Toggle navigation"
                   >
                       <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">Home</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                           </li>
                       </ul>
                       <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                           </li>
                           <li class="nav-item dropdown">
                               <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   <img src=".images/avatar.svg" alt="" width="25">
                               </a>
                               <ul class="dropdown-menu me-0" style="left: -100px; width: 100px;">
                                   <li class="text-light text-center p-2">
                                       <p>user@email.com</p>
                                   </li>
                                   <li><hr class="dropdown-divider"></li>
                                   <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                   <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                   <li><hr class="dropdown-divider"></li>
                                   <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                               </ul>
                           </li>

                       </ul>

                   </div>
               </div>
           </nav>
       </header>
       <main>
           <div class="container">
               <h1 class="mt-5">Detalle del proyecto</h1>
               <div class="d-flex justify-content-end">
                   <bottom class="btn btn-outline-secondary mt-5">
                       <i class="bi bi-arrow-bar-left" style="font-size: 1em;"></i>
                       Volver</bottom>
               </div>

               <div class="row mt-2">
                   <div class="col-12 col-md-4 mb-3">
                       <img src=".images/juego.jpg" alt="" class="img-fluid">
                   </div>
                   <div class="col-12 col-md-8">
                       <p>
                           <p><strong>Nombre: </strong><span id="nombre">TETRIS</span></p>
                           <p><strong>Descripción: </strong><span id="nombre">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi dicta iste debitis recusandae perspiciatis quae. Eius impedit saepe autem velit voluptate, odio sequi expedita nisi est molestiae quo quisquam!</span></p>
                           <p><strong>Estado: </strong><span id="nombre">Estado</span></p>
                           <p><strong>Fecha: </strong><span id="nombre">12/12/2023</span></p>
                           <p><strong>Enlace: </strong><span id="nombre">http://www.enlaceapp.com</span></p>
                           <p><strong>Repositorio: </strong><span id="nombre">carrebola.github.com/123456</span></p>
                       </p>
                   </div>
               </div>
               <div
                   class="container fixed-bottom d-flex justify-content-end"
                   style="padding: 0px 0px 100px 0px"
               >
                   <button
                       class="btn btn-success rounded-circle fs-3 shadow"
                       style="width: 50px"
                   >
                       <i class="bi bi-pencil"></i>
                   </button>
               </div>

           </div>
       </main>
       <footer class="">
           <nav class="navbar bg-secondary fixed-bottom small">
               <div class="container">
                   <a class="navbar-brand" href="http://www.fpllefia.com">
                       <img
                           src=".images/logo.svg"
                           alt="fpllefia"
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />
                       FPLlefià
                   </a>
                   <span class="navbar-text">@Texto de header</span>
                   <a href="#" class="nav-link">Vínculo header</a>
               </div>
           </nav>
       </footer>

       *<!-- Option 1: Bootstrap Bundle with Popper -->*
       <script
           src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
           integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
           crossorigin="anonymous"
       ></script>

   </body>
</html>
```

# **Nuevo proyecto y Editar proyecto**

## **_NUEVO PROYECTO Versíón escritorio_**

**![nuevo proyecto desktop](https://carrebola.github.io/vanillaPill/assets/images/nuevoProyecto-63d8db3d11e47214ce5c8ba9855deac2.png)**

## **_EDITAR PROYECTO Versíón escritorio_**

**![editar proyecto desktop](https://carrebola.github.io/vanillaPill/assets/images/editProyecto-1ad8de528168631518ed01d5ab20e6bc.png)**

## **_NUEVO PROYECTO Versíón móvil_**

**![nuevo proyecto mobile](https://carrebola.github.io/vanillaPill/assets/images/nuevoProyecto_movil-4a7e09d3f6537dafd459e92c209b1da0.png)**

## **_EDITAR PROYECTO Versíón móvil_**

**![editar proyecto mobile](https://carrebola.github.io/vanillaPill/assets/images/editProyecto_movil-aae5edd56bdcb4960dd1f2e63f355288.png)**

## **Procedimiento**

Para maquetar la página `nuevoProyecto.html` podemos partir de la página `detalleProyecto.html`.

De manera resumida debemos seguir los siguientes pasos:

1. Creamos la estructura de filas y columnas necearia.
2. Insertaremos el título y el botón Volver
3. Insertamos la imagen (que fluirá con la columna) en la columna izquierda
4. Insertamos el formulario con sus campos en la columna derecha
5. Haremos que el ancho de las columnas varíe según la versión escritorio o móvil.

Para maquetar la página `editProyecto.html` partiremos de la página `nuevoProyecto.html` y tan solo añadiremos el campo de la url de la imagen y cambiaremos título y botón 'Atualizar'

¡NO TE OLVIDES DEL COMMIT!

Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página xxx:

Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Algunos consejos para escribir tus commits:

Aquí puedes ver el código utilizado en ambas páginas: 👁‍🗨 ...

nuevoProyecto.html

```
_<!DOCTYPE html>_

<html lang="en">
   <head>
       *<!-- Required meta tags -->*
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />

       *<!-- Bootstrap CSS -->*
       <link
           href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
           rel="stylesheet"
           integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
           crossorigin="anonymous"
       />

       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
       />

       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
       />
       <link rel="stylesheet" href="styles.css" />

       <link rel="stylesheet" href="styles.css" />
       <title>Prototipos vanilla games</title>

       <style>
           */* Modificamos aspecto de nav-tabs y nav-links */*
           .nav-tabs,
           .nav-link.active {
               border-bottom: 0;
               */* background-color: red; */*
           }
       </style>

   </head>
   <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
       <header>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
               <div class="container">
                   <a class="navbar-brand" href="#"
                       ><img
                           src=".images/logo.svg"
                           alt=""
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />

                       Vanilla Games</a
                   >
                   <button
                       class="navbar-toggler"
                       type="button"
                       data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent"
                       aria-controls="navbarSupportedContent"
                       aria-expanded="false"
                       aria-label="Toggle navigation"
                   >
                       <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">Home</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                           </li>
                       </ul>
                       <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                           </li>
                           <li class="nav-item dropdown">
                               <a
                                   class="nav-link dropdown-toggle"
                                   href="#"
                                   role="button"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false"
                               >
                                   <img src=".images/avatar.svg" alt="" width="25" />
                               </a>
                               <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                   <li class="text-light text-center p-2">
                                       <p>user@email.com</p>
                                   </li>
                                   <li><hr class="dropdown-divider" /></li>
                                   <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                   <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                   <li><hr class="dropdown-divider" /></li>
                                   <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                               </ul>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       </header>
       <main>
           <div class="container">
               <h1 class="mt-5">Nuevo proyecto</h1>
               <div class="d-flex justify-content-end">
                   <bottom class="btn btn-outline-secondary mt-5">
                       <i class="bi bi-arrow-bar-left" style="font-size: 1em"></i>
                       Volver</bottom
                   >
               </div>

               <div class="row mt-2">
                   <div class="col-12 col-md-4 pt-2 mb-3">
                       <img src=".images/juego.jpg" alt="" class="img-fluid" />
                   </div>
                   <div class="col-12 col-md-8">
                       <form action="" class="form">
                           <label class="form-label" for="nombre"><strong>Nombre: </strong></label>
                           <input id="nombre" type="text" value="Nombre Autor" class="form-control" />

                           <label class="form-label mt-2" for="descripcion"
                               ><strong>Descripción: </strong></label
                           >
                           <textarea id="descripcion" class="form-control" rows="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea>
                           <label class="form-label mt-2" for="estado"><strong>Estado: </strong></label>
                           <select id="estado" class="form-control">
                               <option value="estado">estado</option>
                               <option value="otro estado">otro estado</option>
                           </select>
                           <label class="form-label mt-2" for="fecha"><strong>Fecha: </strong></label>
                           <input id="fecha" type="date" class="form-control" value="12/12/2023"/>
                           <label class="form-label mt-2" for="nombre"><strong>Enlace: </strong></label>
                           <input id="enlace" type="text" class="form-control" value="http://enlace.com" />
                           <label class="form-label mt-2" for="nombre"
                               ><strong>Repositorio: </strong></label
                           >
                           <input id="repositorio" type="text" class="form-control" value="user.github.com/123456" />
                           <input type="submit" class="btn btn-success mt-3" value="Subir proyecto">
                       </form>
                   </div>
               </div>

           </div>
       </main>
       <footer class="">
           <nav class="navbar bg-secondary fixed-bottom small">
               <div class="container">
                   <a class="navbar-brand" href="http://www.fpllefia.com">
                       <img
                           src=".images/logo.svg"
                           alt="fpllefia"
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />
                       FPLlefià
                   </a>
                   <span class="navbar-text">@Texto de header</span>
                   <a href="#" class="nav-link">Vínculo header</a>
               </div>
           </nav>
       </footer>

       *<!-- Option 1: Bootstrap Bundle with Popper -->*
       <script
           src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
           integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
           crossorigin="anonymous"
       ></script>

   </body>
</html>
```

editProyecto.html

```

_<!DOCTYPE html>_

<html lang="en">
   <head>
       *<!-- Required meta tags -->*
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />

       *<!-- Bootstrap CSS -->*
       <link
           href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
           rel="stylesheet"
           integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
           crossorigin="anonymous"
       />

       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.0/dist/yeti/bootstrap.min.css"
       />

       <link
           rel="stylesheet"
           href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
       />
       <link rel="stylesheet" href="styles.css" />

       <link rel="stylesheet" href="styles.css" />
       <title>Prototipos vanilla games</title>

       <style>
           */* Modificamos aspecto de nav-tabs y nav-links */*
           .nav-tabs,
           .nav-link.active {
               border-bottom: 0;
               */* background-color: red; */*
           }
       </style>

   </head>
   <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
       <header>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
               <div class="container">
                   <a class="navbar-brand" href="#"
                       ><img
                           src=".images/logo.svg"
                           alt=""
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />

                       Vanilla Games</a
                   >
                   <button
                       class="navbar-toggler"
                       type="button"
                       data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent"
                       aria-controls="navbarSupportedContent"
                       aria-expanded="false"
                       aria-label="Toggle navigation"
                   >
                       <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">Home</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                           </li>
                       </ul>
                       <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                           </li>
                           <li class="nav-item dropdown">
                               <a
                                   class="nav-link dropdown-toggle"
                                   href="#"
                                   role="button"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false"
                               >
                                   <img src=".images/avatar.svg" alt="" width="25" />
                               </a>
                               <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                   <li class="text-light text-center p-2">
                                       <p>user@email.com</p>
                                   </li>
                                   <li><hr class="dropdown-divider" /></li>
                                   <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                   <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                   <li><hr class="dropdown-divider" /></li>
                                   <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                               </ul>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       </header>
       <main>
           <div class="container">
               <h1 class="mt-5">Edición de proyecto</h1>
               <div class="d-flex justify-content-end">
                   <bottom class="btn btn-outline-secondary mt-5">
                       <i class="bi bi-arrow-bar-left" style="font-size: 1em"></i>
                       Volver</bottom
                   >
               </div>
               <form action="" class="">
                   <div class="row mt-2">
                       <div class="col-12 col-md-4 pt-2 mb-3">
                           <img src=".images/juego.jpg" alt="" class="img-fluid" />
                           <label class="form-label mt-2" for="urlImagen"
                               ><strong>URL imagen: </strong></label
                           >
                           <input
                               id="urlImagen"
                               type="text"
                               class="form-control"
                               value="http://enlaceImagen.com"
                           />
                       </div>
                       <div class="col-12 col-md-8">
                           *<!-- Formulario nuevo proyecto -->*

                           *<!-- Nombre proyecto -->*
                           <label class="form-label" for="nombre"><strong>Nombre: </strong></label>
                           <input
                               required
                               id="nombre"
                               type="text"
                               value="Nombre Autor"
                               class="form-control"
                           />

                           *<!-- Descripción -->*
                           <label class="form-label mt-2" for="descripcion"
                               ><strong>Descripción: </strong></label
                           >
                           <textarea id="descripcion" class="form-control" rows="4">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea
                           >

                           *<!-- Estado -->*
                           <label class="form-label mt-2" for="estado"
                               ><strong>Estado: </strong></label
                           >
                           <select required id="estado" class="form-control">
                               <option value="estado">estado</option>
                               <option value="otro estado">otro estado</option>
                           </select>

                           *<!-- Fecha -->*
                           <label class="form-label mt-2" for="fecha"
                               ><strong>Fecha: </strong></label
                           >
                           <input id="fecha" type="date" class="form-control" value="12/12/2023" />

                           *<!-- Enlace al proyecto -->*
                           <label class="form-label mt-2" for="enlace"
                               ><strong>Enlace: </strong></label
                           >
                           <input
                               id="enlace"
                               type="url"
                               class="form-control"
                               value="http://enlace.com"
                           />

                           *<!-- Repositorio -->*
                           <label class="form-label mt-2" for="repositorio"
                               ><strong>Repositorio: </strong></label
                           >
                           <input
                               id="repositorio"
                               type="text"
                               class="form-control"
                               value="user.github.com/123456"
                           />

                           *<!-- Submit -->*
                           <input
                               type="submit"
                               class="btn btn-success mt-3"
                               value="Subir proyecto"
                           />
                       </div>
                   </div>
               </form>
           </div>
       </main>
       <footer class="">
           <nav class="navbar bg-secondary fixed-bottom small">
               <div class="container">
                   <a class="navbar-brand" href="http://www.fpllefia.com">
                       <img
                           src=".images/logo.svg"
                           alt="fpllefia"
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />
                       FPLlefià
                   </a>
                   <span class="navbar-text">@Texto de header</span>
                   <a href="#" class="nav-link">Vínculo header</a>
               </div>
           </nav>
       </footer>

       *<!-- Option 1: Bootstrap Bundle with Popper -->*
       <script
           src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
           integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
           crossorigin="anonymous"
       ></script>

   </body>
</html>
```

# **Admin Usuarios y Admin Proyectos**

## **_ADMIN (Proyectos) Versíón escritorio_**

**![admin proyecto desktop](https://carrebola.github.io/vanillaPill/assets/images/adminProyectos-c352545ec132f37bf81a4f36c67a9f68.png)**

## **_ADMIN (Usuarios) Versíón escritorio_**

**![admin usuario desktop](https://carrebola.github.io/vanillaPill/assets/images/adminUsuarios-0896067d4ff0774f0dbee20f17adcefc.png)**

## **Procedimiento**

Para maquetar la página `adminProyectos.html` podemos partir de la página `Proyectos.html` pero utilizando el menú superior de un usuario registrado.

Para maquetar la página `adminUsuarios.html` podemos partir de la página `adminProyectos.html` insertando en las celdas de la tabla los inputs necesarios.

¡NO TE OLVIDES DEL COMMIT!

Recuerda que mientras vas trabajando en el proyecto debes ir guardando los cambios en Git y subirlos a github añadiendo cada vez un commit apropiado. Podrías empezar con algo así:

Crea la estructura básica de la página xxx:

Agrega el esqueleto HTML y los estilos iniciales para la página xxx.html

Aquí puedes ver el código utilizado: 👁‍🗨 ...

adminProyectos.html

```
   <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
       <header>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
               <div class="container">
                   <a class="navbar-brand" href="#"
                       ><img
                           src=".images/logo.svg"
                           alt=""
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />

                       Vanilla Games</a
                   >
                   <button
                       class="navbar-toggler"
                       type="button"
                       data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent"
                       aria-controls="navbarSupportedContent"
                       aria-expanded="false"
                       aria-label="Toggle navigation"
                   >
                       <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">Home</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                           </li>
                       </ul>
                       <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                           </li>
                           <li class="nav-item dropdown">
                               <a
                                   class="nav-link dropdown-toggle"
                                   href="#"
                                   role="button"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false"
                               >
                                   <img src=".images/avatar.svg" alt="" width="25" />
                               </a>
                               <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                   <li class="text-light text-center p-2">
                                       <p>user@email.com</p>
                                   </li>
                                   <li><hr class="dropdown-divider" /></li>
                                   <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                   <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                   <li><hr class="dropdown-divider" /></li>
                                   <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                               </ul>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       </header>
       <main>
           <div class="container-fluid">
               <h1 class="mt-5">Panel de administración</h1>
               *<!-- tabs -->*
               <div class="row mt-5">
                   <div class="col-12">
                       <ul class="nav nav-tabs">
                           <li class="nav-item w-50">
                               <a class="nav-link" aria-current="page" href="#">Usuarios</a>
                           </li>
                           <li class="nav-item w-50">
                               <a class="nav-link active" href="#">Proyectos</a>
                           </li>
                       </ul>
                   </div>
               </div>

               *<!-- tabla proyectos -->*
               <div class="border border-top-0 p-3">
                   *<!-- buscador -->*
                   <div class="row">
                       <div class="d-flex col-12 col-md-6 mb-3">
                           <div class="input-group flex-nowrap">
                               <span class="input-group-text" id="addon-wrapping"
                                   ><i class="bi bi-search"></i
                               ></span>
                               <input
                                   type="text"
                                   class="form-control"
                                   placeholder="Buscador"
                                   aria-label="Username"
                                   aria-describedby="addon-wrapping"
                               />
                               <span class="input-group-text" id="addon-wrapping"
                                   ><i class="bi bi-x"></i
                               ></span>
                           </div>
                       </div>
                   </div>

                   *<!-- tabla proyectos -->*
                   <div class="col-12" style="overflow-x: auto">
                       <table
                           class="table table-hover align-middle mt-3"
                           style="min-width: 1000px"
                       >
                           <thead>
                               <tr>
                                   <th></th>
                                   <th>
                                       Nombre <span><i class="bi bi-caret-down"></i></span>
                                   </th>
                                   <th>
                                       Descripción <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th>
                                       Enlace <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th>Repositorio</th>
                                   <th>
                                       Autor <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th>
                                       Fecha <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th>
                                       Estado <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th></th>
                                   <th></th>
                               </tr>
                           </thead>

                           <tr>
                               <td>
                                   <div class="containerImagen">
                                       <img width="200px" src=".images/juego.jpg" alt="" />
                                   </div>
                               </td>
                               <td>Proyecto ejemplo 1</td>
                               <td>Ejemplo de web para centro fp</td>
                               <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                               <td><a href="#">carrebola.github.com/juego1</a></td>
                               <td>carlos</td>
                               <td>13/12/2021</td>
                               <td>?</td>
                               <td><i class="btn btn-outline-primary bi bi-pencil"></i></td>
                               <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
                           </tr>
                           <tr>
                               <td>
                                   <div class="containerImagen">
                                       <img width="200px" src=".images/juego.jpg" alt="" />
                                   </div>
                               </td>
                               <td>Proyecto ejemplo 1</td>
                               <td>Ejemplo de web para centro fp</td>
                               <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                               <td><a href="#">carrebola.github.com/juego1</a></td>
                               <td>carlos</td>
                               <td>13/12/2021</td>
                               <td>?</td>
                               <td><i class="btn btn-outline-primary bi bi-pencil"></i></td>
                               <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
                           </tr>
                           <tr>
                               <td>
                                   <div class="containerImagen">
                                       <img width="200px" src=".images/juego.jpg" alt="" />
                                   </div>
                               </td>
                               <td>Proyecto ejemplo 1</td>
                               <td>Ejemplo de web para centro fp</td>
                               <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                               <td><a href="#">carrebola.github.com/juego1</a></td>
                               <td>carlos</td>
                               <td>13/12/2021</td>
                               <td>?</td>
                               <td><i class="btn btn-outline-primary bi bi-pencil"></i></td>
                               <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
                           </tr>
                       </table>
                   </div>
               </div>
           </div>
       </main>
       <footer class="">
           <nav class="navbar bg-secondary fixed-bottom small">
               <div class="container">
                   <a class="navbar-brand" href="http://www.fpllefia.com">
                       <img
                           src=".images/logo.svg"
                           alt="fpllefia"
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />
                       FPLlefià
                   </a>
                   <span class="navbar-text">@Texto de header</span>
                   <a href="#" class="nav-link">Vínculo header</a>
               </div>
           </nav>
       </footer>

       *<!-- Option 1: Bootstrap Bundle with Popper -->*
       <script
           src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
           integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
           crossorigin="anonymous"
       ></script>

   </body>
```

adminUsuarios.html

```
   <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
       <header>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
               <div class="container">
                   <a class="navbar-brand" href="#"
                       ><img
                           src=".images/logo.svg"
                           alt=""
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />

                       Vanilla Games</a
                   >
                   <button
                       class="navbar-toggler"
                       type="button"
                       data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent"
                       aria-controls="navbarSupportedContent"
                       aria-expanded="false"
                       aria-label="Toggle navigation"
                   >
                       <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">Home</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link" aria-current="page" href="#">A cerca de</a>
                           </li>
                       </ul>
                       <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                           <li class="nav-item">
                               <a class="nav-link active" aria-current="page" href="#">PROYECTOS</a>
                           </li>
                           <li class="nav-item dropdown">
                               <a
                                   class="nav-link dropdown-toggle"
                                   href="#"
                                   role="button"
                                   data-bs-toggle="dropdown"
                                   aria-expanded="false"
                               >
                                   <img src=".images/avatar.svg" alt="" width="25" />
                               </a>
                               <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
                                   <li class="text-light text-center p-2">
                                       <p>user@email.com</p>
                                   </li>
                                   <li><hr class="dropdown-divider" /></li>
                                   <li><a class="dropdown-item" href="#">Acciónn</a></li>
                                   <li><a class="dropdown-item" href="#">Otra acción</a></li>
                                   <li><hr class="dropdown-divider" /></li>
                                   <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                               </ul>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       </header>
       <main>
           <div class="container-fluid">
               <h1 class="mt-5">Panel de administración</h1>
               *<!-- tabs -->*
               <div class="row mt-5">
                   <div class="col-12">
                       <ul class="nav nav-tabs">
                           <li class="nav-item w-50">
                               <a class="nav-link active" aria-current="page" href="#">Usuarios</a>
                           </li>
                           <li class="nav-item w-50">
                               <a class="nav-link" href="#">Proyectos</a>
                           </li>
                       </ul>
                   </div>
               </div>

               *<!-- tabla proyectos -->*
               <div class="border border-top-0 p-3">
                   *<!-- buscador -->*
                   <div class="row">
                       <div class="d-flex col-12 col-md-6 mb-3">
                           <div class="input-group flex-nowrap">
                               <span class="input-group-text" id="addon-wrapping"
                                   ><i class="bi bi-search"></i
                               ></span>
                               <input
                                   type="text"
                                   class="form-control"
                                   placeholder="Buscador"
                                   aria-label="Username"
                                   aria-describedby="addon-wrapping"
                               />
                               <span class="input-group-text" id="addon-wrapping"
                                   ><i class="bi bi-x"></i
                               ></span>
                           </div>
                       </div>
                   </div>

                   *<!-- tabla usuarios-->*
                   <div class="col-12" style="overflow-x: auto">
                       <table
                           class="table table-hover align-middle mt-3"
                           style="min-width: 1200px"
                       >
                           <thead>
                               <tr>
                                   <th></th>
                                   <th>
                                       URL imagen <span><i class="bi bi-caret-down"></i></span>
                                   </th>
                                   <th>
                                       Email <span><i class="bi bi-caret-down"></i></span>
                                   </th>
                                   <th>
                                       Nombre <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th>
                                       Apellidos <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th>
                                       Fecha <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th>
                                       Rol <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th>
                                       Estado <span><i class="bi bi-caret-up"></i></span>
                                   </th>
                                   <th></th>
                                   <th></th>
                               </tr>
                           </thead>

                           <tr>
                               <form action="">
                                   <td>
                                       <div class="containerImagen">
                                           <div
                                               class="rounded-circle d-flex align-items-end justify-content-end"
                                               style="
                                                   background-image: url(.images/avatar.svg);
                                                   width: 50px;
                                                   height: 50px;
                                                   background-size: cover;
                                                   background-position: center;
                                               "
                                           >
                                               <i class="btn btn-success btn-sm rounded-circle bi bi-pencil"></i>
                                           </div>
                                       </div>
                                   </td>
                                   <td>
                                       <input
                                           type="text"
                                           class="form-control form-control-sm"
                                           value="http://imagen.com"
                                       />
                                   </td>
                                   <td>
                                       <input
                                           type="text"
                                           class="form-control form-control-sm"
                                           value="email@email.com"
                                       />
                                   </td>
                                   <td>
                                       <input
                                           type="text"
                                           class="form-control form-control-sm"
                                           value="Nombre usuario"
                                       />
                                   </td>
                                   <td>
                                       <input
                                           type="text"
                                           class="form-control form-control-sm"
                                           value="Apellidos usuario"
                                       />
                                   </td>

                                   <td>
                                       <input
                                           type="date"
                                           class="form-control form-control-sm"
                                           value="12/12/2023 proyecto"
                                       />
                                   </td>
                                   <td>
                                       <select class="form-control form-control-sm" name="" id="">
                                           <option value="1">opción</option>
                                           <option value="2">opción2</option>
                                       </select>
                                   </td>
                                   <td>
                                       <select class="form-control form-control-sm" name="" id="">
                                           <option value="1">opción</option>
                                           <option value="2">opción2</option>
                                       </select>
                                   </td>
                                   <td><button class="btn btn-sm btn-success">Actualizar</button></td>
                                   <td><i class="btn btn-sm btn-outline-danger bi bi-trash3"></i></td>
                               </form>
                           </tr>

                           <tr>
                               <form action="">
                                   <td>
                                       <div class="containerImagen">
                                           <div
                                               class="rounded-circle d-flex align-items-end justify-content-end"
                                               style="
                                                   background-image: url(.images/avatar.svg);
                                                   width: 50px;
                                                   height: 50px;
                                                   background-size: cover;
                                                   background-position: center;
                                               "
                                           >
                                               <i class="btn btn-success btn-sm rounded-circle bi bi-pencil"></i>
                                           </div>
                                       </div>
                                   </td>
                                   <td>
                                       <input
                                           type="text"
                                           class="form-control form-control-sm"
                                           value="http://imagen.com"
                                       />
                                   </td>
                                   <td>
                                       <input
                                           type="text"
                                           class="form-control form-control-sm"
                                           value="email@email.com"
                                       />
                                   </td>
                                   <td>
                                       <input
                                           type="text"
                                           class="form-control form-control-sm"
                                           value="Nombre usuario"
                                       />
                                   </td>
                                   <td>
                                       <input
                                           type="text"
                                           class="form-control form-control-sm"
                                           value="Apellidos usuario"
                                       />
                                   </td>

                                   <td>
                                       <input
                                           type="date"
                                           class="form-control form-control-sm"
                                           value="12/12/2023 proyecto"
                                       />
                                   </td>
                                   <td>
                                       <select class="form-control form-control-sm" name="" id="">
                                           <option value="1">opción</option>
                                           <option value="2">opción2</option>
                                       </select>
                                   </td>
                                   <td>
                                       <select class="form-control form-control-sm" name="" id="">
                                           <option value="1">opción</option>
                                           <option value="2">opción2</option>
                                       </select>
                                   </td>
                                   <td><button class="btn btn-sm btn-success">Actualizar</button></td>
                                   <td><i class="btn btn-sm btn-outline-danger bi bi-trash3"></i></td>
                               </form>
                           </tr>

                           <tr>
                               <form action="">
                                   <td>
                                       <div class="containerImagen">
                                           <div
                                               class="rounded-circle d-flex align-items-end justify-content-end"
                                               style="
                                                   background-image: url(.images/avatar.svg);
                                                   width: 50px;
                                                   height: 50px;
                                                   background-size: cover;
                                                   background-position: center;
                                               "
                                           >
                                               <i class="btn btn-success btn-sm rounded-circle bi bi-pencil"></i>
                                           </div>
                                       </div>
                                   </td>
                                   <td>
                                       <input
                                           type="text"
                                           class="form-control form-control-sm"
                                           value="http://imagen.com"
                                       />
                                   </td>
                                   <td>
                                       <input
                                           type="text"
                                           class="form-control form-control-sm"
                                           value="email@email.com"
                                       />
                                   </td>
                                   <td>
                                       <input
                                           type="text"
                                           class="form-control form-control-sm"
                                           value="Nombre usuario"
                                       />
                                   </td>
                                   <td>
                                       <input
                                           type="text"
                                           class="form-control form-control-sm"
                                           value="Apellidos usuario"
                                       />
                                   </td>

                                   <td>
                                       <input
                                           type="date"
                                           class="form-control form-control-sm"
                                           value="12/12/2023 proyecto"
                                       />
                                   </td>
                                   <td>
                                       <select class="form-control form-control-sm" name="" id="">
                                           <option value="1">opción</option>
                                           <option value="2">opción2</option>
                                       </select>
                                   </td>
                                   <td>
                                       <select class="form-control form-control-sm" name="" id="">
                                           <option value="1">opción</option>
                                           <option value="2">opción2</option>
                                       </select>
                                   </td>
                                   <td><button class="btn btn-sm btn-success">Actualizar</button></td>
                                   <td><i class="btn btn-sm btn-outline-danger bi bi-trash3"></i></td>
                               </form>
                           </tr>
                       </table>
                   </div>
               </div>
           </div>
       </main>
       <footer class="">
           <nav class="navbar bg-secondary fixed-bottom small">
               <div class="container">
                   <a class="navbar-brand" href="http://www.fpllefia.com">
                       <img
                           src=".images/logo.svg"
                           alt="fpllefia"
                           width="30"
                           height="24"
                           class="d-inline-block align-text-top"
                       />
                       FPLlefià
                   </a>
                   <span class="navbar-text">@Texto de header</span>
                   <a href="#" class="nav-link">Vínculo header</a>
               </div>
           </nav>
       </footer>

       *<!-- Option 1: Bootstrap Bundle with Popper -->*
       <script
           src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
           integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
           crossorigin="anonymous"
       ></script>

   </body>
</html>
```

# **Validaciones basadas en html**

En HTML5, podemos realizar validaciones en formularios utilizando atributos y elementos específicos. Aquí tienes un resumen de cómo vamos a crear validaciones utilizando HTML5:

- Atributo required: Puedes usar el atributo required en campos de entrada para asegurarte de que el usuario complete ese campo antes de enviar el formulario.

```
<input type="text" name="nombre" required>
```

- Atributo pattern: Puedes usar el atributo pattern junto con una expresión regular para validar el formato de entrada en un campo.

```
<input type="text" name="telefono" pattern="[0-9]{10}" title="Ingresa un número de teléfono válido de 10 dígitos">
```

- Atributo min y max: Para campos numéricos, puedes utilizar los atributos min y max para establecer rangos válidos.

```
<input type="number" name="edad" min="18" max="99">
```

- Atributo minlength y maxlength: Para campos numéricos, puedes utilizar los atributos min y max para establecer rangos válidos.

```
<input type="password" name="pass" minlength="6" maxlength="99">
```

- Atributo email: Puedes usar el atributo type="email" en un campo de entrada para asegurarte de que la entrada sea un formato de correo electrónico válido.

```
<input type="email" name="correo">
```

- Atributo url: Similar al atributo email, el atributo type="url" valida que la entrada sea una URL válida.

```
<input type="url" name="sitio_web">
```

- Elemento `<textarea>` con required: Al igual que con los campos de entrada, puedes usar el atributo required con el elemento `<textarea>` para asegurarte de que se ingrese texto.

```
<textarea name="comentarios" required></textarea>
```

- Elemento `<select>` con required: Puedes usar el atributo required con el elemento _select_ para asegurarte de que se seleccione una opción antes de enviar el formulario.

```
<select name="pais" required>
 <option value="">Selecciona un país</option>
 <option value="mx">México</option>
 <option value="us">Estados Unidos</option>
</select>
```

## **Definición de restricciones para nuestros formularios**

Vamos a definir las validaciones para cada formulario y a continuación modificaremos el código para aplicarlas.

### **Formulario de Registro**

- El nombre es obligatorio
- El apellido es opcional
- Los campos email y contraseña son requeridos. Nombre y apellidos opcional
- El email debe ser tipo un email correcto
- La contraseña debe ser de 6 dígitos o más

El código de este formulario sería algo así:

formulario registro

```
_<!-- Formulario de registro -->_

 <form action="" class="form border shadow-sm p-3">

   *<!-- Nombre -->*
   <label for="nombre" class="form-label">Nombre:</label>
   <input required id="nombre" type="text" class="form-control" />

   *<!-- Apellidos -->*
   <label for="apellidos" class="form-label">Apellidos:</label>
   <input id="apellidos" type="text" class="form-control" />

   *<!-- Email -->*
   <label for="email" class="form-label">Email:</label>
   <input required id="email" type="email" class="form-control" />

   *<!-- Contraseña -->*
   <label for="pass" class="form-label mt-3">Contraseña:</label>
   <input required id="pass" type="password" min="6" class="form-control" />

   *<!-- Botón enviar -->*
   <input type="submit" class="btn btn-primary w-100 mt-3" value="Enviar" />
 </form>
```

### **Formulario de inicio de sesión (Login)**

- Los campos email y contraseña son requeridos.
- El email debe ser tipo un email correcto
- La contraseña debe ser de 6 dígitos o más

Formulario de inicio de sesión

```
_<!-- Formulario de inicio de sesión (login) -->_

 <form action="" class="form border shadow-sm p-3">
   *<!-- Email -->*
   <label for="email" class="form-label">Email:</label>
   <input required type="email" class="form-control" />

_<!-- Contraseña -->_
 <label for="pass" class="form-label mt-3">Contraseña:</label>
 <input required id="pass" type="password" min="6" class="form-control" />

_<!-- Recordar contraseña -->_

   <div class="form-check mt-3">
     <input
       class="form-check-input"
       type="checkbox"
       value=""
       id="flexCheckChecked"
       checked
     />
     <label class="form-check-label" for="flexCheckChecked">
       Recordar sesión
     </label>
   </div>

_<!-- Link a recordar contraseña -->_
 <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>

_<!-- Botón Iniciar sesión -->_
 <input
     type="submit"
     class="btn btn-primary w-100 mt-3"
     value="Iniciar sesión"
   />

 </form>
```

### **Formulario para Editar perfil**

- El nombre es obligatorio
- El apellido es opcional
- Los campos email y contraseña son requeridos.
- El email debe ser tipo un email correcto
- La contraseña debe ser de 6 dígitos o más
- La url de la imagen debe ser de tipo url correcta, y es opcional

Editar Perfil

```
_<!-- Formulario de edición de perfil -->_

 <form action="">
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
                 class="imagen mx-auto mb-1 rounded-circle"
                 style="
                   background-image: url(.images/avatar.svg);
                   width: 200px;
                   height: 200px;
                   background-size: cover;
                   background-position: center;
                 "
               ></div>

               *<!-- Imagen de perfil -->*
               <label for="imagen" class="form-label mt-3">URL imagen:</label>
               <input
                 id="imagen"
                 type="url"
                 class="form-control"
                 value="http://imagenavatar.png"
               />
             </div>

             <div class="">

               *<!-- Nombre -->*
               <label for="nombre" class="form-label">Nombre:</label>
               <input required id="nombre" type="text" class="form-control" />

               *<!-- Apellidos -->*
               <label for="apellidos" class="form-label">Apellidos:</label>
               <input id="apellidos" type="text" class="form-control" />

               *<!-- Email -->*
               <label for="email" class="form-label">Email:</label>
               <input required id="email" type="email" class="form-control" />

               *<!-- Contraseña -->*
               <label for="pass" class="form-label mt-3">Contraseña:</label>
               <input required id="pass" type="password" min="6" class="form-control" />
             </div>
           </div>
         </div>
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
           Cancelar
         </button>
         <button type="button" class="btn btn-primary">Guardar cambios</button>
       </div>
     </div>

   </div>
 </form>
```

### **Formulario Nuevo proyecto / Editar proyecto**

- El nombre y estado son obligatorios
- La fecha debe ser de tipo fecha
- El enlace debe ser url correcta
- El repositorio debe ser url correcta
- La imagen debe ser url correcta

Formulario Nuevo proyecto

```
_<!-- Formulario nuevo proyecto -->_

 <form action="" class="form">

   *<!-- Nombre proyecto -->*
   <label class="form-label" for="nombre"><strong>Nombre: </strong></label>
   <input required id="nombre" type="text" value="Nombre Autor" class="form-control" />

   *<!-- Descripción -->*
   <label class="form-label mt-2" for="descripcion"
     ><strong>Descripción: </strong></label
   >
   <textarea id="descripcion" class="form-control" rows="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea>

   *<!-- Estado -->*
   <label class="form-label mt-2" for="estado"><strong>Estado: </strong></label>
   <select required id="estado" class="form-control">
     <option value="estado">estado</option>
     <option value="otro estado">otro estado</option>
   </select>

_<!-- Fecha -->_
 <label class="form-label mt-2" for="fecha"><strong>Fecha: </strong></label>
 <input id="fecha" type="date" class="form-control" value="12/12/2023"/>

_<!-- Enlace al proyecto -->_
 <label class="form-label mt-2" for="enlace"><strong>Enlace: </strong></label>
 <input id="enlace" type="url" class="form-control" value="http://enlace.com" />

_<!-- Repositorio -->_
 <label class="form-label mt-2" for="repositorio"
     ><strong>Repositorio: </strong></label

>    <input id="repositorio" type="text" class="form-control" value="user.github.com/123456" />

_<!-- Submit -->_
 <input type="submit" class="btn btn-success mt-3" value="Subir proyecto">

 </form>
```

Formulario editar proyecto

```
<form action="" class="">
 <div class="row mt-2">
   <div class="col-12 col-md-4 pt-2 mb-3">
     <img src=".images/juego.jpg" alt="" class="img-fluid" />
     <label class="form-label mt-2" for="urlImagen"
       ><strong>URL imagen: </strong></label
     >
     <input
       id="urlImagen"
       type="text"
       class="form-control"
       value="http://enlaceImagen.com"
     />
   </div>
   <div class="col-12 col-md-8">

     *<!-- Nombre proyecto -->*
     <label class="form-label" for="nombre"><strong>Nombre: </strong></label>
     <input
       required
       id="nombre"
       type="text"
       value="Nombre Autor"
       class="form-control"
     />

     *<!-- Descripción -->*
     <label class="form-label mt-2" for="descripcion"
       ><strong>Descripción: </strong></label
     >
     <textarea id="descripcion" class="form-control" rows="4">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea
     >

     *<!-- Estado -->*
     <label class="form-label mt-2" for="estado"
       ><strong>Estado: </strong></label
     >
     <select required id="estado" class="form-control">
       <option value="estado">estado</option>
       <option value="otro estado">otro estado</option>
     </select>

     *<!-- Fecha -->*
     <label class="form-label mt-2" for="fecha"
       ><strong>Fecha: </strong></label
     >
     <input id="fecha" type="date" class="form-control" value="12/12/2023" />

     *<!-- Enlace al proyecto -->*
     <label class="form-label mt-2" for="enlace"
       ><strong>Enlace: </strong></label
     >
     <input
       id="enlace"
       type="url"
       class="form-control"
       value="http://enlace.com"
     />

     *<!-- Repositorio -->*
     <label class="form-label mt-2" for="repositorio"
       ><strong>Repositorio: </strong></label
     >
     <input
       id="repositorio"
       type="text"
       class="form-control"
       value="user.github.com/123456"
     />

     *<!-- Submit -->*
     <input
       type="submit"
       class="btn btn-success mt-3"
       value="Subir proyecto"
     />

   </div>
 </div>
</form>
```

### **Formulario Editar usuarios desde Admin**

- El nombre es obligatorio
- El apellido es opcional
- Los campos email y contraseña son requeridos.
- El email debe ser tipo un email correcto
- La contraseña debe ser de 6 dígitos o más
- La url de la imagen debe ser de tipo url correcta, y es opcional

Formulario editar usuario desde admin

```
<form action="">
 <td>
   <div class="containerImagen">
     <div
       class="rounded-circle d-flex align-items-end justify-content-end"
       style="
         background-image: url(.images/avatar.svg);
         width: 50px;
         height: 50px;
         background-size: cover;
         background-position: center;
       "
     >
       <i class="btn btn-success btn-sm rounded-circle bi bi-pencil"></i>
     </div>
   </div>
 </td>
 <td>
   *<!-- URL imagen -->*
   <input
     type="url"
     class="form-control form-control-sm"
     value="http://imagen.com"
   />
 </td>
 <td>
   *<!-- email -->*
   <input
     required
     type="email"
     class="form-control form-control-sm"
     value="email@email.com"
   />
 </td>
 <td>
   <input
     required
     type="text"
     class="form-control form-control-sm"
     value="Nombre usuario"
   />
 </td>
 <td>
   <input
     type="text"
     class="form-control form-control-sm"
     value="Apellidos usuario"
   />
 </td>

 <td>
   <input
     type="date"
     class="form-control form-control-sm"
     value="12/12/2023 proyecto"
   />
 </td>
 <td>
   <select class="form-control form-control-sm" name="" id="">
     <option value="1">opción</option>
     <option value="2">opción2</option>
   </select>
 </td>
 <td>
   <select class="form-control form-control-sm" name="" id="">
     <option value="1">opción</option>
     <option value="2">opción2</option>
   </select>
 </td>
 <td>
   <button type="submit" class="btn btn-sm btn-success">
     Actualizar
   </button>
 </td>
 <td><i class="btn btn-sm btn-outline-danger bi bi-trash3"></i></td>
</form>
```

Estas serían todas las validaciones utilizando las caracteristicas de html5.

La respuesta del navegador cuando intentamos enviar un formulario con campos que no cumplen su condición establecida difiere dependiendo del navegador.

_Ejemplo de visualización de un formulario que no valida utilizando Google Chrome_ ![Validación según Chrome](https://carrebola.github.io/vanillaPill/assets/images/validacionChrome-560f58a277517200d28ee3c5f3017f1c.png)

Para evitar este problema podemos utilizar el sistema de validación que nos ofrece Bootstrap. Este sistema de validación implica utilizar algo de javascript, tal y como veremos en la siguiente tarea.

# **Usando Bootstrap para la validación**

En el apartado anterior hemos definido las reglas de validación de nuestros formularios y hemos aplicado las restricciones utilizando propiedades de html5 en los diferentes campos.

Este sistema, aunque muy útil, presenta un problema: no todos los navegadores muestran los mensajes de validación de la misma manera, y esto a veces puede interferir en el funcionamiento de nuestra aplicación.

Para evitar este inconveniente vamos a utilizar el sistema de validación de Bootstrap que, aunque no es perfecto (presenta algunos problemas de accesibilidad), mejorará el aspecto y control de los mensajes cuando el navegador nos informe de errores.

## **¿Cómo funciona? Formulario de inicio de sesión**

Para mostrar como funciona vamos a utilizar el formulario de inicio de sesión. Te muestro el código tal y como está ahora:

Form Inicio Sesión:

```
_<!-- Formulario de inicio de sesión (login) -->_

<form action="" class="form border shadow-sm p-3">
 *<!-- Email -->*
 <label for="email" class="form-label">Email:</label>
 <input required type="email" class="form-control" />

_<!-- Contraseña -->_
 <label for="pass" class="form-label mt-3">Contraseña:</label>
 <input required minlength="6" id="pass" type="password" class="form-control" />

_<!-- Recordar contraseña -->_

 <div class="form-check mt-3">
   <input
     class="form-check-input"
     type="checkbox"
     value=""
     id="flexCheckChecked"
     checked
   />
   <label class="form-check-label" for="flexCheckChecked">
     Recordar sesión
   </label>
 </div>

_<!-- Link a recordar contraseña -->_
 <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>

_<!-- Botón Iniciar sesión -->_
 <input
   type="submit"
   class="btn btn-primary w-100 mt-3"
   value="Iniciar sesión"
 />

</form>
```

1. En primer lugar necesitamos deshabilitar la validación de html5. Para ello añadiremos a la etiqueta `<form>` el atributo `novalidate`
2. `<form novalidate action="" class="form border shadow-sm p-3">`
3. Vamos ahora a añadir los mensajes de error que se mostrarán cuando un campo no valide correctamente. En este formulario el email debe tener un formato correcto y la contraseña debe tener un mínimo de 6 caracteres, y lógicamente, los campos no pueden estar vacíos.

```
_<!-- Email -->_
<label for="email" class="form-label">Email:</label>
 <input required type="email" class="form-control" />

 <div class="invalid-feedback">
   El formato del email no es correcto
 </div>
 *<!-- Contraseña -->*
 <label for="pass" class="form-label mt-3">Contraseña:</label>
 <input required minlength="6" id="pass" type="password" class="form-control" />
 <div class="invalid-feedback">
     La contraseña debe tener como mínimo 6 caracteres
 </div>
```

Ahora lo que haremos, mediante javascript, será:

1. Capturar el formulario en una variable
2. detectar cuando se intenta enviar el formulario (escuchando el evento submit)
3. Comprobar si el formulario valida correctamente. Si no valida
   1. Detenemos el evento submit para que no se intente enviar el formulario
   2. Y añadimos la clase no validate al formulario. Esto hará que se muestren los mensajes de error.

Este sería el código js resultante. Recuerda que debes incluirlo al final de la página, antes de de cerrar el body, mediante una etiqueta `<script>`

login.html

```

_<!-- Script para la validación del formulario -->_

<script>
 *//Capturamos el formulario en una variable*
 *const* formulario = document.querySelector("form")
 *//Detectamos su evento submit (enviar)*
 formulario.addEventListener("submit", (event) => {
   *//Comprobamos si el formulario no valida*
   *if* (!formulario.checkValidity()) {
     *//Detenemos el evento enviar (submit)*
     event.preventDefault()
     event.stopPropagation()
   }
   *//Y añadimos la clase 'was-validate' para que se muestren los mensajes*
   formulario.classList.add('was-validated')
 });
</script>

```

Aquí puedes ver como se mostraría un error de validación usando este método:

![Error de validación](https://carrebola.github.io/vanillaPill/assets/images/validacionChromeError-4ff5f28906b13b7a11c7260eaa3e4317.png)

Ahora vamos a hacer el mismo procedimiento con el resto de páginas

## **Registro**

```

<!-- Formulario de registro -->

  <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#"
            ><img
              src="https://carrebola.github.io/vanillaPill/img/logo.svg"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Vanilla Games</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#"
                  >TOP5 Proyectos</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
              <li class="nav-item">
                <button class="ms-2 btn btn-success">
                  Iniciar sesión
                  <i class="bi bi-box-arrow-in-right"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div class="container">
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
      </div>
    </main>
    <footer class="">
      <nav class="navbar bg-secondary fixed-bottom small">
        <div class="container">
          <a class="navbar-brand" href="http://www.fpllefia.com">
            <img
              src="https://carrebola.github.io/vanillaPill/img/logo.svg"
              alt="fpllefia"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            FPLlefià
          </a>
          <span class="navbar-text">@Texto de header</span>
          <a href="#" class="nav-link">Vínculo header</a>
        </div>
      </nav>
    </footer>
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <!-- Script para la validación del formulario -->
    <script>
      //Capturamos el formulario en una variable
      const formulario = document.querySelector("form");
      //Detectamos su evento submit (enviar)
      formulario.addEventListener("submit", (event) => {
        //Comprobamos si el formulario no valida
        if (!formulario.checkValidity()) {
          //Detenemos el evento enviar (submit)
          event.preventDefault();
          event.stopPropagation();
        }
        //Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add("was-validated");
      });
    </script>
  </body>
```

## **Editar Perfil**

```

  <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#"
            ><img
              src="https://carrebola.github.io/vanillaPill/img/logo.svg"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Vanilla Games</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Menú general -->
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#"
                  >TOP5 Proyectos</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
              </li>
            </ul>
            <!-- Menú ROL -->
            <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >PROYECTOS</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://www.svgrepo.com/show/57853/avatar.svg"
                    alt=""
                    width="25"
                  />
                </a>
                <!-- Menú usuario -->
                <ul
                  class="dropdown-menu me-0"
                  style="left: -100px; width: 100px"
                >
                  <li class="text-light text-center p-2">
                    <p>user@email.com</p>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <button
                      type="button"
                      class="dropdown-item"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Editar perfil
                    </button>
                  </li>
                  <li><a class="dropdown-item" href="#">Otra acción</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- VEntana edición perfil -->
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
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
                      <label for="imagen" class="form-label mt-3"
                        >URL imagen:</label
                      >
                      <input
                        id="imagen"
                        type="url"
                        class="form-control"
                        value="http://imagenavatar.png"
                      />
                      <div class="invalid-feedback">
                        El formato url no es correcto
                      </div>
                    </div>
                    <div class="">
                      <!-- Nombre -->
                      <label for="nombre" class="form-label">Nombre:</label>
                      <input
                        required
                        id="nombre"
                        type="text"
                        class="form-control"
                      />
                      <!-- Apellidos -->
                      <label for="apellidos" class="form-label"
                        >Apellidos:</label
                      >
                      <input id="apellidos" type="text" class="form-control" />
                      <!-- Email -->
                      <label for="email" class="form-label">Email:</label>
                      <input required type="email" class="form-control" />
                      <div class="invalid-feedback">
                        El formato del email no es correcto
                      </div>
                      <!-- Contraseña -->
                      <label for="pass" class="form-label mt-3"
                        >Contraseña:</label
                      >
                      <input
                        required
                        minlength="6"
                        id="pass"
                        type="password"
                        class="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="submit" class="btn btn-primary">
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </header>
    <main>
      <div class="container">
        <h1 class="mt-5">Modal para editar perfil en header</h1>
        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
      </div>
    </main>
    <footer class="">
      <nav class="navbar bg-secondary fixed-bottom small">
        <div class="container">
          <a class="navbar-brand" href="http://www.fpllefia.com">
            <img
              src="https://carrebola.github.io/vanillaPill/img/logo.svg"
              alt="fpllefia"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            FPLlefià
          </a>
          <span class="navbar-text">@Texto de header</span>
          <a href="#" class="nav-link">Vínculo header</a>
        </div>
      </nav>
    </footer>
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
      crossorigin="anonymous"
    ></script>
    <!-- Script para la validación del formulario -->
    <script>
      //Capturamos el formulario en una variable
      const formulario = document.querySelector("form");
      //Detectamos su evento submit (enviar)
      formulario.addEventListener("submit", (event) => {
        //Comprobamos si el formulario no valida
        if (!formulario.checkValidity()) {
          //Detenemos el evento enviar (submit)
          event.preventDefault();
          event.stopPropagation();
        }
        //Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add("was-validated");
      });
    </script>
  </body>
```

## **Nuevo Proyecto**

```

  <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#"
            ><img
              src="https://carrebola.github.io/vanillaPill/img/logo.svg"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Vanilla Games</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#"
                  >TOP5 Proyectos</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >PROYECTOS</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://carrebola.github.io/vanillaPill/img/logo.svg"
                    alt=""
                    width="25"
                  />
                </a>
                <ul
                  class="dropdown-menu me-0"
                  style="left: -100px; width: 100px"
                >
                  <li class="text-light text-center p-2">
                    <p>user@email.com</p>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Acciónn</a></li>
                  <li><a class="dropdown-item" href="#">Otra acción</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div class="container">
        <h1 class="mt-5">Nuevo proyecto</h1>
        <div class="d-flex justify-content-end">
          <bottom class="btn btn-outline-secondary mt-5">
            <i class="bi bi-arrow-bar-left" style="font-size: 1em"></i>
            Volver</bottom
          >
        </div>
        <div class="row mt-2">
          <div class="col-12 col-md-4 pt-2 mb-3">
            <img
              src="https://carrebola.github.io/vanillaPill/img/logo.svg"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="col-12 col-md-8">
            <!-- Formulario nuevo proyecto -->
            <form novalidate action="" class="form">
              <!-- Nombre proyecto -->
              <label class="form-label" for="nombre"
                ><strong>Nombre: </strong></label
              >
              <input
                required
                id="nombre"
                type="text"
                value="Nombre Autor"
                class="form-control"
              />
              <!-- Descripción -->
              <label class="form-label mt-2" for="descripcion"
                ><strong>Descripción: </strong></label
              >
              <textarea id="descripcion" class="form-control" rows="4">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea
              >
              <!-- Estado -->
              <label class="form-label mt-2" for="estado"
                ><strong>Estado: </strong></label
              >
              <select required id="estado" class="form-control">
                <option value="estado">estado</option>
                <option value="otro estado">otro estado</option>
              </select>
              <!-- Fecha -->
              <label class="form-label mt-2" for="fecha"
                ><strong>Fecha: </strong></label
              >
              <input
                id="fecha"
                type="date"
                class="form-control"
                value="12/12/2023"
              />
              <div class="invalid-feedback">
                El formato de la fecha es incorrecto
              </div>
              <!-- Enlace al proyecto -->
              <label class="form-label mt-2" for="enlace"
                ><strong>Enlace: </strong></label
              >
              <input
                id="enlace"
                type="url"
                class="form-control"
                value="http://enlace.com"
              />
              <div class="invalid-feedback">
                El enlace debe ser url correcta
              </div>
              <!-- Repositorio -->
              <label class="form-label mt-2" for="repositorio"
                ><strong>Repositorio: </strong></label
              >
              <input
                id="repositorio"
                type="url"
                class="form-control"
                value="user.github.com/123456"
              />
              <div class="invalid-feedback">
                El repositorio debe ser url correcta
              </div>
              <!-- Submit -->
              <input
                type="submit"
                class="btn btn-success mt-3"
                value="Subir proyecto"
              />
            </form>
          </div>
        </div>
      </div>
    </main>
    <footer class="">
      <nav class="navbar bg-secondary fixed-bottom small">
        <div class="container">
          <a class="navbar-brand" href="http://www.fpllefia.com">
            <img
              src="https://carrebola.github.io/vanillaPill/img/logo.svg"
              alt="fpllefia"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            FPLlefià
          </a>
          <span class="navbar-text">@Texto de header</span>
          <a href="#" class="nav-link">Vínculo header</a>
        </div>
      </nav>
    </footer>
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <script>
      //Capturamos el formulario en una variable
      const formulario = document.querySelector("form");
      //Detectamos su evento submit (enviar)
      formulario.addEventListener("submit", (event) => {
        //Comprobamos si el formulario no valida
        if (!formulario.checkValidity()) {
          //Detenemos el evento enviar (submit)
          event.preventDefault();
          event.stopPropagation();
        }
        //Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add("was-validated");
      });
    </script>
  </body>

```

## **Editar Proyecto**

```

  <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#"
            ><img
              src="https://carrebola.github.io/vanillaPill/img/logo.svg"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Vanilla Games</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#"
                  >TOP5 Proyectos</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >PROYECTOS</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://www.svgrepo.com/show/57853/avatar.svg"
                    alt=""
                    width="25"
                  />
                </a>
                <ul
                  class="dropdown-menu me-0"
                  style="left: -100px; width: 100px"
                >
                  <li class="text-light text-center p-2">
                    <p>user@email.com</p>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Acciónn</a></li>
                  <li><a class="dropdown-item" href="#">Otra acción</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div class="container">
        <h1 class="mt-5">Edición de proyecto</h1>
        <div class="d-flex justify-content-end">
          <bottom class="btn btn-outline-secondary mt-5">
            <i class="bi bi-arrow-bar-left" style="font-size: 1em"></i>
            Volver</bottom
          >
        </div>
        <form novalidate action="" class="">
          <div class="row mt-2">
            <div class="col-12 col-md-4 pt-2 mb-3">
              <img
                src="https://carrebola.github.io/vanillaPill/img/logo.svg"
                alt=""
                class="img-fluid"
              />
              <label class="form-label mt-2" for="urlImagen"
                ><strong>URL imagen: </strong></label
              >
              <input
                id="urlImagen"
                type="url"
                class="form-control"
                value="http://enlaceImagen.com"
              />
              <div class="invalid-feedback">
                El formato de la fecha es incorrecto
              </div>
            </div>
            <div class="col-12 col-md-8">
              <!-- Formulario nuevo proyecto -->
              <!-- Nombre proyecto -->
              <label class="form-label" for="nombre"
                ><strong>Nombre: </strong></label
              >
              <input
                required
                id="nombre"
                type="text"
                value="Nombre Autor"
                class="form-control"
              />
              <!-- Descripción -->
              <label class="form-label mt-2" for="descripcion"
                ><strong>Descripción: </strong></label
              >
              <textarea id="descripcion" class="form-control" rows="4">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea
              >
              <!-- Estado -->
              <label class="form-label mt-2" for="estado"
                ><strong>Estado: </strong></label
              >
              <select required id="estado" class="form-control">
                <option value="estado">estado</option>
                <option value="otro estado">otro estado</option>
              </select>
              <!-- Fecha -->
              <label class="form-label mt-2" for="fecha"
                ><strong>Fecha: </strong></label
              >
              <input
                id="fecha"
                type="date"
                class="form-control"
                value="12/12/2023"
              />
              <div class="invalid-feedback">
                El formato de la fecha es incorrecto
              </div>
              <!-- Enlace al proyecto -->
              <label class="form-label mt-2" for="enlace"
                ><strong>Enlace: </strong></label
              >
              <input
                id="enlace"
                type="url"
                class="form-control"
                value="http://enlace.com"
              />
              <div class="invalid-feedback">
                El enlace debe ser url correcta
              </div>
              <!-- Repositorio -->
              <label class="form-label mt-2" for="repositorio"
                ><strong>Repositorio: </strong></label
              >
              <input
                id="repositorio"
                type="url"
                class="form-control"
                value="user.github.com/123456"
              />
              <div class="invalid-feedback">
                El repositorio debe ser url correcta
              </div>
              <!-- Submit -->
              <input
                type="submit"
                class="btn btn-success mt-3"
                value="Subir proyecto"
              />
            </div>
          </div>
        </form>
      </div>
    </main>
    <footer class="">
      <nav class="navbar bg-secondary fixed-bottom small">
        <div class="container">
          <a class="navbar-brand" href="http://www.fpllefia.com">
            <img
              src="https://carrebola.github.io/vanillaPill/img/logo.svg"
              alt="fpllefia"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            FPLlefià
          </a>
          <span class="navbar-text">@Texto de header</span>
          <a href="#" class="nav-link">Vínculo header</a>
        </div>
      </nav>
    </footer>
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <script>
      //Capturamos el formulario en una variable
      const formulario = document.querySelector("form");
      //Detectamos su evento submit (enviar)
      formulario.addEventListener("submit", (event) => {
        //Comprobamos si el formulario no valida
        if (!formulario.checkValidity()) {
          //Detenemos el evento enviar (submit)
          event.preventDefault();
          event.stopPropagation();
        }
        //Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add("was-validated");
      });
    </script>
  </body>

```

## **Editar Usuarios desde Admin**

```

  <body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#"
            ><img
              src="https://carrebola.github.io/vanillaPill/img/logo.svg"
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Vanilla Games</a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#"
                  >TOP5 Proyectos</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">A cerca de</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"
                  >PROYECTOS</a
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://www.svgrepo.com/show/57853/avatar.svg"
                    alt=""
                    width="25"
                  />
                </a>
                <ul
                  class="dropdown-menu me-0"
                  style="left: -100px; width: 100px"
                >
                  <li class="text-light text-center p-2">
                    <p>user@email.com</p>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Acciónn</a></li>
                  <li><a class="dropdown-item" href="#">Otra acción</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main>
      <div class="container-fluid">
        <h1 class="mt-5">Panel de administración</h1>
        <!-- tabs -->
        <div class="row mt-5">
          <div class="col-12">
            <ul class="nav nav-tabs">
              <li class="nav-item w-50">
                <a class="nav-link active" aria-current="page" href="#"
                  >Usuarios</a
                >
              </li>
              <li class="nav-item w-50">
                <a class="nav-link" href="#">Proyectos</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- tabla proyectos -->
        <div class="border border-top-0 p-3">
          <!-- buscador -->
          <div class="row">
            <div class="d-flex col-12 col-md-6 mb-3">
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping"
                  ><i class="bi bi-search"></i
                ></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Buscador"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
                <span class="input-group-text" id="addon-wrapping"
                  ><i class="bi bi-x"></i
                ></span>
              </div>
            </div>
          </div>
          <!-- tabla usuarios-->
          <div class="col-12" style="overflow-x: auto">
            <form novalidate action="">
              <table
                class="table table-hover align-middle mt-3"
                style="min-width: 1200px"
              >
                <thead>
                  <tr>
                    <th></th>
                    <th>
                      URL imagen <span><i class="bi bi-caret-down"></i></span>
                    </th>
                    <th>
                      Email <span><i class="bi bi-caret-down"></i></span>
                    </th>
                    <th>
                      Nombre <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th>
                      Apellidos <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th>
                      Fecha <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th>
                      Rol <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th>
                      Estado <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tr>
                  <td>
                    <div class="containerImagen">
                      <div
                        class="rounded-circle d-flex align-items-end justify-content-end"
                        style="
                          background-image: url(https://www.svgrepo.com/show/57853/avatar.svg);
                          width: 50px;
                          height: 50px;
                          background-size: cover;
                          background-position: center;
                        "
                      >
                        <i
                          class="btn btn-success btn-sm rounded-circle bi bi-pencil"
                        ></i>
                      </div>
                    </div>
                  </td>
                  <td>
                    <!-- URL imagen -->
                    <input
                      type="url"
                      class="form-control form-control-sm"
                      value="http://imagen.com"
                    />
                    <div class="invalid-feedback">
                      La url de la imagen debe ser de tipo url correcta
                    </div>
                  </td>
                  <td>
                    <!-- email -->
                    <input
                      required
                      type="email"
                      class="form-control form-control-sm"
                      value="email@email.com"
                    />
                    <div class="invalid-feedback">
                      El email debe ser tipo un email correcto
                    </div>
                  </td>
                  <td>
                    <input
                      required
                      type="text"
                      class="form-control form-control-sm"
                      value="Nombre usuario"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      value="Apellidos usuario"
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      class="form-control form-control-sm"
                      value="2023-12-12"
                    />
                  </td>
                  <td>
                    <select class="form-control form-control-sm" name="" id="">
                      <option value="1">opción</option>
                      <option value="2">opción2</option>
                    </select>
                  </td>
                  <td>
                    <select class="form-control form-control-sm" name="" id="">
                      <option value="1">opción</option>
                      <option value="2">opción2</option>
                    </select>
                  </td>
                  <td>
                    <button type="submit" class="btn btn-sm btn-success">
                      Actualizar
                    </button>
                  </td>
                  <td>
                    <i class="btn btn-sm btn-outline-danger bi bi-trash3"></i>
                  </td>
                </tr>
              </table>
            </form>
          </div>
        </div>
      </div>
    </main>
    <footer class="">
      <nav class="navbar bg-secondary fixed-bottom small">
        <div class="container">
          <a class="navbar-brand" href="http://www.fpllefia.com">
            <img
              src="https://carrebola.github.io/vanillaPill/img/logo.svg"
              alt="fpllefia"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            FPLlefià
          </a>
          <span class="navbar-text">@Texto de header</span>
          <a href="#" class="nav-link">Vínculo header</a>
        </div>
      </nav>
    </footer>
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <!-- Script para la validación del formulario -->
    <script>
      //Capturamos el formulario en una variable
      const formulario = document.querySelector("form");
      //Detectamos su evento submit (enviar)
      formulario.addEventListener("submit", (event) => {
        //Comprobamos si el formulario no valida
        if (!formulario.checkValidity()) {
          //Detenemos el evento enviar (submit)
          event.preventDefault();
          event.stopPropagation();
        }
        //Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add("was-validated");
      });
    </script>
  </body>
```

# **Entorno de desarrollo para contruir una SPA**

¡Comenzamos el SPRINT 3: SPA!

![Proyecto Github](https://carrebola.github.io/vanillaPill/assets/images/image-1-35ece1840a66eaf784069ce1fafb7713.png)

Ha llegado la hora de darla caña a javascript.

Hasta ahora, en lo que a front-end se refiere:

1. Hemos definido las especificaciones de nuestro proyecto
2. Lo hemos seccionado en versiones funcionales
3. Hemos definido los casos de uso y su diagrama de casos de uso
4. Hemos diseñado la interficie a partir de bocetos que hemos testeado y revisado
5. Hemos maquetado los prototipos en html y Bootstrap
6. Hemos definido validaciones y las hemos implementado a traves de html5, javascript y Bootstrap.

## **¿Qué es una Single Page Aplication (SPA)?**

"SPA" es la abreviatura de "Single Page Application", que se traduce al español como "Aplicación de Página Única". Una SPA es un tipo de aplicación web que funciona en una sola página, donde la mayoría de la interacción y navegación ocurre sin necesidad de recargar la página completa.  
Más información...

En una SPA, el contenido se carga inicialmente junto con la aplicación, y a medida que el usuario interactúa con la aplicación, se actualizan dinámicamente solo las partes necesarias de la página, en lugar de recargar todo el contenido. Esto permite una experiencia de usuario más fluida y rápida, ya que se reducen los tiempos de carga y se minimiza la necesidad de comunicación constante con el servidor.

Las SPAs suelen utilizar tecnologías como JavaScript, AJAX (Asynchronous JavaScript and XML) y frameworks como React, Angular o Vue.js para gestionar la actualización de contenido en tiempo real sin recargar la página.

## **¿Y como funciona?**

El concepto es el siguiente:

En nuestro servidor tendremos una página html `index.html` con algunos divs, pero prácticamente vacía, que cargará un archivo javascript `main.js`. Cuando visitamos esta página el navegador la cargará y ejecutará su javascript, como siempre.

En el main.js tendremos unas funciones (en realidad objetos) que conforme se van ejecutando irán 'inyectando' fragmentos de html (con su javascript correspondiente) en la página index.html. A estos fragmentos los llamaremos 'COMPONENTES'.

Estos componentes, a su vez, ejecutan sus scripts cargando, si corresponde, nuevos componentes. De esta manera se irá construyendo la página: Primero se carga el index.html, que llama al main.js, el cual inyecta el menu.js, la vista home.js, el footer.js, etc.

Por eso la llamamos SPA, porque solo tenemos la página index.html, que irá construyendose en el navegador conforme se ejecute el javascript que lleva dentro.

## **Hablemos de NodeJS**

**![npm](https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png)**

Node.js es una plataforma de programación que nos va a permitir crear aplicaciones y sitios web usando el lenguaje de programación JavaScript.

A diferencia de JavaScript que normalmente se ejecuta en navegadores web, Node.js permite que JavaScript también se ejecute en servidores, lo que lo hace útil para crear aplicaciones web de alto rendimiento y aplicaciones de red.

Osea, que si antiguamente usabamos javascript ejecutándolo en el navegador (para realizar tareas como validación, mejorar la interactividad, etc) y php ejecutándolo en el servidor (para hacer consultas a bases de datos, gestionar archivos, etc.) ahora... ¡tachan! ... Podemos utilizar javascript tanto en el lado del cliente como en el lado del servidor, sustituyendo a otros lenguajes como php, python, java, etc.

Nosotros no lo usaremos en el lado del servidor (aunque molaría mucho) porque ya estamos usando un servicio como back-end. Nuestro amado Supabase.  
Node.js

Node.js fue creado por Ryan Dahl y su desarrollo comenzó en 2009. Dahl presentó Node.js como un entorno de tiempo de ejecución (runtime) en la conferencia JSConf en 2009.

La plataforma se basa en el motor de JavaScript V8 de Google, que también se utiliza en el navegador Google Chrome.

Node.js se ha convertido en una tecnología muy influyente en el mundo del desarrollo web y ha ganado popularidad debido a su capacidad para construir aplicaciones web en tiempo real y escalables utilizando JavaScript tanto en el lado del servidor como en el cliente.

Te explico algunas de las ventajas de usar Node.js con más detalle:

Nos va a facilitar mucho el desarrollo frontend al permitir la utilización de JavaScript en ambos lados, cliente y servidor. Además:

- Nos va a facilitar el manejo de dependencias (por ejemplo con _npm_)
- Nos va a brindar herramientas de automatización en la creación de proyectos (por ejemplo con vite)
- Y proporcionar una integración fluida con frameworks y bibliotecas frontend populares (como podrían ser React, Vue, etc.).

## **Hablemos de 'npm'**

**![npm](https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png)**

Como te iba diciendo, necesitamos instalar en nuestro ordenador Node.js para poder empezar a crear aplicaciones web basadas en javascript.

A la vez que instalamos Nodejs, se nos va a instalar npm, que es un gestor de paquetes que nos va a ir de perlas, ya lo verás.  
¿Qué es npm?

NPM (Node Package Manager) es una herramienta que se utiliza en el entorno de Node.js para gestionar las bibliotecas y paquetes de código reutilizable que los desarrolladores utilizan en sus proyectos. En términos más simples, podrías pensar en NPM como una especie de "tienda" en línea donde puedes encontrar y descargar piezas de código que hacen tareas específicas.

## **Hablemos de Vite**

**![Vite](https://vitejs.dev/logo-with-shadow.png)**

Y finalmente instalaremos Vite.

¡Vite es una pasada! Con el podremos montar un proyecto en muy pocos segundos: nos creará el scaffolding (las carpetas de nuestra app), traducirá nuestro scss a css normal y el javascript más moderno a una versión que todos los navegadores entiendan, y muchas cosas más. Es una herramienta fantástica.  
¿Qué es Vite?

Vite es un entorno de desarrollo para construir aplicaciones web rápidas.

Se enfoca en acelerar el proceso de desarrollo al recargar rápidamente los cambios y al aprovechar el sistema de módulos nativos de JavaScript.

También es amigable con diferentes lenguajes y formatos, lo que facilita la creación de aplicaciones web modernas y eficientes.

Algunas características clave de Vite incluyen:

## **Hablemos de GitHub Pages**

**![Github Pages](https://carrebola.github.io/vanillaPill/assets/images/githubpages-9039b1d24c0bcad874425531cd0e3697.png)**

Estuvimos instalando VSCode, configurándolo con plugins como Prettier, etc. Pero también instalamos Git y lo conectamos con GitHub, que como recordarás, es un repositorio en la nube.

Pues bien, GitHub tiene tambien una funcionalidad que nos va a ir a las mil maravillas: GitHub Pages.

Con GitHub Pages tendremos un servidor de pruebas para que podamos ir desplegando nuestra aplicación y ver como funciona tal y como lo haría una vez desplegada en producción.  
info

GitHub Pages es un servicio ofrecido por GitHub que permite a los usuarios alojar sitios web estáticos directamente desde sus repositorios de GitHub. En otras palabras, te permite convertir tu repositorio de GitHub en un sitio web público que cualquiera puede visitar en línea.

Aquí hay algunas características clave de GitHub Pages:

## **Y finalmente, hablemos de ESLint**

**![Eslint](https://carrebola.github.io/vanillaPill/assets/images/eslint-cd25cb4d2c87995eba79800ff78be8eb.png)**

Para el diseño de los prototipos html nos hemos ayudado de Prettier, un plugin de VSCode que nos ayuda a dar formato al codigo html y css, pero para javascript tenemos una herramienta mucho más potente llamada EsLint.

A la hora de escribir nuestro código es importante mantener las formas, utilizando estructuras correctas y manteniendo ciertas pautas. Por ejemplo:

- ¿Debo poner punto y coma al final de cada linea?
- ¿Puedo declarar variables y luego no usarlas?
- ¿Puedo dejar espacios entra lineas de código?
- ¿Cuantos espacios debo poner al tabular?

Una vez tengo claras todas estas reglas, puedo utilizar un Linter para que se encargue de vigilar que las estoy cumpliendo que nuestro código es consistente.

Con esto vamos a evitar malas prácticas escribiendo el código y podremos detectar errores de sintaxis antes de ejecutar nuestros scripts.

Existen algunos estandars a la hora de escribir código que tienen sus propias reglas. Por ejemplo:

- Airbnb
- StandardJS
- Google
- XO Nosotros nos basaremos en el estandard StandardJS.

¿Qué es un linter?

Un linter es una herramienta de programación que analiza el código fuente de un programa en busca de errores, inconsistencias y patrones de código que no siguen las convenciones y mejores prácticas de programación.

Los linters modernos son herramientas que ayudan a los desarrolladores a escribir un código más limpio, legible y coherente.

Algunos de los aspectos que un linter puede verificar incluyen:

## **ESlint como linter predeterminado**

En nuestro caso usaremos una libreria llamada ESLint como linter para que vigile el código de nuestros proyectos, que configuraremos para que se ajuste al StandardJS.

Nosotros usaremos el linter que más exito ha tenido en la programación con javascript: ESLint.

Es hora de actualizar nuestro entorno de trabajo. Después crearemos nuestro proyecto basado en NodeJs con la herramienta Vite e instalaremos las dependencias necesarias con npm, como puede ser ESLint, para mejorar nuestro flujo de trabajo en el desarrollo de nuestra SPA.

# **Construyendo nuestra SPA**

Como desarrollador quiero crear una infraestructura básica para la creación del proyecto basada en vite. Además quiero crear un repositorio y publicarlo en github y desplegar la app en github pages.

## **Esto es lo que vamos a hacer:**

1. Instalaremos Node.js que a su vez instalará npm
2. Crearemos un proyecto html/javascript utilizando vite dentro de nuestra carpeta de proyecto
3. Analizaremos el proyecto ejemplo para comprender la estructura de archivos que incluye una spa.
4. Modificaremos el scaffolding (las carpetas y archivos) de nuestro proyecto con algunos 'componentes' básicos.
5. Crearemos el archivo vite.config y verificamos que todo funciona de forma correcta
6. Instalaremos Bootstrap y Bootswach
7. Instalaremos ESLint
8. Crearemos un sistema de despliegue continuo basado en GitHub Pages utilizando la dependencia gh-pages.

### **1. Instalando Node.js**

Este apartado no tiene misterio. Te vas a la [web de Node.js](https://nodejs.org/es) y descargas el paquete correspondiente a tu sistema operativo y lo instalas. (Ya sabes: continuar, continuar, continuar...)

### **2. Construyendo una app con vite**

- En primer lugar debemos asegurarnos de cambiar a la rama `main`. Veremos que en la raiz de nuestro proyecto solo tenemos el archivo _readme.md_
- Abrimos un terminal en el propio VSCode (`ctrl+mayus+ñ`) para crear nuestro proyecto. Ejecuta la siguiente linea de código.

```
- npm create vite .
```

- Te preguntará si quieres borrar los archivos que hay en la carpeta. Dile que sí, porque lo único que tenemos es el readme.md que ya verás que nos va a respetar.
- Indicaremos que queremos un proyecto basado en Vanilla javascript (es decir, javascript puro)
- Indicaremos que usamos javascript (no queremos typescript)
- En este momento nos habrá creado los archivos y las carpetas básicas para una app. Solo nos falta instalar las dependencias. Para ello usamos npm desde el terminal:

```
- npm install
```

Fíjate que ahora se ha creado una carpeta nueva llamada node_modules. Aquí están instaladas todas las librerias que vamos a necesitar. (De momento, esa carpeta mejor no tocarla 😅)

- Para acabar vamos a levantar un servidor de pruebas. Si abrimos esta url en un navegador podremos ver como va quedando nuestro proyecto. De momento veremos la plantilla básica que nos ofrece vite.

```
- npm run dev
```

```
- VITE v4.4.9 ready in 199 ms

- ➜ Local: http://localhost:5173/
- ➜ Network: use --host to expose
- ➜ press h to show help

```

![Pagina con vite](https://carrebola.github.io/vanillaPill/assets/images/localhost-2697f8e70309dbd9dde0bcc98d4c1eaa.png)

### **3. Analizando el proyecto de ejemplo**

Veamos los archivos y carpetas que nos ha creado vite:

Los archivos más importante son el `index.html` y `main.js`

index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/main.js"></script>
  </body>
</html>
```

Lo que tenemos aquí es un index.html que se cargará en el navegador. Este tiene un div con id="app". En este div es donde se inyecta toda la aplicación. ¡Y no tenemos nada más! El resto de los componentes se irán contruyendo desde javascript.

Este es el archivo main.js que cargamos desde index.html:

main.js

```
import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

```

En el main.js podemos ver como inicialmente cargamos tres archivos, el style.css, un archivo .svg (una imagen) y el archivo counter.js, el cual tiene el código correspondiente al contador que hemos visto en la página principal.

A continuacion, haciendo uso de `innerHTML` inyectamos en el div 'app' un fragmento de código html (un div que incluye unos enlaces, un botón, una imagen, etc.).

Es decir, estamos construyendo la página desde el archivo main.js

Ahora que vemos de qué va esto, vamos a contruir nuestra propia estructura para el proyecto que estamos desarrollando.

### **4. Modificando nuestro Scaffolding**

Hemos visto que todo funciona bien. De momento... Porque ahora vamos a contruir la estructura de archivos con una vista principal y algunos objetos a modo de componentes.

Hagamos lo siguiente:

- Eliminamos los archivos counter.js, index.html, main.js y style.css y creamos una estructura de carpetas como esta:

```
          node_modules
        src
            componentes
                header.js
                footer.js
            vistas
                homeVista.js
            index.html
            main.js
        .gitignore
        package.json
        package-lock.json
```

- Modificamos `index.html` para que solo tenga las etiquetas header, main y footer y enlazamos el archivo main.js

index.html

```
         <!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vanilla Games</title>
          </head>
          <body>
            <header></header>
            <main></main>
            <footer></footer>
            <script type="module" src="/main.js"></script>
          </body>
        </html>
```

- Creamos la vista principal y los componentes header y footer con un 'template' básico

home.js

```
        export default {
            template: `<h1>home</h1>`
        }
```

header.js

```
        export const header = {
            template: `header`
        }
```

- En `**main.js**` importamos los componentes header y footer y los inyectamos en sus etiquetas correspondients. También cargamos la vista `home.js` en la etiqueta main

main.js

```
import { header } from './componentes/header'
import { footer } from './componentes/footer'

// Importamos la vista por defecto (que será home)
async function cargarVista () {
  const componente = await import('./vistas/homeVista')
  const vista = componente.default
  // Inyectamos la vista home
  document.querySelector('main').innerHTML = vista.template
}
cargarVista()

//Inyectamos el componente header
document.querySelector('header').innerHTML = header.template

//Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template
```

- Con estos cambios la app ha dejado de funcionar. Eso es porque no encuentra el index.html y main.js en la raiz del proyecto.  
  Así que vamos a configurar vite para que sepa dónde buscar los archivos index.html y main.js

## **5. Configurando vite con el archivo `Vite.config.js`**

Creamos el archivo `vite.config.js` en la raiz del proyecto y copiamos el siguiente código (que puedes encontrar en el manual de vite). En los comentarios verás que función tiene cada línea aunque de momento no le des demasiada importancia.

vite.config.js

```
import path from 'path' // Para gestionar directorios

export default {
  // Definimos la carpeta donde buscar cuando se carga la aplicación (donde estará el main.js)
  root: path.resolve(__dirname, 'src'),

  build: {
    rollupOptions: {
        /*
            Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
            interna de Rollup de Vite.
        */
        input: {
            main: path.resolve(__dirname, 'src/index.html'), // Indicamos las páginas que debe analizar
        },
        output: {
            dir: path.resolve(__dirname, 'dist'), //Donde se va a crear el build de nuestra aplicacion
            format: 'es', //Formato de ES modules
        },
    },
    outDir: path.resolve(__dirname, 'dist'),
    minify: false, //( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
},
  server: {
    /*port: 8080, */ // Podemos definir el puerto de salida
    hot: true
  }
}
```

Observa que los componentes header y footer los exportamos con un nombre fijo `export const header = {}`, y `export const footer = {}`. Pero en el caso de homeVista usamos `export default {}` Esto lo hacemos para poder gestionar el cambio de páginas de la aplicación. Mas adelante lo explicaremos con más detalle.

¡Ahora sí que podemos ver nuestra aplicación funcionando!

Está compuesta de tres componentes, el header.js que hemos inyectado en la etiqueta `<header>`, el footer.js que hemos inyectado en la etiqueta `<footer>` y el componente homeVista.js que hemos inyectado en la etiqueta `<main>`.

A este último (homevista.js) le hemos añadido al final la palabra `vista`para indicar que representa una página web, en este caso la página Home.

## **4. Instalando Bootstrap, Bootswatch y SASS**

En la construcción de prototipos html hemos utilizado Bootstrap mediante el cdn. Es una manera sencilla y rápida, pero en los proyectos reales solemos descargar los archivos para no tener que depender de terceros.

Como hemos visto anteriormente, Bootstrap funciona con SASS, por lo que necesitamos instalar y configurar nuestro proyecto para que convierte los archivos sass en css estandar.

- Para instalar bootstrap y bootswatch abre un terminal y ejecuta la siguiente linea de comandos:

```
  npm i bootstrap bootswatch @popperjs/core
```

- Instala ahora sass

```
npm i sass -D
```

Si la instalación se ha completado con éxito podemos ver en el archivo package.json las dependencias instaladas:

package.json

```
{
  "name": "vanillagames10",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "sass": "^1.66.1",
    "vite": "^4.1.0"
  },
  "dependencies": {
    "@popperjs/core": "^2.11.8",
    "bootstrap": "^5.3.1",
    "bootswatch": "^5.3.1"
  }
}

```

- Vamos a crear ahora la carpeta `src/scss` y dentro creamos el archivo `styles.scss`
- Modificamos el archivo `vite.config.js` para que se procese sass añadiendo la siguiente linea:

```
alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~bootswatch': path.resolve(__dirname, 'node_modules/bootswatch')
    }
```

El archivo vite.config.js quedaría así:

vite.config.js

```
import path from 'path'

export default {
  root: path.resolve(__dirname, 'src'), // Carpeta donde alojamos el archivo main.js
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~bootswatch': path.resolve(__dirname, 'node_modules/bootswatch'),
    }
  },
  build: {
    rollupOptions: {
        /*
            Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
            interna de Rollup de Vite.
        */
        input: {
            main: path.resolve(__dirname, 'src/index.html'), // Indicamos las páginas que debe analizar
        },
        output: {
            dir: path.resolve(__dirname, 'dist'), //Donde se va a crear el build de nuestra aplicacion
            format: 'es', //Formato de ES modules
        },
    },
    outDir: path.resolve(__dirname, 'dist'),
    minify: false, //( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
},
  server: {
    /*port: 8080,*/  // Podemos definir el puerto de salida
    hot: true
  }
}
```

- En el archivo `styles.scss` cargamos la libreria bootstrap

styles.scss

```
// Import all of Bootstrap's CSS
@import "~bootswatch/dist/yeti/variables";
@import "~bootstrap/scss/bootstrap";
@import "~bootswatch/dist/yeti/bootswatch";

```

- Finalmente importamos los estilos de scss

main.js

```
// Import all of Bootstrap's JS
import 'bootstrap'

// Import our custom CSS
import './scss/styles.scss'

```

- Ejecutamos nuestro proyecto para verificar que todo está ok mediante `npm run dev`. Deberíamos ver nuestra aplicación con las clases de bootstrap aplicandose y los estilos de Bootswatch yeti

- Continuamos configurando el archivo vite.config.js para que al generar las los archivos para desplegar en producción (páginas minificadas en la carpeta dist), las urls comiencen con `./` de manera que evitemos problemas al visualizar nuestra web cuando la subamos a un servidor como GitHub Pages. Para ello añadimos el código:

```
base: './'
```

También necesitamos decirle a vite que, cada vez que hagamos un build, se reescriba la carpeta dist. Para ello añadimos la siguiente opción:

```
build: {
    emptyOutDir: true, // Esto vaciará el directorio de salida antes de construir
    ...
}
```

Nuestro archivo vite.config.js quedaría así:

vite.config.js

```
import path from 'path'

export default {
  root: path.resolve(__dirname, 'src'), // Carpeta donde alojamos el archivo main.js
  base: './',
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~bootswatch': path.resolve(__dirname, 'node_modules/bootswatch'),
    }
  },
  build: {
    emptyOutDir: true, // Esto vaciará el directorio de salida antes de construir
    rollupOptions: {
        /*
            Opciones de configuración de Rollup externas, serán mergeadas con la configuracion
            interna de Rollup de Vite.
        */
        input: {
            main: path.resolve(__dirname, 'src/index.html'), // Indicamos las páginas que debe analizar
        },
        output: {
            dir: path.resolve(__dirname, 'dist'), //Donde se va a crear el build de nuestra aplicacion
            format: 'es', //Formato de ES modules
        },
    },
    outDir: path.resolve(__dirname, 'dist'),
    minify: false, //( Si no se quiere minificar el build) https://vitejs.dev/config/#build-minify (aplica solo a los JS no CSS)
},
  server: {
    /*port: 8080,*/
    hot: true
  }
}
```

## **6. Creando versión de distribución**

Vamos a crear la versión de distribución de nuestra app. Esto creará una carpeta dist con todos archivos html y css minificados.

- Para ello, desde la terminal, ejecuta:

  ```
  npm run build
  ```

  Y efectivamente se ha creado una carpeta en la raiz del proyecto con los archivos necesarios. Esta es la carpeta que debemos subir a nuestro servidor de pruebas/producción.

- Prueba a abrir con live server el archivo index.html de la carpeta dist. Debería verse la aplicación funcionando correctamente.

## **7. Instalando ESLint**

- Para utilizar en nuestro proyecto ESLint, en primer lugar instalaremos en VSCode el pluging ESLint de Microsoft.
  ![Eslint plugin](https://carrebola.github.io/vanillaPill/assets/images/eslintplugin-bad9eecf393d7b2c00469bd267fee7f2.png)
- Ahora instalamos Eslint con la configuración standard
  Esto nos instalará ESLint con la configuración Standard. Puedes comprobar que se ha creado un archivo de configuración con nombre `.eslintrc.cjs`
- Finalmente vamos a configurar VSCode para que al grabar (pulsando ctrl + s) ESLint haga su trabajo, reparando, si puede, algunos errores de sintaxis y avisando (con una línea subrayada roja) cuando puede haber un posible error en el código.
- Para ello:

  - Abre la paleta de comandos con `ctrl + shift + P` y escribe `settings json`
  - Selecciona las preferencias de usuario: `Preferences: Open User Settings (JSON)`
  - Asegurate de que tienes las siguiente linea en el archivo json

  ```
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  }
  ```

  Ahora, si abres un archivo y pulsas `ctrl + S` verás como actua ESLint.

## **8. Desplegando la aplicación en un servidor de pruebas (GitHub Pages)**

Vamos a montarnos un sistema para poder hacer despliegue continuo. Así cada vez que actualicemos nuesta app, subiremos los cambios al repositorio y la publicaremos en el servidor de GitHub Pages.

- Creamos un repositorio de git para el proyecto y lo sincronizamos con github (para ello utilizamos las herramientas de vscode)
- Instalamos gh-pages con `npm i gh-pages -D`
- Ahora creamos, en el package.json, el script deploy necesario para poder ejecturar el deploy a gh pages.

El archivo quedaría así:

package.json

```
{
  "name": "trabajos_alumnos",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build --emptyOutDir",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^5.0.0",
    "sass": "^1.58.3",
    "vite": "^4.1.0"
  },
  "dependencies": {
    "@popperjs/core": "^2.11.6",
    "bootstrap": "^5.2.3"
  }
}
```

- Ahora ya podemos ejecutar `npm run build` para contruir nuestra carpeta dist y a continuación `npm run deploy` para que se cree la rama gh-pages y se publique. Pruébalo.
- Finalmente, vamos a comprobar que se ha creado una rama con nombre gh-pages para el despliegue de nuestra app.
  ![rama github pages](https://carrebola.github.io/vanillaPill/assets/images/ramagh-afd762157c05740348c0de2214a9a2df.png)
- Ahora solo falta configurar la rama gh-pages para que sea una página publica y muestre nuestra aplicación desplegada. Para ello entra en `Settings` (menú superior) y `Pages` (menú lateral izquierdo). A continuación selecciona la rama gh-pages y haz click en `save`

![gh](https://carrebola.github.io/vanillaPill/assets/images/ghpublic-c84bc2108fc01c442970ee8f2808841a.png)

En breve aparecerá la url. (Ten paciencia que a veces tarda unos minutos. Ves haciendo F5 hasta que aparezca)

![gh](https://carrebola.github.io/vanillaPill/assets/images/ghpublic2-d23c66b40178fd2189b7622985ac2d65.png)

# **Componentes y vistas**

Tal como hemos visto, una app basada en SPA es una única página html (index.html) con diferentes secciones o divs cuyo contenido irá cambiando dependiendo de la interacción.

A este contenido modular lo vamos a llamar COMPONENTE y va a tener tres partes bien diferenciadas:

- un template donde escribiremos el cógido html que corresponde al componente
- un script donde pondremos la lógica javascript para gestionar el comportamiento del componente.

La estructura básica de un componente o vista debería ser algo así:

componente.js

```
export const componente = {
  template: `Código html del componente`,
  string: ()=>{
    //logica javascript para el componente
  }
}

```

En nuestra aplicación, por el momento, vamos a tener los componentes header, footer y las vistas.

Una vista en realidad es un componente, pero que alberga el contenido de cada una de las páginas de nuestra aplicación.

Partiendo de esta base podemos decir que, por el momento, tenemos:

- Componentes:
  - header.js
  - footer.js
  - editPerfil.js
- Vistas:
  - homeVista.js
  - registroVista.js
  - loginVista.js
  - proyectosVista.js
  - proyectoDetalleVista.js
  - proyectoNuevoVista.js
  - proyectoEditarVista.js
  - adminVista.js

Vamos a comenzar a crear los componentes header y footer con su template correspondiente. Más adelante añadiremos los script.

Pero antes, vamos a crear una nueva rama de desarrollo. Podemos llamarla `vistasHtml` Cuando tengamos todo el trabajo hecho, volcaremos toda la programación de esta rama sobre la rama `main`.

## **Template para header.js**

Para construir los templates y vistas de nuestra spa vamos a usar los prototipos que construimos hace unos días.

Por ejemplo, el código del header del prototipo html `home.html` es el siguiente:

home.html

```
<header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#"
        ><img
          src=".images/logo.svg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />

        Vanilla Games</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">A cerca de</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
          <li class="nav-item">
            <button class="ms-2 btn btn-success">
              Iniciar sesión
              <i class="bi bi-box-arrow-in-right"></i>
            </button>
          </li>
          <li class="nav-item">
            <button class="ms-2 btn btn-outline-light">
              Regístrate
              <i class="bi bi-box-arrow-in-right"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

```

Tomamos el código de dentro del header y lo añadimos al template del componente header.

El resultado sería algo así:

header.js

```

export const header = {
  template: // html
  `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#"
      ><img
        src=".images/logo.svg"
        alt=""
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />

      Vanilla Games</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">A cerca de</a>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
        <li class="nav-item">
          <button class="ms-2 btn btn-success">
            Iniciar sesión
            <i class="bi bi-box-arrow-in-right"></i>
          </button>
        </li>
        <li class="nav-item">
          <button class="ms-2 btn btn-outline-light">
            Regístrate
            <i class="bi bi-box-arrow-in-right"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>

  `
}


```

Si hechas un vistazo a tu aplicación verás que esto va cogiendo forma 😀

## **Template para footer.js**

Vamos a hacer ahora lo mismo. Extraigo html del footer de los prototipos y lo pego en el template de mi componente:

footer.js

```
export const footer = {
  template: // html
  `
<nav class="navbar bg-secondary fixed-bottom small">
  <div class="container">
    <a class="navbar-brand" href="http://www.fpllefia.com">
      <img
        src=".images/logo.svg"
        alt="fpllefia"
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />
      FPLlefià
    </a>
    <span class="navbar-text">@Texto de header</span>
    <a href="#" class="nav-link">Vínculo header</a>
  </div>
</nav>
  `
}

```

## **Template para vista homeVista.js**

Vamos a hacer lo mismo para vista homeVista.js

homeVista.js

```
export default {
  template: // html
  `
<div class="container">
  <h1 class="mt-5 text-center fw-bold" style="font-size: 100px">
    Vanilla Games
  </h1>
  <div class="m-5 mx-auto" style="max-width: 400px">
    <img src=".images/logo.svg" alt="fpllefia" class="img-fluid" />
  </div>
</div>
  `
}

```

De momento bastante bien, pero hay un par de cosillas que tenemos que retocar.

1. Debemos modificar nuestro index.html para añadir los estilos del `<body></body>` de los prototipos.
2. Debemos modificar los las url de las imagenes para que se muestren correctamente.

## **Actualizando index.html**

Vamos con el index.html

index.html

```
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vanilla Games</title>
</head>
<body class="pt-5" style="overflow-x: hidden; padding-bottom: 100px">
  <header></header>
  <main></main>
  <footer></footer>
  <script type="module" src="/main.js"></script>
</body>
</html>

```

## **Modificando imágenes e iconos**

### **Para las imágenes**

Para el tema de las imágenes necesitamos, lógicamente, tener nuestras imagenes en el proyecto.

Para ello vamos a crear las carpetas necesarias dentro de src: `src/assets/images` y arrastramos dentro todas las imágenes que tenemos en nuestros prototipos.

Lo siguiente es indicar a vite donde van a estar todas los archivos publicos (la carpeta public). Esto lo haremos añadiendo la siguienete línea a la configuración de vite:

vite.config.js

```

  ...

  publicDir: 'assets',
  server: {
    /* port: 8080, */ // Podemos definir el puerto de salida
    hot: true
  }
```

Ahora vamos a modificar las urls de los templates. Donde antes teníamos `src=".images/logo.png"` ahora debemos poner: `src="images/logo.svg"`

Fíjate que

Fíjate que para vite, cuando una ruta comienza por `/` significa que comienza por la carpeta raiz definida en vite.config.js, que en nuestro caso es `src`

Modificamos todas las de las imagenes de header.js, footer.js y homeVista.js y... ¡¡¡lo tenemos!!!

![homeVista](https://carrebola.github.io/vanillaPill/assets/images/homeVista-26d5e3faf07bed8e29f5d330d4bd48e8.png)

### **Para los iconos**

Primero necesitamos instalar la libreria de `bootstrap-icons`

```
npm i bootstrap-icons
```

A continuación debemos importar los iconos en nuestro archivo `styles.scss`. Para ello añade el siguiente código:

styles.scss

```
$bootstrap-icons-font-dir: "../node_modules/bootstrap-icons/font/fonts";
@import "bootstrap-icons/font/bootstrap-icons";
```

## **Programando la lógica de los componentes y vistas (script)**

Ahora ya tenemos las vistas con su código html básico en el `template`.

Pero recuerda que en los prototipos hemos implementamos algo de javascript para gestionar las validaciones utilizando bootstrap.js. Por lo tanto, necesitamos añadir ese código a cada una de las vistas.

Lo haremos en la propiedad string de nuestro componente.

Vemos un ejemplo con la vista `registro.js`

### **Lógica para `registro.js`**

Añadimos el método script() y dentro copiamos el código javascript que hemos programado en el prototipo:

```
export default {
  template: // html
  `
  ...
  `,
  script: () => {
    console.log('vista registro cargada')
    // Validación bootstrap

    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formRegistro')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
      // Detenemos el evento enviar (submit)
        event.preventDefault()
        event.stopPropagation()
    // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        // Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add('was-validated')
      }
    })
  }
}
```

Ahora solo nos falta ejecutar el script justo después de haber inyectado el componente en nuestra app.

Por lo tanto, necesitamos modificar el `main.js`

main.js

```
import { header } from './componentes/header'
import { footer } from './componentes/footer'

import './scss/styles.scss'

// Importamos la vista por defecto (que será home)
async function cargarVista () {
  const componente = await import('./vistas/registroVista')
  const vista = componente.default
  // Inyectamos la vista home
  document.querySelector('main').innerHTML = vista.template
  // Ejecutamos la lógica de la vista
  vista.script()
}
cargarVista()

// Inyectamos el componente header
document.querySelector('header').innerHTML = header.template

// Inyectamos el componente footer
document.querySelector('footer').innerHTML = footer.template

```

## **Volcando el trabajo en la rama principal. Primer PullRequest**

Llegados a este punto ¡ya hemos dado un buen empujón a nuestro proyecto!

Una vez hemos revisado que todo funciona correctamente, es hora de volcar todo el trabajo dedicado a la creación de las vistas en la rama principal `main`.

Para ello haremos un pullRequest desde la rama `vistasHtml`a la rama `main`.

Nos vamos a la página web de GitHub y abrimos nuestro repositorio. Alli veremos las ramas y commits realizados.

Desde la misma página de Github, podemos hacer click sobre el item del menú superior `PullRequest`y luego `Nuevo PullRequest`

Ahora debes indicar la rama destino (que será `main`) y la rama original (que será `vistasHtml`)

![Pull request](https://carrebola.github.io/vanillaPill/assets/images/pullrequest-e21e1ed3d59f66a0c26e007b121898fb.png)

Luego creamos el pullRequest añadiendo un mensaje informativo de qué hemos añadido a la rama principal

![Merge request](https://carrebola.github.io/vanillaPill/assets/images/pullrequest2-d75a1e11e061ad985c038d98b1a6e0e2.png)

Solo nos falta hacer el `merge pullRequest` y confirmarlo. Una vez hecho esto, si vuelves a revisar la rama `main`, verás que se han incorporado todos los cambios.

## **Visualizando repositorio con 'Git Graph'**

Para acabar, vamos a utilizar una extensión de VSCode que nos permite visualizar la evolución de nuestro repositorio de forma gráfica. Una vez instalada puedes mostrar toda la info de forma gráfica haciendo click en el item de la barra inferior de VSCode con nombre Git Graph:

![Ramas Github](https://carrebola.github.io/vanillaPill/assets/images/gitgraph-9ba5632eb33de4eed6e3bd8e00dcb352.png)

# **Componente enrutador.js**

Por el momento tenemos los componentes header.js y footer.js cargados sobre sus etiquetas respectivas.

Por otro lado tenemos una serie de vistas que inyectamos en la etiqueta `<main></main>`.

Vamos a programar la lógica necesaria para que podamos cargar las vistas desde nuestro navegador, como si de páginas html independientes se tratase.

Para ello programaremos un componente que llamaremos `enrutador.js`

## **Cómo funciona nuestro enrutador**

En realidad, la función de este componente es inyectar el template de las las vistas en la etiqueta main y cargar sus scripts. Así que la primera pregunta que debemos hacernos es: ¿Cuando debe hacerlo?

Se me ocurren tres posibles casos:

1. Cuando alguien escribe la ruta en el navegador
2. Cuando alguien navega por el historial (adelante o atrás)
3. Cuando alguien hace click sobre un enlace.

Así que de momento vamos a necesitar una función (más bien un método) que escuche estos eventos. Lo llamaremos: observadorRutas()

Por otro lado, necesitamos un método que se encargue de inyectar el template de las las vistas en la etiqueta main y cargar sus scripts. A esta función la vamos a llamar: router()

Y finalmente, necesitamos un objeto donde poner el nombre de todas las posibles vistas. Para ello crearemos una propiedad que, sorpresa, llamaremos: _rutas_

## **Componente enrutador.js**

Antes de comenzar trabajar, vamos a crear una nueva rama a partir de la rama `main`. Llamémosla `Enrutador` (Que original... 😒)

Ahora sí. Creamos el archivo `enrutador.js` dentro de la carpeta `componentes` y programamos la estructura básica a partir de las premisas explicadas. Quedaría algo así:

enrutador.js

```

export const enrutador = {
  rutas: {},
  router: () => {},
  observadorRutas: () => {}
}


```

Ahora vamos a actualizar el objeto rutas con las vistas importadas.

enrutador.js

```
export const enrutador = {
  rutas: {
    home: import('../vistas/homeVista.js'),
    // Usuarios
    admin: import('../vistas/adminVista.js'),
    registro: import('../vistas/registroVista.js'),
    login: import('../vistas/loginVista.js'),
    // Proyectos
    proyectos: import('../vistas/proyectosVista.js'),
    proyectoNuevo: import('../vistas/proyectoNuevoVista.js'),
    proyectoEditar: import('../vistas/proyectoEditarVista.js'),
    proyectoDetalle: import('../vistas/proyectoDetalleVista.js'),
    404: import('../vistas/404.js')
  },
  router: () => {},
  observadorRutas: () => {}
}

```

### **Método observadorRutas()**

Nuestro sistema de navegación se basará en modificar la url utilizando el símbolo #. Así, cuando queramos navegar a la vista proyectos utilizaremos la url `www.miproyecto/#/proyectos`. En realidad no cargaremos nuevas páginas, sino que actualizaremos el contenido de la etiqueta `<main>`.

Nuestro sistema de navegación se basará en la siguiente metodología:

1. Lanzaremos el método observadorRutas()en el archivo `main.js` para que se ejecute nada más cargar la app y comience escuchar los posibles eventos en el navegador.:
2. Para detectar si alguien ha hecho clic en un enlace , detectaremos el evento click en el cuerpo del documento (en el `<body>`) usando

```
// Capturamos los eventos click sobre el body
document.body.addEventListener('click', (event)=>{...})
```

3. Obtendremos el elemento sobre el que se ha hecho click y comprobaremos que se trata de un elemento con la clase 'router-link'

```
document.body.addEventListener('click', event => {
  // Evitamos que se cargue la página
  const link = event.target
  if (link.classList.contains('router-link')) {
    console.log('router-link')
    event.preventDefault()
    ...
```

4. Extraeremos el contenido del atributo href (el cual contendrá el nombre de la vista a cargar)

```
// Leemos el contenido del href
const href = link.getAttribute('href')
```

5. Y actualizaremos la barra de navegación del navegador incluyendo la url en el historial de navegación

```
// Actualizamos url del navegador
window.history.pushState({ path: href }, '', href)
```

6. Por otro lado vamos a escuchar el evento _cambio en la barra de navegación_ `popstate`. Cuando detectemos un cambio llamaremos al método router() para actualizar la vista:

```
// Capturamos eventos pushState (cambios en la url del navegador)
window.addEventListener('popstate', (e) => {
  // Llamamos a router para que cargue la vista
  enrutador.router()
})
```

El método observadorRutas() quedaría así:

enrutador.js

```
observadorRutas: () => {
    document.body.addEventListener('click', event => {
      // Evitamos que se cargue la página
      const link = event.target
      if (link.classList.contains('router-link')) {
        console.log('router-link')
        event.preventDefault()
        // Obtenemos la ruta del enlace sin el .html
        const href = link.getAttribute('href')
        // Añadimos la nueva ruta al historial

        // (El método pushState() permite agregar un nuevo estado a la pila del historial del navegador. Esto significa que una nueva entrada de historial se agrega a la pila y la URL del navegador se actualiza sin recargar la página.)
        window.history.pushState({ path: href }, '', href)
        // y ejecutamos el router de nuevo para que detecte los cambios con el evento popstate
        enrutador.router()
      }
    })

    // Detectamos cuando alguien navega por el historial con los botones avanzar y retroceder del navegador.
    window.addEventListener('popstate', (e) => {
      console.log('evento popstate - Te estás moviendo por el historial')
      enrutador.router()
    })
  }

```

### **Método router()**

Ahora vamos a crear el método `router()`. Este será el que cargue las vistas en la app.

Esta función se dispara cada vez que se produce un cambio en la url del navegador. Dentro del método router() se obtiene el hash de la ruta modificada mediante `window.location.hash`. Después, se utiliza este hash resultante para obtener la vista correspondiente del objeto rutas.

Con esta lógica podemos detectar:

- cuando se navega por el historial o
- cuando se introduce directamente una url en la barra de navegación para poder cargar la vista correspondiente

```
    // Capturamos el hash # que ha cambiado en la url
    const pathCompleto = window.location.hash
    // Separamos la ruta del posible parametro que reciba
    const path = pathCompleto.split('/')[1]
    const parametro = pathCompleto.split('/')[2]
```

Si la vista no existe cargaremos la vista `404.js` para indicar que la página no existe.

Si la vista existe, se obtiene el objeto de la vista mediante la propiedad default de la promesa.

```
    const componenteVista = await enrutador.rutas[path]
```

Luego, se inyecta la vista en el elemento main del documento HTML utilizando la propiedad innerHTML de document.querySelector('main'). Por último, se ejecuta el script de la vista si lo hay.

Así quedaría el método router:

router

```
// Método que obtiene la ruta del navegador
  router: async () => {
    // Capturamos el hash # que ha cambiado en la url
    const pathCompleto = window.location.hash
    // Separamos la ruta del posible parametro que reciba
    const path = pathCompleto.split('/')[1]
    const parametro = pathCompleto.split('/')[2]

    // capturamos el componente con ese nombre de la vista
    // (Usamos las sintaxix objeto[propiedad]) porque el nombre de la propiedad lo tenemos en una variable.)
    const componenteVista = await enrutador.rutas[path]
    // Si existe la vista la podremos cargar
    if (componenteVista) {
      // Obtenemos el objeto del componente (que fué exportado como default)
      const vista = await componenteVista.default
      // inyectamos vista y ejecutamos su script
      document.querySelector('main').innerHTML = vista.template
      // A los script les pasamos el parametro que hemos extraido de la ruta. Así podemos pasar, por ejemplo, el id de un proyecto
      vista.script(parametro)
    }else{
      // Si la vista no existe cargamos la página de error
      window.location = '#/404'
    }
  },
```

El código completo de nuestro objeto enrutador.js quedaría así:

enrutador.js

```

export const enrutador = {

  // Objeto (diccionario) con todas las rutas y su vista asociada
  rutas: {
    home: import('../vistas/homeVista.js'),
    // Usuarios
    admin: import('../vistas/adminVista.js'),
    registro: import('../vistas/registroVista.js'),
    login: import('../vistas/loginVista.js'),
    // Proyectos
    proyectos: import('../vistas/proyectosVista.js'),
    proyectoNuevo: import('../vistas/proyectoNuevoVista.js'),
    proyectoEditar: import('../vistas/proyectoEditarVista.js'),
    proyectoDetalle: import('../vistas/proyectoDetalleVista.js'),
    404: import('../vistas/404.js')
  },

  // Método que obtiene la ruta del navegador
  router: async () => {
    // Capturamos el hash # que ha cambiado en la url
    const pathCompleto = window.location.hash
    // Separamos la ruta del posible parametro que reciba
    const path = pathCompleto.split('/')[1]
    const parametro = pathCompleto.split('/')[2]

    // capturamos el componente con ese nombre de la vista
    // (Usamos las sintaxix objeto[propiedad]) porque el nombre de la propiedad lo tenemos en una variable.)
    const componenteVista = await enrutador.rutas[path]
    // Si existe la vista la podremos cargar
    if (componenteVista) {
      // try {
      // Obtenemos el objeto del componente (que fué exportado como default)
      const vista = await componenteVista.default
      // inyectamos vista y ejecutamos su script
      document.querySelector('main').innerHTML = vista.template
      // A los script les pasamos el parametro que hemos extraido de la ruta. Así podemos pasar, por ejemplo, el id de un proyecto
      vista.script(parametro)
    } else {
      window.location = '#/404'
    }
  },

  // Capturamos los eventos
  observadorRutas: () => {
    document.body.addEventListener('click', event => {
      // Evitamos que se cargue la página
      const link = event.target
      if (link.classList.contains('router-link')) {
        console.log('router-link')
        event.preventDefault()
        // Obtenemos la ruta del enlace sin el .html
        const href = link.getAttribute('href')
        // Añadimos la nueva ruta al historial

        // (El método pushState() permite agregar un nuevo estado a la pila del historial del navegador. Esto significa que una nueva entrada de historial se agrega a la pila y la URL del navegador se actualiza sin recargar la página.)
        window.history.pushState({ path: href }, '', href)
        // y ejecutamos el router de nuevo para que detecte los cambios con el evento popstate
        enrutador.router()
      }
    })

    // Detectamos cuando alguien navega por el historial con los botones avanzar y retroceder del navegador.
    window.addEventListener('popstate', (e) => {
      console.log('evento popstate - Te estás moviendo por el historial')
      enrutador.router()
    })
  }
}

```

Ahora solo faltaría añadir a la página principal `main.js` una llamada al método observadorRutas() de nuestro objeto para que escuche los posibles eventos.

Tambien vamos a eliminar la inyección manual que hacíamos sobre la etiqueta main para usar `windows.location = '#/home'` y asociar así la vista home a la raiz de la app.

main.js

```
// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Importamos componentes header y footer
import { header } from './componentes/header'
import { footer } from './componentes/footer'

// Importamos la Función para detectar eventos al cargar las vistas
import { enrutador } from './componentes/enrutador'

document.querySelector('#header').innerHTML = header.template
header.script()
document.querySelector('#footer').innerHTML = footer.template

enrutador.observadorRutas()
// Cargamos la página home
window.location = '#/home'
```

Si modificamos la barra de navegación de nuestra aplicación escribiendo, por ejemplo `http://localhost:5173/#/registro` veremos como se actualiza la vista.

También podemos hacer clic sobre la flecha atras de la barra de navegación. Podremos comprobar que volvemos a la vista #/home.

Finalmente, para verificar que los enlaces funcionan vamos a modificar el atributo `href` de los enlaces del componente header y a vamos a añadirles la clase 'router-link' para ver si la navegación funciona correctamente.

enlace botón home

```
<a class="navbar-brand" href="#/home"
  ><img
    src="images/logo.svg"
    alt=""
    width="30"
    height="24"
    class="d-inline-block align-text-top router-link"
  />
  Vanilla Games</a
>
```

menu

```
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link active router-link" aria-current="page" href="#/home">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link router-link" aria-current="page" href="#">TOP5 Proyectos</a>
    </li>
    <li class="nav-item">
      <a class="nav-link router-link" aria-current="page" href="#">A cerca de</a>
    </li>
  </ul>
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="ms-2 btn btn-success router-link" href="#/login">
        Iniciar sesión
        <i class="bi bi-box-arrow-in-right"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="ms-2 btn btn-outline-light router-link" href="#/registro">
        Regístrate
        <i class="bi bi-box-arrow-in-right"></i>
      </a>
    </li>
  </ul>
```

# **Subcomponentes de header (Menús y editar perfil)**

## **Versión 2.0 de header**

Para mejorar nuestro header vamos a dividir el componente header.js en tres componentes, el componente padre: header.js que contendrá el html que no cambia nunca, y tres subcomponentes más: menuSuperior.js, menuEspecifico y menuUsuario.js que inyectaremos dentro del componente padre header.

Estos componentes contendrán el código correspondiente a los menús, que será diferente, dependiendo del rol del usuario que esté logueado.

También vamos a añadir la lógica necesaria para detectar si hay una sesión abierta (almacenada en el localStorage) y capturar los datos del usuario (su perfil). Dependiendo del rol del usuario, cargaremos el menú correspondiente.

Pero antes de ponernos con los menús vamos a crear el código necesario para trabajar con el localStorage.

## **Local Storage**

El localStorage es una herramienta útil para almacenar pequeñas cantidades de datos en el navegador del usuario para su posterior recuperación.

Nosotros lo usaremos para gestionar la información 'no crítica' que se muestra en el navegador, como por ejemplo, las opciones de los menús (aunque estas no funcionarán si la sesión no está abierta en el lado del servidor) o el nombre del usuario.

La información que vamos a almacenar podría estar contenida en un objeto (json) com el siguiente:

```
usuario = {
  email: 'gatopaco@email.com',
  rol: 'alumno'
}
```

Para guardar esta información en el localstorage necesitamos que este objeto sea una cadena de texto. Para convertilo podemos usar:

```
// Convertir el objeto a una cadena JSON
var usuarioJSON = JSON.stringify(usuario);
```

Y una vez convertido lo guardamos en localStorage

```
// Guardar en localStorage
localStorage.setItem('usuarioVanilla', usuarioJSON);
```

En el caso de querer recuperar la información del localstorage tenemos el método `getItem()`. Para ello debemos hacer el proceso inverso, primero recuperar y luego convertir a objeto.

```
// Leer en localStorage
const usuarioJSON = localStorage.getItem('usuarioVanilla');

// Convertir a objeto
const usuario = JSON.parse(usuarioJSON);
```

Una buena idea puede ser crear un objeto que llamaremos `ls` (ls de localstorage) con un par de métodos para gestionar la lectura y escritura del usuario. Lo guardaremos como un archivo de funciones y así podremos usarlo desde cualquier lugar de la aplicación.

Vamos a crear nuestro archivo de funciones en la carpeta componentes y le añadimos el siguiente código:

funciones.js

```
// Gestión del localstorage
export const ls = {
  // Captuar datos de localStorage
  getUsuario: () => {
    // Leer en localStorage
    const usuarioJSON = localStorage.getItem('usuarioVanilla')
    // Convertir a objeto
    const usuario = JSON.parse(usuarioJSON)
    // Devolvemos objeto
    return usuario
  },
  setUsuario: (usuario) => {
    // Convertir el objeto a una cadena JSON
    const usuarioJSON = JSON.stringify(usuario)
    // Guardar en localStorage
    localStorage.setItem('usuarioVanilla', usuarioJSON)
  }
}
```

Y esta sería una versión mejorada para gestionar errores en caso de que no haya una sesión abierta, es decir, que no haya ningún dato en el localstorage.

funciones.js

```
// Gestión del localstorage
export const ls = {
  // Captuar datos de localStorage
  getUsuario: () => {
    // Definimos usuario anónimo por si no hay datos en localstorage
    let usuario = {
      email: 'anónimo',
      rol: 'no logueado',
      avatar: ''
    }
    // Capturamos datos de localstorage
    const usuarioJSON = localStorage.getItem('usuarioVanilla')
    // Si hay un usuario logueado actualizamos usuario, sino devolvemos usuario anónimo
    if (usuarioJSON) {
      // Parseamos datos de localstorage
      usuario = JSON.parse(usuarioJSON)
    }
    return usuario
  },
  setUsuario: (usuario) => {
    // Convertir el objeto a una cadena JSON
    const usuarioJSON = JSON.stringify(usuario)
    // Guardar en localStorage
    localStorage.setItem('usuarioVanilla', usuarioJSON)
  }
}

```

Para probarlo abrimos el componente `header.js`. En la parte superior importamos nuestra función y creamos el método script():

header.js

```
// importamos la función ls del archivo funciones
import { ls } from '../componentes/funciones'

export const header = {
  template: // html
  `...
  `,
  script: ()=>{
    console.log('Header cargado')
  }

```

Y dentro del método script() probamos a escribir y leer del localStorage:

header.js

```
  script: () => {
    console.log('Header cargado')
    // Simulamos el inicio de sesión de un usuario
    const usuario = {
      email: 'manolito@email.com',
      rol: 'alumno'
    }
    ls.setUsuario(usuario)
    console.log('usuario guardado')

    // Leemos el usuario del localstorage
    const usuarioLogueado = ls.getUsuario()
    console.log('usuario del localstorage: ', usuarioLogueado)
  }
```

Ahora solo falta que, cuando inyectamos el componente `header.js` llamemos a su método script()

main.js

```
...
// Inyectamos el componente header
document.querySelector('header').innerHTML = header.template
header.script()
...
```

Si todo ha ido bien podrás ver el resultado en la consola del inspector. Pero también podemos ver el contenido del localstorage desde `Application/LocalStorage` de nuestro inspector de código:

![localstorage](https://carrebola.github.io/vanillaPill/assets/images/ls-9d0a06158b68decf55311cca349ab4c7.png)

## **Componentes para menús. Actualizando el header**

Cuando creamos el template del `header.js` pusimos el código html de la etiqueta `<header></header>` que habíamos programado en el prototipo `home.js`. Pero si te fijas, el header de otras páginas, por ejemplo de `proyectos.js`, es diferente en tanto a que incluye dos nuevos menús. Eso es porque se supone que para acceder a esta página el usuario ya había iniciado sesión y tenía un rol especifico ('programador' o 'admin') que le habilita dichos menús.

Así que lo primero que vamos a hacer es desmontar nuestro _template_ del componente `header.js` en pedazos, de manera que tendremos, por un lado, el código común para todos los usuarios y, por otro lado, un par de divs donde inyectaremos los menús dependiendo del rol del usuario logueado.

Componente header.js actual

```
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#/home"
      ><img
        src="images/logo.svg"
        alt=""
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />
      Vanilla Games</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <!-- Menu común para todos los usuarios -->
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">TOP5 Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">A cerca de</a>
        </li>
      </ul>

      <!-- Aquí va el Menu rol -->
      <div id="menuRol"></div>

      <!-- Aquí va el Menu usuario -->
      <div id="menuUsuario"></div>

    </div>
  </div>
</nav>
```

Ahora toca definir qué ménus (y qué items) van a incluir cada menú. en función del rol del usuario logueado. Para ello debemos recuperar el diagrama de casos de uso para la versión 1:

![diagrama casos de uso](https://carrebola.github.io/vanillaPill/assets/images/diagramaCasosUso_1-3fc60e64208490df3bd2eb0f595cedbc.png)

Según nuestro diagrama, tenemos que los menús que debemos definir serían algo así:

Menú común (para todos los usuarios):

- home
- TOP 5 Proyectos (Esta vista aún no la hemos creado)
- A cerca de (Esta vista aún no la hemos creado)

Menús rol y usuario en función del rol

- Rol: anónimo (no registrado o logueado )
  - menú rol:
    - Registro
    - Iniciar sesión
  - menú usuario: No se muestra
- Rol: registrado
  - menú rol:
    - Proyectos
  - menú usuario:
    - Avatar: muestra la imagen del usuario logueado
    - Email: muestra el email del usuario logueado
    - Rol: Muestra el rol del usuario logueado
    - Perfil: Muestra datos del perfil con opción de editar
    - Cerrar sesión
- Rol: desarrollador
  - menú rol:
    - Proyectos
  - menú usuario:
    - Avatar: muestra la imagen del usuario logueado
    - Email: muestra el email del usuario logueado
    - Rol: Muestra el rol del usuario logueado
    - Perfil: Muestra datos del perfil con opción de editar
    - Cerrar sesión
- Rol: admin
  - menú rol:
    - Proyectos
    - PANEL ADMIN
  - menú usuario:
    - Avatar: muestra la imagen del usuario logueado
    - Email: muestra el email del usuario logueado
    - Rol: Muestra el rol del usuario logueado
    - Perfil: Muestra datos del perfil con opción de editar
    - Cerrar sesión

Para construir el código de cada menú usaremos un objeto para el menú rol y un objeto para el menú usuario. Estos objetos tendrán tantas propiedades como roles tengamos.

Vamos a ello. Creamos el archivo `menus.js` dentro de la carpeta `componentes` con los dos menús y como propiedad los roles correspondientes, y los exportamos:

menus.js

```
const menuRol = {
  templateAnonimo: // html
  ``,
  templateRegistrado: // html
  ``,
  templateDesarrollador: // html
  ``,
  templateAdmin: // html
  ``
}

const menuUsuario = {
  templateRegistrado: // html
  ``,
  templateDesarrollador: // html
  ``,
  templateAdmin: // html
  ``
}

export { menuRol, menuUsuario }
```

Ahora vamos a contruir el html para cada menú.  
Nota

Fíjate que muchos son prácticamente idénticos, aunque, para las versiones posteriores de la app, seguramente estas opciones se verán modificadas e irán ampliándose.

El primer menú que vamos a crear es el que corresponde a un usuario anónimo. Sería algo así:

menus.js

```
const menuRol = {
  templateAnonimo: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="ms-2 btn btn-success router-link" href="#/login" >
        Iniciar sesión
        <i class="bi bi-box-arrow-in-right"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="ms-2 btn btn-outline-light router-link" href="#/registro">
        Regístrate
        <i class="bi bi-box-arrow-in-right"></i>
      </a>
    </li>
  </ul>
  `,
  templateRegistrado: // html
  ``,
  templateDesarrollador: // html
  ``,
  templateAdmin: // html
  ``
}

const menuUsuario = {
  templateRegistrado: // html
  ``,
  templateDesarrollador: // html
  ``,
  templateAdmin: // html
  ``
}

export { menuRol, menuUsuario }
```

Para los menús correspondientes al usuario registrado debemos tener en cuenta que vamos a necesitar la información del usuario logueado: La podemos sacar del localstorage usando nuestro componente `ls.js`.

Nuestro archivo quedaría así:

menus.js

```

import { ls } from './funciones'

const menuRol = {
  templateAnonimo: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="ms-2 btn btn-success router-link" href="#/login" >
        Iniciar sesión
        <i class="bi bi-box-arrow-in-right"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="ms-2 btn btn-outline-light router-link" href="#/registro">
        Regístrate
        <i class="bi bi-box-arrow-in-right"></i>
      </a>
    </li>
  </ul>
  `,
  templateRegistrado: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link active router-link" aria-current="page" href="#/proyectos">PROYECTOS</a>
    </li>

  </ul>
  `,
  templateDesarrollador: // html
  ``,
  templateAdmin: // html
  ``
}

const menuUsuario = {
  templateRegistrado: // html
  `
  <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="images/avatar.svg" alt="" width="25" />
      </a>
      <ul class="dropdown-menu me-0" style="left: -100px; width: 100px">
        <li class="text-light text-end p-2 small">
          ${ls.getUsuario().email}
        </li>
        <li class="text-light text-end pe-2 small fst-italic">
          ${ls.getUsuario().rol}
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Mi perfil</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
      </ul>
    </li>
  </ul>
  `,
  templateDesarrollador: // html
  ``,
  templateAdmin: // html
  ``
}

export { menuRol, menuUsuario }
```

De momento ya tenemos los menús para dos roles. Vamos a programar la lógica para que dependiendo del rol, se cargue uno u otro menú.

Esto lo haremos desde el componente `header.js`. La manera más visual es, seguramente, utilizando una estructura switch/case.

header.js

```
// ...
 script: () => {
    console.log('Header cargado')

    const rolUsuario = ls.getUsuario().rol

    switch (rolUsuario) {
      case 'registrado':
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateRegistrado
        // menú usuario
        document.querySelector('#menuUsuario').innerHTML = menuUsuario.templateRegistrado
        break
      case 'desarrollador':
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateDesarrollador
        // menú usuario
        document.querySelector('#menuUsuario').innerHTML = menuUsuario.templateDesarrollador
        break
      case 'admin':
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateAdmin
        // menú usuario
        document.querySelector('#menuUsuario').innerHTML = menuUsuario.templateAdmin
        break
      default : // Para usuarios anónimos
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateAnonimo
        // menú usuario: No tiene
        break
    }
  }
}
```

Fíjate que estamos utilizando los objetos menuRol y menuUsuario para los menús que hemos definido en el archivo `menus.js`, y `ls.j`s para leer los datos del usuario loguedado, así que no nos olvidemos de importar nuestras librerias al inicio de nuestro componente:

header.js

```
// importamos la función ls del archivo funciones
import { ls } from '../componentes/funciones'
import { menuRol, menuUsuario } from './menus'

// ...
```

Si todo esto es correcto, como no tenemos ningún usuario en el localstorage con rol 'registrado', debería mostrarse el menú de un usuario anónimo. Es decir, las opciones de registro y login.

#### **Simulando el inicio de sesión**

Para simular que hay una sesión abierta vamos a inscribir en el localstorage a la señora chafardera@gmail.com que tiene el rol de registrada. Podemeos hacerlo con esta linea al principio de nuestro script:

```
// Simulamos el inicio de sesión de un usuario
ls.setUsuario({ email: 'chafardera@gmial.com', rol: 'registrado' })
```

Si miramos nuestra aplicacion ahora, deberían aparecer los menús rol (con la opcion PROYECTOS) y usuario, y dentro del menú usuario, deberíamos tener el nombre del usuario, rol y opciones de editar perfil y cerrar sesión.

![menus](https://carrebola.github.io/vanillaPill/assets/images/menus-f6d71eb4676cc6cf187beef085f487cd.png)

## **Editar perfil en ventana modal**

Y para acabar con esta actualización del header, vamos a incluir la ventana modal que nos permitirá editar los datos del perfil.

Creamos el componente `editarPerfil.js` en la carpeta de `componentes` y le añadimos el html correspondiente a la propiedad _template_, que podemos obtener de nuestro prototipo `editarPerfil.html`. (Fíjate que hemos modificado su _id_)

editarPerfil.js

```
export const editarPerfil = {
  template: // html
  `
  <!-- Ventana modaledición perfil -->
  <div
    class="modal fade"
    id="modalEditarPerfil"
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
                    id="imagen"
                    type="url"
                    class="form-control"
                    value="http://imagenavatar.png"
                  />
                  <div class="invalid-feedback">La url no es correcta</div>
                </div>

                <div class="">
                  <!-- Nombre -->
                  <label for="nombre" class="form-label">Nombre:</label>
                  <input required id="nombre" type="text" class="form-control" />
                  <div class="invalid-feedback">El nombre es requerido</div>
                  <!-- Apellidos -->
                  <label for="apellidos" class="form-label">Apellidos:</label>
                  <input id="apellidos" type="text" class="form-control" />

                  <!-- Email -->
                  <label for="email" class="form-label">Email:</label>
                  <input required id="email" type="email" class="form-control" />
                  <div class="invalid-feedback">El formato no es correcto</div>

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
                    La contraseña debe ser de 6 caracteres como mínimo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button type="button" class="btn btn-primary">Guardar cambios</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  `,
  script: () => {
    console.log('script de modal editar perfil cargado')
  }
}

```

Ahora nos vamos a `header.js` e inyectamos nuestro componente `editarPerfil.js` en un div. (Recuerda que antes debes importar el componente editarPerfil.js)

header.js

```
import { ls } from '../componentes/funciones'
import { menuRol, menuUsuario } from './menus'
import { editarPerfil } from './editarPerfil'

export const header = {
  template: // html
  `
  ...

  <div id="modal">
    <!-- Aquí inyectamos el componente editarPerfil -->
  </div>

  `,
  script: () => {
    console.log('Header cargado')
    document.querySelector('#modal').innerHTML = editarPerfil.template
    ...
  }
}
```

Ahora solo nos falta el botón para abrir el modal: Copiamos las propiedades del botón del prototipo y se las ponemos al item 'Editar Perfil' de nuestros menús: (No olvides modificar el valor del atributo data-bs-target con el nombre del id de nuestra ventana modal)

menus.js

```
    <li>
      <a
        class="dropdown-item"
        href="#"
        data-bs-toggle="modal"
        data-bs-target="#modalEditarPerfil"
        >
        Mi perfil
      </a>
    </li>

```

# **Gestión de sesiones (login y logout)**

Ahora ya tenemos nuestra app funcionando visualmente. El enrutador se encarga de mostrar las vistas como si de páginas independientes se tratase.

Vamos a darle otra vuelta de tuerca a las vistas aportándole funcionalidades extras.

Por el momento no vamos a conectarnos con el backend, sino que nos valdremos de datos simulados que cargaremos en un archivo a partir de datos en formato json (objetos en javascript) que simularán las consultas a nuestra base de datos.

## **Datos para simular el acceso a la base de datos**

¿Qué tal si comenzamos con un objeto que contenga los datos de diferentes usuarios registrados? Para concretar el nombre de las propiedades deberíamos basarnos en el diagrama de clases que hemos creado cuando llevabamos el traje de backend.

Digamos que, tras consultar con nuestro 'yo-programador' encargado del backend, hemos decidido que puede ser algo así:

```
perfiles = [
{
id: 1
created_at:
user_id:
nombre:
apellidos:
avatar:
estado:
rol:
email:
contraseña:
}
]
```

Con un poquito de inteligencia artificial, tenemos un array de datos inventados que podemos guardar en un archivo js.

Crea una carpeta `bd`en la raiz y crea dentro el archivo `datosPrueba.js` con el siguiente código:

```
_export_ _const_ perfiles = [
{
id: 1,
created_at: '2023-08-28',
user_id: '8e9b7c4f-10de-4a10-a36e-87f49657d1c1',
nombre: 'Paco',
apellidos: 'Martínez Soria',
avatar: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/28/16460502314689.jpg',
estado: 'Activo',
rol: 'registrado',
email: 'paco@example.com',
contraseña: '123456'
},
{
id: 2,
created_at: '2023-08-29',
user_id: '36f66b5e-aa59-4f96-b6a8-3c890d6a452c',
nombre: 'Carmen',
apellidos: 'Maura',
avatar: 'https://s.libertaddigital.com/2020/09/15/1920/1080/fit/carmen-maura-roman.jpg',
estado: 'Inactivo',
rol: 'desarrollador',
email: 'carmen@example.com',
contraseña: '123456'
},
{
id: 3,
created_at: '2023-08-30',
user_id: 'a3df05b0-91e7-4f68-a067-841fcf5de9f0',
nombre: 'Antonio',
apellidos: 'Resines',
avatar: 'https://estaticos-cdn.elperiodico.com/clip/056573ce-f784-49d0-9746-0e154380598b_alta-libre-aspect-ratio_default_0.jpg',
estado: 'Activo',
rol: 'desarrollador',
email: 'antonio@example.com',
contraseña: '123456'
},
{
id: 4,
created_at: '2023-08-31',
user_id: 'd67e3b1c-875f-437f-bd2a-9ff50b72083d',
nombre: 'Maribel',
apellidos: 'Verdú',
avatar: 'https://es.web.img3.acsta.net/pictures/23/06/13/09/44/5805084.jpg',
estado: 'Inactivo',
rol: 'desarrollador',
email: 'maribel@example.com',
contraseña: '123456'
},
{
id: 5,
created_at: '2023-09-01',
user_id: '2419d5e3-46a6-45d6-98a2-b02c8ac5d3fe',
nombre: 'Javier',
apellidos: 'Bardem',
avatar: '',
estado: 'Activo',
rol: 'admin',
email: 'javier@example.com',
contraseña: '123456'
}
]
```

## **Implementando el Login a través de localstorage**

Comencemos por la vista login.

Vamos a crear la lógica para que cuando un usuario inicie sesión la información del usuario se guarde en el localstorage.

Creamos una función `enviarDatos(formulario)` que recibe el formulario, (en caso de que éste valide) y extraemos los valores de los campos para, de momento, sacarlos por consola

login.js

```
_import_ { perfiles } _from_ '../bd/datosPrueba'

_export_ _default_ {
 template: // html
 `...`,

script: () => {
 console.log('vista login cargada')
 // Validación bootstrap

// Capturamos el formulario en una variable
 _const_ formulario = _document_.querySelector('#formulario')
 // Detectamos su evento submit (enviar)
 formulario.addEventListener('submit', (event) => {
 // Detenemos el evento enviar (submit)
 event.preventDefault()
 event.stopPropagation()
 // Comprobamos si el formulario no valida
 _if_ (!formulario.checkValidity()) {
 // Y añadimos la clase 'was-validate' para que se muestren los mensajes
 formulario.classList.add('was-validated')
 console.log('No valida')
 } _else_ {
 enviarDatos(formulario)
 }

})

_function_ enviarDatos (formulario) {
 _const_ email = formulario.email.value
 _const_ pass = formulario.password.value
 console.log('email y pass: ', email, pass)
 }
 }
}
```

Para que este código funcione debes actualizar los inputs del formulario para que incorporen el atributo name.

```
 <input id="email" name="email" value="ejemplo@email.com" required type="email" _class_="form-control" />
```

Ahora vamos a comprobar que el email existe y que la contraseña corresponde con la información de la base de datos.

```
_function_ enviarDatos (formulario) {
 _const_ email = formulario.email.value
 _const_ pass = formulario.password.value

// buscamos el indice del email en el array perfiles
 _const_ indexUser = perfiles.findIndex((user) => user.email === email)
 // Si existe y la contraseña corresponde
 _if_ (perfiles[indexUser].contraseña === pass) {
 console.log('¡login correcto!')
 } _else_ {
 console.log('El usuario no existe o la contraseña no corresponde')
 }
}
```

Ahora solo falta registrar los datos del usuario en el localstorage (esta vez con algunos datos extra como el user_id).

función enviarDatos() de loginVista.js

```
// Función para enviar datos a la bd
 \_function\* enviarDatos (formulario) {
 _const_ email = formulario.email.value
 _const_ pass = formulario.password.value

     // buscamos el indice del email en el array perfiles
     *const* indexUser = perfiles.findIndex((user) => user.email === email) // 1
     // Si encuentra un usuario
     *if* (indexUser > 0) {
       // Si la contraseña es correcta
       *if* (perfiles[indexUser].contraseña === pass) {
         console.log('¡login correcto!')
         *const* usuario = {
           nombre: perfiles[indexUser].nombre,
           apellidos: perfiles[indexUser].apellidos,
           email: perfiles[indexUser].email,
           rol: perfiles[indexUser].rol,
           avatar: perfiles[indexUser].avatar,
           user_id: perfiles[indexUser].user_id
         }
         // Guardamos datos de usaurio en localstorage
         ls.setUsuario(usuario)
         // Cargamos página home
         *window*.location = '#/proyectos'
         // Actualizamos el header para que se muestren los menús que corresponden al rol
         header.script()
       } *else* {
         // console.log('La contraseña no corresponde')
         alert('El usuario no existe o la contraseña no es correcta')
       }
     } *else* {
       // console.log('El usuario no existe')
       alert('El usuario no existe o la contraseña no es correcta')
     }

}
```

Para asegurarnos que, en nuestro menú de usuario, se inyectan correctamente tanto el email como el _rol_, vamos a añadir unas líneas al final del header.js  
header.js

```
...

// Y actualizamos los datos de menu de usuario si es que se está mostrando
 _try_ {
 // email y rol
 _document_.querySelector('#emailUserMenu').innerHTML = ls.getUsuario().email
 _document_.querySelector('#rolUserMenu').innerHTML = ls.getUsuario().rol
 // para la imagen de avatar (avatar.png si el campo está vacío)
 _const_ imagen = ls.getUsuario().avatar === '' ? 'images/avatar.svg' : ls.getUsuario().avatar
 _document_.querySelector('#avatarMenu').setAttribute('src', imagen)
 } _catch_ (error) {
 console.log('El usuario no está registrado y no tiene menú de usuario');
 }
```

## **Cerrando sesión**

Para cerrar la sesión, por el momento, simplemente vamos a borrar los datos del localstorage.

Desde el script de `header.js` detectamos cuando el usuario hace clic en el item de cerrar sesión (con la clase asociada '_cerrarSesion_').

header.js

```
...

// Cerrar sesión
 // Capturamos clic sobre el item de cerrar sesión
 _document_.querySelector('header').addEventListener('click', (e) => {
 _if_ (e.target.classList.contains('cerrarSesion')) {
 e.preventDefault()
 // Borramos el localstorage
 ls.setUsuario('')
 // Cargamos la pagina home
 _window_.location = '#/home'
 header.script()
 }
 })
```

Falta añadir la clase cerrarSesion a todos los items del menú.

menus.js

```
<li><a class="dropdown-item cerrarSesion" href="#">Cerrar sesión</a></li>
```

También debes recordar importar el objeto ls.

menu.js

```
_import_ { ls } _from_ './funciones'
```

Con todas las actualizaciones el `header.js`quedaría así:

header.js

```
// importamos la función ls del archivo funciones
import { ls } from '../componentes/funciones'
import { menuRol, menuUsuario } from './menus'
import { editarPerfil } from './editarPerfil'

export const header = {
  template: // html
  `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container">
    <a class="navbar-brand router-link" href="#/home"
      ><img
        src="images/logo.svg"
        alt=""
        width="30"
        height="24"
        class="d-inline-block align-text-top"
      />

      Vanilla Games</a
    >
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active router-link" aria-current="page" href="#/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link router-link" aria-current="page" href="#">TOP5 Proyectos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link router-link" aria-current="page" href="#" class="router-link">A cerca de</a>
        </li>
      </ul>

      <div id="menuRol"></div>
      <div id="menuUsuario"></div>
    </div>
  </div>
</nav>
<div id="modal"></div>

  `,
  script: () => {
    console.log('Header cargado')
    // Cargamos la ventana modal para editar perfil
    document.querySelector('#modal').innerHTML = editarPerfil.template
    // Y ejecutamos su lógica
    editarPerfil.script()
    const rolUsuario = ls.getUsuario().rol
    switch (rolUsuario) {
      case 'registrado':
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateRegistrado
        // menú usuario
        document.querySelector('#menuUsuario').innerHTML = menuUsuario.templateRegistrado
        break
      case 'desarrollador':
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateDesarrollador
        // menú usuario
        document.querySelector('#menuUsuario').innerHTML = menuUsuario.templateDesarrollador
        break
      case 'admin':
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateAdmin
        // menú usuario
        document.querySelector('#menuUsuario').innerHTML = menuUsuario.templateAdmin
        break
      default : // Para usuarios anónimos
        // menú rol
        document.querySelector('#menuRol').innerHTML = menuRol.templateAnonimo
        // menú usuario - No debe aparecer nada
        document.querySelector('#menuUsuario').innerHTML = ''
        break
    }

    // Y actualizamos los datos de menu de usuario si es que se está mostrando
    try {
      // email y rol
      document.querySelector('#emailUserMenu').innerHTML = ls.getUsuario().email
      document.querySelector('#rolUserMenu').innerHTML = ls.getUsuario().rol
      // para la imagen de avatar (avatar.png si el campo está vacío)
      const imagen = ls.getUsuario().avatar === '' ? 'images/avatar.svg' : ls.getUsuario().avatar
      document.querySelector('#avatarMenu').setAttribute('src', imagen)
    } catch (error) {
      console.log('El usuario no está registrado y no tiene menú de usuario')
    }

    // Cerrar sesión
    // Capturamos clic sobre el item de cerrar sesión
    document.querySelector('header').addEventListener('click', (e) => {
      if (e.target.classList.contains('cerrarSesion')) {
        e.preventDefault()
        // Borramos el localstorage
        ls.setUsuario('')
        // Cargamos la pagina home
        window.location = '#/home'
        header.script()
      }
    })
  }
}
```

# **Vista proyectos**

Esta vista nos muestra una tabla con los datos de los proyectos que han creado los diferentes desarrolladores.

Por el momento, solo se muestra la tabla html, tal y como la hemos creado en el prototipo html.

## **¿Qué vamos a hacer?**

Para poner un poco de orden necesitamos preguntarnos: ¿qué funcionalidades debo implementar en esta vista?. Vamos a hacer una lista:

1. Generar la tabla a partir de datos obtenidos de la base de datos (o, en nuestro caso, simulando la consulta con un array de datos en formato json)
2. Generar las tarjetas de la misma manera
3. Dar funcionalidad al boton de 'subir proyecto' y de paso, mostrarlo o ocultarlo dependiendo del rol de usuario logueado.
4. Dar funcionalidad a los botones que permutan entre las vistas de tabla y de tarjetas cambiandoles el aspecto
5. Dar funcionalidad al buscador (que genere nuevo array de datos filtrados dependiendo de la busqueda) y al botón de borrar datos del mismo.
6. Dar funcionalidad a los botones que permutan entre la vista 'Todos los proyetos' y 'Mis proyectos'
7. Dar funcionalidad a los botones de editar, borrar y mostrar detalle de cada proyecto

Seguro que luego caemos en alguna funcionalidad que se nos ha pasado. ¡Comenzamos!

## **Emulando datos de la consulta a la base de datos**

Vamos a crear un array de datos que emulen una consulta a los proyectos almacenados en la base de datos.

Para eso necesitamos conocer el nombre de los campos de las tablas, por lo que vamos a consultar de nuevo el diagrama de clases que diseñó nuestro 'yo-backend''. El resultado podría ser algo así:

```
const proyectos = [
  {
    id,
    created_at,
    user_id,
    nombre,
    descripcion,
    imagen,
    enlace,
    repositorio,
    estado,
    nombre_usuario,
    apellidos_usuario

  }

]

```

Y el array completo con datos inventados (gracias chatGPT 😀) usando los user\*id de nuestra base de datos quedaría así:

datosPrueba.js

```
// Datos de prueba con perfiles inventados
export const perfiles = [
  {
    ...
  }

// Datos de prueba con proyectos inventados a partir de los usuarios (perfiles) anteriores
export const proyectos = [
  {
    id: 1,
    created_at: '2023-08-29T10:00:00Z',
    user_id: '36f66b5e-aa59-4f96-b6a8-3c890d6a452c',
    nombre: 'Salto Espacial',
    descripcion: 'Juego de plataforma espacial con saltos emocionantes',
    imagen: 'imagen1.jpg',
    enlace: 'https://salto-espacial.com',
    repositorio: 'https://github.com/usuario/salto-espacial',
    estado: 'En desarrollo',
    nombre_usuario: 'Carmen',
    apellidos_usuario: 'Maura'
  },
  {
    id: 2,
    created_at: '2023-08-28T15:30:00Z',
    user_id: 'a3df05b0-91e7-4f68-a067-841fcf5de9f0',
    nombre: 'Carrera Loca',
    descripcion: 'Juego de carreras con obstáculos y power-ups',
    imagen: 'imagen2.jpg',
    enlace: 'https://carrera-loca.com',
    repositorio: 'https://github.com/usuario/carrera-loca',
    estado: 'En desarrollo',
    nombre_usuario: 'Antonio',
    apellidos_usuario: 'Resines'
  },
  {
    id: 3,
    created_at: '2023-08-27T09:45:00Z',
    user_id: 'd67e3b1c-875f-437f-bd2a-9ff50b72083d',
    nombre: 'Aventuras en la Selva',
    descripcion: 'Explora la selva en busca de tesoros y desafíos',
    imagen: 'imagen3.jpg',
    enlace: 'https://aventuras-en-la-selva.com',
    repositorio: 'https://github.com/usuario/aventuras-en-la-selva',
    estado: 'En desarrollo',
    nombre_usuario: 'Maribel',
    apellidos_usuario: 'Verdú'
  },
  {
    id: 4,
    created_at: '2023-08-26T11:20:00Z',
    user_id: '36f66b5e-aa59-4f96-b6a8-3c890d6a452c',
    nombre: 'Rompecabezas Divertido',
    descripcion: 'Resuelve rompecabezas desafiantes con imágenes divertidas',
    imagen: 'imagen4.jpg',
    enlace: 'https://rompecabezas-divertido.com',
    repositorio: 'https://github.com/usuario/rompecabezas-divertido',
    estado: 'En desarrollo',
    nombre_usuario: 'CArmen',
    apellidos_usuario: 'Maura'
  },
  {
    id: 5,
    created_at: '2023-08-25T14:15:00Z',
    user_id: 'a3df05b0-91e7-4f68-a067-841fcf5de9f0',
    nombre: 'Defensor Espacial',
    descripcion: 'Protege la galaxia de invasores alienígenas en este juego arcade',
    imagen: 'imagen5.jpg',
    enlace: 'https://defensor-espacial.com',
    repositorio: 'https://github.com/usuario/defensor-espacial',
    estado: 'En desarrollo',
    nombre_usuario: 'Antonio',
    apellidos_usuario: 'Resines'
  }
]


```

## **Generando los datos desde script de la vista**

Vamos ahora a la vista `proyectos.js`. Necesitamos crear un par de funciones, pintaTabla() y pintaTarjetas(). Estas funciones se encargarán de inyectar en la vista el resultado de recorrer el array anterior generando una fila `<tr></tr>`(en el caso de la tabla) o `card` (en el caso de las tarjetas) por cada proyecto.

De momento vamos a hacer que, en ambas vistas, se muestren los botones de editar y borrar proyecto. Estos enlaces tendrán una clase (botonEditar y botonBorrar) para poder detectar su pulsación, y además, utilizando dataset, le añadiremos el id del proyecto. De esta manera, cuando hagamos clic en el botón podremos extraer el id y llamar a la función de edición o borrardo de ese proyecto.

Más adelante, haremos que estos botones se muestren u oculten, dependiendo de si el rol del usuario logueado es _desarrollador_ o _registrado_, y de si el proyecto es de su creación

Esta sería la función pintaTabla():

### **Función pintaTabla()**

script de proyectos.js

```
// Función para pintar tabla a partir de array
    const pintaTabla = (proyectos) => {
      let tbodyProyectos = ''
      // Para cada proyecto del array 'proyectos'
      proyectos.forEach(proyecto => {
      // sumamos un tr con los datos del proyecto
        tbodyProyectos += `
      <tr>
        <td>
          <div class="containerImagen">
            <img
              width="200px"
              src=${proyecto.imagen || 'images/imagenVacia.png'}
              alt="imagen proyecto" />
          </div>
        </td>
        <td>${proyecto.nombre}</td>
        <td>${proyecto.descripcion}</td>
        <td><a href="${proyecto.enlace}"><i class="bi bi-link fs-4"></i></a></td>
        <td><a href="${proyecto.repositorio}"><i class="bi bi-folder-symlink fs-4"></i></a></td>
        <td>${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</td>
        <td>${proyecto.created_at}</td>
        <td>${proyecto.estado}</td>
        <td>
          <a
          data-user_id = ${proyecto.user_id}
          class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
          ></a>
        </td>
        <td>
          <a
            data-user_id = ${proyecto.user_id}
            class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
          ></a>
        </td>
      </tr>

      `
      })
      // inyectamos el resultado en el tbody
      document.querySelector('#tbodyProyectos').innerHTML = tbodyProyectos
    }

    // Ejecutamos la función
    pintaTabla(proyectos)

```

¡Mira que chulo!

![tabla proyectos](https://carrebola.github.io/vanillaPill/assets/images/tabla-da2e0ee6dee1a3a7fdd1926b7b0b0721.png)

### **Función pintaTarjetas()**

Para las tarjetas haremos lo mismo:

```
  // ####################################################################
  // *** FUNCIÓN PARA PINTAR TABLA A PARTIR DE ARRAY datos ***
  // ####################################################################
  const pintaTarjetas = (proyectos) => {
  let tarjetasProyectos = ''
  // Para cada proyecto del array 'proyectos'
  proyectos.forEach(proyecto => {
  // sumamos un tr con los datos del proyecto
    tarjetasProyectos += // html
  `
  <!-- tarjeta  -->
  <div class="col-12 col-lg-6">
    <div class="card mb-3">
      <div class="row g-0">
        <div
          class="col-4"
          style="
            background-image: url(${proyecto.imagen || 'images/imagenVacia.png'});
            background-position: center;
            background-size: cover;
          "
        ></div>
        <div class="col-8">
          <div class="card-body">
            <h5 class="card-title">${proyecto.nombre}</h5>
            <p class="card-text">
              ${proyecto.descripcion}
            </p>
            <p class="small m-0 text-end text-italic">Autor: ${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</p>
            <p class="small text-end text-italic">Fecha: ${proyecto.created_at}</p>

            <a class="btn btn-sm btn-outline-primary" href="${proyecto.enlace}"><i class="bi bi-link"></i></a>
            <a class="btn btn-sm btn-outline-primary" href="${proyecto.repositorio}"><i class="bi bi-folder-symlink"></i></a>
            <a class="btn btn-sm btn-success" href="#">${proyecto.estado}</a>
            <a
              data-user_id = ${proyecto.user_id}
              class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
            ></a>
            <a
              data-user_id = ${proyecto.user_id}
              class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  })

  document.querySelector('#tabTarjetas').innerHTML = tarjetasProyectos
}

// ####################################################################
// Función para pintar tarjetas
// ####################################################################

pintaTarjetas(proyectos)

```

Y quedará así... ¡¡¡Esto va cogiendo forma!!! 😄

![tabla proyectos](https://carrebola.github.io/vanillaPill/assets/images/tarjetas-3419ecf80ed074b7ef2147a2031405e1.png)

#### **Botón para nuevo proyecto**

Para el botón 'Subir Proyecto' es muy fácil. Sustituye el botón por una etiqueta 'a' que apunte a la vista `proyectoNuevo.js`

proyectosVista.js

```
<a href="#/proyectoNuevo" class="btn btn-primary w-100 router-link">Subir proyecto</a>
```

Y ahora vamos a mostrarlo o ocultarlo, dependiendo del rol del usuario que tenga la sesión abierta (solo debe mostrarse para el rol desarrollador)

proyectosVista.js

```

    // ####################################################################
    // Mostrar/ocultar botón 'subir proyecto'
    // ####################################################################

    // Capturamos los datos del usuario logueado
    const usuario = ls.getUsuario()
    // Ocultamos el botón de subir proyecto si el rol es registrado
    if (usuario.rol === 'registrado') {
      document.querySelector('#botonSubirProyecto').classList.add('disabled')
    }

```

## **Botones para permutar entre vista tabla y vista tarjetas**

Para programar la funcionanlidad de los botones que nos permiten permutar entre la visualización en formato tabla o tarjetas, añadimos una clase para identificarlos: '_vistaTabla_' y '_vistaTarjetas_'
Nota

He eliminado la etiqueta `<i></i>` insertando las clases del icono en el propio botón para facilitar la detección y manipulación del mismo

proyectosVista.js

```
<button class="btn btn-secondary me-2 bi bi-grid-3x3-gap vistaTabla">
</button>
<button class="btn btn-secondary me-2 bi bi-list vistaTarjetas">
</button>
```

Ahora creamos la lógica para detectar su pulsación

proyectosVista.js

```
// Cambio entre vista de tablas y vista de tarjetas
    document.querySelector('.vistaTabla').addEventListener('click', (boton) => {
      console.log('vistaTabla');
    })

    document.querySelector('.vistaTarjetas').addEventListener('click', (boton) => {
      console.log('vistaTarjetas');
    })
```

Y cambiamos la visualización de cada uno de los tabs (mediante las clases _d-block_ y _d-none_ de bootstrap) en función del botón que hemos pulsado. También vamos a modificar el aspecto de los botones (su color) mediante la suma o extracción de la clase _btn-success_ o _btn-secondary_ de bootstrap.

proyectosVista.js

```
    // ####################################################################
    // *** SELECCIÓN DE VISTA EN FORMATO TABLA O TARJETAS ***
    // ####################################################################

    // Selección vista tabla
    document.querySelector('.vistaTabla').addEventListener('click', (boton) => {
      // Lineas originales del html para los tabs:
      // <div class="col-12 d-none d-xl-block" style="overflow-x: auto">
      // <div class="d-xl-none row">

      // Pinta el boton de verde
      boton.target.classList.add('btn-success')

      // Pinta el otro botón de gris y elimina el verde
      const botonTarjeta = document.querySelector('.vistaTarjetas')
      botonTarjeta.classList.remove('btn-success')
      botonTarjeta.classList.add('btn-secondary')

      // Muestra y oculta los tabs
      document.querySelector('#tabTabla').setAttribute('class', 'col-12 d-block')
      document.querySelector('#tabTarjetas').setAttribute('class', 'd-none')
    })

    // Selección vista tarjetas
    document.querySelector('.vistaTarjetas').addEventListener('click', (boton) => {
      console.log('vistaTarjetas')

      // Pinta el boton de verde
      boton.target.classList.add('btn-success')

      // Pinta el otro botón de gris y elimina el verde
      const botonTabla = document.querySelector('.vistaTabla')
      botonTabla.classList.remove('btn-success')
      botonTabla.classList.add('btn-secondary')

      // Muestra y oculta los tabs
      document.querySelector('#tabTabla').setAttribute('class', 'd-none')
      document.querySelector('#tabTarjetas').setAttribute('class', 'row')
    })

```

## **Implementando el buscador**

Vamos a programar un código que cree un buscador que se encargará de verificar cada campo de cada proyecto en el array en busca del texto ingresado en el input de búsqueda. Los proyectos que coinciden con el texto de búsqueda en al menos uno de sus campos se filtran y se almacenan en un nuevo array que, de momento, mostraremos por consola.

proyectosVista.js

```

    // ####################################################################
    // *** FILTRO PARA BUSCADOR ***
    // ####################################################################

    // Capturamos el input de búsqueda
    const inputBusqueda = document.getElementById('inputBusqueda')

    // Agregamos un evento de escucha para el evento de entrada en el input de búsqueda
    inputBusqueda.addEventListener('input', () => {
      // Capturamos el texto de búsqueda del input, conviértelo a minúsculas y elimina espacios en blanco al principio y al final
      const textoBusqueda = inputBusqueda.value.toLowerCase().trim()

      // Filtramos los proyectos que coinciden con el texto de búsqueda en cualquier campo
      const proyectosFiltrados = datos.filter(proyecto => {
        // Itera sobre las propiedades (campos) de cada proyecto
        for (const key in proyecto) {
          // Obtenemos el valor del campo actual
          const valorCampo = proyecto[key]
          // Verificamos si el valor del campo es una cadena y si contiene el texto de búsqueda
          if (typeof valorCampo === 'string' && valorCampo.toLowerCase().includes(textoBusqueda)) {
            // Si hay coincidencia, devuelve true para incluir el proyecto en la lista filtrada
            return true
          }
        }
        // Si no se encontró coincidencia en ningún campo, devuelve false para excluir el proyecto
        return false
      })
      // Volvemos a pintar los datos con los proyectos filtrados por el buscador
      pintaTabla(proyectosFiltrados)
      pintaTarjetas(proyectosFiltrados)
    })

```

Primero obtenemos una referencia al elemento de input de búsqueda utilizando `document.getElementById("inputBusqueda")`.

Añadimos un evento de escucha al input de búsqueda usando addEventListener. El evento que estamos escuchando es el evento input, que se activa cuando el contenido del input cambia.

Dentro del controlador del evento input, obtenemos el valor del input y realizamos algunas transformaciones para preparar el texto para la búsqueda. Lo convertimos a minúsculas con `toLowerCase()` para hacer la búsqueda insensible a mayúsculas y minúsculas, y luego eliminamos espacios en blanco al principio y al final con `trim()`.

Ahora, viene la parte clave del código. Utilizamos el método filter en el array proyectos. Este método crea un nuevo array con todos los elementos que cumplan con la condición definida.

Para cada proyecto en el array, utilizamos un bucle for...in para iterar sobre las propiedades (campos) de cada objeto.

En cada iteración, obtenemos el valor del campo actual usando proyecto[key], donde key es el nombre de la propiedad actual.

Luego, verificamos si el valor del campo es una cadena de texto utilizando `typeof valorCampo === "string"`. Si es una cadena, aplicamos `toLowerCase()` al valor y utilizamos `includes(textoBusqueda)` para verificar si el texto de búsqueda está presente en el campo.

Si el texto de búsqueda se encuentra en el campo, devolvemos true en el bloque if, lo que significa que ese proyecto debe ser incluido en el array de proyectos filtrados.

Si no se encuentra coincidencia en el campo actual, continuamos iterando sobre los campos.

Si no se encontró ninguna coincidencia en ningún campo, se devuelve false fuera del bucle for...in, lo que significa que ese proyecto no cumple con el criterio de búsqueda.

Finalmente, el resultado del método filter es un array proyectosFiltrados que contiene solo los proyectos que cumplen con el criterio de búsqueda.

Observa como va mostrando por consola el array con tantos elementos como coincidencias encuentra:

![filtro](https://carrebola.github.io/vanillaPill/assets/images/filtro-36c29edf294cf81d1e32be5dd6503882.png)

### **Borrando los datos del buscador**

Para borrar los datos del buscador cuando pulsamos el botón de la cruz podemos hacer lo siguiente:

proyectosVista.js

```

    // ####################################################################
    // Borrar datos del input del buscador al hacer click en 'x'
    // ####################################################################

    document.querySelector('#borrarBuscador').addEventListener('click', () => {
      // Borramos contenido del buscador
      inputBusqueda.value = ''
      // Actualizamos array con todos los proyectos
      // const proyectosFiltrados = datos
      // Actualizamos los datos en el panel central
      pintaTabla(datos)
      pintaTarjetas(datos)
    })

```

## **Gestión de las pestañas 'Todos los proyectos' / 'Mis proyectos'**

Para gestionar qué pestaña debe mostrarse (la pestaña 'Todos los proyectos' o la pestaña 'Mis proyectos'), necesitamos una variable global `misProyectos` que por defecto será false, es decir, la vista por defecto será de 'Todos los proyectos'.

El código para gestionar la visualización de las pestañas podría ser algo así:

proyectosVista.js

```

    // ####################################################################
    // Vista 'Todos los proyectos' / 'Mis proyectos'
    // ####################################################################

    // Definimos que por defecto se muestran 'mis proyectos'
    let misProyectos = false

    // *** Detectamos si se cambia de proyectos a mis proyectos al hacer click en las pestañas ***
    document.querySelector('.nav-tabs').addEventListener('click', (event) => {
      // Si click en 'Mis proyectos' cambiamos pestaña activa
      if (event.target.classList.contains('fichaMisProyectos')) {
        document.querySelector('.fichaMisProyectos').classList.add('active')
        document.querySelector('.fichaProyectos').classList.remove('active')
        misProyectos = true
      } else {
        // Si click en 'Todos los proyectos' cambiamos pestaña activa
        document.querySelector('.fichaProyectos').classList.add('active')
        document.querySelector('.fichaMisProyectos').classList.remove('active')
        misProyectos = false
      }
      // Actualizamos los datos en el panel central
      pintaTabla(datos)
      pintaTarjetas(datos)
    })

```

Ahora vamos a actualizar las funciones `pintaTabla(datos)` y `pintaTarjetas(datos)` (que inyectan la tabla y las tarjetas a partir de los datos del array de datos de prueba), añadiendo un filtro que, si tenemos la variable 'misProyectos' como `true`, filtre todos los proyectos por su user*id. Es decir, que cree un nuevo array donde solo se muestren los proyectos donde el user*id del proyecto coincide con el user\*id del usuario logueado.

proyectosVista.js

```

    // ####################################################################
    // *** SELECCIÓN DE VISTA EN FORMATO TABLA O TARJETAS ***
    // ####################################################################
    const pintaTabla = (proyectosFiltrados) => {
      // Si tenemos seleccionada la opción 'mis proyectos' filtramos los proyectos por user_id
      if (misProyectos) {
        proyectosFiltrados = datos.filter((proyecto) => proyecto.user_id === usuario.user_id)
      }

      let tbodyProyectos = ''
      // Iteramos para cada proyecto del array 'proyectos'
      proyectosFiltrados.forEach(proyecto => {
       ...

```

proyectosVista.js

```


    // ####################################################################
    // *** FILTRO PARA BUSCADOR ***
    // ####################################################################

    const pintaTarjetas = (proyectosFiltrados) => {
      // Si tenemos seleccionada la opción 'mis proyectos' filtramos los proyectos por user_id
      if (misProyectos) {
        proyectosFiltrados = datos.filter((proyecto) => proyecto.user_id === usuario.user_id)
        console.log(proyectos)
      }
      let tarjetasProyectos = ''
      // Iteramos para cada proyecto del array 'proyectosFiltrados'
      proyectosFiltrados.forEach(proyecto => {
        ...
      })


```

¡Esto ya debería estar funcionando de maravilla!

## **Botones para editar, borrar y visualizar proyecto un proyecto**

¡Ya queda menos! Ahora tenemos que detectar cuando pulsamos los botones de editar y borrar para extraer el id del proyecto que llevan grabado en el dataset y actuar en consecuencia: abriendo la vista de editar (a la que enviaremos el id como parámetro) o borrando el proyecto de la base de datos (esto, de momento, lo simularemos con una console.log).

También detectaremos cuando se pulsa la imagen del proyecto (o alguna celda 'td' si es la vista tabla) para mostrar la vista detalle del proyecto en cuestión.

Vamos a dividir el código en tres bloques:

Bloque 1: Botones de Edición, Borrado y Visualización de Detalle de Proyectos Este bloque está encabezado por un comentario y se encarga de gestionar los clics en botones de edición y borrado, así como en elementos de visualización de detalle de proyectos. Utiliza la delegación de eventos para manejar los clics en elementos dentro de la etiqueta `<main>` del DOM.

```

document.querySelector('main').addEventListener('click', (event) => {
  // ...
})

```

Bloque 2: Manejo de Botones de Edición y Borrado Dentro del primer bloque, este sub-bloque se encarga de detectar si se ha hecho clic en botones de edición o borrado. Dependiendo del botón clicado, realiza acciones como mostrar un mensaje de alerta de borrado o redireccionar a una página de edición.

```

if (event.target.classList.contains('botonAdmin')) {
  // ...
  if (boton.classList.contains('botonEditar')) {
    // Si se trata de editar
    // ...
  } else if (boton.classList.contains('botonBorrar')) {
    // Si se trata de borrar
    // ...
  }
}

```

Dentro del primer bloque, este sub-bloque maneja la visualización de detalles de proyectos cuando se hace clic en una celda de una tabla (`<td>`) o en un elemento con la clase verDetalle. Al hacer clic, se captura el ID del proyecto y se redirecciona a la página de detalle correspondiente.

```

// Visualizar detalle del proyecto si clic sobre tr de vista tabla
if (event.target.tagName === 'TD') {
  // ...
}

// Si hacemos clic sobre la imagen de tabla o de vista tarjetas
if (event.target.classList.contains('verDetalle')) {
  // ...
}

```

Este sería el código:

vistaProyectos.js

```

    // ####################################################################
    // BOTONES DE EDICIÓN, BORRADO y VISUALIZACIÓN DE DETALLE DE PROYECTOS
    // ####################################################################

    // Detectamos clic sobre main (Usamos delegación de eventos porque la tabla y tarjetas se actualizan constantemente en el DOM)
    document.querySelector('main').addEventListener('click', (event) => {
      let id = ''
      // Si hemos pulsado sobre uno de los botones DE EDICIÓN O BORRADO
      if (event.target.classList.contains('botonAdmin')) {
        const boton = event.target
        // Capturamos el id de su dataset
        const id = boton.dataset.id
        if (boton.classList.contains('botonEditar')) {
          // Si se trata de editar
          console.log('Editar proyecto ' + id)

          // Cargamos la vista para editar proyecto pasandole como parámetro el id
          window.location = `#/proyectoEditar/${id}`
        } else if (boton.classList.contains('botonBorrar')) {
          // Si se trata de borrar
          alert('Borrar proyecto ' + id)

          // *** AQUÍ VA LA FUNCIÓN QUE BORRA DE LA BASE DE DATOS EL PROYECTO CORRESPONDIENTE AL ID ***
        }
      }
      // Visualizar detalle del proyecto si click sobre tr de vista tabla
      if (event.target.tagName === 'TD') {
        console.log('clic en td')
        id = event.target.parentNode.dataset.id
        window.location = `#/proyectoDetalle/${id}`
      }
      // Si hacemos clic sobre la imagen de tabla o de vista tarjetas
      if (event.target.classList.contains('verDetalle')) {
        id = event.target.dataset.id
        window.location = `#/proyectoDetalle/${id}`
      }
    })

```

Ten en cuenta que...

Es posible que haya que añadir algunos ids o clases extra en el template para detectar los eventos.

## **Código final completo**

Este sería el código completo de vistaProyecto.js:

vistaProyecto.js

```
import { proyectos } from '../bd/datosPrueba'
import { ls } from '../componentes/funciones'

export default {
  template: // html
  `
  <div class="container">
  <h1 class="mt-5">Proyectos</h1>
  <div class="row mt-5">
    <div class="col-12">
      <!--nav-tabs-->
      <ul class="nav nav-tabs">
        <!--Etiqueta Todos los proyectos-->
        <li class="nav-item w-50">
          <button
            class="selectorFicha fichaProyectos nav-link w-100 active"
          >
            Todos los proyectos
          </button>
        </li>
        <!--Etiqueta Mis proyectos-->
        <li id="pestanyaMisProyectos" class="nav-item w-50">
          <button
            class="selectorFicha fichaMisProyectos nav-link w-100"
          >
            Mis proyectos
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div class="border border-top-0 p-3">
    <div class="row">
      <div class="col-12 col-sm-4 mb-3">
      <!-- Boton para subir proyectos -->
        <a id="botonSubirProyecto" href="#/proyectoNuevo" class="btn btn-primary w-100 router-link">Subir proyecto</a>
      </div>
      <div class="d-flex col-12 col-sm-8 mb-3">
        <!-- Botones para alternar entre vista de tabla o de tarjetas -->
        <button class="vistaTabla btn btn-secondary me-2 bi bi-list">
        </button>
        <button class="vistaTarjetas btn btn-secondary me-2 bi bi-grid-3x3-gap ">
        </button>
        <!-- Buscador -->
        <div class="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping"
            ><i class="bi bi-search"></i
          ></span>
          <input
            id="inputBusqueda"
            type="text"
            class="form-control"
            placeholder="Buscador"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <span class="input-group-text" id="addon-wrapping"
            ><i id="borrarBuscador" class="bi bi-x"></i
          ></span>
        </div>
      </div>
    </div>

    <!-- Tabla de proyectos -->
    <div id="tabTabla" class="col-12 d-none d-xl-block" style="overflow-x: auto">
      <table
        class="table table-hover align-middle mt-3"
        style="min-width: 1000px"
      >
        <thead>
          <tr>
            <th></th>
            <th>
              Nombre <span><i class="bi bi-caret-down"></i></span>
            </th>
            <th>
              Descripción <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Enlace <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>Repositorio</th>
            <th>
              Autor <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Fecha <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th>
              Estado <span><i class="bi bi-caret-up"></i></span>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody id="tbodyProyectos">
          <!-- Aqui van los datos generados por la lógica -->
          <p>No tienes proyectos</p>
        </tbody>
      </table>
    </div>

    <!-- Panel de tarjetas -->
    <div id="tabTarjetas" class="d-xl-none row">
      <!-- Aqui van los datos generados por la lógica -->
      <p>No tienes proyectos</p>
    </div>
  </div>
</div>
  `,
  script: () => {
    // **** AQUI DEBEMOS CAPTURAR LOS PROYECTOS DE LA BASE DE DATOS ****

    // Capturamos proyectos y guardamos en variable para poder ser filtrada
    const datos = proyectos

    // ####################################################################
    // *** FUNCIÓN PARA PINTAR TABLA A PARTIR DE ARRAY datos ***
    // ####################################################################

    const pintaTabla = (proyectosFiltrados) => {
      // Si tenemos seleccionada la opción 'mis proyectos' filtramos los proyectos por user_id
      if (misProyectos) {
        proyectosFiltrados = datos.filter((proyecto) => proyecto.user_id === usuario.user_id)
      }

      let tbodyProyectos = ''
      // Iteramos para cada proyecto del array 'proyectos'
      proyectosFiltrados.forEach(proyecto => {
        // Generamos botones dependiendo de si el proyecto ha sido creado por el usuario logueado
        let botones = ''
        if (usuario.user_id === proyecto.user_id) {
          botones =
          `
          <td><a
            data-id = ${proyecto.id}
            class="botonAdmin botonEditar d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
          ></a></td>
          <td><a
            data-id = ${proyecto.id}
            class="botonAdmin botonBorrar d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
          ></a></td>
          `
        }
        // sumamos un tr con los datos del proyecto de la iteración
        tbodyProyectos += // html
        `
        <tr data-id="${proyecto.id}" class="verDetalle">
          <td>
            <div class="containerImagen">
              <img
                class="verDetalle"
                data-id="${proyecto.id}"
                width="200px"
                src=${proyecto.imagen || 'images/imagenVacia.png'}
                alt="imagen proyecto" />
            </div>
          </td>
          <td>${proyecto.nombre}</td>
          <td>${proyecto.descripcion}</td>
          <td><a href="${proyecto.enlace}" target="_blank"><i class="bi bi-link fs-4"></i></a></td>
          <td><a href="${proyecto.repositorio}" target="_blank"><i class="bi bi-folder-symlink fs-4"></i></a></td>
          <td>${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</td>
          <td>${proyecto.created_at}</td>
          <td>${proyecto.estado}</td>
          <td>
            <!-- Botones de edición y borrado -->
            ${botones}
          </td>
        </tr>
        `
      })
      // inyectamos el resultado en el tbody
      document.querySelector('#tbodyProyectos').innerHTML = tbodyProyectos
    }

    // ####################################################################
    // Función para pintar tarjetas
    // ####################################################################

    const pintaTarjetas = (proyectosFiltrados) => {
      // Si tenemos seleccionada la opción 'mis proyectos' filtramos los proyectos por user_id
      if (misProyectos) {
        proyectosFiltrados = datos.filter((proyecto) => proyecto.user_id === usuario.user_id)
        console.log(proyectos)
      }
      let tarjetasProyectos = ''
      // Iteramos para cada proyecto del array 'proyectosFiltrados'
      proyectosFiltrados.forEach(proyecto => {
        // Generamos botones dependiendo de si el proyecto ha sido creado por el usuario logueado
        let botones = ''
        if (usuario.user_id === proyecto.user_id) {
          botones =
          `
          <a
            data-id = ${proyecto.id}
            class="botonAdmin botonEditar d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil"
          ></a>
          <a
            data-id = ${proyecto.id}
            class="botonAdmin botonBorrar d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3"
          ></a>
          `
        }
        // sumamos un tr con los datos del proyecto
        tarjetasProyectos += // html
        `
        <!-- tarjeta  -->
        <div class="col-12 col-lg-6">
          <div class="card mb-3">
            <div class="row g-0">
              <div
                class="col-4 verDetalle"
                data-id="${proyecto.id}"
                style="
                  background-image: url(${proyecto.imagen || 'images/imagenVacia.png'});
                  background-position: center;
                  background-size: cover;
                "
              ></div>
              <div class="col-8">
                <div class="card-body">
                  <h5 class="card-title">${proyecto.nombre}</h5>
                  <p class="card-text">
                    ${proyecto.descripcion}
                  </p>
                  <p class="small m-0 text-end text-italic">Autor: ${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</p>
                  <p class="small text-end text-italic">Fecha: ${proyecto.created_at}</p>
                  <a class="btn btn-sm btn-outline-primary" href="${proyecto.enlace}" target="_blank"><i class="bi bi-link"></i></a>
                  <a class="btn btn-sm btn-outline-primary" href="${proyecto.repositorio}" target="_blank"><i class="bi bi-folder-symlink"></i></a>
                  <button class="btn btn-sm btn-success">${proyecto.estado}</button>
                  <!-- Botones editar y borrar -->
                  ${botones}
                </div>
              </div>
            </div>
          </div>
        </div>
        `
      })
      // inyectamos el resultado en tbody
      document.querySelector('#tabTarjetas').innerHTML = tarjetasProyectos
    }

    // *** Pintamos los datos en tabla y tarjetas ***
    pintaTabla(datos)
    pintaTarjetas(datos)

    // ####################################################################
    // *** SELECCIÓN DE VISTA EN FORMATO TABLA O TARJETAS ***
    // ####################################################################

    // Selección vista tabla
    document.querySelector('.vistaTabla').addEventListener('click', (boton) => {
      // Lineas originales del html para los tabs:
      // <div class="col-12 d-none d-xl-block" style="overflow-x: auto">
      // <div class="d-xl-none row">

      // Pinta el boton de verde
      boton.target.classList.add('btn-success')

      // Pinta el otro botón de gris y elimina el verde
      const botonTarjeta = document.querySelector('.vistaTarjetas')
      botonTarjeta.classList.remove('btn-success')
      botonTarjeta.classList.add('btn-secondary')

      // Muestra y oculta los tabs
      document.querySelector('#tabTabla').setAttribute('class', 'col-12 d-block')
      document.querySelector('#tabTarjetas').setAttribute('class', 'd-none')
    })

    // Selección vista tarjetas
    document.querySelector('.vistaTarjetas').addEventListener('click', (boton) => {
      console.log('vistaTarjetas')

      // Pinta el boton de verde
      boton.target.classList.add('btn-success')

      // Pinta el otro botón de gris y elimina el verde
      const botonTabla = document.querySelector('.vistaTabla')
      botonTabla.classList.remove('btn-success')
      botonTabla.classList.add('btn-secondary')

      // Muestra y oculta los tabs
      document.querySelector('#tabTabla').setAttribute('class', 'd-none')
      document.querySelector('#tabTarjetas').setAttribute('class', 'row')
    })

    // ####################################################################
    // *** FILTRO PARA BUSCADOR ***
    // ####################################################################

    // Capturamos el input de búsqueda
    const inputBusqueda = document.getElementById('inputBusqueda')

    // Agregamos un evento de escucha para el evento de entrada en el input de búsqueda
    inputBusqueda.addEventListener('input', () => {
      // Capturamos el texto de búsqueda del input, conviértelo a minúsculas y elimina espacios en blanco al principio y al final
      const textoBusqueda = inputBusqueda.value.toLowerCase().trim()

      // Filtramos los proyectos que coinciden con el texto de búsqueda en cualquier campo
      const proyectosFiltrados = datos.filter(proyecto => {
        // Itera sobre las propiedades (campos) de cada proyecto
        for (const key in proyecto) {
          // Obtenemos el valor del campo actual
          const valorCampo = proyecto[key]
          // Verificamos si el valor del campo es una cadena y si contiene el texto de búsqueda
          if (typeof valorCampo === 'string' && valorCampo.toLowerCase().includes(textoBusqueda)) {
            // Si hay coincidencia, devuelve true para incluir el proyecto en la lista filtrada
            return true
          }
        }
        // Si no se encontró coincidencia en ningún campo, devuelve false para excluir el proyecto
        return false
      })
      // Volvemos a pintar los datos con los proyectos filtrados por el buscador
      pintaTabla(proyectosFiltrados)
      pintaTarjetas(proyectosFiltrados)
    })

    // ####################################################################
    // Borrar datos del input del buscador al hacer click en 'x'
    // ####################################################################

    document.querySelector('#borrarBuscador').addEventListener('click', () => {
      // Borramos contenido del buscador
      inputBusqueda.value = ''
      // Actualizamos array con todos los proyectos
      // const proyectosFiltrados = datos
      // Actualizamos los datos en el panel central
      pintaTabla(datos)
      pintaTarjetas(datos)
    })

    // ####################################################################
    // Vista 'Todos los proyectos' / 'Mis proyectos'
    // ####################################################################

    // Definimos que por defecto se muestran 'mis proyectos'
    let misProyectos = false

    // *** Detectamos si se cambia de proyectos a mis proyectos al hacer click en las pestañas ***
    document.querySelector('.nav-tabs').addEventListener('click', (event) => {
      // Si click en 'Mis proyectos' cambiamos pestaña activa
      if (event.target.classList.contains('fichaMisProyectos')) {
        document.querySelector('.fichaMisProyectos').classList.add('active')
        document.querySelector('.fichaProyectos').classList.remove('active')
        misProyectos = true
      } else {
        // Si click en 'Todos los proyectos' cambiamos pestaña activa
        document.querySelector('.fichaProyectos').classList.add('active')
        document.querySelector('.fichaMisProyectos').classList.remove('active')
        misProyectos = false
      }
      // Actualizamos los datos en el panel central
      pintaTabla(datos)
      pintaTarjetas(datos)
    })

    // ####################################################################
    // BOTONES DE EDICIÓN, BORRADO y VISUALIZACIÓN DE DETALLE DE PROYECTOS
    // ####################################################################

    // Detectamos clic sobre main (Usamos delegación de eventos porque la tabla y tarjetas se actualizan constantemente en el DOM)
    document.querySelector('main').addEventListener('click', (event) => {
      let id = ''
      // Si hemos pulsado sobre uno de los botones DE EDICIÓN O BORRADO
      if (event.target.classList.contains('botonAdmin')) {
        const boton = event.target
        // Capturamos el id de su dataset
        const id = boton.dataset.id
        if (boton.classList.contains('botonEditar')) {
          // Si se trata de editar
          console.log('Editar proyecto ' + id)

          // Cargamos la vista para editar proyecto pasandole como parámetro el id
          window.location = `#/proyectoEditar/${id}`
        } else if (boton.classList.contains('botonBorrar')) {
          // Si se trata de borrar
          alert('Borrar proyecto ' + id)

          // *** AQUÍ VA LA FUNCIÓN QUE BORRA DE LA BASE DE DATOS EL PROYECTO CORRESPONDIENTE AL ID ***
        }
      }
      // Visualizar detalle del proyecto si click sobre tr de vista tabla
      if (event.target.tagName === 'TD') {
        console.log('clic en td')
        id = event.target.parentNode.dataset.id
        window.location = `#/proyectoDetalle/${id}`
      }
      // Si hacemos clic sobre la imagen de tabla o de vista tarjetas
      if (event.target.classList.contains('verDetalle')) {
        id = event.target.dataset.id
        window.location = `#/proyectoDetalle/${id}`
      }
    })

    // ####################################################################
    // Mostrar/ocultar botón 'subir proyecto'
    // ####################################################################

    // Capturamos los datos del usuario logueado
    const usuario = ls.getUsuario()
    // Ocultamos el botón de subir proyecto si el rol es registrado
    if (usuario.rol === 'registrado') {
      document.querySelector('#botonSubirProyecto').classList.add('disabled')
    }
  }
}

```

# **Vista admin**

Para la vista admin nos vamos a basar en la vista de proyectos ya que tiene una estructura muy parecida... Casi te diría que copiases proyectos.js y lo pegases en admin.js, eliminando lo que no no necesistas y modificando el resto.

De todas formas vamos a escribir el código paso a paso:

En primer lugar vamos a importar nuestra base de datos emulada y nuestra libreria ls para el acceso al localstorage:

adminVista.js

```
import { proyectos, perfiles } from '../bd/datosPrueba'
import { ls } from '../componentes/funciones'
```

## **Vamos con la inicialización y gestión de los datos.**

- Primero vamos a capturar los datos de la base de datos que hemos emulado y crearemos una variable `selectUsuarios` que inicializamos a true para definir que, por defecto, vamos a mostrar la pestaña de usuarios.
- Luego vamos a detectar cuando pulsamos en las diferentes pestañas para mostrar el tab de proyectos o el de usuarios. También modificaremos el aspecto de las pestañas:

adminVista.js

```
// Capturamos los datos del usuario logueado
const usuario = ls.getUsuario()

// **** AQUI DEBEMOS CAPTURAR LOS PROYECTOS DE LA BASE DE DATOS ****

// Capturamos proyectos y guardamos en variable para poder ser filtrada
const datosProyectos = proyectos
const datosUsuarios = perfiles

// Definimos que por defecto se muestran 'proyectos'
let selectUsuarios = true
// *** Detectamos si se cambia de proyectos a usuarios al hacer click en las pestañas ***
document.querySelector('.nav-tabs').addEventListener('click', (event) => {
  if (event.target.classList.contains('fichaUsuarios')) {
    // Si click en Usuarios cambiamos pestaña activa
    document.querySelector('.fichaUsuarios').classList.add('active')
    document.querySelector('.fichaProyectos').classList.remove('active')
    selectUsuarios = true
    console.log('tabusuarios')
    document.querySelector('#tabUsuarios').classList.add('d-block')
    document.querySelector('#tabUsuarios').classList.remove('d-none')
    document.querySelector('#tabProyectos').classList.add('d-none')
  } else {
    // Si click en Proyectos cambiamos pestaña activa
    document.querySelector('.fichaProyectos').classList.add('active')
    document.querySelector('.fichaUsuarios').classList.remove('active')
    selectUsuarios = false
    console.log('tabProyectos')
    document.querySelector('#tabProyectos').classList.add('d-block')
    document.querySelector('#tabProyectos').classList.remove('d-none')
    document.querySelector('#tabUsuarios').classList.add('d-none')
  }
  // Actualizamos los datos en el panel central
  pintaProyectos(datosProyectos)
  pintaUsuarios(datosUsuarios)
})
```

## **Funciones para Pintar Datos en Tablas**

Esta función (pintaProyectos) se encarga de generar y mostrar la tabla de proyectos en la interfaz de usuario, igual que hacíamos en proyectos.js

- La función recibe un array de proyectos filtrados como argumento (proyectosFiltrados).
- Se construye el HTML de la tabla de proyectos mediante concatenación de cadenas.
- Para cada proyecto en proyectosFiltrados, se genera una fila de datos en la tabla.
- Finalmente, el HTML resultante se inyecta en el elemento con el id tabProyectos.

adminVista.js

```
// *** FUNCIÓN PARA PINTAR TABLA PROYECTOS A PARTIR DE ARRAY datos ***
const pintaProyectos = (proyectosFiltrados) => {
  let tablaProyectos = // html
  `
  <!-- Tabla de proyectos -->
  <table
    class="table table-hover align-middle mt-3"
    style="min-width: 1000px"
  >
    <thead>
      <tr>
        <!-- Encabezados de la tabla -->
      </tr>
    </thead>
    <tbody>
  `
  // Para cada proyecto en el array 'proyectosFiltrados'
  proyectosFiltrados.forEach(proyecto => {
    // Genera filas de datos de proyecto en la tabla
  })
  tablaProyectos += // html
  `
    </tbody>
  </table>
  `
  // Inyecta el resultado en el contenedor con el id 'tabProyectos'
  document.querySelector('#tabProyectos').innerHTML = tablaProyectos
}
```

## **Filtro de Búsqueda**

Este bloque de código es identico al de proyectos.js:

adminVista.js

```
// *** FILTRO PARA BUSCADOR ***
// Capturamos el input de búsqueda
const inputBusqueda = document.getElementById('inputBusqueda')
// Agregamos un evento de escucha para el evento de entrada en el input de búsqueda
inputBusqueda.addEventListener('input', () => {
  // Capturamos el texto de búsqueda del input, conviértelo a minúsculas y elimina espacios en blanco al principio y al final
  const textoBusqueda = inputBusqueda.value.toLowerCase().trim()
  // Filtramos los proyectos que coinciden con el texto de búsqueda en cualquier campo
  let informacion = []
  if (selectUsuarios) {
    informacion = datosUsuarios
  } else {
    informacion = datosProyectos
  }
  const informacionFiltrada = informacion.filter(proyecto => {
    // Itera sobre las propiedades (campos) de cada proyecto
    for (const key in proyecto) {
      // Obtenemos el valor del campo actual
      const valorCampo = proyecto[key]
      // Verificamos si el valor del campo es una cadena y si contiene el texto de búsqueda
      if (typeof valorCampo === 'string' && valorCampo.toLowerCase().includes(textoBusqueda)) {
        // Si hay coincidencia, devuelve true para incluir el proyecto en la lista filtrada
        return true
      }
    }
    // Si no se encontró coincidencia en ningún campo, devuelve false para excluir el proyecto
    return false
  })
  // Volvemos a pintar los datos con los proyectos o usuarios filtrados por el buscador
  if (selectUsuarios) {
    pintaUsuarios(informacionFiltrada)
  } else {
    pintaProyectos(informacionFiltrada)
  }
})
// Borrar datos del input del buscador
document.querySelector('#borrarBuscador').addEventListener('click', () => {
  // Borramos contenido del buscador
  document.getElementById('inputBusqueda').value = ''
  // Actualizamos array con todos los proyectos
  // const proyectosFiltrados = datos
  // Actualizamos los datos en el panel central
  pintaProyectos(datosProyectos)
  pintaUsuarios(datosUsuarios)
})
```

## **Funciones para Borrar usuario y Enviar datos modificados**

Vamos a programar la lógica para el envío de datos si se ha hecho alguna modificación y la eliminación de usuarios.

- Primero vamos a detectar cuando alguien escribe en uno de los campos de la tabla para mostrar información de validación. Para ello vamos a agregamos un evento de escucha al formulario ('change') para comprobar si se ha validado correctamente. Si no, se muestra un mensaje de error.
- La función enviaDatos se utiliza para recopilar datos de un formulario correspondiente a la edición de usuarios y simular el envío a una base de datos (a través de alertas y registros en la consola).
- La función borrarUsuario se utiliza para simular la eliminación de un usuario con un mensaje de alerta.

adminVista.js

```
// *** VALIDACION DE FORMULARIOS CON BOOTSTRAP ***
formulario.addEventListener('change', (e) => {
  // Comprobamos si el formulario no valida
  if (!formulario.checkValidity()) {
    console.log('No valida')
    // Y añadimos la clase 'was-validate' para que se muestren los mensajes
    formulario.classList.add('was-validated')
  }
})

// Función para enviar datos a la base de datos
function enviaDatos (id) {
  // capturamos los datos del tr correspondiente al botón pulsado
  const proyectoEditado = {
    imagen: document.querySelector('#urlImagen_' + id).value,
    nombre: document.querySelector('#nombreUsuario_' + id).value,
    apellidos: document.querySelector('#apellidosUsuario_' + id).value,
    estado: document.querySelector('#estado_' + id).value,
    email: document.querySelector('#email_' + id).value
  }
  alert(`Enviando a la base de datos el objeto con id = ${usuario.user_id}`)
  console.log(`Enviando a la base de datos el objeto con id = ${usuario.user_id}`, proyectoEditado)
}
// Función para borrar registro de la base de datos
function borrarUsuario (id) {
  alert('Borrando usuario ' + id)
}
```

## **Gestión de Eventos para la tabla proyectos**

Vamos con los eventos de esta vista de proyectos.

Utilizamos de nuevo la técnica de delegación de eventos (ya que estos datos se regeneran constantemente) para detectar clics en el elemento principal ('main') en lugar de asignar eventos a cada botón individualmente.

Cuando se hace clic en un botón con la clase 'botonAdmin', se captura el botón y se obtiene su ID desde el dataset.

- Si el botón también tiene la clase 'botonEditar', se asume que se está editando un proyecto y se realiza una acción (como redirigir a la edición del proyecto).
- Si el botón tiene la clase 'botonBorrar', se asume que se está borrando un proyecto, aunque la acción real no está implementada en este código.

adminVista.js

```
// *** BOTONES DE EDICIÓN Y BORRADO DE PROYECTOS ***
// Detectamos clic sobre main (Usamos delegación de eventos porque la tabla y tarjetas se actualizan constantemente en el DOM)
document.querySelector('main').addEventListener('click', (event) => {
  // Si hemos pulsado sobre uno de los botones
  if (event.target.classList.contains('botonAdmin')) {
    const boton = event.target
    // Capturamos el id de su dataset
    const id = boton.dataset.id
    if (boton.classList.contains('botonEditar')) {
      // Si se trata de editar
      console.log('Editar proyecto ' + id)

      // Cargamos la vista para editar proyecto pasando como parámetro el id
      window.location = `#/proyectoEditar/${id}`
    }
    if (boton.classList.contains('botonBorrar')) {
      // Si se trata de borrar
      console.log('Borrar proyecto ' + id)

      // *** AQUÍ VA LA FUNCIÓN QUE BORRA DE LA BASE DE DATOS EL PROYECTO CORRESPONDIENTE AL ID ***
    }
  }
})
```

## **Gestión de Eventos para la tabla usuarios**

Para gestionar los eventos en esta tabla usaremos una vez más la delegación de eventos, esta vez sobre el formulario que envuelve la tabla.

- Si hacemos click en 'Actualizar': En primer lugar vamos adaptar la lógica para la validación de los datos del formulario con bootstrap para mostrar mensajes si tratamos de enviar las modificaciones haciendo click sobre el botón 'Actualizar'
- Si hacemos click en eliminar (botón de la basura), capturaremos el botón en cuestión y, mediante `const tr = e.target.parentNode.parentNode` capturaremos el `<tr></tr>` que corresponde al usuario en cuestión. De su dataset obtendremos el id de usuario para poder llamar a la función que borra el usuario. (Nosotros no actuaremos todavía sobre la base de datos pero si que vamos a hacer desaparecer la fila con la clase 'd-none')
- Si hacemos click en 'Editar la imagen', cargaremos un componente nuevo (que tenemos que programar aún), muy similar al de editar usuario, pero que permitirá cambiar a la vez que visualizamos, la imagen del perfil de ese usuario. A este componente le pasaremos, en su método script() los parámetros necesarios para que el componente pueda cargar la información y sepa a que usuario corresponde `editarImagenPerfil.script(urlAvatar, urlInputAvatar, id)`

adminVista.js

```
// *************** PARA EL TAB DE USUARIOS ********

    // Capturamos el formulario para edición de usuarios
    const formulario = document.querySelector('#formAdminUsuarios')
    // Gestión de click sobre botones dentro del formulario
    formulario.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()

      // Si hacemos click sobre el botonActualizar
      if (e.target.classList.contains('botonActualizar') && formulario.checkValidity()) {
        const id = e.target.dataset.id
        enviaDatos(id)
      } else {
        formulario.classList.add('was-validated')
      }

      // Si hacemos click sobre Borrar registro
      if (e.target.classList.contains('botonEliminar')) {
        const tr = e.target.parentNode.parentNode
        // ocultar tr
        tr.classList.add('d-none')
        const id = e.target.dataset.id
        borrarUsuario(id)
      }

      // Si hacemos click sobre Editar imagen avatar
      if (e.target.classList.contains('botonEditarImagen')) {
        // Capturamos datos para enviar al modal
        const urlAvatar = e.target.dataset.urlavatar
        const urlInputAvatar = e.target.dataset.urlinputavatar
        const id = e.target.dataset.id
        // Abrimos ventana de edición de perfil (del componente editarImagenPerfil)
        editarImagenPerfil.script(urlAvatar, urlInputAvatar, id)
      }
    })
```

## **Componente editarImagenPerfil**

Y este sería el componente para editar la imagen del perfil:

editarImagenPerfil.js

```
import adminVista from '../vistas/adminVista'
export const editarImagenPerfil = {
  template: // html
  `
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
    console.log('modal editar imagen perfil cargado:', urlAvatar)
    document.querySelector('#urlImagenUsuario').value = urlAvatar
    // Capturamos la url del input y actualizamos la imagen
    const imagenUsuario = document.querySelector('#imagenUsuario')
    imagenUsuario.style.backgroundImage = `url(${urlAvatar})`

    // modificación de imagen al cambiar input
    document.querySelector('#urlImagenUsuario').addEventListener('input', () => {
      urlAvatar = document.querySelector('#urlImagenUsuario').value
      imagenUsuario.style.backgroundImage = `url(${urlAvatar})`
    })

    // Boton enviar
    document.querySelector('#botonActualizarImagen').addEventListener('click', () => {
      document.querySelector(`#${urlInputAvatar}`).value = urlAvatar

      // ***** AQUÍ HAY QUE ACTUALIZAR LA BASE DE DATOS CON LA IMAGEN
      console.log('Actualizando base de datos: '+user_id);
      adminVista.script()
    })
  }
}
```

Nuestro componente para edición de imagenes tendría esta pinta:

![Modal imagen perfil](https://carrebola.github.io/vanillaPill/assets/images/modalimagenperfil-17747305ae0d15008fd3a3c9c4d202c4.png)

# **Componente EditarPerfil**

Para programar este componente lo que debemos hacer es capturar los datos del localstorage del usuario que tiene la sesión abierta e inyectarlos dentro del propio template que, recordemos, es un formulario dentro de una venta modal.

Todo el código que usamos en la lógica prácticamente es el mismo que hemos usado en las vistas anteriores.

Simplemente tenemos la validación de bootstrap y la función que captura los datos de los inputs y los envia, (todavía de forma figurada) a la base de datos.

editarPerfil.js

```
import { ls } from './funciones'
export const editarPerfil = {
  template: // html
  `
  <!-- Ventana modaledición perfil -->
  <div
    class="modal fade"
    id="modalEditarPerfil"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <!-- Formulario de edición de perfil -->
    <form novalidate id="formularioEditarPerfil" action="">
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
                    class="imagen mx-auto mb-1 rounded-circle"
                    style="
                      background-image: url(${ls.getUsuario().avatar});
                      width: 200px;
                      height: 200px;
                      background-size: cover;
                      background-position: center;
                    "
                  ></div>

                  <!-- Imagen de perfil -->
                  <label for="imagen" class="form-label mt-3">URL imagen:</label>
                  <input
                    id="avatar"
                    type="url"
                    class="form-control"
                    value="${ls.getUsuario().avatar}"
                  />
                  <div class="invalid-feedback">La url no es correcta</div>
                </div>

                <div class="">
                  <!-- Nombre -->
                  <label for="nombrePerfil" class="form-label">Nombre:</label>
                  <input required id="nombrePerfil" type="text" class="form-control" value="${ls.getUsuario().nombre}" />
                  <div class="invalid-feedback">El nombre es requerido</div>
                  <!-- Apellidos -->
                  <label for="apellidosPerfil" class="form-label">Apellidos:</label>
                  <input id="apellidosPerfil" type="text" class="form-control" value = "${ls.getUsuario().apellidos}" />

                  <!-- Email -->
                  <label for="emailPerfil" class="form-label">Email:</label>
                  <input required id="emailPerfil" type="email" class="form-control" value = "${ls.getUsuario().email}" />
                  <div class="invalid-feedback">El formato no es correcto</div>

                  <!-- Contraseña -->
                  <label for="passPerfil" class="form-label mt-3">Nueva contraseña:</label>
                  <input

                    minlength="6"
                    id="passPerfil"
                    type="password"
                    class="form-control"
                  />
                  <div class="invalid-feedback">
                    La contraseña debe ser de 6 caracteres como mínimo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button id="enviarPerfilEditado" data-id = ${ls.getUsuario().user_id} type="submit" class="btn btn-primary">Guardar cambios</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  `,
  script: () => {
    console.log('script editar perfil cargado')
    // Validación bootstrap
    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formularioEditarPerfil')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
    // Comprobamos si el formulario no valida
    // Detenemos el evento enviar (submit)
      event.preventDefault()
      event.stopPropagation()
      if (!formulario.checkValidity()) {
        // formulario no valida
      } else {
        //* ** ENVIAMOS DATOS A LA BASE DE DATOS */
        enviaDatos()
      }
      // Y añadimos la clase 'was-validate' para que se muestren los mensajes
      formulario.classList.add('was-validated')
    })

    // Función para enviar datos a la base de datos
    function enviaDatos () {
      const perfilEditado = {
        avatar: document.querySelector('#avatar').value,
        nombre: document.querySelector('#nombrePerfil').value,
        apellidos: document.querySelector('#apellidosPerfil').value,
        email: document.querySelector('#emailPerfil').value,
        contraseña: document.querySelector('#passPerfil').value

      }
      alert(`Enviando a la base de datos el objeto con id = ${ls.getUsuario().user_id}`)
      console.log(`Enviando a la base de datos el objeto con user_id = ${ls.getUsuario().user_id}`, perfilEditado)
    }
  }
}
```

# **Vista para Nuevo proyecto, ver detalle y editar**

## **Ver detalle del proyecto**

Esta vista es bastante sencilla.

En primer lugar necesitamos modificar el template para asignar ids y clases a los elementos (párrafos, imagen, etc) en los que debemos inyectar los datos procedentes del proyecto corresondiente.

proyectoNuevo.js

```
export default {
  template: // html
  `
  <div class="container">
    <h1 class="mt-5">Detalle del proyecto</h1>
    <div class="d-flex justify-content-end">
      <button id="botonVolver" class="btn btn-outline-secondary mt-5 bi bi-arrow-bar-left">
        Volver
      </button>
    </div>

    <div class="row mt-2">
      <div class="col-12 col-md-4 mb-3">
        <img id="imagenJuego" src="images/juego.jpg" alt="" class="img-fluid">
      </div>
      <div class="col-12 col-md-8">
        <p>
          <p><strong>Nombre: </strong><span id="nombreJuego">TETRIS</span></p>
          <p><strong>Descripción: </strong><span id="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi dicta iste debitis recusandae perspiciatis quae. Eius impedit saepe autem velit voluptate, odio sequi expedita nisi est molestiae quo quisquam!</span></p>
          <p><strong>Estado: </strong><span id="estado">Estado</span></p>
          <p><strong>Fecha: </strong><span id="fecha">12/12/2023</span></p>
          <p><strong>Enlace: </strong><span id="enlace">http://www.enlaceapp.com</span></p>
          <p><strong>Repositorio: </strong><span id="repositorio">carrebola.github.com/123456</span></p>
        </p>
      </div>
    </div>
    <div class="container fixed-bottom d-flex justify-content-end" style="padding: 0px 0px 100px 0px">
      <button
        id="botonEditarDetalle"
        data-id=""
        class="btn btn-success rounded-circle fs-3 shadow bi bi-pencil router-link"
        style="width: 50px"
      >
      </button>
    </div>
  </div>

```

En el lado de la lógica vamos a hacer lo siguiente:

- Primero vamos a simular que hacemos una consulta a la bd con el id del proyecto correspondiente. Para ello tomaremos el array con todos los proyectos y lo filtraremos para el id en cuestión

```
// Simulamos la consulta a un proyecto por id filtrando de todos nuestros proyectos de prueba el que tiene el id que hemos recibido como parámetro
  const proyectoArray = proyectos.filter(p => p.id == id)
  const proyecto = proyectoArray[0]
```

- Ahora vamos a modificar la fecha para poder introducirla en nuestro input de tipo date. Piensa que nosotros tenemos un formato yy-mm-ddThh::mm::ss y necesitamos yy-mm-dd.

```
// Modificamos el formato de la fecha quedandonos solo con el yy-mm-dd
  const fecha = proyecto.created_at
  const fechaCorta = fecha.split('T')[0]
```

- Inyectamos los datos

```
// Inyectamos los datos en la vista
  document.querySelector('#imagenJuego').setAttribute('src', proyecto.imagen)
  document.querySelector('#nombreJuego').innerHTML = proyecto.nombre
  document.querySelector('#descripcion').innerHTML = proyecto.descripcion
  document.querySelector('#estado').innerHTML = proyecto.estado
  document.querySelector('#fecha').innerHTML = fechaCorta
  document.querySelector('#enlace').innerHTML = proyecto.enlace
  document.querySelector('#repositorio').innerHTML = proyecto.repositorio
```

- Añadimos el id del proyecto al botón editar para que al pulsarlo podamos llamar la vista en cuestión y pasarle el id:

```
// Añadimos el id en data-id al botón editar para que al detectar el click podamos llamar a la vista de edición pasandole el id en cuestión
  document.querySelector('#botonEditarDetalle').setAttribute('data-id', proyecto.id)
```

- Y gestionamos los eventos de los botones: volver atrás y editar cargando las vista que corresponda con `window.location`

```
// Añadimos el id en data-id al botón editar para que al detectar el click podamos llamar a la vista de edición pasandole el id en cuestión
  document.querySelector('#botonEditarDetalle').setAttribute('data-id', proyecto.id)

  // Boton volver atras
  document.querySelector('#botonVolver').addEventListener('click', () => {
    // Carga la url anterior que encuentra en el historial
    window.history.back()
  })

  // Boton editar
  document.querySelector('#botonEditarDetalle').addEventListener('click', (e) => {
    const id = e.target.dataset.id
    window.location = `#/proyectoEditar/${id}`
  })
```

### **Este sería el código completo**

```
import { proyectos } from '../bd/datosPrueba'

export default {
  template: // html
  `
  <div class="container">
  <h1 class="mt-5">Detalle del proyecto</h1>
  <div class="d-flex justify-content-end">
    <bottom id="botonVolver" class="btn btn-outline-secondary mt-5 bi bi-arrow-bar-left">
      Volver</bottom>
  </div>

  <div class="row mt-2">
    <div class="col-12 col-md-4 mb-3">
      <img id="imagenJuego" src="images/juego.jpg" alt="" class="img-fluid">
    </div>
    <div class="col-12 col-md-8">
      <p>
        <p><strong>Nombre: </strong><span id="nombreJuego">TETRIS</span></p>
        <p><strong>Descripción: </strong><span id="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam modi dicta iste debitis recusandae perspiciatis quae. Eius impedit saepe autem velit voluptate, odio sequi expedita nisi est molestiae quo quisquam!</span></p>
        <p><strong>Estado: </strong><span id="estado">Estado</span></p>
        <p><strong>Fecha: </strong><span id="fecha">12/12/2023</span></p>
        <p><strong>Enlace: </strong><span id="enlace">http://www.enlaceapp.com</span></p>
        <p><strong>Repositorio: </strong><span id="repositorio">carrebola.github.com/123456</span></p>
      </p>
    </div>
  </div>
  <div
    class="container fixed-bottom d-flex justify-content-end"
    style="padding: 0px 0px 100px 0px"
  >
    <button
      id="botonEditarDetalle"
      data-id=""
      class="btn btn-success rounded-circle fs-3 shadow bi bi-pencil router-link"
      style="width: 50px"
    >

    </button>
  </div>

</div>
  `,
  script: (id) => {
    console.log('Vista proyectoDetalle cargada')
    console.log(proyectos, id)

    // Simulamos la consulta a un proyecto por id filtrando de todos nuestros proyectos de prueba el que tiene el id que hemos recibido como parámetro
    const proyectoArray = proyectos.filter(p => p.id == id)
    const proyecto = proyectoArray[0]

    // Modificamos el formato de la fecha quedandonos solo con el yy-mm-dd
    const fecha = proyecto.created_at
    const fechaCorta = fecha.split('T')[0]

    // Inyectamos los datos en la vista
    document.querySelector('#imagenJuego').setAttribute('src', proyecto.imagen)
    document.querySelector('#nombreJuego').innerHTML = proyecto.nombre
    document.querySelector('#descripcion').innerHTML = proyecto.descripcion
    document.querySelector('#estado').innerHTML = proyecto.estado
    document.querySelector('#fecha').innerHTML = fechaCorta
    document.querySelector('#enlace').innerHTML = proyecto.enlace
    document.querySelector('#repositorio').innerHTML = proyecto.repositorio

    // Añadimos el id en data-id al botón editar para que al detectar el click podamos llamar a la vista de edición pasandole el id en cuestión
    document.querySelector('#botonEditarDetalle').setAttribute('data-id', proyecto.id)

    // Boton volver atras
    document.querySelector('#botonVolver').addEventListener('click', () => {
      window.history.back()
    })

    // Boton editar
    document.querySelector('#botonEditarDetalle').addEventListener('click', (e) => {
      const id = e.target.dataset.id
      window.location = `#/proyectoEditar/${id}`
    })
  }
}

```

## **Vista para nuevo proyecto**

Esta es aún más simple. No hay nada de programación que no hayamos explicado ya con anterioridad.

Quizá como detalle diferente, podemos ver como en el template incluimos la ejecución de javascript de forma directa, utilizando ${}, para cargar la fecha con el formato apropiado:

```
<input
  id="fecha"
  type="date"
  class="form-control"
  value="${(new Date()).toISOString().split('T')[0]}"
/>

```

### **Aquí tenemos el código completo de la vista**

proyectoNuevoVista.js

```
export default {
  template: // html
  `
  <div class="container">
  <h1 class="mt-5">Nuevo proyecto</h1>
  <div class="d-flex justify-content-end">
    <bottom id="botonVolver" class="btn btn-outline-secondary mt-5 bi bi-arrow-bar-left">
      Volver</bottom>
  </div>

  <div class="row mt-2">
    <div class="col-12 col-md-4 pt-2 mb-3">
      <img src="images/imagenVacia.png" alt="" class="img-fluid" />
      <label class="form-label mt-2" for="urlImagen"
          ><strong>URL imagen: </strong></label
        >
        <input
          id="urlImagen"
          type="text"
          class="form-control"
          value="http://enlaceImagen.com"
        />
    </div>
    <div class="col-12 col-md-8">
      <!-- Formulario nuevo proyecto -->
      <form id="formularioNuevoProyecto" action="" class="form" novalidate>
        <!-- Nombre proyecto -->
        <label class="form-label" for="nombreJuego"><strong>Nombre: </strong></label>
        <input
          required
          id="nombreJuego"
          type="text"
          value=""
          class="form-control"
          placeholder="Escribe aquí el nombre del juego"
        />

        <!-- Descripción -->
        <label class="form-label mt-2" for="descripcion"
          ><strong>Descripción: </strong></label
        >
        <textarea
          id="descripcion"
          class="form-control"
          rows="4"
          placeholder="Descripción del juego"
        ></textarea
        >

        <!-- Estado -->
        <label class="form-label mt-2" for="estado"
          ><strong>Estado: </strong></label
        >
        <select required id="estado" class="form-control">
          <option value="estado">En desarrollo</option>
          <option value="otro estado">Finalizado</option>
        </select>

        <!-- Fecha -->
        <label class="form-label mt-2" for="fecha"
          ><strong>Fecha: </strong></label
        >
        <input
          id="fecha"
          type="date"
          class="form-control"
          value="${(new Date()).toISOString().split('T')[0]}"
        />

        <!-- Enlace al proyecto -->
        <label class="form-label mt-2" for="enlace"
          ><strong>Enlace: </strong></label
        >
        <input
          id="enlace"
          type="url"
          class="form-control"
          value="http://enlace.com"
        />

        <!-- Repositorio -->
        <label class="form-label mt-2" for="repositorio"
          ><strong>Repositorio: </strong></label
        >
        <input
          id="repositorio"
          type="text"
          class="form-control"
          value="user.github.com/123456"
        />

        <!-- Submit -->
        <input
          type="submit"
          class="btn btn-success mt-3"
          value="Subir proyecto"
        />
      </form>
    </div>
  </div>
</div>
  `,
  script: () => {
    // Boton volver atras
    document.querySelector('#botonVolver').addEventListener('click', () => {
      window.history.back()
    })

    // Validación bootstrap
    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formularioNuevoPRoyecto')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
      // Detenemos el evento enviar (submit)
      event.preventDefault()
      event.stopPropagation()
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
      // Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add('was-validated')
      } else {
        enviaDatos()
      }
    })

    // Función para enviar datos a la base de datos
    function enviaDatos () {
      const proyectoEditado = {
        imagen: document.querySelector('#urlImagen').value,
        nombre: document.querySelector('#nombreJuego').value,
        descripcion: document.querySelector('#descripcion').value,
        fecha: document.querySelector('#fecha').value,
        estado: document.querySelector('#estado').value,
        enlace: document.querySelector('#enlace').value,
        repositorio: document.querySelector('#repositorio').value
      }
      alert('Enviando proyecto a la base de datos')
      console.log('Enviando a la base de datos ', proyectoEditado)
    }
  }
}
```

## **Vista para editar proyecto**

Esta vista es una mezcla entre la vista detalle y la vista para nuevo proyecto.

Lo que hacemos cuando llamamos a esta vista, es pasarle el id, de manera que cargaremos todos los datos, como en la vista detalle, pero esta vez utilizando un formulario (como en la vista nuevo proyecto).

### **Este sería el código completo**

proyectoEditarVista

```
import { proyectos } from '../bd/datosPrueba'

export default {
  template: // html
  `
  <div class="container">
  <h1 class="mt-5">Edición de proyecto</h1>
  <div class="d-flex justify-content-end">
    <bottom id="botonVolver" class="btn btn-outline-secondary mt-5 bi bi-arrow-bar-left router-link">
      Volver</bottom
    >
  </div>
  <form novalidate id="formularioEditarProyecto" action="" class="form">
    <div class="row mt-2">
      <div class="col-12 col-md-4 pt-2 mb-3">
        <img id="imagenJuego" src="images/juego.jpg" alt="" class="img-fluid" />
        <label class="form-label mt-2" for="urlImagen"
          ><strong>URL imagen: </strong></label
        >
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
        <!-- Formulario nuevo proyecto -->

        <!-- Nombre proyecto -->
        <label class="form-label" for="nombre"><strong>Nombre: </strong></label>
        <input
          required
          id="nombreJuego"
          type="text"
          value="Nombre Autor"
          class="form-control"
        />
        <div class="invalid-feedback">
          Debe tener un nombre de proyecto
        </div>

        <!-- Descripción -->
        <label class="form-label mt-2" for="descripcion"
          ><strong>Descripción: </strong></label
        >
        <textarea id="descripcion" class="form-control" rows="4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sunt? Recusandae labore at voluptatem tempore incidunt distinctio eaque? Est aspernatur laudantium itaque ullam numquam autem dolor quia amet eum consectetur.</textarea
        >

        <!-- Estado -->
        <label class="form-label mt-2" for="estado"
          ><strong>Estado: </strong></label
        >
        <select required id="estado" class="form-control">
          <option value="Cerrado">Cerrado</option>
          <option value="En desarrollo">En desarrollo</option>
        </select>
        <div class="invalid-feedback">
          Debes definir un estado
        </div>

        <!-- Fecha -->
        <label class="form-label mt-2" for="fecha"
          ><strong>Fecha: </strong></label
        >
        <input id="fecha" type="date" class="form-control"  />
        <div class="invalid-feedback">
          El formato no es correcto
        </div>

        <!-- Enlace al proyecto -->
        <label class="form-label mt-2" for="enlace"
          ><strong>Enlace: </strong></label
        >
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
        <label class="form-label mt-2" for="repositorio"
          ><strong>Repositorio: </strong></label
        >
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
  script: (id) => {
    // Simulamos la consulta a un proyecto por id
    const proyectoArray = proyectos.filter(p => p.id == id)
    const proyecto = proyectoArray[0]

    // Transformamos la fecha en un formato yy-mm-dd
    const fecha = proyecto.created_at
    const fechaCorta = fecha.split('T')[0]

    // Insertamos los datos en el formulario
    document.querySelector('#imagenJuego').setAttribute('src', proyecto.imagen)
    document.querySelector('#urlImagen').value = proyecto.imagen
    document.querySelector('#nombreJuego').value = proyecto.nombre
    document.querySelector('#descripcion').value = proyecto.descripcion
    document.querySelector('#estado').value = proyecto.estado
    document.querySelector('#fecha').value = fechaCorta
    console.log(fechaCorta)
    document.querySelector('#enlace').value = proyecto.enlace
    document.querySelector('#repositorio').value = proyecto.repositorio

    // Boton volver atras
    document.querySelector('#botonVolver').addEventListener('click', () => {
      window.history.back()
    })

    // Actualización de la imagen a partir de la urlImagen
    // Capturamos input
    const inputUrl = document.querySelector('#urlImagen')
    // Detectamos cambios en su value
    inputUrl.addEventListener('input', () => {
      const imagen = document.querySelector('#imagenJuego')
      // Actualizamos el atributo src y por lo tanto la imagen
      imagen.setAttribute('src', inputUrl.value)
    })

    // Validación BOOTSTRAP
    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formularioEditarProyecto')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
      // Detenemos el evento enviar (submit)
      event.preventDefault()
      event.stopPropagation()
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        // Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add('was-validated')
      } else {
        //* ** ENVIAMOS DATOS A LA BASE DE DATOS */
        enviaDatos()
      }
    })

    // Función para enviar datos a la base de datos
    function enviaDatos () {
      const proyectoEditado = {
        imagen: document.querySelector('#urlImagen').value,
        nombre: document.querySelector('#nombreJuego').value,
        descripcion: document.querySelector('#descripcion').value,
        estado: document.querySelector('#estado').value,
        enlace: document.querySelector('#enlace').value,
        repositorio: document.querySelector('#repositorio').value
      }
      alert(`Enviando a la base de datos el objeto con id = ${proyecto.id}`)
      console.log(`Enviando a la base de datos el objeto con id = ${proyecto.id}`, proyectoEditado)
    }
  }
}

```

# **Diseño de la base de datos**

## **Diagrama entidad - relación**

Vamos a comenzar a trabajar en el backend. Tal y como comentamos en el apartado de _Arquitectura y tecnologías_, el backend lo implementaremos utilizando Supabase como servicio. Supabase trabaja con bases de datos relacionales por lo tanto crearemos modelos basados en tablas.

En primer lugar, para diseñar nuestra estructura de bases de datos, haremos uso, una vez más, de los diagramas UML y crearemos un diagrama de entidad - relación.

¿Qué es un diagrama entidad/relación?

Un diagrama de entidad-relación (ER) es una herramienta de modelado de datos utilizada para describir la estructura de una base de datos en términos de entidades y las relaciones entre ellas. Estas entidades pueden ser personas, lugares, objetos, eventos o conceptos, y las relaciones entre ellas representan las conexiones lógicas entre los datos.

Más información sobre diagramas E-R
En un diagrama ER, las entidades se representan como rectángulos y las relaciones se representan como líneas que conectan los rectángulos. Cada entidad se describe mediante sus atributos, que son las características o propiedades que definen la entidad. Por ejemplo, una entidad "cliente" puede tener atributos como nombre, dirección, número de teléfono, correo electrónico, etc.

Las relaciones entre las entidades se describen mediante la cardinalidad, que indica cuántas entidades están relacionadas y cómo están relacionadas. Las relaciones pueden ser uno-a-uno, uno-a-muchos o muchos-a-muchos, y se indican mediante símbolos especiales que se colocan junto a las líneas que conectan las entidades.

Un diagrama ER es una herramienta útil en el diseño de bases de datos, ya que ayuda a identificar las entidades y las relaciones entre ellas, y a establecer la estructura de la base de datos en términos de tablas, campos y relaciones. Además, también puede ayudar a detectar problemas en el diseño de la base de datos, como redundancias o inconsistencias, y a optimizar la estructura de la base de datos para mejorar el rendimiento y la eficiencia.

Este podría ser nuestro diagrama E-R para la versión 1.0 de nuestro proyecto:

![Diagrama E-R](https://carrebola.github.io/vanillaPill/assets/images/diagramaer1-fff859ccf6762bd69f08d7e3a4420a21.png)

Como podemos observar, este diagrama muestra 3 entidades que se relacionan entre sí.

- La entidad (tabla) USER, que será la tabla que se crea de manera automática en supabase cada vez que se registra un usuario (que incluirá los campos id, created_At, email y otros campos genéricos)
- La entidad PERFIL, que será una tabla asociado a USER con la clave foránea user_id, y que contendrá toda la información del perfil del usuario registrado.
- La entidad PROYECTO que contendrá la información de los proyectos creados por los usuarios.

La entidad PERFIL se relaciona con USER con user_id con una cardinalidad 1 - 1, es decir el perfil pertenece a un usuario y un usuario solo puede tener un perfil.

La entidad USER puede CREAR PROYECTO. La cardinalidad es 1 - n, es decir, un usuario puede crear varios proyectos pero un proyecto solo puede ser creado por un usuario.

Lógicamente, estas relaciones no generan tablas añadidas.

Aquí podemos ver otra versión del mismo diagrama, con una nomenclatura diferente:

![Diagrama de tablas](https://carrebola.github.io/vanillaPill/assets/images/diagramaer2-26db48c2bd6e7ae752a9356af78bce19.png)

Para la versión 1 del proyecto no necesitamos más tablas. Es una estructura sencilla que se irá complicando conforme añadamos funcionalidades.

# **A cerca del Diagrama de clases y el Mapping**

Ya hemos decidido las entidades que necesitamos en la construcción de nuestra base de datos y como se relacionan.

Para representar este diseño hemos empleado un diagrama UML llamado 'Diagrama entidad-relacion'.

Pero tenemos otro diagrama UML mucho más potente, el Diagrama de clases. Éste se utiliza en programación cuando trabajamos con Programación Orientada a Objetos, como va a ser nuestro caso.

## **¿Qué es un diagrama de clases?**

Diagrama de Clases:

El diagrama de clases es una representación visual de las clases, objetos y relaciones en un sistema. Se utiliza en la fase de diseño para ilustrar cómo se organizan las clases, sus atributos y métodos, así como las relaciones entre ellas. El diagrama de clases es un componente clave en la programación orientada a objetos, ya que ayuda a comprender la estructura del software antes de implementarlo.

En un diagrama de clases, las clases representan objetos del mundo real o conceptos en el software, y las relaciones (como asociación, herencia, composición, etc.) describen cómo interactúan estos objetos entre sí.

## **¿Qué es un ORM?**

Por otro lado otro concepto que debemos conocer es el patrón de diseño ORM (Object-Relational Mapping)

ORM (Object-Relational Mapping):

El ORM es un patrón de diseño que permite mapear objetos y sus relaciones en una base de datos relacional. En lugar de escribir consultas SQL directamente, el ORM abstrae la interacción con la base de datos utilizando clases y objetos. Cada clase en el ORM se mapea a una tabla en la base de datos, y las propiedades de la clase se mapean a columnas en la tabla.

En resumen, mientras que el diagrama de clases es una herramienta de diseño para visualizar la estructura y las relaciones de las clases en un sistema, el ORM es una técnica de implementación que permite que esas clases y relaciones se reflejen directamente en la base de datos, lo que facilita el almacenamiento y la recuperación de datos de manera orientada a objetos.

## **¿Y para qué queremos esto?**

Si has entendido los conceptos anteriores (y si no, ¡pregunta!, que para eso me pagan... 😋), la idea es diseñar las clases necesarias para abstraer (que significa _separar_, no te rayes) la programación de nuestra aplicación de la lógica necesaria para acceder a las bases de datos.

Nosotros vamos a utilizar, para acceder al servicio backend de supabase, una API de javascript que nos facilita la propia plataforma de Supabase (ya lo veremos). Pero la idea es que, si creamos esta capa de abstración, en un futuro podríamos sustituir el servicio de Supabase por nuestra propia API Rest basada en otro lenguaje de servidor,como por ejemplo: python, php o el mismo javascript con nodejs.

Es decir, aunque cambiásemos el lado del servidor, la programación del lado del cliente ¡seguiría intacta!. Esta podría suponer una gran ventaja si un día necesitamos escalar nuestro proyecto.

¿Qué es una API Rest?

Una API REST es una forma de hacer que diferentes programas en línea puedan hablar entre sí como si fueran amigos.

Imagina que tienes una máquina expendedora: pones dinero (petición) y recibes una bebida (respuesta). Del mismo modo, cuando envías una petición a una API REST (dinero en la máquina expendedora), obtienes información o realizas una acción (bebida).
En lugar de usar botones en la máquina, usas diferentes palabras como "consigue esto", "agrega eso", "cambia esto" o "borra eso" (verbos HTTP como GET, POST, PUT, DELETE). Y toda la información se organiza como si fuera una dirección (URL) que dice dónde obtener o poner cosas.

Entonces, en resumen, una API REST es como una máquina expendedora para datos en la web: pides cosas, haces cosas y obtienes respuestas, todo a través de un conjunto de reglas y direcciones.

# **Diseño del diagrama de clases**

## **Clases para el ORM**

En primer lugar vamos a construir las clases necesarias para crear nuestro ORM.

Cada clase va a tener:

- unas propiedades que se corresponderán con los campos de la tabla a la que está asociada
- unos métodos que permitiran el acceso y manipulación de los datos de dicha tabla

Por lo tanto, en esta versión, necesitamos tres clases. La clase users, la clase perfiles y la clase proyectos.

Los métodos básico que suelen utilizarse en un ORM comprenden las funcionalidades propias de un CRUD (Create, Read, Update y Delete). Nosotros usaremos los siguientes:

- getAll: Devolverá un objeto con todos los registros de la tabla.
- getById: Devolverá un objeto con los datos del registro que coincida con el campo _id_.
- getByUserId: Devolverá un objeto con los datos del registro que coincida con el campo _user_id_.
- create: Creará una nueva fila con los campos que le pasemos.
- update: Actualizará la fila correspondiente al registro cuyo campo id coincida con el que le pasemos, con los campos que le pasemos.

El diagrama de clases para la clase perfiles quedaría de la siguiente manera:

![Perfiles](https://carrebola.github.io/vanillaPill/assets/images/dcperfiles-1c6beaac99af079dc2f7a60836ad27b0.png)

En este diagrama:

La clase "Perfil" representa los perfiles de tu sistema, con atributos correspondientes a las columnas en la base de datos.

Los métodos estáticos (como getAll, getById, create, update) se pueden llamar directamente en la clase sin crear una instancia previa.

Los atributos (id, created_at, nombre, etc.) son publicos (indicados por el "+") y se inicializan en el constructor.

El método constructor se utiliza para crear una instancia de la clase Perfil a partir de un objeto con datos.

## **Diseño de todas las clases y sus relaciones**

De momento está claro que, cómo mínimmo, necesitamos tantas clases como tablas queramos consultar. Pero eso no es todo, también necesitamos otras clases que nos permitan interactuar con la base de datos a otro nivel (por ejemplo a través de consultas multitabla).

Para diseñar las clases debemos tener presente todas las funcionalidades que se esperan de nuestra app (que en principio deberían conincidir con los casos de uso).

Y para definir todas las funcionalidades de nuestra app necesitarmos revisar todo el trabajo realizado en el momento en el que definimos las especificaciones del proyecto, casos de usos y prototipos.

Hagámoslo, y llegaremos a la conclusión de que necesitamos las siguientes funcionalidades:

Para los usuarios:

- registrar usuario
- iniciar sesión
- cerrar sesión
- borrar usuario
- actualizar usuario
- obtener datos de un usuario (email y contraseña)
- obtener una lista de todos los usuarios registrados

Para los perfiles asociados a estos usuarios:

- obtener datos de un perfil asociado a un usuario (nombre, apellidos, etc)
- obtener una lista de todos los perfiles
- borrar un perfil
- actualizar un perfil

Para los proyectos:

- obtener datos de un proyecto según su id (nombre, descripción, etc)
- obtener datos de un proyecto según el id del usuario que lo ha creado
- obtener una lista de todos los proyectos
- borrar un proyecto
- actualizar un proyecto

Pero eso no es todo. Si nos fijamos en el prototipo que muestra la tabla con todos los proyectos veremos que los datos mostrados son el resultado de cruzar la tabla _proyectos_ con la tabla _perfiles_, es decir, de una consulta multitabla. De esta funcionalidad derivará una nueva clase llamada _proyectoDetalle_. Y ocurre algo parecido con la tabla perfil.

Os lo vuelo a explicar después, con más detalle.

Ahora toca diseñar el diagrama de clases tal y como nos lo explicaron en el módulo de 'Entornos de desarrollo'. El resultado final sería algo así:

## **Diagrama de clases**

**Diagrama de clases**

![Diagrama de clases](https://carrebola.github.io/vanillaPill/assets/images/dc-1b2b47904518da02ba6c90fd8ef20e38.svg)

_Diseñado con GitMind ([https://gitmind.com/app/docs/fgi5pva1](https://gitmind.com/app/docs/fgi5pva1))_

Como puedes observar: La clase _Users_ representa la tabla _users_, la clase _Perfiles_ representa a la tabla _perfiles_ y la clase _Proyectos_ representa a la tabla _proyectos_.

Cada una tiene las mismas propiedades que tienen los campos de las tablas.

Por otro lado, tenemos las clases _Perfil_detalle_ y _Proyecto_detalle_. Éstas son clases heredadas de _Perfiles_ y _Proyectos_ respectivamente y tienen la peculiaridad de que incluyen algún atributo extra y tres nuevos métodos.

Os explico el por qué de estas clases:

Si revisamos el boceto donde se muestran todos los proyectos, podemos ver que en la tabla se muestra, en cada fila, la información del proyecto junto con el nombre del autor.

![prototipo proyetos](https://carrebola.github.io/vanillaPill/assets/images/proyectos-ddb8f57183c3d3b48cea380630424609.png)

Los métodos de la clase _Proyectos_ solo incluye los campos de la tabla _proyectos_. Pero en la tabla proyectos no aparece el nombre del autor sino su user_id.

Si queremos un método capaz de obtener toda la información (resultado de una consulta que combina dos tablas), necesitamos un método nuevo: el método _getDetalleAll()_.

Y como este método nos retorna información que no está contemplada en las propiedades de la clase _Proyectos_, nos vemos obligado a crear una clase nueva (que heredada de la clase _Proyectos_), con dos propiedades nuevas _nombre_autor_ y _apellidos_autor_ y varios métodos añadidos: _getDetalleAll()_, _getDetalleById(id: number)_ y _getDetallaByUserId(iser_id: UUID)_

Y con estas clases ya podemos crear nuestra capa de abstracción entre la programación de la app y la lógica para acceder a los datos de base de datos.

# **Supabase como servicio backend**

Supabase es una plataforma de desarrollo de código abierto que se centra en la creación de aplicaciones web y móviles con una base de datos. Proporciona una variedad de herramientas y servicios que facilitan el proceso de desarrollo al ofrecer:

- una base de datos PostgreSQL escalable
- autenticación segura
- almacenamiento de archivos
- API REST y GraphQL entre otros componentes.

Más información sobre SUPABASE

Supabase se ha creado con el objetivo de simplificar el proceso de desarrollo de aplicaciones, proporcionando a los desarrolladores una infraestructura sólida para la gestión de bases de datos y autenticación, así como otras características esenciales para el desarrollo moderno de aplicaciones web y móviles.

Características destacadas de Supabase

Algunas de las características clave de Supabase incluyen:

- Base de datos PostgreSQL: Supabase ofrece una base de datos PostgreSQL completamente gestionada y escalable en la nube. Esto permite a los desarrolladores almacenar, recuperar y administrar datos de manera eficiente.
- Autenticación: Proporciona capacidades de autenticación y autorización, lo que facilita la implementación de sistemas de registro y acceso seguros para tus aplicaciones.
- API REST y GraphQL: Ofrece una API REST y una API GraphQL para interactuar con los datos almacenados en la base de datos. Esto permite a los desarrolladores diseñar y crear endpoints personalizados para sus aplicaciones.
- Almacenamiento de archivos: Supabase permite a los usuarios almacenar y administrar archivos en la nube, lo que es útil para aplicaciones que requieren cargar, almacenar y acceder a archivos multimedia.
- Eventos en tiempo real: Ofrece notificaciones en tiempo real basadas en cambios en la base de datos. Esto es útil para crear aplicaciones en tiempo real, como chats y paneles de control en vivo.
- Integraciones y extensibilidad: Supabase puede integrarse con otras herramientas y servicios, lo que permite una mayor flexibilidad en el desarrollo de aplicaciones.
- Código abierto: Supabase es un proyecto de código abierto, lo que significa que su código fuente es accesible para la comunidad. Esto fomenta la colaboración y permite a los desarrolladores personalizar y contribuir al proyecto.
- Interfaz de línea de comandos (CLI): Proporciona una CLI que facilita la configuración y administración de proyectos de Supabase.

¿Cuánto cuesta Supabase ?

Supabase cuenta con un plan gratuito para sitios web simples, con un límite de dos proyectos, perfecto para probar la plataforma. No obstante, también ofrece un plan PRO de U$25 por proyecto, ideal para la creación de aplicaciones productivas y escalables. [https://supabase.com/](https://supabase.com/)

tip

¡Pero ahora Supabase es mucho más! Durante los meses de julio y agosto de 2023 la IA ha dado un salto enorme y ha comenzado a incorporarse en las aplicaciones de desarrollo web. Puedes saber más en este artículo:

👉[UNA NUEVA ERA EN LA GESTIÓN DE BASES DE DATOS: SUPABASE STUDIO 3.0 REDEFINE LA EDICIÓN SQL](https://wwwhatsnew.com/2023/08/11/una-nueva-era-en-la-gestion-de-bases-de-datos-supabase-studio-3-0-redefine-la-edicion-sql/)👈

En nuestro proyecto vamos a utilizar muchas de estas características. Pero, como dijo Jack... 'vayamos por partes' De momento vamos a centrarnos en las bases de datos PostgreSQL que nos ofrece y su interfaz para hacer consultas sql.

Pero antes debemos crear una cuenta. Puedes hacerlo desde su página web: [https://supabase.com/](https://supabase.com/)

## **Nuevo proyecto**

Una vez tenemos nuestra cuenta necesitaremos crear un proyecto. (Recuerda que puedes tener hasta dos proyectos en la cuenta gratuita).

Vamos a crear un nuevo proyecto con nombre 'Vanilla Project'

Aquí puedes ver mi cuenta con dos proyectos creados:

![Supabase](https://carrebola.github.io/vanillaPill/assets/images/proyectos-40bf77cc0d7027a490c85fd7928655fe.png)

Fíjate en que...

El proyecto con nombre 'Vanilla Project' está pausado. Esto es debido a que solo podemos tener un proyecto activo

## **Probando consultas SQL**

Una vez has seleccionado tu proyecto de trabajo, podrás ver a la izquierda una barra de herramientas con diferentes opciones. La que ahora nos interesa a nosotros es la de `SQL Editor`.

Esta opción nos abre una ventana en la que hacer consultas a nuestra base de datos.

Prueba a escribir la siguiente consulta: `'select "Hola Vanilla"'`. Podrás comprobar como en el panel inferior se muestra la respuesta a la consulta. En este caso simplemente muestra el texto 'Hola Vanilla'.

En la versión actual de Supabase, también podemos encontrar una IA que nos ayuda con la creación de consultas. Vamos a darle permisos a OpenAI para que pueda ver nuestros datos y así ayudarnos  
Nota

Hay que tener en cuenta que, por el momento, los datos que incorporarán nuestra base de datos no son sensibles, por lo que no supone ningún problema de violación de la privacidad. Por otro lado, esta herramienta puede ser muy útil en el desarrollo de nuestro entorno backend.

Una vez tenemos activa la IA podemos pedirle que nos cree una consulta especifica. Por ejemplo, vamos a decirle que nos escriba el código necesario para crear una tabla de ejemplo:

![Ejemplo IA](https://carrebola.github.io/vanillaPill/assets/images/ejemploia-cb88adc2752696c4485b561a702acc07.png)

¡Funciona! Está claro que este va a ser un gran ayudante en la contrucción de nuestro proyecto.

De todas formas, para la construcción de nuestras tablas será mejor que utilicemos la interfaz que nos ofrece Supabase...

# **Construcción de tablas y usuarios**

En la barra de herramientas tenemos la opción `Tabla Editor`. Este editor nos va a facilitar mucho la creación de las tablas de nuestro proyecto.

Hagamos memoria. Según nuestro diagrama ER, necesitamos tres tablas: users, perfiles y proyectos. Tanto las tablas perfiles como la tabla proyectos son tablas `public` (públicas) y debemos crear nosotros. La tabla 'users' es una tabla que se crea de manera automática en Supabase cuando registras usuarios y pertenece al dominio `auth`.

## **Creamos Tabla Perfiles**

Vamos a crear la tabla perfiles mediante la interfaz de Supabase.

![Create tabla](https://carrebola.github.io/vanillaPill/assets/images/creartabla-436a84206bb54b5e76a9685581b4518b.png)

Asegúrate de eliminar las politicas de acceso a la tabla. Más adelante las definiremos para determinar quién puede hacer qué dependiendo del rol asociado al usuario que accede.  
¿Qué son las politicas de acceso de supabase?

Las políticas de acceso en Supabase son conjuntos de reglas que estableces para controlar quiénes pueden acceder a qué datos y realizar qué acciones dentro de tu aplicación o base de datos.

Esto te permite gestionar quién puede ver, modificar o eliminar información específica, y también definir permisos especiales para ciertos usuarios si es necesario.

Al crearse la tabla se crean automáticamente los campos id (que será un numero entero autoincremental y se convertirá en la clave única) y createat que guardará la fecha y hora de creación del registro (con tipo timestamptz).

A continuación crearemos el resto de campos indicando el type para cada campo.

![campos de tabla perfiles](https://carrebola.github.io/vanillaPill/assets/images/perfiles-9cd9b357e8b44109a9d085a3413c17b1.png)

Y finalmente vamos a vincular el campo userid con el campo id de la tabla `auth.users` creando una clave foranea. Asegurate de marcar la opción Cascade de 'Action if referenced row is removed'. De esta manera, si borrarmos un registro de la tabla `auth.users` se borrará también el registro de la tabla '`perfiles`' asociado a ese usuario.

## **Creamos Tabla proyectos**

Para la tabla proyectos emplearemos el mismo procedimiento

![campos de tabla perfiles](https://carrebola.github.io/vanillaPill/assets/images/tablaproyectos-43277143929fb8744bbe73cb2abd1ed7.png)

No olvides crear la clave foranea de los campos userid e id de las tablas public.proyectos y auth.users

Ahora que tenemos las tres tablas creadas podemos visualizarlas con el nuevo Schema Visualizer que incorpora Supabase

![campos de tabla perfiles](https://carrebola.github.io/vanillaPill/assets/images/schemavisualizer-873bfd294fd4e9898c620513bd492739.png)

En esta imagen puedes ver las tablas públicas. Si quieres ver los campos que incorpora la tabla auth.users puedes modificar el filtro superior por 'auth'

![Visualizador de esquema de tablas](https://carrebola.github.io/vanillaPill/assets/images/schemavisualizerusers-7b933bde53487e4245c713b5e4056520.png)

## **Registramos Usuarios**

Vamos a añadir algunos usuarios a nuestra tabla users. Comenzamos por los usuarios.

Hay muchas maneras de registrar usuarios, pero ahora la más fácil para nosotros es usando la opción `Add user`del menú `Authentication`

![Nuevo usuario](https://carrebola.github.io/vanillaPill/assets/images/newuser-dedf654dda31e4f9b094b0d6081d95f8.png)

Podemos crear algunos usuarios más para poder hacer pruebas. Estos son los que he creado yo. Tu puedes hacer lo mismo:

Nota

Te recomiendo que antes te crees algunas cuentas de correo para poder trabajar con ellas

![Nuevos usuarios](https://carrebola.github.io/vanillaPill/assets/images/users-f7a90302ef8ac813acb77ac8389736c3.png)

## **Añadimos datos a la tabla perfiles**

Como ya tenemos los usuarios registrados (como se muestra en la tabla auth.users) podemos crear los registros de la tabla `perfiles` asociados a cada uno de estos usuarios.

Podemos hacerlo con consultas sql o directamente accediendo a las tablas desde la opción `Table editor` y añadiendo registros. Vamos a hacerlo con este último método.

Desde el editor de tablas, haz clic sobre el nombre de la tabla `perfiles` y utiliza el botón `Insert` para añadir registros (filas), tal y como se muestra en la figura:

![Nuevos usuarios](https://carrebola.github.io/vanillaPill/assets/images/nuevoPerfil-505cb089c70f64e81e803851a549b907.png)

En el campo avatar (que es de tipo texto), por el momento he añadido la url de una imagen externa. (He usado la cara de algunos músicos... que me perdonen por lo que respecta a los derechos de autor 😅)

![Nuevos usuarios](https://carrebola.github.io/vanillaPill/assets/images/datosPerfiles-2f4ee92abd7e49681176c33215a0b64d.png)

Fíjate bien

Al completar los datos de cada perfil, en el campo userid he utilizado el id de la tabla `auth.users`

## **Primera consulta a la tabla perfiles**

Ahora que tenemos la tabla perfiles con datos, vamos a hacer una consulta sql desde el SQL Editor:

```
select * from perfiles
```

![Nuevos usuarios](https://carrebola.github.io/vanillaPill/assets/images/consultaPerfiles-9f17aa9b4d3bfefa034ded2dc543a7ad.png)
tip

Una opción interesante es que podemos guardar las consultas que hacemos.

## **Insertando datos en la tabla proyectos**

Para insertar datos en la tabla proyectos vamos a utilizar el editor de consultas. Nos ayudaremos de la IA para facilitarnos el trabajo:

Pregunta a ChatGPT

![Nuevos usuarios](https://carrebola.github.io/vanillaPill/assets/images/chatgpt-564c889568763d7becfb2714131e99a2.png)

Respuesta de ChatGPT

Consulta SQL

```
INSERT INTO proyectos (userid, nombre, descripcion, imagen, enlace, repositorio, estado)
VALUES
  ('2ab09b38-6629-414d-bcf5-ebb26e638973', 'Proyecto de Gestión de Inventario', 'Este proyecto permite gestionar el inventario de una empresa', 'https://imagen.com/gestion-inventario.jpg', 'https://enlace.com/gestion-inventario', 'https://github.com/proyecto-gestion-inventario', 'Activo'),
  ('2ab09b38-6629-414d-bcf5-ebb26e638973', 'Proyecto de Gestión de Personal', 'Este proyecto permite gestionar el personal de una empresa', 'https://imagen.com/gestion-personal.jpg', 'https://enlace.com/gestion-personal', 'https://github.com/proyecto-gestion-personal', 'Inactivo'),
  ('2ab09b38-6629-414d-bcf5-ebb26e638973', 'Proyecto de Análisis de Datos de Ventas', 'Este proyecto permite analizar los datos de ventas de una empresa', 'https://imagen.com/analisis-ventas.jpg', 'https://enlace.com/analisis-ventas', 'https://github.com/proyecto-analisis-ventas', 'Activo'),
  ('1dd53fb9-fa27-4aa3-8c91-2b5de5edba76', 'Proyecto de Análisis de Redes Sociales', 'Este proyecto permite analizar las redes sociales de una empresa', 'https://imagen.com/analisis-redes-sociales.jpg', 'https://enlace.com/analisis-redes-sociales', 'https://github.com/proyecto-analisis-redes-sociales', 'Activo'),
  ('1dd53fb9-fa27-4aa3-8c91-2b5de5edba76', 'Proyecto de Gestión de Proyectos', 'Este proyecto permite gestionar proyectos de una empresa', 'https://imagen.com/gestion-proyectos.jpg', 'https://enlace.com/gestion-proyectos', 'https://github.com/proyecto-gestion-proyectos', 'Inactivo'),
  ('1dd53fb9-fa27-4aa3-8c91-2b5de5edba76', 'Proyecto de Visualización de Datos', 'Este proyecto permite visualizar datos de una empresa', 'https://imagen.com/visualizacion-datos.jpg', 'https://enlace.com/visualizacion-datos', 'https://github.com/proyecto-visualizacion-datos', 'Activo'),
  ('1dd53fb9-fa27-4aa3-8c91-2b5de5edba76', 'Proyecto de Análisis de Datos de Marketing', 'Este proyecto permite analizar los datos de marketing de una empresa', 'https://imagen.com/analisis-marketing.jpg', 'https://enlace.com/analisis-marketing', 'https://github.com/proyecto-analisis-marketing', 'Inactivo');

```

Y si ahora hacemos una consulta a la tabla proyectos deberíamos ver los datos introducidos:

```
select * from proyectos
```

![Nuevos usuarios](https://carrebola.github.io/vanillaPill/assets/images/datosProyectos-4775eac8e58dbbb703792817a951ba76.png)

Resumiendo:

- Nos hemos registrado en Supabase con una cuenta gratuita (que nos permite tener dos proyectos)
- Hemos creado las tablas necesarias para nuestro proyecto
- Hemos registrado algunos usuarios de prueba
- Hemos insertado datos de prueba en las tablas
- Hemos probado algunas consultas.

Es el momento de aprender a comunicar una aplicación de javascript con nuestro servicio de backend...

# **La API de Javascript de Supabase**

Una de las grandes ventajas que nos ofrece Supabase es que, no solo nos ofrece un servidor de base de datos basado en postgreeSQL, sino que además nos facilita enormemente el acceso a la bd, ya sea a través de una API Rest, o directamente con una API de javascript.  
API REST vs API de Javascript

La diferencia fundamental entre la API REST de Supabase y su API de JavaScript radica en cómo interactúan los desarrolladores con la plataforma:

API REST de Supabase: La API REST es una interfaz que sigue los principios de la arquitectura REST (Representational State Transfer). Permite a los desarrolladores realizar operaciones CRUD (Create, Read, Update, Delete) en la base de datos de Supabase utilizando los métodos HTTP estándar (GET, POST, PUT, DELETE, etc.). Para interactuar con la API REST, puedes hacer solicitudes HTTP directas utilizando bibliotecas como Axios, Fetch, o incluso a través de herramientas como cURL.

API de JavaScript de Supabase: La API de JavaScript de Supabase es una biblioteca que proporciona una capa de abstracción sobre la API REST subyacente. Esta biblioteca simplifica la interacción con la API REST al proporcionar métodos y funciones específicos en JavaScript para realizar operaciones comunes en la base de datos de Supabase. En lugar de realizar directamente solicitudes HTTP, los desarrolladores pueden utilizar estas funciones para realizar tareas como la autenticación de usuarios, la consulta de datos, la manipulación de datos, etc.

En resumen, la API REST de Supabase es la interfaz subyacente que permite la comunicación con la plataforma utilizando solicitudes HTTP estándar, mientras que la API de JavaScript de Supabase es una biblioteca que facilita la interacción con la API REST utilizando métodos y funciones específicos en JavaScript.

Para nuestro proyecto nosotros vamos a utilizar la API de Javascript ya que nos permite la comunicación de manera muy sencilla ya además, ¡nos lo dan todo hecho\! 😉

## **Acceso a la documentación de la API de Javascript**

Para acceder a la documentación de javascript tenemos que hacer click en el item del menú de la barra de la izquierda llamado API Docs. (Antes debes estar en tu proyecto)

![API Docs](https://carrebola.github.io/vanillaPill/assets/images/api-d702a070f87f2d9b66a634fa6923a0d2.png)

- En el apartado Getting Started encontramos varias opciones:
  - En la opción Introductio nos muestra el código para realizar la conexión con la base de datos (luego lo probaremos).
  - En la opción de Authentication nos muestra información relacionada con la autenticación de la base de datos.
  - En la opción User Management ya encontramos el código javascript que debemos utilizar en nuestra app para hacer tareas como el registro, login (con diferentes sistemas), _logout_, y acceder a la información del usuario con la sesión activa, entre otros.
- Tenemos otra sección llamada Tables and Views: Aquí aparecerán todas las tablas de nuestro proyecto. Si hacemos click en uno de los nombres de las tablas, por ejemplo, en la tabla _pefiles_, veremos en la columna de la derecha el código javascript asociado a las diferentes consultas.
  - Podemos acceder a un perfil a partir de su id, fecha, nombre, etc.
  - Leer todas los perfiles (incluyendo filtros),
  - insertar perfiles,
  - actualizar perfiles y
  - borrarlos. Es decir, el CRUD que hemos contemplado en nuestro ORM.

Parece fácil, ¿verdad? ... Pues lo es. En breve lo probaremos.

Pero hay algo que hemos pasado por alto. Si revisamos el diagrama de clases podemos ver que hay métodos (como getDetalleById de la clase Perfil_detalle) que realizan consultas multitabla. Si analizamos el código js que acabamos de ver en la documentación, solo contempla consultas a la mísma tabla... ¿Cómo podemos solucionar este problema?

![Diagrama de clases](https://carrebola.github.io/vanillaPill/assets/images/dc-1b2b47904518da02ba6c90fd8ef20e38.svg)

La respuesta a esta pregunta es: utilizando funciones postgreSQL conocidas como Stored Procedures.

Efectivamente, en supabase podemos crear funciones que más tarde podremos llamar desde javascript.

### **Ejemplos de código javascript que nos ofrece Supabase:**

Vamos a mostrar aquí, a modo de ejemplo, el código para:

- Iniciar sesión
- acceder a todas las filas de la tabla pefiles
- acceder a una función predefinida llamada perfiles_detalle (esta en concreto permitiría ver el detalle de todas las filas de la tabla perfiles cruzada con la tabla usuarios)

Estos fragmentos de código los puedes encontrar en API Docs de supabase

Iniciar sesión

```
// USER LOGIN
let { data, error } = await supabase.auth.signInWithPassword({
 email: 'someone@email.com',
 password: 'TGeycKCsmEIyrHPhWiYF'
})
```

Leer todas las filas de la tabla perfiles

```
// READ ALL ROWS
let { data: perfiles, error } = await supabase
 .from('perfiles')
 .select('*')
```

Stored Procedures: perfil_detalle

```
// INVOKE FUNCTION
let { data, error } = await supabase
.rpc('perfil_detalle', {
  userid
})

if (error) console.error(error)
else console.log(data)
```

Tanto el código para leer las filas de la tabla perfiles, como el de inicio de sesión, podríamos utilizarlos ya en nuestra aplicación, pero en el caso de la función perfil_detalle, primero necesitamos programarla desde Supabase. ¡Hagámoslo!

# **Funciones en Supabase. Las Stored Procedures**

Vamos a crear funciones de PostgreSQL en supabase.

## **Función 'proyecto_detalle_todos'**

La función proyecto*detalle es una función que debe devolvernos todos los campos de la tabla \_proyectos* y además el nombre y los apellidos del usuario que ha creado el proyecto.

Primero vamos a crear la consulta SQL y vamos a probarla.

Nos vamos al panel de consultas SQL de Supabase y escribimos:

```
SELECT proyectos.*, perfiles.nombre as nombre_usuario, perfiles.apellidos as apellidos_usuario
FROM proyectos
INNER JOIN perfiles
ON proyectos.user_id = perfiles.user_id
```

Fíjate que lo que hacemos es cruzar las tablas _perfiles_ y _usuarios_ donde los user_id coinciden.

Como ya tenemos datos de prueba en las tablas deberíamos obtener el siguiente resultado:

![consulta proyecto_detalle](https://carrebola.github.io/vanillaPill/assets/images/consulta1-dae62a9e7878b3c50bd9995fa58277df.png)

Ahora que ya sabemos que la consulta es correcta, vamos a crear la función que nos devuelva estos datos.

El código sql para crear esta función es el siguiente:

### **Función proyecto_detalle_todos**

```
CREATE FUNCTION proyecto_detalle_todos()
RETURNS TABLE (
  id integer,
  user_id UUID,
  nombre TEXT,
  descripcion TEXT,
  imagen TEXT,
  enlace TEXT,
  repositorio TEXT,
  estado TEXT,
  nombre_usuario TEXT,
  apellidos_usuario TEXT
) AS $$
  SELECT proyectos.id, proyectos.user_id, proyectos.nombre, proyectos.descripcion, proyectos.imagen, proyectos.enlace, proyectos.repositorio, proyectos.estado, perfiles.nombre AS nombre_usuario, perfiles.apellidos AS apellidos_usuario
  FROM proyectos
  INNER JOIN perfiles
  ON proyectos.user_id = perfiles.user_id
$$ LANGUAGE sql;
```

Si la ejecutamos la respuesta sería del tipo:

```
Success. No rows returned
```

Esto significa que la función se ha creado correctamente y que no ha devuelto filas. Es normal, ya que esta consulta lo que hace es crear la función.

Si queremos comprobar si se ha creado correctamente podemos ir la opción database del menú vertical izquierdo y hacer click en la opción Functions.

Aquí verás las funciones que tienes creadas

![funciones](https://carrebola.github.io/vanillaPill/assets/images/functions-0404f9a114de73d98e1a1919975adfab.png)

Note

En esta captura puedes ver todas mis funciones. En tu proyecto solo deberías ver la que acabas de crear, es decir, proyecto_detalle_todos

Ahora solo nos falta probar desde el panel de consultas nuestra función. Puedes hacerlo con la consulta:

`select proyecto_detalle_todos()`

El resultado debería ser este:

```
"proyecto_detalle_todos"
"(7,1dd53fb9-fa27-4aa3-8c91-2b5de5edba76,""Proyecto de Análisis de Datos de Marketing"",""Este proyecto permite analizar los datos de marketing de una empresa"",https://imagen.com/analisis-marketing.jpg,https://enlace.com/analisis-marketing,https://github.com/proyecto-analisis-marketing,Inactivo,Gary,Alumno2)"
"(6,1dd53fb9-fa27-4aa3-8c91-2b5de5edba76,""Proyecto de Visualización de Datos"",""Este proyecto permite visualizar datos de una empresa"",https://imagen.com/visualizacion-datos.jpg,https://enlace.com/visualizacion-datos,https://github.com/proyecto-visualizacion-datos,Activo,Gary,Alumno2)"
"(5,1dd53fb9-fa27-4aa3-8c91-2b5de5edba76,""Proyecto de Gestión de Proyectos"",""Este proyecto permite gestionar proyectos de una empresa"",https://imagen.com/gestion-proyectos.jpg,https://enlace.com/gestion-proyectos,https://github.com/proyecto-gestion-proyectos,Inactivo,Gary,Alumno2)"
"(4,1dd53fb9-fa27-4aa3-8c91-2b5de5edba76,""Proyecto de Análisis de Redes Sociales"",""Este proyecto permite analizar las redes sociales de una empresa"",https://imagen.com/analisis-redes-sociales.jpg,https://enlace.com/analisis-redes-sociales,https://github.com/proyecto-analisis-redes-sociales,Activo,Gary,Alumno2)"
```

Note

Como podemos observar, los datos se muestran en un formato diferente a una tabla. Cuando usemos la función desde javascript el formato será json, como para el resto de las funciones de la API

Vamos a hacer lo mismo para el resto de funciones. Aquí tienes el código:

## **Función proyecto_detalle**

función proyecto_detalle

```
CREATE FUNCTION proyecto_detalle(proyecto_id integer)
RETURNS TABLE (
  id integer,
  user_id UUID,
  nombre TEXT,
  descripcion TEXT,
  imagen TEXT,
  enlace TEXT,
  repositorio TEXT,
  estado TEXT,
  nombre_usuario TEXT,
  apellidos_usuario TEXT
) AS $$
  SELECT proyectos.id, proyectos.user_id, proyectos.nombre, proyectos.descripcion, proyectos.imagen, proyectos.enlace, proyectos.repositorio, proyectos.estado, perfiles.nombre AS nombre_usuario, perfiles.apellidos AS apellidos_usuario
  FROM proyectos
  INNER JOIN perfiles
  ON proyectos.user_id = perfiles.user_id
  WHERE proyectos.id = proyecto_id;
$$ LANGUAGE sql;

```

## **Función perfil_detalle**

Función perfil_detalle

```
CREATE FUNCTION perfil_detalle(userid UUID)
RETURNS TABLE (
  id integer,
  created_at timestamp,
  user_id UUID,
  nombre TEXT,
  apellidos TEXT,
  avatar TEXT,
  estado TEXT,
  rol TEXT,
  email TEXT
) AS $$
SELECT perfiles.id, perfiles.created_at, perfiles.user_id, perfiles.nombre, perfiles.apellidos, perfiles.avatar, perfiles.estado, perfiles.rol, auth.users.email
FROM perfiles
INNER JOIN auth.users
ON perfiles.user_id = auth.users.id
WHERE auth.users.id = userid
$$ LANGUAGE sql;
```

## **Función perfil_detalle_todos**

función perfil_detalle_todos

```
CREATE FUNCTION proyecto_detalle(proyecto_id integer)
RETURNS TABLE (
  id integer,
  user_id UUID,
  nombre TEXT,
  descripcion TEXT,
  imagen TEXT,
  enlace TEXT,
  repositorio TEXT,
  estado TEXT,
  nombre_usuario TEXT,
  apellidos_usuario TEXT
) AS $$
  SELECT proyectos.id, proyectos.user_id, proyectos.nombre, proyectos.descripcion, proyectos.imagen, proyectos.enlace, proyectos.repositorio, proyectos.estado, perfiles.nombre AS nombre_usuario, perfiles.apellidos AS apellidos_usuario
  FROM proyectos
  INNER JOIN perfiles
  ON proyectos.user_id = perfiles.user_id
  WHERE proyectos.id = proyecto_id;
$$ LANGUAGE sql;
```

# **Resumen del código JS necesario para la comunicación con la BD**

Este es el código que, a priori, necesitamos para conectar y comunicar nuestra app con la BD. Lo he copiado de la API Docs de Supabase para tenerlo como referencia para utilizarlo más adelante, cuando empecemos a programar la lógica para comunicar nuestro frontEnd con la base de datos:

## **APIS extraidas de API Docs de Supabase para gestion de usuarios**

USER SIGNUP

```
let { data, error } = await supabase.auth.signUp({
 email: 'someone@email.com',
 password: 'TGeycKCsmEIyrHPhWiYF'
})
```

USER LOGIN

```
let { data, error } = await supabase.auth.signInWithPassword({
 email: 'someone@email.com',
 password: 'TGeycKCsmEIyrHPhWiYF'
})
```

GET USER

```
const { data: { user } } = await supabase.auth.getUser()
```

PASSWORD RECOVERY

```
let { data, error } = await supabase.auth.resetPasswordForEmail(email)
```

UPDATE USER

```
const { data, error } = await supabase.auth.updateUser({
 email: "new@email.com",
 password: "new-password",
 data: { hello: 'world' }
})
```

USER LOGOUT

```
let { error } = await supabase.auth.signOut()
```

INVITE USER

```
let { data, error } = await supabase.auth.api.inviteUserByEmail('someone@email.com')
```

## **APIS para tablas**

### **Tabla perfiles**

READ ALL ROWS

```
let { data: perfiles, error } = await supabase
 .from('perfiles')
 .select('*')
```

READ SPECIFIC COLUMNS

```
let { data: perfiles, error } = await supabase
 .from('perfiles')
 .select('some_column,other_column')
```

WITH PAGINATION

```
let { data: perfiles, error } = await supabase
 .from('perfiles')
 .select('*')
 .range(0, 9)
```

WITH FILTERING

```
let { data: perfiles, error } = await supabase
 .from('perfiles')
 .select("*")
 // Filters
 .eq('column', 'Equal to')
 .gt('column', 'Greater than')
 .lt('column', 'Less than')
 .gte('column', 'Greater than or equal to')
 .lte('column', 'Less than or equal to')
 .like('column', '%CaseSensitive%')
 .ilike('column', '%CaseInsensitive%')
 .is('column', null)
 .in('column', ['Array', 'Values'])
 .neq('column', 'Not equal to')

 // Arrays
 .cs('array_column', ['array', 'contains'])
 .cd('array_column', ['contained', 'by'])
```

### **Tabla proyectos**

READ ALL ROWS

```
let { data: proyectos, error } = await supabase
 .from('proyectos')
 .select('*')
```

READ SPECIFIC COLUMNS

```
let { data: proyectos, error } = await supabase
 .from('proyectos')
 .select('some_column,other_column')
```

READ FOREIGN TABLES

```
let { data: proyectos, error } = await supabase
 .from('proyectos')
 .select(`
   some_column,
   other_table (
     foreign_key
   )
 `)
```

WITH PAGINATION

```
let { data: proyectos, error } = await supabase
 .from('proyectos')
 .select('*')
 .range(0, 9)
```

WITH FILTERING

```
let { data: proyectos, error } = await supabase
 .from('proyectos')
 .select("*")
 // Filters
 .eq('column', 'Equal to')
 .gt('column', 'Greater than')
 .lt('column', 'Less than')
 .gte('column', 'Greater than or equal to')
 .lte('column', 'Less than or equal to')
 .like('column', '%CaseSensitive%')
 .ilike('column', '%CaseInsensitive%')
 .is('column', null)
 .in('column', ['Array', 'Values'])
 .neq('column', 'Not equal to')
 // Arrays
 .cs('array_column', ['array', 'contains'])
 .cd('array_column', ['contained', 'by'])
```

## **Funciones**

INVOKE FUNCTION perfil_detalle

```
let { data, error } = await supabase
 .rpc('perfil_detalle', {
   userid
 })

if (error) console.error(error)
else console.log(data)
```

"INVOKE

```
let { data, error } = await supabase
 .rpc('perfil_detalle_todos')

if (error) console.error(error)
else console.log(data)
```

"INVOKE

```
let { data, error } = await supabase
 .rpc('proyecto_detalle', {
   proyecto_id
 })

if (error) console.error(error)
else console.log(data)
```

"INVOKE

```
let { data, error } = await supabase
 .rpc('proyecto_detalle_todos')

if (error) console.error(error)
else console.log(data)
```

# **Definición del mapping de acceso a la bd. Clases**

¡Comenzamos Sprint nuevo!

![Alt text](https://carrebola.github.io/vanillaPill/assets/images/image-7-265d30d527a1fd6cd361374d5ae480af.png)

# **Historia: Definición del mapping de acceso a la bd. Clases**

El término "mapping" se refiere a la asignación de las propiedades de un objeto a las columnas de una tabla de una base de datos relacional. En este caso, la idea es que las propiedades de una clase JavaScript se correspondan con las columnas de una tabla en la base de datos Supabase.

Para definir un mapping en una aplicación de JavaScript con Supabase, primero debes crear una clase JavaScript que represente un registro de la tabla en cuestión. Cada propiedad de la clase se corresponderá con una columna en la tabla. Luego, puedes definir métodos estáticos en la clase para interactuar con la tabla (por ejemplo, leer, crear, actualizar o eliminar registros).

## **Conexión con la base de datos**

Es el momento de comenzar a construir nuestro la lógica para la comunicación con la base de datos en nuestro proyecto.

Como siempre, antes de comenzar a trabajar crearemos una rama nueva. Llamémosla... 'ORM'

Ahora instalamos en nuestro proyecto la librería de supabase para poder comenzar a trabajar con ella:

`npm install --save @supabase/supabase-js`

Para conectarnos con la base de datos crearemos un objeto con la lógica de conexión que nos ofrece supabase. Para ello:

- Creamos el archivo `supabase.js` en la carpeta bd `src/bd/supabase.js`
- El archivo definimos la conexión usando los modelos de API Docs que ya testeamos en el apartado 'Probando Supabase', y la exportamos. El archivo quedaría así:

supabase.js

```
import { createClient } from '@supabase/supabase-js'
//Creando la conexión con supabase
const supabaseUrl = 'xxxxxx'
const supabaseKey = 'xxxxxx'

//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)

```

## **Clase Perfil**

Vamos a definir la clase Perfil que utilizaremos para interactuar con una tabla de base de datos llamada perfiles.

Utilizaremos métodos static los cuales pueden ser llamados desde la misma clase, sin necesidad de instanciar un objeto.

La clase Perfil tienen las siguientes propiedades: id, nombre, apellidos, user_id, estado, rol y avatar y los siguientes métodos:

- constructor: El constructor de la clase acepta los parámetros id, nombre, apellidos, user_id, estado, rol y avatar y los asigna a las propiedades correspondientes del objeto.
- getAll: Este método es static y devuelve una lista de todos los registros en la tabla perfiles. Utiliza el método select de la librería supabase para seleccionar todos los registros de la tabla perfiles. Luego, utiliza el método map para convertir cada registro en un objeto de la clase Perfil.
- getById: Este método es static y acepta un parámetro id. Devuelve un objeto de la clase Perfil que tiene el id especificado. Utiliza el método select de la librería supabase para seleccionar el registro con el id especificado y el método single para devolver un solo registro. Luego, devuelve un objeto de la clase Perfil con los datos del registro seleccionado.
- getByUserId: Igual que el anterior pero más útil, ya que encuentra los datos de perfil a partir del id del user.
- create: Este método es static y acepta un objeto perfilData que contiene los datos para un nuevo registro de la tabla perfiles. Utiliza el método insert de la librería supabase para insertar el nuevo registro en la tabla perfiles.
- update: Este método actualiza el registro de la tabla perfiles que tiene el mismo id que el objeto Perfil actual. Utiliza el método update de la librería supabase para actualizar los campos nombre, apellidos y avatar del registro con los valores del objeto Perfil actual.
- delete: Este método es static y acepta un parámetro id. Elimina el registro de la tabla perfiles que tiene el id especificado utilizando el método delete de la librería supabase. Devuelve true si la eliminación es exitosa.

En primer lugar creamos el archivo perfil.js dentro de la carpeta `bd`.

Ahora importamos la conexión de supabase `import { supabase } from "./supabase.js";` Y definimos la clase que vamos a exportar. El código quedaría así:

perfil.js

```

// Importa el objeto 'supabase' desde un archivo 'supabase.js'
import { supabase } from './supabase.js'

// Definición de la clase Perfil
export class Perfil {
  // Constructor que inicializa las propiedades del perfil
  constructor({
    id = null, // ID único del perfil
    created_at = null, // Fecha de creación del perfil
    user_id = null, // ID del usuario asociado al perfil
    nombre = null, // Nombre del usuario
    apellidos = null, // Apellidos del usuario
    avatar = 'default_avatar.png', // URL del avatar por defecto
    estado = 'activo', // Estado del perfil (activo/inactivo, por ejemplo)
    rol = 'registrado' // Rol del usuario (registrado, administrador, etc.)
  }) {
    // Asignación de valores a las propiedades del perfil
    this.id = id
    this.created_at = created_at
    this.user_id = user_id
    this.nombre = nombre
    this.apellidos = apellidos
    this.avatar = avatar
    this.estado = estado
    this.rol = rol
  }

  // Método estático para obtener todos los perfiles
  static async getAll() {
    // Realiza una consulta a la base de datos para obtener todos los perfiles
    const { data: perfiles, error } = await supabase
      .from('perfiles')
      .select('*') // Selecciona todas las columnas
      .order('created_at', { ascending: false }) // Ordena por fecha de creación descendente

    // Manejo de errores: lanza una excepción si ocurre algún error
    if (error) {
      throw new Error(error.message)
    }

    // Mapea los perfiles obtenidos a instancias de la clase Perfil y los devuelve
    return perfiles.map((perfil) => new Perfil(perfil))
  }

  // Método estático para obtener un perfil por su ID
  static async getById(id) {
    // Realiza una consulta para obtener un perfil por su ID
    const { data: perfil, error } = await supabase
      .from('perfiles')
      .select('*')
      .eq('id', id) // Filtra por el ID especificado

    // Manejo de errores
    if (error) {
      throw new Error(error.message)
    }

    // Devuelve una instancia de Perfil con la información obtenida
    return new Perfil(perfil[0])
  }

  // Método estático para obtener un perfil por el ID del usuario asociado
  static async getByUserId(userId) {
    // Realiza una consulta para obtener un perfil por el ID de usuario asociado
    const { data: perfil, error } = await supabase
      .from('perfiles')
      .select('*')
      .eq('user_id', userId) // Filtra por el ID de usuario especificado

    // Manejo de errores
    if (error) {
      throw new Error(error.message)
    }

    // Devuelve una instancia de Perfil con la información obtenida
    return new Perfil(perfil[0])
  }

  // Método estático para crear un nuevo perfil
  static async create(perfilData) {
    // Inserta un nuevo perfil en la base de datos con los datos proporcionados
    const { data, error } = await supabase
      .from('perfiles')
      .insert(perfilData) // Inserta los datos del nuevo perfil
      .select() // Devuelve los datos insertados

    // Manejo de errores
    if (error) {
      throw new Error(`Error creando perfil: ${error.message}`)
    }

    // Si se insertaron datos, devuelve una nueva instancia de Perfil con los datos insertados
    return data ? new Perfil(data[0]) : null
  }

  // Método estático para actualizar un perfil existente por su ID
  static async update(id, newData) {
    // Actualiza un perfil existente en la base de datos con los nuevos datos
    const { error } = await supabase
      .from('perfiles')
      .update(newData) // Actualiza con los nuevos datos proporcionados
      .eq('id', id) // Filtra por el ID del perfil a actualizar

    // Manejo de errores
    if (error) {
      throw new Error(`Error actualizando perfil: ${error.message}`)
    }

    // Si la actualización fue exitosa, devuelve true
    return true
  }
}


```

## **Clase User**

Esta clase será diferente a la clase Perfil.

La clase User contiene tres métodos estáticos: create, login y logout, cada uno con una funcionalidad específica relacionada con la autenticación y el manejo de users.

Primero importamos la conexión a la base de datos a través de la biblioteca supabase.js.

Luego, en el constructor de la clase User definimos las propiedades de un usuario: id, email y password.

- Método create: Lo utilizaremos para crear un nuevo usuario en la base de datos. Toma un objeto userData como argumento, que contiene las credenciales de usuario necesarias para crear un nuevo usuario en la base de datos. El método utiliza la función supabase.auth.signUp para crear un nuevo usuario en la base de datos y devuelve un objeto User que contiene las propiedades id y email del nuevo usuario.
- Método login: Lo utilizamos para iniciar sesión en la aplicación. Toma un objeto userData que contiene las credenciales de inicio de sesión y utiliza la función supabase.auth.signInWithPassword para iniciar sesión en la base de datos. Devuelve un objeto User que contiene las propiedades id y email del usuario que ha iniciado sesión.
- Método logout: Lo utilizamos para cerrar sesión en la aplicación. Utiliza la función supabase.auth.signOut para cerrar sesión y devuelve true si se ha cerrado con éxito.
- Método getUser: Lo utilizamos para capturar los datos del usuario logueado. Utiliza la función supabase.auth.getUser para acceder a la sesión y devuelve un objeto con el id y el email del usuario.

user.js

```
// Importamos la conexión a la base de datos desde './supabase.js'
import { supabase } from './supabase.js'

// Definición de la clase User
export class User {
  // Constructor que asigna propiedades básicas de un usuario
  constructor(id = null, email = null, password = null) {
    this.id = id
    this.email = email
    this.password = password
  }

  // Método estático para crear un nuevo usuario (registro)
  static async create(userData) {
    // Registra un nuevo usuario con Supabase
    const { data, error } = await supabase.auth.signUp(userData)

    // Manejo de errores
    if (error) {
      throw new Error(error.message)
    }

    // Si el usuario se crea correctamente, devuelve una instancia de User con el ID y el email
    console.log('usuario creado correctamente ', data)
    return new User(data.user.id, data.user.email)
  }

  // Método estático para iniciar sesión (recibe un objeto con email y password)
  static async login(userData) {
    // Inicia sesión con Supabase
    const { data, error } = await supabase.auth.signInWithPassword(userData)

    // Manejo de errores
    if (error) {
      throw new Error(error.message)
    }

    // Devuelve una instancia de User con el ID y el email del usuario logueado
    return new User(data.user.id, data.user.email)
  }

  // Método estático para cerrar sesión
  static async logout() {
    // Cierra sesión con Supabase
    const { error } = await supabase.auth.signOut()

    // Manejo de errores
    if (error) {
      throw new Error(error.message)
    }

    // Retorna true si el cierre de sesión fue exitoso
    return true
  }

  // Método estático para obtener el usuario actualmente logueado
  static async getUser() {
    // Obtiene la información del usuario actualmente logueado con Supabase
    const { data: { user } } = await supabase.auth.getUser()

    // Si hay un usuario logueado, devuelve una instancia de User con su ID y email
    if (user) return new User(user.id, user.email)
  }

  // Método para actualizar datos del usuario (no está claro cómo se utiliza actualmente)
  async update(nuevosDatos) {
    const { data, error } = await supabase.auth.updateUser({
      email: this.email,
      password: this.password
    })

    if (error) {
      throw new Error(error.message)
    }
  }
}

```

## **Clase Proyecto**

La clase proyecto es muy parecida a la clase perfil, por lo que partiremos del mismo archivo y lo modificaremos para adaptarlo a los campos de la tabla proyecto.

# **Testing de las clases con Mocha y Chai**

Es el momento de verificar que nuestras clases están haciendo su trabajo.

Vamos a hacer una primera prueba simple para ver si podemos mostrar por la consola todos los perfiles que tenemos en la tabla `perfiles`.

Lo vamos a hacer 'a saco', y después, cuando ya estemos más tranquilos, usaremos una de herramienta muy utilizada en las empresas: El Testing.

Pero por ahora hagamoslo a lo cutre.

## **Probando la clase perfiles**

Vamos a abrir la vista `homeVista.js` y vamos a colocar nuestro código en el método script que luego llamaremos.

vistaHome.js

```
// Importamos la clase
import { Perfil } from '../bd/perfil'

export default {
  template: // html
  `
    ...
  `,
  script: async () => {
    console.log('Vista home cargada')

    // Probando la clase Pefil
    const resultado = await Perfil.getAll()
    console.log(resultado)
  }
}

```

Fíjate

Hay un par de cosas que debes tener en cuenta:

- Nuestro script() debe llevar delante la palabra `async` y delante de la clase _Perfil_ debemos poner `await`. Esto es porque estamos trabajando con AJAX... pero de eso ya hablaremos en otro momento
- No olvides importar la clase con `import` en la parte superior del archivo

Si todo ha ido bien, deberias ver en la consola de la página principal algo así:

![Perfil.getAll()](https://carrebola.github.io/vanillaPill/assets/images/image-a912ed829a7c2807242cecdfc7cc05a4.png)

¡¡¡Genial!!! Todo va según lo previsto. Ahora mejor borramos el código de la vista Home no se nos vaya a olvidar...

## **Testing con Mocha y Chai[​](https://carrebola.github.io/vanillaPill/docs/Version%201.0/SPRINT%204%20-%20BACKEND/ORM%20para%20el%20mapping%20en%20javascript/Testing#testing-con-mocha-y-chai)**

Tal y como hemos comentado antes, una buena idea es testear todas las clases para poder asegurarnos de que la conexión con la base de datos se realiza de forma correcta y todo funciona según lo esperado

Para hacer los tests unitarios hemos utilizado mocha y chai.

Qué son Mocha y Chai

"Mocha" y "Chai" en el contexto del testing con JavaScript son frameworks populares para escribir y ejecutar pruebas (tests) automatizadas en aplicaciones web.

Mocha: Es un framework de pruebas que te permite escribir pruebas de manera sencilla y flexible en JavaScript. Proporciona una estructura clara para organizar tus pruebas y es compatible tanto con el navegador como con Node.js.

Chai: Por otro lado, Chai es una librería de aserciones (assertions) que se utiliza junto con Mocha u otros frameworks de pruebas. Con Chai, puedes escribir declaraciones de expectativas de una manera muy legible y expresiva. Viene con diferentes estilos para las aserciones, como el estilo "should", "expect" y "assert".

Un ejemplo de uso

Un ejemplo sencillo sería escribir pruebas para una función matemática que sume dos números utilizando Mocha y Chai:

Supongamos que tienes una función llamada sumar en un archivo matematicas.js:

```
Copy code
// matematicas.js
function sumar(a, b) {
  return a + b;
}
module.exports = sumar;
```

Y quieres escribir pruebas para esta función usando Mocha y Chai en un archivo test.js:

```
Copy code
// test.js
const chai = require('chai');
const expect = chai.expect;
const sumar = require('./matematicas');

describe('Función sumar', function() {
  it('debería sumar dos números correctamente', function() {
    expect(sumar(2, 3)).to.equal(5);
  });

  it('debería devolver un resultado incorrecto si se pasan strings', function() {
    expect(sumar('2', '3')).to.be.a('string');
    expect(sumar('2', '3')).to.not.equal(5);
  });
});
```

En este ejemplo, estamos utilizando Mocha para estructurar nuestras pruebas con describe y it, y Chai para realizar las aserciones con expect, verificando el comportamiento esperado de la función sumar.

Estos frameworks son muy útiles para escribir pruebas de calidad y garantizar que tu código funcione como se espera en diferentes situaciones.

## **Creando las pruebas con Mocha i Chai**

- Primero instalamos las librerias mediante el gestor de paquetes: `npm install mocha chai -D`
- En el archivo `package.json` añadimos el script para pasar los tests:

package.json

```
"scripts": {
    "dev": "vite",
    "build": "vite build --emptyOutDir",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist",
    "test": "mocha"
  },
```

- Ahora ya podemos crear una carpeta en la raiz del proyecto con nombre `test` y dentro colocar nuestros archivos con el código que queremos testear. En este caso comenzamos con `perfil.test.js`

Primero vamos a hacer una prueba muy sencilla. Vamos a consultar los datos del primer proyecto que tenemos en la tabla 'proyectos'. ¿Recuerdas qué método debemos utilizar?... Efectivamente, `Proyecto.getById()`

Pero antes vamos a Supabase para consultar nuestra tabla `proyectos`.

![Tabla proyectos de supabase](https://carrebola.github.io/vanillaPill/assets/images/image-1-ccca5e8fea945e7daf7618e91ee77ed7.png)

Vamos a testear el método `Proyecto.getById(1)`, consultando el nombre del proyecto. Si todo es correcto debería devolvernos el texto: _Proyecto de Gestión de Inventario_

Esto es lo que queremos hacer:

- Importación de Librerías:
  - Importamos la función expect de la librería Chai, que se utiliza para realizar aserciones en las pruebas.
  - Importamos el objeto supabase desde un archivo llamado supabase.js, para acceder a una base de datos usando Supabase.
  - Importamos la clase Proyecto desde un archivo proyecto.js.
- Estructura de Pruebas:
  - Usa `describe` para agrupar pruebas relacionadas. En este caso, se está describiendo la función getById().
  - `it` describe una prueba específica que verifica una funcionalidad en particular. En este caso, se está probando que al obtener un proyecto por su ID, se devuelve el nombre correcto.
- Prueba:
  - Se ejecuta una prueba asincrónica (indicada por async function), donde se espera obtener un proyecto utilizando Proyecto.getById(1) (ya que queremos los datos del proyecto con ID=1).
  - Utiliza `expect` de Chai para verificar si el nombre del proyecto obtenido (proyecto.nombre) es igual a 'Proyecto de Gestión de Inventario'.

Y este sería el código correspondiente:

Este sería el código del script para hacer el test:

proyecto.test.js

```
// Cargamos libreria de testing
import { expect } from 'chai'

// cargamos libreria de supabase
import { supabase } from '../src/bd/supabase.js'

// Cargamos la clase Proyecto
import { Proyecto } from '../src/bd/proyecto.js'

describe('getById()', function () {
  it('debería devolver el nombre del proyecto con el ID correspondiente', async function () {
    // Obtener el proyecto por ID
    const proyecto = await Proyecto.getById(1)
    // Esperamos que el nombre coincida
    expect(proyecto.nombre).equal('Proyecto de Gestión de Inventario')
  })
})
```

Para ejecutar el test solo tenemos que escribir en la consola: `npm run test`. Esto ejecutará todos los archivos test que encuentre en la carpeta.

# **Testeando la clase User**

Ahora ya va en serio, vamos a empezar testeando la clase User.

Esto es lo que vamos a hacer:

1. Creación de Usuario: Utilizando el método create() de la clase User, se crea un nuevo usuario con un email y contraseña. Se verifica que el usuario creado sea una instancia válida de User y que su email coincida con el proporcionado.
2. Inicio de Sesión: Se intenta iniciar sesión con el usuario creado utilizando el método login(). Se verifica que el usuario creado siga siendo una instancia válida de User y que el usuario logueado tenga el mismo email que se usó para crearlo.
3. Obtención del Usuario Logueado: Se verifica que el método getUser() de la clase User devuelva el usuario logueado. Se comprueba que se haya obtenido un usuario, que sea una instancia válida de User y que el email del usuario logueado coincida con el que se utilizó previamente.
4. Cierre de Sesión: Se intenta cerrar la sesión del usuario actual con el método logout(). Se verifica que el proceso de cierre de sesión se realice con éxito y devuelva true."
5. Leer usuario tras cerrar sesión: Se intenta leer los datos del usuario logueado actual con el método getUser(). Se verifica que el proceso de cierre de sesión ha realizado bien por lo que devuelve _undefined_.

Pero antes, debemos eliminar la opción de supabase que nos obliga a confirmar la creación de un usuario nuevo mediante la respuesta al email que nos envía el sistema.

Para ello nos vamos a supabase, autenticación y Providers, y modificamos, del proveedor de Email, la opción 'Confirm email'

![Alt text](https://carrebola.github.io/vanillaPill/assets/images/image-5-87792411b63ce5e56b0211063866f023.png)

Ahora sí, ya podemos escribir el código del test y ejecutarlo:  
"user.test.js

```
import { expect } from 'chai'

import { User } from '../src/bd/user.js'

// cargamos libreria de supabase
import { supabase } from '../src/bd/supabase.js'

describe('Pruebas para la Clase User', function () {
  let usuarioCreado // Variable para almacenar el usuario creado durante las pruebas

  describe('create()', function () {
    it('debería crear un nuevo usuario', async function () {
      const datosUsuario = { email: 'test@example.com', password: 'testPassword' }

      usuarioCreado = await User.create(datosUsuario)

      expect(usuarioCreado).to.be.an.instanceOf(User)
      expect(usuarioCreado.email).to.equal('test@example.com')
    })
  })

  describe('login()', function () {
    it('debería iniciar sesión de un usuario existente', async function () {
      expect(usuarioCreado).to.be.an.instanceOf(User)

      const datosLogin = { email: 'test@example.com', password: 'testPassword' }

      const usuarioLogueado = await User.login(datosLogin)

      expect(usuarioLogueado).to.be.an.instanceOf(User)
      expect(usuarioLogueado.email).to.equal('test@example.com')
    })
  })

  describe('getUser()', function () {
    it('debería devolver el usuario logueado', async function () {
      // Supongamos que 'usuarioLogueado' es el usuario que se espera obtener al estar logueado
      const usuarioLogueado = await User.getUser()

      // Verificamos que se haya obtenido el usuario esperado
      expect(usuarioLogueado).to.exist // Aseguramos que haya un usuario logueado
      expect(usuarioLogueado).to.be.an.instanceOf(User) // Verificamos que sea una instancia de User

      // Verificamos la propiedad 'email' del usuario logueado
      expect(usuarioLogueado.email).to.equal('test@example.com') // Reemplaza 'correo@example.com' con el email esperado del usuario logueado
    })
  })



  describe('logout()', function () {
    it('debería cerrar sesión del usuario actual', async function () {
      const sesionCerrada = await User.logout()

      expect(sesionCerrada).to.equal(true)
    })
  })

  describe('getUser()', function () {
    it('debería devolver undefined si no hay usuario logueado', async function () {
      // Supongamos que 'usuarioLogueado' es el usuario que se espera obtener al estar logueado
      const usuarioLogueado = await User.getUser()

      // Verificamos que el usuario logueado sea undefined, indicando que no hay sesión activa
      expect(usuarioLogueado).to.equal(undefined)
      // También podríamos usar:
      // expect(usuarioLogueado).to.be.undefined;
      // o
      // expect(usuarioLogueado).to.not.exist;
    })
  })
})

```

Al ejecutar el test con `npm run test` obtenemos estos resultados:

![Alt text](https://carrebola.github.io/vanillaPill/assets/images/image-3-18643620baa9a51779a572a4661652fa.png)

![Alt text](https://carrebola.github.io/vanillaPill/assets/images/image-4-5c5c7105fe8beb1f53f2a72527ce7231.png)

# **Testeando la clase Perfil**

A continuación vemos el archivo con los todos los test. La explicación de lo que hace cada línea la puedes encontrar en los comentarios que hay insertados.

perfil.test.js

```
//Cargamos libreria de testing
import  { expect } from 'chai'

//cargamos libreria de supabase
import { supabase } from '../src/bd/supabase.js';
//Cargamos la clase Perfil
import { Perfil } from '../src/bd/perfil.js';

// Datos para el nuevo perfil
const ArrayPerfiles = [
  {
    nombre: 'carrebola',
    apellidos: 'Yo mismo',
    rol: 'admin'
  },
  {
    nombre: 'Pepe',
    apellidos: 'Gotera',
    rol: 'registrado'
  },
  {
    nombre: 'Juan',
    apellidos: 'Eustaquio',
    rol: 'alumno'
  },
  {
    nombre: 'Iban',
    apellidos: 'A borrarme',
    rol: 'alumno'
  }
]

//Testeando la clase perfil
//Inicialmente no tenemos usuarios registrados así que Borramos toda la tabla perfil

try {
  const { data, error } = await supabase
  .from('perfiles')
  .delete()
  .is('user_id', null)
} catch (error) {
  console.error(error)
}

describe('************** Perfil: Crearemos 4 usuarios con diferentes rols. El último lo leerermos, modificaremos y borraremos', async function() {

  describe('getAll()', async function() {
    it('debería devolver un array de perfiles vacío', async function() {
      //Probamos el método getAll
      const perfiles = await Perfil.getAll()
      //Esperamos que devuelva un array
      expect(perfiles).to.be.an('array')
      //Esperamos que el array esté vacío
      expect(perfiles.length).to.equal(0)
    })
  })


  describe('create()', async function() {
    it('debería crear un nuevo perfil en la tabla "perfiles"', async function() {

      //Objeto que debería devolver tras crear el usuario
      const perfilDevuelto = {
        nombre: 'Iban',
        apellidos: 'A borrarme',
        user_id: null,
        estado: 'pendiente',
        rol: 'alumno',
        avatar: null
      }

      // Crear el nuevo perfil
      await Perfil.create(ArrayPerfiles[0])
      await Perfil.create(ArrayPerfiles[1])
      await Perfil.create(ArrayPerfiles[2])
      await Perfil.create(ArrayPerfiles[3])


      // Verificar que se ha creado el perfil correctamente. (Solo el último perfil)
      //Leemos todos los perfiles
      const perfiles = await Perfil.getAll()
      //Comprobamos que devuelve un array
      expect(perfiles).to.be.an('array')
      //Comprobamos que el array tiene 4 registros
      expect(perfiles.length).to.equal(4)
      //Comprobamos que el último registro tiene los datos del modelo esperado
      expect(perfiles[3]).to.include(perfilDevuelto)
    })
  })

  describe('getById()', function() {
    it('debería devolver el perfil con el ID correspondiente', async function() {
      // Capturamos todos los perfiles
      const perfiles = await Perfil.getAll()
      //Buscamos la posición del último registro
      const ultimoPerfil = perfiles.length - 1
      //capturamos su id
      const perfilId = perfiles[ultimoPerfil].id

      // Obtener el perfil por ID
      const perfil = await Perfil.getById(perfilId)
      //Esperamos que devuelva un instanicia de objeto
      expect(perfil).to.be.an.instanceof(Perfil)
      //Esperamos que el email coincida
      expect(perfil.email).equal(ArrayPerfiles[3].email)
    })
  })



  describe('actualizarPerfil', () => {
    it('debería actualizar el nombre y apellido del perfil', async () => {
      // Capturamos todos los perfiles
      const perfiles = await Perfil.getAll()
      //Buscamos la posición del último registro
      const ultimoPerfil = perfiles.length - 1
      //capturamos su id
      const perfilId = perfiles[ultimoPerfil].id

      // Obtener el perfil por ID
      const perfil = await Perfil.getById(perfilId)

      //Actualizamos los datos
      perfil.nombre = 'Jose'
      perfil.apellidos = 'GoteraNueva'

      //Llamamos al método actualizar
      await perfil.update()
      //Volvemos a leer el perfil modificado
      const perfilActualizado = await Perfil.getById(perfilId)

      //Esperamos que el nombre haya cambiado
      expect(perfilActualizado.nombre).to.equal('Jose')
      //Esperamos que el apellido haya cambiado
      expect(perfilActualizado.apellidos).to.equal('GoteraNueva')
    });

  });

  //Borrar perfil
  describe('borraPerfil', () => {
      it('debería borrar el último perfil creado', async () => {
        // Capturamos todos los perfiles
        let perfiles = await Perfil.getAll()
        //Buscamos la posición del último registro
        let ultimoPerfil = perfiles.length - 1
        //capturamos su id
        let perfilId = perfiles[ultimoPerfil].id

        // Obtener el perfil por ID
        let perfil = await Perfil.getById(perfilId)

        //Borramos el perfil
        const borrado = await Perfil.delete(perfilId)
        //Esperamos que el método devuelva true
        expect(borrado).to.equal(true)
        //verificamos que efectivamente hay un registro menos
        perfiles = await Perfil.getAll()
        expect(perfiles.length).to.equal(3)

      })

   })
})

//exportamos los datos de perfiles

```

# **Testeando la clase Proyectos**

![Alt text](https://carrebola.github.io/vanillaPill/assets/images/image-6-409b773c99abfbd8eac22ebe8c973975.png)

# **Uniendo ambos mundos**

![Alt text](https://carrebola.github.io/vanillaPill/assets/images/image-8319b12366afc9059038a6f1715e6077.png)

Cuando iniciamos el proyecto nos vestimos de 'FrontEnd developer' para crear, desde los bocetos a los prototipos interactivos en html, pasando por la contrucción de la spa con vanillaJS y la programación de la lógica para su funcionamiento, emulando los datos mediante arrays de objetos.

Por otro lado, nuestro yo 'BackEnd Developer' ha construido un sistema de tablas con Postgree basado en el servicio Supabase y un ORM basado en clases javascript como capa de abstracción para la conexión y gestión de datos de nuestra bd.

Este es el momento en el que se casan el programador de frontend y el de backend.

Ha llegado la hora de unir nuestra spa con el servicio de supabase utilizando el orm.

## **Refactorizando vistas y componentes**

Vamos a revisar cada una de las vistas y componentes de nuestro proyecto y sustituir los scripts que utilizan arrays de datos por los métodos de nuestras clases.

# **Login y registro**

Comenzamos la historia actualizando las vistas y componentes para el login y el registro

## **LoginVista**

Esta vista nos permite iniciar sesión. Si revisamos el código script podemos encontrar la función encargada de enviar los datos a la base de datos:

'loginVista.js

```

// Función para enviar datos a la bd
    function enviarDatos (formulario) {
      const email = formulario.email.value
      const pass = formulario.password.value

      // buscamos el indice del email en el array perfiles
      const indexUser = perfiles.findIndex((user) => user.email === email) // 1
      // Si encuentra un usuario
      if (indexUser > 0) {
        // Si la contraseña es correcta
        if (perfiles[indexUser].contraseña === pass) {
          console.log('¡login correcto!')
          const usuario = {
            nombre: perfiles[indexUser].nombre,
            apellidos: perfiles[indexUser].apellidos,
            email: perfiles[indexUser].email,
            rol: perfiles[indexUser].rol,
            avatar: perfiles[indexUser].avatar,
            user_id: perfiles[indexUser].user_id
          }
          // Guardamos datos de usaurio en localstorage
          ls.setUsuario(usuario)
          // Cargamos página home
          window.location = '#/proyectos'
          // Actualizamos el header para que se muestren los menús que corresponden al rol
          header.script()
        } else {
          console.log('La contraseña no corresponde')
          alert('El usuario no existe o la contraseña no es correcta')
        }
      } else {
        console.log('El usuario no existe')
        alert('El usuario no existe o la contraseña no es correcta')
      }
    }

```

Fíjate que en este código, en la función `enviarDatos()` lo que hacemos es buscar en el array `'Perfiles'` un usuario y mirar si la contraseña coincide. Vamos a sustituir este código por el método login() de nuestra clase 'user'

_No olvides importar user.js_

`import { User } from '../bd/user'`

La nueva función `enviarDatos` quedaría así:

loginVista

```
...

// Función para enviar datos a la bd
// Función para enviar datos a la bd
    async function enviarDatos(formulario) {
      try {
        // login
        const user = {
          email: formulario.email.value,
          password: formulario.password.value
        }
        User.logout()
        const usuarioLogueado = await User.login(user)
        console.log('¡login correcto!', usuarioLogueado)
        // Ahora vamos a capturar los datos del perfil del usuario logueado
        console.log('usuarioLogueado', usuarioLogueado);
        const userId = usuarioLogueado.id
        console.log('userId', userId);
        const perfilLogueado = await Perfil.getByUserId(userId)
        console.log('Perfil logueado', perfilLogueado);
        const usuario = {
          email: usuarioLogueado.email,
          rol: perfilLogueado.rol,
          avatar: perfilLogueado.avatar
        }
        console.log('perfil localstorage', usuario);
        // Guardamos datos de usaurio en localstorage
        ls.setUsuario(usuario)
        // Cargamos página home
        window.location = '#/proyectos'
        // Actualizamos el header para que se muestren los menús que corresponden al rol
        header.script()
      } catch (error) {
        console.log('Error al iniciar sesión', error)
        alert('El usuario no existe o la contraseña no es correcta', error)
      }
    }

```

Vamos a ver si todo va según lo previsto. Prueba a introducir un usuario no registrado, una contraseña incorrecta y finalmente uno correcto. Deberíamos ver algo así:

![Alt text](https://carrebola.github.io/vanillaPill/assets/images/image-2-e73433efa4a34d17b5da66a64ab02584.png)

## **Logout**

Para cerrar la sesión debemos modificar la función que encontramos en el componente header

```
// Cerrar sesión
    // Capturamos clic sobre el item de cerrar sesión
    document.querySelector('header').addEventListener('click', (e) => {
      if (e.target.classList.contains('cerrarSesion')) {
        e.preventDefault()
        // Borramos el localstorage
        ls.setUsuario('')
        // Cargamos la pagina home
        window.location = '#/home'
        header.script()
      }
    })

```

Incorporando nuestras clases quedaría así:

Primero importamos la clase User:

`import { User } from '../bd/user'`

header.js

```
...
// Cerrar sesión
    // Capturamos clic sobre el item de cerrar sesión
    document.querySelector('header').addEventListener('click', (e) => {
      if (e.target.classList.contains('cerrarSesion')) {
        e.preventDefault()

        // Cerramos sesión en la bd
        User.logout()
        // Borramos el localstorage
        ls.setUsuario('')
        // Cargamos la pagina home
        window.location = '#/home'
        header.script()
      }
    })
```

Prueba para ver si todo va como esperamos...

![Alt text](https://carrebola.github.io/vanillaPill/assets/images/image-3-4d31f11e0f63a3f801b2fe2d60cf2cd8.png)

## **Registro**

Para el registro usaremos el método create de User. Veamos el código de la vista `registroVista.js`  
registroVista.js

```

 script: () => {
    console.log('vista registro cargada')
    // Validación bootstrap

    // Capturamos el formulario en una variable
    const formulario = document.querySelector('form')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', (event) => {
    // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
      // Detenemos el evento enviar (submit)
        event.preventDefault()
        event.stopPropagation()
      }
      // Y añadimos la clase 'was-validate' para que se muestren los mensajes
      formulario.classList.add('was-validated')
    })
  }

```

Aquí lo que haremos es registrar un usuario usando la clase `User` y después crear un perfil nuevo a través de la clase `Perfil`, empleando los datos del formulario y el `user_id` que nos devuelve el metodo `User.create()`  
registroVista.js

```
  script: () => {
    console.log('vista registro cargada')
    // Validación bootstrap

    // Capturamos el formulario en una variable
    const formulario = document.querySelector('#formularioRegistro')
    // Detectamos su evento submit (enviar)
    formulario.addEventListener('submit', async (event) => {
      // Detenemos el evento enviar (submit)
      event.preventDefault()
      event.stopPropagation()
      // Comprobamos si el formulario no valida
      if (!formulario.checkValidity()) {
        // Y añadimos la clase 'was-validate' para que se muestren los mensajes
        formulario.classList.add('was-validated')
      } else {
        try {
          // Capturamos datos del formulario para el registro
          const usuario = {
            email: formulario.email.value,
            password: formulario.password.value
          }
          console.log('Formulario valido. Datos formulario: ', usuario)
          const user = await User.create(usuario)
          console.log('user creado', user)

          // Capturamos datos del formulario para el perfil
          const perfil = {
            ...usuario,
            user_id: user.id,
            nombre: formulario.nombre.value,
            apellidos: formulario.apellidos.value
          }
          // Insertamos perfil en la base de datos
          Perfil.create(perfil)

          alert('Usuario creado correctamente. Revisa tu email...')
          window.location = '#/login'
        } catch (error) {
          alert('Error al crear usuario', error)
        }
      }
    })
  }
```

Si todo ha ido bien podrás ver como en la base de datos se han creado los registros correspondientes y en nuestra web se muestra el header con los datos correspondientes.

![Alt text](https://carrebola.github.io/vanillaPill/assets/images/image-5-0f3436281e6775cb52ee20c25d8a2c1b.png)

![Alt text](https://carrebola.github.io/vanillaPill/assets/images/image-6-97cd6db3ff99bc6f7f0517ee48591617.png)

![Alt text](https://carrebola.github.io/vanillaPill/assets/images/image-7-94e5659ebb0a7198ef3703bab308ea0c.png)

![Alt text](https://carrebola.github.io/vanillaPill/assets/images/image-8-e3aa7282c70876699854ab0ffef8afc5.png)
