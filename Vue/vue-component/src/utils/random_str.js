export default function (len = 32) {
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  // let arr = [];
  // for(let i = 0; i < 32; i++) {
  //   arr.push($chars.charAt((Math.floor(Math.random() * 32))))
  
  const maxPos = $chars.length;
  let str = ''
  for(let i = 0; i < len; i++) {
    str +=$chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return str
}
