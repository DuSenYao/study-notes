function render(){
  return h('div',{id:"app"},children:[
    h('p',{},'hello world'),
    h(Rate,{value:4}),
  ])
}

function h(a, b,c=1,d= 2) {}