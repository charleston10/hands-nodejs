# Hands API RESTful

API criada para fornecer informações de cada aparelho celular e quais aplicativos instalados

## Projeto base 

https://github.com/nautilustar/nautilustar-orchestrator-api-nodejs.git

## Instalação

`npm install`


## API Requests

`IMPORTS`

    POST /v1/imports
    Host: localhost:3000
    Cache-Control: no-cache
    Content-Type: multipart/form-data
    Form: file - list_import.csv

`FIND ALL`

    GET /v1/info
    Host: localhost:3000
    Cache-Control: no-cache

`FIND BY ID`

    GET /v1/info/{ID}
    Host: localhost:3000
    Cache-Control: no-cache

`SAVE`

    POST /v1/info
    Host: localhost:3000
    Content-Type: application/json    

`UPDATE`

    PUT /v1/info/{ID}
    Host: localhost:3000
    Content-Type: application/json

`DELETE`

    DELETE /v1/info/{ID}
    Host: localhost:3000
    Cache-Control: no-cache

### Estrutura Base

/**application**
- - -/business
- - -/filters
- - -/interceptors
- - -/model
- - -/repository
- - -/routes
- - -/util

/**configurations**
- - -database.js
- - -filters.js
- - -database.js
- - -interceptors.js
- - -routes.js

/**node-modules**

/**templates**

/**tests**

index.js

gulpfile.js

package.json

enviroment.env
