import styles from '@/styles/components/UI/ButtonRedUI.module.scss'

interface ButtonRedUIProps {
    className: string
    children: React.ReactNode
}

function ButtonRedUI({className, children}: ButtonRedUIProps) {
    return (
        <button 
            onClick={() => ''}
            className={[styles.button, className].join(' ')}>
            {children}
        </button>
    )
}

export default ButtonRedUI