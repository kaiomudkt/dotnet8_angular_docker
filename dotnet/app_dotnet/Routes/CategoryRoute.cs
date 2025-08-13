using app_dotnet.Models;
using app_dotnet.Data;

namespace app_dotnet.Routes;

public static class CategoryRoute
{

    public static void CategoryRoutes(WebApplication app)
    {
        var route = app.MapGroup("/categoria");
        // app.MapGet("/categoria", () => new CategoryModel("Categoria 1"));
        route.MapPost("", async (CategoryRequest req, CategoryContext context) =>
        {
            var category = new CategoryModel(req.Name);
            await context.AddAsync(category);
            await context.SaveChangesAsync();
        });
    }
}