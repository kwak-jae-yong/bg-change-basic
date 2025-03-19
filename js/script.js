const bgImage = [
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png',
]
const titles = [
    'hello',
    'javascript',
    'working',
    'study'
]
const container = document.querySelector('#container')
const title = document.querySelector('.title')
const playBtn = document.querySelector('.play')
const stopBtn = document.querySelector('.stop')




let i = 0 
//let i를 0으로 설정하면, init의 ()안에 i를 넣으면 init(i)=0이된다. 
// 아래에서 function init(q)<-query 질문에 대한 답을 위 let i=0, init(i)로 답을 주었으므로 q에또한 0이 들어간다. 
// 그렇게 q=0이되면 function 안에서 titles[q],`utl(${bgImage[q]})` 속 q의 값이 0이되고 이는 위 const bgImage, titles에서 0번째 값을 호출하게된다. 결국 최초에 실행을 했을때 처음으로 보이는 화면은 bgImage에서 './img/1.png', titles에서 'hello'를 먼저 출력하게된다.
init(i)

let play = setInterval(bgChange, 2000)
function init(q) {


    title.textContent = titles[q].toUpperCase()
    container.style.backgroundImage = `url(${bgImage[q]})`

}



function bgChange() {


    init(i)
    i++
    if (i === bgImage.length) {
        i = 0
    }
}



playBtn.addEventListener('click', function () {
    play = setInterval(bgChange, 2000)
})
stopBtn.addEventListener('click', function () {
    clearInterval(play)
})