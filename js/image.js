$(document).ready(function(){

					$('.hovereffect').on('click',function(){
						flag=$(this).hasClass('jq');
						$('.hovereffect').removeClass('jq');
						if(flag)
							{
								$(this).addClass('jq');
							}
						$(this).toggleClass('jq');
					});
});

