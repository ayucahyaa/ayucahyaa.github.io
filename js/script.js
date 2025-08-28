// Course Recommendation Logic
function getCourseRecommendations() {
  const major = document.getElementById('major').value;
  const career = document.getElementById('career').value;
  const level = document.getElementById('level').value;

  // Validate selections
  if (!major || !career || !level) {
    alert('Harap pilih semua opsi untuk mendapatkan rekomendasi yang tepat.');
    return;
  }

  // Course database
  const courses = {
    teknologi: {
      'web-dev': [
        {
          name: 'The Complete Web Developer Bootcamp',
          platform: 'Udemy',
          match: 97,
          desc: 'Kursus lengkap untuk menjadi Web Developer dari dasar hingga mahir. Mencakup HTML, CSS, JavaScript, React, Node.js, dan lebih banyak lagi.',
          link: '#',
          duration: '60 jam',
          level: 'Pemula hingga Mahir',
        },
        {
          name: 'Front-End Web Development with React',
          platform: 'Coursera',
          match: 92,
          desc: 'Pelajari pengembangan frontend modern dengan React, Redux, dan ecosystem JavaScript terbaru.',
          link: '#',
          duration: '40 jam',
          level: 'Menengah',
        },
      ],
      'data-science': [
        {
          name: 'Data Science Specialization',
          platform: 'Coursera',
          match: 95,
          desc: 'Program 10 kursus yang mencakup R, Python, statistical analysis, machine learning, dan pembuatan produk data.',
          link: '#',
          duration: '80 jam',
          level: 'Menengah hingga Mahir',
        },
        {
          name: 'Python for Data Science and Machine Learning',
          platform: 'Udemy',
          match: 96,
          desc: 'Pelajari penggunaan Python untuk analisis data, visualisasi, machine learning, dan deep learning.',
          link: '#',
          duration: '45 jam',
          level: 'Pemula hingga Menengah',
        },
      ],
      'ai-ml': [
        {
          name: 'Machine Learning A-Z',
          platform: 'Udemy',
          match: 96,
          desc: 'Kursus komprehensif tentang Machine Learning dengan Python dan R. Cocok untuk pemula hingga menengah.',
          link: '#',
          duration: '44 jam',
          level: 'Pemula hingga Menengah',
        },
      ],
    },
    bisnis: {
      'digital-marketing': [
        {
          name: 'Digital Marketing Specialization',
          platform: 'Coursera',
          match: 94,
          desc: 'Pelajari strategi digital marketing termasuk SEO, social media, content marketing, dan analytics.',
          link: '#',
          duration: '55 jam',
          level: 'Pemula hingga Menengah',
        },
      ],
      'project-management': [
        {
          name: 'Google Project Management',
          platform: 'Coursera',
          match: 93,
          desc: 'Pelajari metodologi project management yang digunakan oleh Google dan perusahaan teknologi lainnya.',
          link: '#',
          duration: '120 jam',
          level: 'Pemula',
        },
      ],
    },
    seni: {
      'ui-ux': [
        {
          name: 'UI/UX Design Specialization',
          platform: 'Coursera',
          match: 95,
          desc: 'Pelajari proses desain dari research hingga prototyping untuk membuat produk digital yang user-friendly.',
          link: '#',
          duration: '60 jam',
          level: 'Pemula hingga Menengah',
        },
      ],
      'content-creation': [
        {
          name: 'Content Strategy for Professionals',
          platform: 'Coursera',
          match: 92,
          desc: 'Kursus strategi konten untuk profesional yang ingin mengembangkan konten yang engaging dan efektif.',
          link: '#',
          duration: '40 jam',
          level: 'Menengah',
        },
      ],
    },
  };

  // Get recommendations based on selections
  let recommendations = [];

  if (courses[major] && courses[major][career]) {
    recommendations = courses[major][career];
  } else {
    // Fallback recommendations if no exact match
    recommendations = [
      {
        name: 'Career Success Specialization',
        platform: 'Coursera',
        match: 85,
        desc: 'Kembangkan skill profesional yang dibutuhkan untuk sukses di dunia kerja.',
        link: '#',
        duration: '35 jam',
        level: 'Pemula hingga Menengah',
      },
    ];
  }

  // Filter by level if specified
  if (level !== 'all') {
    recommendations = recommendations.filter(course => course.level.toLowerCase().includes(level.toLowerCase()));
  }

  // Generate HTML for recommendations
  let html = '';
  if (recommendations.length > 0) {
    recommendations.forEach(course => {
      html += `
          <div class="course-result">
            <div class="course-header">
              <div class="course-title">${course.name}</div>
              <div class="match-score">${course.match}% Match</div>
            </div>
            <div class="course-platform">Platform: ${course.platform} | Level: ${course.level} | Durasi: ${course.duration}</div>
            <p class="course-desc">${course.desc}</p>
            <a href="${course.link}" class="course-link"><i class="fas fa-external-link-alt"></i> Lihat Course</a>
          </div>
      `;
    });
  } else {
    html = `<p>Tidak ada course yang ditemukan dengan kriteria tersebut. Coba kombinasi lain.</p>`;
  }

  document.getElementById('course-list').innerHTML = html;
  document.getElementById('recommendations').style.display = 'block';

  // Scroll to results
  document.getElementById('recommendations').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(15, 15, 35, 0.98)';
  } else {
    nav.style.background = 'rgba(15, 15, 35, 0.95)';
  }
});

// Intersection Observer for animations (Continuous fade-in)
const revealElements = document.querySelectorAll('.reveal-element');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    rootMargin: '0px',
    threshold: 0.2
});

revealElements.forEach(el => observer.observe(el));


// Parallax effect for floating elements
document.addEventListener('mousemove', (e) => {
  const floatingElements = document.querySelectorAll('.floating-element');
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  floatingElements.forEach(el => {
    const speed = parseFloat(el.getAttribute('data-speed'));
    // Apply a subtle parallax based on mouse movement
    el.style.transform = `translate(${x * 15 * speed}px, ${y * 15 * speed}px) rotate(${el.classList.contains('floating-robot-hero') ? 15 : (el.classList.contains('floating-businessman-about') ? -10 : 0)}deg)`;
  });
});

// Hamburger Menu Functionality
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');

      if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    });
  }

  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  document.addEventListener('click', function (event) {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
});