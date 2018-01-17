// Example:
// <a class="site-nav__toggle toggle-js" data-target=".site-nav"></a>
// This will toggle the default class, 'js-show', to the element with the class 'site-nav' when clicked

$('.toggle-js').on('click',function(){
	var tarSel = ( $(this).data('target') != undefined ) ? $(this).data('target') : this;
	var toggleClass = ( $(this).data('toggle-class') != undefined ) ? $(this).data('toggle-class') : 'js-show' ;
	$(tarSel).toggleClass(toggleClass);
});