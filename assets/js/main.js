// Alpine.js data and functions
document.addEventListener('alpine:init', () => {
  Alpine.data('app', () => ({
    sidebarOpen: false,
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    activeTab: 'login',
    setTab(tab) {
      this.activeTab = tab;
    },
    searchQuery: '',
    doctors: [
      { id: 1, name: 'Dr. John Doe', specialization: 'Cardiology', location: 'Dhaka', image: 'https://via.placeholder.com/100' },
      { id: 2, name: 'Dr. Jane Smith', specialization: 'Dermatology', location: 'Chittagong', image: 'https://via.placeholder.com/100' },
      { id: 3, name: 'Dr. Bob Johnson', specialization: 'Neurology', location: 'Dhaka', image: 'https://via.placeholder.com/100' },
    ],
    filteredDoctors() {
      return this.doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        doctor.location.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    appointments: [
      { id: 1, doctor: 'Dr. John Doe', date: '2023-10-15', time: '10:00 AM', status: 'Confirmed' },
      { id: 2, doctor: 'Dr. Jane Smith', date: '2023-10-16', time: '2:00 PM', status: 'Pending' },
    ],
    patients: [
      { id: 1, name: 'Alice Brown', date: '2023-10-15', time: '10:00 AM', status: 'Pending' },
      { id: 2, name: 'Charlie Wilson', date: '2023-10-16', time: '2:00 PM', status: 'Confirmed' },
    ],
    updateStatus(id, newStatus) {
      const patient = this.patients.find(p => p.id === id);
      if (patient) {
        patient.status = newStatus;
      }
    },
    downloadQR() {
      alert('Downloading QR Code...');
    },
    downloadPDF() {
      alert('Downloading PDF...');
    }
  }));
});

// Navbar scroll behavior
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

/*=============== START HIDE & SHOW PASSWORD ===============*/
// document.addEventListener('DOMContentLoaded', () => {
//   const showHiddenPass = (password, eye) => {
//     const input = document.getElementById(password),
//           iconEye = document.getElementById(eye)

//     if (input && iconEye) {
//       iconEye.addEventListener('click', () => {
//         console.log(`Toggling password visibility for ${password}`);
//         if (input.type === 'password') {
//           input.type = 'text';
//           iconEye.classList.remove('ri-eye-line');
//           iconEye.classList.add('ri-eye-off-line');
//         } else {
//           input.type = 'password';
//           iconEye.classList.remove('ri-eye-off-line');
//           iconEye.classList.add('ri-eye-line');
//         }
//       })
//     } else {
//       console.warn(`Elements not found for password: ${password}, eye: ${eye}`);
//     }
//   }
//   showHiddenPass('loginPass','loginEye')
//   showHiddenPass('registerPass','registerEye')
//   showHiddenPass('confirmPass','confirmEye')
// });


document.addEventListener("DOMContentLoaded", () => {
  const showHiddenPass = (password, eye) => {
    const input = document.getElementById(password),
          iconEye = document.getElementById(eye);

    if (input && iconEye) {
      iconEye.addEventListener("click", () => {
        if (input.type === "password") {
          input.type = "text";
          iconEye.classList.remove("ri-eye-line");
          iconEye.classList.add("ri-eye-off-line");
        } else {
          input.type = "password";
          iconEye.classList.remove("ri-eye-off-line");
          iconEye.classList.add("ri-eye-line");
        }
      });
    }
  };

  // Attach initially
  showHiddenPass("loginPass", "loginEye");
  showHiddenPass("registerPass", "registerEye");
  showHiddenPass("confirmPass", "confirmEye");

  // Watch DOM changes (for Alpine template switch)
  const observer = new MutationObserver(() => {
    showHiddenPass("registerPass", "registerEye");
    showHiddenPass("confirmPass", "confirmEye");
  });

  observer.observe(document.body, { childList: true, subtree: true });
});

/*=============== END HIDE & SHOW PASSWORD ===============*/


/*=============== SWIPER IMAGES ===============*/
if (document.querySelector('.login__swiper')) {
   const swiperLogin = new Swiper('.login__swiper', {
      loop: true,
      spaceBetween: '24',
      grabCursor: true,
      speed: 600,
      // effect: 'fade',

      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },

      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
   })
}
