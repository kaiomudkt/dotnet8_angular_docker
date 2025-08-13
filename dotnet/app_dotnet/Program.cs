using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Adiciona os serviços do Swagger
builder.Services.AddEndpointsApiExplorer(); // Necessário para documentar endpoints
builder.Services.AddSwaggerGen(); // Gera a documentação Swagger

var app = builder.Build();

Console.WriteLine($"mensagem: {app.Environment.IsDevelopment()}");

// Ativa o Swagger apenas no ambiente de desenvolvimento
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Minha API v1");
        c.RoutePrefix = string.Empty; // Para abrir direto no /
    });
}

app.MapGet("/", () => "Hello World");
app.MapGet("/categoria", () => "categorias ...");

app.Run("http://0.0.0.0:5000");
