import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [delay]);

    return (
        <div
            ref={elementRef}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
