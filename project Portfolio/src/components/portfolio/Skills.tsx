import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 80, color: 'bg-blue-500' },
        { name: 'Redux', level: 50, color: 'bg-purple-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
        { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-teal-500' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 70, color: 'bg-green-500' },
        { name: 'MongoDB', level: 60, color: 'bg-green-600' },
        { name: 'Express.js', level: 70, color: 'bg-gray-600' },
        { name: 'REST APIs', level: 60, color: 'bg-indigo-500' },
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 70, color: 'bg-blue-600' },
        { name: 'C++', level: 95, color: 'bg-red-500' },
        { name: 'C', level: 80, color: 'bg-orange-600' },
        { name: 'SQL', level: 70, color: 'bg-pink-500' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'bg-gray-800' },
        { name: 'VS Code', level: 85, color: 'bg-blue-400' },
        { name: 'Postman', level: 65, color: 'bg-orange-400' },
        { name: 'Figma', level: 50, color: 'bg-purple-400' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Problem Solving', 'Data Structures', 'Algorithms', 'Database Design',
              'Responsive Design', 'Version Control', 'Agile Methodology', 'Testing',
              'Debugging', 'Code Review', 'Technical Writing', 'Team Collaboration'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-blue-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}