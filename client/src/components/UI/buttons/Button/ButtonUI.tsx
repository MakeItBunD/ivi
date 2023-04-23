import { ReactNode } from 'react';
import styles from './ButtonUI.module.scss';

interface ButtonUIProps {
    className: string;
    children: ReactNode;
    background: 'lightRed' | 'gray' | 'transparent';
    shape: 'large' | 'medium' | 'small' | 'square';
    onClick?: () => void;
}

function ButtonUI({ className, children, background, shape, onClick }: ButtonUIProps) {
    return (
        <>
            <button className={[styles.button, className, 'button'].join(' ')} onClick={onClick}>
                {children}
            </button>

            <style jsx>
                {`
                    .button {
                        background: ${background === 'lightRed' ? '#ea003d' : background === 'gray' ? '#1f1b2e' : 'transparent'};

                        padding: ${shape === 'large'
                            ? '10px 15px'
                            : shape === 'medium'
                            ? '10px 12px'
                            : shape === 'small'
                            ? '7px 11px'
                            : /*variant === 'square' ? */ '5px'};
                    }

                    .button:hover {
                        background: ${background === 'lightRed' ? '#e42e5f' : background === 'gray' ? '#2e2844' : 'transparent'};
                    }
                `}
            </style>
        </>
    );
}

export default ButtonUI;