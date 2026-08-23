import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from './management.module.css';
import Link from 'next/link';

const managementTeam = [
    {
        name: 'Mr. Ernest Gyau',
        role: 'Chief Executive Officer',
        image: '/pics/CEO.jpg',
        bio: 'Mr. Ernest Gyau is the Chief Executive Officer of Atwima Community Bank, bringing over sixteen (16) years of expertise in banking and financial services. A Chartered Accountant (ICAG), he holds an MBA in Finance from KNUST, a Bachelor of Commerce from UCC, and an HND in Accountancy. His vast expertise spans corporate finance, auditing, credit, and risk management. Appointed as CEO in August 2025, he is committed to driving innovation, strong governance, and expanding financial inclusion for sustainable growth.'
    },
    {
        name: 'Mrs. Salamatu Zakaria',
        role: 'Human Resource Manager',
        image: '/pics/HR.jpg',
        bio: 'Mrs. Salamatu Zakaria leads our Human Resources department with a focus on talent development and organizational excellence. With extensive experience in the community banking sector, she ensures that our team is empowered to deliver exceptional service while maintaining the highest standards of professional conduct and community-focused banking.'
    },
    {
        name: 'Mr. Clifford Awuah',
        role: 'Business Development Manager',
        image: '/pics/BDM.jpg',
        bio: 'A Chartered Certified Accountant with over 10 years of experience in banking, Mr. Awuah specializes in Audit and Assurance, Internal Controls, and Strategic Business Leadership. He is a Member of the Association of Chartered Certified Accountants (ACCA, UK) and is dedicated to identifying strategic growth opportunities that expand our impact across the region.'
    },
    {
        name: 'Mrs. Evelyn Ackah',
        role: 'Compliance Manager',
        image: '/pics/COM.jpg',
        bio: 'Mrs. Evelyn Ackah holds a Bachelor’s Degree in Business Administration (Banking and Finance) and brings 18 years of experience in medium-scale enterprise financing. With excellent analytical and problem-solving skills, she ensures that Atwima Community Bank maintains the highest regulatory standards and robust business relationships.'
    },
    {
        name: 'Mr. Frederick Arhin Bukuro',
        role: 'Operations Manager',
        image: '/pics/OPM.jpg',
        bio: 'Mr. Arhin joined the bank in 2017 and has served in several key roles, including Head of Central Accounts. A Chartered Banker specializing in Corporate Governance and Risk Management, he graduated with First Class Honors in Banking and Finance from UPSA. He is a member of the Chartered Institute of Bankers, Ghana, and leads our operational efficiency initiatives.'
    },
    {
        name: 'Mr. Samuel Donkor',
        role: 'Credit Manager',
        image: '/pics/CM.jpg',
        bio: 'Mr. Samuel Donkor holds a Master of Science in Finance from KNUST and has over six years of specialized banking experience. Known for his hard work and dedication to responsible lending, he was appointed to lead the Credit department in 2024, where he oversees our portfolio with a focus on supporting local enterprise growth.'
    },
    {
        name: 'Mr. Richard Antwi',
        role: 'Marketing Manager',
        image: '/richard.jpg',
        bio: 'Holding a BSc in Economics from the Catholic University College of Ghana, Mr. Richard Antwi has over 10 years of banking experience. Since his appointment as Marketing Manager in 2023, he has been instrumental in building the bank’s brand presence and ensuring our financial solutions are effectively communicated to our diverse customer base.'
    },
    {
        name: 'Mr. Collins Boateng Bawuah',
        role: 'IT Manager',
        image: '/pics/IT.jpg',
        bio: 'Mr. Collins Boateng Bawuah holds a degree in ICT from Data Link University and brings over 10 years of managerial experience in the community banking industry. A Microsoft Certified Systems Engineer (MCSE) and Administrator (MCSA), he specializes in Cyber Security, ensuring our digital banking infrastructure is secure, modern, and reliable.'
    }
];

const unitHeads = [
    {
        name: 'Hagar Yeboah',
        role: 'Head, CAGD Unit',
        image: '/pics/HEAD, CAGD UNIT.jpg',
        bio: 'The Head of the Controller and Accountant General’s Department (CAGD) Unit ensures seamless processing of government payroll and related financial services for our public sector clients.'
    },
    {
        name: 'James Mckeown Asare',
        role: 'Head, Digital & Innovation Unit',
        image: '/pics/HEAD, DIGITAL & INNOVATION UNIT.jpg',
        bio: 'Driving our technological advancement, the Head of Digital & Innovation oversees the deployment of our modern e-banking solutions, ensuring convenient and secure banking for all.'
    },
    {
        name: 'Patrick Ofori Amankwah',
        role: 'Recovery Manager',
        image: '/pics/RECOVERY MANAGER.jpg',
        bio: 'The Recovery Manager is responsible for maintaining the health of our loan portfolio through strategic debt recovery and effective credit risk management.'
    },
    {
        name: 'Godfred Owusu Ntiamoah',
        role: 'Susu Coordinator',
        image: '/pics/SUSU CORDINATOR.jpg',
        bio: 'Our Susu Coordinator manages our micro-savings mobilization programs, fostering financial inclusion and helping small business owners and individuals build wealth securely.'
    }
];

const branchManagers = [
    {
        name: 'Mr. Prince Afriyie',
        role: 'Foase Branch Manager (Head Office)',
        image: '/pics/FOASE BRANCH PRINCE AFRIYIE MANAGER.jpg',
        bio: 'Mr. Prince Afriyie leads our headquarters branch in Foase, bringing a wealth of experience in branch operations, customer relationship management, and local economic development.'
    },
    {
        name: 'Mr. Frank Adomako',
        role: 'Kwadaso Branch Manager',
        image: '/pics/KWADASO BRANCH MANAGER.jpg',
        bio: 'Leading our Kwadaso branch, they ensure our customers receive top-tier financial services with a deep understanding of the local market and commitment to community banking.'
    }
];

export const metadata = {
    title: 'Senior Management | Atwima Community Bank',
    description: 'Meet the dedicated leadership team driving excellence and innovation at Atwima Community Bank.',
};

export default function ManagementPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroImageWrapper}>
                        <Image 
                             src="/bod background.jpg" 
                             alt="Bank Management Header" 
                             fill 
                             className={styles.heroImg}
                             priority
                        />
                        <div className={styles.overlay}></div>
                    </div>
                    <div className={styles.heroContent}>
                        <h1 className={styles.title}>Senior Management</h1>
                        <p className={styles.subtitle}>
                            A centralized spine of leadership, unified by a shared vision for community prosperity.
                        </p>
                    </div>
                    <div className={styles.sectionDivider}></div>
                </section>

                {/* Timeline Section */}
                <section className={styles.timelineSection}>
                    <div className={styles.timelineContainer}>
                        {/* The Central Spine */}
                        <div className={styles.spine}></div>

                        <div className={styles.teamRows}>
                            {managementTeam.map((member, i) => (
                                <div 
                                    key={member.name} 
                                    className={`${styles.row} ${i % 2 === 0 ? styles.left : styles.right}`}
                                >
                                    {/* The Dot/Node on the Spine */}
                                    <div className={styles.node}>
                                        <div className={styles.nodeInner}></div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={styles.contentWrapper}>
                                        <div className={styles.imageBox}>
                                            <Image 
                                                src={member.image} 
                                                alt={member.name} 
                                                width={400} 
                                                height={500} 
                                                className={styles.memberImg}
                                            />
                                            <div className={styles.imageShadow}></div>
                                        </div>
                                        <div className={styles.infoBox}>
                                            <h3 className={styles.memberName}>{member.name}</h3>
                                            <p className={styles.memberRole}>{member.role}</p>
                                            <div className={styles.lineDivider}></div>
                                            <p className={styles.memberBio}>{member.bio}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Unit Heads Section */}
                <section className={`${styles.secondarySection} ${styles.whiteBg}`}>
                    <div className={styles.secondaryContainer}>
                        <h2 className={styles.sectionTitle}>Operational Leadership & Unit Heads</h2>
                        <div className={styles.grid}>
                            {unitHeads.map((member) => (
                                <div key={member.name} className={styles.gridCard}>
                                    <div className={styles.gridImageWrapper}>
                                        <Image 
                                            src={member.image} 
                                            alt={member.name} 
                                            fill
                                            className={styles.gridImage}
                                        />
                                    </div>
                                    <div className={styles.gridContent}>
                                        <h3 className={styles.gridName}>{member.name}</h3>
                                        <p className={styles.gridRole}>{member.role}</p>
                                        <p className={styles.gridBio}>{member.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Branch Leadership Section */}
                <section className={styles.secondarySection}>
                    <div className={styles.secondaryContainer}>
                        <h2 className={styles.sectionTitle}>Branch Leadership</h2>
                        <div className={styles.grid}>
                            {branchManagers.map((member) => (
                                <div key={member.name} className={styles.gridCard}>
                                    <div className={styles.gridImageWrapper}>
                                        <Image 
                                            src={member.image} 
                                            alt={member.name} 
                                            fill
                                            className={styles.gridImage}
                                        />
                                    </div>
                                    <div className={styles.gridContent}>
                                        <h3 className={styles.gridName}>{member.name}</h3>
                                        <p className={styles.gridRole}>{member.role}</p>
                                        <p className={styles.gridBio}>{member.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Closing Quote */}
                <section className={styles.footerQuote}>
                    <div className={styles.container}>
                        <div className={styles.quoteWrapper}>
                            <p>"United in leadership, committed to you."</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
