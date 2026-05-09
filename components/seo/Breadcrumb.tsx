import StructuredData from "./StructuredData";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const BASE_URL = "https://fieldbase-k.jp";

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const fullItems: BreadcrumbItem[] = [
    { name: "ホーム", href: "/" },
    ...items,
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${BASE_URL}${item.href === "/" ? "" : item.href}`,
    })),
  };

  return <StructuredData data={data} />;
}
