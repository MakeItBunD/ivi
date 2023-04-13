import styles from '@/styles/components/UI/LinkUI.module.scss'
import Link from 'next/link'

interface LinkUIProps {
    className: string
    href: string
    children: React.ReactNode
}

function LinkUI({className, href, children}: LinkUIProps) {
    return (
        <Link 
            href={href} 
            className={[styles.link, className].join(' ')}>
            {children}
        </Link>
    )
}

export default LinkUI