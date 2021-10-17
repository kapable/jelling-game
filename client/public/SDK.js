let ShowPopup = false;

const onPopupBtnClick = () => {
    ShowPopup = !ShowPopup;
    popupDiv(ShowPopup);
};

function defaultBtn() {
    const popupBtnDiv = document.createElement("div");
    const popupBtn = document.createElement("button");

    popupBtnDiv.classList.add("popup-btn-div");
    popupBtn.classList.add("popup-btn");

    popupBtnDiv.appendChild(popupBtn);
    popupBtn.innerText = "Pop UP BTN!";
    popupBtn.addEventListener("click", onPopupBtnClick)

    document.body.appendChild(popupBtn);
};

function popupDiv(isShow) {
    if (isShow) {
        const popup = document.createElement("div");
    const popupInner = document.createElement("div");
    const popupHead = document.createElement("h1");
    const closeBtn = document.createElement("button");
    const adsIns = document.createElement("ins");

    popup.classList.add("popup");
    popupInner.classList.add("popup-inner");
    popupHead.classList.add("popup-head");
    adsIns.classList.add("adsbygoogle");

    popupHead.innerText = "POP UP!"
    closeBtn.innerText = "닫기"

    adsIns.style.display = "inline-block";
    adsIns.style.width = "300px";
    adsIns.style.height = "300px";

    const client = document.createAttribute("data-ad-client");
    const slot = document.createAttribute("data-ad-slot");

    client.value = "ca-pub-3646750237820161";
    slot.value = "2904379914";

    adsIns.setAttributeNode(client);
    adsIns.setAttributeNode(slot);

    (adsbygoogle = window.adsbygoogle || []).push({});

    popup.appendChild(popupInner);
    popupInner.appendChild(popupHead);
    popupInner.appendChild(adsIns);
    popupInner.appendChild(closeBtn);

    closeBtn.addEventListener("click", onPopupBtnClick);

    document.body.appendChild(popup);
    } else {
        document.body.removeChild(document.querySelector(".popup"));
    }
    
}

function init() {
    defaultBtn();
};

init();