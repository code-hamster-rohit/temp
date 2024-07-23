function getHandleAll(className) {
  return document.querySelectorAll("." + className);
}

if (window.innerWidth > 1200) {
  const sectionOptions = getHandleAll("about-us-option");
  const subOptions = getHandleAll("about-us-option-description");
  sectionOptions.forEach((option) => {
    option.addEventListener("click", () => {
      sectionOptions.forEach((opt) => opt.classList.remove("about-us-active"));
      option.classList.add("about-us-active");
      subOptions.forEach((subOption) => {
        if (subOption.classList.contains(option.id)) {
          subOption.classList.remove("hidden");
        } else {
          subOption.classList.add("hidden");
        }
      });
    });
  });
} else {
  const aboutUsFooter = document.querySelector(".about-us-footer");
  aboutUsFooter.innerHTML = `
    <div class="about-us-footer">
        <div class="about-us-container-footer">
            <div class="about-us-footer-title">
                WHAT WE DO
            </div>
            <div class="about-us-footer-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, accusamus? Ut amet voluptas commodi quas sed vero, id
              atque. Aut, nemo tempore quidem veniam iste ab maxime vitae!
              Animi, iure?
            </div>
            <div class="about-us-footer-links">
                <a href="#">Influencer ? Know More <i class="bx bx-right-arrow-alt"></i></a>
                <a href="#">Collaborator ? Know More <i class="bx bx-right-arrow-alt"></i></a>
            </div>
        </div>
        <div class="about-us-container-footer">
            <div class="about-us-footer-title">
                WHY US
            </div>
            <div class="about-us-footer-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, accusamus? Ut amet voluptas commodi quas sed vero, id
              atque. Aut, nemo tempore quidem veniam iste ab maxime vitae!
              Animi, iure?
            </div>
            <div class="about-us-footer-links">
                <div class="additional-btn">
                    <button type="button">Know More <i class="bx bx-right-arrow-alt"></i></button>
                </div>
            </div>
        </div>
        <div class="about-us-container-footer">
            <div class="about-us-footer-title">
                OUR GUIDELINES
            </div>
            <div class="about-us-footer-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Possimus, accusamus? Ut amet voluptas commodi quas sed vero, id
              atque. Aut, nemo tempore quidem veniam iste ab maxime vitae!
              Animi, iure?
            </div>
            <div class="about-us-footer-links">
                <div class="additional-btn">
                    <button type="button">Know More <i class="bx bx-right-arrow-alt"></i></button>
                </div>
            </div>
        </div>
    </div>`;
}
