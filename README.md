Práctica final Docker-Compose

Para empezar con este proyecto, vamos a crear el repositorio github y después lo clonaremos en el ordenador para empezar a trabajar desde ahí:

Una vez hecha la clonación, accedemos al terminar y creamos una nueva rama en git mediante los siguientes comandos “git checkout main”, “git pull origin main” y “git checkout -b main_docker_compose” tal y como se muestra en la siguiente pantalla:

Una vez creada la rama, nos aseguramos que estamos dentro de la rama creada “main_docker_compose” mediante el comando “git branch -a” y seguimos con la elaboración del proyecto:

Acto seguido, procedemos a realizar (tras añadir los archivos principales de app, datasources, nginx.conf y prometheus) el archivo docker-compose.yml con los siguientes datos:

---

version: "3"

services:

# app:

# container_name: exampleapp

# restart: always

# build: .

# ports:

# - "4000:3000"

# depends_on:

# - mongo

# volumes:

# - .:/usr/src/app

mongo:
container_name: mymongodatabase
image: mongo:latest
restart: always # command: mongorestore -d movies ./db-dump
environment:
MONGO_INITDB_DATABASE: movies
ports: - "27018:27017"
volumes: - ./mongorestore.sh:/docker-entrypoint-initdb.d/mongorestore.sh - ./dump:/dump

Tras esto, realizamos el uso del comando “docker-compose build” de forma que se implementará el dump para la conexión de la base de datos:

Seguidamente abrimos mongoDB para ver la conexión de la misma.

Finalmente tenemos todo comprobado y en funcionamiento, por lo que pasamos a la realización del backend y del frontend creando una carpeta para cada una de las partes donde situaremos los mismos archivos en cada carpeta a excepción del archivo dentro de rutas:

Empezamos mostrando los archivos “index.js”, “database.js” y “index.routes.js” de la carpeta “backend”:

Seguimos mostrando los archivos de la carpeta “frontend”:

Vistos estos archivos, hay que darse cuenta que “index.js” y “database.js” son iguales pero que “index.routes.js” sí es diferente. Acto seguido, revisamos el archivo “Dockerfile-backend” y “Dockerfile-frontend”, que tienen la misma información pero cada uno tiene su nombre:

Y finalmente mostramos los archivos “package.json” que son los mismos tanto en una carpeta como en la otra:

Una vez terminadas las carpetas de “backend” y “frontend”, completamos el archivo “docker-compose.yml” para añadir ambas partes quedando este archivo de la siguiente forma:

version: "3"

services:

# app:

# container_name: exampleapp

# restart: always

# build: .

# ports:

# - "4000:3000"

# depends_on:

# - mongo

# volumes:

# - .:/usr/src/app

mongo:
container_name: mymongodatabase
image: mongo:latest
restart: always # command: mongorestore -d movies ./db-dump
environment:
MONGO_INITDB_DATABASE: movies
ports: - "27018:27017"
volumes: - ./mongorestore.sh:/docker-entrypoint-initdb.d/mongorestore.sh - ./dump:/dump

backend:
container_name: backend_container
build:
context: ./backend
dockerfile: Dockerfile-backend
depends_on: - mongo
ports: - "3000:3000"

frontend:
container_name: frontend_container
build:
context: ./frontend
dockerfile: Dockerfile-frontend
depends_on: - backend
ports: - "4000:4000"

Una vez finalizado todo el proceso, reconstruimos el docker eliminando los contenedores y volviendo a ejecutar el comando “docker-compose build” y reiniciamos el contenedor con “docker-compose up -d”:

Una vez ejecutado, comprobamos Docker desktop para comprobar que funcionan los contenedores:

De esta forma, comprobamos la funcionalidad tras comprobar que en cada puerto se establece el mensaje de prueba que establecimos en cada fichero de prueba.

Tras la comprobación, pasamos a realizar el apartado del contenedor mongo, para ello, añadimos los siguientes datos al archivo “docker-compose.yml”:
version: "3"

services:

# app:

# container_name: exampleapp

# restart: always

# build: .

# ports:

# - "4000:3000"

# depends_on:

# - mongo

# volumes:

# - .:/usr/src/app

mongo:
container_name: mymongodatabase
image: mongo:latest
restart: always # command: mongorestore -d movies ./db-dump
environment:
MONGO_INITDB_DATABASE: movies
ports: - "27018:27017"
volumes: - ./mongorestore.sh:/docker-entrypoint-initdb.d/mongorestore.sh - ./dump:/dump

backend:
container_name: backend_container
build:
context: ./backend
dockerfile: Dockerfile-backend
depends_on: - mongo
ports: - "3000:3000"

frontend:
container_name: frontend_container
build:
context: ./frontend
dockerfile: Dockerfile-frontend
depends_on: - backend
ports: - "4000:4000"

mongo-express:
container_name: adminMongo_container
image: mongo-express:latest
environment: - ME_CONFIG_MONGODB_SERVER=mongo - ME_CONFIG_MONGODB_PORT=27017
ports: - "8081:8081"
depends_on: - mongo

Una vez añadida la información, volvemos a ejecutar “docker-compose up -d”:

Comprobamos el Docker Desktop para ver que se ha creado el contenedor y realizamos la comprobación en el navegador con la ruta del localhost y el puerto (localhost:8081):

Al acceder a la ruta nos pedirá los credenciales para acceder. Tras seguir la documentación, añadimos “admin” como usuario y “pass” como la contraseña.

Tras la comprobación y verificación del funcionamiento, pasamos al apartado del contenedor “nginx”. Para ello, creamos el archivo “nginx.conf” el cual debe contener tanto la parte backend como la parte frontend. Este archivo debe quedar de la siguiente forma:

events {
worker_connections 1024;
}

http {
upstream frontend {
server frontend:4000;
}
upstream backend {
server backend:3000;
}

server {
listen 80;

    location / {
       proxy_pass http://frontend;
       proxy_set_header Host $host;
    }


    location /api {
       proxy_pass http://backend;
       proxy_set_header Host $host;
    }

}
}

Y añadimos la última parte al archivo “docker-compose.yml” que quedará de definitivamente de la siguiente manera:

version: "3"

services:

# app:

# container_name: exampleapp

# restart: always

# build: .

# ports:

# - "4000:3000"

# depends_on:

# - mongo

# volumes:

# - .:/usr/src/app

mongo:
container_name: mymongodatabase
image: mongo:latest
restart: always # command: mongorestore -d movies ./db-dump
environment:
MONGO_INITDB_DATABASE: movies
ports: - "27018:27017"
volumes: - ./mongorestore.sh:/docker-entrypoint-initdb.d/mongorestore.sh - ./dump:/dump

backend:
container_name: backend_container
build:
context: ./backend
dockerfile: Dockerfile-backend
depends_on: - mongo
ports: - "3000:3000"

frontend:
container_name: frontend_container
build:
context: ./frontend
dockerfile: Dockerfile-frontend
depends_on: - backend
ports: - "4000:4000"

mongo-express:
container_name: adminMongo_container
image: mongo-express:latest
environment: - ME_CONFIG_MONGODB_SERVER=mongo - ME_CONFIG_MONGODB_PORT=27017
ports: - "8081:8081"
depends_on: - mongo

nginx:
container_name: nginx_loadbalancer
image: nginx:latest
volumes: - ./nginx.conf:/etc/nginx/nginx.conf
command: ["nginx", "-g", "daemon off;"]
ports: - "80:80"
depends_on: - backend - frontend

De tal forma, volvemos a ejecutar el comando “docker-compose up -d”:

Y comprobamos en Docker desktop que los contenedores se hayan creado y funcionen correctamente tras verificarlo en el navegador usando el localhost y los puertos correspondientes.
