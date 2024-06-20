
document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('figmaForm').reset();
});

document.getElementById('figmaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
    // You can add your form submission logic here
});
