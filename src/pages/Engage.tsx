import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Send, MapPin, Clock, User, Heart, MessageCircle, Camera } from 'lucide-react';

const Engage = () => {
  const [newMessage, setNewMessage] = useState('');

  const feedItems = [
    {
      id: 1,
      type: 'citizen_report',
      user: 'Sarah Chen',
      location: 'Downtown Park',
      timestamp: '5 min ago',
      content: 'Amazing to see the new trees being planted! The air already feels fresher. 🌳',
      image: true,
      likes: 12,
      replies: 3,
      category: 'green'
    },
    {
      id: 2,
      type: 'planner_update',
      user: 'City Planning Dept',
      location: 'Ward 8 Drainage Project',
      timestamp: '1 hour ago',
      content: 'Smart sensors are now operational in the flood-prone areas. Real-time water level monitoring is active.',
      official: true,
      likes: 28,
      replies: 7,
      category: 'flood'
    },
    {
      id: 3,
      type: 'proposal_discussion',
      user: 'Marcus Rodriguez',
      location: 'Community Solar Initiative',
      timestamp: '2 hours ago',
      content: 'What if we prioritize schools and community centers first? This could serve as education hubs too.',
      likes: 15,
      replies: 9,
      category: 'energy'
    },
    {
      id: 4,
      type: 'citizen_report',
      user: 'Elena Kowalski',
      location: 'East District',
      timestamp: '4 hours ago',
      content: 'The new recycling center is working great! Lines are moving fast and staff is super helpful.',
      likes: 8,
      replies: 4,
      category: 'waste'
    },
    {
      id: 5,
      type: 'emergency_alert',
      user: 'Emergency Services',
      location: 'Riverside Area',
      timestamp: '6 hours ago',
      content: 'Water levels rising due to heavy rainfall. Avoid low-lying areas near the river.',
      urgent: true,
      likes: 45,
      replies: 12,
      category: 'flood'
    }
  ];

  const activeDiscussions = [
    {
      title: 'Solar Panel Placement',
      location: 'Downtown Business District',
      participants: 23,
      lastActivity: '10 min ago',
      category: 'energy'
    },
    {
      title: 'Park Accessibility',
      location: 'Riverside Park',
      participants: 18,
      lastActivity: '25 min ago',
      category: 'green'
    },
    {
      title: 'Flood Warning System',
      location: 'Ward 8',
      participants: 31,
      lastActivity: '1 hour ago',
      category: 'flood'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'green': return 'text-green border-green/20 bg-green/10';
      case 'flood': return 'text-flood border-flood/20 bg-flood/10';
      case 'energy': return 'text-warning border-warning/20 bg-warning/10';
      case 'waste': return 'text-waste border-waste/20 bg-waste/10';
      case 'heat': return 'text-heat border-heat/20 bg-heat/10';
      default: return 'text-muted-foreground border-border bg-muted/10';
    }
  };

  const getTypeIcon = (type: string, official?: boolean, urgent?: boolean) => {
    if (urgent) return '🚨';
    if (official) return '🏛️';
    if (type === 'citizen_report') return '📱';
    if (type === 'proposal_discussion') return '💭';
    return '📢';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-surface/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 glow-primary">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-holographic">
                Engage — Where the City Talks Back
              </h1>
              <p className="text-sm text-muted-foreground">
                Real-time civic conversation layer
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-6">
            {/* Compose Message */}
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <Input
                      placeholder="Share an update, report an issue, or join the conversation..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="border-border bg-surface/50"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Camera className="w-4 h-4 mr-1" />
                          Photo
                        </Button>
                        <Button variant="outline" size="sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          Location
                        </Button>
                      </div>
                      <Button size="sm" disabled={!newMessage.trim()}>
                        <Send className="w-4 h-4 mr-1" />
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Live Feed */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Live Civic Feed</h2>
              
              {feedItems.map((item, index) => (
                <Card key={item.id} className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                            <span className="text-sm">{getTypeIcon(item.type, item.official, item.urgent)}</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-foreground">{item.user}</span>
                              {item.official && (
                                <Badge className="text-xs bg-primary/20 text-primary border-primary/30">
                                  Official
                                </Badge>
                              )}
                              {item.urgent && (
                                <Badge className="text-xs bg-destructive/20 text-destructive border-destructive/30">
                                  Urgent
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="w-3 h-3" />
                              {item.location}
                              <span>•</span>
                              <Clock className="w-3 h-3" />
                              {item.timestamp}
                            </div>
                          </div>
                        </div>
                        
                        <Badge className={`text-xs ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </Badge>
                      </div>

                      {/* Content */}
                      <p className="text-foreground leading-relaxed">{item.content}</p>
                      
                      {item.image && (
                        <div className="w-full h-32 bg-surface border border-border rounded-lg flex items-center justify-center">
                          <Camera className="w-8 h-8 text-muted-foreground" />
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex items-center gap-6 pt-2">
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          <Heart className="w-4 h-4 mr-1" />
                          {item.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {item.replies}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          <Send className="w-4 h-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Discussions */}
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm scan-lines">
              <CardHeader>
                <CardTitle className="text-foreground">Active Discussions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeDiscussions.map((discussion, index) => (
                  <div key={discussion.title} className="p-3 border border-border rounded-lg hover:bg-surface-elevated/50 cursor-pointer transition-colors animate-fade-in"
                       style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-foreground">{discussion.title}</h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {discussion.location}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{discussion.participants} participants</span>
                        <span>{discussion.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Engagement Stats */}
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Today's Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">127</div>
                    <div className="text-xs text-muted-foreground">New Posts</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">89</div>
                    <div className="text-xs text-muted-foreground">Active Users</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Response Rate</span>
                    <span className="text-foreground font-medium">91%</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '91%' }} />
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs text-muted-foreground mb-2">Top Categories</div>
                  <div className="flex flex-wrap gap-1">
                    {['Green', 'Flood', 'Energy', 'Waste'].map((category) => (
                      <Badge key={category} className={`text-xs ${getCategoryColor(category.toLowerCase())}`}>
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ripple Effect */}
            <Card className="border border-card-border bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Ripple Effect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-3">
                  <div className="relative w-20 h-20 mx-auto">
                    <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping" />
                    <div className="absolute inset-2 rounded-full border-2 border-primary animate-ping" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute inset-4 rounded-full bg-primary/20 border-2 border-primary" />
                  </div>
                  <div className="text-sm text-foreground font-medium">
                    3 proposals updated
                  </div>
                  <div className="text-xs text-muted-foreground">
                    based on community input
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

export default Engage;