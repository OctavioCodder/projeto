$(document).ready(function () {
    $(".corpo")
      .mouseenter(function () {
        $(".cartao").stop().animate(
          {
            top: "-200px",
          },
          "slow"
        );
      })
      .mouseleave(function () {
        $(".cartao").stop().animate(
          {
            top: 0,
          },
          "slow"
        );
      });
  });