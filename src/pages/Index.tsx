import React from 'react';
import { Button } from '@/components/ui/button';
import ModuleCard from '@/components/ui/module-card';
import { 
  Activity, 
  Database, 
  PlayCircle, 
  Users, 
  MessageSquare, 
  Clock, 
  TrendingUp,
  ArrowRight 
} from 'lucide-react';
import heroImage from '@/assets/hero-earth-intelligence.jpg';

const Index = () => {
  const modules = [
    {
      title: 'Pulse',
      description: "The city's live heartbeat - instant situational awareness with real-time metrics and wellbeing score.",
      icon: Activity,
      status: 'active' as const,
      onClick: () => window.location.href = '/pulse',
    },
    {
      title: 'DataLab',
      description: "The city's living digital twin with 3D visualization, AI predictions, and NASA Earth data layers.",
      icon: Database,
      status: 'coming-soon' as const,
    },
    {
      title: 'Simulate',
      description: 'Test what-if scenarios before committing resources - see tomorrow, act today with impact previews.',
      icon: PlayCircle,
      status: 'coming-soon' as const,
    },
    {
      title: 'CivicBlueprint',
      description: 'Collaboration space between planners and citizens with proposal mapping and community feedback.',
      icon: Users,
      status: 'coming-soon' as const,
    },
    {
      title: 'Engage',
      description: 'Real-time civic conversation layer with live feeds, map discussions, and citizen input ripples.',
      icon: MessageSquare,
      status: 'coming-soon' as const,
    },
    {
      title: 'Atlas',
      description: "Time-travel through the city's environmental history with AI-generated stories and epoch comparisons.",
      icon: Clock,
      status: 'coming-soon' as const,
    },
    {
      title: 'Impact',
      description: 'Proof of change with before/after comparisons, improvement metrics, and transformation stories.',
      icon: TrendingUp,
      status: 'coming-soon' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="NASA Earth Intelligence Platform"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        
        {/* Hero Content */}
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-holographic leading-tight">
                Earth Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Transform NASA Earth data + citizen input into a living, predictive, 
                and actionable city intelligence hub
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary animate-pulse-glow group"
                onClick={() => window.location.href = '/pulse'}
              >
                Launch Mission Control
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating metrics preview */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="flex items-center gap-8 bg-surface/80 backdrop-blur-md border border-card-border rounded-lg p-4">
                {[
                  { label: 'Heat', value: '32°C', color: 'text-heat' },
                  { label: 'Air', value: '87 AQI', color: 'text-air' },
                  { label: 'Flood', value: '23%', color: 'text-flood' },
                  { label: 'Green', value: '68%', color: 'text-green' },
                  { label: 'Waste', value: '91%', color: 'text-waste' },
                ].map((metric, index) => (
                  <div 
                    key={metric.label} 
                    className="text-center animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`text-lg font-bold ${metric.color}`}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="container mx-auto px-6 py-16 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Mission Control Modules
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seven specialized interfaces that transform raw Earth data into actionable city intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <ModuleCard
              key={module.title}
              {...module}
              className="animate-fade-in"
              
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Powered by NASA Earth Data • Built for Smart Cities • Open Source Intelligence
            </p>
            <div className="flex justify-center items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-xs text-success">System Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;