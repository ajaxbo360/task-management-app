FROM php:8.1-fpm-alpine

RUN docker-php-ext-install pdo pdo_mysql

RUN apk add libzip-dev

RUN docker-php-ext-install zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

EXPOSE 8000


ADD scripts/ /srv/

CMD ["/bin/sh", "/srv/startup.sh"]
