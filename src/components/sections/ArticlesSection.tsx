import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Code } from "lucide-react";

interface ArticlesSectionProps {
  onNavigate: (index: number) => void;
}

const articles = [
  {
    title: "Kestra Workflow Engine",
    description: "Enhanced workflow backfill capabilities with improved error handling and performance optimizations",
    githubUrl: "https://github.com/kestra-io/kestra/pull/8624",
    website: "https://kestra.io",
    contribution: "Pull Request #8624",
    status: "Merged & Closed",
    impact: "Enhanced workflow backfill capabilities",
    color: "#4f46e5"
  },
  {
    title: "Open Source Contributions",
    description: "Active contributions to various open source projects, focusing on developer tools and utilities",
    githubUrl: "https://github.com/dhinakaranst",
    website: "https://github.com/dhinakaranst",
    contribution: "Multiple PRs",
    status: "Active Development",
    impact: "Improved developer experience and tooling",
    color: "#f89820"
  },
  // 1. OpenNest Africa
  {
    title: "OpenNest Africa",
    description: "Contributed to the OpenNest Africa open-source project by updating all placeholder and section texts across the web application to enhance clarity, accessibility, and user experience. Replaced generic content with meaningful and user-friendly text in key areas like the login form, 'Our Community' section, and CTA section. Collaborated with maintainers to revise and finalize the changes, and reverted unrelated footer modifications as per feedback.",
    githubUrl: "https://github.com/open-nest-africa/open-nest-africa/pull/88",
    website: "https://open-nest-africa.github.io/",
    contribution: "Pull Request #88",
    status: "Merged & Closed",
    impact: "Improved clarity, accessibility, and user experience across the app",
    color: "#10b981"
  },
  // 2. Spiderly 404 Page
  {
    title: "Spiderly 404 Not Found Page",
    description: "Implemented a responsive and user-friendly 404 Not Found page for an open-source project to handle invalid routes gracefully. Created a reusable NotFoundComponent using the existing homepage hero layout, with updated text, meta title, and meta description. Improved the routing configuration to display this page for unknown URLs and ensured visual consistency with the overall site design. Collaborated with the maintainer and incorporated feedback to refine and finalize the update.",
    githubUrl: "https://github.com/filiptrivan/spiderly-website/pull/6",
    website: "https://spiderly.io/",
    contribution: "Pull Request #6",
    status: "Merged & Closed",
    impact: "Improved user experience for invalid routes and enhanced site consistency",
    color: "#e11d48"
  },
  // 3. Kestra Backfill Button
  {
    title: "Kestra Backfill Executions Button",
    description: "Contributed to the Kestra open-source project by implementing a new 'Backfill Executions' button in the Triggers table (Admin section) as part of issue #8606. Added a new column to the table, tested multiple rendering strategies, and resolved a duplicate loadData method bug. Collaborated closely with maintainers, responded to feedback, and finalized the UI behavior to match design expectations.",
    githubUrl: "https://github.com/kestra-io/kestra/pull/8624",
    website: "https://kestra.io",
    contribution: "Pull Request #8624",
    status: "Merged & Closed",
    impact: "Enabled backfill executions directly from the UI, improving admin workflow",
    color: "#6366f1"
  },
  // 4. Spiderly robots.txt
  {
    title: "Spiderly robots.txt SEO",
    description: "Contributed to the project by adding a properly configured robots.txt file to improve search engine indexing and control crawler access. Allowed all web crawlers and added a sitemap reference to boost SEO visibility. Ensured correct placement in the public directory, verified file accessibility via local testing and curl, and followed SEO best practices.",
    githubUrl: "https://github.com/filiptrivan/spiderly-website/pull/9",
    website: "https://spiderly.io/robots.txt",
    contribution: "Pull Request #9",
    status: "Merged & Closed",
    impact: "Boosted SEO visibility and improved crawler access control",
    color: "#f59e42"
  },
  // 5. Kestra Sifflet Plugin
  {
    title: "Kestra Sifflet Plugin - RunRule Task",
    description: "Developed and contributed a new RunRule task to the Kestra Sifflet plugin, enabling the execution of Sifflet data quality rules directly via API. Implemented authentication, dynamic configuration, and error handling. Addressed reviewer feedback, improved test coverage, added validation, and integrated an official plugin icon. Collaborated closely with maintainers and successfully merged after comprehensive review.",
    githubUrl: "https://github.com/kestra-io/plugin-sifflet/pull/2",
    website: "https://kestra.io/plugins/sifflet/",
    contribution: "Pull Request #2",
    status: "Merged & Closed",
    impact: "Enabled direct execution of Sifflet data quality rules via API in Kestra",
    color: "#0ea5e9"
  },
];

const ArticlesSection = ({ onNavigate }: ArticlesSectionProps) => {
  return (
    <div className="min-h-screen py-20 px-6 relative">
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-slate-800/30 via-blue-900/30 to-slate-900/30"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
            Open Source
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            My contributions to open source projects and community-driven development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group"
            >
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-400">{article.contribution}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => window.open(article.githubUrl, "_blank")}
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => window.open(article.website, "_blank")}
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <Globe className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {article.description}
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: `${article.color}20`,
                      color: article.color,
                      border: `1px solid ${article.color}40`
                    }}
                  >
                    {article.status}
                  </div>
                  <div className="text-gray-400 text-sm">
                    Impact: {article.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
