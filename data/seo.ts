export const SEO = {
  title: "Nooc 的主页",
  description: "了解关于 Nooc 的一些事",
  fillKeywords(keywords?: string[]): string[] {
    return [
      "Nooc",
      "noobnooc",
      "noocink",
      "nookinc",
      "Nook",
      "noobnook",
      "Nooc 的个人主页",
      "Nooc's World",
      "Nooc's Home",
      "个人主页",
      "Portfolio",
      "Noob Nooc",
      "Homepage",
      "Bento",
      ...(keywords ?? []),
    ];
  },
};
