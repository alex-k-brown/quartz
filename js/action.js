//Shuffle through pages

	// Counter Variable
	var pageNumber = 1;

	//Holding Variables for Full Text

		var fullText = [];

		for (i=1; i <= 3; i++) {
			fullText.push($('#page-' + i).text());
		};

	// setText Function - Change the text to match the page number

	var setText = function(pageNum) {

		//Add Hide Class to all page-text elements

		$('.page-text').attr('class', 'page-text hide');

		//Current Page ID Variable

		var pageId = 'page-' + pageNum;

		//Remove Hide Class from Current Page Text Element

		$('#' + pageId).attr('class', 'page-text');

	};

	//Perform When Document Loads

	$(document).ready(function() {

		//Change Page Numbers & Text on Right Arrow Click

		$('#page-right').click(function() {

			//Only if Less than 3

			if (pageNumber < 3) {

				//Update Page Number

				pageNumber +=1;
				$('#page-number').html( pageNumber + '/3');
			};

			//Call setText Function

			setText(pageNumber);
		});

		//Change Page Numbers & Text on Left Arrow Click

		$('#page-left').click(function() {
			console.log('Page Left Click');

			//Only if Less than 3

			if (pageNumber > 1) {

				//Update Page Number

				pageNumber -=1;
				$('#page-number').html( pageNumber + '/3');
			};

			//Call setText Function

			setText(pageNumber);
		});

		//Collapse Side Bar

		$('#collapse').click(function() {
			console.log('Collapse Click')

			//Show Expand Button

			$('#expand').css('display', 'block');

			//Move Expand Button on Video Expand

			$('#expand').animate({left: '+=40%'}, 1000);

			//Fade In Expand Button

			$('#expand').animate({opacity: '1.0'}, 1000);


			//Hide Side Panel

			$('.side-panel').css('display', 'none');

			//Slide Side Panel Closed & Expand Video Over 1 Second

			
			$('#video').animate({width: '100%'}, 1000);
			

			
			
		})

		//Expand Side Bar

		$('#expand').click(function() {


			//Hide Expand Button

			$('#expand').css('display', 'none');

			//MOve Expand Back to Original Position;

			$('#expand').css('left', '55%');

			$('#expand').css('opacity', '0.0');
			

			//Slide Side Panel Open & Collapse Video Over 1 Second

			$('#video').animate({width: '61%'}, 1000);

			//Display Side Panel After 1 Second

			setTimeout(function () {
				$('.side-panel').css('display', 'inline-block');
			}, 1000);

			
		});


		//Shorten Text on Mobile Devices on Window Load

		if ($(window).width() <= 1000) {

			//Create Smaller Text & Print to HTML
				
			for (i = 1; i <= 3; i++) {
				var shortText = fullText[i - 1].slice(0, 61);
				$('#page-' + i).text(shortText);
			}
		};

	});

	//Adjust Text on Resize

	$(window).resize(function() {

		//Window less than 1000px

		if ($(window).width() <= 1000) {

			//Create Smaller Text & Print to HTML
			
			for (i = 1; i <= 3; i++) {
				var shortText = fullText[i - 1].slice(0, 61);
				$('#page-' + i).text(shortText);
			};

			//Remove Expand/Collapse Style Attributes

			$('#video').removeAttr('style');

		//Windows Larger than 1000px

		} else {

			//Change Back to Full-size on resize when larger than 1000px

			for (i = 1; i <= 3; i++) {
				$('#page-' + i).text(fullText[i - 1]);
			};
		};

	});