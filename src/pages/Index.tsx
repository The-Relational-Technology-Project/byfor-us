import { CommunityCard } from "@/components/CommunityCard";
import { CommunityButton } from "@/components/CommunityButton";
import { StewardsDropdown } from "@/components/StewardsDropdown";

const Index = () => {
  const communityProjects = [
    {
      title: "Outer Sunset Today",
      subtitle: "what to do today",
      status: "🟢 Live",
      lifecycle: "🌱",
      icon: "📰",
      color: "coral" as const,
      href: "https://outersunset.today"
    },
    {
      title: "Community Supplies", 
      subtitle: "join the sharing party",
      status: "🟢 Live",
      lifecycle: "🌱",
      icon: "📦",
      color: "sage" as const,
      href: "https://communitysupplies.org"
    },
    {
      title: "Cozy Corner",
      subtitle: "neighbor hub", 
      status: "🟢 Live",
      lifecycle: "🌿",
      icon: "☕",
      color: "sunshine" as const,
      href: "https://cozycorner.place"
    },
    {
      title: "Map/Make",
      subtitle: "custom map maker",
      status: "🔧 Building", 
      lifecycle: "🌱",
      icon: "🗺️",
      color: "lavender" as const,
      href: "https://map-make.lovable.app/"
    },
    {
      title: "Mutual Aid",
      subtitle: "local pod",
      status: "🟢 Live", 
      lifecycle: "🌳",
      icon: "🤝",
      color: "coral" as const,
      href: "https://sfmutualaid.com"
    },
    {
      title: "Neighbor Stories",
      subtitle: "we have a lot to share",
      status: "🔧 Building",
      lifecycle: "🌱",
      icon: "📖",
      color: "lavender" as const,
      href: "https://www.neighborstories.org/"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-zine-body">
      {/* Header */}
      <header className="px-4 pt-16 pb-12 max-w-md mx-auto text-center">
        <p className="font-zine-body text-lg text-foreground/80 leading-relaxed max-w-sm mx-auto">
          Built in the Outer Sunset. By us, for us.<br />
          What else should we create?
        </p>
      </header>

      {/* Main Content */}
      <main className="px-4 pb-16 max-w-md mx-auto">
        <div className="space-y-4 mb-12">
          {communityProjects.map((project, index) => (
            <CommunityCard 
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              status={project.status}
              lifecycle={project.lifecycle}
              icon={project.icon}
              color={project.color}
              href={project.href}
            />
          ))}
        </div>

        {/* Stewards Contact */}
        <div className="mb-8">
          <StewardsDropdown />
        </div>

        {/* Suggest Button */}
        <div className="text-center">
          <CommunityButton 
            variant="suggest" 
            size="lg"
            href="/suggest"
            className="w-full sm:w-auto"
          >
            Suggest something new
          </CommunityButton>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 pb-12 max-w-md mx-auto text-center">
        <p className="font-zine-body text-sm text-foreground/55 leading-relaxed">
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