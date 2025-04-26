// carousel.js

document.addEventListener("DOMContentLoaded", function () {
  // Carousel data
  const carouselItems = [
    {
      image: "images/slide/slide1.jpg",
      title: "স্লাইড ১",
      description: "আমাদের প্রথম উদ্যোগের একটি চিত্র।"
    },
    {
      image: "images/slide/slide2.jpg",
      title: "স্লাইড ২",
      description: "আমাদের কার্যক্রমের আরেকটি চিত্র।"
    },
    {
      image: "images/slide/slide3.jpg",
      title: "স্লাইড ৩",
      description: "আমাদের কমিউনিটির একটি মুহূর্ত।"
    }
  ];

  // Create carousel HTML
  const carouselContainer = document.getElementById("activityCarousel");
  if (carouselContainer) {
    const carouselInner = document.createElement("div");
    carouselInner.className = "carousel-inner";

    carouselItems.forEach((item, index) => {
      const carouselItem = document.createElement("div");
      carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
      
      carouselItem.innerHTML = `
        <img src="${item.image}" class="d-block w-100" alt="Slide ${index + 1}">
        <div class="carousel-caption d-none d-md-block">
          <h5>${item.title}</h5>
          <p>${item.description}</p>
        </div>
      `;
      
      carouselInner.appendChild(carouselItem);
    });

    // Clear existing content and add new carousel items
    carouselContainer.innerHTML = '';
    carouselContainer.appendChild(carouselInner);

    // Add carousel controls
    const controls = `
      <button class="carousel-control-prev" type="button" data-bs-target="#activityCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#activityCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    `;
    carouselContainer.insertAdjacentHTML('beforeend', controls);
  }
}); 