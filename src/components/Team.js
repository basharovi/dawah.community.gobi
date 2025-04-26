'use client'
import Image from 'next/image'

const teamMembers = [
  {
    img: "/images/members/ovi.jpg",
    name: "ইঞ্জিনিয়ার বাশার অভি",
    role: "আহবায়ক",
  },
  {
    img: "/images/members/sajib.jpg",
    name: "আবু সাঈদ সজিব",
    role: "যুগ্ম আহবায়ক",
  },
  {
    img: "/images/members/abdullah.jpg",
    name: "মাওলানা আবদুল্লাহ",
    role: "যুগ্ম আহবায়ক",
  },
  {
    img: "/images/members/rs_rashed.jpg",
    name: "আর এস রাশেদ",
    role: "যুগ্ম আহবায়ক",
  },
  // Add more members as needed
];

export default function Team() {
  return (
    <section id="team" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">কার্যনির্বাহি কমিটি</h2>
        <div className="row" id="team-container">
          {teamMembers.map((member, idx) => (
            <div className="col-6 col-md-3 mb-4" key={idx}>
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body d-flex flex-column align-items-center">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-circle mb-3"
                  />
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}