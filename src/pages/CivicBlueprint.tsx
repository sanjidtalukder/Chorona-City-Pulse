import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, MapPin, ThumbsUp, MessageCircle, Calendar, Eye } from 'lucide-react';

const CivicBlueprint = () => {
  const [selectedProposal, setSelectedProposal] = useState<string | null>(null);

  const proposals = [
    {
      id: '1',
      title: 'Riverside Park Expansion',
      location: 'Ward 5, Riverside District',
      type: 'Green Infrastructure',
      status: 'In Review',
      votes: 234,
      comments: 45,
      priority: 'high',
      description: 'Expand the existing riverside park by 15 acres, adding walking trails, playground, and native plantings.',
      impact: {
        heat: -12,
        air: -8,
        flood: -15,
        green: +35,
        communities: 2500
      },
      timeline: '6 months',
      budget: '$850K'
    },
    {
      id: '2', 
      title: 'Smart Drainage Network',
      location: 'Ward 8, Flood Zone',
      type: 'Infrastructure',
      status: 'Approved',
      votes: 189,
      comments: 32,
      priority: 'high',
      description: 'Install smart sensors and improve drainage capacity in flood-prone areas.',
      impact: {
        heat: 0,
        air: 0,
        flood: -40,
        green: +5,
        communities: 1800
      },
      timeline: '8 months',
      budget: '$1.2M'
    },
    {
      id: '3',
      title: 'Community Solar Grid',
      location: 'Downtown Business District',
      type: 'Energy',
      status: 'Planning',
      votes: 156,
      comments: 28,
      priority: 'medium',
      description: 'Rooftop solar installation program for community buildings and businesses.',
      impact: {
        heat: -8,
        air: -12,
        flood: 0,
        green: +15,
        communities: 3200
      },
      timeline: '12 months',
      budget: '$2.1M'
    },
    {
      id: '4',
      title: 'Recycling Hub Network',
      location: 'East District, Multiple Sites',
      type: 'Waste Management',
      status: 'Community Input',
      votes: 98,
      comments: 67,
      priority: 'medium',
      description: 'Establish neighborhood recycling centers with educational programs.',
      impact: {
        heat: 0,
        air: -5,
        flood: 0,
        green: +10,
        communities: 4100
      },
      timeline: '4 months',
      budget: '$425K'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-success/20 text-success border-success/30';
      case 'In Review': return 'bg-warning/20 text-warning border-warning/30';
      case 'Planning': return 'bg-primary/20 text-primary border-primary/30';
      case 'Community Input': return 'bg-accent/20 text-accent border-accent/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-destructive';
      case 'medium': return 'text-warning';
      case 'low': return 'text-success';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-surface/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 glow-primary">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-holographic">
                CivicBlueprint — Shape the City's Future
              </h1>
              <p className="text-sm text-muted-foreground">
                Collaboration space between planners and citizens
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Proposal Map */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  Intervention Map
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
                  
                  {/* City boundary */}
                  <div className="absolute inset-8 border-2 border-dashed border-primary/30 rounded-lg" />
                  
                  {/* Proposal pins */}
                  {proposals.map((proposal, index) => (
                    <div
                      key={proposal.id}
                      className={`absolute w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer
                                 hover:scale-110 transition-transform duration-200 animate-pulse-glow
                                 ${selectedProposal === proposal.id ? 'bg-primary border-primary text-primary-foreground' : 
                                   'bg-surface border-primary text-primary'}`}
                      style={{
                        left: `${20 + (index % 3) * 25}%`,
                        top: `${20 + Math.floor(index / 3) * 30}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                      onClick={() => setSelectedProposal(proposal.id)}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>
                  ))}
                  
                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-sm border border-card-border rounded-lg p-3">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Legend</div>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-success rounded-full" />
                        <span>Approved</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-warning rounded-full" />
                        <span>In Review</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                        <span>Planning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selected Proposal Details */}
            {selectedProposal && (
              <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines animate-fade-in">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-foreground">
                        {proposals.find(p => p.id === selectedProposal)?.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {proposals.find(p => p.id === selectedProposal)?.location}
                      </p>
                    </div>
                    <Badge className={getStatusColor(proposals.find(p => p.id === selectedProposal)?.status || '')}>
                      {proposals.find(p => p.id === selectedProposal)?.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground">
                    {proposals.find(p => p.id === selectedProposal)?.description}
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {proposals.find(p => p.id === selectedProposal)?.impact.communities.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">People Impacted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">
                        {proposals.find(p => p.id === selectedProposal)?.timeline}
                      </div>
                      <div className="text-xs text-muted-foreground">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-foreground">
                        {proposals.find(p => p.id === selectedProposal)?.budget}
                      </div>
                      <div className="text-xs text-muted-foreground">Budget</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${getPriorityColor(proposals.find(p => p.id === selectedProposal)?.priority || '')}`}>
                        {proposals.find(p => p.id === selectedProposal)?.priority?.toUpperCase()}
                      </div>
                      <div className="text-xs text-muted-foreground">Priority</div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1" variant="outline">
                      <ThumbsUp className="w-4 h-4 mr-2" />
                      Support ({proposals.find(p => p.id === selectedProposal)?.votes})
                    </Button>
                    <Button className="flex-1" variant="outline">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Comment ({proposals.find(p => p.id === selectedProposal)?.comments})
                    </Button>
                    <Button variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Proposal List */}
          <div className="space-y-6">
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines">
              <CardHeader>
                <CardTitle className="text-foreground">Active Proposals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {proposals.map((proposal, index) => (
                  <div
                    key={proposal.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 hover:bg-surface-elevated/50 animate-fade-in
                               ${selectedProposal === proposal.id ? 'border-primary bg-primary/5' : 'border-border'}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setSelectedProposal(proposal.id)}
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-sm text-foreground">{proposal.title}</h4>
                        <Badge className={`text-xs ${getStatusColor(proposal.status)}`}>
                          {proposal.status}
                        </Badge>
                      </div>
                      
                      <p className="text-xs text-muted-foreground">{proposal.location}</p>
                      
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-3 h-3" />
                          {proposal.votes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          {proposal.comments}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {proposal.timeline}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Community Engagement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">847</div>
                    <div className="text-xs text-muted-foreground">Total Votes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">172</div>
                    <div className="text-xs text-muted-foreground">Comments</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Participation Rate</span>
                    <span className="text-foreground font-medium">73%</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '73%' }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivicBlueprint;