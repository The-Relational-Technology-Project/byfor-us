import { cn } from "@/lib/utils";

interface CommunityButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "suggest";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function CommunityButton({ 
  children, 
  variant = "primary", 
  size = "md",
  className,
  onClick,
  href
}: CommunityButtonProps) {
  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90", 
    suggest: "bg-rust text-white hover:bg-rust/90"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const buttonClasses = cn(
    "btn-modern font-zine-body font-medium rounded-2xl focus:outline-none focus:ring-4 focus:ring-ring/20",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        <button className={buttonClasses} onClick={onClick}>
          {children}
        </button>
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}