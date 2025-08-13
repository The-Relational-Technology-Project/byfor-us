import { cn } from "@/lib/utils";

interface CommunityCardProps {
  title: string;
  subtitle: string;
  status: string;
  icon: string;
  color: "coral" | "sage" | "sunshine" | "lavender";
  href?: string;
  className?: string;
}

export function CommunityCard({ 
  title, 
  subtitle, 
  status, 
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
    <div className={cn(
      "p-6 rounded-2xl card-modern",
      colorClasses[color],
      className
    )}>
      <div className="flex items-start gap-4 mb-4">
        <div className="text-3xl flex-shrink-0" role="img" aria-label="Site icon">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-zine-title text-xl text-foreground mb-1.5 leading-tight">
            {title}
          </h3>
          <p className="font-zine-body text-sm text-foreground/70 mb-3 font-medium">
            {subtitle}
          </p>
          <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
            {status}
          </div>
        </div>
      </div>
      
      <a 
        href={href}
        className="inline-block w-full sm:w-auto"
      >
        <button className="btn-modern bg-white/90 hover:bg-white font-zine-body px-6 py-3 rounded-xl text-foreground font-medium text-sm w-full sm:w-auto">
          Visit site
        </button>
      </a>
    </div>
  );
}