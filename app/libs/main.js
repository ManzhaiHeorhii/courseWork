var cardCount = 0;
const urls = ['heli_1.jpg', 'heli_2.jpg','heli_3.jpeg','heli_4.jpg','heli_5.jpg',
  'pistol_1.jpg', 'pistol_2.jpg','pistol_3.jpg','pistol_4.jpg','pistol_5.jpg',
  'plane_1.jpg', 'plane_2.jpg','plane_3.jpg','plane_4.jpg','plane_5.jpg',
  'rifle_1.jpg','rifle_2.jpg','rifle_3.jpg','rifle_4.jpg','rifle_5.jpg',
  'tank_1.jpg', 'tank_2.jpg', 'tank_3.png', 'tank_4.jpg', 'tank_5.jpg'];

$(document).ready(function(){
  setImage();
  $('.cell').droppable({
    over: function (){
      $(this).css("border", "solid yellow");
    },
    out: function (){
      $(this).css("border", "none");
    },
    drop: function (){
      $(this).css("border", "none");

      compare($(this), $(".game__field__guess"));
    }
  });
      $(".game__field__guess").draggable({
        revert: true
      });


  });
function startGame(){
  $(".main-menu").css("display", "none");
  $(".game").css("display", "flex");
  var randomItem = getRandomInt(0,25);
  $(".game__field__guess").css("background-image", "url(./img/"+urls[randomItem]+")");
  $(".game__field__guess").data("data-file", urls[randomItem])
  //$(".game__field__guess").addClass(urls[randomItem]);
}
function refresh(){
  document.location.reload();
}
function showpopup(message, button)
{
 $(".game__popup").css({"visibility":"visible","display":"flex"});
  $(".game__popup__text").text(message);
  $(".game__popup__ok").text(button);
}
function hidepopup()
{
 $(".game__popup").css({"visibility":"hidden","display":"flex"});
}
function setImage(){
  var arr = randomUniqueNum(25, 25);
  var i = 0;
  $('.cell').each(function (index,element){
    $(element).css("background-image", "url(./img/"+urls[arr[i]]+")");
    $(element).data("data-file", urls[arr[i]]);
    i++;
  });
}
function randomUniqueNum(range, outputCount) {
    var arr = []
    for (var i = 0; i <= range; i++) {
      arr.push(i)
    }
    var result = [];
    for (var i = 1; i <= outputCount; i++) {
      const random = Math.floor(Math.random() * (range - i));
      result.push(arr[random]);
      arr[random] = arr[range - i];
    }
    return result;
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
function compare(drop, drag){
  var find = false;
  console.log($(drop).data("data-file"))
  if($(drop).data("data-file")===$(drag).data("data-file")){
    find = true;
  }
  if(find){
    var randomItem = getRandomInt(0,25);
    $(".game__field__guess").css("background-image", "url(./img/"+urls[randomItem]+")");
    $(".game__field__guess").data("data-file", urls[randomItem]);
    var path = "./img/star.png"
    $(".stars").append("<img src="+path+">");
    cardCount++;
    if(cardCount==10){
      showpopup("You win!", "Retry");
    }
  }else{
    showpopup("You loose!", "Retry");
  }
}
