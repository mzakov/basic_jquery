import $ from 'jquery'

import './basic.css'

$(document).ready(() => {
  const
			order = [ 'red', 'white', 'blue' ];
			const
			fields = [ '#field1', '#field2', '#field3' ];
			const
			buttons = [ '#button1', '#button2', '#button3' ];
			let
			color = [ 0, 1, 2 ];

			function init() {
				$('#field1').css('background-color', order[0]);
				$('#button1').css('background-color', order[1]);
				$('#field2').css('background-color', order[1]);
				$('#button2').css('background-color', order[2]);
				$('#field3').css('background-color', order[2]);
				$('#button3').css('background-color', order[0]);
				color = [ 0, 1, 2 ];
			}
			;

			function changeColors(index) {
				color[index]++;
				$(fields[index]).css('background-color',
						order[color[index] % order.length]);
				$(buttons[index]).css('background-color',
						order[(color[index] + 1) % order.length]);
			}

			init();

			$('#button1').click(function() {
				changeColors(0);
			});

			$('#button2').click(function() {
				changeColors(1);
			});

			$('#button3').click(function() {
				changeColors(2);
			});

			$('#reset').click(function() {
				init();
			});
		});
