https://www.youtube.com/watch?v=qOVAbKKSH10

export function getYoutubeVideoIdFromURL(url) {
  const validURL = URLParse(url)
  if (!validURL.isValid) throw TypeError
  return validURL.id
}

function URLParse (url) {
//  The captured groups are:
      //protocol
      //subdomain
      //domain
      //path
      //video code
      //query string
  const pattern = ^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+
  if (!pattern.test(url)) {
    return { isValid: false }
  }
  const matches = pattern.exec(url)
  return { isValid: true, id: matches[5] }
}
