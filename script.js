var p = document.createElement("p");
p.setAttribute("class","d-flex justify-content-center");


function foo(){
    setTimeout((ele)=>{
        ele = p.innerText = ("10")
        setTimeout((ele)=>{
            ele = p.innerText = ("9")
            setTimeout((ele)=>{
                ele = p.innerText = ("8")
                setTimeout((ele)=>{
                    ele = p.innerText = ("7")
                    setTimeout((ele)=>{
                        ele = p.innerText = ("6")
                        setTimeout((ele)=>{
                            ele = p.innerText = ("5")
                            setTimeout((ele)=>{
                                ele = p.innerText = ("4")
                                setTimeout((ele)=>{
                                    ele = p.innerText = ("3")
                                    setTimeout((ele)=>{
                                        ele = p.innerText = ("2")
                                        setTimeout((ele)=>{
                                            ele = p.innerText = ("1")
                                            setTimeout((ele)=>{
                                                ele = p.innerText = ("Happy Independence Day")
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
} foo()


document.body.append(p);
