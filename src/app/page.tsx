"use client";

import { useState, useTransition, ChangeEvent, useRef, useEffect } from "react";
import { enhanceOcrAccuracy } from "@/ai/flows/enhance-ocr-accuracy";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { UploadCloud, File as FileIcon, X, Copy, Download, Wand2, Loader2, PartyPopper } from "lucide-react";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

const MOCK_OCR_TEXT = "Th1s is a s@mple of OCR-extracted text with s0me errrors.\nIt's n0t perfect, but AI can help f1x it.\n\nCommon issues include number-letter swaps (1 for i, 0 for o) and punctuation mistakes, like this: 'Hell0 W0rld!'.\n\nThe quick brOwn fox jump$ over the lazy d0g.";

type Status = "idle" | "file_selected" | "extracting" | "extracted" | "enhancing" | "enhanced";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [extractedText, setExtractedText] = useState("");
  const [enhancedText, setEnhancedText] = useState("");
  const [currentTab, setCurrentTab] = useState("extracted");
  const [isCopying, setIsCopying] = useState(false);
  
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const [isEnhancePending, startEnhanceTransition] = useTransition();

  useEffect(() => {
    if (status === 'enhanced' && enhancedText) {
      setCurrentTab('enhanced');
    }
  }, [status, enhancedText]);

  const handleFileChange = (selectedFile: File | null) => {
    if (selectedFile) {
      const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
      if (allowedTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setStatus("file_selected");
        setExtractedText("");
        setEnhancedText("");
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PNG, JPG, or PDF file.",
          variant: "destructive",
        });
      }
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  const clearFile = () => {
    setFile(null);
    setStatus("idle");
    setExtractedText("");
    setEnhancedText("");
  };

  const handleExtract = () => {
    setStatus("extracting");
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + 5;
      });
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setExtractedText(MOCK_OCR_TEXT);
      setStatus("extracted");
    }, 2000);
  };

  const handleEnhance = () => {
    setStatus("enhancing");
    startEnhanceTransition(async () => {
      try {
        const result = await enhanceOcrAccuracy({ ocrText: extractedText });
        setEnhancedText(result.enhancedText);
        setStatus("enhanced");
      } catch (error) {
        console.error("Enhancement failed:", error);
        toast({
          title: "Enhancement Failed",
          description: "Could not enhance the text. Please try again.",
          variant: "destructive",
        });
        setStatus("extracted");
      }
    });
  };

  const handleCopy = () => {
    if (isCopying) return;
    const textToCopy = currentTab === 'enhanced' ? enhancedText : extractedText;
    navigator.clipboard.writeText(textToCopy);
    setIsCopying(true);
    setTimeout(() => setIsCopying(false), 2000);
  };

  const handleDownload = () => {
    const textToDownload = currentTab === 'enhanced' ? enhancedText : extractedText;
    const blob = new Blob([textToDownload], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'optical-clarity-text.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const renderUploadUI = () => (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={openFileDialog}
      className={cn(
        "relative flex flex-col items-center justify-center w-full p-10 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
        dragActive ? "border-primary bg-accent" : "border-border hover:border-primary/50 hover:bg-accent/50"
      )}
    >
      <input ref={inputRef} type="file" className="hidden" accept="image/png, image/jpeg, application/pdf" onChange={handleChange} />
      <UploadCloud className="w-12 h-12 text-muted-foreground" />
      <p className="mt-4 text-lg font-semibold">Drag & drop files here</p>
      <p className="text-muted-foreground">or click to browse</p>
      <p className="mt-2 text-xs text-muted-foreground">PNG, JPG or PDF</p>
    </div>
  );

  const renderFileSelectedUI = () => file && (
    <div className="flex items-center justify-between w-full p-4 border rounded-lg bg-secondary/30">
      <div className="flex items-center gap-3">
        <FileIcon className="h-6 w-6 text-primary" />
        <span className="font-medium">{file.name}</span>
      </div>
      <Button variant="ghost" size="icon" onClick={clearFile}>
        <X className="h-5 w-5" />
      </Button>
    </div>
  );
  
  const renderProgressUI = () => (
    <div className="flex flex-col items-center justify-center w-full text-center">
      <Progress value={progress} className="w-full" />
      <p className="mt-4 font-medium text-muted-foreground">
        {status === 'extracting' ? `Extracting text from ${file?.name}...` : "Enhancing with AI..."}
      </p>
    </div>
  );

  const renderResultsUI = () => (
    <Card>
      <CardHeader>
        <CardTitle>Extracted Text</CardTitle>
        <div className="flex flex-wrap gap-2 items-center justify-between pt-2">
            <p className="text-sm text-muted-foreground">Review, edit, and enhance the extracted text.</p>
            <div className="flex gap-2">
                <Button onClick={handleEnhance} disabled={status === 'enhancing' || isEnhancePending}>
                  {status === 'enhancing' || isEnhancePending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                  Enhance with AI
                </Button>
                <Button variant="outline" onClick={handleCopy}>
                  <Copy className="mr-2 h-4 w-4" />
                  {isCopying ? 'Copied!' : 'Copy'}
                </Button>
                <Button variant="outline" onClick={handleDownload}>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={currentTab} onValueChange={setCurrentTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="extracted">Extracted Text</TabsTrigger>
            <TabsTrigger value="enhanced" disabled={!enhancedText}>AI Enhanced</TabsTrigger>
          </TabsList>
          <TabsContent value="extracted" className="mt-4">
            <Textarea 
              value={extractedText} 
              onChange={(e) => setExtractedText(e.target.value)}
              className="min-h-[200px] text-base"
              aria-label="Extracted Text"
            />
          </TabsContent>
          <TabsContent value="enhanced" className="mt-4">
             <Textarea 
              value={enhancedText} 
              onChange={(e) => setEnhancedText(e.target.value)}
              className="min-h-[200px] text-base"
              aria-label="AI Enhanced Text"
            />
          </TabsContent>
        </Tabs>
      </CardContent>
       <CardFooter className="justify-end">
          <Button variant="secondary" onClick={clearFile}>Start Over</Button>
        </CardFooter>
    </Card>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {status !== 'extracted' && status !== 'enhancing' && status !== 'enhanced' && (
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Upload Document</CardTitle>
                <CardDescription>Upload an image (PNG, JPG) or PDF file to extract text.</CardDescription>
              </CardHeader>
              <CardContent>
                {status === 'idle' && renderUploadUI()}
                {status === 'file_selected' && renderFileSelectedUI()}
                {status === 'extracting' && renderProgressUI()}
              </CardContent>
              {status === 'file_selected' && (
                <CardFooter>
                  <Button onClick={handleExtract} className="w-full sm:w-auto">Extract Text</Button>
                </CardFooter>
              )}
            </Card>
          )}

          {(status === 'extracted' || status === 'enhancing' || status === 'enhanced') && renderResultsUI()}
        </div>
      </main>
    </div>
  );
}
