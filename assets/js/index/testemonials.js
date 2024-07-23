function getHandle(className) {
  return document.querySelector("." + className);
}

function getHandleAll(className) {
  return document.querySelectorAll("." + className);
}

function directionArrowClick(direction, testemonials, length) {
  const testemonialIndex = getHandle("testemonial-index-count");
  let index = Number.parseInt(testemonialIndex.textContent);
  if (direction === "left") {
    if (index > 0) index--;
    else index = length - 1;
  } else if (direction === "right") {
    if (index < length - 1) index++;
    else index = 0;
  }
  testemonialIndex.textContent = index;
  fillTestemonials(testemonials, index);
}

function fillTestemonials(testemonials, index) {
  const testemonialForm = getHandle("testemonial-description-container");
  testemonialForm.textContent = testemonials[index][0];
  const testemonialAuthor = getHandle("author-name");
  testemonialAuthor.textContent = testemonials[index][1];
  const testemonialOffice = getHandle("author-office");
  testemonialOffice.textContent = testemonials[index][2];
}

const testemonials = [
  [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis praesentium iure accusamus laboriosam officiis, rerum dicta! Cumque blanditiis similique ipsa, debitis eos consequuntur. Corrupti sapiente aspernatur veritatis tempora ipsum!",
    "John Doe",
    "CEO, XYZ Pvt. Ltd.",
  ],
  [
    "Sit amet consectetur adipisicing elit. Numquam omnis praesentium iure accusamus laboriosam officiis, rerum dicta! Cumque blanditiis similique ipsa, debitis eos consequuntur. Corrupti sapiente aspernatur veritatis tempora ipsum!",
    "Jane Doe",
    "CTO, XYZ Pvt. Ltd.",
  ],
];

if (window.innerWidth > 800) {
  const movementArrow = getHandleAll("movement-arrow");
  movementArrow.forEach((arrow) =>
    arrow.addEventListener("click", (event) => {
      directionArrowClick(event.target.id, testemonials, testemonials.length);
    })
  );

  fillTestemonials(testemonials, 0);

  // Touch and Mouse event handlers
  let touchStartX = 0;
  let touchEndX = 0;
  let isDragging = false;

  function handleGesture() {
    if (touchEndX < touchStartX)
      directionArrowClick("right", testemonials, testemonials.length);
    if (touchEndX > touchStartX)
      directionArrowClick("left", testemonials, testemonials.length);
  }

  const testimonialElement = document.getElementById("testimonials");

  // Touch events
  testimonialElement.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
  });

  testimonialElement.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleGesture();
  });

  // Mouse events
  testimonialElement.addEventListener("mousedown", (event) => {
    touchStartX = event.screenX;
    isDragging = true;
  });

  testimonialElement.addEventListener("mouseup", (event) => {
    if (isDragging) {
      touchEndX = event.screenX;
      handleGesture();
      isDragging = false;
    }
  });

  testimonialElement.addEventListener("mouseleave", (event) => {
    if (isDragging) {
      touchEndX = event.screenX;
      handleGesture();
      isDragging = false;
    }
  });

  testimonialElement.addEventListener("mousemove", (event) => {
    if (isDragging) {
      touchEndX = event.screenX;
    }
  });
} else {
  const testemonialContainer = getHandle("testimonials-container");
  testemonialContainer.innerHTML = `
    <div class="testemonial-body">
        <div class="testemonial-body-description" id="testemonials">
            <div class="quotes">
                <i class="bx bxs-quote-left"></i>
            </div>
            <div class="testemonial-description-container"></div>
            <div class="quotes right">
                <i class="bx bxs-quote-right"></i>
            </div>
        </div>
        <div class="testemonial-credits">
            &mdash; <span class="author-name"></span>,&nbsp;<span class="author-office"></span>
        </div>
        <div class="testemonial-arrows">
            <div class="movement-arrow" id="left">
                <i class="bx bx-chevron-left" id="left"></i>
            </div>
            <div class="movement-arrow" id="right">
                <i class="bx bx-chevron-right" id="right"></i>
            </div>
        </div>
        <div class="testemonial-index-count hidden" id="0">0</div>
    </div>
    `;

    const movementArrow = getHandleAll("movement-arrow");
    movementArrow.forEach((arrow) =>
      arrow.addEventListener("click", (event) => {
        directionArrowClick(event.target.id, testemonials, testemonials.length);
      })
    );

    fillTestemonials(testemonials, 0);

    // Touch and Mouse event handlers
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;

    function handleGesture() {
      if (touchEndX < touchStartX)
        directionArrowClick("right", testemonials, testemonials.length);
      if (touchEndX > touchStartX)
        directionArrowClick("left", testemonials, testemonials.length);
    }
    document.addEventListener("DOMContentLoaded", () => {
        const testimonialElement = document.getElementById("testemonials");

        // Touch events
        testimonialElement.addEventListener("touchstart", (event) => {
        touchStartX = event.changedTouches[0].screenX;
        });

        testimonialElement.addEventListener("touchend", (event) => {
            touchEndX = event.changedTouches[0].screenX;
            handleGesture();
        });

        // Mouse events
        testimonialElement.addEventListener("mousedown", (event) => {
            touchStartX = event.screenX;
            isDragging = true;
        });

        testimonialElement.addEventListener("mouseup", (event) => {
            if (isDragging) {
                touchEndX = event.screenX;
                handleGesture();
                isDragging = false;
            }
        });

        testimonialElement.addEventListener("mouseleave", (event) => {
            if (isDragging) {
                touchEndX = event.screenX;
                handleGesture();
                isDragging = false;
            }
        });

        testimonialElement.addEventListener("mousemove", (event) => {
            if (isDragging) {
                touchEndX = event.screenX;
            }
        });
    });
}
