const App = {
  initialize: function() {
    const self = this;
    console.log('initialize');
    return self;
  },

  eventLoader: function() {
    const self = this;
    console.log('eventLoader');
  },
}

jQuery(function(){
  App.initialize().eventLoader();
});
