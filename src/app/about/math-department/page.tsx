import { Footer } from "@/components/footer"

export default function MathDepartment() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#c17f59] text-center mb-8">Department of Mathematics</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* About Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">About Department</h2>
            <div className="space-y-4 text-lg text-black">
              <p>
                Mathematics is primarily concerned with logical deduction and abstraction. The logical deduction aspect helps to think systematically and argue in an irrefutable manner. The abstraction aspect, on the other hand, helps to identify the absolutely essential issues and the inter-relations among them. Both these aspects, logical deduction and abstraction, play an important role in Information Technology also.
              </p>
              <p>
                Therefore first objective of the department of Mathematics is to produce the students with high mathematical thinking in tune with the latest development in information technology. Now a days Mathematics is an integral part in the study of many area such as computer science, communication, cyber security, bio-mechanics and finance etc.
              </p>
              <p>
                Department of Mathematics is also focused to motivate the students towards research and to make aware them importance and increasing needs of mathematics in various areas of science and technology. To achieve these goals, the department maintains the high standard of teaching and research. All faculty members of the department are well qualified with rich academic and research experience.
              </p>
              <p>
                All faculty members are doctorate from the institutes of repute and highly engaged in research in diverse area of basic sciences, engineering and technology. To make aware of the latest developments, the department keeps on timely updating in its teaching and research methodology and introduces new courses, which are aligned with the need to tackle real life challenging problems in science and technology.
              </p>
              <p>
                Faculty members of the department are actively associated and contributed to various learned societies like Society of Industrial and Applied Mathematics (SIAM) USA, Indian Society of Industrial and Applied Mathematics (ISIAM), Indian Mathematical Society (IMS), Ramanujan Mathematical Society (RMS).
              </p>
            </div>
          </div>

          {/* Aim Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Aim</h2>
            <p className="text-lg text-black">
              The department aims to foster a strong foundation in mathematical concepts, reasoning, and problem-solving skills among students. It strives to enhance their quantitative and analytical abilities, equipping them with essential tools for critical thinking and decision-making. It endeavors to provide a solid mathematical background for students pursuing advanced degrees or careers in mathematics, statistics, engineering, computer science, economics, and other related fields. It aims to offer a comprehensive curriculum that prepares students for the challenges and rigors of higher-level mathematical studies.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Vision</h2>
            <p className="text-lg text-black">
              Mathematics Department is to foster a deep understanding and appreciation of mathematics among students, and to cultivate critical thinking, problem-solving, and analytical skills that can be applied across various disciplines and in real-world situations. The department aims to provide a supportive and stimulating learning environment where students can explore the beauty, elegance, and utility of mathematics. It strives to develop students' mathematical proficiency by offering a comprehensive curriculum and techniques.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Mission</h2>
            <ul className="list-disc text-black list-inside text-lg space-y-2">
              <li>To provide a comprehensive and high-quality education in the field of mathematics. The department aims to cultivate a deep understanding.</li>
              <li>To foster a supportive and engaging learning environment where students can develop their mathematical abilities, critical thinking skills, and logical reasoning</li>
            </ul>
          </div>

          {/* Objectives Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#c17f59] mb-4">Objectives</h2>
            <ul className="list-disc text-black list-inside text-lg space-y-2">
              <li>Establish a strong foundation of mathematical concepts and theories among students.</li>
              <li>Help students develop logical thinking and problem-solving abilities. The department focuses on fostering these skills through challenging mathematical problems and exercises</li>
              <li>Showcase real-world applications of mathematics, emphasizing its relevance in areas such as engineering, physics, computer science, economics, and finance.</li>
              <li>Prepare students for progressive paths by offering advanced courses, guidance on graduate school applications, and mentorship opportunities.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}

