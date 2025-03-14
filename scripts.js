document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: "Jasa Pembuatan Website", price: 10000 },
        { name: "Penjualan Akun Digital Ocean", price: 10000 },
        { name: "Penjualan VPS", price: 10000 },
        { name: "Penjualan Panel Pterodactyl", price: 10000 },
        { name: "Penjualan Script Bug WhatsApp", price: 10000 },
        { name: "Penjualan Script Multi Device WhatsApp", price: 10000 },
        { name: "Penjualan Script Bot Store WhatsApp", price: 10000 },
        { name: "Penjualan Script Bot Pushkontak WhatsApp", price: 10000 },
        { name: "Penjualan Akun Admin Panel Pterodactyl", price: 10000 },
        { name: "Penjualan Reseller Panel Pterodactyl", price: 10000 },
        { name: "Penjualan Partner Panel Pterodactyl", price: 10000 },
        { name: "Penjualan Owner Panel Pterodactyl", price: 10000 },
        { name: "Penjualan Tangan Kanan Panel Pterodactyl", price: 10000 },
        { name: "Penjualan Jasa Pembuatan Script Bot WhatsApp", price: 10000 },
        { name: "Penjualan Jasa Fix Script Bot WhatsApp", price: 10000 },
        { name: "Penjualan Jasa Rename Script Bot WhatsApp", price: 10000 },
        { name: "Penjualan Nomor Kosong WhatsApp", price: 10000 },
        { name: "Penjualan Nomor Kosong Telegram", price: 10000 },
        { name: "Penjualan Akun Game", price: 10000 },
        { name: "Penjualan Akun Sosial Media", price: 10000 },
        { name: "Penjualan Pulsa", price: 10000 },
        { name: "Penjualan Kuota", price: 10000 },
        { name: "Penjualan Token Listrik", price: 10000 },
        { name: "Penjualan Jasa Suntik Sosial Media", price: 10000 },
        { name: "Penjualan Jasa Sewa Bot Bug", price: 10000 },
        { name: "Penjualan Jasa Sewa Bot Multi Device", price: 10000 },
        { name: "Penjualan Jasa Sewa Bot Jaga Grup", price: 10000 },
        { name: "Penjualan Jasa Sewa Bot Store", price: 10000 },
        { name: "Penjualan Jasa Sewa Bot Pushkontak", price: 10000 },
        { name: "Penjualan Nomor Kosong Luar Negeri", price: 10000 },
        { name: "Penjualan Nomor Kosong Indonesia", price: 10000 },
        { name: "Penjualan Jasa Bug WhatsApp", price: 10000 },
        { name: "Penjualan Top Up Game", price: 10000 },
        { name: "Penjualan Jasa Convert Saldo", price: 10000 },
        { name: "Penjualan Domain", price: 10000 },
        { name: "Penjualan Jasa Install Pterodactyl", price: 10000 },
        { name: "Penjualan Jasa Install Tema Stellar", price: 10000 },
        { name: "Penjualan Jasa Install Tema Billing", price: 10000 },
        { name: "Penjualan Jasa Install Tema Enigma", price: 10000 },
        { name: "Penjualan Jasa Uninstall Tema", price: 10000 },
        { name: "Penjualan Jasa Uninstall Pterodactyl", price: 10000 },
        { name: "Penjualan Jasa Encrypt Script Bot WhatsApp", price: 10000 },
        { name: "Penjualan Jasa Decrypt Script Bot WhatsApp", price: 10000 },
        { name: "Penjualan Script Backdoor WhatsApp", price: 10000 },
        { name: "Penjualan Jasa Security Script Bot WhatsApp", price: 10000 },
        { name: "Penjualan Jasa Tambah Fitur Script Bot WhatsApp", price: 10000 },
    ];

    const productList = document.querySelector('.product-list');

    // Tampilkan semua produk
    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <h3>${product.name}</h3>
                <p>Rp ${product.price}</p>
                <button class="buy-button" data-product="${product.name}" data-price="${product.price}">BELI SEKARANG</button>
            `;
            productList.appendChild(productItem);
        });
    }

    // Tampilkan produk awal
    displayProducts(products);

    // Fitur pencarian
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        displayProducts(filteredProducts);
    });

    // Proses pembayaran
    productList.addEventListener('click', function(event) {
        if (event.target.classList.contains('buy-button')) {
            const productName = event.target.getAttribute('data-product');
            const productPrice = event.target.getAttribute('data-price');

            // Simpan data pembayaran di localStorage
            localStorage.setItem('productName', productName);
            localStorage.setItem('productPrice', productPrice);

            // Redirect ke halaman pembayaran
            window.location.href = 'payment.html';
        }
    });
});