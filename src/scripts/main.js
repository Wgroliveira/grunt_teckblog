function toggleReadMore(element) {
    const hiddenContent = element.nextElementSibling;
    hiddenContent.classList.toggle('hidden');
    element.textContent = hiddenContent.classList.contains('hidden') ? 'Leia Mais' : 'Mostrar Menos';
    return false;
}