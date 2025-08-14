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

    public void ChangeName(string name)
    {
        if (string.IsNullOrWhiteSpace(name))
        {
            throw new ArgumentException("O nome da categoria não pode ser vazio.", nameof(name));
        }
        Name = name;
    }


    
}