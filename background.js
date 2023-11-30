document.body.addEventListener("mousemove", (evt) => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;
    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY
    });
    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1
    });
  });


  function clickMo(){
    const mes = " U sure Doc Shaira? (Testing mo Cancel Sige ka)"
    if(confirm(mes)){
        window.location.href = "index.html";
    } else {
        alert("Walang pollen to Doc so di ka ma-aallergy :)");
        window.location.href = "index.html";
    }
  }
  