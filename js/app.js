(function(){
	// grab all of the images with a jquery selector, add event handling (on.click)	
	$('#allPhotos li').on('click', function () {
		// add JSON call here => jQuery handles everything under the hood so we don't have to worry about it
		// pass a parameter to the php file inside of an object (gets added to the query string)
		$.getJSON('includes/getPhoto.php', { photo:this.id }, function(data) {
			console.log(data);		
			// attr is the same as attribute; these are jquery methods (functions)
			$('#selectedPhoto').attr('src', 'images/' + data.photo_name);
		});
	});
})();