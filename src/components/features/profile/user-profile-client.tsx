
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Edit3, Save, ShieldCheck, Bell, Target, Activity, BarChart3 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface User {
  name: string;
  email: string;
  joinDate: string;
  profilePictureUrl: string;
  dataAiHint: string;
}

interface PrivacySettings {
  showActivityOnMap: boolean;
  shareWorkoutData: boolean;
  receiveNewsletter: boolean;
}

interface FitnessActivity {
  date: string;
  type: string;
  duration: string;
  calories: string;
}
interface FitnessData {
  currentGoals: string[];
  recentActivities: FitnessActivity[];
}

interface UserProfileClientProps {
  user: User;
  privacySettings: PrivacySettings;
  fitnessData: FitnessData;
}

export default function UserProfileClient({ 
  user: initialUser, 
  privacySettings: initialPrivacySettings,
  fitnessData 
}: UserProfileClientProps) {
  const [user, setUser] = useState(initialUser);
  const [privacySettings, setPrivacySettings] = useState(initialPrivacySettings);
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const { toast } = useToast();

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlePrivacyChange = (key: keyof PrivacySettings) => {
    setPrivacySettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const saveProfile = () => {
    console.log("Saving profile (placeholder):", user);
    setIsEditingProfile(false);
    toast({ title: "Profile Updated (Placeholder)", description: "In a real app, your profile information would be saved." });
  };
  
  const savePrivacySettings = () => {
    console.log("Saving privacy settings (placeholder):", privacySettings);
    toast({ title: "Privacy Settings Updated (Placeholder)", description: "In a real app, your privacy preferences would be saved." });
  };


  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <Alert variant="default" className="bg-blue-50 border-blue-500/50 text-blue-700">
        <BarChart3 className="h-5 w-5 !text-blue-600" />
        <AlertTitle className="text-blue-700 font-semibold">Conceptual Dashboard</AlertTitle>
        <AlertDescription className="text-blue-600">
          This is a conceptual dashboard page. Features like editing profile, saving settings, viewing detailed activity, and managing goals are placeholders and require backend integration and user authentication to be functional.
        </AlertDescription>
      </Alert>

      {/* Profile Information Card */}
      <Card className="shadow-xl">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <CardTitle className="font-headline text-3xl text-foreground">Personal Information</CardTitle>
            <CardDescription>View and manage your personal details.</CardDescription>
          </div>
          {!isEditingProfile ? (
            <Button variant="outline" onClick={() => setIsEditingProfile(true)} className="shrink-0 mt-3 sm:mt-0">
              <Edit3 className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          ) : (
             <Button onClick={saveProfile} className="shrink-0 mt-3 sm:mt-0 bg-primary hover:bg-primary/90">
              <Save className="mr-2 h-4 w-4" /> Save Profile
            </Button>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-primary shadow-md">
              <Image 
                src={user.profilePictureUrl} 
                alt={user.name} 
                layout="fill" 
                objectFit="cover"
                data-ai-hint={user.dataAiHint} 
              />
            </div>
            <div className="flex-grow space-y-1 text-center sm:text-left">
              {isEditingProfile ? (
                <Input 
                  id="name" 
                  name="name" 
                  value={user.name} 
                  onChange={handleProfileChange} 
                  className="text-2xl font-bold" 
                  disabled={!isEditingProfile}
                />
              ) : (
                <h2 className="text-3xl font-bold text-primary">{user.name}</h2>
              )}
              {isEditingProfile ? (
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={user.email} 
                  onChange={handleProfileChange}
                  disabled={!isEditingProfile}
                />
              ) : (
                <p className="text-muted-foreground">{user.email}</p>
              )}
              <p className="text-sm text-muted-foreground">Member since: {new Date(user.joinDate).toLocaleDateString()}</p>
            </div>
          </div>
          {isEditingProfile && (
            <div className="text-center mt-2">
                <Button variant="link" size="sm" disabled>Change Profile Picture (Placeholder)</Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Fitness Goals Card */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-foreground flex items-center">
            <Target className="mr-3 h-7 w-7 text-primary" />
            Fitness Goals
          </CardTitle>
          <CardDescription>Your current fitness objectives. (Placeholder)</CardDescription>
        </CardHeader>
        <CardContent>
          {fitnessData.currentGoals.length > 0 ? (
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              {fitnessData.currentGoals.map((goal, index) => <li key={index}>{goal}</li>)}
            </ul>
          ) : (
            <p className="text-muted-foreground">No goals set yet. Add your goals to stay motivated!</p>
          )}
        </CardContent>
        <CardFooter>
            <Button variant="outline" disabled>Manage Goals (Placeholder)</Button>
        </CardFooter>
      </Card>
      
      {/* Recent Activity Card */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-foreground flex items-center">
            <Activity className="mr-3 h-7 w-7 text-primary" />
            Recent Activity
          </CardTitle>
          <CardDescription>Your latest workouts and activities. (Placeholder)</CardDescription>
        </CardHeader>
        <CardContent>
          {fitnessData.recentActivities.length > 0 ? (
            <ul className="space-y-3">
              {fitnessData.recentActivities.map((activity, index) => (
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
            <Button variant="outline" disabled>View Full Activity Log (Placeholder)</Button>
        </CardFooter>
      </Card>


      {/* Privacy Settings Card */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-foreground flex items-center">
            <ShieldCheck className="mr-3 h-7 w-7 text-primary" />
            Privacy Settings
          </CardTitle>
          <CardDescription>Manage how your information is shared and used across SR Fitness.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
            <div>
              <Label htmlFor="showActivityOnMap" className="font-semibold text-foreground">Show my activity on Global Connect Map</Label>
              <p className="text-xs text-muted-foreground">Allow your anonymized activity to appear on the map.</p>
            </div>
            <Switch
              id="showActivityOnMap"
              checked={privacySettings.showActivityOnMap}
              onCheckedChange={() => handlePrivacyChange('showActivityOnMap')}
              disabled 
            />
          </div>
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
            <div>
              <Label htmlFor="shareWorkoutData" className="font-semibold text-foreground">Share workout data with community</Label>
              <p className="text-xs text-muted-foreground">Allow progress sharing in community features (optional).</p>
            </div>
            <Switch
              id="shareWorkoutData"
              checked={privacySettings.shareWorkoutData}
              onCheckedChange={() => handlePrivacyChange('shareWorkoutData')}
              disabled
            />
          </div>
          <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
            <div>
              <Label htmlFor="receiveNewsletter" className="font-semibold text-foreground">Receive SR Fitness Newsletter</Label>
              <p className="text-xs text-muted-foreground">Get updates on new classes, offers, and tips.</p>
            </div>
            <Switch
              id="receiveNewsletter"
              checked={privacySettings.receiveNewsletter}
              onCheckedChange={() => handlePrivacyChange('receiveNewsletter')}
              disabled
            />
          </div>
           <div className="pt-4">
            <Button onClick={savePrivacySettings} className="w-full sm:w-auto bg-primary hover:bg-primary/90" disabled>
              <Save className="mr-2 h-4 w-4" /> Save Privacy Settings (Placeholder)
            </Button>
          </div>
        </CardContent>
      </Card>
       {/* Placeholder for other settings like Notifications, Account Deletion etc. */}
        <Card className="shadow-xl">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-foreground flex items-center">
                    <Bell className="mr-3 h-7 w-7 text-primary" />
                    Notification Preferences
                </CardTitle>
                <CardDescription>Choose what alerts you receive.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">Notification settings placeholder. (e.g., Email, Push for new messages, class reminders etc.)</p>
            </CardContent>
            <CardFooter>
                 <Button variant="outline" disabled>Manage Notifications (Placeholder)</Button>
            </CardFooter>
        </Card>
    </div>
  );
}

    