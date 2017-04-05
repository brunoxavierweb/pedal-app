# Pedal-app

*CRIANDO API REST - NODE.JS & MONGOO DB*  <br><br>
  --backend<br>
    -- npm init -y<br>
    -- npm i --save-dev <br>
       * body-parser@1.15.2 (parse de requisições do form .json)<br>
       * express@4.14.0 (Webservices)<br>
       * mongoose@4.7.0 (conexao com o bd , mapeamento de doc e validacoes)<br>
       * node-restful@0.2.5 (library criação de webservices)<br>
       * pm2@2.1.5 (Gerenciador de Aplicação servidor & Deploy & Monitorando)<br>
       * nodemon@1.11.0 (Gerenciador de Aplicação modo producao)<br><br>

backend -> package.json (Inserir)<br>
                   -- "main": "src/loader.js", (start na aplicação)<br>
                   --  "dev": "nodemon",<br>
                   --  "production":  "pm2 start src/loader.js --name todo-app"<br>

backend -> src<br>
                   -- loader.js (todas as require do projetos)<br><br>

backend -> src -> config<br>
                   -- server.js (start servidor e alocar portas para o servers)<br>
                   -- database.js (define o Schema do Mongo)<br>
                   -- route.js (define as rotas da api e do app)<br>
                   -- cors.js (define as athorization origin e headers)<br><br>

Inicializar App - npm run dev /npm run production (pm2)<br>

MONGOO - iniciar mongod<br>

backend -> src -> api <br>
                     todo -- todo.js / todoService.js <br>
                  ** todo.js (centraliza os exports da app) <br>
                  ** todoServices.js (centraliza a APIREST) <br>

--frontend <br>
           --npm init -y <br>
           --npm i --save-dev  <br>
              webpack@1.14.0 (Gerenciador de Dependencias) <br>
              webpack-dev-server@1.16.2 <br>
              babel-core@6.22.1 (Compilador Jsx) <br>
              babel-loader@6.22.1 (conexao entre o babel e o webpack) <br>
              babel-plugin-react-html-attrs@2.0.0 (Plugin) <br>
              babel-plugin-transform-object-rest-spread@6.22.0() <br>
              babel-preset-es2015@6.22.0 (preset es6 ) <br>
              babel-preset-react@6.22.0 (preset react) <br>
              
              extract-text-webpack-plugin@1.0.1 ( Processo css) <br>
              css-loader@0.26.1 (loader css) <br>
              style-loader@0.13.1 (loader css) <br>
              file-loader@0.9.0 (fonts e images) <br>
              
              bootstrap@3.3.7(bootsrap) <br>
              font-awesome@4.7.0 <br>

              react@15.4.2 <br>
              react-dom@15.4.2 <br>
              react-router@3.0.2 <br>
              axios@0.15.3 (framework promises) <br><br>
