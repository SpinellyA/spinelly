namespace spinelly.Models;

public record ProjectEntry(
    string Name,
    string ShortDescription,
    string? LongDescription,
    string? LandingPageLink,
    string? DemoLink,
    List<Tag> Tags,
    bool Featured = false
);
