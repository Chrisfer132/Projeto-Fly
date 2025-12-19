import flecha from '../../assets/icons/Flecha-azul.svg';

export const Link = ({ children, href, className, img = flecha }) => {
    return (
        <a className={` text-white inline-flex items-center gap-5 px-8 rounded-full font-bold  w-373px ${className}`} href={href}>{children} <img src={img} alt="Seta" /></a>
    )
}