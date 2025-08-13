using app_dotnet.Models;

namespace app_dotnet.Routes;

public static class CategoryRoute
{

    public static void CategoryRoutes(WebApplication app)
    {
        app.MapGet("/categoria", () => new CategoryModel("Categoria 1"));
    }
}