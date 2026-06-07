import articles from "@/data/articles.json";
import { Article } from "@/types/article";

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.id === slug);
}

export function getAllArticleIds(): string[] {
  return articles.map((article) => article.id);
}
