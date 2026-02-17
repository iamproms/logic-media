import React, { useEffect, useState } from 'react';
import { ArrowRight, Video, Camera, Mic, PenTool, Layout, MonitorSmartphone, Heart, Users, CheckCircle, Zap, Shield, Target, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

// Import images
import heroImg from '../assets/images/about/DSC_3820.webp';
import teamImg1 from '../assets/images/about/DSC_6352.webp';
import teamImg2 from '../assets/images/about/DSC_6615.webp';

const SectionHeader = ({ title, subtitle, className = "" }) => (
    <div className={`text-center mb-16 ${className}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">{title}</h2>
        {subtitle && <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{subtitle}</p>}
    </div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="group bg-card p-8 rounded-2xl border border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        {description && <p className="text-muted-foreground leading-relaxed">{description}</p>}
    </div>
);

const ValueCard = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border/40 hover:border-primary/30 transition-all hover:shadow-md">
        <div className="bg-background p-4 rounded-full shadow-sm mb-5 text-primary ring-1 ring-border/50">
            <Icon size={32} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground font-medium">{description}</p>
    </div>
);

const LeadershipCard = ({ name, role, img }) => (
    <div className="flex flex-col items-center text-center group">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-5 border-4 border-background shadow-lg group-hover:border-primary transition-colors bg-muted relative">
            {img ? (
                <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
            ) : (
                <div className="w-full h-full bg-secondary flex items-center justify-center text-secondary-foreground text-3xl font-bold">
                    {name.charAt(0)}
                </div>
            )}
        </div>
        <h3 className="font-bold text-xl text-foreground mb-1">{name}</h3>
        <p className="text-base text-primary font-semibold">{role}</p>
    </div>
);


const About = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full overflow-hidden bg-background text-foreground">
            {/* 1. Hero Section - REDESIGNED */}
            <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
                {/* Background Image with animated zoom effect if we could, but verified Constraints say no heavy animation lib. 
            So standard CSS transition implies we stick to simple classes. */}
                <div className="absolute inset-0 z-0 select-none">
                    <img
                        src={heroImg}
                        alt="LOGIC Studios Team"
                        className="w-full h-full object-cover object-center scale-105" // Slight scale to avoid whitespace on certain ratios
                        fetchpriority="high"
                    />
                    {/* Advanced Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-black/60 to-black/30" />
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 container px-4 flex flex-col items-center text-center mt-[-5vh]">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground font-medium text-sm mb-6 backdrop-blur-sm animate-fade-in-up">
                        Established 2024
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 text-white tracking-tight drop-shadow-2xl max-w-5xl leading-[1.1]">
                        Telling the Story of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Grace.</span>
                    </h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-100 font-medium leading-relaxed drop-shadow-md mb-10 opacity-90">
                        Logic Media communicates the Gospel through creative, excellent, and purpose-driven media.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="text-lg px-8 h-14 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105">
                            <Link to="/media-recruitment">Join the Team</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="text-lg px-8 h-14 rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white backdrop-blur-md transition-all">
                            Explore Our Work
                        </Button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
                    <ChevronDown size={32} />
                </div>
            </section>

            {/* 2. Mission & Goal Section */}
            <section className="py-24 bg-background container px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground flex items-center gap-3">
                                <Target className="text-primary w-8 h-8 md:w-10 md:h-10" />
                                Our Mission
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                To preach the Gospel of Grace to our generation by the help of the Holy Spirit—empowering and impacting people to flourish in every area of their lives—through intentional, high-quality media.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground flex items-center gap-3">
                                <CheckCircle className="text-primary w-8 h-8 md:w-10 md:h-10" />
                                Our Goal
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                To share the Gospel globally by curating, creating, and distributing compelling content across multiple media platforms.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Capturing the essence of the Church",
                                    "Telling compelling stories",
                                    "Amplifying the message of God’s Grace",
                                    "Translating content into clear calls to action"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 border border-border/50">
                                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                                        <span className="text-foreground font-medium text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2 ring-1 ring-border/20">
                        <img
                            src={teamImg1}
                            alt="Team collaboration"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* 3. What We Do Section */}
            <section className="py-24 bg-muted/30 border-y border-border/50">
                <div className="container px-4">
                    <SectionHeader
                        title="What We Do"
                        subtitle="A supplying joint supporting services, events, and ministry initiatives through structured media operations."
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={Video}
                            title="Videography"
                            description="Professional production for services and events, capturing moments with excellence."
                        />
                        <FeatureCard
                            icon={MonitorSmartphone}
                            title="Multimedia & Livestream"
                            description="Ensuring the message reaches beyond walls through digital broadcasting and media integration."
                        />
                        <FeatureCard
                            icon={Layout}
                            title="Graphic Design & C.O.P"
                            description="Visual communication, branding, and Company of Publishers."
                        />
                        <FeatureCard
                            icon={Mic}
                            title="Sound & Audio"
                            description="Sonic excellence for worship and preaching, creating distraction-free environments."
                        />
                        <FeatureCard
                            icon={PenTool}
                            title="Written Content & Ideation"
                            description="Strategic ideation, concept development, and clear digital communication."
                        />
                        <FeatureCard
                            icon={Camera}
                            title="Photography"
                            description="Visual storytelling capturing the life, emotion, and key moments of the church."
                        />
                    </div>
                </div>
            </section>

            {/* 4. Values Section */}
            <section className="py-24 bg-background container px-4">
                <SectionHeader
                    title="Our Core Values"
                    subtitle="Everything we do is anchored in these foundational principles."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <ValueCard icon={Heart} title="Passion" description="Serving God with enthusiasm and excellence" />
                    <ValueCard icon={Users} title="Teamwork" description="Functioning as one body with many parts" />
                    <ValueCard icon={Shield} title="Consistency" description="Showing up faithfully and reliably" />
                    <ValueCard icon={Zap} title="Creativity" description="Communicating timeless truth in fresh ways" />
                    <ValueCard icon={CheckCircle} title="Commitment" description="Taking responsibility for our service" />
                    <ValueCard icon={Heart} title="Love" description="The foundation of our service and communication" />
                </div>
            </section>

            {/* 5. Service Culture Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={teamImg2} alt="Service Culture" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
                </div>

                <div className="relative z-10 container px-4 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl font-extrabold mb-10 text-foreground">Service Culture & Expectations</h2>
                    <div className="space-y-8 bg-card/50 backdrop-blur-md p-10 rounded-3xl border border-border/50 shadow-xl">
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                            Members of LOGIC Studios PH are expected to serve with spiritual grounding, responsibility, excellence, and a willingness to grow.
                        </p>
                        <div className="h-px w-24 bg-primary mx-auto opacity-50" />
                        <p className="font-bold text-foreground text-2xl md:text-3xl leading-tight">
                            "Service in the media department is both spiritual and practical — we serve God by serving His people with integrity, discipline, and love."
                        </p>
                    </div>
                </div>
            </section>

            {/* 6. Meet the Leadership */}
            <section className="py-24 bg-muted/30 border-y border-border/50">
                <div className="container px-4">
                    <SectionHeader
                        title="Meet the Media Leadership"
                        subtitle="Operating under a structured leadership system to ensure excellence, accountability, and consistency."
                    />

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 justify-items-center max-w-6xl mx-auto">
                        {/* Placeholder Avatars */}
                        <LeadershipCard name="Name Here" role="Media Director" />
                        <LeadershipCard name="Name Here" role="Videography Lead" />
                        <LeadershipCard name="Name Here" role="Photography Lead" />
                        <LeadershipCard name="Name Here" role="Content Lead" />
                        <LeadershipCard name="Name Here" role="Sound Lead" />
                        <LeadershipCard name="Name Here" role="Design Lead" />
                        <LeadershipCard name="Name Here" role="Production Lead" />
                        <LeadershipCard name="Name Here" role="Creative Lead" />
                    </div>
                </div>
            </section>

            {/* 7. Join the Team CTA */}
            <section className="py-32 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-primary z-0">
                    {/* Abstract pattern or simple solid color */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                </div>

                <div className="relative z-10 container px-4 text-center text-primary-foreground">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Ready to Serve?</h2>
                    <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                        We welcome individuals who are passionate about media, ministry, and excellence. Join us in telling the greatest story ever told.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button size="lg" variant="secondary" asChild className="font-bold text-lg h-16 px-10 rounded-full shadow-2xl hover:scale-105 transition-transform text-primary bg-background hover:bg-background/90">
                            <Link to="/media-recruitment">
                                Apply Now
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
