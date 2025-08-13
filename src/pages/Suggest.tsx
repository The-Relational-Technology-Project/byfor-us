import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Suggest = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    contact: "",
    category: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.title || !formData.description) {
      toast({
        title: "Please fill in required fields",
        description: "Title and description are required.",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the data to a backend
    console.log("Suggestion submitted:", formData);
    
    toast({
      title: "Thanks for your suggestion!",
      description: "We'll review it and get back to you soon."
    });

    // Reset form
    setFormData({ title: "", description: "", contact: "", category: "" });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background font-zine-body">
      {/* Header */}
      <header className="px-4 pt-8 pb-6 max-w-md mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to community
        </Link>
        
        <h1 className="font-zine-title text-3xl text-foreground mb-3">
          Suggest something new
        </h1>
        <p className="text-foreground/70 leading-relaxed">
          What should we build next for the Outer Sunset community?
        </p>
      </header>

      {/* Form */}
      <main className="px-4 pb-16 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title" className="text-foreground font-medium">
              Project title *
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="e.g., Sunset Dog Walker Network"
              className="mt-2"
              required
            />
          </div>

          <div>
            <Label htmlFor="description" className="text-foreground font-medium">
              Description *
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Describe what you'd like to see built and how it would help the community..."
              className="mt-2 min-h-[120px]"
              required
            />
          </div>

          <div>
            <Label htmlFor="category" className="text-foreground font-medium">
              Category
            </Label>
            <Input
              id="category"
              value={formData.category}
              onChange={(e) => handleChange("category", e.target.value)}
              placeholder="e.g., Community Events, Local Resources, Neighborhood Safety"
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="contact" className="text-foreground font-medium">
              Your contact (optional)
            </Label>
            <Input
              id="contact"
              value={formData.contact}
              onChange={(e) => handleChange("contact", e.target.value)}
              placeholder="Email or preferred way to reach you"
              className="mt-2"
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Submit suggestion
          </Button>
        </form>

        <p className="text-center text-sm text-foreground/60 mt-8 leading-relaxed">
          Suggestions help us understand what the community needs most. 
          We'll review all ideas and work on the most impactful ones.
        </p>
      </main>
    </div>
  );
};

export default Suggest;