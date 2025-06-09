document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    // 초기 로딩 시 'About Me' 섹션을 활성화합니다.
    document.querySelector('#about').classList.add('active');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // 기본 앵커 동작 방지

            const targetId = e.target.getAttribute('href').substring(1); // # 제거
            
            // 모든 섹션에서 active 클래스 제거
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // 클릭된 메뉴에 해당하는 섹션에 active 클래스 추가
            document.getElementById(targetId).classList.add('active');
        });
    });
});
