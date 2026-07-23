namespace spinelly.Models;

public record EducationEntry(
    string Period,
    string Title,
    string Institution,
    string? Description,
    string? LogoUrl,
    List<Tag> Highlights
);
