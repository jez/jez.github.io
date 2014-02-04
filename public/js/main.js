;(function() {
  $(document).ready(function() {
    $('.well.project').click(function() {
      $('.well.project.active').not(this).removeClass('active');
      $(this).toggleClass('active');
      $('.project-expand').not('#' + $(this).data().toggle).slideUp('2');
      $('#' + $(this).data().toggle).slideToggle();
    });
    $('.well.experience').click(function() {
      $('.well.experience.active').not(this).removeClass('active');
      $(this).toggleClass('active');
      $('.experience-expand').not('#' + $(this).data().toggle).slideUp('2');
      $('#' + $(this).data().toggle).slideToggle();
    });
  });
})();
