var d3b0rahBContainersActive = null;

function setUpDBContainers() {
  const dbContainers = document.querySelectorAll(".db-image-with-text__container");
  const dbContainersLinkBar = document.querySelector(".db-image-with-text__link_bar");

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

      if (dbContainersLinkBar) {
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.classList.add("button", "db-image-with-text__button");
        link.innerHTML = value.querySelector(".db-image-with-text__heading").innerHTML;
        link.addEventListener('click', function (event) {
          event.preventDefault();
          value.scrollIntoView({ behavior: 'smooth' });
        });

        dbContainersLinkBar.append(link)
      }
    } else {
      dbButton.addEventListener('click', function (event) {
        event.preventDefault();
        nextDBContainer.scrollIntoView({ behavior: 'smooth' });
      });

      if (dbContainersLinkBar) {
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.classList.add("button", "db-image-with-text__button");
        link.innerHTML = value.querySelector(".db-image-with-text__heading").innerHTML;
        link.addEventListener('click', function (event) {
          event.preventDefault();
          value.scrollIntoView({ behavior: 'smooth' });
        });

        dbContainersLinkBar.append(link)
      }
    }
  }

  return d3b0rahBContainersActive = true;
}

function sizeDBContainers() {
  const isLargeScreen = window.matchMedia("(min-width: 990px)");
  const dbContainers = document.querySelectorAll(".db-image-with-text__container");

  if (isLargeScreen.matches) {
    for (const container of dbContainers) {
      sizeDBContainer(container);
    }
  } else {
    for (const container of dbContainers) {
      container.style = maxHeight = "none";
    }
  }
}

function DBContainerImageClass(dbcontainer) {
  const dbImageContent = dbcontainer.querySelector(".db-image-with-text__image");
  const dbImage = dbcontainer.querySelector("img");
  const dbImageOrientation = (dbImage.offsetHeight > dbImage.offsetWidth) ? "portrait" : "landscape";

  return dbImageContent.classList.add(dbImageOrientation);
}

function sizeDBContainer(dbcontainer) {
  const dbContent = dbcontainer.querySelector(".db-image-with-text__content");
  const dbContentHeight = dbContent.offsetHeight;

  DBContainerImageClass(dbcontainer);

  return dbcontainer.style.height = dbContentHeight + 400 + "px";
}

document.addEventListener('DOMContentLoaded', () => {
  if (!d3b0rahBContainersActive) {
    setUpDBContainers();
    sizeDBContainers();
  }
});

window.addEventListener('resize', () => {
  sizeDBContainers();
});
