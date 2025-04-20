// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for anchor links
  const navLinks = document.querySelectorAll("a.nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const teamMembers = [
    {
      img: "images/members/ovi.jpg",
      name: "ইঞ্জিনিয়ার বাশার অভি",
      role: "আহবায়ক",
    },
    {
      img: "images/members/sajib.jpg",
      name: "আবু সাঈদ সজিব",
      role: "যুগ্ম আহবায়ক",
    },
    {
      img: "images/members/no_image.jpg",
      name: "মাওলানা আবদুল্লাহ আল মাহমুদ",
      role: "যুগ্ম আহবায়ক",
    },
    {
      img: "images/members/rs_rashed.jpg",
      name: "আর এস রাশেদ",
      role: "যুগ্ম আহবায়ক",
    },
    {
      img: "images/members/sakib.jpg",
      name: "মাওলানা নাজমুস সাকিব",
      role: "কার্যকরী সদস্য",
    },
    {
      img: "images/members/no_image.jpg",
      name: "ইঞ্জিনিয়ার শাকিল",
      role: "কার্যকরী সদস্য",
    },
    {
      img: "images/members/no_image.jpg",
      name: "মোহাম্মদ তালহা আমিন তামিম",
      role: "কার্যকরী সদস্য",
    },
    {
      img: "images/members/jobair.jpg",
      name: "মোহাম্মদ জুবায়ের ইসলাম",
      role: "কার্যকরী সদস্য",
    },
    {
      img: "images/members/no_image.jpg",
      name: "মোহাম্মদ রশিদুল ইসলাম",
      role: "কার্যকরী সদস্য",
    },
    {
      img: "images/members/no_image.jpg",
      name: "মোহাম্মদ শহিদুল ইসলাম",
      role: "কার্যকরী সদস্য",
    },
    {
      img: "images/members/no_image.jpg",
      name: "মোহাম্মদ শাহী",
      role: "কার্যকরী সদস্য",
    },
    {
      img: "images/members/zs_jahid.jpg",
      name: "মোহাম্মদ জাহিদ সরকার",
      role: "কার্যকরী সদস্য",
    },
    {
      img: "images/members/no_image.jpg",
      name: "মোহাম্মদ ফয়সাল",
      role: "কার্যকরী সদস্য",
    },
    {
      img: "images/members/no_image.jpg",
      name: "মোহাম্মদ হালিম",
      role: "কার্যকরী সদস্য",
    },
    {
      img: "images/members/rakib.jpg",
      name: "মোহাম্মদ রাকিবুল হাসান",
      role: "কার্যকরী সদস্য",
    }
  ];

  const teamContainer = document.getElementById("team-container");

  teamMembers.forEach((member) => {
    const memberDiv = document.createElement("div");
    memberDiv.className = "col-md-3 text-center mb-4";
    memberDiv.innerHTML = `
      <img src="${member.img}" class="rounded-circle mb-2" alt="Team Member" width="200" height="200">
      <h5>${member.name}</h5>
      <p class="text-muted">${member.role}</p>
    `;
    teamContainer.appendChild(memberDiv);
  });
});
