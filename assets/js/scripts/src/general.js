$(function(){
	$('[name="game"]').change(function(){
		var game = $('[name="game"]').val();
		$('.me1, .me2, .me3').hide();
		$('.' + game).show();
	});

	$('.randomize').click(function(){
		var game = $('[name="game"]').val();
		var squad = [];
		function sqaudSelect(gameNumber) {
			if( game === gameNumber) {
				$('.' + gameNumber + ' input:checked').each(function(){
					squad.push($(this).val());
				});

				function getMessage() {
	   				return squad[Math.floor(Math.random() * squad.length)];
				}

				function squadImg(member) {
					var selected = $('.member' + member +' .squad-name').text();
					var img = $('.members input[value="' + selected + '"]').attr('data-img');
					$('.member' + member +' img').attr('src','assets/img/' + img + '.png');
				}

				$('.member1 .squad-name').text(getMessage());
				squadImg('1');

				var removeItem = $('.member1 .squad-name').text();
				squad = jQuery.grep(squad, function(value) {
				  return value !== removeItem;
				});

				$('.member2 .squad-name').text(getMessage());
				squadImg('2');
			}
		}

		sqaudSelect('me1');
		sqaudSelect('me2');
		sqaudSelect('me3');
		
	});
});