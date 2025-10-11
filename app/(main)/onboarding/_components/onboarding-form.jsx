"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { onboardingSchema } from "@/lib/schema";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "lucide-react";

const OnboardingForm = ({ industries }) => {
  const [selectIndustry, setSelectedIndustry] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({ resolver: zodResolver(onboardingSchema) });

  const onSubmit = async (data) => {};
  const watchIndustry = watch("industry");

  return (
    <div className="min-h-screen w-full bg-stone-200 flex pt-30 items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-6xl font-bold text-black mb-2">
            Welcome to Path Nexus
          </h1>
          <p className="text-black md:text-xl">
            Let's set up your personalized career journey
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-black">
              Step <span id="current-step">1</span> of 4
            </span>
          </div>
          <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
            <div
              id="progress-bar"
              className="h-full bg-red-900 rounded-full progress-bar"
              style={{ width: "25%" }}
            ></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 form-card">
          <form id="onboarding-form">
            {/** Step 1: Personal Information **/}
            <div className="step fade-in" id="step-1">
              <h2 className="text-2xl font-bold text-black mb-2">
                Let's start with your personal details
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    className="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black mb-1">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    className="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      className="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      Country/Region
                    </label>
                    <Select
                      onValueChange={(value) => setValue("country", value)}
                    >
                      <SelectTrigger className="h-12 rounded-md w-60 border-border bg-input shadow-sm">
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="af">Afghanistan</SelectItem>
                        <SelectItem value="al">Albania</SelectItem>
                        <SelectItem value="dz">Algeria</SelectItem>
                        <SelectItem value="ad">Andorra</SelectItem>
                        <SelectItem value="ao">Angola</SelectItem>
                        <SelectItem value="ar">Argentina</SelectItem>
                        <SelectItem value="am">Armenia</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="at">Austria</SelectItem>
                        <SelectItem value="az">Azerbaijan</SelectItem>
                        <SelectItem value="bs">Bahamas</SelectItem>
                        <SelectItem value="bh">Bahrain</SelectItem>
                        <SelectItem value="bd">Bangladesh</SelectItem>
                        <SelectItem value="by">Belarus</SelectItem>
                        <SelectItem value="be">Belgium</SelectItem>
                        <SelectItem value="bz">Belize</SelectItem>
                        <SelectItem value="bj">Benin</SelectItem>
                        <SelectItem value="bt">Bhutan</SelectItem>
                        <SelectItem value="bo">Bolivia</SelectItem>
                        <SelectItem value="ba">
                          Bosnia and Herzegovina
                        </SelectItem>
                        <SelectItem value="bw">Botswana</SelectItem>
                        <SelectItem value="br">Brazil</SelectItem>
                        <SelectItem value="bn">Brunei</SelectItem>
                        <SelectItem value="bg">Bulgaria</SelectItem>
                        <SelectItem value="bf">Burkina Faso</SelectItem>
                        <SelectItem value="bi">Burundi</SelectItem>
                        <SelectItem value="kh">Cambodia</SelectItem>
                        <SelectItem value="cm">Cameroon</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="cv">Cape Verde</SelectItem>
                        <SelectItem value="cf">
                          Central African Republic
                        </SelectItem>
                        <SelectItem value="td">Chad</SelectItem>
                        <SelectItem value="cl">Chile</SelectItem>
                        <SelectItem value="cn">China</SelectItem>
                        <SelectItem value="co">Colombia</SelectItem>
                        <SelectItem value="km">Comoros</SelectItem>
                        <SelectItem value="cg">Congo</SelectItem>
                        <SelectItem value="cd">
                          Congo (Democratic Republic)
                        </SelectItem>
                        <SelectItem value="cr">Costa Rica</SelectItem>
                        <SelectItem value="hr">Croatia</SelectItem>
                        <SelectItem value="cu">Cuba</SelectItem>
                        <SelectItem value="cy">Cyprus</SelectItem>
                        <SelectItem value="cz">Czech Republic</SelectItem>
                        <SelectItem value="dk">Denmark</SelectItem>
                        <SelectItem value="dj">Djibouti</SelectItem>
                        <SelectItem value="dm">Dominica</SelectItem>
                        <SelectItem value="do">Dominican Republic</SelectItem>
                        <SelectItem value="ec">Ecuador</SelectItem>
                        <SelectItem value="eg">Egypt</SelectItem>
                        <SelectItem value="sv">El Salvador</SelectItem>
                        <SelectItem value="gq">Equatorial Guinea</SelectItem>
                        <SelectItem value="er">Eritrea</SelectItem>
                        <SelectItem value="ee">Estonia</SelectItem>
                        <SelectItem value="et">Ethiopia</SelectItem>
                        <SelectItem value="fj">Fiji</SelectItem>
                        <SelectItem value="fi">Finland</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="ga">Gabon</SelectItem>
                        <SelectItem value="gm">Gambia</SelectItem>
                        <SelectItem value="ge">Georgia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="gh">Ghana</SelectItem>
                        <SelectItem value="gr">Greece</SelectItem>
                        <SelectItem value="gd">Grenada</SelectItem>
                        <SelectItem value="gt">Guatemala</SelectItem>
                        <SelectItem value="gn">Guinea</SelectItem>
                        <SelectItem value="gw">Guinea-Bissau</SelectItem>
                        <SelectItem value="gy">Guyana</SelectItem>
                        <SelectItem value="ht">Haiti</SelectItem>
                        <SelectItem value="hn">Honduras</SelectItem>
                        <SelectItem value="hu">Hungary</SelectItem>
                        <SelectItem value="is">Iceland</SelectItem>
                        <SelectItem value="in">India</SelectItem>
                        <SelectItem value="id">Indonesia</SelectItem>
                        <SelectItem value="ir">Iran</SelectItem>
                        <SelectItem value="iq">Iraq</SelectItem>
                        <SelectItem value="ie">Ireland</SelectItem>
                        <SelectItem value="il">Israel</SelectItem>
                        <SelectItem value="it">Italy</SelectItem>
                        <SelectItem value="jm">Jamaica</SelectItem>
                        <SelectItem value="jp">Japan</SelectItem>
                        <SelectItem value="jo">Jordan</SelectItem>
                        <SelectItem value="kz">Kazakhstan</SelectItem>
                        <SelectItem value="ke">Kenya</SelectItem>
                        <SelectItem value="ki">Kiribati</SelectItem>
                        <SelectItem value="kp">Korea (North)</SelectItem>
                        <SelectItem value="kr">Korea (South)</SelectItem>
                        <SelectItem value="kw">Kuwait</SelectItem>
                        <SelectItem value="kg">Kyrgyzstan</SelectItem>
                        <SelectItem value="la">Laos</SelectItem>
                        <SelectItem value="lv">Latvia</SelectItem>
                        <SelectItem value="lb">Lebanon</SelectItem>
                        <SelectItem value="ls">Lesotho</SelectItem>
                        <SelectItem value="lr">Liberia</SelectItem>
                        <SelectItem value="ly">Libya</SelectItem>
                        <SelectItem value="li">Liechtenstein</SelectItem>
                        <SelectItem value="lt">Lithuania</SelectItem>
                        <SelectItem value="lu">Luxembourg</SelectItem>
                        <SelectItem value="mk">Macedonia</SelectItem>
                        <SelectItem value="mg">Madagascar</SelectItem>
                        <SelectItem value="mw">Malawi</SelectItem>
                        <SelectItem value="my">Malaysia</SelectItem>
                        <SelectItem value="mv">Maldives</SelectItem>
                        <SelectItem value="ml">Mali</SelectItem>
                        <SelectItem value="mt">Malta</SelectItem>
                        <SelectItem value="mh">Marshall Islands</SelectItem>
                        <SelectItem value="mr">Mauritania</SelectItem>
                        <SelectItem value="mu">Mauritius</SelectItem>
                        <SelectItem value="mx">Mexico</SelectItem>
                        <SelectItem value="fm">Micronesia</SelectItem>
                        <SelectItem value="md">Moldova</SelectItem>
                        <SelectItem value="mc">Monaco</SelectItem>
                        <SelectItem value="mn">Mongolia</SelectItem>
                        <SelectItem value="me">Montenegro</SelectItem>
                        <SelectItem value="ma">Morocco</SelectItem>
                        <SelectItem value="mz">Mozambique</SelectItem>
                        <SelectItem value="mm">Myanmar</SelectItem>
                        <SelectItem value="na">Namibia</SelectItem>
                        <SelectItem value="nr">Nauru</SelectItem>
                        <SelectItem value="np">Nepal</SelectItem>
                        <SelectItem value="nl">Netherlands</SelectItem>
                        <SelectItem value="nz">New Zealand</SelectItem>
                        <SelectItem value="ni">Nicaragua</SelectItem>
                        <SelectItem value="ne">Niger</SelectItem>
                        <SelectItem value="ng">Nigeria</SelectItem>
                        <SelectItem value="no">Norway</SelectItem>
                        <SelectItem value="om">Oman</SelectItem>
                        <SelectItem value="pk">Pakistan</SelectItem>
                        <SelectItem value="pw">Palau</SelectItem>
                        <SelectItem value="pa">Panama</SelectItem>
                        <SelectItem value="pg">Papua New Guinea</SelectItem>
                        <SelectItem value="py">Paraguay</SelectItem>
                        <SelectItem value="pe">Peru</SelectItem>
                        <SelectItem value="ph">Philippines</SelectItem>
                        <SelectItem value="pl">Poland</SelectItem>
                        <SelectItem value="pt">Portugal</SelectItem>
                        <SelectItem value="qa">Qatar</SelectItem>
                        <SelectItem value="ro">Romania</SelectItem>
                        <SelectItem value="ru">Russia</SelectItem>
                        <SelectItem value="rw">Rwanda</SelectItem>
                        <SelectItem value="kn">
                          Saint Kitts and Nevis
                        </SelectItem>
                        <SelectItem value="lc">Saint Lucia</SelectItem>
                        <SelectItem value="vc">
                          Saint Vincent and the Grenadines
                        </SelectItem>
                        <SelectItem value="ws">Samoa</SelectItem>
                        <SelectItem value="sm">San Marino</SelectItem>
                        <SelectItem value="st">
                          Sao Tome and Principe
                        </SelectItem>
                        <SelectItem value="sa">Saudi Arabia</SelectItem>
                        <SelectItem value="sn">Senegal</SelectItem>
                        <SelectItem value="rs">Serbia</SelectItem>
                        <SelectItem value="sc">Seychelles</SelectItem>
                        <SelectItem value="sl">Sierra Leone</SelectItem>
                        <SelectItem value="sg">Singapore</SelectItem>
                        <SelectItem value="sk">Slovakia</SelectItem>
                        <SelectItem value="si">Slovenia</SelectItem>
                        <SelectItem value="sb">Solomon Islands</SelectItem>
                        <SelectItem value="so">Somalia</SelectItem>
                        <SelectItem value="za">South Africa</SelectItem>
                        <SelectItem value="es">Spain</SelectItem>
                        <SelectItem value="lk">Sri Lanka</SelectItem>
                        <SelectItem value="sd">Sudan</SelectItem>
                        <SelectItem value="sr">Suriname</SelectItem>
                        <SelectItem value="sz">Swaziland</SelectItem>
                        <SelectItem value="se">Sweden</SelectItem>
                        <SelectItem value="ch">Switzerland</SelectItem>
                        <SelectItem value="sy">Syria</SelectItem>
                        <SelectItem value="tw">Taiwan</SelectItem>
                        <SelectItem value="tj">Tajikistan</SelectItem>
                        <SelectItem value="tz">Tanzania</SelectItem>
                        <SelectItem value="th">Thailand</SelectItem>
                        <SelectItem value="tl">Timor-Leste</SelectItem>
                        <SelectItem value="tg">Togo</SelectItem>
                        <SelectItem value="to">Tonga</SelectItem>
                        <SelectItem value="tt">Trinidad and Tobago</SelectItem>
                        <SelectItem value="tn">Tunisia</SelectItem>
                        <SelectItem value="tr">Turkey</SelectItem>
                        <SelectItem value="tm">Turkmenistan</SelectItem>
                        <SelectItem value="tv">Tuvalu</SelectItem>
                        <SelectItem value="ug">Uganda</SelectItem>
                        <SelectItem value="ua">Ukraine</SelectItem>
                        <SelectItem value="ae">United Arab Emirates</SelectItem>
                        <SelectItem value="gb">United Kingdom</SelectItem>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uy">Uruguay</SelectItem>
                        <SelectItem value="uz">Uzbekistan</SelectItem>
                        <SelectItem value="vu">Vanuatu</SelectItem>
                        <SelectItem value="va">Vatican City</SelectItem>
                        <SelectItem value="ve">Venezuela</SelectItem>
                        <SelectItem value="vn">Vietnam</SelectItem>
                        <SelectItem value="ye">Yemen</SelectItem>
                        <SelectItem value="zm">Zambia</SelectItem>
                        <SelectItem value="zw">Zimbabwe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">
                      City
                    </label>
                    <Input
                      type="text"
                      className="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="New York"
                      required
                    />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-3">
                    <label
                      className="block text-sm font-medium text-black mb-1"
                      htmlFor="picture"
                    >
                      Picture
                    </label>
                    <Input
                      id="picture"
                      type="file"
                      accept=".gif,.jpg,.jpeg,.png"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-1"></label>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Career Goals */}
            <div className="step hidden" id="step-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Education Qualifications
              </h2>
              <p className="text-gray-600 mb-6">
                Select all that apply to your educational background
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="option-card p-4 rounded-lg cursor-pointer"
                  data-value="leadership"
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <i data-feather="award" className="text-blue-500"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Leadership Role
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Aspire to lead teams or departments
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="option-card p-4 rounded-lg cursor-pointer"
                  data-value="technical-expert"
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <i data-feather="code" className="text-blue-500"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Technical Expertise
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Become a specialist in your field
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="option-card p-4 rounded-lg cursor-pointer"
                  data-value="entrepreneurship"
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <i data-feather="briefcase" className="text-blue-500"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Entrepreneurship
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Start your own business or venture
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="option-card p-4 rounded-lg cursor-pointer"
                  data-value="career-change"
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <i
                        data-feather="refresh-cw"
                        className="text-blue-500"
                      ></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Career Change
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Transition to a different field
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Experience Level */}
            <div className="step hidden" id="step-3">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                What's your experience level?
              </h2>
              <p className="text-gray-600 mb-6">
                Select the option that best describes your current stage
              </p>

              <div className="space-y-4">
                <div
                  className="option-card p-5 rounded-lg cursor-pointer"
                  data-value="entry"
                >
                  <div className="flex items-center">
                    <div className="mr-4">
                      <i data-feather="star" className="text-yellow-500"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Entry Level</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        0-2 years of professional experience
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="option-card p-5 rounded-lg cursor-pointer"
                  data-value="mid"
                >
                  <div className="flex items-center">
                    <div className="mr-4">
                      <i
                        data-feather="trending-up"
                        className="text-green-500"
                      ></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Mid-Level</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        3-5 years of professional experience
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="option-card p-5 rounded-lg cursor-pointer"
                  data-value="senior"
                >
                  <div className="flex items-center">
                    <div className="mr-4">
                      <i data-feather="zap" className="text-purple-500"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Senior Level
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        6+ years of professional experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Preferences */}
            <div className="step hidden" id="step-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                How can we help you?
              </h2>
              <p className="text-gray-600 mb-6">
                Select the areas you'd like to focus on
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                  className="option-card p-4 rounded-lg cursor-pointer"
                  data-value="resume"
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <i data-feather="file-text" className="text-blue-500"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Resume Optimization
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Get your resume reviewed and improved
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="option-card p-4 rounded-lg cursor-pointer"
                  data-value="interview"
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <i
                        data-feather="message-circle"
                        className="text-blue-500"
                      ></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Interview Prep
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Practice with AI-powered mock interviews
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="option-card p-4 rounded-lg cursor-pointer"
                  data-value="networking"
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <i data-feather="users" className="text-blue-500"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Networking</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Connect with industry professionals
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="option-card p-4 rounded-lg cursor-pointer"
                  data-value="learning"
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      <i data-feather="book" className="text-blue-500"></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Skill Development
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Access learning resources and courses
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10">
              <Button
                type="button"
                id="prev-btn"
                className="btn-primary bg-amber-800 px-4 py-2 rounded-lg text-center text-white font-light text-xl ml-auto hidden"
              >
                <ArrowLeftIcon className="ml-2" />
                Previous
              </Button>
              <Button
                type="default"
                id="next-btn"
                className="btn-primary bg-amber-800 px-4 py-2 rounded-lg text-center text-white font-light text-xl ml-auto"
              >
                Next
                <ArrowRightIcon className="mr-2" />
              </Button>
              <Button
                type="submit"
                id="submit-btn"
                className="btn-primary bg-amber-800 px-4 py-2 rounded-lg text-center text-white font-light text-xl ml-auto hidden"
              >
                Get Started
                <CheckIcon className="ml-2" />
              </Button>
            </div>
          </form>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center mt-10">
          <div className="flex space-x-4">
            <div className="step-indicator w-10 h-10 rounded-full flex items-center justify-center bg-red-950 text-white font-medium">
              1
            </div>
            <div className="step-indicator w-10 h-10 rounded-full flex items-center justify-center bg-red-950 text-white font-medium">
              2
            </div>
            <div className="step-indicator w-10 h-10 rounded-full flex items-center justify-center bg-red-950 text-white font-medium">
              3
            </div>
            <div className="step-indicator w-10 h-10 rounded-full flex items-center justify-center bg-red-950 text-white font-medium">
              4
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default OnboardingForm;
