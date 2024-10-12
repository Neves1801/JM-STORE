// Função para rolar para uma seção específica
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Função para adicionar produtos ao carrinho e exibir uma mensagem temporária
function addToCart(productName) {
    const cartMessage = document.getElementById('cart-message');
    const cartNotification = document.getElementById('cart-notification');
    cartNotification.textContent = ${productName} foi adicionado ao seu carrinho!;

    cartMessage.style.display = 'block';

    // Oculta a mensagem após 3 segundos
    setTimeout(() => {
        cartMessage.style.display = 'none';
    }, 3000);
}
