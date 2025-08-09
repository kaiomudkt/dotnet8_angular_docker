using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Configura o builder, por exemplo adicionar serviços, se quiser
var app = builder.Build();

app.MapGet("/", () => "Hello World");

app.Run("http://0.0.0.0:5000");
