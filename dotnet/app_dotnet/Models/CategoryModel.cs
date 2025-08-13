namespace app_dotnet.Models;

public class CategoryModel
{

    public CategoryModel(string name)
    {
        Name = name;
        Id = Guid.NewGuid();
    }

    public Guid Id { get; init; }
    public string Name { get; private set; }


    
}