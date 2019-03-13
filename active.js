var css1 = `
  /* 亲爱的面试官您好，
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
      font-size: 16px;
  }
    #coder {
      position: fixed;
      left: 30px;
      top: 10px;
      width: 45%;
      animation: breath 0.5s infinite alternate-reverse;
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
 `;

let domPaper = `
/* 👉右边来张纸吧～要开始写简历啦～
 */
 `;

function writeCode(prefix,code,fn) {
    let n = 0;
    let id = setInterval(() => {
        n += 1;
        let domCoder = document.querySelector('#coder');
        domCoder.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
        styleTag.innerHTML = prefix + code.substring(0, n);
        domCoder.scrollTop = domCoder.scrollHeight;
        if (n >= code.length) {
            window.clearInterval(id);
            fn && fn.call()
        }
    }, 20);
}
function writeMarkdown(markdown, fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
      n += 1
      domPaper.innerHTML = markdown.substring(0, n)
      domPaper.scrollTop = domPaper.scrollHeight
      if (n >= markdown.length) {
        window.clearInterval(id)
        fn && fn.call()
      }
    }, 20)
  }

writeCode('', css1, ()=>{ // writeCss call the function
    createPaper(() => {
      writeCode(css1, domPaper, ()=> {
        writeMarkdown(md, ()=>{
          convertMarkdownToHtml(()=>{
            writeCode(css1 + domPaper, css3, ()=> {
              console.log('完成')
            })
          })
        })
      })
    })
  })

function createPaper(fn) {
    let paper = document.createElement('div');
    paper.id = 'paper';
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    console.log('创建paper完成')
    fn && fn.call()
}//创建一个paper

function convertMarkdownToHtml(fn){
    var div = document.createElement('div')  
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
  }
  

var md = `
# 自我介绍

- 我叫张含雨
- 2018届毕业生
- 毕业于郑州航空工业管理学院：视觉传达专业(全日制本科)

自学前端半年
- 在学校四年班长，责任心强～
- 上班过程中自学前端半年，每天坚持写代码，通过学习做了几个项目，后期都传到了GitHub。
- 用业余时间对流行的VUE框架进行了自学，多学好思，拥有良好的逻辑思维，注重细节。
- 具有良好的沟通能力，在不同文化和工作人员的背景下出色的独立完成任务，勇于面对挫折和挑战。

# 技能介绍

1. 利用HTML/CSS/JavaScript等Web技术进行产品的开发。
2. 配合后台开发人员实现产品功能，独立完成Web前端开发任务 
3. DIV+CSS布局的HTML代码编写，能够书写符合W3C标准的代码，并有严苛的编码风格和良好的编码习惯。

# 项目介绍

1. [苹果风格轮播](https://949nb.github.io/appleStyleSlide/appleSlide.html)
2. [iNav-一个自制的导航主页](https://949nb.github.io/newNavPage/navPage.html)
3. [自制画板](https://949nb.github.io/Canvas/canvas.html)
4. [简书博客](https://www.jianshu.com/u/a8fc692ca1c6)
5. [GitHub](https://github.com/949nb)

# 联系方式

- 微信/手机：17542116538
- Email 1661346771@qq.com
`

let css3 = `
/*
 * 这就是我的会动的简历
 * 谢谢观看:)
 */
`