# criando contaiter para iniciar projeto dotnet sem precisar instalar nada na maquina host
# criando projeto de dentro do containet
# Etapa de build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos (se houver) para dentro do container (opcional no início)
COPY . ./

# Expõe a porta padrão do .NET (exemplo: 5000)
EXPOSE 5000

# Comando padrão para rodar a aplicação (vai ser substituído conforme projeto)
CMD ["bash"]

# depois precisa ajustar as permissoes para poder editar os arquivos do projeto pelo vs code
# sudo chown -R $USER:$USER ./dotnet