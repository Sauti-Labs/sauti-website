// content/navigation.ts

export type NavLink = { href: string; label: string; exact?: boolean };
export type NavGroup = { id: string; label: string; items: NavLink[] };

/**
 * Primary call to action for Sauti Cloud.
 * If no destination is configured, the button is not rendered.
 */
export const cta = {
    label: "Try Sauti Cloud",
    href: "/cloud",
    external: false,
};

export const homeLink: NavLink = { href: "/", label: "Home", exact: true };

export const navGroups: NavGroup[] = [
    {
        id: "research",
        label: "Research",
        items: [
            { href: "/research", label: "Overview", exact: true },
            { href: "/research/speech-intelligence", label: "Speech Intelligence" },
            { href: "/research/language-intelligence", label: "Language Intelligence" },
            { href: "/research/language-resources", label: "Language Resources" },
            { href: "/research/model-intelligence", label: "Model Intelligence" },
            { href: "/research/responsible-ai", label: "Responsible AI" },
        ],
    },
    {
        id: "commitments",
        label: "Commitments",
        items: [
            { href: "/commitments/responsible-ai", label: "Responsible AI" },
            { href: "/commitments/privacy", label: "Privacy and Data Protection" },
            { href: "/commitments/security", label: "Security" },
            { href: "/commitments/data-governance", label: "Data and Research Governance" },
            { href: "/commitments/code-of-conduct", label: "Code of Conduct" },
        ],
    },
    {
        id: "company",
        label: "Company",
        items: [
            { href: "/about", label: "About" },
            { href: "/company/leadership", label: "Leadership" },
            { href: "/company/careers", label: "Careers" },
        ],
    },
];

export const newsLink: NavLink = { href: "/news", label: "News" };
