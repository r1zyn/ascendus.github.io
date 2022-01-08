export class Util {
    static elementIsInView(element: HTMLElement): boolean {
        const docViewTop: number = window.scrollY;
        const docViewBottom: number = docViewTop + window.outerHeight;

        const elementTop: number = element.offsetTop;
        const elementBottom: number = elementTop + element.offsetHeight;

        return ((elementBottom <= docViewBottom)) && (elementTop >= docViewTop);
    };
};  