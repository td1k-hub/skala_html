// 스크롤 감지하여 버튼 표시
window.onscroll = function() {
    const btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// 최상단으로 부드럽게 이동
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}