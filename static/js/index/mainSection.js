document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 600){
        const influencerSection = document.querySelector('.influencer-section');
        const patronSection = document.querySelector('.patron-section');

        function handleTransitionEnd(event) {
            if (event.propertyName === 'width' || event.propertyName === 'padding') {
                if (influencerSection.classList.contains('hover')) {
                    influencerSection.classList.add('active');
                }
                if (patronSection.classList.contains('hover')) {
                    patronSection.classList.add('active');
                }
            }
            else if (event.propertyName === 'height' || event.propertyName === 'padding') {
                if (influencerSection.classList.contains('hover')) {
                    influencerSection.classList.add('active');
                }
                if (patronSection.classList.contains('hover')) {
                    patronSection.classList.add('active');
                }
            }
        }

        influencerSection.addEventListener('mouseenter', () => {
            influencerSection.classList.add('hover');
            influencerSection.classList.remove('active');
        });

        influencerSection.addEventListener('mouseleave', () => {
            influencerSection.classList.remove('hover');
            influencerSection.classList.remove('active');
        });

        patronSection.addEventListener('mouseenter', () => {
            patronSection.classList.add('hover');
            patronSection.classList.remove('active');
        });

        patronSection.addEventListener('mouseleave', () => {
            patronSection.classList.remove('hover');
            patronSection.classList.remove('active');
        });

        influencerSection.addEventListener('transitionend', handleTransitionEnd);
        patronSection.addEventListener('transitionend', handleTransitionEnd);
    }
});