// when #showschedule is clicked:
//   remove 'hidden' from #schedule
//   add 'hidden' to '#showmorebutton'
//   remove 'hidden' to '#showlessbutton'

// when #showless is clicked:
//   add 'hidden' to #schedule
//   remove '.hidden' to #showmorebutton
//   add 'hidden' to #showlessbutton


$('#showschedule').click(function() {
  $('#schedule').removeClass('hidden');
  $('#showmorebutton').addClass('hidden');
  $('#showlessbutton').removeClass('hidden');
});
$('#showless').click(function(){
  $('#schedule').addClass('hidden');
  $('#showmorebutton').removeClass('hidden');
  $('#showlessbutton').addClass('hidden');
});
