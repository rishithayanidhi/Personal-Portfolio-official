<section className="py-16 px-4 md:px-20">
  <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>

  {/* Technical Skills Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {[
      { name: 'HTML', percent: 95 },
      { name: 'CSS', percent: 90 },
      { name: 'Tailwind CSS', percent: 90 },
      { name: 'JavaScript', percent: 92 },
      { name: 'TypeScript', percent: 85 },
      { name: 'React', percent: 93 },
      { name: 'Node.js', percent: 88 },
      { name: 'Express.js', percent: 85 },
      { name: 'Git', percent: 90 },
      { name: 'GitHub', percent: 90 },
      { name: 'Postman', percent: 85 },
      { name: 'Linux (Ubuntu)', percent: 80 },
      { name: 'MySQL', percent: 85 },
      { name: 'MongoDB', percent: 87 },
      { name: 'Firebase', percent: 82 },
      { name: 'C', percent: 80 },
      { name: 'Python', percent: 90 },
      { name: 'Java', percent: 88 },
    ].map((skill, idx) => (
      <div
        key={idx}
        className="group relative flex flex-col items-center justify-center p-4"
      >
        <div className="w-24 h-24 rounded-full border-4 border-blue-400 flex items-center justify-center relative transition-transform group-hover:scale-105">
          <span className="text-sm font-bold">{skill.name}</span>
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="36"
              stroke="rgba(0, 0, 0, 0.1)"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="36"
              stroke="#2563EB"
              strokeWidth="8"
              fill="none"
              strokeDasharray="226"
              strokeDashoffset={226 - (226 * skill.percent) / 100}
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="mt-2 text-center text-sm font-semibold">{skill.name}</div>
      </div>
    ))}
  </div>

  {/* Soft Skills */}
  <div className="mt-20">
    <h3 className="text-3xl font-semibold mb-8 text-center">Soft Skills</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
      {[
        'Team Collaboration',
        'Problem Solving',
        'Time Management',
        'Leadership',
        'Adaptability',
        'Communication',
      ].map((skill, index) => (
        <div
          key={index}
          className="text-lg font-medium transition-transform duration-300 hover:scale-105 hover:text-blue-700"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
</section>
