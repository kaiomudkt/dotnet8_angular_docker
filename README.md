# Como rodar

### Desenvolvimento (hot reload no .NET + Angular)
```bash
sudo docker compose -f docker-compose.dev.yml up --build
```

### Produção (build final, sem hot reload)
```bash
sudo docker compose -f docker-compose.prod.yml up --build
```


# Libs instaldas dentro do container app_dotnet:
```bash
sudo docker exec -it app_dotnet dotnet new tool-manifest
sudo docker exec -it app_dotnet dotnet tool install dotnet-ef --version 8.*
# Permite rodar comandos do Entity Framework Core
sudo docker exec -it app_dotnet dotnet tool install --global dotnet-ef --version 8.*
# Contém toda a base do Entity Framework Core (ORM)
sudo docker exec -it app_dotnet dotnet add package Microsoft.EntityFrameworkCore --version 8.0.10
# Adapta o EF Core para falar com o PostgreSQL
sudo docker exec -it app_dotnet dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 8.0.10
# Usada principalmente em tempo de design (quando você está criando ou atualizando migrations) 
sudo docker exec -it app_dotnet dotnet add package Microsoft.EntityFrameworkCore.Design --version 8.0.10
```

# Comandos dotnet:

### Cria migrations
```bash
dotnet tool run dotnet-ef migrations add Initial
```
### executa migrations pela primeira vez
```bash
dotnet new tool-manifest --force
dotnet tool install dotnet-ef --version 8.*
dotnet tool restore
dotnet ef database update
```

### executa migrations
```bash
dotnet ef database update
```

```bash
```

```bash
```

```bash
```

```bash
```

