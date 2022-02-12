# movieflix-backend-tests

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Daniel-BS-Dev/bootcamp-devsuperior/blob/main/LICENSE)

# Sobre o projeto

Movieflix é um aplicação back end construida durante o capítulo 7 do **Bootcamp DevSuperior 2.0**, curso organizado pela [DevSuperior]
(https://devsuperior.com.br "Site da devSuperior").

O sistema MovieFlix consiste em um banco de filmes, os quais podem ser listados e avaliados pelos usuários. Usuários podem ser visitantes (VISITOR) e membros (MEMBER). Apenas usuários membros podem inserir avaliações no sistema.

Ao acessar o sistema, o usuário deve fazer seu login. Apenas usuários logados podem navegar nos filmes. Logo após fazer o login, o usuário vai para a página home, que mostra os filmes separados por gênero, ordenados alfabeticamente por título. O usuário pode filtrar os filmes por nome, na página filmes será exibido a lista de filmes de forma paginada.

Ao selecionar um filme da listagem, é mostrada uma página de detalhes, onde é possível ver todas informações do filme, e também suas avaliações. Se o usuário for usuário membro, ele pode ainda registrar uma avaliação nessa tela. 

   * Busca paginada de recursos
   * Busca de recurso por Id
   * Inserir novo recurso
  
   
# Modelo Conceitual
![movieflix (2)](https://user-images.githubusercontent.com/81425846/125809059-eb316f49-ddcd-4f27-ab52-ac7337db8b4d.png)

# Layout Front Web
## Login
![login](https://user-images.githubusercontent.com/81425846/153729778-26d6185f-ee6c-4770-bf2a-8543be5039c0.png)
## Home
![home movie](https://user-images.githubusercontent.com/81425846/153729782-4f1e92ec-3766-4e4f-aa47-1a34a9c7fedb.png)
## Filmes
![movie](https://user-images.githubusercontent.com/81425846/153729785-99028bda-b42c-4a74-b5dc-287b67eacf75.png)
## detalhes do Filme
![details](https://user-images.githubusercontent.com/81425846/153729787-b071f4cf-7657-4182-bd31-2e86115d2879.png)

# Layout Mobile
## login
![login mobile](https://user-images.githubusercontent.com/81425846/153729815-4ece7c2a-1940-465a-8480-ceee62b3be45.png)
## filmes
![movie mobile](https://user-images.githubusercontent.com/81425846/153729823-a2896065-c2d4-4ff2-a2cc-78d9e7389178.png)
## Detalhes do Filme
![details mobile](https://user-images.githubusercontent.com/81425846/153729825-e647a724-4233-4eb7-87ee-564b14fb5da2.png)

# Tecnologias Utilizadas
## Back end
   - Java
   - Spring Boot
   - JPA / Hibernate
   - Maven

## Front end
   - VsCode
   - TypeScript
   - Reactjs
   - yarn
   - nodejs
   - HTML
   - CSS
   - Bootstrap
   - React Hook Form
   
## Implementação na Nuvem
   - Heroku
   - Postgres
   - Netlify
  
## Link do projeto: https://db-movieflix.netlify.app
   
# Como executar o projeto

Pré-requisitos : Java 11

* Importação do projeto

     Fazer um simples clone do projeto no Github, importar e executar no STS

* Testes manuais no Postman, você deverá ter as requisições Postman abaixo:
    
 ```java
   # Buscar lista de gênero
     GET 
         /genres
    
   # Busca páginada de filmes
     GET 
        /movies?page=0&linesPerPage=12&direction=ASC&orderby=title
        
   # Busca páginada de filmes por gênero
     GET 
         /movies?genre=1
         
   # Busca de movie por id
     GET 
         /movies/1
         
   # Inserção de um novo comentário
     POST 
         /reviews
       {
         "text":"great movie!",
         "userId":2,
         "movieId": 4
      }
    
  ``````````
  


# Autor 

Daniel Benedito da Silva

Email: danielbenedito263@gmail.com
