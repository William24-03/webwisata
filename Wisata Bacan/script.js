document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider .destination-grid');
    const destinations = document.querySelectorAll('.slider .destination');
    const totalDestinations = destinations.length;
    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 25; // Geser 25% setiap kali (sesuai lebar destinasi)
        slider.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.slider .slider-btn.prev').addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalDestinations - 4; // Kembali ke destinasi terakhir
        }
        updateSlider();
    });

    document.querySelector('.slider .slider-btn.next').addEventListener('click', function () {
        if (currentIndex < totalDestinations - 4) {
            currentIndex++;
        } else {
            currentIndex = 0; // Kembali ke destinasi pertama
        }
        updateSlider();
    });
});

// Validasi Form Kontak
document.querySelector('.contact form').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Harap isi semua field sebelum mengirim pesan.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Harap masukkan alamat email yang valid.');
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Animasi Scroll untuk Navigasi
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});