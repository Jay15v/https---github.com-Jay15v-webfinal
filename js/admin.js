document.addEventListener("DOMContentLoaded", function() {
    const userSelect = document.getElementById('user');
    const editButton = document.querySelector('.admin-edit');

    editButton.addEventListener("click", function() {
        const selected = userSelect.value;
        let pageURL;
        switch (selected) {
            case "user1":
                pageURL = "user1.html";
                break;
            case "user2":
                pageURL = "user2.html";
                break;
            default:
                pageURL = "admin.html";
        }
        window.location.href = pageURL; // Redirect to the selected page
    });
});