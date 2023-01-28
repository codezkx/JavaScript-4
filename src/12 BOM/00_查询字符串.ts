interface qeuryStringArgs {
  key: string,
  value: string
}

const getQueryStringArgs = (urlStr: string) => {
  if (!urlStr) {
    return false
  }
  const locationSearch = urlStr.split('?')[1]
  const qs = locationSearch.length > 0 ? locationSearch.substring(0) : ''
  const args:Array<qeuryStringArgs> = []
  for (let item of qs.split('&').map(q => q.split('='))) {
    const key: any = decodeURIComponent(item[0])// location中的转义编码转化成对应的符号
    const value: any = decodeURIComponent(item[1])
    if (key.length) {
      args[key] = value
    }
  }
  return args
}
const url:string = 'https://www.baidu.com/s?ie=UTF-8&wd=%E5%93%94%E5%93%A9%E5%93%94%E5%93%A9'
console.log(getQueryStringArgs(url))
