
const amountButtons = document.querySelectorAll('.amount');
const customAmountInput = document.getElementById('custom-amount');

amountButtons.forEach(button => {
  button.addEventListener('click', () => {
    amountButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    customAmountInput.value = button.dataset.amount;
  });
});

function submitDonation() {
  const amount = customAmountInput.value;
  if (amount && parseInt(amount) > 0) {
    alert("Terima kasih! Sudah berdonasi sebesar Rp " + parseInt(amount).toLocaleString("id-ID") + ",00");
    amountButtons.forEach(btn => btn.classList.remove('active'));
    customAmountInput.value = '';
  } else {
    alert("Masukkan jumlah donasi terlebih dahulu.");
  }
}