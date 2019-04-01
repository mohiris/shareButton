(function() {
  //select our html elements in an array
  var shareButton = document.getElementsByClassName("share-btn");
  var tweetTitle = "Hello world";
  var twitterId = "htacess";
  //url of content to share
  var yourUrl = "https://youtu.be/EUrmQkd8RsM";

  //Add Event listeners for each btn
  for (let i = 0; i < shareButton.length; i++) {
    shareButton[i].addEventListener("click", handleClick);
  }

  //handlle le click event on each btn
  function handleClick(e) {
    e.preventDefault();

    let url = "";

    if (e.target.id == "share-btn-facebook") {
      url = "https://www.facebook.com/sharer/sharer.php?u=" + yourUrl;
    } else if (e.target.id == "share-btn-twitter") {
      url =
        "https://twitter.com/intent/tweet?text=" +
        tweetTitle +
        "&via=" +
        twitterId +
        "&url=" +
        yourUrl;
    } else if (e.target.id == "share-btn-linkedin") {
      url =
        "https://www.linkedin.com/shareArticle?mini=true&url=http://developer.linkedin.com&title=LinkedIn%20Developer%20Network&summary=My%20favorite%20developer%20program&source=LinkedIn" +
        yourUrl;
    } else if (e.target.id == "share-btn-googleplus") {
      url = "https://plus.google.com/share?url=" + yourUrl;
    }

    window.open(url, "Share", "scrollbar=yes, width=640, height=340");
  }
})();
