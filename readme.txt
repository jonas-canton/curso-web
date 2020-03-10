Repositório dos exercícios: github.com/cod3rcursos/web-moderno

Para instalar novos módulos, executar comando no terminal:
npm -i <nome do módulo>
Uma pasta chamada node_modules será criada no diretório onde o comando foi executado.
Por padrão o npm instalará a versão mais nova do pacote.

Para instalar novos módulos de forma global (dessa forma não salva dentro da pasta node_modules):
sudo npm i -g <nome do módulo>

O nodemon serve para que, em ambiente de desenvolvimento, toda vez que você modificar o código ele automaticamente fazer o refresh da aplicação com a nova alteração. Ele fica monitorando o arquivo.
Para instalá-lo:
npm -i --save-dev nodemon
Exemplo de como executar o nodemon em um programa:
1) Navegar até a pasta do programa
2) Executar comando: nodemon <nome do arquivo>.js
Obs.: se digitar "rs" no console, ele dá restart no nodemon.

O comando:
npm init
Habilita uma espécie de wizard para dizer como será o arquivo package.json.
O comando:
npm init -y
Responde automaticamente "sim" para todas as perguntas do wizard.

O arquivo package.json, além de descrever o projeto, descreve todas as dependências que o projeto precisa.

O comando:
npm i
Ou
npm install
Vai ler o arquivo package.json e vai instalar todas dependências descritas nesse arquivo.
O comando:
npm i --save
Além de criar a pasta node_modules, irá escrever no arquivo package.json as dependências.
Se for:
npm i --save-dev
Cria a dependência mas indicando que será usada apenas em período de desenvolvimento.

Quando a versão da dependência estiver assim (por exemplo):
^0.17.9 (0 = major, 17 = minor, 9 = patch)
O sinal de ^ significa que vai permitir alterar apenas a versão minor.
Se tiver um sinal de ~, significa que vai permitir alterar apenas o patch.
E se não tiver sinal algum, indica que a versão tem que ser aquela mesma descrita no arquivo.

Para instalar uma dependência com uma versão específica (exemplo):
npm install --save-dev axios@0.17.1 -E
O -E pede para que no package.json fique exatamente aquela versão, sem o ~ ou ^.

O arquivo package-lock.json mostra exatamente o que foi instalado no projeto, é um arquivo que deve ser commitado no repositório do projeto.

Obs.: o axios, utilizando nos exemplos acima, é um client http utilizado para trabalhar com requisições para servidores remotos.

Dentro do arquivo package.json, na parte de scripts, posso criar, por exemplo, um script para startar a aplicação. Se eu criar um script de nome "start", basta executar o comando abaixo estando no diretório do projeto:
npm start
Obs.: start é um comando padrão do Node.js.

O exit 1 retorna erro no log, enquanto exit 0 não retorna.

Se criar um script que não é padrão do Node.js, por exemplo um script de nome "dev", ele só poderá ser executado dessa forma:
npm run dev

Para ver quais são os scripts pré-definidos do npm, acessar:
https://docs.npmjs.com/misc/scripts




Padrão Chain of Responsability (ou Middleware)
Processos separados sem acoplamento.


O que é uma porta? É um número que aponta para um determinado processo que está rodando no servidor. Cada processo que precisa comunicar através da rede precisa ter uma porta, e essa porta é única por processo.

A porta 80 é a porta padrão quando se faz uma requisição HTTP.

Posso ter várias aplicações e fazer com que todas sejam acessíveis através da porta 80? Pode, através da técnica de proxy reverso.


O módulo node-schedule é usado para criar temporizadores para execução de tarefas agendadas. Para instalálo:
npm i node-schedule


Nas aulas de HTML foi instalado o módulo global http-server:
sudo npm i -g http-server
Para iniciar o servidor, foi navegado até a pasta "html" pelo terminal e digitado:
http-server .
Para inicializar indicando que não quero que faça cach das páginas:
http-server -c-1
Se eu quiser que faça cach por 10 segundos:
http-server -c10

Para desinstalar um módulo:
npm uninstall <nome do módulo> --save
Se o módulo foi instalado global, utilizar o parâmetro -g após uninstall

----------------------------------------------------------------------------------------------------------------------

Sites com temas baseados em Bootstrap:
https://wrapbootstrap.com/
https://www.creative-tim.com/

----------------------------------------------------------------------------------------------------------------------

Módulo do Node.js responsável por criar uma aplicação React:

npm i -g create-react-app

Para iniciar um projeto React via linha de comando, navager até o diretório desejado e digitar o comando:

create-react-app <nome_do_projeto>

Para iniciar o projeto:

npm start

O React não usa uma sintaxe JavaScript pura, mas sim a sintaxe chamada JSX (uma espécie de JavaScript extendido. Por baixo dos panos tudo vira JavaScript através de um transpile).








