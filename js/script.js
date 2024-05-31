//tabs

document.addEventListener('DOMContentLoaded', function() {
    // Получаем все кнопки вкладок и все содержимые вкладок
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем класс активной кнопки у всех кнопок
            tabButtons.forEach(btn => btn.classList.remove('tab-btn-active'));
            // Добавляем класс активной кнопки текущей кнопке
            this.classList.add('tab-btn-active');

            // Получаем target id текущей кнопки
            const targetId = this.getAttribute('data-target-id');

            // Убираем класс показа вкладки у всех вкладок
            tabPanes.forEach(pane => pane.classList.remove('tab-pane-show'));

            // Добавляем класс показа соответствующей вкладке
            document.querySelector(`.tab-pane[data-id="${targetId}"]`).classList.add('tab-pane-show');
        });
    });
});




//modal

modal_window = document.getElementById('modal')
document.getElementById('modal_button').onclick = modal;

function modal() {
    modal_window.classList.add('modal_active')
}

var close_btn = document.getElementById('close_btn')
close_btn.onclick = function() {
  modal_window.classList.remove('modal_active')
}

//filter
var standart = document.querySelectorAll('.block_standart')
var plus = document.querySelectorAll('.block_standart2')
var lux = document.querySelectorAll('.block_lux')

var standart_btn = document.getElementById('standart')
var plus_btn = document.getElementById('plus')
var lux_btn = document.getElementById('lux')
var all_btn = document.getElementById('all')

standart_btn.onclick = function() {
  reload()
  plus.forEach((block)=> {
    block.style.display = 'none'
  })  
  lux.forEach((block)=> {
    block.style.display = 'none'
  })
}

plus_btn.onclick = function() {
  reload()
  standart.forEach((block)=> {
    block.style.display = 'none'
  })  
  lux.forEach((block)=> {
    block.style.display = 'none'
  })
}

lux_btn.onclick = function() {
  reload()
  plus.forEach((block)=> {
    block.style.display = 'none'
  })  
  standart.forEach((block)=> {
    block.style.display = 'none'
  })
}

all_btn.onclick = function() {
  standart.forEach((block)=> {
    block.style.display = 'flex'
  })
  plus.forEach((block)=> {
    block.style.display = 'flex'
  })  
  lux.forEach((block)=> {
    block.style.display = 'flex'
  })
}

function reload() {
  standart.forEach((block)=> {
    block.style.display = 'flex'
  })
  plus.forEach((block)=> {
    block.style.display = 'flex'
  })  
  lux.forEach((block)=> {
    block.style.display = 'flex'
  })
}


// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 30 + "px";
    } 
  });
}

//slider

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var appendNumber = 4;
    var prependNumber = 1;
    document
      .querySelector(".prepend-2-slides")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide([
          '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
          '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        ]);
      });
    document
      .querySelector(".prepend-slide")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide(
          '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
        );
      });
    document
      .querySelector(".append-slide")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide(
          '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
        );
      });
    document
      .querySelector(".append-2-slides")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide([
          '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
          '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        ]);
      });


    