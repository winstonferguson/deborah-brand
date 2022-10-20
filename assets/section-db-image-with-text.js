var d3b0rahBContainersActive = false;

function setUpDBContainers() {
  const dbContainers = document.querySelectorAll(".db-image-with-text__container");

  if (dbContainers.length === 0) return;

  for (const [index, value] of dbContainers.entries()) {
    const dbButton = value.querySelector(".button");
    const nextDBContainer = dbContainers[index + 1] || null;
    const nextDBContainerHeadingText = nextDBContainer ? nextDBContainer.querySelector(".db-image-with-text__heading").innerHTML : null;

    dbButton.innerHTML = nextDBContainerHeadingText || "top";

    if (dbButton.innerHTML === "top") {
      dbButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' })
      });
    } else {
      dbButton.addEventListener('click', function (event) {
        event.preventDefault();
        nextDBContainer.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  return d3b0rahBContainersActive = true;
}

document.addEventListener('DOMContentLoaded', () => {
  if (!d3b0rahBContainersActive) setUpDBContainers();
});
