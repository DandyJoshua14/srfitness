
"use client";

import type { Metadata } from 'next'; // Can still be used if parts are static or for SEO hints
import Image from 'next/image';
import { useAuth } from '@/contexts/auth-context';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { UserCircle2, LogIn, Loader2, ShieldCheck, Bell, Target, Activity, BarChart3, Edit3, Save } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useState } from 'react'; // For conceptual editing state
import { Input } from '@/components/ui/input'; // For conceptual editing
import { Switch } from '@/components/ui/switch'; // For conceptual privacy settings
import { useToast } from '@/hooks/use-toast'; // For conceptual save actions
import { Label } from '@/components/ui/label';

// Metadata can be defined, but title might be dynamic based on user
// export const metadata: Metadata = {
//   title: 'My Account - SR Fitness',
//   description: 'Manage your SR Fitness account details, preferences, fitness goals, and activity.',
// };

// Conceptual Data (to be replaced by Firestore data eventually)
const MOCK_PRIVACY_SETTINGS = {
  showActivityOnMap: true,
  shareWorkoutData: false,
  receiveNewsletter: true,
};

const MOCK_FITNESS_DATA = {
  currentGoals: ['Lose 10kg by December', 'Run a 5K'],
  recentActivities: [
    { date: '2024-07-28', type: 'Strength Training', duration: '60 min', calories: '450 kcal (est.)' },
    { date: '2024-07-26', type: 'Burn Off Bootcamp', duration: '45 min', calories: '550 kcal (est.)' },
  ],
};


export default function ProfilePage() {
  const { currentUser, isLoading: authLoading, isAuthReady } = useAuth();
  const { toast } = useToast();

  // Conceptual states for UI demonstration
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [conceptualName, setConceptualName] = useState(currentUser?.displayName || "SR Fitness User");
  const [conceptualEmail, setConceptualEmail] = useState(currentUser?.email || "user@example.com");
  const [conceptualPrivacySettings, setConceptualPrivacySettings] = useState(MOCK_PRIVACY_SETTINGS);

  // Update conceptual name/email if currentUser changes and not editing
  useState(() => {
    if (currentUser && !isEditingProfile) {
      setConceptualName(currentUser.displayName || currentUser.email?.split('@')[0] || "SR Fitness User");
      setConceptualEmail(currentUser.email || "user@example.com");
    }
  });


  const handleConceptualProfileSave = () => {
    setIsEditingProfile(false);
    toast({ title: "Profile Updated (Conceptual)", description: "Profile changes saved (locally)." });
  };

  const handleConceptualPrivacyChange = (key: keyof typeof MOCK_PRIVACY_SETTINGS) => {
    setConceptualPrivacySettings(prev => ({ ...prev, [key]: !prev[key] }));
  };
  
  const saveConceptualPrivacySettings = () => {
    toast({ title: "Privacy Settings Updated (Conceptual)", description: "Privacy preferences saved (locally)." });
  };


  if (authLoading || !isAuthReady) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center justify-center min-h-[calc(100vh-160px)]">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-lg text-muted-foreground">Loading account details...</p>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center justify-center text-center min-h-[calc(100vh-160px)]">
        <UserCircle2 className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
        <h1 className="font-headline text-4xl sm:text-5xl text-primary mb-4">
          Access Your Account
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-8">
          Please log in or sign up to view your profile, manage your settings, and track your fitness journey with SR Fitness.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg" className="font-headline text-xl">
            {/* For actual login, trigger modal from header or use Link to /login page */}
            <Link href="#">Login</Link> 
          </Button>
          <Button asChild variant="outline" size="lg" className="font-headline text-xl">
             {/* For actual signup, trigger modal from header or use Link to /signup page */}
            <Link href="#">Sign Up</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  // Once currentUser is available
  const displayName = currentUser.displayName || currentUser.email?.split('@')[0] || "SR Fitness User";
  const displayEmail = currentUser.email || "No email available";
  const profilePictureUrl = currentUser.photoURL || 'https://placehold.co/100x100.png';
  const joinDate = currentUser.metadata.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleDateString() : 'Not available';


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-12 md:mb-16">
        <UserCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
          My Account Dashboard
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Welcome back, {displayName}! Here's an overview of your SR Fitness journey.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto space-y-10">
      <Alert variant="default" className="bg-blue-50 border-blue-500/50 text-blue-700">
        <BarChart3 className="h-5 w-5 !text-blue-600" />
        <AlertTitle className="text-blue-700 font-semibold">Profile & Data Notice</AlertTitle>
        <AlertDescription className="text-blue-600">
          Currently displaying basic account information. Extended profile details, fitness data, and settings are conceptual and will require further backend integration with Firestore to be fully functional and persistent.
        </AlertDescription>
      </Alert>

      {/* Profile Information Card */}
      <Card className="shadow-xl">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <CardTitle className="font-headline text-3xl text-foreground">Personal Information</CardTitle>
            <CardDescription>View your basic account details.</CardDescription>
          </div>
           {!isEditingProfile ? (
            <Button variant="outline" onClick={() => {
              setConceptualName(displayName);
              setConceptualEmail(displayEmail);
              setIsEditingProfile(true);
            }} className="shrink-0 mt-3 sm:mt-0">
              <Edit3 className="mr-2 h-4 w-4" /> Edit Profile (Conceptual)
            </Button>
          ) : (
             <Button onClick={handleConceptualProfileSave} className="shrink-0 mt-3 sm:mt-0 bg-primary hover:bg-primary/90">
              <Save className="mr-2 h-4 w-4" /> Save Profile (Conceptual)
            </Button>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-primary shadow-md">
              <Image 
                src={profilePictureUrl} 
                alt={displayName} 
                layout="fill" 
                objectFit="cover"
                data-ai-hint="profile person" 
              />
            </div>
            <div className="flex-grow space-y-1 text-center sm:text-left">
              {isEditingProfile ? (
                <Input 
                  id="name" 
                  name="name" 
                  value={conceptualName} 
                  onChange={(e) => setConceptualName(e.target.value)}
                  className="text-2xl font-bold" 
                />
              ) : (
                <h2 className="text-3xl font-bold text-primary">{displayName}</h2>
              )}
              {isEditingProfile ? (
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={conceptualEmail} 
                  onChange={(e) => setConceptualEmail(e.target.value)}
                  disabled // Email usually not changed directly here without verification
                />
              ) : (
                <p className="text-muted-foreground">{displayEmail}</p>
              )}
               <p className="text-sm text-muted-foreground">User ID: {currentUser.uid}</p>
              <p className="text-sm text-muted-foreground">Member since: {joinDate}</p>
            </div>
          </div>
           {isEditingProfile && (
            <div className="text-center mt-2">
                <Button variant="link" size="sm" onClick={() => toast({title: "Conceptual Action", description: "Profile picture change UI would open."})}>Change Profile Picture (Conceptual)</Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Fitness Goals Card (Conceptual) */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-foreground flex items-center">
            <Target className="mr-3 h-7 w-7 text-primary" />
            Fitness Goals
          </CardTitle>
          <CardDescription>Your current fitness objectives. (Conceptual - requires Firestore)</CardDescription>
        </CardHeader>
        <CardContent>
          {MOCK_FITNESS_DATA.currentGoals.length > 0 ? (
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              {MOCK_FITNESS_DATA.currentGoals.map((goal, index) => <li key={index}>{goal}</li>)}
            </ul>
          ) : (
            <p className="text-muted-foreground">No goals set yet. Add your goals to stay motivated!</p>
          )}
        </CardContent>
        <CardFooter>
            <Button variant="outline" onClick={() => toast({title: "Conceptual Action", description: "Goal management UI would open."})}>Manage Goals (Conceptual)</Button>
        </CardFooter>
      </Card>
      
      {/* Recent Activity Card (Conceptual) */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-foreground flex items-center">
            <Activity className="mr-3 h-7 w-7 text-primary" />
            Recent Activity
          </CardTitle>
          <CardDescription>Your latest workouts and activities. (Conceptual - requires Firestore)</CardDescription>
        </CardHeader>
        <CardContent>
          {MOCK_FITNESS_DATA.recentActivities.length > 0 ? (
            <ul className="space-y-3">
              {MOCK_FITNESS_DATA.recentActivities.map((activity, index) => (
                <li key={index} className="p-3 bg-muted/20 rounded-lg">
                  <p className="font-semibold text-foreground">{activity.type} - <span className="text-sm text-muted-foreground">{activity.date}</span></p>
                  <p className="text-xs text-muted-foreground">Duration: {activity.duration} | Calories: {activity.calories}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">No recent activity logged.</p>
          )}
        </CardContent>
        <CardFooter>
            <Button variant="outline" onClick={() => toast({title: "Conceptual Action", description: "Full activity log would be shown."})}>View Full Activity Log (Conceptual)</Button>
        </CardFooter>
      </Card>

      {/* Privacy Settings Card (Conceptual) */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-foreground flex items-center">
            <ShieldCheck className="mr-3 h-7 w-7 text-primary" />
            Privacy Settings
          </CardTitle>
          <CardDescription>Manage how your information is shared. (Conceptual - requires Firestore)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {Object.entries(conceptualPrivacySettings).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
              <div>
                <Label htmlFor={key} className="font-semibold text-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </Label>
              </div>
              <Switch
                id={key}
                checked={value}
                onCheckedChange={() => handleConceptualPrivacyChange(key as keyof typeof MOCK_PRIVACY_SETTINGS)}
              />
            </div>
          ))}
           <div className="pt-4">
            <Button onClick={saveConceptualPrivacySettings} className="w-full sm:w-auto bg-primary hover:bg-primary/90">
              <Save className="mr-2 h-4 w-4" /> Save Privacy Settings (Conceptual)
            </Button>
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
