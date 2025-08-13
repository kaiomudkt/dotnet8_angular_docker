using Microsoft.EntityFrameworkCore;
using app_dotnet.Models;

namespace app_dotnet.Data;


public class CategoryContext : DbContext
{
    public DbSet<CategoryModel> Categories { get; set; } = null!;
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = Environment.GetEnvironmentVariable("POSTGRES_CONNECTION_STRING");
        if (string.IsNullOrEmpty(connectionString))
        {
            throw new InvalidOperationException("A string de conexão para o banco de dados não está configurada.");
        }
        optionsBuilder.UseNpgsql(connectionString);
        base.OnConfiguring(optionsBuilder);
    }
}