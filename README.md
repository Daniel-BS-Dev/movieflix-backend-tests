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

# Tecnologias Utilizadas
   - Java
   - Spring Boot
   - JPA / Hibernate
   - Maven
   
# Como executar o projeto

Pré-requisitos : Java 8

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
