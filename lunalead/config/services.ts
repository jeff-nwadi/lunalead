import { 
  Globe, 
  TrendingUp, 
  Sparkles, 
  Users, 
  ShieldCheck, 
  Zap, 
  Cloud, 
  Search, 
  Building2, 
  Smartphone, 
  MessageSquare,
  LucideIcon
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  span: string;
  size: 'small' | 'medium' | 'large';
}

export const services: Service[] = [
  {
    id: "hosting",
    title: "Website Hosting",
    description: "Managed edge infrastructure optimized for sub-second performance. We handle the entire technical stack, providing an enterprise-grade foundation that ensures your digital flagship remains secure and always online.",
    icon: Globe,
    span: "md:col-span-3",
    size: "large"
  },
  {
    id: "scalable",
    title: "Scalable",
    description: "Scalability and performance are at the heart of our digital architecture. High-performance engineering, SEO, and security are integrated into every build to provide a value-engineered foundation for pet-tech founders who want to lead the market.",
    icon: TrendingUp,
    span: "md:col-span-3",
    size: "large"
  },
  {
    id: "dynamic-content",
    title: "Dynamic Content",
    description: "Automated, schema-driven content management via Headless CMS",
    icon: Sparkles,
    span: "md:col-span-2",
    size: "small"
  },
  {
    id: "maintain",
    title: "Maintain",
    description: "Regular updates and upgrades of your website",
    icon: Users,
    span: "md:col-span-2",
    size: "small"
  },
  {
    id: "security",
    title: "Security",
    description: "Website protection from unwanted visitors",
    icon: ShieldCheck,
    span: "md:col-span-2",
    size: "small"
  },
  {
    id: "seo",
    title: "SEO",
    description: "Load speed, on-page, image, and technical SEO",
    icon: TrendingUp,
    span: "md:col-span-2",
    size: "small"
  },
  {
    id: "integrations",
    title: "Integrations",
    description: "Third-party API and custom backend extensibility",
    icon: Zap,
    span: "md:col-span-2",
    size: "small"
  },
  {
    id: "backups",
    title: "Backups",
    description: "Backups of your website on a regular basis",
    icon: Cloud,
    span: "md:col-span-2",
    size: "small"
  },
  {
    id: "domain",
    title: "Domain",
    description: "Domain registration and renewals included",
    icon: Search,
    span: "md:col-span-3",
    size: "medium"
  },
  {
    id: "google-business",
    title: "Google Business",
    description: "Google Business Profile setup - great for SEO!",
    icon: Building2, 
    span: "md:col-span-3",
    size: "medium"
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    description: "Pixel perfection on whatever device your visitors are using. Your new pet business website will automatically resize and reorder to look as good as ever on desktop, laptop, tablet and mobile.",
    icon: Smartphone,
    span: "md:col-span-3",
    size: "large"
  },
  {
    id: "support",
    title: "Support",
    description: "Priority support with industry leading response times. All of our Website design plans include first-class/priority support. Our small team have over 25 years of experience to draw from for your website questions!",
    icon: MessageSquare,
    span: "md:col-span-3",
    size: "large"
  }
];
