// script.js for SatoshiTips

function copyAddress() {
    // Get the Bitcoin address text
    var copyText = document.getElementById("btc-address").innerText;

    // Create a temporary textarea to copy from
    var tempInput = document.createElement("textarea");
    tempInput.value = copyText;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempInput);

    // (Optional) Alert the user
    alert("Bitcoin Address Copied!");
}