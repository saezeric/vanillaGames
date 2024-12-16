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
