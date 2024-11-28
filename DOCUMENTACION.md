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
