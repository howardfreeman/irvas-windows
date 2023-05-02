const modals = () => {
    const bindTriggerToModal = (
        triggerSelector,
        modalSelector,
        closeSelector,
        timerID
    ) => {
        const triggers = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = modal.querySelector(closeSelector);

        triggers.forEach((trigger) => {
            trigger.addEventListener("click", (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                if (timerID) {
                    clearTimeout(timerID);
                }

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });

        close.addEventListener("click", () => {
            modal.style.display = "";
            document.body.style.overflow = "";
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "";
                document.body.style.overflow = "";
            }
        });
    };

    const showModalOnTime = (modalSelector) => {
        return setTimeout(() => {
            document.querySelector(modalSelector).style.display = "block";
            document.body.style.overflow = "hidden";
        }, 6e4);
    };

    bindTriggerToModal(
        ".popup_engineer_btn",
        ".popup_engineer",
        ".popup_close"
    );

    const timerID = showModalOnTime(".popup");

    bindTriggerToModal(".phone_link", ".popup", ".popup_close", timerID);
};

export default modals;
