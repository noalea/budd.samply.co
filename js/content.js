var budd = (function() {

  function splitTXT(text) {
    var number;
    text = text.split('-');
    number = text[1];
    return number;
  }

  function matchWithContent(i) {
    var num;
    $('.content').each(function (index, obj) {
      num = splitTXT(obj.id);
      if (num == i) {
        $(this).addClass('show');
      }
    });
  }

  function imageClicked(e) {
    var num;
    num = splitTXT(e.target.id);
    matchWithContent(num);
    $(".close").addClass("showClose");
  }

  function closeAll() {
    $('.content').each(function (i, obj) {
      $(this).removeClass('show');
    });
    $(".close").removeClass("showClose");
  }

  function switchButton(e) {
    var id, section;
    id = e.target.id;
    $('#' + id).addClass('active-btn');
    $('.button').each(function (i, obj) {
      if (obj.id != id) {
        $('#' + obj.id).removeClass('active-btn');
      }
    });
    section = id.split('-');
    section = section[0];
    switchTabs(section);
  }

  function switchTabs(section) {
    $('#' + section).addClass('active');
    $('.section').each(function (i, obj) {
      if (obj.id != section) {
        $('#' + obj.id).removeClass('active');
      }
    });
    setup();
  }

  function setupEventListeners() {
    $('.image').each(function(i, obj) {
        $('#' + obj.id).click(imageClicked);
    });
    $('.close').click(closeAll);
    $('.button').click(switchButton);
  }

  function setup() {
    var result;
    $('.section').each(function (index, obj) {
      result = $(this).attr('class');
      if (result.indexOf('active') != -1) {
        $(this).removeClass('none');
      } else {
        $(this).addClass('none');
      }
    });
  }

  return {
    init: function () {
      console.log("App has started.");
      setup();
      setupEventListeners();
    }
  };

})();

budd.init();
