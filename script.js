/* ==========================================================================
   CAR DATABASE (Mocking detailed structural data for functionality)
   Note: Using high-quality Unsplash URLs to fulfill the "real images" rule.
  
 ========================================================================== */
const SUPABASE_URL = "https://rrivanxeigmmyurgyfya.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyaXZhbnhlaWdtbXl1cmd5ZnlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwOTE1NTQsImV4cCI6MjA5ODY2NzU1NH0.UEcZLpbrUyO_W2-MOJT5owGXdJ54RDaEGbkhfpWrJro";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
 const carDatabase = [
    {
        id: 1,
        brand: "BMW",
        model: "M8 Competition",
        price: "$138,800",
        priceNum: 138800,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "15 mpg",
        seats: 4,
        engine: "4.4L Twin-Turbo V8",
        hp: "617",
        topSpeed: "190 mph",
        year: 2026,
        torque: "553 lb-ft",
        groundClearance: "128 mm",
        bootSpace: "420 L",
        warranty: "4 Years / 50k Miles",
        rating: 4.9,
        baseImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
        colors: [
            { name: "Black", hex: "#000000", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800" },
            { name: "White", hex: "#ffffff", img: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800" },
            { name: "Blue", hex: "#1c3c6a", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800" }
        ],
        features: ["Laser Lights", "Bowers & Wilkins Audio", "Carbon Core", "M xDrive"]
    },
    {
        id: 2,
        brand: "Mercedes-Benz",
        model: "AMG GT 63",
        price: "$150,000",
        priceNum: 150000,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "16 mpg",
        seats: 4,
        engine: "4.0L V8 Biturbo",
        hp: "630",
        topSpeed: "195 mph",
        year: 2026,
        torque: "664 lb-ft",
        groundClearance: "116 mm",
        bootSpace: "461 L",
        warranty: "4 Years / 50k Miles",
        rating: 4.8,
        baseImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
        colors: [
            { name: "Silver", hex: "#c0c0c0", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800" },
            { name: "Black", hex: "#000000", img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800" }
        ],
        features: ["MBUX Hyperscreen", "Burmester 3D", "Air Suspension", "Active Aero"]
    },
    {
        id: 3,
        brand: "Tesla",
        model: "Model S Plaid",
        price: "$109,990",
        priceNum: 109990,
        fuel: "Electric",
        transmission: "Automatic",
        mileage: "396 mi range",
        seats: 5,
        engine: "Tri Motor AWD",
        hp: "1,020",
        topSpeed: "200 mph",
        year: 2026,
        torque: "1,050 lb-ft",
        groundClearance: "117 mm",
        bootSpace: "793 L",
        warranty: "8 Years / 150k Miles",
        rating: 4.7,
        baseImage: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",
        colors: [
            { name: "Red", hex: "#cc0000", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800" },
            { name: "White", hex: "#ffffff", img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800" }
        ],
        features: ["Yoke Steering", "Autopilot", "17-inch Cinematic Display", "HEPA Filter"]
    },
    {
        id: 4,
        brand: "Lamborghini",
        model: "Huracan EVO",
        price: "$248,295",
        priceNum: 248295,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "13 mpg",
        seats: 2,
        engine: "5.2L V10",
        hp: "631",
        topSpeed: "202 mph",
        year: 2026,
        torque: "443 lb-ft",
        groundClearance: "125 mm",
        bootSpace: "100 L",
        warranty: "3 Years / Unlimited",
        rating: 5.0,
        baseImage: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800",
        colors: [
            { name: "Orange", hex: "#ff7b00", img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800" },
            { name: "Green", hex: "#00cc00", img: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?auto=format&fit=crop&q=80&w=800" }
        ],
        features: ["LDVI System", "Carbon Ceramic Brakes", "Magneto-rheological suspension"]
    },
    {
        id: 5,
        brand: "Porsche",
        model: "911 Turbo S",
        price: "$230,400",
        priceNum: 230400,
        fuel: "Petrol",
        transmission: "Automatic",
        mileage: "17 mpg",
        seats: 4,
        engine: "3.7L Twin-Turbo Flat-6",
        hp: "640",
        topSpeed: "205 mph",
        year: 2026,
        torque: "590 lb-ft",
        groundClearance: "115 mm",
        bootSpace: "128 L",
        warranty: "4 Years / 50k Miles",
        rating: 4.9,
        baseImage: "images.jpg",
        colors: [
            { name: "White", hex: "#ffffff", img: "images.jpg" },
            { name: "Grey", hex: "#808080", img: "images.jpg" }
        ],
        features: ["PDK 8-Speed", "Sport Chrono", "Porsche Active Aerodynamics"]
    }
];

const allBrands = ["Tata", "Mahindra", "Maruti Suzuki", "Hyundai", "Kia", "Honda", "Toyota", "MG", "Skoda", "Volkswagen", "Nissan", "Renault", "Jeep", "BMW", "Mercedes-Benz", "Audi", "Volvo", "Lexus", "Jaguar", "Land Rover", "Porsche", "Mini", "Ferrari", "Lamborghini", "Maserati", "Rolls Royce", "Bentley", "McLaren", "Bugatti", "Tesla", "BYD"];

let compareList = [];

/* ==========================================================================
   INITIALIZATION & DOM ELEMENTS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Loader
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        setTimeout(() => document.getElementById("loader").style.display = "none", 500);
    }, 1500);

    initParticleCanvas();
    populateBrands();
    renderCars(carDatabase);
    initScrollProgress();
    initCounters();

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Sticky Navbar
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if(window.scrollY > 50) {
            nav.style.background = "rgba(0,0,0,0.95)";
            nav.style.padding = "10px 0";
        } else {
            nav.style.background = "rgba(10,10,10,0.8)";
            nav.style.padding = "15px 0";
        }
    });
});

/* ==========================================================================
   RENDER FUNCTIONS
   ========================================================================== */
function populateBrands() {
    const brandContainer = document.getElementById("brand-grid");
    // Showing top 15 for UI clarity, though array has all 30+
    allBrands.slice(0, 15).forEach(brand => {
        const span = document.createElement("span");
        span.className = "brand-tag";
        span.innerText = brand;
        span.onclick = () => {
            document.getElementById("brandFilter").value = brand;
            filterCars();
            document.getElementById("showroom").scrollIntoView({behavior: "smooth"});
        };
        brandContainer.appendChild(span);
    });
}

function renderCars(cars) {
    const grid = document.getElementById("car-grid");
    grid.innerHTML = "";
    
    if(cars.length === 0) {
        grid.innerHTML = `<p class="text-center" style="grid-column: 1/-1">No vehicles found matching your criteria.</p>`;
        return;
    }

    cars.forEach(car => {
        const card = document.createElement("div");
        card.className = "car-card";
        card.innerHTML = `
            <div class="car-img-wrapper">
                <span class="car-badge"><i class="fas fa-star text-white"></i> ${car.rating}</span>
                <img src="${car.baseImage}" alt="${car.brand} ${car.model}">
            </div>
            <div class="car-info">
                <p class="car-brand-name">${car.brand}</p>
                <h3 class="car-model-name">${car.model}</h3>
                <div class="car-specs-mini">
                    <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                    <span><i class="fas fa-cog"></i> ${car.transmission}</span>
                    <span><i class="fas fa-tachometer-alt"></i> ${car.mileage}</span>
                    <span><i class="fas fa-horse-head"></i> ${car.hp} HP</span>
                </div>
                <div class="car-price">${car.price}</div>
                <div class="car-card-actions">
                    <button onclick="openCarDetails(${car.id})">Details</button>
                    <button onclick="open360View(${car.id})">360° View</button>
                    <button onclick="addToCompare(${car.id})">Compare</button>
                    <button class="btn-book-sm" onclick="openBookingModal('${car.brand} ${car.model}')">Book Now</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

/* ==========================================================================
   FILTERING & SEARCH
   ========================================================================== */
function filterCars() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const brand = document.getElementById("brandFilter").value;
    const fuel = document.getElementById("fuelFilter").value;
    const sort = document.getElementById("sortFilter").value;

    let filtered = carDatabase.filter(car => {
        const matchSearch = car.model.toLowerCase().includes(search) || car.brand.toLowerCase().includes(search);
        const matchBrand = brand === "" || car.brand === brand;
        const matchFuel = fuel === "" || car.fuel === fuel;
        return matchSearch && matchBrand && matchFuel;
    });

    if (sort === "price-low") filtered.sort((a, b) => a.priceNum - b.priceNum);
    if (sort === "price-high") filtered.sort((a, b) => b.priceNum - a.priceNum);

    renderCars(filtered);
}

/* ==========================================================================
   MODAL LOGIC
   ========================================================================== */
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "flex";
    setTimeout(() => modal.classList.add("active"), 10);
    document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove("active");
    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
        if(id === 'view360-modal') stopAutoRotate(); // Stop 360 animation
    }, 300);
}

/* --- CAR DETAILS MODAL --- */
function openCarDetails(id) {
    const car = carDatabase.find(c => c.id === id);
    const body = document.getElementById("modal-details-body");
    
    let colorDots = car.colors.map((c, index) => 
        `<div class="color-dot ${index === 0 ? 'active' : ''}" style="background-color: ${c.hex};" onclick="changeCarImage(this, '${c.img}')" title="${c.name}"></div>`
    ).join('');

    body.innerHTML = `
        <div class="details-layout">
            <div>
                <img id="detail-main-img" src="${car.baseImage}" alt="${car.model}" class="main-modal-img">
                <div class="color-selector">
                    <span style="line-height: 30px; margin-right: 10px;">Select Color:</span>
                    ${colorDots}
                </div>
                <div style="margin-top:20px; display:flex; gap:10px;">
                    <button class="btn-secondary" onclick="open360View(${car.id})"><i class="fas fa-sync"></i> 360°</button>
                    <button class="btn-primary" onclick="openBookingModal('${car.brand} ${car.model}')">Book Test Drive</button>
                </div>
            </div>
            <div>
                <h2 style="color: var(--color-red);">${car.brand}</h2>
                <h1 style="margin-bottom: 5px; font-size: 2.2rem;">${car.model}</h1>
                <h3 style="color: var(--text-gray); margin-bottom: 20px;">${car.price}</h3>
                
                <div class="spec-tabs">
                    <button class="tab-btn active">Overview</button>
                    <button class="tab-btn">Features</button>
                </div>

                <div class="spec-grid">
                    <div class="spec-item"><span>Engine</span><strong>${car.engine}</strong></div>
                    <div class="spec-item"><span>Power</span><strong>${car.hp} HP</strong></div>
                    <div class="spec-item"><span>Torque</span><strong>${car.torque}</strong></div>
                    <div class="spec-item"><span>Top Speed</span><strong>${car.topSpeed}</strong></div>
                    <div class="spec-item"><span>0-60 mph</span><strong>~3.0s</strong></div>
                    <div class="spec-item"><span>Transmission</span><strong>${car.transmission}</strong></div>
                    <div class="spec-item"><span>Mileage</span><strong>${car.mileage}</strong></div>
                    <div class="spec-item"><span>Boot Space</span><strong>${car.bootSpace}</strong></div>
                </div>
            </div>
        </div>
    `;
    openModal('details-modal');
}

function changeCarImage(element, imgUrl) {
    document.getElementById("detail-main-img").src = imgUrl;
    document.querySelectorAll(".color-dot").forEach(dot => dot.classList.remove("active"));
    element.classList.add("active");
}

/* --- BOOKING MODAL --- */
function openBookingModal(carName = "") {
    if(carName) document.getElementById("b-car").value = carName;
    openModal("booking-modal");
}

async function handleBooking(e) {
  e.preventDefault();

  const booking = {
    name: document.getElementById("b-name").value,
    mobile: document.getElementById("b-phone").value,
    email: document.getElementById("b-email").value,
    car_model: document.getElementById("b-car").value,
    date: document.getElementById("b-date").value,
    city: document.getElementById("b-city").value,
    message: document.getElementById("b-message").value
  };

  const { error } = await supabaseClient
    .from("bookings")
    .insert([booking]);

  if (error) {
    alert("Booking Failed");
    console.log(error);
    return;
  }

  alert("Booking Successful");

  document.getElementById("booking-form").reset();

  closeModal("booking-modal");
}

/* ==========================================================================
   360° VIEW IMPLEMENTATION
   ========================================================================== */
let isDragging360 = false;
let startX360 = 0;
let currentFrameIndex = 1;
const total360Frames = 36;
let autoRotateInterval = null;

function open360View(id) {
    // In a real scenario, fetch array of 36 images. Here we simulate it.
    // We use a placeholder image logic that represents changing angles.
    const car = carDatabase.find(c => c.id === id);
    const imgElement = document.getElementById("view360-img");
    
    // Simulating initial frame load
    currentFrameIndex = 1;
    update360Image(imgElement, car.baseImage); 
    
    openModal('view360-modal');
    init360Controls(imgElement, car);
}

function update360Image(imgElement, baseSrc) {
    // Logic to update image source. 
    // Since we don't have 36 local images, we append a query param to visually demonstrate the script is firing.
    // In production: imgElement.src = `path/to/car/frame_${currentFrameIndex}.jpg`;
    imgElement.src = baseSrc + "&rotation=" + currentFrameIndex; 
}

function init360Controls(imgElement, car) {
    const overlay = document.getElementById("view360-overlay");
    
    // Clean up previous event listeners by replacing node
    const newOverlay = overlay.cloneNode(true);
    overlay.parentNode.replaceChild(newOverlay, overlay);

    newOverlay.addEventListener('mousedown', (e) => {
        isDragging360 = true;
        startX360 = e.clientX;
        stopAutoRotate();
    });

    document.addEventListener('mouseup', () => isDragging360 = false);
    
    document.addEventListener('mousemove', (e) => {
        if(!isDragging360) return;
        const delta = e.clientX - startX360;
        
        // Sensitivity control
        if(Math.abs(delta) > 10) {
            if(delta > 0) {
                currentFrameIndex = currentFrameIndex >= total360Frames ? 1 : currentFrameIndex + 1;
            } else {
                currentFrameIndex = currentFrameIndex <= 1 ? total360Frames : currentFrameIndex - 1;
            }
            update360Image(imgElement, car.baseImage);
            startX360 = e.clientX; // Reset start point for continuous dragging
        }
    });

    // Touch support
    newOverlay.addEventListener('touchstart', (e) => {
        isDragging360 = true;
        startX360 = e.touches[0].clientX;
        stopAutoRotate();
    }, {passive: true});
    
    newOverlay.addEventListener('touchend', () => isDragging360 = false);
    
    newOverlay.addEventListener('touchmove', (e) => {
        if(!isDragging360) return;
        const delta = e.touches[0].clientX - startX360;
        if(Math.abs(delta) > 10) {
            if(delta > 0) currentFrameIndex = currentFrameIndex >= total360Frames ? 1 : currentFrameIndex + 1;
            else currentFrameIndex = currentFrameIndex <= 1 ? total360Frames : currentFrameIndex - 1;
            update360Image(imgElement, car.baseImage);
            startX360 = e.touches[0].clientX;
        }
    }, {passive: true});
}

function autoRotate360() {
    const imgElement = document.getElementById("view360-img");
    // Just grab the base image of whichever car is currently open (Hacky for demo, robust in prod)
    const baseSrc = imgElement.src.split("&rotation=")[0]; 
    
    if(autoRotateInterval) {
        stopAutoRotate();
        return;
    }
    
    autoRotateInterval = setInterval(() => {
        currentFrameIndex = currentFrameIndex >= total360Frames ? 1 : currentFrameIndex + 1;
        update360Image(imgElement, baseSrc);
    }, 100);
}

function stopAutoRotate() {
    if(autoRotateInterval) {
        clearInterval(autoRotateInterval);
        autoRotateInterval = null;
    }
}

function toggleFullscreen360() {
    const wrapper = document.getElementById("view360-wrapper");
    if (!document.fullscreenElement) {
        wrapper.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

/* ==========================================================================
   COMPARE CARS LOGIC
   ========================================================================== */
function addToCompare(id) {
    if(compareList.includes(id)) {
        alert("Car is already in the comparison list.");
        return;
    }
    if(compareList.length >= 2) {
        alert("You can only compare 2 cars at a time. Replacing the oldest selection.");
        compareList.shift(); // Remove first element
    }
    
    compareList.push(id);
    renderComparison();
    document.getElementById("compare").scrollIntoView({behavior: "smooth"});
}

function renderComparison() {
    const container = document.getElementById("compare-container");
    const clearBtn = document.getElementById("clear-compare-btn");
    
    if(compareList.length === 0) {
        container.innerHTML = "<p>Select cars from the showroom to compare.</p>";
        clearBtn.classList.add("hidden");
        return;
    }

    clearBtn.classList.remove("hidden");
    const cars = compareList.map(id => carDatabase.find(c => c.id === id));
    
    let html = `
        <table class="compare-table">
            <thead>
                <tr>
                    <th>Specification</th>
                    ${cars.map(c => `<th class="text-center"><h3>${c.brand} ${c.model}</h3><img src="${c.baseImage}" class="compare-img mt-2"></th>`).join('')}
                    ${cars.length === 1 ? '<th>Select another car to compare</th>' : ''}
                </tr>
            </thead>
            <tbody>
                <tr><td>Price</td>${cars.map(c => `<td>${c.price}</td>`).join('')}${cars.length===1?'<td>-</td>':''}</tr>
                <tr><td>Engine</td>${cars.map(c => `<td>${c.engine}</td>`).join('')}${cars.length===1?'<td>-</td>':''}</tr>
                <tr><td>Horsepower</td>${cars.map(c => `<td>${c.hp} HP</td>`).join('')}${cars.length===1?'<td>-</td>':''}</tr>
                <tr><td>Top Speed</td>${cars.map(c => `<td>${c.topSpeed}</td>`).join('')}${cars.length===1?'<td>-</td>':''}</tr>
                <tr><td>0-60 mph</td>${cars.map(c => `<td>~3.0s</td>`).join('')}${cars.length===1?'<td>-</td>':''}</tr>
                <tr><td>Mileage</td>${cars.map(c => `<td>${c.mileage}</td>`).join('')}${cars.length===1?'<td>-</td>':''}</tr>
                <tr><td>Transmission</td>${cars.map(c => `<td>${c.transmission}</td>`).join('')}${cars.length===1?'<td>-</td>':''}</tr>
                <tr><td>Ground Clearance</td>${cars.map(c => `<td>${c.groundClearance}</td>`).join('')}${cars.length===1?'<td>-</td>':''}</tr>
                <tr><td>Boot Space</td>${cars.map(c => `<td>${c.bootSpace}</td>`).join('')}${cars.length===1?'<td>-</td>':''}</tr>
            </tbody>
        </table>
    `;
    container.innerHTML = html;
}

function clearComparison() {
    compareList = [];
    renderComparison();
}

/* ==========================================================================
   VISUAL EFFECTS (Particles, Scroll, Counters)
   ========================================================================== */
function initParticleCanvas() {
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = Math.random() > 0.5 ? '#ffffff' : '#ff2a2a';
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if(this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if(this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for(let i=0; i<particleCount; i++) {
        particles.push(new Particle());
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(let i=0; i<particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

function initScrollProgress() {
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("scroll-progress").style.width = scrolled + "%";
    });
}

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; 

    const animate = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => animate(counter), 20);
        } else {
            counter.innerText = target + "+";
        }
    };

    // Use Intersection Observer to trigger when visible
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                animate(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}
const API_URL = "http://localhost:5000/api";

function adminLogin() {
  const user = document.getElementById("adminUser").value;
  const pass = document.getElementById("adminPass").value;

  if (user === "admin" && pass === "1234") {
    document.getElementById("admin-login").classList.add("hidden");
    document.getElementById("admin-dashboard").classList.remove("hidden");
    alert("Admin Login Successful");
  } else {
    alert("Wrong username or password");
  }
}

async function addCar() {
  const car = {
    company: document.getElementById("carCompany").value,
    model: document.getElementById("carModel").value,
    price: document.getElementById("carPrice").value,
    fuel: document.getElementById("carFuel").value,
    mileage: document.getElementById("carMileage").value,
    image: document.getElementById("carImage").value,
    details: document.getElementById("carDetails").value
  };

  const res = await fetch(`${API_URL}/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(car)
  });

  const data = await res.json();
  alert("Car Added Successfully");
  console.log(data);
}

async function loadBookings() {

  const { data, error } = await supabaseClient
    .from("bookings")
    .select("*");

  if (error) {
    console.error(error);
    alert(error.message);
    return;
}

  const bookingList = document.getElementById("booking-list");

  bookingList.innerHTML = "";

  data.forEach(b => {

    bookingList.innerHTML += `
      <div class="booking-card">
        <h4>${b.name}</h4>
        <p>Mobile : ${b.mobile}</p>
        <p>Email : ${b.email}</p>
        <p>Car : ${b.car_model}</p>
        <p>Date : ${b.date}</p>
        <p>City : ${b.city}</p>
        <p>Message : ${b.message}</p>
      </div>
    `;

  });

}