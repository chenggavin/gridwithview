var demo = new Vue({

	el: '#main',

	data: {
		layout: 'grid',
		cats: ['a','b']
	},

	mounted: function() {

		var self = this;

		axios.get("http://thecatapi.com/api/images/get?format=xml&results_per_page=6")
			.then(function (response) {


			var parser = new DOMParser();
			var data = parser.parseFromString(response.data, "text/xml");

			Array.from(data.getElementsByTagName('url'))
			.forEach(function(url) {




			});


			});

	}


});