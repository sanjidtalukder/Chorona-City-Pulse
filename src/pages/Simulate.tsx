import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import MetricCard from '@/components/ui/metric-card';
import { PlayCircle, Trees, Droplets, Recycle, Sun, Thermometer, CheckCircle } from 'lucide-react';

const Simulate = () => {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const scenarios = [
    {
      id: 'green',
      name: 'Add Green Spaces',
      description: 'Plant trees and create parks',
      icon: Trees,
      color: 'text-green',
      impact: { heat: -8, air: -15, flood: -5, green: +25, waste: 0 }
    },
    {
      id: 'drainage',
      name: 'Improve Drainage',
      description: 'Upgrade stormwater systems',
      icon: Droplets,
      color: 'text-flood',
      impact: { heat: 0, air: 0, flood: -35, green: 0, waste: 0 }
    },
    {
      id: 'recycling',
      name: 'Expand Recycling',
      description: 'Add recycling centers',
      icon: Recycle,
      color: 'text-waste',
      impact: { heat: 0, air: -5, flood: 0, green: +5, waste: +20 }
    },
    {
      id: 'solar',
      name: 'Deploy Solar',
      description: 'Install solar panels',
      icon: Sun,
      color: 'text-warning',
      impact: { heat: -12, air: -10, flood: 0, green: +10, waste: +15 }
    },
    {
      id: 'cooling',
      name: 'Heat Mitigation',
      description: 'Cool zones and reflective surfaces',
      icon: Thermometer,
      color: 'text-heat',
      impact: { heat: -20, air: -8, flood: 0, green: 0, waste: 0 }
    },
  ];

  const baseMetrics = {
    heat: { value: 32, unit: '°C' },
    air: { value: 87, unit: 'AQI' },
    flood: { value: 23, unit: '%' },
    green: { value: 68, unit: '%' },
    waste: { value: 91, unit: '%' }
  };

  const getProjectedValue = (metric: keyof typeof baseMetrics) => {
    if (!selectedScenario) return baseMetrics[metric].value;
    const scenario = scenarios.find(s => s.id === selectedScenario);
    if (!scenario) return baseMetrics[metric].value;
    
    const impact = scenario.impact[metric];
    if (metric === 'heat') {
      return Math.max(0, baseMetrics[metric].value + impact);
    }
    return Math.max(0, Math.min(100, baseMetrics[metric].value + impact));
  };

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-surface/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 glow-primary">
              <PlayCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-holographic">
                Simulate — See Tomorrow, Act Today
              </h1>
              <p className="text-sm text-muted-foreground">
                Test what-if scenarios before committing resources
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Scenario Selector */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Select Intervention Scenario</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {scenarios.map((scenario) => {
              const IconComponent = scenario.icon;
              return (
                <Button
                  key={scenario.id}
                  variant={selectedScenario === scenario.id ? "default" : "outline"}
                  className="h-auto p-6 flex flex-col gap-3 text-center group"
                  onClick={() => setSelectedScenario(scenario.id)}
                >
                  <div className={`p-3 rounded-lg bg-primary/10 border border-primary/20 ${scenario.color} group-hover:glow-primary`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-medium">{scenario.name}</div>
                    <div className="text-xs opacity-70 mt-1">{scenario.description}</div>
                  </div>
                </Button>
              );
            })}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Before/After Preview */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Impact Preview</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Before */}
              <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines">
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">BEFORE</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Mini map visualization */}
                    <div className="relative bg-surface border border-border rounded-lg h-32 overflow-hidden">
                      <div 
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `
                            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
                          `,
                          backgroundSize: '16px 16px'
                        }}
                      />
                      <div className="absolute inset-4 border border-dashed border-muted/50 rounded" />
                      <div className="absolute top-8 left-8 w-4 h-4 bg-destructive rounded-full animate-pulse" />
                      <div className="absolute bottom-8 right-8 w-3 h-3 bg-warning rounded-full animate-pulse" />
                    </div>
                    
                    <div className="text-xs text-muted-foreground">Current State</div>
                  </div>
                </CardContent>
              </Card>

              {/* After */}
              <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines">
                <CardHeader>
                  <CardTitle className="text-sm text-muted-foreground">AFTER</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Mini map visualization */}
                    <div className="relative bg-surface border border-border rounded-lg h-32 overflow-hidden">
                      <div 
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `
                            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
                          `,
                          backgroundSize: '16px 16px'
                        }}
                      />
                      <div className="absolute inset-4 border border-dashed border-muted/50 rounded" />
                      {selectedScenario && (
                        <>
                          <div className="absolute top-8 left-8 w-4 h-4 bg-success rounded-full animate-pulse" />
                          <div className="absolute bottom-8 right-8 w-3 h-3 bg-success rounded-full animate-pulse" />
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            {React.createElement(scenarios.find(s => s.id === selectedScenario)?.icon || Trees, {
                              className: `w-6 h-6 ${scenarios.find(s => s.id === selectedScenario)?.color} animate-pulse`
                            })}
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      {selectedScenario ? 'With Intervention' : 'Select scenario'}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Key Metrics */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Projected Impact</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { key: 'heat' as const, title: 'Heat Index', metric: 'heat' as const },
                { key: 'air' as const, title: 'Air Quality', metric: 'air' as const },
                { key: 'flood' as const, title: 'Flood Risk', metric: 'flood' as const },
                { key: 'green' as const, title: 'Green Cover', metric: 'green' as const },
              ].map((item) => {
                const currentValue = baseMetrics[item.key].value;
                const projectedValue = getProjectedValue(item.key);
                const change = Math.abs(projectedValue - currentValue);
                const trend = projectedValue > currentValue ? 'up' : projectedValue < currentValue ? 'down' : 'stable';
                
                return (
                  <MetricCard
                    key={item.key}
                    title={item.title}
                    value={projectedValue.toString()}
                    unit={baseMetrics[item.key].unit}
                    change={change}
                    trend={trend}
                    metric={item.metric}
                    className={selectedScenario ? 'animate-pulse-glow' : ''}
                  />
                );
              })}
            </div>
          </section>
        </div>

        {/* Action Panel */}
        <section className="flex justify-center gap-4">
          <Button
            onClick={handleSimulate}
            disabled={!selectedScenario || isSimulating}
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary px-8 py-3"
          >
            {isSimulating ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                Simulating...
              </>
            ) : (
              <>
                <PlayCircle className="w-5 h-5 mr-2" />
                Run Simulation
              </>
            )}
          </Button>
          
          {selectedScenario && !isSimulating && (
            <Button variant="outline" className="px-8 py-3">
              <CheckCircle className="w-5 h-5 mr-2" />
              Commit to Blueprint
            </Button>
          )}
        </section>
      </div>
    </div>
  );
};

export default Simulate;