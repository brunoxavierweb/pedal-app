# Pedal-app

CRIANDO API REST - NODE.JS & MONGOO DB
  --backend
    -- npm init -y
    -- npm i --save-dev 
       * body-parser@1.15.2 (parse de requisições do form .json)
       * express@4.14.0 (Webservices)
       * mongoose@4.7.0 (conexao com o bd , mapeamento de doc e validacoes)
       * node-restful@0.2.5 (library criação de webservices)
       * pm2@2.1.5 (Gerenciador de Aplicação servidor & Deploy & Monitorando)
       * nodemon@1.11.0 (Gerenciador de Aplicação modo producao)

backend -> package.json (Inserir)
                   -- "main": "src/loader.js", (start na aplicação)
                   --  "dev": "nodemon",
                   --  "production":  "pm2 start src/loader.js --name todo-app"

backend -> src
                   -- loader.js (todas as require do projetos)

backend -> src -> config
                   -- server.js (start servidor e alocar portas para o servers)
                   -- database.js (define o Schema do Mongo)
                   -- route.js (define as rotas da api e do app)
                   -- cors.js (define as athorization origin e headers)

Inicializar App - npm run dev /npm run production (pm2)

MONGOO - iniciar mongod

backend -> src -> api 
                      todo -- todo.js / todoService.js
                  ** todo.js (centraliza os exports da app)
                  ** todoServices.js (centraliza a APIREST)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

--frontend
           --npm init -y
           --npm i --save-dev 
              webpack@1.14.0 (Gerenciador de Dependencias)
              webpack-dev-server@1.16.2
              babel-core@6.22.1 (Compilador Jsx)
              babel-loader@6.22.1 (conexao entre o babel e o webpack)
              babel-plugin-react-html-attrs@2.0.0 (Plugin)
              babel-plugin-transform-object-rest-spread@6.22.0()
              babel-preset-es2015@6.22.0 (preset es6 )
              babel-preset-react@6.22.0 (preset react)
              
              extract-text-webpack-plugin@1.0.1 ( Processo css)
              css-loader@0.26.1 (loader css)
              style-loader@0.13.1 (loader css)
              file-loader@0.9.0 (fonts e images)
              
              bootstrap@3.3.7(bootsrap)
              font-awesome@4.7.0

              react@15.4.2
              react-dom@15.4.2
              react-router@3.0.2
              axios@0.15.3 (framework promises)
