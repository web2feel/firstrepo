jQuery(document).ready(function() {
jQuery('.dynpost').addClass("bt_hidden").viewportChecker({
classToAdd: 'bt_visible animated bounceInLeft',
offset: 100,
repeat: true,
callbackFunction: function(elem, action){},
scrollHorizontal: false
});
});
