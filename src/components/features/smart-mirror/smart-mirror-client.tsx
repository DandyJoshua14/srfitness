
"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Camera, AlertTriangle, Info, CheckCircle, Loader2, Sparkles, ListChecks, Timer } from 'lucide-react';
import { analyzeExerciseForm, type AnalyzeExerciseFormInput, type AnalyzeExerciseFormOutput } from '@/ai/flows/analyze-exercise-form-flow';

export default function SmartMirrorClient() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeExerciseFormOutput | null>(null);
  const [exerciseNameInput, setExerciseNameInput] = useState('');
  const [analysisError, setAnalysisError] = useState<string | null>(null);
  const [countdownMessage, setCountdownMessage] = useState<string | null>(null);
  const { toast } = useToast();

  // Component unmount cleanup
  useEffect(() => {
    const currentVideoRef = videoRef.current; 
    const currentTimerRef = timerRef.current; 

    return () => {
      if (currentVideoRef && currentVideoRef.srcObject) {
        const stream = currentVideoRef.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
        // currentVideoRef.srcObject = null; // Avoid error if ref is nullified before this runs
        console.log("Camera stream stopped on unmount.");
      }
      if (currentTimerRef) {
        clearTimeout(currentTimerRef);
        console.log("Analysis timer cleared on unmount.");
      }
    };
  }, []);

  const stopCameraStream = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraOn(false);
    setCountdownMessage(null);
  };

  const handleAnalyzeForm = async () => {
    if (!videoRef.current || !canvasRef.current || !videoRef.current.srcObject) {
      // Camera might have been stopped or lost stream before analysis
      console.log("Analysis skipped: camera not ready or stream lost.");
      stopCameraStream(); // Ensure camera is marked as off
      return;
    }

    setIsAnalyzing(true);
    setAnalysisResult(null);
    setAnalysisError(null);
    setCountdownMessage("Analyzing your form...");

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext('2d');

    if (!context) {
      toast({ variant: "destructive", title: "Error", description: "Could not get canvas context." });
      setIsAnalyzing(false);
      stopCameraStream();
      return;
    }

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataUri = canvas.toDataURL('image/jpeg');

    try {
      const input: AnalyzeExerciseFormInput = { 
        imageDataUri, 
        exerciseName: exerciseNameInput.trim() || undefined 
      };
      const result = await analyzeExerciseForm(input);
      setAnalysisResult(result);
      if (result.feedbackItems.length === 0 && !result.overallAssessment) {
         toast({ title: "Analysis Complete", description: "AI couldn't provide specific feedback. Image might be unclear or exercise not recognized."})
      } else {
         toast({ title: "Form Analysis Complete!", description: "Check the feedback panel for details." });
      }
    } catch (err) {
      console.error("Error analyzing form:", err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred during analysis.";
      setAnalysisError(errorMessage);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: errorMessage,
      });
    } finally {
      setIsAnalyzing(false);
      stopCameraStream(); // Stop camera after analysis attempt
      toast({ title: "Camera session ended."});
    }
  };

  const requestCameraAndStartAnalysisTimer = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      toast({
        variant: 'destructive',
        title: 'Camera Not Supported',
        description: 'Your browser does not support camera access.',
      });
      setHasCameraPermission(false);
      return;
    }

    setIsAnalyzing(false); // Reset analysis state
    setAnalysisResult(null);
    setAnalysisError(null);
    setCountdownMessage(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 1280 }, height: { ideal: 720 } } });
      setHasCameraPermission(true);
      setIsCameraOn(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      toast({
        title: 'Camera Started',
        description: 'Get ready! Analysis begins in 20 seconds.',
      });
      setCountdownMessage('Preparing to analyze...');

      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        handleAnalyzeForm(); // This will also stop the camera after analysis
      }, 20000); // 20 seconds

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


  return (
    <div className="grid md:grid-cols-3 gap-8 items-start">
      <Card className="md:col-span-2 shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-foreground">Live Camera Feed</CardTitle>
          <CardDescription>
            {isCameraOn ? `Point your camera. ${countdownMessage || "Ready."}` : "Your camera feed will appear here once access is granted."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-md relative flex items-center justify-center overflow-hidden border border-border">
            <video ref={videoRef} className="w-full h-full object-cover transform scale-x-[-1]" autoPlay muted playsInline />
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            {!isCameraOn && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground bg-background/50">
                <Camera className="h-16 w-16 mb-4" />
                <p>Camera is off.</p>
              </div>
            )}
          </div>
          {hasCameraPermission === false && !isCameraOn && (
             <Alert variant="destructive" className="mt-4">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Camera Permission Required</AlertTitle>
              <AlertDescription>
                This feature needs camera access. Please grant permission in your browser.
              </AlertDescription>
            </Alert>
          )}
          <div className="mt-6 space-y-4">
            <div className="space-y-3 p-4 border border-border rounded-lg bg-card">
              <div>
                <Label htmlFor="exerciseName" className="font-semibold text-foreground">Exercise Name (Optional)</Label>
                <Input 
                  id="exerciseName"
                  type="text"
                  value={exerciseNameInput}
                  onChange={(e) => setExerciseNameInput(e.target.value)}
                  placeholder="e.g., Squat, Push-up, Lunge"
                  className="mt-1"
                  disabled={isCameraOn || isAnalyzing}
                />
                  <p className="text-xs text-muted-foreground mt-1">Helps AI give more specific feedback.</p>
              </div>
            </div>
            <Button 
              onClick={requestCameraAndStartAnalysisTimer} 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isCameraOn || isAnalyzing}
            >
              <Camera className="mr-2 h-5 w-5" /> 
              {isCameraOn && !isAnalyzing ? <><Timer className="mr-2 h-5 w-5 animate-spin" />Preparing (20s)...</> : 
               isAnalyzing ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Analyzing...</> : 
               "Start Smart Mirror"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-1 shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-foreground flex items-center"><ListChecks className="mr-2 h-6 w-6 text-primary"/>AI Feedback</CardTitle>
          <CardDescription>Suggestions to improve your form will appear here.</CardDescription>
        </CardHeader>
        <CardContent className="min-h-[200px]">
          {isAnalyzing && !analysisResult && !analysisError && ( // Show analyzing only if no result/error yet
            <div className="flex flex-col items-center justify-center text-muted-foreground py-8">
              <Loader2 className="h-10 w-10 animate-spin text-primary mb-3" />
              <p className="font-semibold">AI is analyzing your form...</p>
              <p className="text-sm">Please hold still.</p>
            </div>
          )}
          {analysisError && ( // Always show error if present
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Analysis Error</AlertTitle>
              <AlertDescription>{analysisError}</AlertDescription>
            </Alert>
          )}
          {analysisResult && !analysisError && ( // Show result if present and no error
            <div className="space-y-4">
              {analysisResult.overallAssessment && (
                <Alert variant={analysisResult.isFormCorrect === false ? "destructive" : (analysisResult.isFormCorrect === true ? "default" : "default")} 
                       className={analysisResult.isFormCorrect === true ? "border-green-500/50 bg-green-50 text-green-700" : ""}>
                   {analysisResult.isFormCorrect === true ? <CheckCircle className="h-4 w-4 !text-green-600" /> : (analysisResult.isFormCorrect === false ? <AlertTriangle className="h-4 w-4"/> : <Info className="h-4 w-4"/>) }
                  <AlertTitle className={analysisResult.isFormCorrect === true ? "!text-green-700 font-semibold" : (analysisResult.isFormCorrect === false ? "" : "font-semibold")}>
                    Overall Assessment
                  </AlertTitle>
                  <AlertDescription className={analysisResult.isFormCorrect === true ? "!text-green-600" : (analysisResult.isFormCorrect === false ? "" : "")}>
                    {analysisResult.overallAssessment}
                  </AlertDescription>
                </Alert>
              )}
              {analysisResult.feedbackItems && analysisResult.feedbackItems.length > 0 && (
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Suggestions:</h4>
                  <ul className="space-y-2">
                    {analysisResult.feedbackItems.map((item, index) => (
                      <li key={index} className="flex items-start text-sm p-2 bg-muted/50 rounded-md">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {(!analysisResult.overallAssessment || analysisResult.overallAssessment.trim() === "" || analysisResult.overallAssessment === "Assessment not provided.") && 
               (!analysisResult.feedbackItems || analysisResult.feedbackItems.length === 0) && (
                 <Alert>
                    <Info className="h-4 w-4" />
                    <AlertTitle>No Specific Feedback</AlertTitle>
                    <AlertDescription>
                        The AI couldn't provide detailed suggestions for this image. Try a different angle or ensure the exercise is clear.
                    </AlertDescription>
                </Alert>
              )}
            </div>
          )}
          {!isCameraOn && !isAnalyzing && !analysisResult && !analysisError && (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Ready to Start</AlertTitle>
              <AlertDescription>
                Click 'Start Smart Mirror' to begin your automated form analysis.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
