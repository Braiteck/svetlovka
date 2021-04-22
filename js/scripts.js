$(function () {
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 20,
		loop: true,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,
		nav: true,
		dots: true
	})


	// Карусель товаров
	$('.products .slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 500,
		mouseDrag: false,
		responsive: {
			0: {
				items: 1,
				margin: 15
			},
			414: {
				items: 2,
				margin: 15
			},
			768: {
				items: 3,
				margin: 20
			},
			1024: {
				items: 4,
				margin: 20
			},
			1280: {
				items: 5,
				margin: 25
			}
		}
	})


	// Про книги
	$('.about_books .slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 500,
		mouseDrag: false,
		responsive: {
			0: {
				items: 1,
				margin: 15
			},
			768: {
				items: 2,
				margin: 20
			},
			1280: {
				items: 2,
				margin: 28
			}
		}
	})


	// Новости
	$('.articles .slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 500,
		mouseDrag: false,
		responsive: {
			0: {
				items: 1,
				margin: 15
			},
			768: {
				items: 2,
				margin: 20
			},
			1024: {
				items: 3,
				margin: 20
			},
			1280: {
				items: 3,
				margin: 28
			}
		}
	})


	// Карусель мероприятий
	$('.events .slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 500,
		mouseDrag: false,
		responsive: {
			0: {
				items: 1,
				margin: 15
			},
			414: {
				items: 2,
				margin: 15
			},
			768: {
				items: 3,
				margin: 20
			},
			1024: {
				items: 4,
				margin: 20
			},
			1280: {
				items: 4,
				margin: 39
			}
		},
		onInitialized: function (event) {
			setHeight($(event.target).find('.event .name'))
		},
		onResized: function (event) {
			$(event.target).find('.event .name').height('auto')

			setHeight($(event.target).find('.event .name'))
		}
	})


	// Карусель проектов
	$('.projects .slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 500,
		mouseDrag: false,
		responsive: {
			0: {
				items: 1,
				margin: 15
			},
			414: {
				items: 2,
				margin: 15
			},
			768: {
				items: 2,
				margin: 20
			},
			1024: {
				items: 3,
				margin: 20
			},
			1280: {
				items: 4,
				margin: 39
			}
		},
		onInitialized: function (event) {
			setHeight($(event.target).find('.project .name'))
		},
		onResized: function (event) {
			$(event.target).find('.project .name').height('auto')

			setHeight($(event.target).find('.project .name'))
		}
	})


	// Что посмотреть - Новое
	$('.what_see .new .slider').owlCarousel({
		items: 1,
		margin: 56,
		loop: true,
		smartSpeed: 500,
		nav: true,
		dots: false,
		onInitialized: (event) => {
			$('.what_see .new .count .total').text(event.item.count)
		},
		onTranslate: (event) => {
			let currentIndex = event.item.index - event.relatedTarget._clones.length / 2

			currentIndex < 0
				? currentIndex = event.item.count
				: currentIndex = currentIndex + 1

			if (currentIndex > event.item.count) { currentIndex = 1 }

			$('.what_see .new .count .current').text(currentIndex)
		}
	})


	// Что посмотреть - Спец. проекты
	$('.what_see .spec_projects .slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		smartSpeed: 500,
		mouseDrag: false,
		responsive: {
			0: {
				items: 1,
				margin: 15
			},
			768: {
				items: 2,
				margin: 20
			},
			1024: {
				items: 2,
				margin: 30
			},
			1280: {
				items: 2,
				margin: 39
			}
		},
		onInitialized: (event) => {
			$('.what_see .spec_projects .count .total').text(event.item.count)
		},
		onTranslate: (event) => {
			let currentIndex = event.item.index - event.relatedTarget._clones.length / 2

			currentIndex < 0
				? currentIndex = event.item.count
				: currentIndex = currentIndex + 1

			if (currentIndex > event.item.count) { currentIndex = 1 }

			$('.what_see .spec_projects .count .current').text(currentIndex)
		}
	})


	// Переключение вида
	$('.view a.grid_link').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.block')

		$('.view a').removeClass('active')
		$(this).addClass('active')

		parent.find('.list').addClass('flex').removeClass('list')
	})

	$('.view a.list_link').click(function (e) {
		e.preventDefault()

		$('.view a').removeClass('active')
		$(this).addClass('active')

		let parent = $(this).closest('.block')

		parent.find('.flex').addClass('list').removeClass('flex')
	})


	// Календарь
	$.fn.datepicker.language['ru'] = {
		days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
		daysShort: ['Вос.', 'Пон.', 'Вто.', 'Сре.', 'Чет.', 'Пят.', 'Суб.'],
		daysMin: ['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.'],
		months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
		today: 'Сегодня',
		clear: 'Очистить',
		dateFormat: 'dd.mm.yyyy',
		timeFormat: 'hh:ii',
		firstDay: 1
	}

	$('.datepicker_here').datepicker({
		inline: true,
		prevHtml: 'prev',
		nextHtml: 'next',
		showOtherMonths: false,
		navTitles: {
			days: 'MM',
			months: 'yyyy',
			years: 'yyyy1 - yyyy2'
		},
		onSelect: function (formattedDate, date, inst) {
			// событие выбора даты
			console.log(formattedDate)
		}
	})
})



$(window).load(function () {
	// Обрезка текста
	cropText($('.main_slider .slide .desc'))


	// Выравнивание в событиях
	eventHeight(parseInt($('.events .flex').css('--events_count')))
})



$(window).resize(function () {
	// Обрезка текста
	cropText($('.main_slider .slide .desc'))


	// Выравнивание в событиях
	eventHeight(parseInt($('.events .flex').css('--events_count')))
})



// Выравнивание в событиях
function eventHeight(step) {
	let start = 0
	let finish = step

	$('.events .flex').each(function () {
		let events = $(this).find('.event')

		events.find('.name').height('auto')

		for (let i = 0; i < events.length; i++) {
			let obj = events.slice(start, finish).find('.name')

			setHeight(obj)

			start = start + step
			finish = finish + step
		}
	})
}