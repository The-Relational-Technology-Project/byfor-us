import { useState } from "react";
import { cn } from "@/lib/utils";

const stewards = [
  { name: "Alex Chen", role: "Outer Sunset Today", contact: "alex@outersunset.today" },
  { name: "Maya Rodriguez", role: "Community Supplies", contact: "maya@communitysupplies.org" },
  { name: "Jordan Kim", role: "Cozy Corner", contact: "@jordanbuilds" },
  { name: "Sam Park", role: "Map/Make", contact: "sam@mapmaker.dev" },
  { name: "Taylor Wong", role: "Mutual Aid", contact: "taylor@sfmutualaid.com" }
];

export function StewardsDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="btn-modern bg-muted hover:bg-muted/90 text-foreground px-6 py-3 rounded-2xl font-zine-body font-medium flex items-center gap-2 w-full justify-center"
      >
        Contact stewards
        <svg 
          className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg border border-border z-50 overflow-hidden">
          <div className="p-4">
            <h4 className="font-zine-title text-sm font-medium text-foreground/80 mb-3">Site Stewards</h4>
            <div className="space-y-3">
              {stewards.map((steward, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <div className="font-zine-body text-sm font-medium text-foreground">
                    {steward.name}
                  </div>
                  <div className="font-zine-body text-xs text-foreground/60">
                    {steward.role}
                  </div>
                  <div className="font-zine-body text-xs">
                    {steward.contact.includes('@') && !steward.contact.includes('.') ? (
                      <span className="text-foreground/70">{steward.contact}</span>
                    ) : steward.contact.includes('@') ? (
                      <a 
                        href={`mailto:${steward.contact}`}
                        className="text-primary hover:text-primary/80 underline"
                      >
                        {steward.contact}
                      </a>
                    ) : (
                      <span className="text-foreground/70">{steward.contact}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}