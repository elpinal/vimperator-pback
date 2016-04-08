(function() {
  commands.addUserCommand(['pback'], 'Properly go back in the browser history', function(args) {
    if (window.getWebNavigation) {
      if (args.literalArg == "") {
        pback(Math.max(args.count, 1));
      }
    }
  },
    {
      argCount: "?",
      count: true,
      literal: 0
    });

  function pback(count) {
    let sh = window.getWebNavigation().sessionHistory;

    if (sh && sh.index > (count - 1)) {
      window.getWebNavigation().gotoIndex(sh.index - count);
    } else {
      tabs.remove(tabs.getTab(), 1, 0, 0);
    }
  }
})();
