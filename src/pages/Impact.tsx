import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, Droplets, TreePine, Wind, Recycle, Download, Share } from 'lucide-react';

const Impact = () => {
  const heroStats = [
    {
      value: '2.3M',
      label: 'Lives Improved',
      sublabel: 'People benefiting from interventions',
      icon: Users,
      color: 'text-primary'
    },
    {
      value: '847',
      label: 'Projects Completed',
      sublabel: 'Since 2020',
      icon: TrendingUp,
      color: 'text-success'
    },
    {
      value: '68%',
      label: 'Goal Achievement',
      sublabel: 'Climate targets met',
      icon: TrendingUp,
      color: 'text-accent'
    }
  ];

  const improvements = [
    {
      category: 'Heat Reduction',
      before: 38,
      after: 32,
      unit: '°C',
      improvement: -15.8,
      icon: TrendingUp,
      color: 'text-heat',
      description: 'Average summer temperature reduction through green corridors and cooling zones'
    },
    {
      category: 'Air Quality',
      before: 125,
      after: 87,
      unit: 'AQI',
      improvement: -30.4,
      icon: Wind,
      color: 'text-air',
      description: 'Significant improvement in air quality index through emission controls'
    },
    {
      category: 'Flood Prevention',
      before: 65,
      after: 23,
      unit: '%',
      improvement: -64.6,
      icon: Droplets,
      color: 'text-flood',
      description: 'Reduction in flood risk areas through smart drainage systems'
    },
    {
      category: 'Green Coverage',
      before: 45,
      after: 68,
      unit: '%',
      improvement: +51.1,
      icon: TreePine,
      color: 'text-green',
      description: 'Urban tree cover increase through systematic planting programs'
    },
    {
      category: 'Waste Efficiency',
      before: 65,
      after: 91,
      unit: '%',
      improvement: +40.0,
      icon: Recycle,
      color: 'text-waste',
      description: 'Recycling and waste diversion rate improvement'
    },
  ];

  const successStories = [
    {
      title: 'Ward 8 Flood Resilience',
      location: 'Ward 8, Eastern District',
      impact: '1,200 homes protected',
      story: 'Smart drainage sensors and upgraded infrastructure eliminated flooding in previously vulnerable areas, protecting families and businesses.',
      before: 'Frequent flooding, property damage',
      after: 'Zero flood incidents in 2 years',
      image: true
    },
    {
      title: 'Downtown Air Quality Transformation',
      location: 'Central Business District',
      impact: '50,000 daily commuters',
      story: 'Green corridors and emission controls created breathable air in the city center, improving health outcomes for thousands.',
      before: 'Hazardous air quality days',
      after: 'Good air quality 300+ days/year',
      image: true
    },
    {
      title: 'Community Solar Success',
      location: 'Riverside Neighborhoods',
      impact: '800 households powered',
      story: 'Rooftop solar program reduced energy costs while cutting carbon emissions, creating a model for sustainable living.',
      before: 'High energy costs, grid dependence',
      after: '40% energy cost reduction',
      image: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-surface/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 glow-primary">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-holographic">
                Impact — Proof of Change
              </h1>
              <p className="text-sm text-muted-foreground">
                Tangible results of environmental interventions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Hero Impact Stats */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-foreground">Transformation at Scale</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {heroStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.label} className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines animate-fade-in"
                      style={{ animationDelay: `${index * 200}ms` }}>
                  <CardContent className="p-8 text-center">
                    <div className="space-y-4">
                      <div className={`mx-auto w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center glow-primary`}>
                        <IconComponent className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div>
                        <div className={`text-4xl font-bold ${stat.color} animate-pulse-glow`}>
                          {stat.value}
                        </div>
                        <div className="text-lg font-medium text-foreground mt-2">
                          {stat.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.sublabel}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Before/After Improvements */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-foreground">Environmental Improvements</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {improvements.map((item, index) => {
              const IconComponent = item.icon;
              const isImprovement = item.improvement > 0;
              
              return (
                <Card key={item.category} className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines animate-fade-in"
                      style={{ animationDelay: `${index * 150}ms` }}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-foreground">
                      <div className={`p-2 rounded-lg bg-primary/10 border border-primary/20 ${item.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      {item.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Before/After Visualization */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Before</div>
                        <div className="text-2xl font-bold text-destructive">
                          {item.before}{item.unit}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">After</div>
                        <div className="text-2xl font-bold text-success">
                          {item.after}{item.unit}
                        </div>
                      </div>
                    </div>
                    
                    {/* Improvement Percentage */}
                    <div className="text-center">
                      <div className={`text-lg font-bold ${isImprovement ? 'text-success' : 'text-success'}`}>
                        {isImprovement ? '+' : ''}{Math.abs(item.improvement).toFixed(1)}% 
                        {isImprovement ? ' increase' : ' reduction'}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Success Stories */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-foreground">Success Stories</h2>
          <div className="space-y-6">
            {successStories.map((story, index) => (
              <Card key={story.title} className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Story Content */}
                    <div className="lg:col-span-2 space-y-4">
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-foreground">{story.title}</h3>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">{story.location}</div>
                            <div className="text-lg font-bold text-primary">{story.impact}</div>
                          </div>
                        </div>
                        <p className="text-foreground leading-relaxed">{story.story}</p>
                      </div>
                      
                      {/* Before/After */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                          <div className="text-sm font-medium text-destructive mb-2">BEFORE</div>
                          <div className="text-foreground">{story.before}</div>
                        </div>
                        <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                          <div className="text-sm font-medium text-success mb-2">AFTER</div>
                          <div className="text-foreground">{story.after}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Visual */}
                    <div className="flex items-center justify-center">
                      <div className="w-full h-48 bg-surface border border-border rounded-lg flex items-center justify-center relative overflow-hidden">
                        {/* Ripple effect visualization */}
                        <div className="absolute inset-0">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-success animate-ping" />
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-success/20 border-2 border-success" />
                        </div>
                        <div className="text-success font-medium">Impact Ripple</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Report Actions */}
        <section className="flex justify-center gap-4 pt-8">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary px-8 py-3">
            <Download className="w-5 h-5 mr-2" />
            Download Impact Report
          </Button>
          <Button variant="outline" className="px-8 py-3">
            <Share className="w-5 h-5 mr-2" />
            Share Results
          </Button>
        </section>

        {/* Ripple Map */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-foreground">Ripple Effect Map</h2>
          <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines">
            <CardContent className="p-8">
              <div className="relative bg-surface border border-border rounded-lg h-64 overflow-hidden">
                {/* Grid pattern */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                      linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px'
                  }}
                />
                
                {/* Ripple effects from improved areas */}
                {[
                  { x: '25%', y: '30%', delay: '0s', color: 'border-success' },
                  { x: '60%', y: '50%', delay: '1s', color: 'border-primary' },
                  { x: '40%', y: '70%', delay: '2s', color: 'border-accent' },
                  { x: '75%', y: '25%', delay: '3s', color: 'border-warning' },
                ].map((ripple, index) => (
                  <div
                    key={index}
                    className="absolute"
                    style={{ left: ripple.x, top: ripple.y, transform: 'translate(-50%, -50%)' }}
                  >
                    <div className={`w-8 h-8 rounded-full ${ripple.color} border-2 animate-ping`} 
                         style={{ animationDelay: ripple.delay }} />
                    <div className={`absolute inset-2 rounded-full ${ripple.color} border-2 animate-ping`} 
                         style={{ animationDelay: `calc(${ripple.delay} + 0.5s)` }} />
                    <div className={`absolute inset-1 rounded-full bg-current/20 ${ripple.color.replace('border-', 'text-')}`} />
                  </div>
                ))}
                
                <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-sm border border-card-border rounded-lg p-3">
                  <div className="text-sm font-medium text-foreground">Active Impact Zones: 4</div>
                  <div className="text-xs text-muted-foreground">Continuous improvement ripples</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Impact;