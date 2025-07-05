# 🌍 GeoAttend

**GeoAttend** is a smart, modern attendance management system for schools and organizations, with integrated real-time location tracking using **OpenStreetMap**. Built with **Laravel**, **Inertia.js**, **Vue.js**, and **Tailwind CSS**, it allows administrators and teachers to easily track attendance while visualizing participant locations on an interactive map.

---

## 🚀 Features

* 📌 **Location-Based Attendance**
  Track and validate attendance using real-time geolocation.

* 🗘️ **Interactive Map (OpenStreetMap + Leaflet.js)**
  Display attendees' locations on a dynamic map interface.

* 🗕️ **Attendance Logs & History**
  View, filter, and export attendance records.

* 👤 **Role-Based Access**
  Supports Admin, Teacher, and Student user roles.

* ⚡ **Modern UI**
  Built with **Inertia.js** and **Tailwind CSS** for a seamless single-page application experience.

---

## 🛠 Tech Stack

* **Backend:** Laravel (PHP)
* **Frontend:** Inertia.js + Vue.js
* **Styling:** Tailwind CSS
* **Mapping:** OpenStreetMap + Leaflet.js
* **Database:** MySQL
* **Deployment:** Hostinger (Shared or Cloud Hosting)

---

## 📝 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GeloDevDesign/GeoAttend.git
   cd geoattend
   ```

2. Install dependencies:

   ```bash
   composer install
   npm install
   ```

3. Configure the environment:

   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

   Update your `.env` file with database and app details.

4. Run migrations:

   ```bash
   php artisan migrate
   ```

5. Build the frontend:

   ```bash
   npm run build
   ```

6. Start the server (for local development):

   ```bash
   php artisan serve
  
👉 *GeoAttend brings smarter, location-aware attendance management to your school or organization.*
