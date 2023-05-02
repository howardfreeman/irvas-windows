const tabs = () => {
    const bindTabsToContent = (
        headerSelector,
        tabSelector,
        contentSelector,
        activeClass,
        tabLinkSelector
    ) => {
        const header = document.querySelector(headerSelector);
        const tabs = header.querySelectorAll(tabSelector);
        const tabLinks = header.querySelectorAll(tabLinkSelector);
        const contentBlocks = document.querySelectorAll(contentSelector);

        const hideTabContent = () => {
            tabLinks.forEach((link) => {
                link.classList.remove(activeClass);
            });

            contentBlocks.forEach((block) => {
                block.style.display = "none";
            });
        };

        const showTabContent = (tabIndex = 0) => {
            tabLinks[tabIndex].classList.add(activeClass);
            contentBlocks[tabIndex].style.display = "block";
        };

        hideTabContent();
        showTabContent();

        header.addEventListener("click", (e) => {
            const target = e.target;

            if (
                target &&
                (target.classList.contains(tabSelector.replace(/\./, "")) ||
                    target.parentNode.classList.contains(
                        tabSelector.replace(/\./, "")
                    ))
            ) {
                tabs.forEach((tab, index) => {
                    if (target === tab || target.parentNode === tab) {
                        hideTabContent();
                        showTabContent(index);
                    }
                });
            }
        });
    };

    bindTabsToContent(
        ".glazing_slider",
        ".glazing_block",
        ".glazing_content",
        "active",
        ".glazing_block a"
    );

    bindTabsToContent(
        ".decoration_slider",
        ".no_click",
        ".decoration_content > div > div",
        "after_click",
        ".no_click"
    );
};

export default tabs;
