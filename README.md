# Como rodar

### Desenvolvimento (hot reload no .NET + Angular)
```bash
sudo docker compose -f docker-compose.dev.yml up --build
```

### Produção (build final, sem hot reload)
```bash
sudo docker compose -f docker-compose.prod.yml up --build
```
