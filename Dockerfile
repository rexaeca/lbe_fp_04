# Gunakan image Nginx berbasis Alpine yang sangat ringan
FROM nginx:alpine

# Hapus konfigurasi default bawaan Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Salin konfigurasi Nginx kustom yang sudah dibuat
COPY nginx.conf /etc/nginx/conf.d/

# Salin semua file web (HTML, CSS, JS) ke dalam direktori root Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Ekspos port 80 (port standar HTTP)
EXPOSE 80

# Jalankan Nginx di foreground
CMD ["nginx", "-g", "daemon off;"]