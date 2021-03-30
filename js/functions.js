$(function(){
	// Проверка браузера
	if ( !supportsCssVars() ) {
		$('body').html('<div style="text-align: center; padding: 30px; font-family: Arial, sans-serif;">Ваш браузер устарел рекомендуем обновить его до последней версии<br> или использовать другой более современный</div>')
	}


	// Ленивая загрузка
	setTimeout(function(){
		observer = lozad('.lozad', {
			rootMargin: '200px 0px',
			threshold: 0,
			loaded: function(el) {
				el.classList.add('loaded')
			}
		})

		observer.observe()
	}, 200)


	// Анимированное появление страницы
	$('body').addClass('show')


	// Установка ширины стандартного скроллбара
	$(':root').css('--scroll_width', widthScroll())


	// Табы
	var loationHash = window.location.hash

	$('.tabs_container').each(function(){
	    $(this).find('> .tab_content:first').addClass('active')
	})

	$('body').on('click', '.tabs a', function(e) {
		e.preventDefault()

	    if( !$(this).hasClass('active') ) {
	    	let parent = $(this).closest('.tabs_container')
		    let activeTab = $(this).attr('href')

		    parent.find('> .tabs a').removeClass('active')
		    parent.find('> .tab_content').removeClass('active')

		    $(this).addClass('active')
		    $(activeTab).addClass('active')
	    }
	})

	if( loationHash ) {
		let activeTab = $('.tabs a[href='+ loationHash +']')
		let parent = activeTab.closest('.tabs_container')

		parent.find('> .tabs a').removeClass('active')
		parent.find('> .tab_content').removeClass('active')

		activeTab.addClass('active')
		$( activeTab.attr('href') ).addClass('active')

		$('html, body').stop().animate({
		   	scrollTop: $( activeTab.attr('href') ).offset().top
		}, 1000)
	}


	// Мини всплывающие окна
	firstClick = false

	$('.mini_modal_link').click(function(e){
	    e.preventDefault()

	    let modalId = $(this).data('modal-id')

	    if( $(this).hasClass('active') ){
	        $(this).removeClass('active')
	      	$('.mini_modal').removeClass('active')

	        firstClick = false

			if( $(window).width() < 1024 ){
				$('body').css('cursor', 'default')
			}
	    }else{
	        $('.mini_modal_link').removeClass('active')
	        $(this).addClass('active')

	        $('.mini_modal').removeClass('active')
	        $(modalId).addClass('active')

	        firstClick = true

			if( $(window).width() < 1024 ){
				$('body').css('cursor', 'pointer')
			}
	    }
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click(function(e){
	    if ( !firstClick && $(e.target).closest('.mini_modal').length == 0 ){
	        $('.mini_modal, .mini_modal_link').removeClass('active')

			if( $(window).width() < 1024 ){
				$('body').css('cursor', 'default')
			}
	    }

	    firstClick = false
	})

	// Закрываем всплывашку при клике на крестик во всплывашке
	$('body').on('click', '.mini_modal .close', function(e) {
	    e.preventDefault()

	    $('.mini_modal, .mini_modal_link').removeClass('active')

	    if( $(window).width() < 1024 ){
			$('body').css('cursor', 'default')
		}

	    firstClick = false
	})


	// Моб. меню
	$('body').on('click', '.mob_header .mob_menu_link', function(e) {
    	e.preventDefault()

		if( $(this).hasClass('active') ) {
			$('body').removeClass('lock')
        	$('header').removeClass('show')
			$('.overlay').fadeOut(300)
		} else {
			$('body').addClass('lock')
			$('header').addClass('show')
			$('.overlay').fadeIn(300)
		}
    })

    $('header .close, .overlay').click(function(e) {
    	e.preventDefault()

		$('body').removeClass('lock')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
    })
})



// Вспомогательные функции
function setHeight(className){
    let maxheight = 0
    let object = $(className)

    object.each(function() {
    	let elHeight = $(this).innerHeight()

        if( elHeight > maxheight ) {
        	maxheight = elHeight
        }
    })

    object.innerHeight( maxheight )
}


function widthScroll() {
    let div = document.createElement('div')
    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.visibility = 'hidden'
    document.body.appendChild(div)

    let scrollWidth = div.offsetWidth - div.clientWidth
    document.body.removeChild(div)

    return scrollWidth
}


var supportsCssVars = function() {
    var s = document.createElement('style'),
        support

    s.innerHTML = ":root { --tmp-var: bold; }"
    document.head.appendChild(s)
    support = !!(window.CSS && window.CSS.supports && window.CSS.supports('font-weight', 'var(--tmp-var)'))
    s.parentNode.removeChild(s)

    return support
}


function cropText(elements) {
	elements.each(function() {
		let $text = $(this).find('.crop')

		while ($text.height() > $(this).height()) {
			$text.text($text.text().split(" ").slice(0, $text.text().split(" ").length - 1).join(" ") + "...")
		}
    })
}