# Use official PHP image with Apache
FROM php:8.2-apache

# Copy project files to web root
COPY . /var/www/html/

# Enable Apache mod_rewrite if needed (common for Laravel, etc.)
RUN a2enmod rewrite

# Set correct permissions
RUN chown -R www-data:www-data /var/www/html

# Expose port 80
EXPOSE 80
