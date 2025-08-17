using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using app_dotnet.Routes;
// using app_dotnet.Models;
using app_dotnet.Data;

var builder = WebApplication.CreateBuilder(args);

// Adiciona os serviços do Swagger
builder.Services.AddEndpointsApiExplorer(); // Necessário para documentar endpoints
builder.Services.AddSwaggerGen(); // Gera a documentação Swagger
builder.Services.AddScoped<CategoryContext>();
// Registrar CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200") // TODO: frontend Angular (obter endereço de env)
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});
var app = builder.Build();


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

// app.UseHttpsRedirection();
// app.UseRouting();
// Ativar CORS
app.UseCors("AllowAngular");
// app.UseAuthorization();


// app.MapGet("/", () => "Hello World");

CategoryRoute.CategoryRoutes(app);

app.Run("http://0.0.0.0:5000");
