document.addEventListener('DOMContentLoaded', function () {
    var searchWrapper = document.querySelector('.search-wrapper');
    var searchButton = document.querySelector('.search-icon');
    var searchInput = document.querySelector('.search-input');
    var searchButtonMobile = document.querySelector('.search-icon-mobile');
    var searchInputMobile = document.querySelector('.search-input-mobile');
    searchButton.addEventListener('mouseover', function () {
        searchWrapper.classList.add('active');
    });
    document.body.addEventListener('click', function (event) {
        if (!searchWrapper.contains(event.target)) {
            searchWrapper.classList.remove('active');
        }
    });
    var button_404_page = document.getElementById('goToHomepage');
    if (button_404_page) {
        button_404_page.onclick = function () {
            window.location.href = '/';
        };
    }
    ConvertHeaderCategoryToSpan();
    HoverLogoAnimation();
    HoverArticleBorderOutside();
    HoverAnimationSVGPaths();
    NavigtionArticleWrapper();
    Animation404Page();
    initializeEmailyardSubscription();
});
window.addEventListener('load', function () {
    HeaderCategoryAnimation();
    HoverAnimationSubscribeFooter();
});

function PathStretcher(path) {
    if (typeof path === 'undefined' || path === null) {
        return null;
    }
    let rect = path.getBoundingClientRect()
    let centerX = rect.x + rect.width / 2
    window.addEventListener('resize', () => {
        rect = path.getBoundingClientRect()
        centerX = rect.x + rect.width / 2
    })
    const gsapTo = gsap.to(path, {paused: true, scaleY: 1.25, transformOrigin: "center center", ease: 'Power1.easeIn'})
    return function animate(clientX) {
        const distance = Math.abs(clientX - centerX);
        const maxDistance = rect.width * 2.3;
        const progress = 1 - Math.min(distance / maxDistance, 1);
        gsapTo.progress(progress);
    };
}

function HoverAnimationSVGPaths() {
    const webElement = document.getElementById('web');
    if (!webElement) return;
    const oldInstance = webElement.hoverAnimationInstance;
    if (oldInstance) {
        webElement.removeEventListener('mousemove', oldInstance.mousemoveHandler);
        webElement.removeEventListener('mouseleave', oldInstance.mouseleaveHandler);
        webElement.removeEventListener('touchmove', oldInstance.touchmoveHandler);
        webElement.removeEventListener('touchend', oldInstance.touchendHandler);
    }
    const paths = Array.from(webElement.querySelectorAll('path[id^="path_"]'));
    const pathStretchers = paths.map(PathStretcher).filter(Boolean);

    function mousemoveHandler(e) {
        const clientX = e.clientX;
        pathStretchers.forEach(stretcher => stretcher(clientX));
    }

    function mouseleaveHandler() {
        pathStretchers.forEach(stretcher => stretcher(-1000));
    }

    function touchmoveHandler(e) {
        e.preventDefault();
        const clientX = e.touches[0].clientX;
        pathStretchers.forEach(stretcher => stretcher(clientX));
    }

    function touchendHandler() {
        pathStretchers.forEach(stretcher => stretcher(-1000));
    }

    webElement.addEventListener('mousemove', mousemoveHandler);
    webElement.addEventListener('mouseleave', mouseleaveHandler);
    webElement.addEventListener('touchmove', touchmoveHandler, {passive: false});
    webElement.addEventListener('touchend', touchendHandler);
    webElement.hoverAnimationInstance = {mousemoveHandler, mouseleaveHandler, touchmoveHandler, touchendHandler};
}

function createTextStretcher(span, index, spansSubscribeFooter) {
    const originalChar = span.textContent.toUpperCase();
    span.textContent = originalChar;
    let rect = span.getBoundingClientRect();
    let centerX = rect.x + rect.width / 2;
    window.addEventListener('resize', () => {
        rect = span.getBoundingClientRect();
        centerX = rect.x + rect.width / 2;
    });
    const gsapTo = gsap.to(span, {paused: true, scaleY: 1.5, transformOrigin: "center center", ease: "Power1.easeIn"});
    return function animate(clientX) {
        const distance = Math.abs(clientX - centerX);
        const maxDistance = rect.width * 2.2;
        const progress = 1 - Math.min(distance / maxDistance, 1);
        gsapTo.progress(progress);
    };
}

function HoverAnimationSubscribeFooter() {
    const footerElement = document.getElementById('subscribe-footer-new');
    if (!footerElement) return;
    const oldInstance = footerElement.hoverAnimationInstance;
    if (oldInstance) {
        footerElement.removeEventListener('mousemove', oldInstance.mousemoveHandler);
        footerElement.removeEventListener('mouseleave', oldInstance.mouseleaveHandler);
        footerElement.removeEventListener('touchmove', oldInstance.touchmoveHandler);
        footerElement.removeEventListener('touchend', oldInstance.touchendHandler);
    }
    let spansSubscribeFooter = Array.from(footerElement.querySelectorAll('span'));
    let textStretchersFooter = spansSubscribeFooter.map(createTextStretcher);

    function mousemoveHandler(e) {
        const rect = footerElement.getBoundingClientRect();
        const clientX = e.clientX;
        textStretchersFooter.forEach(stretcher => stretcher(clientX));
    }

    function mouseleaveHandler() {
        textStretchersFooter.forEach(stretcher => stretcher(-1000));
    }

    function touchmoveHandler(e) {
        e.preventDefault();
        const clientX = e.touches[0].clientX;
        textStretchersFooter.forEach(stretcher => stretcher(clientX));
    }

    function touchendHandler() {
        textStretchersFooter.forEach(stretcher => stretcher(-1000));
    }

    footerElement.addEventListener('mousemove', mousemoveHandler);
    footerElement.addEventListener('mouseleave', mouseleaveHandler);
    footerElement.addEventListener('touchmove', touchmoveHandler, {passive: false});
    footerElement.addEventListener('touchend', touchendHandler);
    footerElement.hoverAnimationInstance = {mousemoveHandler, mouseleaveHandler, touchmoveHandler, touchendHandler};
}

function createTextStretcherHeader(span, index, spansHeaderCategoryAnimation) {
    const originalChar = span.textContent.toUpperCase();
    span.textContent = originalChar;
    let rect = span.getBoundingClientRect();
    let centerX = rect.x + rect.width / 2;
    window.addEventListener('resize', () => {
        rect = span.getBoundingClientRect();
        centerX = rect.x + rect.width / 2;
    });
    const gsapTo = gsap.to(span, {
        paused: true,
        scaleY: 1.5,
        scaleX: 1.1,
        transformOrigin: "center",
        ease: "Power1.easeIn"
    });
    return function animate(clientX) {
        const distance = Math.abs(clientX - centerX);
        const maxDistance = rect.width * 2.2;
        const progress = 1 - Math.min(distance / maxDistance, 1);
        gsapTo.progress(progress);
    };
}

function ConvertHeaderCategoryToSpan() {
    const h2HeaderCategory = document.getElementById('header-category-animation');
    if (h2HeaderCategory) {
        // Зчитати лише текстовий вміст (без span-ів)
        const plainText = h2HeaderCategory.textContent.trim();

        // Якщо вже обгорнуто в span-и — нічого не робимо
        if ([...h2HeaderCategory.childNodes].every(node => node.nodeType === 1 && node.tagName === 'SPAN')) {
            return;
        }

        h2HeaderCategory.innerHTML = ''; // очистка

        plainText.split('').forEach((char) => {
            const span = document.createElement('span');
            span.classList.add('text-neon', 'uppercase');
            if (char === ' ') {
                span.classList.add('plr-2');
            }
            span.textContent = char;
            h2HeaderCategory.appendChild(span);
        });
    }
}

function HeaderCategoryAnimation() {
    const h2HeaderCategory = document.getElementById('header-category-animation');
    if (h2HeaderCategory) {
        const spans = Array.from(h2HeaderCategory.querySelectorAll('span'));
        const stretchers = spans.map(createTextStretcherHeader);

        const handleMove = (clientX) => {
            stretchers.forEach(stretcher => stretcher(clientX));
        };

        h2HeaderCategory.addEventListener('mousemove', e => {
            handleMove(e.clientX);
        });

        h2HeaderCategory.addEventListener('touchmove', e => {
            e.preventDefault();
            handleMove(e.touches[0].clientX);
        });

        const reset = () => handleMove(-1000);

        h2HeaderCategory.addEventListener('mouseleave', reset);
        h2HeaderCategory.addEventListener('touchend', reset);
    }
}


function HoverLogoAnimation() {
    const logo = document.getElementById('logo');
    const elements = logo.querySelectorAll('.svg-elem-1, .svg-elem-2, .svg-elem-3');
    const tl = gsap.timeline({paused: true});
    tl.to(elements, {
        fill: 'transparent',
        duration: 0.1,
        stagger: {each: 0.1, from: "end"}
    }).to(elements, {
        fill: (index) => ['rgb(228, 254, 90)', 'rgb(239, 31, 162)', 'rgb(118, 61, 181)'][index],
        duration: 0.1,
        stagger: {each: 0.1, from: "end"}
    });
    logo.addEventListener('mouseenter', () => tl.play());
    logo.addEventListener('mouseleave', () => tl.reverse());
}

function setupArticleAnimation(article) {
    const border = article.querySelectorAll('.article-box-border');
    const insideBorder = article.querySelectorAll('.article-box-inside-border');
    const defaultValues = {width: '100%', height: '100%', left: '0', top: '0', borderRadius: '1.5rem'};
    gsap.set(border, {'z-index': '-1'});
    gsap.set(insideBorder, defaultValues);
    const tl = gsap.timeline({paused: true});
    tl.to(border, {'z-index': '1', duration: 0.001, ease: "Power1.easeInOut"});
    tl.to(insideBorder, {
        'width': 'calc(100% - 0.7rem)',
        'height': 'calc(100% - 0.7rem)',
        'left': '0.35rem',
        'top': '0.35rem',
        'border-radius': '1.25rem',
        duration: 0.2,
        ease: "Power1.easeInOut"
    });
    article.addEventListener('mouseenter', () => tl.play());
    article.addEventListener('mouseleave', () => {
        tl.reverse();
        gsap.to(insideBorder, {
            ...defaultValues, duration: 0.2, ease: "Power1.easeInOut", onComplete: () => {
                gsap.set(border, {'z-index': '-1'});
            }
        });
    });
}

function HoverArticleBorderOutside() {
    const articles = document.querySelectorAll('article');
    articles.forEach(setupArticleAnimation);
}

(function () {
    if (window.menuAnimationInitialized) return;
    window.menuAnimationInitialized = true;
    const icon_1 = document.getElementById("b1");
    const topLine_1 = document.getElementById("top-line-1");
    const middleLine_1 = document.getElementById("middle-line-1");
    const bottomLine_1 = document.getElementById("bottom-line-1");
    navMobiles = document.querySelector('.nav-mobiles');
    let state_1 = "menu";
    let currentFrame_1 = 1;
    const segmentDuration_1 = 15;
    const menuDisappearDurationInFrames_1 = segmentDuration_1;
    const arrowAppearDurationInFrames_1 = segmentDuration_1;
    const arrowDisappearDurationInFrames_1 = segmentDuration_1;
    const menuAppearDurationInFrames_1 = segmentDuration_1;
    let menuDisappearComplete_1 = false;
    let arrowAppearComplete_1 = false;
    let arrowDisappearComplete_1 = false;
    let menuAppearComplete_1 = false;
    let topLineY_1, middleLineY_1, bottomLineY_1;
    let topLeftY_1, topRightY_1, bottomLeftY_1, bottomRightY_1;
    let topLeftX_1, topRightX_1, bottomLeftX_1, bottomRightX_1;

    function resetAnimationStates() {
        menuDisappearComplete_1 = false;
        arrowAppearComplete_1 = false;
        arrowDisappearComplete_1 = false;
        menuAppearComplete_1 = false;
        currentFrame_1 = 1;
    }

    function menuDisappearAnimation_1() {
        currentFrame_1++;
        if (currentFrame_1 <= menuDisappearDurationInFrames_1) {
            window.requestAnimationFrame(() => {
                topLineY_1 = AJS.easeInBack(37, 50, menuDisappearDurationInFrames_1, currentFrame_1);
                topLine_1.setAttribute("d", "M30," + topLineY_1 + " L70," + topLineY_1);
                middleLineY_1 = AJS.easeInBack(50, 50, menuDisappearDurationInFrames_1, currentFrame_1);
                middleLine_1.setAttribute("d", "M30," + middleLineY_1 + " L70," + middleLineY_1);
                bottomLineY_1 = AJS.easeInBack(63, 50, menuDisappearDurationInFrames_1, currentFrame_1);
                bottomLine_1.setAttribute("d", "M30," + bottomLineY_1 + " L70," + bottomLineY_1);
                menuDisappearAnimation_1();
            });
        } else {
            middleLine_1.style.opacity = "0";
            currentFrame_1 = 1;
            menuDisappearComplete_1 = true;
            openMenuAnimation_1();
        }
    }

    function arrowAppearAnimation_1() {
        currentFrame_1++;
        if (currentFrame_1 <= arrowAppearDurationInFrames_1) {
            window.requestAnimationFrame(() => {
                topLeftX_1 = AJS.easeOutBack(30, 35, arrowAppearDurationInFrames_1, currentFrame_1);
                topLeftY_1 = AJS.easeOutBack(50, 35, arrowAppearDurationInFrames_1, currentFrame_1);
                bottomRightX_1 = AJS.easeOutBack(70, 65, arrowAppearDurationInFrames_1, currentFrame_1);
                bottomRightY_1 = AJS.easeOutBack(50, 65, arrowAppearDurationInFrames_1, currentFrame_1);
                topLine_1.setAttribute("d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1);
                bottomLeftX_1 = AJS.easeOutBack(30, 35, arrowAppearDurationInFrames_1, currentFrame_1);
                bottomLeftY_1 = AJS.easeOutBack(50, 65, arrowAppearDurationInFrames_1, currentFrame_1);
                topRightX_1 = AJS.easeOutBack(70, 65, arrowAppearDurationInFrames_1, currentFrame_1);
                topRightY_1 = AJS.easeOutBack(50, 35, arrowAppearDurationInFrames_1, currentFrame_1);
                bottomLine_1.setAttribute("d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1);
                arrowAppearAnimation_1();
            });
        } else {
            currentFrame_1 = 1;
            arrowAppearComplete_1 = true;
            openMenuAnimation_1();
        }
    }

    function arrowDisappearAnimation_1() {
        currentFrame_1++;
        if (currentFrame_1 <= arrowDisappearDurationInFrames_1) {
            window.requestAnimationFrame(() => {
                topLeftX_1 = AJS.easeInBack(35, 30, arrowDisappearDurationInFrames_1, currentFrame_1);
                topLeftY_1 = AJS.easeInBack(35, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
                bottomRightX_1 = AJS.easeInBack(65, 70, arrowDisappearDurationInFrames_1, currentFrame_1);
                bottomRightY_1 = AJS.easeInBack(65, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
                topLine_1.setAttribute("d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1);
                bottomLeftX_1 = AJS.easeInBack(35, 30, arrowDisappearDurationInFrames_1, currentFrame_1);
                bottomLeftY_1 = AJS.easeInBack(65, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
                topRightX_1 = AJS.easeInBack(65, 70, arrowDisappearDurationInFrames_1, currentFrame_1);
                topRightY_1 = AJS.easeInBack(35, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
                bottomLine_1.setAttribute("d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1);
                arrowDisappearAnimation_1();
            });
        } else {
            middleLine_1.style.opacity = "1";
            currentFrame_1 = 1;
            arrowDisappearComplete_1 = true;
            closeMenuAnimation_1();
        }
    }

    function menuAppearAnimation_1() {
        currentFrame_1++;
        if (currentFrame_1 <= menuAppearDurationInFrames_1) {
            window.requestAnimationFrame(() => {
                topLineY_1 = AJS.easeOutBack(50, 37, menuDisappearDurationInFrames_1, currentFrame_1);
                topLine_1.setAttribute("d", "M30," + topLineY_1 + " L70," + topLineY_1);
                bottomLineY_1 = AJS.easeOutBack(50, 63, menuDisappearDurationInFrames_1, currentFrame_1);
                bottomLine_1.setAttribute("d", "M30," + bottomLineY_1 + " L70," + bottomLineY_1);
                menuAppearAnimation_1();
            });
        } else {
            currentFrame_1 = 1;
            menuAppearComplete_1 = true;
            closeMenuAnimation_1();
        }
    }

    function openMenuAnimation_1() {
        if (!menuDisappearComplete_1) {
            menuDisappearAnimation_1();
        } else if (!arrowAppearComplete_1) {
            arrowAppearAnimation_1();
        }
    }

    function closeMenuAnimation_1() {
        if (!arrowDisappearComplete_1) {
            arrowDisappearAnimation_1();
        } else if (!menuAppearComplete_1) {
            menuAppearAnimation_1();
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        const icon_1 = document.querySelector('#icon_1'); // або .icon_1 — залежно від твоєї розмітки
        const navMobiles = document.querySelector('#navMobiles'); // або .navMobiles
        let state_1 = "menu";

        function handleIconClick() {
            resetAnimationStates();

            if (navMobiles.style.display === 'none' || navMobiles.style.display === '') {
                navMobiles.style.display = 'block';
                navMobiles.style.position = 'fixed';
            } else {
                navMobiles.style.display = 'none';
                navMobiles.style.position = 'absolute';
            }

            if (state_1 === "menu") {
                openMenuAnimation_1();
                state_1 = "arrow";
                navMobiles.classList.add('active');
            } else if (state_1 === "arrow") {
                closeMenuAnimation_1();
                state_1 = "menu";
                navMobiles.classList.remove('active');
            }
        }

        if (icon_1 && navMobiles) {
            icon_1.addEventListener('click', handleIconClick);
        } else {
            console.warn('icon_1 або navMobiles не знайдені у DOM');
        }
    });
})();

function NavigtionArticleWrapper() {
    const articles = document.querySelectorAll('.js-article-link');
    articles.forEach(article => {
        article.style.cursor = 'pointer';
        article.addEventListener('click', function (e) {
            if (!e.target.closest('a')) {
                window.location.href = this.getAttribute('data-href');
            }
        });
        article.addEventListener('mousedown', function (e) {
            if (e.detail > 1) {
                e.preventDefault();
            }
        }, false);
    });
}

function Animation404Page() {
    var c = document.getElementById('canv');
    if (c) {
        var $ = c.getContext('2d');
        var ms = false;
        var w = 0, h = 0;

        function resizeCanvas() {
            var maxWidth = 539;
            var maxHeight = 325;
            var aspectRatio = maxWidth / maxHeight;
            var screenWidth = window.innerWidth;
            if (screenWidth < maxWidth) {
                w = screenWidth - 80;
                h = w / aspectRatio;
            } else {
                w = maxWidth;
                h = maxHeight;
            }
            c.width = w;
            c.height = h;
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        var img = new Image();
        img.src = 'https://webdesignerdepot-wp.s3.us-east-2.amazonaws.com/2024/10/01153943/404.png';
        var set = function () {
            var run, _h, _w, dx, a;
            a = 30;
            dx = 0;
            _w = w + 50;
            _h = h + 50;
            return (run = function () {
                var inc, i, j;
                $.clearRect(-a, -a, _w, _h);
                inc = ms === true ? 0.5 : 0.18;
                for (j = 0; j <= h; i = 0 <= h ? ++j : --j) {
                    dx = ~~(inc * (Math.random() - 0.5) * a);
                    $.drawImage(img, 0, i * (img.height / h), img.width, 1, dx, i, w, 1);
                }
                window.requestAnimationFrame(run);
            })();
        };
        img.onload = function () {
            resizeCanvas();
            return set();
        };
        c.addEventListener('mouseover', function () {
            return ms = true;
        }, false);
        c.addEventListener('touchmove', function (e) {
            e.preventDefault();
            return ms = true;
        }, false);
        c.addEventListener('mouseout', function () {
            return ms = false;
        }, false);
        c.addEventListener('touchend', function () {
            return ms = false;
        }, false);
    }
}

function initializeEmailyardSubscription() {
    const form = document.getElementById('emailyard-subscribe-form');
    const emailInput = document.getElementById('emailyard-email');
    const subscribeButton = document.getElementById('emailyard-subscribe-button');
    if (emailInput) {
        emailInput.addEventListener('blur', validateEmailOnBlur);
        emailInput.addEventListener('input', hideSubscribeMessage);
    }
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

function showEmailError(message) {
    const emailError = document.getElementById('emailyard-email-error');
    if (emailError) {
        emailError.textContent = message;
        emailError.classList.remove('hidden');
    }
    hideSubscribeMessage();
}

function hideEmailError() {
    const emailError = document.getElementById('emailyard-email-error');
    if (emailError) {
        emailError.textContent = '';
        emailError.classList.add('hidden');
    }
}

function hideSubscribeMessage() {
    const subscribeMessage = document.getElementById('emailyard-subscribe-message');
    if (subscribeMessage) {
        subscribeMessage.textContent = '';
        subscribeMessage.classList.add('hidden');
    }
}

function setButtonLoading(isLoading) {
    const button = document.getElementById('emailyard-subscribe-button');
    const buttonText = button.querySelector('.button-text');
    if (isLoading) {
        buttonText.textContent = 'Subscribing...';
        button.disabled = true;
    } else {
        buttonText.textContent = 'Subscribe';
        button.disabled = false;
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    const emailInput = document.getElementById('emailyard-email');
    const email = emailInput.value;
    if (!isValidEmail(email)) {
        showEmailError('Please enter a valid email address.');
        return;
    }
    setButtonLoading(true);
    hideEmailError();
    hideSubscribeMessage();
    const nonce = this.querySelector('input[name="emailyard_nonce"]').value;
    submitSubscription(email, nonce);
}

function submitSubscription(email, nonce) {
    fetch(emailyardAjax.ajaxurl, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded',},
        body: 'action=emailyard_subscribe&email=' + encodeURIComponent(email) + '&nonce=' + encodeURIComponent(nonce)
    }).then(response => response.json()).then(handleSubscriptionResponse).catch(handleSubscriptionError).finally(() => setButtonLoading(false));
}

function handleSubscriptionResponse(data) {
    const messageElement = document.getElementById('emailyard-subscribe-message');
    if (messageElement) {
        messageElement.classList.remove('hidden');
        if (data.success) {
            messageElement.textContent = 'Thank you for subscribing!';
            messageElement.style.color = '#e3ff59';
            document.getElementById('emailyard-subscribe-form').reset();
        } else {
            messageElement.textContent = 'Whoops, Something went wrong. Please try again.';
            messageElement.style.color = 'red';
        }
    }
}

function handleSubscriptionError(error) {
    console.error('Error:', error);
    const messageElement = document.getElementById('emailyard-subscribe-message');
    if (messageElement) {
        messageElement.classList.remove('hidden');
        messageElement.textContent = 'An error occurred. Please try again.';
        messageElement.style.color = 'red';
    }
}

function isValidEmail(email) {
    if (email.length === 0) return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showEmailError(message) {
    const emailError = document.getElementById('emailyard-email-error');
    if (emailError) {
        emailError.textContent = message;
        emailError.classList.remove('hidden');
    }
}

function hideEmailError() {
    const emailError = document.getElementById('emailyard-email-error');
    if (emailError) {
        emailError.textContent = '';
        emailError.classList.add('hidden');
    }
}

function validateEmailOnBlur() {
    if (!isValidEmail(this.value)) {
        showEmailError('Please enter a valid email address.');
    } else {
        hideEmailError();
    }
}