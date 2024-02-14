Práctica final Docker-Compose

Para empezar con este proyecto, vamos a crear el repositorio github y después lo clonaremos en el ordenador para empezar a trabajar desde ahí:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/01.png" alt="Descripción de la imagen">

Una vez hecha la clonación, accedemos al terminar y creamos una nueva rama en git mediante los siguientes comandos “git checkout main”, “git pull origin main” y “git checkout -b main_docker_compose” tal y como se muestra en la siguiente pantalla:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/02.png" alt="Descripción de la imagen">

Una vez creada la rama, nos aseguramos que estamos dentro de la rama creada “main_docker_compose” mediante el comando “git branch -a” y seguimos con la elaboración del proyecto:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/03.png" alt="Descripción de la imagen">

Antes de empezar, procedemos a realizar (tras añadir los archivos principales de app, datasources, nginx.conf y prometheus) ejecutaremos estos dos primeros comandos para inicializar el proyecto, “npm init -y” y “npm i express mongoose”. Acto seguido, crearemos el archivo docker-compose.yml con los siguientes datos:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/28.png" alt="Descripción de la imagen">

Tras esto, realizamos el uso del comando “docker-compose build” de forma que se implementará el dump para la conexión de la base de datos:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/04-16.png" alt="Descripción de la imagen">

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/05.png" alt="Descripción de la imagen">

Seguidamente abrimos mongoDB para ver la conexión de la misma.

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/06.png" alt="Descripción de la imagen">

Finalmente tenemos todo comprobado y en funcionamiento, por lo que pasamos a la realización del backend y del frontend creando una carpeta para cada una de las partes donde situaremos los mismos archivos en cada carpeta a excepción del archivo dentro de rutas:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/07.png" alt="Descripción de la imagen">

Empezamos mostrando los archivos “index.js”, “database.js” y “index.routes.js” de la carpeta “backend”:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/08.png" alt="Descripción de la imagen">

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/09.png" alt="Descripción de la imagen">

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/10.png" alt="Descripción de la imagen">

Seguimos mostrando los archivos de la carpeta “frontend”:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/11.png" alt="Descripción de la imagen">

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/12.png" alt="Descripción de la imagen">

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/13.png" alt="Descripción de la imagen">

Vistos estos archivos, hay que darse cuenta que “index.js” y “database.js” son iguales pero que “index.routes.js” sí es diferente. Acto seguido, revisamos el archivo “Dockerfile-backend” y “Dockerfile-frontend”, que tienen la misma información pero cada uno tiene su nombre:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/14.png" alt="Descripción de la imagen">

Y finalmente mostramos los archivos “package.json” que son los mismos tanto en una carpeta como en la otra:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/15.png" alt="Descripción de la imagen">

Una vez terminadas las carpetas de “backend” y “frontend”, completamos el archivo “docker-compose.yml” para añadir ambas partes quedando este archivo de la siguiente forma:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/29.png" alt="Descripción de la imagen">
    
Una vez finalizado todo el proceso, reconstruimos el docker eliminando los contenedores y volviendo a ejecutar el comando “docker-compose build” y reiniciamos el contenedor con “docker-compose up -d”:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/04-16.png" alt="Descripción de la imagen">

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/17.png" alt="Descripción de la imagen">

Una vez ejecutado, comprobamos Docker desktop para comprobar que funcionan los contenedores:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/18.png" alt="Descripción de la imagen"><image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/19.png" alt="Descripción de la imagen">

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/20.png" alt="Descripción de la imagen">

De esta forma, comprobamos la funcionalidad tras comprobar que en cada puerto se establece el mensaje de prueba que establecimos en cada fichero de prueba.

Tras la comprobación, pasamos a realizar el apartado del contenedor mongo, para ello, añadimos los siguientes datos al archivo “docker-compose.yml”:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/30.png" alt="Descripción de la imagen">

Una vez añadida la información, volvemos a ejecutar “docker-compose up -d”:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/17.png" alt="Descripción de la imagen">

Comprobamos el Docker Desktop para ver que se ha creado el contenedor y realizamos la comprobación en el navegador con la ruta del localhost y el puerto (localhost:8081):

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/21.png" alt="Descripción de la imagen">

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/22.png" alt="Descripción de la imagen">

Al acceder a la ruta nos pedirá los credenciales para acceder. Tras seguir la documentación, añadimos “admin” como usuario y “pass” como la contraseña.

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/23.png" alt="Descripción de la imagen">

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/24.png" alt="Descripción de la imagen">

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/25.png" alt="Descripción de la imagen">

Tras la comprobación y verificación del funcionamiento, pasamos al apartado del contenedor “nginx”. Para ello, creamos el archivo “nginx.conf” el cual debe contener tanto la parte backend como la parte frontend. Este archivo debe quedar de la siguiente forma:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/32.png" alt="Descripción de la imagen">
    
Y añadimos la última parte al archivo “docker-compose.yml” que quedará de definitivamente de la siguiente manera:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/31.png" alt="Descripción de la imagen">

De tal forma, volvemos a ejecutar el comando “docker-compose up -d”:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/17.png" alt="Descripción de la imagen">

Y comprobamos en Docker desktop que los contenedores se hayan creado y funcionen correctamente tras verificarlo en el navegador usando el localhost y los puertos correspondientes:

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/26.png" alt="Descripción de la imagen">

<image src="https://github.com/vanoenriquejordi/PracticaDockerCompose2024JordiVa-Enrique/blob/main/imagenes/27.png" alt="Descripción de la imagen">
