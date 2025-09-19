import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Clock, Calendar, BarChart3, BookOpen, ArrowLeftRight } from 'lucide-react';

const Atlas = () => {
  const [timeValue, setTimeValue] = useState([2020]);
  const [compareMode, setCompareMode] = useState(false);
  const [compareYear1, setCompareYear1] = useState([2010]);
  const [compareYear2, setCompareYear2] = useState([2024]);

  const timelineEvents = [
    {
      year: 2024,
      title: 'Smart City Initiative',
      description: 'Launch of comprehensive environmental monitoring system.',
      impact: 'Major improvement in air quality tracking'
    },
    {
      year: 2022,
      title: 'Green Corridor Project',
      description: 'Creation of connected green spaces across the city.',
      impact: '15% increase in urban tree cover'
    },
    {
      year: 2019,
      title: 'Flood Defense Upgrade',
      description: 'Installation of modern drainage and sensor network.',
      impact: '40% reduction in flood incidents'
    },
    {
      year: 2016,
      title: 'Recycling Revolution',
      description: 'City-wide recycling program and waste-to-energy facilities.',
      impact: '65% waste diversion from landfills'
    },
    {
      year: 2012,
      title: 'Climate Action Plan',
      description: 'First comprehensive climate adaptation strategy adopted.',
      impact: 'Foundation for all subsequent environmental initiatives'
    }
  ];

  const getYearData = (year: number) => {
    // Simulate historical data changes
    const baseYear = 2024;
    const yearDiff = baseYear - year;
    
    return {
      heat: Math.max(25, 32 - yearDiff * 0.3),
      air: Math.min(100, 87 + yearDiff * 2),
      flood: Math.min(50, 23 + yearDiff * 1.5),
      green: Math.max(40, 68 - yearDiff * 1.2),
      waste: Math.max(60, 91 - yearDiff * 1.8)
    };
  };

  const currentYear = compareMode ? 'Compare Mode' : timeValue[0].toString();
  const currentData = compareMode ? 
    { year1: getYearData(compareYear1[0]), year2: getYearData(compareYear2[0]) } :
    getYearData(timeValue[0]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-surface/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 glow-primary">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-holographic">
                Atlas — The City's Living Archive
              </h1>
              <p className="text-sm text-muted-foreground">
                Time-travel through the city's environmental history
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Time Navigation */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">TimeScroll Navigator</h2>
            <Button
              variant={compareMode ? "default" : "outline"}
              onClick={() => setCompareMode(!compareMode)}
              className="flex items-center gap-2"
            >
              <ArrowLeftRight className="w-4 h-4" />
              Compare Epochs
            </Button>
          </div>

          {!compareMode ? (
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground font-medium">Year: {timeValue[0]}</span>
                    <span className="text-muted-foreground text-sm">
                      {timeValue[0] === 2024 ? 'Present Day' : `${2024 - timeValue[0]} years ago`}
                    </span>
                  </div>
                  <Slider
                    value={timeValue}
                    onValueChange={setTimeValue}
                    min={2010}
                    max={2024}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>2010</span>
                    <span>2015</span>
                    <span>2020</span>
                    <span>2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-card-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-foreground">Era 1: {compareYear1[0]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Slider
                    value={compareYear1}
                    onValueChange={setCompareYear1}
                    min={2010}
                    max={2024}
                    step={1}
                    className="w-full"
                  />
                </CardContent>
              </Card>
              
              <Card className="border border-card-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-foreground">Era 2: {compareYear2[0]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Slider
                    value={compareYear2}
                    onValueChange={setCompareYear2}
                    min={2010}
                    max={2024}
                    step={1}
                    className="w-full"
                  />
                </CardContent>
              </Card>
            </div>
          )}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Historical 3D Map */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Historical City View - {currentYear}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-surface border border-border rounded-lg h-96 overflow-hidden">
                  {/* Grid pattern */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                        linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
                      `,
                      backgroundSize: '30px 30px'
                    }}
                  />
                  
                  {/* Compare mode split view */}
                  {compareMode ? (
                    <div className="absolute inset-0 flex">
                      <div className="flex-1 border-r border-border relative">
                        <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm border border-card-border rounded px-2 py-1">
                          <span className="text-xs text-muted-foreground">{compareYear1[0]}</span>
                        </div>
                        {/* Historical visualization for year 1 */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-4 gap-2 p-8">
                            {[...Array(16)].map((_, i) => (
                              <div
                                key={i}
                                className="w-6 h-6 bg-heat/60 border border-heat/30 animate-pulse"
                                style={{ 
                                  animationDelay: `${i * 100}ms`,
                                  opacity: 0.4 + (Math.random() * 0.4)
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 relative">
                        <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm border border-card-border rounded px-2 py-1">
                          <span className="text-xs text-muted-foreground">{compareYear2[0]}</span>
                        </div>
                        {/* Historical visualization for year 2 */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-4 gap-2 p-8">
                            {[...Array(16)].map((_, i) => (
                              <div
                                key={i}
                                className="w-6 h-6 bg-green/60 border border-green/30 animate-pulse"
                                style={{ 
                                  animationDelay: `${i * 100}ms`,
                                  opacity: 0.6 + (Math.random() * 0.4)
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Single year view */
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-5 gap-3 p-8">
                        {[...Array(25)].map((_, i) => {
                          const intensity = 0.3 + (Math.random() * 0.7);
                          const yearFactor = (timeValue[0] - 2010) / 14; // 0 to 1
                          
                          return (
                            <div
                              key={i}
                              className="w-8 h-8 border animate-pulse"
                              style={{
                                backgroundColor: `hsl(var(--primary) / ${intensity * (0.2 + yearFactor * 0.6)})`,
                                borderColor: `hsl(var(--primary) / ${0.3 + yearFactor * 0.4})`,
                                animationDelay: `${i * 80}ms`
                              }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Historical Metrics */}
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Environmental Metrics Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">32°C</div>
                    <div className="text-xs text-muted-foreground uppercase">Heat</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">87</div>
                    <div className="text-xs text-muted-foreground uppercase">Air</div>
                    <div className="text-xs text-muted-foreground">AQI</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">23%</div>
                    <div className="text-xs text-muted-foreground uppercase">Flood</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">68%</div>
                    <div className="text-xs text-muted-foreground uppercase">Green</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">91%</div>
                    <div className="text-xs text-muted-foreground uppercase">Waste</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Timeline Events */}
          <div className="space-y-6">
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  Historical Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {timelineEvents.map((event, index) => (
                  <div
                    key={event.year}
                    className={`p-4 border rounded-lg transition-all duration-200 animate-fade-in ${
                      (!compareMode && event.year <= timeValue[0]) || 
                      (compareMode && event.year >= Math.min(compareYear1[0], compareYear2[0]) && 
                       event.year <= Math.max(compareYear1[0], compareYear2[0]))
                        ? 'border-primary bg-primary/5' 
                        : 'border-border opacity-50'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-primary">{event.year}</span>
                        <div className="h-px bg-border flex-1" />
                      </div>
                      <h4 className="font-medium text-foreground">{event.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                      <div className="text-xs text-success font-medium">
                        ✓ {event.impact}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* AI Story Generator */}
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <BookOpen className="w-5 h-5 text-primary" />
                  AI City Story
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {compareMode ? 
                    `Comparing ${compareYear1[0]} to ${compareYear2[0]}: This ${Math.abs(compareYear2[0] - compareYear1[0])}-year period saw ${
                      compareYear2[0] > compareYear1[0] ? 'significant environmental improvements' : 'the foundation of current initiatives'
                    }. Key transformations include enhanced green infrastructure and improved air quality management systems.` :
                    `In ${timeValue[0]}, the city was ${
                      timeValue[0] < 2015 ? 'beginning its environmental transformation journey' : 
                      timeValue[0] < 2020 ? 'implementing major infrastructure improvements' :
                      'leveraging smart city technologies for comprehensive environmental monitoring'
                    }. This era marked ${
                      timeValue[0] < 2015 ? 'the initial planning phases' :
                      timeValue[0] < 2020 ? 'active construction and deployment' :
                      'operational excellence and data-driven optimization'
                    } of the city's sustainability initiatives.`
                  }
                </div>
                
                <Button variant="outline" className="w-full">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Generate Detailed Story
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Atlas;