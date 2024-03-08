
window.revelar = ScrollReveal({ reset: true });

console.log(innerWidth);


revelar.reveal(".logo_color_theme_effect", {
    distance: '90px',
    delay: 1500,
    origin: "left"
});

revelar.reveal(".text_input_container_input_effect", {
    delay: 500,
});

revelar.reveal(".text_input_container_buttons_effect", {
    distance: '90px',
    delay: 1000,
    origin: "bottom"
});

revelar.reveal(".class_result_effect", {
    delay: 1500,
    distance: '90px',
    origin: "right"
});
