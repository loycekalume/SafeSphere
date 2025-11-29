import React, { useState } from 'react';
import '../styles/resources.css';

// --- Resource Data Array (Derived from design images R1-R7) ---
const resourcesData = [
    { id: 1, type: 'article', icon: 'book', title: 'Red Flags in Relationships', subtitle: 'Learn to identify warning signs of abuse early', duration: '8 min read', categories: ['Prevention Tips', 'Emotional Wellness'], tags: ['Emotional', 'Physical', 'Warning Signs'] },
    { id: 2, type: 'guide', icon: 'document', title: 'Safe Texting & Messaging', subtitle: 'Protect your digital communications from surveillance', duration: '12 min read', categories: ['Digital Safety'], tags: ['Privacy', 'Security', 'Apps'] },
    { id: 3, type: 'guide', icon: 'people', title: 'Building Your Support Network', subtitle: 'Create a circle of trusted people for safety', duration: '10 min read', categories: ['Emotional Wellness'], tags: ['Support', 'Trust', 'Community'] },
    { id: 4, type: 'article', icon: 'document', title: 'Workplace Harassment Response Guide', subtitle: 'Know your rights and how to respond professionally', duration: '15 min read', categories: ['Workplace Safety'], tags: ['Rights', 'Reporting', 'Documentation'] },
    { id: 5, type: 'video', icon: 'video', title: 'Recognizing Online Abuse & Cyberbullying', subtitle: 'Understand digital harassment and take action', duration: '5 min', categories: ['Digital Safety', 'For Teens'], tags: ['Online Safety', 'Screenshots', 'Reporting'] },
    { id: 6, type: 'guide', icon: 'heart', title: 'Emotional Recovery After Trauma', subtitle: 'Self-care strategies and healing practices', duration: '14 min read', categories: ['Emotional Wellness'], tags: ['Recovery', 'Healing', 'Mental Health'] },
    { id: 7, type: 'article', icon: 'book', title: 'Safety Planning for Teens', subtitle: 'Age-appropriate strategies for young people', duration: '9 min read', categories: ['For Teens'], tags: ['Dating Safety', 'Friends', 'Boundaries'] },
    { id: 8, type: 'guide', icon: 'document', title: 'Financial Independence & Security', subtitle: 'Build financial safety and independence', duration: '11 min read', categories: ['Workplace Safety'], tags: ['Financial', 'Independence', 'Safety'] },
    { id: 9, type: 'course', icon: 'video', title: 'Professional Training: Recognizing GBV', subtitle: 'For healthcare, legal, and social workers', duration: '2 hours', categories: ['For Professionals'], tags: ['Training', 'Recognition', 'Response'] },
    { id: 10, type: 'checklist', icon: 'check', title: 'Digital Privacy Check-up', subtitle: 'Step-by-step guide to secure your accounts', duration: '6 min', categories: ['Digital Safety'], tags: ['Passwords', 'Privacy', 'Security'] },
    { id: 11, type: 'guide', icon: 'heart', title: 'Creating Safe Relationships', subtitle: 'Healthy communication and boundaries', duration: '13 min read', categories: ['Emotional Wellness'], tags: ['Communication', 'Boundaries', 'Health'] },
    { id: 12, type: 'article', icon: 'people', title: 'Supporting a Friend in Abusive Situation', subtitle: 'How to help without overstepping', duration: '10 min read', categories: ['Prevention Tips'], tags: ['Support', 'Compassion', 'Boundaries'] },
];

const categories = ["All Resources", "Prevention Tips", "Digital Safety", "Emotional Wellness", "Workplace Safety", "For Teens", "For Professionals"];


// Helper component for the resource card structure
const ResourceCard = ({ resource }) => {
    return (
        <div className="resource-card">
            <div className="card-header">
                <span className={`resource-tag ${resource.type}`}>
                    {/* Placeholder Icons based on design visualization */}
                    {resource.type === 'course' && '📹'}
                    {resource.type === 'checklist' && '✅'}
                    {resource.type === 'guide' && '💚'}
                    {resource.type === 'article' && '📰'}
                    {resource.type}
                </span>
            </div>
            
            <h3 className="card-title">{resource.title}</h3>
            <p className="card-subtitle">{resource.subtitle}</p>

            <div className="card-tags">
                {resource.tags.map(tag => (
                    <span key={tag} className="resource-topic-tag">{tag}</span>
                ))}
            </div>

            <p className="card-duration">{resource.duration}</p>
            
            <button className="view-resource-button">View Resource</button>
        </div>
    );
};


const ResourcesPage = () => {
    const [activeCategory, setActiveCategory] = useState("All Resources");

    const filteredResources = activeCategory === "All Resources"
        ? resourcesData
        : resourcesData.filter(resource => resource.categories.includes(activeCategory));
    
    const resourceCount = filteredResources.length;

    return (
        <div className="resources-page-container">
            <div className="back-home-link">
                <a href="/">← Back Home</a>
            </div>

            <header className="page-header">
                <h1>Learn & Prevent</h1>
                <p>Comprehensive resources on preventing gender-based violence and promoting safety</p>
            </header>
            
            <h4 className="filter-label">FILTER BY CATEGORY</h4>

            <section className="filter-tabs">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </section>
            
            <p className="resource-count">Showing {resourceCount} resources</p>

            <section className="resources-grid">
                {filteredResources.map(resource => (
                    <ResourceCard key={resource.id} resource={resource} />
                ))}
            </section>
        </div>
    );
};

export default ResourcesPage;