import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated B.Tech Computer Science & Information Technology student with a passion for 
              full-stack web development. Currently in my 3rd year at Ajay Kumar Garg  Engineering College Ghaziabad, I've been 
              actively building projects and honing my skills in modern web technologies.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey in programming started with curiosity about how websites work, and it has evolved 
              into a deep passion for creating user-friendly, efficient, and scalable web applications. 
              I enjoy tackling complex problems and turning ideas into reality through code.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or solving algorithmic challenges on competitive programming platforms.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">300+</div>
                <div className="text-gray-600">Problems Solved</div>
              </div>
            </div>
          </div>

          {/* Education & Info Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Education</h4>
                  <p className="text-gray-700 font-medium">B.Tech Computer Science & IT</p>
                  <p className="text-gray-600">AKGEC Engineering College</p>
                  <p className="text-gray-500 text-sm">2022 - 2026 (Expected)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Experience</h4>
                  <p className="text-gray-700 font-medium">3+ Years of Programming</p>
                  <p className="text-gray-600">Self-taught & Academic Learning</p>
                  <p className="text-gray-500 text-sm">Continuous Learning Journey</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-700 font-medium">Ghaziabad, Uttar Pradesh</p>
                  <p className="text-gray-600">India</p>
                  <p className="text-gray-500 text-sm">Open to Remote Opportunities</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Achievements</h4>
                  <p className="text-gray-700 font-medium">Successfully completed a full-stack internship at CodSoft</p>
                  <p className="text-gray-600">Consistent Academic Excellence</p>
                  <p className="text-gray-500 text-sm">CGPA: 7.5+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}