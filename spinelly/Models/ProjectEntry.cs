namespace spinelly.Models;

public record ProjectEntry(
    string Name,
    string ShortDescription,
    string? LongDescription,
    string? LandingPageLink,
    string? DemoLink,
    List<Tag> Tags,
    // Screenshot, GIF or video shown on the TV screen.
    string? PreviewMedia = null,
    // True for narrated walkthroughs: plays on demand with sound and controls
    // instead of autoplaying muted on a loop.
    bool Narrated = false,
    bool Featured = false,
    // True when DemoLink is a deployed site real people use, not a staging demo.
    bool Live = false,
    // Still screens the TV cycles through like channel changes, for projects without footage.
    List<string>? Screens = null
);
