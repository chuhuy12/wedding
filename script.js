/* ==== Animation khi cuộn ==== */
const faders = document.querySelectorAll('.fade-item');

const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver(function(entries,observer){
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader=>{
  appearOnScroll.observe(fader);
});

/* ==== Gallery popup ==== */
const images = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = 0;

images.forEach((img,index)=>{
  img.addEventListener('click',()=>{
    currentIndex = index;
    showImage();
    lightbox.classList.add('active');
  });
});

function showImage(){
  lightboxImg.src = images[currentIndex].src;
}

nextBtn.onclick = ()=>{
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
};

prevBtn.onclick = ()=>{
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
};

closeBtn.onclick = ()=>{
  lightbox.classList.remove('active');
};

lightbox.addEventListener('click',(e)=>{
  if(e.target===lightbox){
    lightbox.classList.remove('active');
  }
});




/* ======================================END The love of story================================== */


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('gift-modal');
    
    

    
    const cover = document.getElementById('invitation-cover');
    const mainContent = document.getElementById('main-content');

	/*
	const openBtn = document.getElementById('open-btn');
    openBtn.addEventListener('click', () => {
        // Thêm hiệu ứng biến mất cho lớp phủ
        cover.classList.add('fade-out');
        
        // Hiện nội dung chính sau khi hiệu ứng hoàn tất
        setTimeout(() => {
            cover.style.display = 'none';
            mainContent.classList.remove('hidden');
            
            // Có thể thêm hiệu ứng cuộn mượt hoặc phát nhạc tại đây
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 800);
    });
	*/


    // Mở popup khi nhấn nút
	/*
	const btn = document.getElementById('show-gift-btn');
    btn.onclick = function() {
        modal.style.display = "block";
    }
	*/

    // Đóng popup khi nhấn dấu X
	/*
	const closeBtn = document.querySelector('.close-btn');
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
	*/

    // Đóng popup khi nhấn ra ngoài vùng modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


// Thêm vào file script.js hiện tại của bạn
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


document.addEventListener('DOMContentLoaded', () => {
    const giftTrigger = document.getElementById('trigger-gift');
    const giftModal = document.getElementById('gift-modal');
    const closeBtn = document.querySelector('.close-btn');

    // Mở Modal khi click vào phong bao
    giftTrigger.addEventListener('click', () => {
        giftModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Chặn cuộn trang khi mở popup
    });

    // Đóng Modal
    closeBtn.addEventListener('click', () => {
        giftModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Đóng khi click ra ngoài
    window.addEventListener('click', (e) => {
        if (e.target === giftModal) {
            giftModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});