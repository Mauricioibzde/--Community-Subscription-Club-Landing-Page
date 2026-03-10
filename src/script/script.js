const billingButtons = document.querySelectorAll('[data-billing]');
const planPrices = document.querySelectorAll('.price[data-monthly][data-yearly]');

billingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    billingButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const billingType = button.dataset.billing;
    const note = billingType === 'yearly' ? '/mês no plano anual' : 'por mês';

    planPrices.forEach((priceElement) => {
      priceElement.textContent = priceElement.dataset[billingType];
      const priceNote = priceElement.nextElementSibling;
      if (priceNote) priceNote.textContent = note;
    });
  });
});

const faqItems = document.querySelectorAll('.faq details');
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
