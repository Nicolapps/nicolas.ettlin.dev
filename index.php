<?php
$lang = $_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? '';
if (str_contains($lang, 'fr')) {
    header('Location: /fr');
} else {
    header('Location: /en');
}
