$('article').readmore({
  moreLink: '<a href="#"><em>GET THE GOODS</em></a>',
  lessLink: '<a href="#">Close THAT SHIT</a>',
  speed: 1000,
  afterToggle: function() {
      alert('Its CLosed');
  }
});