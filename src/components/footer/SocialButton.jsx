export function SocialButton({children, href, className}) {
    return (
        <a href={href} className={'social-btn ' + className} target={'_blank'}>
            {children}
        </a>
    )
}