// Get City, Country,IP

fetch("https://extreme-ip-lookup.com/json/?key=demo")
  .then((res) => res.json())
  .then((response) => {
    sessionStorage.setItem("Country", response.country);
    sessionStorage.setItem("City", response.city);
    sessionStorage.setItem("ISP", response.isp);
    sessionStorage.setItem("Region", response.region);
    sessionStorage.setItem("IPType", response.ipType);
    sessionStorage.setItem("IPadrs", response.query);
  })
  .catch((data, status) => {
    console.log("Request failed");
  });

setTimeout(function () {
  !(function (e, t, n, o, p, i, a) {
    e[o] ||
      (((p = e[o] =
        function () {
          p.process ? p.process.apply(p, arguments) : p.queue.push(arguments);
        }).queue = []),
      (p.t = +new Date()),
      ((i = t.createElement(n)).async = 1),
      (i.src =
        "https://rediads.com/code/Redias_Pixel/dist/openpixel.js?" +
        864e5 * Math.ceil(new Date() / 864e5)),
      (a = t.getElementsByTagName(n)[0]).parentNode.insertBefore(i, a));
  })(window, document, "script", "opix"),
    opix("init", returnDomainUrl()),
    opix("event", "pageload");

  function returnDomainUrl() {
    return window.location.hostname;
  }
}, 3000);

//Click tracking
click_count = 0;
document.addEventListener("click", function () {
  click_count = click_count + 1;
  sessionStorage.setItem("clicks", click_count);
});
setTimeout(() => {
  opix("event", "Click", click_count);
}, 10000);
