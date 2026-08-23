'use client';

import { useState } from 'react';

/**
 * OptimizedImage Component
 * 
 * Features (compatible with static export):
 * - Lazy loading (images load only when in viewport)
 * - Blur placeholder (shows while loading)
 * - Smooth fade-in animation
 * - Error handling
 * 
 * Use .webp files for best performance + fast loading
 */
export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    className,
    priority = false,
    objectFit = 'cover',
    sizes,
}) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setError(true);
        setIsLoading(false);
    };

    if (error) {
        return (
            <div
                style={{
                    width: width ? `${width}px` : '100%',
                    height: height ? `${height}px` : 'auto',
                    background: '#f0f0f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: '#999',
                    borderRadius: '4px',
                }}
                className={className}
            >
                Image not found
            </div>
        );
    }

    return (
        <div
            style={{
                position: 'relative',
                width: width ? `${width}px` : '100%',
                height: height ? `${height}px` : 'auto',
                overflow: 'hidden',
                background: '#f8f8f8',
            }}
            className={className}
        >
            {/* Blurred placeholder skeleton */}
            {isLoading && (
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)',
                        animation: 'pulse 2s infinite',
                        pointerEvents: 'none',
                    }}
                />
            )}

            {/* Main image with lazy loading */}
            <img
                src={src}
                alt={alt}
                loading={priority ? 'eager' : 'lazy'}
                onLoad={handleLoad}
                onError={handleError}
                sizes={sizes}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: objectFit,
                    opacity: isLoading ? 0.7 : 1,
                    transition: 'opacity 0.3s ease-in-out',
                    display: 'block',
                }}
            />

            <style jsx>{`
                @keyframes pulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.5; }
                    100% { opacity: 1; }
                }
            `}</style>
        </div>
    );
}
