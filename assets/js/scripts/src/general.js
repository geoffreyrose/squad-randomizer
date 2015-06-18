$(function(){
	$('[name="game"]').change(function(){
		var game = $('[name="game"]').val();
		$('.me1, .me2, .me3').hide();
		$('.' + game).show();
		var squad = [];

		function getMessage() {
			return squad[Math.floor(Math.random() * squad.length)];
		}

		function squadImg(member) {
			var selected = $('.member' + member +' .squad-name').text();
			var img = $('.members input[value="' + selected + '"]').attr('data-img');
				

			if( img === undefined) {
				$('.member' + member +' img').attr('src','assets/img/n7.png');
				//console.log('yes');
			} else {
				$('.member' + member +' img').attr('src','assets/img/' + img + '.png');
				//console.log('no');
			}
		}

		function sqaudSelect(gameNumber) {
			if( game === gameNumber) {
				$('.' + gameNumber + ' input:checked').each(function(){
					squad.push($(this).val());
				});

				var squad1 = getMessage();

				if( squad1 === undefined) {
					squad1 = '[Squad Member]';
				}

				$('.member1 .squad-name').text(squad1);
				squadImg('1');

				var removeItem = $('.member1 .squad-name').text();
				squad = jQuery.grep(squad, function(value) {
				  return value !== removeItem;
				});
				
				var squad2 = getMessage();
				if( squad2 === undefined) {
					squad2 = '[Squad Member]';
				}
				$('.member2 .squad-name').text(squad2);
				squadImg('2');
			}
		}

		sqaudSelect(game);

	});

	$('.randomize').click(function(){
		var game = $('[name="game"]').val();
		var squad = [];

		function getMessage() {
			return squad[Math.floor(Math.random() * squad.length)];
		}

		function squadImg(member) {
			var selected = $('.member' + member +' .squad-name').text();
			var img = $('.members input[value="' + selected + '"]').attr('data-img');
				

			if( img === undefined) {
				$('.member' + member +' img').attr('src','assets/img/n7.png');
				//console.log('yes');
			} else {
				$('.member' + member +' img').attr('src','assets/img/' + img + '.png');
				//console.log('no');
			}
		}

		function sqaudSelect(gameNumber) {
			if( game === gameNumber) {
				$('.' + gameNumber + ' input:checked').each(function(){
					squad.push($(this).val());
				});

				var squad1 = getMessage();

				if( squad1 === undefined) {
					squad1 = '[Squad Member]';
				}

				$('.member1 .squad-name').text(squad1);
				squadImg('1');

				var removeItem = $('.member1 .squad-name').text();
				squad = jQuery.grep(squad, function(value) {
				  return value !== removeItem;
				});
				
				var squad2 = getMessage();
				if( squad2 === undefined) {
					squad2 = '[Squad Member]';
				}
				$('.member2 .squad-name').text(squad2);
				squadImg('2');
			}
		}

		sqaudSelect('me1');
		sqaudSelect('me2');
		sqaudSelect('me3');
	});
});