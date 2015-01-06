move = (e) ->
  $(this).parent().children('.pane').toggleClass 'clicked'

$(document).ready ->
  $('.pane').click move
  return

