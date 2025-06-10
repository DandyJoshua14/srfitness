
"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Camera, AlertTriangle, Info, CheckCircle } from 'lucide-react';

export default function SmartMirrorClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [feedback, setFeedback] = useState<string[]>([]);
  const [currentExercise, setCurrentExercise] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Clean up stream when component unmounts or camera is turned off
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const requestCameraPermission = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      toast({
        variant: 'destructive',
        title: 'Camera Not Supported',
        description: 'Your browser does not support camera access.',
      });
      setHasCameraPermission(false);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setHasCameraPermission(true);
      setIsCameraOn(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      toast({
        title: 'Camera Access Granted',
        description: 'You can now start your form analysis.',
      });
      // Simulate AI feedback after a delay
      setTimeout(() => setFeedback(["Keep your back straight.", "Ensure your knees don't go past your toes."]), 3000);
      setCurrentExercise("Squats");

    } catch (error) {
      console.error('Error accessing camera:', error);
      setHasCameraPermission(false);
      setIsCameraOn(false);
      toast({
        variant: 'destructive',
        title: 'Camera Access Denied',
        description: 'Please enable camera permissions in your browser settings to use this feature.',
      });
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraOn(false);
    setFeedback([]);
    setCurrentExercise(null);
    toast({
      title: 'Camera Turned Off',
    });
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 items-start">
      <Card className="md:col-span-2 shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-foreground">Live Camera Feed</CardTitle>
          <CardDescription>
            {isCameraOn ? `Analyzing: ${currentExercise || "Ready to analyze..."}` : "Your camera feed will appear here once access is granted."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-md relative flex items-center justify-center overflow-hidden">
            <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
            {!isCameraOn && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
                <Camera className="h-16 w-16 mb-4" />
                <p>Camera is off or permission not granted.</p>
              </div>
            )}
            {/* Placeholder for live overlay. In a real app, this would be a canvas or SVG overlay. */}
            {isCameraOn && feedback.length > 0 && (
              <div className="absolute top-4 left-4 p-2 bg-black/50 text-white rounded text-xs">
                Visual Cues Overlay (Placeholder)
              </div>
            )}
          </div>
          {hasCameraPermission === false && (
             <Alert variant="destructive" className="mt-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Camera Permission Required</AlertTitle>
              <AlertDescription>
                This feature needs camera access. Please grant permission in your browser.
              </AlertDescription>
            </Alert>
          )}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            {!isCameraOn ? (
              <Button onClick={requestCameraPermission} size="lg" className="w-full sm:w-auto">
                <Camera className="mr-2 h-5 w-5" /> Start Smart Mirror
              </Button>
            ) : (
              <Button onClick={stopCamera} variant="destructive" size="lg" className="w-full sm:w-auto">
                Stop Camera
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-1 shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-foreground">AI Feedback</CardTitle>
          <CardDescription>Real-time suggestions to improve your form.</CardDescription>
        </CardHeader>
        <CardContent>
          {isCameraOn && feedback.length === 0 && !currentExercise && (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Ready to Analyze</AlertTitle>
              <AlertDescription>Start an exercise, and feedback will appear here.</AlertDescription>
            </Alert>
          )}
           {isCameraOn && feedback.length === 0 && currentExercise && (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Analyzing...</AlertTitle>
              <AlertDescription>Performing {currentExercise.toLowerCase()}. Hold your form.</AlertDescription>
            </Alert>
          )}
          {feedback.length > 0 && (
            <ul className="space-y-3">
              {feedback.map((item, index) => (
                <li key={index} className="flex items-start text-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          )}
           {!isCameraOn && hasCameraPermission !== false &&(
             <Alert variant="default" className="mt-4">
                <Info className="h-4 w-4" />
                <AlertTitle>Turn On Camera</AlertTitle>
                <AlertDescription>
                    Click "Start Smart Mirror" to begin form analysis.
                </AlertDescription>
            </Alert>
           )}
        </CardContent>
      </Card>
    </div>
  );
}
