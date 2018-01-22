

    const current = document.querySelector("#current img");

    console.log(current);
    const opacity = 0.6;

    const imgs = document.querySelectorAll(".thumbnails img");

    console.log(imgs);

    // Set first img opacity
    imgs[0].style.opacity = opacity;

    imgs.forEach(img => img.addEventListener("click", imgClick));

    function imgClick(e) {
        // remove opacity
        imgs.forEach(img => (img.style.opacity = 1));

        //Change current image to src of clicked image
        current.src = e.target.src;

        // Add fade in class
        current.classList.add("fade-in");

        // remove fade in class after 0.5 seconds
        setTimeout(() => current.classList.remove('fade-in'), 500);


        // Change opacity to opacity var
        e.target.style.opacity = opacity;
    }
