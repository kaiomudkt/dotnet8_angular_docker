#!/bin/bash
set -e

# Variáveis de ambiente para conexão
DB_HOST=app_postgres

echo "⏳ Aguardando PostgreSQL estar pronto em $DB_HOST:$DB_PORT..."

# Checa se o Postgres está pronto
until nc -z "$DB_HOST" 5432; do
  echo "PostgreSQL não está pronto ainda, tentando novamente..."
  sleep 2
done

echo "✅ PostgreSQL disponível. Rodando migrations..."

# Restaura ferramentas locais do .NET
dotnet tool restore

# Roda as migrations usando a string de conexão do ambiente
dotnet ef database update

echo "✅ Migrations aplicadas com sucesso."

# Inicia hot reload
exec dotnet watch --verbose run --no-launch-profile --urls "http://0.0.0.0:5000"
