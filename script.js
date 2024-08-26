var timeout
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim() {
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: -10,
        duration: 1.5,
        opacity: 0,
        ease: Expo
    })
        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            // dealy:-1
            duration: 0.8,
            stagger: .2
        })
        .from("#herofooter", {
            y: -10,
            opacity: 0,
            ease: Expo.easeInOut,
            duration: 0.8,
        })
}
firstPageAnim();
// function circleChaptaKaro() {
//     var xscale = 1;
//     var yscale = 1;
//     var xprev = 0;
//     var yprev = 0;
//     window.addEventListener("mousemove", function (dets) {
//         xscale=gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
//         yscale=gsap.utils.clamp(.8,1.2,dets.clientXY- yprev)

//         xprev = dets.clientX;
//         yprev = dets.clientY;
//         // console.log(xdiff,ydiff);
//         circleMouseFollower(xscale,yscale)

//     })

// }
// circleChaptaKaro();
function circleMouseFollower() {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) `
    })

}
circleMouseFollower();

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", function (dets) {

        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });
    });
    // console.log(elem);
    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.6),
        });
    });
});


