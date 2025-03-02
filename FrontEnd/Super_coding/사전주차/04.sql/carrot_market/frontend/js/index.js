const renderData = (data) => {
  const main = document.querySelector("main");
  data.forEach((obj) => {
    const Div = document.createElement("div");
    Div.className = "item-list";

    const ImgDiv = document.createElement("div");
    ImgDiv.className = "item-list__img";

    const img = document.createElement("img");
    img.src = "../assets/photo.svg";

    const InfoDiv = document.createElement("div");
    InfoDiv.className = "item-list__info";

    const InfoTitleDiv = document.createElement("div");
    InfoTitleDiv.className = "item-list__info-title";
    InfoTitleDiv.innerText = obj.title;

    const InfoMetaDiv = document.createElement("div");
    InfoMetaDiv.className = "item-list__info-meta";
    InfoMetaDiv.innerText = obj.place;

    const InfoPriceDiv = document.createElement("div");
    InfoPriceDiv.className = "item-list__info-price";
    InfoPriceDiv.innerText = obj.price;

    ImgDiv.appendChild(img);
    InfoDiv.appendChild(InfoTitleDiv);
    InfoDiv.appendChild(InfoMetaDiv);
    InfoDiv.appendChild(InfoPriceDiv);
    Div.appendChild(ImgDiv);
    Div.appendChild(InfoDiv);
    main.append(Div);
  })
}

const fetchList = async () => {
  const res = await fetch("/items");
  const data = await res.json();
  renderData(data);
}

fetchList();
