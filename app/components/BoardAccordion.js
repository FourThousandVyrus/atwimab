'use client';
import Image from 'next/image';

const boardMembers = [
    { 
        name: 'Mr. Eric Appiah', 
        role: 'Chairman', 
        initials: 'EA', 
        avatar: '/MR. ERIC APPIAH chairman.jpg' 
    },
    { 
        name: 'Diana Adu-Danquah (ESQ)', 
        role: 'Member', 
        initials: 'DA', 
        avatar: '/DIANA ADU-DANQUAH (ESQ).jpg' 
    },
    { 
        name: 'Hon. Francisca Oteng Mensah', 
        role: 'Member', 
        initials: 'FM', 
        avatar: '/HON. FRANCISCA OTENG MENSAH.jpg' 
    },
    { 
        name: 'Mr. Boasiako Kwaku Duah', 
        role: 'Member', 
        initials: 'BD', 
        avatar: '/Mr Boasiako Kwaku Duah.jpg' 
    },
    { 
        name: 'Nana Yim Awere Ababio', 
        role: 'Member', 
        initials: 'NA', 
        avatar: '/NANA YIM AWERE ABABIO.jpg' 
    },
    { 
        name: 'Rev. Gyau Apraku', 
        role: 'Member', 
        initials: 'GA', 
        avatar: '/Rev. Gyau Apraku.jpg' 
    }
];

export default function BoardAccordion() {
    return (
        <div className="board-section">
            <div className="accordion-container" style={{ 
                display: 'flex', 
                width: '100%', 
                height: '600px', 
                gap: '0.5rem',
                margin: '4rem 0',
                overflow: 'hidden',
                transition: 'height 0.5s cubic-bezier(0.25, 1, 0.3, 1)'
            }}>
                {boardMembers.map((m, i) => (
                    <div key={i} className="accordion-item" style={{ 
                        flex: 1,
                        position: 'relative',
                        height: '100%',
                        cursor: 'pointer',
                        transition: 'all 0.7s cubic-bezier(0.25, 1, 0.3, 1)',
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        backgroundColor: '#000'
                    }}>
                        {/* Background Image with Overlay */}
                        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                            <Image 
                                src={m.avatar} 
                                alt={m.name} 
                                fill 
                                style={{ 
                                    objectFit: 'cover', 
                                    objectPosition: 'top',
                                    opacity: 0.6, 
                                    filter: 'grayscale(0.8)' 
                                }} 
                            />
                            <div style={{ 
                                position: 'absolute', 
                                inset: 0, 
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)' 
                            }} />
                        </div>

                        {/* Scanning Line Effect */}
                        <div className="scan-line" style={{
                            position: 'absolute',
                            width: '100%',
                            height: '2px',
                            background: 'var(--primary-400)',
                            opacity: 0.2,
                            top: 0,
                            boxShadow: '0 0 15px var(--primary-500)'
                        }} />

                        {/* Content Wrapper */}
                        <div style={{ 
                            position: 'absolute', 
                            inset: 0, 
                            padding: '1.5rem', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'flex-end',
                            zIndex: 10
                        }}>
                            {/* Vertical Title (Collapsed State) */}
                            <div className="collapsed-info" style={{
                                position: 'absolute',
                                top: '2rem',
                                left: '50%',
                                transform: 'translateX(-50%) rotate(-90deg)',
                                transformOrigin: 'center',
                                whiteSpace: 'nowrap',
                                color: '#fff',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                letterSpacing: '0.2em',
                                opacity: 0.8,
                                textTransform: 'uppercase'
                            }}>
                                {m.role}
                            </div>

                            {/* Expanded Info */}
                            <div className="expanded-info" style={{ 
                                opacity: 0,
                                transform: 'translateY(20px)',
                                transition: 'all 0.5s ease 0.2s'
                            }}>
                                <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, margin: 0, lineHeight: 1.1 }}>
                                    {m.name}
                                </h3>
                                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.875rem', margin: '0.5rem 0 0' }}>
                                    {m.role}
                                </p>
                                
                                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1rem' }}>
                                    <div style={{ fontSize: '0.65rem', color: 'rgba(255, 255, 255, 0.4)' }}>
                                        STATUS<br/><span style={{ color: '#4ade80' }}>● ACTIVE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .accordion-container:hover {
                    height: 660px !important;
                }
                .accordion-item:hover {
                    flex: 6 !important;
                }
                .accordion-item:hover :global(img) {
                    filter: grayscale(0) !important;
                    opacity: 1 !important;
                    transform: scale(1.05);
                }
                .accordion-item:hover .collapsed-info {
                    opacity: 0 !important;
                }
                .accordion-item:hover .expanded-info {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                }
                .accordion-item:hover .scan-line {
                    animation: scan 3s linear infinite;
                    opacity: 0.6 !important;
                }
                @keyframes scan {
                    0% { top: 0%; }
                    100% { top: 100%; }
                }
            `}</style>
        </div>
    );
}