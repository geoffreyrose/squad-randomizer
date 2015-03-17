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
			if( game == gameNumber) {
				$('.' + gameNumber + ' input:checked').each(function(){
					squad.push($(this).val());
				});
			}

			function getMessage() {
   				return squad[Math.floor(Math.random() * squad.length)];
			}

			$('.member1 .squad-name').text(getMessage());

			console.log(squad);
			var removeItem = $('.member1 .squad-name').text();
			squad = jQuery.grep(squad, function(value) {
			  return value != removeItem;
			});

			console.log(squad);
			$('.member2 .squad-name').text(getMessage());
		}

		sqaudSelect('me1');
		//sqaudSelect('me2');
		//sqaudSelect('me3');
		
	});
});