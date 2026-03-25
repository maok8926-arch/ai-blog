function toggleTheme() {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

function loadTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        document.body.classList.add("dark");
    }
}

function handleTopButton() {
    const btn = document.getElementById("topBtn");
    if (!btn) return;
    if (document.documentElement.scrollTop > 220 || document.body.scrollTop > 220) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function goTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    const triggerBottom = window.innerHeight * 0.9;

    reveals.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", () => {
    handleTopButton();
    revealOnScroll();
});

window.addEventListener("load", () => {
    loadTheme();
    handleTopButton();
    revealOnScroll();
});