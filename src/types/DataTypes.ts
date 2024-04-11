export interface TNews {
    img: string, 
    content: string
}

export interface TNewsBar {
    title: string, 
    active: boolean
}

export interface TBanner {
    img?: string,
    content: string,
    href: string,
    title?: string
}

export interface TNavBar {
    content: string, 
    href: string
}