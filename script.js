function generateBill() {
    const customerName = document.getElementById('customerName').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const itemName = document.getElementById('itemName').value;
    const amount = document.getElementById('amount').value;
    const gst = 18; // Fixed GST percentage

    if (!customerName || !customerAddress || !itemName || !amount) {
        alert('Please fill in all fields.');
        return;
    }

    const totalAmount = calculateTotalAmount(amount, gst);
    const billDetails = `
        <p><strong>Customer Name:</strong> ${customerName}</p>
        <p><strong>Customer Address:</strong> ${customerAddress}</p>
        <p><strong>Item Purchased:</strong> ${itemName}</p>
        <p><strong>Amount:</strong> ${amount}</p>
        <p><strong>GST:</strong> ${gst}%</p>
        <p><strong>Total Amount:</strong> ${totalAmount}</p>
    `;

    document.getElementById('bill-details').innerHTML = billDetails;

    // Generate QR code with relevant information
    const qrCodeContent = `Customer: ${customerName}\nAddress: ${customerAddress}\nItem: ${itemName}\nAmount: ${amount}\nGST: ${gst}%\nTotal: ${totalAmount}`;
    generateQR(qrCodeContent);
}

function calculateTotalAmount(amount, gst) {
    const subtotal = parseFloat(amount);
    const gstAmount = (subtotal * gst) / 100;
    return subtotal + gstAmount;
}

function generateQR(content) {
    // Clear previous QR code, if any
    document.getElementById('qr-code').innerHTML = '';

    // Generate QR code
    const qrCode = new QRCode(document.getElementById('qr-code'), {
        text: content,
        width: 128,
        height: 128,
    });
}
