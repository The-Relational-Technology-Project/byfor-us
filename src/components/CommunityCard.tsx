import { cn } from "@/lib/utils";

interface CommunityCardProps {
  title: string;
  subtitle: string;
  status: string;
  lifecycle: string;
  icon: string;
  color: "coral" | "sage" | "sunshine" | "lavender";
  href?: string;
  className?: string;
}

export function CommunityCard({ 
  title, 
  subtitle, 
  status,
  lifecycle, 
  icon, 
  color, 
  href = "#",
  className 
}: CommunityCardProps) {
  const colorClasses = {
    coral: "bg-coral",
    sage: "bg-sage", 
    sunshine: "bg-sunshine",
    lavender: "bg-lavender"
  };

  return (
    <div className={cn("relative", className)}>
      <a 
        href={href}
        className={cn(
          "block p-6 rounded-2xl card-modern transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-ring/20",
          colorClasses[color]
        )}
        target={href.startsWith('http') ? '_blank' : '_self'}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        <div className="flex items-start gap-4 pr-16">
          <div className="text-3xl flex-shrink-0" role="img" aria-label="Site icon">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-zine-title text-xl text-foreground mb-1.5 leading-tight">
              {title}
            </h3>
            <p className="font-zine-body text-sm text-foreground/70 mb-0 font-medium">
              {subtitle}
            </p>
          </div>
        </div>
      </a>
      
      {/* Status positioned on the right */}
      <div className="absolute top-6 right-6">
        <span className="text-xs font-medium text-foreground/80 bg-white/60 px-2 py-1 rounded-full">
          {status}
        </span>
      </div>
    </div>
  );
}