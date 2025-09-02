"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { User, Settings, CheckCircle } from "lucide-react";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    primarySkill: "",
    careerGoal: "",
  });

  const next = () => setStep((s) => Math.min(s + 1, 3));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleChange = (field) => (e) =>
    setData((prev) => ({ ...prev, [field]: e.target.value }));

  // Determine which field to validate for the current step
  const stepField =
    step === 1 ? "name" : step === 2 ? "primarySkill" : "careerGoal";
  const isCurrentFieldEmpty = data[stepField].trim() === "";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md p-6 space-y-6">
        <Progress value={(step / 3) * 100} className="h-2" />

        {step === 1 && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-lg font-medium">
              <User size={20} />
              <span>Tell us your name</span>
            </div>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={data.name}
              onChange={handleChange("name")}
              placeholder="Jane Doe"
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-lg font-medium">
              <Settings size={20} />
              <span>Your primary skill</span>
            </div>
            <Label htmlFor="skill">Primary Skill</Label>
            <Input
              id="skill"
              value={data.primarySkill}
              onChange={handleChange("primarySkill")}
              placeholder="e.g., Python, React"
            />
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-lg font-medium">
              <CheckCircle size={20} />
              <span>Your career goal</span>
            </div>
            <Label htmlFor="goal">Career Goal</Label>
            <Input
              id="goal"
              value={data.careerGoal}
              onChange={handleChange("careerGoal")}
              placeholder="e.g., Become a data scientist"
            />
          </div>
        )}

        <div className="flex justify-between">
          <Button variant="outline" onClick={back} disabled={step === 1}>
            Back
          </Button>
          {step < 3 ? (
            <Button onClick={next} disabled={isCurrentFieldEmpty}>
              Next
            </Button>
          ) : (
            <Button onClick={() => console.log("Onboarding data:", data)}>
              Finish
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
