
#creamos la imagen
docker build -t hello-node .

#comprobamos que esta con:
docker images

#ejecutar la imagen en un container y mapear puertos
docker run -p 4000:3000 hello-node

docker-compose build

#Esto ara que se vayan copiando los cambios de nuestro entorno de trabajo:
    volumes:
      - .:/usr/src/app

#Para acceder a la imagen que hemos creado :
docker ps
#Con esto sabemos el nombre y lo aplicamos:
docker exec -it exampleapp bash

#instalamos nodemon para que se reinicie el servidor cuando cambie el codigo
npm i nodemon -D

#y lo ejecutamos en script para que este siempre al tanto
"dev": "nodemon src/index.js"
#cambiamos el arranque de dockerfile
CMD ["npm", "run", "dev"]