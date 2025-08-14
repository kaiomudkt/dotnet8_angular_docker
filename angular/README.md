# configurando projeto pela primera vez

### Ao rodar pela primeira vez o angular ainda não vai ter node_modules gerando erro, mas o container ainda estará disponivel para entrar nele e executar o comando npm install

```bash
sudo docker compose -f docker-compose.dev.yml down -v
```
```bash
sudo docker compose -f docker-compose.dev.yml up --build
```

```bash
```

```bash
```

```bash
```

```bash
```


```bash
sudo docker exec -it app_angular npm install --save-dev @angular-devkit/build-angular@20.1.6
sudo docker exec -it app_angular npm ls @angular-devkit/build-angular

```