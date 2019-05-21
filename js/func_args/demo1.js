function information (name,sex,money,birthday,color,likes,follow,age) {
  return `${name} ${sex} ${money} ${birthday} ${color} ${likes} ${follow} ${age}`
}

let user = {
  name: '李丹',
  sex: 'girl',
  money: '100',
  birthday: '5-22',
  color: 'green',
  likes: ['watch'],
  follow: 'JJ',
  age: '16'
}

information(user)