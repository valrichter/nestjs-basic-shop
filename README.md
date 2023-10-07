# <img id="nestjs" src="https://devicon-website.vercel.app/api/nestjs/plain.svg" width="30" /> Proyecto Backend de E-commerce con Nest

1. Clonar proyecto
2. ```yarn install```
3. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```
4. Cambiar las variables de entorno
5. Levantar la base de datos
```
docker-compose up -d
```
6. Levantar: ```yarn start:dev```

## Acciones ralizadas

10.18 -> 11.1
1. Incio del proyecyo con NestCLI
2. Configuracion de PostgreSQL con docker-compose
3. Coneccion a la DB
4. Insercion de la tabla Product mediante TypeOrm
5. Se agrego el Product DTO, se actualizo su CRUD y se agregaron propiedades a su DTO
6. Manejo de errores en ```products.service```
7. Cofiguracion de @BeforeInsert() y @BeforeUpdate() en ```product.entity``` para insercion de etiquetas (slug) automaticamente
8. Se agrego findAll, findOne, y remove a ```products.service``` API
9. Se agrego paginacion a findAll de ```products.service```
10. Se agrego busqueda por id o slug al metodo findOne de ```products.service```
11. Se agrego actualizacion por id de los atributos de product mediante la funcion update de ```products.service```
12. Se agrego una nueva columba "Tags" a la entidad Products  