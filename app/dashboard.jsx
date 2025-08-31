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

const ProfileCreationPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-2xl p-4">
        <CardHeader>
          <CardTitle>Create Your Profile</CardTitle>
          <CardDescription>
            Enter your information to create a personalized profile.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" type="text" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="industry">Industry Interest</Label>
            <Select>
              <SelectTrigger className="w-[100%]">
                <SelectValue placeholder="Select an industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="education">Education</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="experience">Experience (Years)</Label>
            <Input
              id="experience"
              placeholder="Years of Experience"
              type="number"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="jobs">Previous Jobs</Label>
            <Textarea id="jobs" placeholder="List your previous jobs..." />
          </div>
          <Button>Create Profile</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileCreationPage;
