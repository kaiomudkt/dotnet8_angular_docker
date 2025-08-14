using app_dotnet.Models;
using app_dotnet.Data;
using Microsoft.EntityFrameworkCore;

namespace app_dotnet.Routes;

public static class CategoryRoute
{

    public static void CategoryRoutes(WebApplication app)
    {
        var route = app.MapGroup("/categoria");
        route.MapGet("", async (CategoryContext context) =>
        {
            List<CategoryModel> categories = await context.Categories.ToListAsync();
            return Results.Ok(categories);
        });
        route.MapPost("", async (CategoryRequest req, CategoryContext context) =>
        {
            var category = new CategoryModel(req.Name);
            await context.AddAsync(category);
            await context.SaveChangesAsync();
        });
        route.MapPut("/{id:guid}", async (Guid id, CategoryRequest req, CategoryContext context) =>
        {
            var category = await context.Categories.FirstOrDefaultAsync(x => x.Id == id);
            if (category == null)
            {
                return Results.NotFound();
            }
            category.ChangeName(req.Name);
            await context.SaveChangesAsync();
            return Results.Ok(category);
        });
        route.MapDelete("/{id:guid}", async (Guid id, CategoryContext context) =>
        {
            var category = await context.Categories.FirstOrDefaultAsync(x => x.Id == id);
            if (category == null)
            {
                return Results.NotFound();
            }
            context.Categories.Remove(category);
            await context.SaveChangesAsync();
            return Results.Ok();
        });
    }
}