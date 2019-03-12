var code = `/* 亲爱的面试官您好，
 * 我叫张含雨，
 * 我是一名前端工程狮,
 * 这是一个会动的简历～～
 * 首先我们要在页面上加上一些过渡～
 */
 * {
    transition: all 0.5s;
 }
/* 然后把背景颜色改变一下，并且将字体变大～
 */
 html {
    background: rgb(222,222,222);
    font-size: 14px;
 }
  #coder {
    position: fixed;
    left: 10px;
    top: 10px;
    width: 45%;
 }
 /* 给代码加一点高亮～
 */
 .token.comment{color: slategray;}
 .token.selector{color: #5096D7;}
 .token.property{color: #905;}
 .token.function{color: #DD4A68;}

 #coder { padding:15px;}
 /* 边框去掉～来点阴影～
 */
 #coder{border: none; box-shadow: -1px 1px 7px 3px rgba(0,0,0,0.29);
         transform: rotateX(-9deg) rotateY(5deg);
 `;

let domPaper = `
/* 👉右边来张纸吧～要开始写简历啦～
 */
 #paper {background: white;}
}
 `;

function writeCode(code) {
    let n = 0;
    let id = setInterval(() => {
        n += 1;
        let domCoder = document.querySelector('#coder');
        domCoder.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css, 'css');
        styleTag.innerHTML = code.substring(0, n);
        domCoder.scrollTop = domCoder.scrollHeight;
        if (n >= code.length) {
            window.clearInterval(id);
            fn2();
            fn3(styleTag.innerHTML);
        }
    }, 0);
}

writeCode(code,fn2);


function fn2() {
    let paper = document.createElement('div');
    paper.id = 'paper';
    document.body.appendChild(paper)
    console.log('创建paper完成')
}//创建一个paper

function fn3(preceded) {
    let index = 0;
    let id2 = setInterval(() => {
        console.log('开始添加paper样式');
        index += 1;
        coder.innerHTML = preceded + domPaper.substring(0, index);
        coder.innerHTML =
            Prism.highlight(coder.innerHTML, Prism.languages.css, 'css');
        styleTag.innerHTML = preceded + domPaper.substring(0, index);
        coder.scrollTop = coder.scrollHeight;
        if (index >= domPaper.length) {
            window.clearInterval(id2);
            console.log('杂碎闹钟2');
        }
    }, 0);
}