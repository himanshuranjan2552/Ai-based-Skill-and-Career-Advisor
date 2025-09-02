import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Profile creation page component
const ProfileCreationPage = () => {
  // State for experience input
  const [experience, setExperience] = React.useState("");
  // State to control popup visibility for invalid input
  const [showPopup, setShowPopup] = React.useState(false);

  // Handler for experience input changes
  const handleExperienceChange = (e) => {
    const value = e.target.value;
    // Allow only numbers between 0 and 99
    if (value === "" || (Number(value) >= 0 && Number(value) <= 99)) {
      setExperience(value);
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Card container for the form */}
      <Card className="w-full max-w-2xl p-4">
        <CardHeader>
          <CardTitle>Create Your Profile</CardTitle>
          <CardDescription>
            Enter your information to create a personalized profile.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {/* Name input */}
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" type="text" />
          </div>
          {/* Industry interest select */}
          <div className="grid gap-2">
            <Label htmlFor="industry">Industry Interest</Label>
            <Select>
              <SelectTrigger className="w-[100%]"></SelectTrigger>

              <SelectValue placeholder="Select an industry" />
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="education">Education</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Experience input with validation */}
          <div className="grid gap-2">
            <Label htmlFor="experience">Experience (Years)</Label>
            <Input
              id="experience"
              placeholder="Years of Experience"
              type="number"
              min="0"
              max="99"
              value={experience}
              onChange={handleExperienceChange}
            />
            {/* Popup for invalid input */}
            {showPopup && (
              <div className="text-red-500 text-sm mt-1">
                Please enter a number between 0 and 99.
              </div>
            )}
          </div>
          {/* Previous jobs textarea */}
          <div className="grid gap-2">
            <Label htmlFor="jobs">Previous Jobs</Label>
            <Textarea id="jobs" placeholder="List your previous jobs..." />
          </div>
          {/* Submit button */}
          <Button>Create Profile</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCreationPage;
