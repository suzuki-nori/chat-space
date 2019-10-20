// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function group_message_update(message) {
  var groups = $(".group");

  $.each(groups, function(index, group) {
    var current_group_id = $(".main-header__left-box__current-group").attr("data-group_id");
    var group_id = $(group).attr("data-group_id");

      if( current_group_id == group_id) {
        var group_message = $(group).find(".group__latest-message");
        message.content != "" ? message.content : message.content = '画像が投稿されています';
        group_message.text(message.content);
      }
  })

}