


function init_sprite_animation(FRAME_COUNT, image_src) {

    // create a new Image object to find actual dimension of image file
    const sprite_img = new Image();
    
    sprite_img.onload = function() {
        const sprite_wrapper = document.querySelector('.sprite-animation-wrapper');
        const sprite_wrapper_height = sprite_wrapper.offsetHeight;

        /*
            this line find the perfect width for sprite wrapper to fit only one frame of the sprite image
            
            FORMULA : 


                   width     X  desire height(wrapper height)
                -----------
                   height
            ------------------------------------------------------
                            Frame count


                   
        */
        const sprite_wrapper_width = ((sprite_img.width/sprite_img.height) * sprite_wrapper_height) / FRAME_COUNT;
    
        sprite_wrapper.style.width = `${sprite_wrapper_width}px`;




        // gsap animation

        gsap.registerPlugin(ScrollTrigger)

        gsap.to('.sprite-image', {
            backgroundPosition: `-${sprite_wrapper_width * (FRAME_COUNT-1)}px 0%`,
            ease: `steps(${FRAME_COUNT-1})`,
            scrollTrigger: {
                trigger: '.sprite-animation-wrapper',
                start: 'top 70%',
                end: 'top 30%',
                scrub: true

            }
        })
        
    }
    sprite_img.onerror = function(err) {
        console.error(err)
    }
    
    sprite_img.src=image_src




}



init_sprite_animation(10, 'img2.png')