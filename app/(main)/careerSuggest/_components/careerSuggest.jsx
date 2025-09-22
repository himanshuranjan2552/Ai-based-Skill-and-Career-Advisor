"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { useState } from "react";

const careerPaths = [
  {
    title: "Software Engineer",
    description:
      "Design, develop, and maintain software applications and systems.",
    skills: ["JavaScript", "Python", "C++", "Algorithms", "Databases"],
  },
  {
    title: "Data Scientist",
    description:
      "Analyze large datasets to extract valuable insights and build data models.",
    skills: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "SQL",
      "Statistics",
    ],
  },
  {
    title: "DevOps Engineer",
    description:
      "Work on deployment pipelines, automation, and cloud infrastructure.",
    skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Terraform"],
  },
  {
    title: "Embedded Systems Engineer",
    description:
      "Work with hardware and low-level programming for embedded systems.",
    skills: ["C/C++", "Embedded Systems", "RTOS", "Hardware Design"],
  },
  {
    title: "Product Manager",
    description:
      "Bridge the gap between engineering teams and business stakeholders.",
    skills: ["Project Management", "Communication", "Product Roadmaps"],
  },
];

const CareerPathSuggestionPage = () => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCareerClick = (career) => {
    setSelectedCareer(career);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCareer(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="px-30 text-3xl font-semibold text-gray-800 mb-6">
          Explore Career Paths for Engineers
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Not sure which path to take? Here are some great career options to
          consider.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerPaths.map((career, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {career.title}
              </h3>
              <p className="text-gray-600 mb-4">{career.description}</p>
              <Button
                onClick={() => handleCareerClick(career)}
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <Dialog open={isModalOpen} onClose={closeModal}>
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {selectedCareer?.title}
            </h2>
            <p className="text-gray-600 mb-4">{selectedCareer?.description}</p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Skills Required:
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              {selectedCareer?.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
            <Button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white hover:bg-red-600"
            >
              Close
            </Button>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default CareerPathSuggestionPage;
