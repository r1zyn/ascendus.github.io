export class Util {
    static elementIsInView(element: HTMLElement): boolean {
        const docViewTop: number = $(window).scrollTop() as number;
        const docViewBottom: number = (docViewTop as number) + ($(window).height() as number);

        const elementTop: number = $(element).offset()?.top as number;
        const elementBottom: number = (elementTop as number) + ($(element).height() as number);

        return ((elementBottom <= docViewBottom)) && (elementTop >= docViewTop);
    };
};