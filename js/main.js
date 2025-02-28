// ScrollTrigger를 gsap에 등록
gsap.registerPlugin(ScrollTrigger);
$(function(){
    
    // Splitting.js 호출 (라이브러리 추가 필요)
    if (typeof Splitting === "function") {
        Splitting();
    }
    $(".nav_icon").on("click", function () {
        $("body").toggleClass("on");
    });
    profile();
    textwrap();
    // sec02 애니메이션
    // 애니메이션할 요소선택과 스크롤바의 위치와 요소의 위치를 정해줌
    gsap.timeline({
        // 스크롤바에 따른 애니메이션 설정
        scrollTrigger: {
            // 애니메이션 할때 부드럽게 처리
            scrub: 3,
            // 애니메이션 대상(요소선택)
            trigger: "#sec02 ul",
            // 애니메이션 시작부분
            // 앞- 요소의 시작위치, 뒤- 스크롤바의 시작위치
            start: "10% 80%",
            // 애니메이션 끝부분
            // 앞- 요소의 끝위치, 뒤- 스크롤바의 끝위치
            end: "100% 100%",
            // 요소의 시작 끝위치, 스크롤바의 시작 끝위치
            // markers:true,
        },
    })
    
    // .to('',{},지연시간)
    .to('#sec02 li:nth-child(1)',{y:-150,duration:1,ease:'ease-in-out'},0.4)
    .to('#sec02 li:nth-child(2)',{y:-150,duration:1,ease:'ease-in-out'},0.6)
    .to('#sec02 li:nth-child(3)',{y:-150,duration:1,ease:'ease-in-out'},0.8)
    .to('#sec02 li:nth-child(4)',{y:-150,duration:1,ease:'ease-in-out'},1)
    .to('#sec02 li:nth-child(5)',{y:-150,duration:1,ease:'ease-in-out'},1)
    .to('#sec02 li:nth-child(6)',{y:-150,duration:1,ease:'ease-in-out'},1)


    // sec05 애니메이션(도형원)
    gsap.timeline({
        scrollTrigger:{
            scrub:3,
            // 요소의 start 기준점
            trigger:'#sec05',
            start:'0% 80%',
            end:'100% 100%',
            // markers:true,
        },
    })
    .fromTo('#sec05 .circle',{width:0,height:0,duration:10,ease:'easeInOutBounce',top:'5%'},{width:3000,height:3000,duration:10,top:'30%'})
    
    // sec05 애니메이션(문단안에 txt)
    gsap.timeline({
        scrollTrigger:{
            scrub:3,
            // 요소의 start 기준점
            trigger:'#sec05 .txtbox',
            start:'0% 80%',
            end:'100% 100%',
            // markers:true,
        },
    })
    .fromTo('#sec05 .txtbox',{opacity:0,duration:5,ease:'easeInExpo',top:'70%'},{opacity:1,duration:5,top:'50%'})
    gsap.timeline({
        scrollTrigger:{
            scrub:3,
            trigger:'#work',
            start:'0% 100%',
            end:'0% 20%',
            // markers:true,
        }
    })
    .fromTo('.title .left',{x:'-100%'},{x:"0%",ease:'easeInOutElastic',duration:5},0)
    .fromTo('.title .right',{x:'100%'},{x:"0%",ease:'easeInOutElastic',duration:5},0)
    gsap.timeline({
        scrollTrigger:{
            scrub:3,
            trigger:'#work .list',
            start:'0% 100%',
            end:'0% 100%',
            // markers:true,
        }
    })
    .to('#work',{backgroundColor:"#000", color:"#fff", ease:"none", duration:5},0)
    .to('.title',{position:'fixed',left:0,top:0,ease:"none",duration:5,zIndex:2},0)
    .fromTo("#work .list",{margin:"0 auto"},{margin:'100vh',position:"relative",zIndex:3,duration:5, ease:"none"},0)
    gsap.timeline({
        scrollTrigger:{
            scrub:3,
            trigger:'#work .list',
            start:'100% 50%',
            end:'100% 50%',
            // markers:true,
        }
    })
    .to('.title .left',{x:'-100%',ease:'none',duration:5,},0)
    .to('.title .right',{x:'100%',ease:'none',duration:5,},0)
    gsap.timeline({
        scrollTrigger:{
            scrub:3,
            trigger:'.section11 .txtbox',
            start:'20% 90%',
            end:'100% 60%',
            // markers:true,
        }
})
    .set('.section11 .txtbox .mask span', { color: '#f5a301' })
    .fromTo('.section11 .txtbox .mask span',{backgroundSize: '0% 100%', color:'#f5a301'},{backgroundSize: '100% 100%',color:'#f5a301'})
    ScrollTrigger.create({
        snap: 1 / (section.length - 1)
    })
})
gsap.registerPlugin(ScrollTrigger);

function textwrap() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".textwrap",
            start: "10% 80%",
            toggleActions: "play none none none",
            // markers: true
        }
    });
    tl.to('.section10 .textwrap h2', {
        scale: 1.1,
        rotateX: 10,
        textShadow: "0px 5px 20px rgba(0, 0, 0, 0.4)",
        color: "#ff5733",
        duration: 1,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
    });
    tl.to('.section10 .textwrap .tool li', {
        opacity: 1, 
        scale: 1.05, 
        rotate: 2, 
        y: -55, 
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        textShadow: "0px 3px 10px rgba(0, 0, 0, 0.3)"
    });
}






// GSAP 및 ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

function profile() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#profile",
            start: "top 80%",
            toggleActions: "play none none none",
        }
    });

    tl.to("#profile .inner h2", {
        opacity: 1,
        y: -60,
        scale: 1.3,
        rotateX: 20,
        duration: 0.7,
        ease: "back.out(1.7)",
        textShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)"
    });

    tl.to("#profile .inner .txt_wrap > *", {
        opacity: 1,
        stagger: 0.15,
        y: 80,
        rotation: 10,
        scale: 1.2,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)"
    });

    tl.to("#profile .inner .scroll", {
        opacity: 1,
        y: -40,
        duration: 0.5,
        ease: "bounce.out",
    });

    tl.call(info);
}

// 2️⃣ 추가 정보 (Phone, E-Mail, Address)
function info() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#profile .inner .info",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    tl.to("#profile .inner .info div", {
        opacity: 1,
        y: -50,
        scale: 1.1,
        rotateY: -15,
        duration: 0.5,
        ease: "back.out(1.7)"
    });

    tl.to("#profile .inner .info div h3, #profile .inner .info div p", {
        opacity: 1,
        stagger: 0.2,
        x: -30,
        duration: 0.4,
        ease: "power4.out",
        textShadow: "0px 2px 10px rgba(0, 0, 0, 0.3)"
    });

    tl.call(edu);
}

// 3️⃣ 학력 정보 (Education)
function edu() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#profile .inner .edu",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    tl.to("#profile .inner .edu div", {
        opacity: 1,
        y: -50,
        scale: 1.1,
        rotateX: -15,
        duration: 0.5,
        ease: "back.out(1.7)"
    });

    tl.to("#profile .inner .edu div h3, #profile .inner .edu div p", {
        opacity: 1,
        stagger: 0.15,
        y: 30,
        scale: 1.2,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)"
    }, "-=0.3");

    tl.call(imgbox);
}

// 4️⃣ 이미지 박스 애니메이션
function imgbox() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".p_imgbox",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    tl.to(".p_imgbox", {
        opacity: 1,
        scale: 1.3,
        rotation: 20,
        y: -100,
        duration: 0.6,
        ease: "elastic.out(1.5, 0.5)",
        filter: "blur(3px)"
    });

    tl.to(".p_imgbox", {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: "power3.out",
        filter: "blur(0px)"
    });
}





