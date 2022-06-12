export function SocialButton({children, href, className}) {
    return (
        <a href={href} className={'social-btn ' + className}>
            {children}
        </a>
    )
}