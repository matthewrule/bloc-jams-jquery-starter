{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('src', album.albumArtUrl);
  $('#artist').text(album.releaseInfo);
  $('#release-info').text(album.releaseInfo);
}
