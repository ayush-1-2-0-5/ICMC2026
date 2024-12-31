'use client'

import React from 'react'

type MemberWithDelegation = {
  name: string;
  delegation: string;
  institution: string;
}

type MemberWithoutDelegation = {
  name: string;
  institution: string;
}

type Member = MemberWithDelegation | MemberWithoutDelegation

type Committee = {
  title: string;
  members: Member[];
}

export default function CommitteePage() {
  const committees: Committee[] = [
    {
      title: "Patron",
      members: [
        {
          name: "Dr. Rahul Banerjee",
          institution: "LNMIIT Jaipur"
        }
      ]
    },
   
    {
      title: "General Chair",
      members: [
        {
          name: "Dr. P. K. Saxena",
          delegation: "Scientific Consultant-Cyber Security",
          institution: "DRDO, Ministry of Defence, Government of India"
        },
        {
          name: "Dr. P. D. Srivastava",
          delegation: "Former Professor and Head, Department of Mathematics",
          institution: "IIT Kharagpur,India"
        }
      ]
    },
    {
      title: "Programme Chairs",
      members: [
        {
          name: "Dr. S Ponnusamy",
          institution: "IIT Madras, India"
        },
        {
          name: "Dr. Jayaprakash Kar",
          institution: "LNMIIT, Jaipur"
        },
        {
          name: "Dr. Debasis Giri",
          institution: "Maulana Abul Kalam Azad University of Technology, India"
        }
      ]
    },
    {
      title: "Organizing Chair",
      members: [
        {
          name: "Dr. Vikas Gupta",
          delegation: "Professor, Department of Mathematics",
          institution: "LNMIIT Jaipur"
        }
      ]
    },
    {
      title: "International Advisory Committee",
      members: [
        { name: "Bimal Roy", institution: "Indian Statistical Institute, India" },
        { name: "Chris Mitchell", institution: "University of London, London" },
        { name: "Heinrich Begehr", institution: "Freie Universität Berlin, Germany" },
        { name: "Jacek M. Zurada", institution: "University of Louisville, USA" },
        { name: "Lajos Hanzo", institution: "University of Southampton, U.K." },
        { name: "Mohammad Obaidet", institution: "The University of Jordan, Jordan" },
        { name: "Moti Yung", institution: "Columbia University, USA" },
        { name: "Oscar Castillo", institution: "Tijuana Institute of Technology, Mexico" },
        { name: "S. Picek (Stjepan)", institution: "Radboud University, Netherlands" },
        { name: "Sokratis Katsikas", institution: "Norwegian University of Science and Technology, Norway" },
        { name: "Ramamohanarao Kotagiri", institution: "University of Melbourne, Australia" },
        { name: "Rajkumar Buyya", institution: "The University of Melbourne, Australia" },
        { name: "Kouichi Sakurai", institution: "Kyushu University, Japan" },
        { name: "Vincent Rijmen", institution: "KU Leuven, Belgium" },
        { name: "Vincenzo Puri", institution: "University of Milan, Italy" },
        { name: "Willy Susilo", institution: "University of Wollongong, Australia" }
      ]
    },
    {
      title: "Technical Program Committee",
      members: [
        { name: "A. Krishnamoorthy", institution: "University OF Kerala, India" },
        { name: "A. Raji", institution: "Cape Peninsula University of Technology, Cape Town, South Africa" },
        { name: "Abhilasha Chowdhuri", institution: "SVNIT Surat, India" },
        { name: "Abhishek Hazra", institution: "IIIT Sri City, India" },
        { name: "Agassi Melikov", institution: "Baku Engineering University, Azerbaijan" },
        { name: "Akash Ashirbad Panda", institution: "IIT Bhubaneswar, India" },
        { name: "Alexander Rumyantsev", institution: "Institute of Applied Mathematical Research, Karelian Research Center of RAS" },
        { name: "Anjali Gautam", institution: "Indian Institute of Information Technology Allahabad, India" },
        { name: "Anshu S Anand", institution: "Indian Institute of Information Technology Allahabad, India" },
        { name: "António Pacheco", institution: "Lisbon Institute of Science & Technology, Portugal" },
        { name: "Antonis ECONOMOU", institution: "National and Kapodistrian University of Athens, Greece" },
        { name: "Anugrah Jain", institution: "SVNIT Surat, India" },
        { name: "Anup Kumar Haldar", institution: "Warsaw University of Technology, Warsaw, Poland" },
        { name: "Anusha Vangala", institution: "Missouri University of Science and Technology (Missouri S&T), USA" },
        { name: "Ashis SenGupta", institution: "ISI Kolkata, India" },
        { name: "B. Krishna Kumar", institution: "VIT Chennai, India" },
        { name: "Bhupendra Singh", institution: "IIIT Pune, India" },
        { name: "Brijesh Kumar Jha", institution: "IIT Bhubaneswar, India" },
        { name: "Chandra Shekhar", institution: "BITS-Pilani, India" },
        { name: "Darshan Medhane", institution: "National Sun Yat-Sen University, Taiwan" },
        { name: "Deepak.T.G", institution: "Indian Institute of Space Science & Technology, India" },
        { name: "Dhananjoy Dey", institution: "IIIT Lucknow, India" },
        { name: "Dibu A S", institution: "Christ (Deemed to be University), Bangalore, India" },
        { name: "Dieter Claeys", institution: "Ghent University, Belgium" },
        { name: "Douglas Down", institution: "McMaster University, Canada" },
        { name: "G. Ayyappan", institution: "Puducherry Technological University, India" },
        { name: "Gopinath Panda", institution: "Dhirubhai Ambani Institute of Information & Communication Technology, Gandhinagar, India" },
        { name: "Hossien Eldeeb", institution: "Khalifa University, Abu Dhabi, UAE" },
        { name: "Igor Kotenko", institution: "ITMO University, St. Petersburg, Russia" },
        { name: "Indivar Gupta", institution: "DRDO, Delhi, india" },
        { name: "Indrajit Jana", institution: "IIT Bhubaneswar, India" },
        { name: "Jagannath Roy", institution: "NIT Warangal, India" },
        { name: "Jaison Jacob", institution: "ST.ALOYSIUS COLLEGE, Elthuruth, Thrissur, India" },
        { name: "Jaydeb Bhaumik", institution: "Jadavpur University, India" },
        { name: "Joris Walraevens", institution: "Ghent University, Belgium" },
        { name: "Joy Dutta", institution: "Khalifa University, Abu Dhabi, United Arab Emirates" },
        { name: "Karabi Sikdar", institution: "BMS Institute of Technology and Management, India" },
        { name: "Kaushelendra Sharma", institution: "IIIT Nagpur, India" },
        { name: "Madhurima Ray", institution: "Pennsylvania State University, United States" },
        { name: "Maneesha", institution: "Birla Institute of Technology & Science, Pilani, Dubai Campus, Abu Dhabi" },
        { name: "Manikandan Rangaswamy", institution: "Central University of Kerala, India" },
        { name: "Manisha Verma", institution: "IIT (ISM) Dhanbad, India" },
        { name: "Md Abu Talhamainuddin Ansary", institution: "IIT Jodhpur, India" },
        { name: "Miklos Telek", institution: "University of Technology and Economics, Hungary" },
        { name: "Minhajul", institution: "BITS-Goa" },
        { name: "Mohan Chaudhry", institution: "Royal Military College of Canada, Canada" },
        { name: "Mridul Ghosh", institution: "Shayampur Mahavidlayay, India" },
        { name: "Mriganka Mandal", institution: "ISI Kolkata, India" },
        { name: "N. Selvaraju", institution: "Indian Institute of Technology, Guwahati, India" },
        { name: "Narendra S. Chaudhari", institution: "IIT Indore, India" },
        { name: "Naveen Kumar", institution: "SVNIT Surat, India" },
        { name: "Neha Gour", institution: "Khalifa University, Abu Dhabi, UAE" },
        { name: "Nitesh Funde", institution: "SVNIT Surat, India" },
        { name: "Nitesh K Bharadwaj", institution: "NIT Raipur, India" },
        { name: "Nitin Kumar", institution: "IIT Jammu, India" },
        { name: "P Muthu", institution: "NIT Warangal, India" },
        { name: "Phalguni Gupta", institution: "IIT Kanpur, India" },
        { name: "Pradeep Kumar", institution: "University of Kwazulu Natal, Durban" },
        { name: "Pranav Kumar Singh", institution: "Central Institute of Technology Kokrajhar, India" },
        { name: "Praveen Chandaliya", institution: "SVNIT Surat, India" },
        { name: "Preeti Soni", institution: "NIT HAMIRPUR, India" },
        { name: "Rahul Dixit", institution: "SVNIT Surat, India" },
        { name: "Rakesh Kanji", institution: "Jaypee University of Information Technology, India" },
        { name: "Rakesh Kumar", institution: "IISER Thiruvananthapuram, India" },
        { name: "Richard Lomotey", institution: "Pennsylvania State University, United States" },
        { name: "Rifaqat Ali", institution: "NIT HAMIRPUR, India" },
        { name: "Safikureshi Mondal", institution: "San Diego Supercomputer Center, University of California, Berkeley, USA" },
        { name: "Saif Nalband", institution: "Thapar Institute of Engineering and Technology, India" },
        { name: "Sanjay Kumar Saha", institution: "Jadavpur University, India" },
        { name: "Sanjaya Kumar Panda", institution: "NIT Warangal, India" },
        { name: "Sanjeev Sharma", institution: "IIIT Pune, India" },
        { name: "Sanjoy Kumar Saha", institution: "Jadavpur University, India" },
        { name: "Saroja Kumar Singh", institution: "Ravenshaw University, India" },
        { name: "Saubhi Agrawal", institution: "RV Institute of Technology and Management Bangalore, India" },
        { name: "Saugata Roy", institution: "MNNIT Allahabad, India" },
        { name: "Selvamuthu Dharmaraja", institution: "Indian Institute of Technology Delhi, India" },
        { name: "Shailendra Tripathi", institution: "NIT RAIPUR, India" },
        { name: "Sk Arif Ahmed", institution: "XIM University, Bhubaneswar, India" },
        { name: "Sk Md Obaidullah", institution: "Aliah University, India" },
        { name: "SkHafizul Islam", institution: "Indian Institute of Information Technology, Kalyani, India" },
        { name: "Soumya Banerjee", institution: "Amity University Kolkata, India" },
        { name: "Souvik Ghosh", institution: "Heritage Institute of Technology, Kolkata, India" },
        { name: "Subrata Golui", institution: "IIT Bombay, India" },
        { name: "Sudarshan Dhua", institution: "School of Sciences, NIT Andhra Pradesh, India" },
        { name: "Surbhi Agrawal", institution: "RV Institute of Technology and Mangament Bangalore, India" },
        { name: "Suvadip Hazra", institution: "IIIT Dharwad, India" },
        { name: "Swadesh Kumar Sahoo", institution: "IIT Indore, India" },
        { name: "Swalpa Kumar Roy", institution: "AGEMC, India" },
        { name: "Tanmoy Hazra", institution: "Sardar Vallabhbhai National Institute of Technology, Surat, India" },
        { name: "Tanmoy Maitra", institution: "KIIT University, Bhubaneswar, Odisha, India" },
        { name: "Tu Dac Ho", institution: "NTNU, Norway" },
        { name: "Tuhina Mukherjee", institution: "IIT Jodhpur, India" },
        { name: "Umesh Chandra Gupta", institution: "IIT Kharagpur, India" },
        { name: "Veena Goswami", institution: "Kalinga Institute of Industrial Technology, India" },
        { name: "Vipin Balyan", institution: "Cape Peninsula University of Technology, Cape Town, South Africa" },
        { name: "Vishesh P. Gaikwad", institution: "SVNIT Surat, India" },
        { name: "Yogeshwar Singh Dadhwal", institution: "DIAT Pune, India" }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#c17f59] text-center mb-12">Committees</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {committees.map((committee, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-[#4B0082] mb-6">
                  {committee.title}
                </h2>
                <div className="space-y-6">
                  {committee.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="flex flex-col gap-2">
                      <h3 className="text-xl text-gray-800 font-medium">
                        {member.name}
                      </h3>
                      {'delegation' in member && (
                        <p className="text-gray-700">
                          {member.delegation}
                        </p>
                      )}
                      <p className="text-gray-600 italic">
                        {member.institution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

