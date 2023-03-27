function ambientModeTurnOff () {
    
    const ambientModeSwitch = document.getElementsByClassName('ytp-menuitem')[0]

    if( (ambientModeSwitch.hasAttribute('aria-checked')) && (ambientModeSwitch.getAttribute('aria-checked') === "true") ){      
            ambientModeSwitch.click()
            setTimeout(ambientModeTurnOff, 100)
        } 
    }

function main() {

    if (window.location.pathname !== "/watch"){
         return
    }

    document.getElementsByClassName('ytp-settings-button')[0].click()
    document.getElementsByClassName('ytp-settings-button')[0].click()
    setTimeout(ambientModeTurnOff, 100)
}

(document || window).addEventListener("yt-navigate-finish", main, true);

