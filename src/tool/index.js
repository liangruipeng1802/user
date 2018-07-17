export default {
	backTop(){
		$("#backTop").parent().eq(0).scroll(function(){
//			console.log($(this).scrollTop())
			if($(this).scrollTop()>100){
				$("#backTop").show();
			}else{
				$("#backTop").hide();
			}
		})
		$("#backTop").click(function(){
//			console.log(111);
			$(this).parent().eq(0).animate({
				scrollTop:0
			},1000)
		})
	}
}
