const skills = [
  { name: 'Java', icon: '/icons/java.svg', percent: 88 },
  { name: 'JavaScript', icon: '/icons/javascript.svg', percent: 92 },
  { name: 'TypeScript', icon: '/icons/typescript.svg', percent: 85 },
  { name: 'NodeJS', icon: '/icons/nodejs.svg', percent: 88 },
  { name: 'NestJS', icon: '/icons/nestjs.svg', percent: 82 },
  { name: 'Golang', icon: '/icons/go.svg', percent: 70 },
  { name: 'PHP', icon: '/icons/php.svg', percent: 75 },
  { name: 'ExpressJS', icon: '/icons/express.svg', percent: 85 },
  { name: 'DSA', icon: '/icons/dsa.svg', percent: 80 },
  { name: 'Git', icon: '/icons/git.svg', percent: 90 },
  { name: 'REST API', icon: '/icons/api.svg', percent: 85 },
  { name: 'HTML5', icon: '/icons/html5.svg', percent: 95 },
  { name: 'CSS3', icon: '/icons/css3.svg', percent: 90 },
  { name: 'ReactJS', icon: '/icons/react.svg', percent: 93 },
  { name: 'Postman', icon: '/icons/postman.svg', percent: 85 },
  { name: 'Android', icon: '/icons/android.svg', percent: 80 },
  { name: 'Python', icon: '/icons/python.svg', percent: 90 },
  { name: 'C++', icon: '/icons/cpp.svg', percent: 82 },
  { name: 'C', icon: '/icons/c.svg', percent: 80 },
  { name: 'Jest', icon: '/icons/jest.svg', percent: 75 },
  { name: 'Firebase', icon: '/icons/firebase.svg', percent: 82 },
  { name: 'MongoDB', icon: '/icons/mongodb.svg', percent: 87 },
  { name: 'MySQL', icon: '/icons/mysql.svg', percent: 85 },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg', percent: 80 },
];

const Skills = () => {
  return (
    <section className="mt-[25px] py-16 px-4 md:px-20 bg-gradient-to-b from-purple-800 to-purple-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-12 text-center font-[Ubuntu]">
        <span className="text-white">Skills & </span>
        <span className="text-yellow-400">Abilities</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-[#1a1a40] hover:bg-[#2c2c6c] transition-colors duration-300 p-5 rounded-xl flex flex-col items-center shadow-md"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mb-3"
              loading="lazy"
            />
            <p className="text-sm font-semibold mb-2 font-[Ubuntu]">
              {skill.name}
            </p>

            <div className="w-full h-2 bg-gray-700 rounded overflow-hidden">
              <div
                className="h-full bg-blue-400 transition-all duration-500"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-300 mt-1">{skill.percent}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
