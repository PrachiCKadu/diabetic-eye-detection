const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", () => {
    alert("Video would play here.");
});


const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("in-view");

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.2
  }

);


document
  .querySelectorAll(".feature-card")
  .forEach((card) => {

    observer.observe(card);

  });


// ------------------------------------------------------------------------------




