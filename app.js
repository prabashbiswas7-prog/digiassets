// ===== PAYMENT MODAL =====
function openPayment(item) {
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalSub').textContent = item.type + ' License';
  document.getElementById('modalPrice').textContent = item.price;
  document.getElementById('payBtnText').textContent =
    item.price === '₹0' ? 'Download Free' : 'Pay ' + item.price;

  document.getElementById('modalBackdrop').classList.add('active');
  document.getElementById('paymentModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePayment() {
  document.getElementById('modalBackdrop').classList.remove('active');
  document.getElementById('paymentModal').classList.remove('active');
  document.body.style.overflow = '';
  resetPayBtn();
}

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePayment();
});

// ===== TABS =====
function switchTab(tab, btn) {
  document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.pay-panel').forEach(p => p.classList.add('hidden'));
  document.getElementById('panel-' + tab).classList.remove('hidden');
}

// ===== UPI SHORTCUTS =====
function fillUPI(app) {
  const map = { gpay: '@okaxis', phonepe: '@ybl', paytm: '@paytm' };
  document.getElementById('upiInput').value = 'lumenpix' + map[app];
}

// ===== CARD FORMAT =====
function formatCard(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = v.replace(/(.{4})/g, '$1 ').trim();
}

// ===== PAYMENT PROCESS =====
function processPayment() {
  const btn = document.getElementById('payBtn');
  const btnText = document.getElementById('payBtnText');

  btn.disabled = true;
  btnText.textContent = 'Processing…';

  // Simulate payment gateway delay
  setTimeout(() => {
    closePayment();
    resetPayBtn();
    showToast();
  }, 1800);
}

function resetPayBtn() {
  const btn = document.getElementById('payBtn');
  btn.disabled = false;
}

// ===== TOAST =====
function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ===== FAV TOGGLE =====
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-fav')) {
    const active = e.target.textContent === '♥';
    e.target.textContent = active ? '♡' : '♥';
    e.target.style.color = active ? '#fff' : '#ff4d6d';
  }
});

// ===== SEARCH =====
document.querySelector('.search-bar button').addEventListener('click', () => {
  const val = document.querySelector('.search-bar input').value.trim();
  if (val) {
    // In production: navigate to search results
    console.log('Searching for:', val);
  }
});

document.querySelector('.search-bar input').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.querySelector('.search-bar button').click();
});

// ===== HERO TAG SEARCH =====
document.querySelectorAll('.hero-tags span').forEach(tag => {
  tag.addEventListener('click', () => {
    document.querySelector('.search-bar input').value = tag.textContent;
  });
});

// ===== SCROLL NAV SHADOW =====
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  nav.style.boxShadow = window.scrollY > 40 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
});
