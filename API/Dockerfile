FROM php:8.1.1-apache-bullseye

WORKDIR /var/www/html

# INSTALL COMPOSER
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

RUN apt-get update && \
    apt-get install -y git \
    libzip-dev \
    zip \
    && docker-php-ext-install zip

RUN a2enmod rewrite headers

EXPOSE 80