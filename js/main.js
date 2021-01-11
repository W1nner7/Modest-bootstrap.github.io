$(document).ready(function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 3,
    gap: 0,
    padding: 0,
    autoWidth: true,
    pagination: false,
    arrowPath: "0",
    // arrows: false,
    // width: "50%",
  }).mount();
});
