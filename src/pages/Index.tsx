import { CommunityCard } from "@/components/CommunityCard";
import { CommunityButton } from "@/components/CommunityButton";

const Index = () => {
  const communityProjects = [
    {
      title: "Outer Sunset Today",
      subtitle: "neighborhood news",
      status: "🟢 Live",
      icon: "📰",
      color: "coral" as const,
      href: "#"
    },
    {
      title: "Mutual Aid Outer Sunset", 
      subtitle: "free fridge map",
      status: "🟢 Live",
      icon: "🤝",
      color: "sage" as const,
      href: "#"
    },
    {
      title: "Sunset Farmers",
      subtitle: "food collective", 
      status: "🟢 Live",
      icon: "🥕",
      color: "sunshine" as const,
      href: "#"
    },
    {
      title: "Sunset Community Supplies",
      subtitle: "free essential goods",
      status: "🌙 Sleeping", 
      icon: "📦",
      color: "lavender" as const,
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-zine-body">
      {/* Header */}
      <header className="px-4 pt-12 pb-8 max-w-md mx-auto text-center">
        <h1 className="font-zine-title text-5xl sm:text-6xl text-foreground mb-4 leading-none">
          byfor.us
        </h1>
        <p className="text-lg text-foreground/90 mb-6 italic">
          Built by us, for us.
        </p>
        <p className="font-zine-body text-base text-foreground/80 leading-relaxed">
          Here's what we've made.<br />
          Want to suggest something new?
        </p>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-12 max-w-md mx-auto">
        <div className="space-y-4 mb-8">
          {communityProjects.map((project, index) => (
            <CommunityCard 
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              status={project.status}
              icon={project.icon}
              color={project.color}
              href={project.href}
            />
          ))}
        </div>

        {/* Suggest Button */}
        <div className="text-center">
          <CommunityButton 
            variant="suggest" 
            size="lg"
            href="#suggest"
            className="w-full sm:w-auto"
          >
            Suggest something new
          </CommunityButton>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 pb-8 max-w-md mx-auto text-center">
        <p className="font-zine-body text-sm text-foreground/60 leading-relaxed">
          Want to make a site like this for your neighborhood?{" "}
          <a 
            href="#remix" 
            className="text-foreground/80 underline hover:text-foreground transition-colors"
          >
            Remix this page at byfor.us/remix
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;