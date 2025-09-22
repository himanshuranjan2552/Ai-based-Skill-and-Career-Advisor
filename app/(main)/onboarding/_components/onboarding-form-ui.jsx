"use client";

const OnboardingFormUI = () => {
  <body className="min-h-screen bg-stone-200 flex items-center justify-center p-6">
    <div class="w-full max-w-4xl">

      {/* Progress Bar */}
      <div class="mb-10">
        <div class="flex justify-between mb-2">
          <span class="text-sm font-medium text-gray-700">
            Step <span id="current-step">1</span> of 4
          </span>
          <span class="text-sm font-medium text-gray-700">
            <span id="progress-percent">A little bit about you</span>
          </span>
        </div>
        <div class="h-2 bg-stone-200 rounded-full overflow-hidden">
          <div
            id="progress-bar"
            class="h-full bg-stone-600 rounded-full progress-bar"
            style="width: 25%"
          ></div>
        </div>
      </div>

      {/* Header */}
      <div class="text-left mb-10">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Let's start with your Personal Info
        </h1>
        <p class="text-gray-600">
          Let's set up your personalized career journey
        </p>
      </div>


      {/* Step Indicators */}
      <div class="flex justify-center mb-10">
        <div class="flex space-x-4">
          <div class="step-indicator w-10 h-10 rounded-full flex items-center justify-center bg-stone-200 text-gray-700 font-medium">
            1
          </div>
          <div class="step-indicator w-10 h-10 rounded-full flex items-center justify-center bg-stone-200 text-gray-700 font-medium">
            2
          </div>
          <div class="step-indicator w-10 h-10 rounded-full flex items-center justify-center bg-stone-200 text-gray-700 font-medium">
            3
          </div>
          <div class="step-indicator w-10 h-10 rounded-full flex items-center justify-center bg-stone-200 text-gray-700 font-medium">
            4
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div class="bg-white rounded-2xl shadow-xl p-6 md:p-8 form-card">
        <form id="onboarding-form">
          {/** Step 1: Personal Information **/}
          <div class="step fade-in" id="step-1">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              Let's get to know you
            </h2>
            <p class="text-gray-600 mb-6">
              Tell us about yourself to personalize your experience
            </p>

            <div class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  class="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  class="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                  Current Role
                </label>
                <input
                  type="text"
                  class="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Software Engineer"
                  required
                />
              </div>
            </div>
          </div>

          {/* Step 2: Career Goals */}
          <div class="step hidden" id="step-2">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              What are your career goals?
            </h2>
            <p class="text-gray-600 mb-6">
              Select all that apply to your professional aspirations
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                class="option-card p-4 rounded-lg cursor-pointer"
                data-value="leadership"
              >
                <div class="flex items-start">
                  <div class="mr-3 mt-1">
                    <i data-feather="award" class="text-blue-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">Leadership Role</h3>
                    <p class="text-sm text-gray-600 mt-1">
                      Aspire to lead teams or departments
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="option-card p-4 rounded-lg cursor-pointer"
                data-value="technical-expert"
              >
                <div class="flex items-start">
                  <div class="mr-3 mt-1">
                    <i data-feather="code" class="text-blue-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">
                      Technical Expertise
                    </h3>
                    <p class="text-sm text-gray-600 mt-1">
                      Become a specialist in your field
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="option-card p-4 rounded-lg cursor-pointer"
                data-value="entrepreneurship"
              >
                <div class="flex items-start">
                  <div class="mr-3 mt-1">
                    <i data-feather="briefcase" class="text-blue-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">Entrepreneurship</h3>
                    <p class="text-sm text-gray-600 mt-1">
                      Start your own business or venture
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="option-card p-4 rounded-lg cursor-pointer"
                data-value="career-change"
              >
                <div class="flex items-start">
                  <div class="mr-3 mt-1">
                    <i data-feather="refresh-cw" class="text-blue-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">Career Change</h3>
                    <p class="text-sm text-gray-600 mt-1">
                      Transition to a different field
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Experience Level */}
          <div class="step hidden" id="step-3">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              What's your experience level?
            </h2>
            <p class="text-gray-600 mb-6">
              Select the option that best describes your current stage
            </p>

            <div class="space-y-4">
              <div
                class="option-card p-5 rounded-lg cursor-pointer"
                data-value="entry"
              >
                <div class="flex items-center">
                  <div class="mr-4">
                    <i data-feather="star" class="text-yellow-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">Entry Level</h3>
                    <p class="text-sm text-gray-600 mt-1">
                      0-2 years of professional experience
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="option-card p-5 rounded-lg cursor-pointer"
                data-value="mid"
              >
                <div class="flex items-center">
                  <div class="mr-4">
                    <i data-feather="trending-up" class="text-green-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">Mid-Level</h3>
                    <p class="text-sm text-gray-600 mt-1">
                      3-5 years of professional experience
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="option-card p-5 rounded-lg cursor-pointer"
                data-value="senior"
              >
                <div class="flex items-center">
                  <div class="mr-4">
                    <i data-feather="zap" class="text-purple-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">Senior Level</h3>
                    <p class="text-sm text-gray-600 mt-1">
                      6+ years of professional experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Preferences */}
          <div class="step hidden" id="step-4">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">
              How can we help you?
            </h2>
            <p class="text-gray-600 mb-6">
              Select the areas you'd like to focus on
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                class="option-card p-4 rounded-lg cursor-pointer"
                data-value="resume"
              >
                <div class="flex items-start">
                  <div class="mr-3 mt-1">
                    <i data-feather="file-text" class="text-blue-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">
                      Resume Optimization
                    </h3>
                    <p class="text-sm text-gray-600 mt-1">
                      Get your resume reviewed and improved
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="option-card p-4 rounded-lg cursor-pointer"
                data-value="interview"
              >
                <div class="flex items-start">
                  <div class="mr-3 mt-1">
                    <i data-feather="message-circle" class="text-blue-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">Interview Prep</h3>
                    <p class="text-sm text-gray-600 mt-1">
                      Practice with AI-powered mock interviews
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="option-card p-4 rounded-lg cursor-pointer"
                data-value="networking"
              >
                <div class="flex items-start">
                  <div class="mr-3 mt-1">
                    <i data-feather="users" class="text-blue-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">Networking</h3>
                    <p class="text-sm text-gray-600 mt-1">
                      Connect with industry professionals
                    </p>
                  </div>
                </div>
              </div>

              <div
                class="option-card p-4 rounded-lg cursor-pointer"
                data-value="learning"
              >
                <div class="flex items-start">
                  <div class="mr-3 mt-1">
                    <i data-feather="book" class="text-blue-500"></i>
                  </div>
                  <div>
                    <h3 class="font-medium text-gray-800">Skill Development</h3>
                    <p class="text-sm text-gray-600 mt-1">
                      Access learning resources and courses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div class="flex justify-between mt-10">
            <button
              type="button"
              id="prev-btn"
              class="btn-secondary px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hidden"
            >
              <i data-feather="arrow-left" class="mr-2"></i> Previous
            </button>
            <button
              type="button"
              id="next-btn"
              class="btn-primary px-6 py-3 rounded-lg text-white font-medium ml-auto"
            >
              Next <i data-feather="arrow-right" class="ml-2"></i>
            </button>
            <button
              type="submit"
              id="submit-btn"
              class="btn-primary px-6 py-3 rounded-lg text-white font-medium hidden"
            >
              Get Started <i data-feather="check" class="ml-2"></i>
            </button>
          </div>
        </form>
      </div>

      <div class="text-center mt-8 text-gray-600 text-sm">
        <p>
          Already have an account?{" "}
          <a href="#" class="text-blue-500 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  </body>;
};
export default OnboardingFormUI;
