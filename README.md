# Reactify

## Notas sobre el ejercicio

Funcionalidades:

* [ ] Mostrar varios listados con música recomendada, resultados de búsqueda y otra información.
* [X] Incluir una barra de navegación lateral o en la zona superior para facilitar la navegación.
* [X]  Incluye una vista de reproducción.
   * [ ] La reproducción final de los audios es opcional, pero recomendada.
* [X]  Incluir distintas vistas en el proyecto.
* [X]  Almacenar en el store de Redux información relevante cómo el usuario.
* [X]  Almacenar en el store de Redux el histórico de canciones escuchadas y álbumes visitados.
* [X]  Almacenar en el store de Redux la información de las respuestas del servidor.
* [X]  Desarrollar una configuración de webpack lista para producción
* [X]  Configurar la aplicación como una PWA


<br />
<hr />
<br />

## Plantilla para la Práctica final

En esta plantilla encontrarás todo lo necesario para realizar la práctica final. La aplicación de React ha sido generada utilizando [create-react-app](https://github.com/facebook/create-react-app). Esto te servirá como comienzo en el desarrollo, aunque tendrás que desarrollar tu propia configuración cuando llegues al apartado 8.

A parte de la aplicación de React, esta plantilla incluye un servidor basadon en [json-server](https://github.com/typicode/json-server) al que puedes hacer peticiones. Este incluye dos tipos de recursos:

* Álbums (albums)
* Canciones (songs)

Puedes ver los distintos parámetros en el fichero `./server/data.json`. A priori, no te hará falta modificar ese fichero, pero siempre puedes agregar nuevos elementos si quieres extender las funcionalidades de tu aplicación.

### Iniciar el proyecto

El proyecto se inicia directamente con `yarn start`, una vez se han instalado las dependencias con `yarn install`.

Este comando hace uso de `npm-run-all` que ejecuta el servidor y el cliente al mismo tiempo. El servidor estará escuchando en el puerto 3001 y la aplicación en el 3000. No obstante, la aplicación ya viene preconfigurada con un proxy que redirige cualquier llamada al servidor. Por ejemplo:

```/albums -> http://localhost:3001/albums```

### Dudas

Cualquier duda que tengáis sobre la plantilla o el proyecto la podéis resolver en los foros. Estaré encantado de ayudarte a completar la práctica.

### Créditos

* Fotografía de la carátula de los álbums por [James Owen](https://unsplash.com/photos/c-NBiJrhwdM)
* Audio compuesto por [Kevin MacLeod](https://twitter.com/kmacleod)


## Requisitos

De cara a la evaluación, este apartado incluye las funcionalidades mínimas que tu aplicación debe de incluir. No obstante, puedes incluir cualquier otra funcionalidad que quieras.

### Funcionalidades

* Mostrar varios listados con música recomendada, resultados de búsqueda y otra información.
* Incluir una barra de navegación lateral o en la zona superior para facilitar la navegación.
* Incluye una vista de reproducción. La reproducción final de los audios es opcional, pero recomendada.
* Incluir distintas vistas en el proyecto.
* Almacenar en el store de Redux información relevante cómo el usuario.
* Almacenar en el store de Redux el histórico de canciones escuchadas y álbumes visitados.
* Almacenar en el store de Redux la información de las respuestas del servidor.
* Desarrollar una configuración de webpack lista para producción
* Configurar la aplicación como una PWA

#### Para ampliar

* Buscar música
* Implementar el reproductor de audio


### Vistas

* Inicio: se muestra el listado de música recomendada
* Álbums: muestra los distintos álbums disponibles.
* Álbum: muestra información sobre el álbum actual como el listado de canciones,
tiempo total, imagen del álbum...
* Reproductor: muestra el proceso de reproducción actual. Se activa cuando el usuario hace click en una canción.
* Inicio de sesión: esta pantalla muestra un formulario para iniciar sesión. No hace falta que conectes este formulario con el backend, sino que lo que el usuario agregue al formulario valide directamente y se almacene dicha información en el store de Redux.
* Perfil de usuario: almacena información privada del usuario por lo que sólo se puede acceder a esta vista si el usuario ha iniciado sesión.

#### Para ampliar

* Búsqueda: muestra un listado con los resultados de búsqueda.
* Reproductor flotante: Incluye el reproductor como parte de las otras vistas para que el usuario pueda seguir escuchando música aunque no se encuentre en la vista del reproductor.


## Objetivos

El objetivo principal de esta práctica es que apliquéis los conceptos que vayáis aprendiendo durante el curso. Puedes utilizar la siguiente sección cómo un guión de las funcionalidades a implementar:

### Por bloques

#### Bloque 1

Durante el aprendizaje de este bloque puedes ir planteando la interfaz que
vas a desarrollar.

Mi consejo es que cojas papel y boli y te imagines cómo va a quedar tu aplicación de manera general.

Una vez que tengas este contexto, puedes empezar a identificar pequeños componentes en los que podrás aplicar los patrones que aprendas en esta lección

#### Bloque 2

Investiga cómo funcionan React.lazy y React.Suspense. Planifica cómo puedes
mejorar la experiencia de usuario utilizando estos componentes. Puedes comenzar desarrollando un componente Loader para tu aplicación.

No te olvides de comprobar que tu aplicación está lista para el modo concurrente con React.StrictMode.

#### Bloque 3

Comienza a desarrollar las vistas de tu aplicación. Puedes crear las distintas vistas como componentes vacíos y desarrollarlas poco a poco. No olvides aprobar las ventajas de React.lazy y React.Suspense para la carga de estas pantallas y sus elementos internos.

Si quieres comenzar a mostrar resultados, puedes importar directamente le JSON de la carpeta del servidor en tu componente. En el bloque 5 tendrás que sustituir este comportamiento por llamadas al servidor.

#### Bloque 4

Define el store principal de tu aplicación dónde almacenar la información del usuario y el histórico de reproducción. Puedes almacenar otro tipo información en el store si quieres.

#### Bloque 5

Empieza a leer los datos de tu aplicación. Selecciona una de las dos librerías para la gestión de acciones asíncronas en Redux y comienza a almacenar los datos en el store.

#### Bloque 6

Aplica los distintos consejos del apartado de WAI-ARIA y desarrolla un componente haciendo uso de las guías de desarrollo. Comprueba haciendo uso de extensiones y con testing manual que tu aplicación es accesible.

#### Bloque 7

Agrega tests a tu aplicación. No es necesario que hagas testing de todos los componentes, pero como mínimo debes de incluir estos tests:
* Testing de 2 componentes de presentación
* Testing de 1 vista. Utiliza los mocks para testar la integración con el servidor
* Tests de integración

#### Bloque 8

Elimina react-scripts de de las dependencias y define una nueva configuración de webpack para tu proyecto. Prepara tu proyecto para producción.

#### Bloque 9

Convierte tu aplicación en una PWA. Incluye el manifiesto y gestiona las versiones de tu aplicación mediante el uso de los service workers.

#### Bloque 10

En este bloque sólo se ha dado una introducción a SSR con Next, por lo que no voy a evaluar dicho contenido en la práctica final. Pero si quieres probar a Next, puedes crear una nueva carpeta dentro del repositorio y crear una nueva web con Next como página web Reactify. El objetivo de esta página es el SEO, por lo que Next te ayudará a que la carga sea mucho más rápida y el contenido esté disponible aunque JavaScript esté deshabilitado.
