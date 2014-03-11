;(function() {
  $(document).ready(function() {
    $('.well.project').click(function() {
      $('.well.project.selected').not(this).removeClass('selected');
      $(this).toggleClass('selected');
      $('section').not('#' + $(this).data().toggle).slideUp('2');
      $('#' + $(this).data().toggle).slideToggle();
    });
    $('.well.experience').click(function() {
      $('.well.experience.selected').not(this).removeClass('selected');
      $(this).toggleClass('selected');
      $('section').not('#' + $(this).data().toggle).slideUp('2');
      $('#' + $(this).data().toggle).slideToggle();
    });
  });
})();
