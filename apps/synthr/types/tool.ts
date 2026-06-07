export interface Tool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  pricing: string;
  affiliateUrl: string;
  directUrl: string;
  features: string[];
  pros: string[];
  cons: string[];
  screenshot: string;
  logo: string;
  featured: boolean;
  trending: boolean;
  dateAdded: string;
}
