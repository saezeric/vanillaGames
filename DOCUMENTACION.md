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
- Comunicar los requisitos del sistema entre los miembros del equipo de desarrollo, los *stakeholders* y los usuarios finales.

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

Si el usuario registrado tiene el perfil de *desarrollador*, además, debe poder:
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
   - **i.** Realizaremos un *Benchmarking* (para copiar a la competencia).
   - **ii.** Crearemos un modelo de usuarios.
   - **iii.** Diseñaremos los prototipos de bajo nivel (bocetos, wireframes).
   - **iv.** Diseñaremos el *mockup* (prototipo de alto nivel) junto a la guía de estilos (usaremos la aplicación Figma).
   - **v.** Haremos pruebas de usabilidad y rediseñaremos los prototipos.

5. **Programación del frontend (HTML/CSS/JS):**  
   Maquetaremos los prototipos (HTML/CSS) y diseñaremos la lógica de validación de cliente.

6. **Programación del backend:**  
   Utilizaremos un backend como servicio (SUPABASE) para:
   - Crear las bases de datos.
   - Diseñar consultas SQL y funciones *Postgres*.
   - Programar un ORM en JavaScript para el *mapping* de la base de datos.

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
   *[Aquí tienes más información sobre las diferentes arquitecturas]*.

- **Client-side rendering (CSR):**  
   En CSR, el servidor envía una página web vacía o mínima al navegador del cliente y luego el cliente utiliza JavaScript para renderizar el contenido. Esto significa que el navegador necesita descargar e interpretar el código JavaScript para mostrar el contenido. CSR es beneficioso para la interactividad de la página y una mejor experiencia de usuario.  
   *[Aquí tienes más información sobre las diferentes arquitecturas]*.

- **Static site generation (SSG):**  
   En SSG, el contenido de una página web se genera de antemano en archivos HTML estáticos, los cuales se sirven al navegador del cliente. Esto es ideal para sitios web con contenido estático que no necesita actualizaciones frecuentes y para mejorar la velocidad de carga de la página.  
   *[Aquí tienes más información sobre las diferentes arquitecturas]*.

- **Incremental static regeneration (ISR):**  
   ISR es una técnica de SSG que permite actualizar secciones específicas de una página web en lugar de regenerar la página completa cada vez. Esto es útil para páginas web que contienen contenido estático pero que necesitan actualizar secciones específicas de forma frecuente.  
   *[Aquí tienes más información sobre las diferentes arquitecturas]*.

---

### **¿Qué arquitectura vamos a utilizar en nuestro proyecto?**
Nos basaremos en **CSR**: renderizamos todo el código HTML en el navegador. El cliente solo se encargará de responder a las peticiones devolviendo los datos solicitados (en formato JSON). De esta manera, podemos dividir la implementación del proyecto en **FRONTEND** y **BACKEND**, separando cada funcionalidad y desarrollándola de manera independiente.

### **¿Cómo diseñaremos nuestro Frontend?**
#### **Diseño de la interfaz**
1. Crearemos los bocetos de nuestra aplicación (*con papel y lápiz, como se ha hecho siempre*).
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
   - Almacenamiento de archivos en los *buckets* (para imágenes).
   - Una API en JavaScript para las peticiones más frecuentes que atacan a las tablas de la base de datos (CRUD) y un sistema de funciones personalizadas.

### **Nuestro entorno de desarrollo: VSCODE**
1. Trabajaremos con **VSCode** sobre **Nodejs** y su gestor de paquetes **npm**.
2. Configuraremos el IDE con los plugins necesarios para facilitar un buen flujo de trabajo.
3. Formatearemos el código siguiendo el estándar 'Standard' mediante herramientas de verificación como 'Eslint'.
4. Usaremos un repositorio **Git** sincronizado con **GitHub** para el control de versiones.

### **Y para el despliegue de nuestras aplicaciones**
Desplegaremos el proyecto en **GitHub Pages** (en la fase de pruebas) y utilizaremos un servicio como **RailWay**, **Netlify**, etc., para el despliegue en producción.

### **Requisitos y diagrama de casos de uso**

En la introducción de esta documentación, en la sección **El proyecto Vanilla Games**, en concreto en el apartado **Requisitos del proyecto y casos de uso general**, hemos definido qué se espera de nuestra aplicación web, a partir de los *'Casos de uso general'*.

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
10. **Ver/Editar usuarios:** Un administrador puede ver una tabla con todos los usuarios registrados y editar la información, incluido el *ROL* de usuario.
11. **Eliminar usuario:** Un administrador puede eliminar cualquier usuario registrado en la plataforma.

---

### **Diagrama de casos de uso**
Para tener la información de manera gráfica, vamos a utilizar uno de los **diagramas UML** que aprendimos a hacer el curso pasado:

> **Información**  
> **¿Qué es un diagrama UML?**  
> UML, que significa *Lenguaje de Modelado Unificado* (*Unified Modeling Language*, en inglés), es un lenguaje estándar utilizado en el desarrollo de software para visualizar, especificar, construir y documentar los artefactos de un sistema. Los diagramas UML son representaciones gráficas utilizadas en UML para modelar diferentes aspectos del sistema.
>
> Existen varios tipos de diagramas UML, cada uno de los cuales se enfoca en un aspecto específico del sistema y proporciona diferentes niveles de detalle. Algunos de los diagramas UML más comunes son:
> - **Diagrama de casos de uso:** Describe las interacciones entre los actores y el sistema, mostrando qué funcionalidades proporciona el sistema a los usuarios.
> - **Diagrama de clases:** Representa la estructura estática del sistema, mostrando las clases, sus atributos, métodos y las relaciones entre ellas.
> - **Diagrama de secuencia:** Muestra la interacción entre los objetos en una secuencia temporal, describiendo cómo los objetos se comunican y colaboran entre sí.
> - **Diagrama de actividades:** Describe el flujo de trabajo o los procesos empresariales en un sistema, mostrando las actividades y las decisiones que se toman en cada etapa.
> - **Diagrama de componentes:** Muestra la estructura de componentes de un sistema, identificando los componentes y las dependencias entre ellos.
> - **Diagrama de despliegue:** Representa la arquitectura física del sistema, mostrando cómo los componentes se distribuyen en el hardware y la red.
>
> Estos son solo algunos ejemplos de los diagramas UML más utilizados, pero hay otros diagramas, como el *diagrama de estados*, el *diagrama de objetos* y el *diagrama de comunicación*, que también se utilizan para modelar diferentes aspectos de un sistema. En general, los diagramas UML proporcionan una representación visual clara y sistemática del sistema, lo que facilita la comprensión, la comunicación y el diseño del software.
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
> *Figma* es una herramienta de diseño de interfaces de usuario (UI) y experiencia de usuario (UX) basada en la nube. Permite a los diseñadores crear, prototipar y colaborar en diseños interactivos de alta calidad de forma colaborativa.

El diagrama de casos de uso para la **versión 1.0** sería el siguiente:

---

### **Diagrama de casos de uso para la versión 1.0**

![Diagrama de casos de uso](https://carrebola.github.io/vanillaPill/assets/images/diagramaCasosUso_1-3fc60e64208490df3bd2eb0f595cedbc.png)

Este diagrama refleja de forma resumida qué acciones se pueden llevar a cabo en nuestra aplicación dependiendo del rol del usuario.

Ahora que tenemos claro todo lo que debe hacer la versión 1.0, nuestra misión es planificar el trabajo que se nos viene encima...
