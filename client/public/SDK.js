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
        const closeBtn = document.createElement("button");
        const adsIns = document.createElement("ins");
        const navMenu = document.querySelector(".navMenu");

        popup.classList.add("popup");
        popupInner.classList.add("popup-inner");
        adsIns.classList.add("adsbygoogle");

        closeBtn.innerText = "X"

        popup.style.position = "fixed";
		popup.style.width = "100%";
		popup.style.height = "100%";
		popup.style.backgroundColor = "rgba(0,0,0,0.5)";
		popup.style.top = "0";
		popup.style.left = "0";
		popup.style.right = "0";
		popup.style.bottom = "0";
		popup.style.margin = "auto";
        popup.style.zIndex = "2";
		
        const popupInnerBorder = "4%";
		popupInner.style.position = "absolute";
        
		popupInner.style.top = popupInnerBorder;
        popupInner.style.left = "50%";
        popupInner.style.transform = "translate(-50%, 0%)";
		popupInner.style.margin = "auto";
		popupInner.style.background = "rgba(0,0,0,0)";
        popupInner.style.zIndex = "1";

        closeBtn.style.position = 'block';
        closeBtn.style.fontSize = "1rem";
        closeBtn.style.zIndex = "0";
        closeBtn.style.background = 'rgba(0,0,0,0)';
        closeBtn.style.border = "none";
        closeBtn.style.color = 'white';

        adsIns.style.display = "block";
        adsIns.style.zIndex = "0";
        adsIns.style.justifyContent = "center";
        adsIns.style.alignItems = "center";
        adsIns.style.width = "300px";
        adsIns.style.height = "550px"

        navMenu.style.zIndex = "-10";

        const client = document.createAttribute("data-ad-client");
        const slot = document.createAttribute("data-ad-slot");

        client.value = "ca-pub-3646750237820161";
        slot.value = "2904379914";

        adsIns.setAttributeNode(client);
        adsIns.setAttributeNode(slot);

        popup.appendChild(popupInner);
        popupInner.appendChild(closeBtn);
        popupInner.appendChild(adsIns);

        closeBtn.addEventListener("click", onPopupBtnClick);

        const adsByGoogle = document.querySelector(".adsbygoogle");
        if(adsByGoogle) {
            popupInner.style.maxWidth = adsByGoogle.style.width;
        }

        document.body.appendChild(popup);
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    } else {
        const navMenu = document.querySelector(".navMenu");
        navMenu.style.zIndex = "0";
        document.body.removeChild(document.querySelector(".popup"));
    }
    
}

function init() {
    defaultBtn();
};

init();