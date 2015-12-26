// JavaScript Document

			function showImage(imgName) {
				var curImage = document.getElementById('currentImg');
				var thePath = 'images/';
				var theSource = thePath + imgName;
				
				curImage.src = theSource;
				curImage.alt = imgName;
				curImage.title = imgName;
			}