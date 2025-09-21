import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Zap, Users, Code, Lightbulb, Trophy, ArrowRight, Star, Rocket } from "lucide-react";
import fluxPatternBg from "@/assets/flux-pattern-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Master cutting-edge technologies and development practices"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community",
      description: "Connect with passionate developers and tech enthusiasts"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Turn your ideas into reality with our resources and support"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Competitions",
      description: "Participate in hackathons and showcase your skills"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${fluxPatternBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center space-y-8 mb-16">
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-4 rounded-full bg-gradient-primary shadow-glow">
                  <Zap className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                FLUX
              </h1>
              
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto">
                Where Innovation Meets Excellence
              </p>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join the premier technical society and be part of a community that's shaping the future of technology. 
                Connect, learn, and innovate with the brightest minds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/apply">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3 text-lg">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              {/* <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="px-3 py-1">
                  <Star className="w-3 h-3 mr-1" />
                  50+ Members
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Rocket className="w-3 h-3 mr-1" />
                  25+ Projects
                </Badge>
              </div> */}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-md border-flux-border hover:bg-card/70 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-primary/10 text-primary w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-primary/10 border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to Join FLUX?</h2>
                <p className="text-muted-foreground mb-6">
                  Take the first step towards an exciting journey of learning, innovation, and growth.
                </p>
                <Link to="/apply">
                  <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    Start Your Application
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
