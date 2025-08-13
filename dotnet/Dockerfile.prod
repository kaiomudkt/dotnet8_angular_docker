# Imagem base com SDK para build e execução
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /app

# Copia os arquivos de projeto para restaurar dependências
COPY app_dotnet/*.csproj ./app_dotnet/

# Restaura pacotes NuGet
RUN dotnet restore app_dotnet/app_dotnet.csproj

# Copia todo o código fonte
COPY app_dotnet/. ./app_dotnet/

WORKDIR /app/app_dotnet

# Comando padrão para rodar a aplicação
CMD ["dotnet", "run", "--no-launch-profile", "--urls", "http://0.0.0.0:5000"]
